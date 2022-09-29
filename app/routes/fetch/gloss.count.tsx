import type { LoaderArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { json } from "@remix-run/node";
import { useParams } from "@remix-run/react";
import { getEntityCount } from "~/models/entity.server";

export async function loader({ request, params }: LoaderArgs) {
    let result = await getEntityCount();
    return result;
}
