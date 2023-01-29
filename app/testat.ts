import { getDocinfoAirtable } from "~/models/docinfo.server";

console.log("Testing Airtable API");

let data = getDocinfoAirtable("M0100");

console.log(data);