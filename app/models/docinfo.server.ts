const axios = require('axios');

/*

List of all keys:
0,"source"
1,"reprint"
2,"full_text"
3,"day_manual"
4,"num_chron_refs"
5,"lang_orig"
6,"any_date"
7,"writing_start_month"
8,"written"
9,"dubious"
10,"dated_day"
11,"type"
12,"cancelled"
13,"reg_section"
14,"posthumous"
15,"published"
16,"_id"
17,"ent_num"
18,"dated"
19,"french_title"
20,"scraped"
21,"month_combined"
22,"more_info"
23,"english_title"
24,"month_manual"
25,"spanish_title"
26,"pub_day"
27,"year_manual"
28,"writing_start_day"
29,"writing_end_day"
30,"writing_end_month"
31,"writing_end_year"
32,"notes"
33,"writing_end_approx"
34,"Chronicle_OCR"
35,"auth"
36,"translation"
37,"dated_month"
38,"day_combined"
39,"dated_year"
40,"pub_month"
41,"pub_year"
42,"writing_start_year"
43,"title"
44,"ent_id"
45,"Misc_Txt_Index"
46,"writing_start_approx"
47,"link"
48,"german_title"
49,"M_involved"
50,"year_combined"
51,"chron_refs"
52,"sampled"
*/

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

export async function getDocinfoCount() {
  let pipeline = [{ $count: "count" }];

  let data = genDataObj({'pipeline': pipeline});

  let config = genConfig(data, "aggregate");
  let result = await axios(config);
  return result?.data?.documents[0]?.count;
}

export async function getDocinfoListItems({ request }: { request: any }) {
  //let pipeline = [{ $limit: 100 }];
  // https://www.mongodb.com/docs/atlas/api/data-api-resources/
  console.log(request);

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

export async function getDocinfoPage(authName: string, perPage: number, pageNum: number) {
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

// Getting a single item's info

export async function getDocinfo(regCode: string) {
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

export async function getFulltext(regCode: string) {
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
