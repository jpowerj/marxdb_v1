import * as React from 'react';
import type { LoaderArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { useLoaderData, useParams, useFetcher, NavLink } from "@remix-run/react";
import { json } from "@remix-run/node";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';

import MaterialTable, { MTableToolbar, MTableBody, MTableCell, MTableHeader, MTablePagination } from "@material-table/core";

import { EntityDetailsPanel } from '~/components/entityDetails'
import { getEntity } from '~/models/entity.server';

export async function loader({ request, params }: LoaderArgs) {
    invariant(params.glossCode, "Expected params.glossCode");
    let glossCode = params.glossCode;
    console.log("[$glossCode.tsx] glossCode: " + glossCode);
    let entityData = await getEntity(glossCode);
    return { glossCode: glossCode, entityData: entityData };
}

export default function EntityDetailsPage() {
    const reqData = useLoaderData();
    let entityData = reqData.entityData;
    return (
        <div>
            <div>
                <NavLink to={`../../gloss/`}>
                    <Button startIcon={<ArrowBackIcon />}>
                        Back to Glossary
                    </Button>
                </NavLink>
            </div>
            <Paper>
                <EntityDetailsPanel data={entityData} />
            </Paper>
        </div>
    );
}
