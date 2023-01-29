const axios = require('axios');
const { MongoClient } = require("mongodb");
// Connection URI
const mongoUri = "mongodb+srv://admin:" + process.env.MONGO_ADMIN_PW + "@cluster0.cg6nz.mongodb.net/test";
// Create a new MongoClient
const client = new MongoClient(mongoUri);

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
function genDataObj({ ...dataArgs }) {
    let dataObj = JSON.stringify({
        collection: "chronicle",
        database: "marxdb",
        dataSource: process.env.MONGO_CLUSTER_NAME,
        ...dataArgs
    });
    return dataObj;
}

function addMonthday(rowData: any) {
    // Compute a monthday field
    rowData.monthday = (rowData.month_start || "") + " " + (rowData.day_start || "")
    rowData.ymd = rowData.year + " " + rowData.monthday;
    return rowData;
}

export async function getEventCount() {
    let pipeline = [{ $count: "count" }];
    let data = genDataObj({ 'pipeline': pipeline });
    let config = genConfig(data, "aggregate");
    let result = await axios(config);
    return result?.data?.documents[0]?.count;
}

export async function getEventPageTotal() {
    let pipeline = [{ $count: "count" }];
    
    let data = genDataObj({'pipeline': pipeline});
    let config = genConfig(data, "aggregate");
    let result = await axios(config);
    return result?.data?.documents[0]?.count;
}

export async function getEventPage(perPage: number, pageNum: number) {
    //console.log(process.env);
    let start = perPage * pageNum;
    let end = start + perPage;
    // We want to skip max(0, start-1) pages
    let numToSkip = Math.max(start - 1, 0);
    let dataOptions = {
        skip: numToSkip,
        limit: perPage,
        sort: { 'entry_id_clean': 1 },
    }
    let data = genDataObj(dataOptions);
    let config = genConfig(data, "find");
    let entries = await axios(config);
    for (var i=0; i < entries.data.documents.length; i++) {
        let rowData = entries.data.documents[i];
        // Compute a monthday field
        let curMonthday = (rowData.month_start || "") + " " + (rowData.day_start || "")
        let curYmd = rowData.year + " " + curMonthday;
        entries.data.documents[i].monthday = curMonthday;
        entries.data.documents[i].ymd = curYmd;
    }
    let totalFound = await getEventPageTotal();
    return {
        showCount: entries?.data?.documents?.length,
        totalCount: totalFound,
        documents: entries?.data?.documents
    };
}

export async function getEvent(chronCode: string) {
    let dataOptions = {
        filter: { 'entry_id_clean': { '$eq': chronCode } }
    }
    let data = genDataObj(dataOptions);
    let config = genConfig(data, "findOne");
    let entries = await axios(config);
    console.log("[getEvent] entries = " + Object.keys(entries.data));
    let docResult = entries?.data?.document;
    console.log("[getEvent] returning " + docResult);
    docResult = addMonthday(docResult);
    return docResult;
}

export async function searchEvents(query: string) {
    await client.connect();
    const coll = client.db("marxdb").collection("chronicle");
    //const mongoQuery = { $text: { '$search': "Paris" } };
    const mongoQuery = { $text: {'$search': query }};
    console.log("mongoQuery: " + JSON.stringify(mongoQuery));
    // Establish and verify connection
    //const result = await client.db("admin").command({ ping: 1 });
    //console.log("result: " + JSON.stringify(result));
    // Ensures that the client will close when you finish/error
    //const blankResult = await db.collection("chronicle").find({}).count();
    //console.log("blankResult: " + blankResult);
    const projection = {
        _id: 1,
        text: 1,
    };
    let cursorFull = coll.find(mongoQuery);
    let totalCount = await cursorFull.count();
    const limit = 10;
    const sort = {
        'entry_id': 1
    };
    let cursorLimited = coll.find(mongoQuery, { sort, limit });
    let results = await cursorLimited.toArray();
    //console.log("[getEvent] results = " + JSON.stringify(results));
    //console.log("[getEvent] entries = " + Object.keys(entries.data));
    //docResult = addMonthday(docResult);
    await client.close();
    //return docResult;
    return {
        documents: results,
        showCount: limit,
        totalCount: totalCount
    };
}