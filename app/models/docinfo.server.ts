const axios = require('axios');
const whichDB = process.env.WHICH_DB;
const whichFulltext = process.env.WHICH_FULLTEXT;
// Airtable
const Airtable = require('airtable');
const atBaseKey = "appnZn2NYRxLtEvsT";
const atBase = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(atBaseKey);
const regBaseName = "M00_Register";
// GDrive
const fs = require('fs').promises;
const { authenticate } = require('@google-cloud/local-auth');
const { google } = require('googleapis');
const path = require('path');

function getSectionEntryNum(auth: string) {
  // Sigh, it's hackish but best I can do for now
  if (auth === "engels") {
    return 0;
  } else if (auth === "marx") {
    return 961;
  } else if (auth === "me") {
    return 1982;
  } else {
    return 2174;
  }
}

function genConfig(data: any, action: string) {
  return {
    method: "post",
    url: process.env.MONGO_API_BASE_URL + "/action/" + action,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": process.env.MONGO_API_KEY
    },
    data
  };
}

// Test code for spread (...) operator:
// https://replit.com/@jpowerj/IllustriousMeekLaw#index.ts
function genDataObj({...dataArgs}) {
  let dataObj = JSON.stringify({
    collection: "register",
    database: "marxdb",
    dataSource: process.env.MONGO_CLUSTER_NAME,
    ...dataArgs
  });
  return dataObj;
}

export async function getDocinfoCountMongo() {
  let pipeline = [{ $count: "count" }];
  let data = genDataObj({'pipeline': pipeline});
  let config = genConfig(data, "aggregate");
  let result = await axios(config);
  return result?.data?.documents[0]?.count;
}

export async function getDocinfoCountAirtable() {
  let result = await atBase(regBaseName).select({
    view: 'all_grid',
    fields: []
  }).all();
  return result.length;
}

export async function getDocinfoCount() {
  if (whichDB === "airtable") {
    return getDocinfoCountAirtable();
  } else {
    return getDocinfoCountMongo();
  }
}

export async function getDocinfoListItems({ request }: { request: any }) {
  //let pipeline = [{ $limit: 100 }];
  // https://www.mongodb.com/docs/atlas/api/data-api-resources/
  //console.log(request);
  let dataOptions = {'limit': 10, 'sort': 'ent_id'};
  let data = genDataObj(dataOptions);
  let config = genConfig(data, "find");
  let entries = await axios(config);
  let totalFound = await getDocinfoCount();
  return {
    showCount: entries?.data?.documents?.length,
    totalCount: totalFound,
    documents: entries?.data?.documents
  };
}

export async function getDocinfoPageTotal(filterOptions: any) {
  let dataOptions = {
    sort: {'ent_id': 1},
    filter: filterOptions
  };
  let data = genDataObj(dataOptions);
  let config = genConfig(data, "find");
  let entries = await axios(config);
  return entries?.data?.documents?.length;
}

export async function getDocinfoPageTotalAirtable(regSection: string) {
  let filterFormula = "{reg_section} = '" + regSection + "'"
  //console.log("Getting airtable count with formula:");
  //console.log(filterFormula);
  let result = await atBase(regBaseName).select({
    view: 'all_grid',
    fields: [],
    filterByFormula: filterFormula
  }).all();
  return result.length;
}

let regSectionDict: { [key: string]: string } = {
  "marx": "M",
  "engels": "E",
  "me": "ME",
  "st": "ST",
}
function authNameToRegSection(authName: string): string {
  // Special case for ST
  return regSectionDict[authName];
}

let airtableData: {[key: string]: any} = {};
let airtableTotals: {[key: string]: number} = {};
export async function getDocinfoPageAirtable(
  authName: string, perPage: number, pageNum: number
) {
  console.log("[docinfo.server] authName=" + authName + " perPage=" + perPage + " pageNum=" + pageNum);
  let gridName = authNameToRegSection(authName).toLowerCase();
  if (gridName in airtableData) {
    console.log("Using cached data");
    // Use cached data
    let gridData = airtableData[gridName];
    let resultsFields = gridData.map((x: any) => x.fields);
    let totalFound = airtableTotals[gridName];
    // Now return the range requested
    let startIndex = pageNum * perPage;
    let endIndex = (pageNum + 1) * perPage;
    let requestedData = resultsFields.slice(startIndex, endIndex);
    return {
      showCount: gridData.length,
      totalCount: totalFound,
      documents: requestedData
    };
  } else {
    // For debugging
    //perPage = 100;
    let authView = gridName + "_grid";
    let results = await atBase(regBaseName).select({
      view: authView,
      //filterByFormula: "{entry_num} >= " + startEntryNum,
      //maxRecords: perPage
    }).all();
    //console.log("[docinfo.server] " + Object.getOwnPropertyNames(results));
    airtableData[gridName] = results;
    // But, we need to extract just the "fields" attribute from each
    let resultsFields = results.map((x: any) => x.fields);
    let regSection = authNameToRegSection(authName);
    let totalFound = await getDocinfoPageTotalAirtable(regSection);
    airtableTotals[gridName] = totalFound;
    // Now save the full data to the cache, and only return the current
    // page for now
    let startIndex = pageNum * perPage;
    let endIndex = (pageNum + 1) * perPage;
    let requestedData = resultsFields.slice(startIndex, endIndex);
    return {
      showCount: results.length,
      totalCount: totalFound,
      documents: requestedData
    };
  }
}

export async function getDocinfoPageMongo(authName: string, perPage: number, pageNum: number) {
  //console.log(process.env);
  let start = perPage * pageNum;
  let end = start + perPage;
  // We want to skip max(0, start-1) pages
  let numToSkip = Math.max(start-1, 0);
  let cancelledFilter = {'cancelled': {'$ne': true}};
  // Special case for ST
  let rsFilter = {};
  if (authName === "st") {
    rsFilter = {'reg_section': { '$regex': 'ST' } };
  } else {
    let regSection = authNameToRegSection(authName);
    rsFilter = { 'reg_section': { '$eq': regSection } };
  }
  let filterOptions = { ...cancelledFilter, ...rsFilter };
  let dataOptions = {
    skip: numToSkip,
    limit: perPage,
    sort: { 'ent_id': 1 },
    filter: filterOptions
  }
  let data = genDataObj(dataOptions);
  let config = genConfig(data, "find");
  let entries = await axios(config);
  let totalFound = await getDocinfoPageTotal(filterOptions);
  return {
    showCount: entries?.data?.documents?.length,
    totalCount: totalFound,
    documents: entries?.data?.documents
  };
}

export async function getDocinfoPage(authName: string, perPage: number, pageNum: number) {
  if (whichDB === "airtable") {
    //console.log(process.env.WHICH_DB);
    //console.log("Getting page via airtable");
    return getDocinfoPageAirtable(authName, perPage, pageNum);
  } else {
    return getDocinfoPageMongo(authName, perPage, pageNum);
  }
}

// Getting a single item's info

export async function getDocinfoMongo(regCode: string) {
  let dataOptions = {
    filter: { 'ent_id': { '$eq': regCode } }
  }
  let data = genDataObj(dataOptions);
  let config = genConfig(data, "findOne");
  let entries = await axios(config);
  console.log("[getDocinfo] entries = " + Object.keys(entries.data));
  let docResult = entries?.data?.document;
  console.log("[getDocinfo] returning " + docResult);
  return docResult;
}

export async function getDocinfoAirtable(regCode: string) {
  console.log("[getDocInfoAirtable()]");
  let result = await atBase(regBaseName).select({
    view: 'all_grid',
    filterByFormula: "{entry_id} = '" + regCode + "'"
  }).all();
  return result[0].fields;
}

export async function getDocinfo(regCode: string) {
  if (whichDB === "mongo") {
    return getDocinfoMongo(regCode);
  } else {
    return getDocinfoAirtable(regCode);
  }
}

/////
// GDRIVE
/////

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = path.join(process.cwd(), 'gdrive', 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'gdrive', 'credentials.json');

/**
 * Serializes credentials to a file comptible with GoogleAUth.fromJSON.
 *
 * @param {OAuth2Client} client
 * @return {Promise<void>}
 */
async function saveCredentials(client: any) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
}

/**
 * Load or request or authorization to call APIs.
 *
 */
async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}

/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 */
async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
}

/**
 * Lists the names and IDs of up to 10 files.
 * @param {OAuth2Client} authClient An authorized OAuth2 client.
 */
export async function getGDriveFile(authClient: any, fileId: string) {
  const drive = google.drive({ version: 'v3', auth: authClient });
  const meta = await drive.files.get({
    fileId: fileId,
    fields: "name"
  });
  //console.log("meta");
  //console.log(meta.data.name);
  const filename = meta.data.name;
  const res = await drive.files.get({
    fileId: fileId,
    alt: "media"
  })
  //console.log("res.data");
  //console.log(res.data);
  return {
    filename: filename,
    fulltext: res.data
  }
}

export async function getFulltextDrive(regCode: string) {
  // First get the drive_id from mongo
  let mongoDoc = await getFulltextMongo(regCode);
  let driveId = mongoDoc.drive_id;
  // And now get the text for that drive_id from gdrive
  let client = await authorize();
  let fulltextData = await getGDriveFile(client, driveId);
  return {
    entry_id: mongoDoc.ent_id,
    title: mongoDoc.title,
    fulltext_filename: fulltextData.filename,
    drive_id: driveId,
    fulltext: fulltextData.fulltext
  }
}

export async function getFulltextMongo(regCode: string) {
  let dataOptions = {
    filter: { 'ent_id': { '$eq': regCode } },
    projection: {
      'fulltext': 1,
      'fulltext_filename': 1,
      'drive_id': 1,
      'ent_id': 1,
      'title': 1 }
  }
  let data = genDataObj(dataOptions);
  let config = genConfig(data, "findOne");
  let entry = await axios(config);
  let docResult = entry?.data?.document;
  console.log("[getFulltext()] " + docResult);
  return docResult;
}

export async function getFulltext(regCode: string) {
  if (whichFulltext === "mongo") {
    return getFulltextMongo(regCode);
  } else {
    return getFulltextDrive(regCode);
  }
}
