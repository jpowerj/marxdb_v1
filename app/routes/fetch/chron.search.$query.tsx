import type { LoaderArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { json } from "@remix-run/node";
import { useParams } from "@remix-run/react";
import { searchEvents } from "~/models/event.server";

export async function loader({ request, params }: LoaderArgs) {
    invariant(params.query, "Expected params.query");
    let result = await searchEvents(params.query);
    return {
        docs: result.documents,
        shown: result.showCount,
        total: result.totalCount
    };   
}
