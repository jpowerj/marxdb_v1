import type { LoaderArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { json } from "@remix-run/node";
import { getDocinfo } from "~/models/docinfo.server";

export async function loader({ request, params }: LoaderArgs) {
    invariant(params.regCode, "Expected params.regCode");
    let result = await getDocinfo(params.regCode);
    return result;
}
