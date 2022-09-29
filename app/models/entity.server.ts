const axios = require('axios');

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
        collection: "glossary",
        database: "marxdb",
        dataSource: process.env.MONGO_CLUSTER_NAME,
        ...dataArgs
    });
    return dataObj;
}

export async function getEntityCount() {
    let pipeline = [{ $count: "count" }];
    let data = genDataObj({ 'pipeline': pipeline });
    let config = genConfig(data, "aggregate");
    let result = await axios(config);
    return result?.data?.documents[0]?.count;
}

export async function getEntityPageTotal() {
    let pipeline = [{ $count: "count" }];
    let data = genDataObj({ 'pipeline': pipeline });
    let config = genConfig(data, "aggregate");
    let result = await axios(config);
    return result?.data?.documents[0]?.count;
}

export async function getEntityPage(perPage: number, pageNum: number) {
    //console.log(process.env);
    let start = perPage * pageNum;
    let end = start + perPage;
    // We want to skip max(0, start-1) pages
    let numToSkip = Math.max(start - 1, 0);
    let dataOptions = {
        skip: numToSkip,
        limit: perPage,
        sort: { 'id': 1 },
    }
    let data = genDataObj(dataOptions);
    let config = genConfig(data, "find");
    let entries = await axios(config);
    let totalFound = await getEntityPageTotal();
    return {
        showCount: entries?.data?.documents?.length,
        totalCount: totalFound,
        documents: entries?.data?.documents
    };
}

export async function getEntity(entCode: string) {
    let dataOptions = {
        filter: { 'id': { '$eq': entCode } }
    }
    let data = genDataObj(dataOptions);
    let config = genConfig(data, "findOne");
    let entries = await axios(config);
    console.log("[getEntity] entries = " + Object.keys(entries.data));
    let docResult = entries?.data?.document;
    console.log("[getEntity] returning " + docResult);
    return docResult;
}
