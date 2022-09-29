import type { LoaderArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { json } from "@remix-run/node";
import { useParams } from "@remix-run/react";
import { getDocinfoCount } from "~/models/docinfo.server";
import { getEventCount } from "~/models/event.server";

// Maps url shorthand to Mongo collection name
let dbIdMap: { [key: string]: string } = {
    'reg': 'register',
    'chron': 'chronicle',
}

export async function loader({ request, params }: LoaderArgs) {
    let result = await getEventCount();
    return result;
}
