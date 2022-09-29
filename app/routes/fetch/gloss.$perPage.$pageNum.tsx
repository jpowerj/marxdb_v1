import type { LoaderArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { json } from "@remix-run/node";
import { useParams } from "@remix-run/react";
import { getEntityPage } from "~/models/entity.server";

export async function loader({ request, params }: LoaderArgs) {
    invariant(params.perPage, "Expected params.perPage");
    invariant(params.pageNum, "Expected params.pageNum");
    let ppInt = Number(params.perPage) || 10;
    let pnInt = Number(params.pageNum) || 0;
    let result = await getEntityPage(ppInt, pnInt);
    return {
        docs: result.documents,
        shown: result.showCount,
        total: result.totalCount
    };   
}
