import type { LoaderArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { json } from "@remix-run/node";
import { useParams } from "@remix-run/react";
import { getDocinfoPage, getDocinfoCount } from "~/models/docinfo.server";

export async function loader({ request, params }: LoaderArgs) {
    invariant(params.authName, "Expected params.authName");
    invariant(params.perPage, "Expected params.perPage");
    invariant(params.pageNum, "Expected params.pageNum");
    let ppInt = Number(params.perPage) || 10;
    let pnInt = Number(params.pageNum) || 0;
    let result = await getDocinfoPage(params.authName, ppInt, pnInt);
    return {
        docs: result.documents,
        shown: result.showCount,
        total: result.totalCount
    };
}
