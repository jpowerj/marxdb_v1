import type { LoaderArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { json } from "@remix-run/node";
import { useParams } from "@remix-run/react";
import { getDocinfoCount } from "~/models/docinfo.server";

export async function loader({ request, params }: LoaderArgs) {
    let result = await getDocinfoCount();
    return result;
}
