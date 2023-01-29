import * as React from 'react';
import { Outlet, useLoaderData, useLocation } from "@remix-run/react";

import type { LoaderArgs } from "@remix-run/node";

import { getDocinfo, getDocinfoCount, getDocinfoPageAirtable, getDocinfoPageTotalAirtable } from "~/models/docinfo.server";
import Typography from '@mui/material/Typography';

export async function loader({ request }: LoaderArgs) {
  //const docinfoListItems = await getDocinfoAirtable("M0100");
  //const docinfoCount = await getDocinfoCount();
  //const docinfoPage = await getDocinfoPageAirtable("marx", 10, 0);
  const docinfoPageCount = await getDocinfoPageTotalAirtable("M");
  console.log("[loader()]");
  console.log(docinfoPageCount);
  return docinfoPageCount;
}

export default function RegPage() {
  const reqData = useLoaderData();
  //console.log(reqData);
  return (
    <div>
      {reqData}
    </div>
  );
}

/*
{reqData.documents.map((x: any) => {
        return <li>{Object.entries(x.fields)}</li>
      })}

*/