import * as React from 'react';
import type { LoaderArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { useLoaderData, useParams, useFetcher, NavLink, useTransition, useLocation } from "@remix-run/react";
import { json } from "@remix-run/node";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import DescriptionIcon from '@mui/icons-material/Description';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';

import MaterialTable, { MTableToolbar, MTableBody, MTableCell, MTableHeader, MTablePagination } from "@material-table/core";

import { EntryDetailsPanel } from '~/components/entryDetails'
import { getDocinfo } from '~/models/docinfo.server';
import { RowData } from '@tanstack/react-table';

export async function loader({ request, params }: LoaderArgs) {
    invariant(params.regCode, "Expected params.regCode");
    let regCode = params.regCode;
    if (regCode === "") {
        // Default to Marx
        return {type: 'auth', authName: "marx"};
    } else if (authCodes.indexOf(regCode) > -1) {
        // Author
        return {type: 'auth', authName: regCode};
    } else {
        // Assume it's an entry id, and fetch the data for it
        let entryData = await getDocinfo(regCode);
        return {type: 'details', regCode: regCode, entryData: entryData};
    }
}

const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

const authCodes = ['marx','engels','me','st'];

function EntryDetailsPage(entryData: any) {
   return (
    <Paper>
        <EntryDetailsPanel data={entryData} />
    </Paper>
   );
}

export default function RegTable() {
    const reqData = useLoaderData();
    if (reqData.type === "details") {
        return EntryDetailsPage(reqData.entryData);
    }
    // Otherwise, reqData.type === "auth", and we can get the auth name
    const authName = reqData.authName;
    const location = useLocation();
    console.log("[$regCode] location.pathname: " + location.pathname);
    const tableRef = React.createRef<any>();
    React.useEffect(() => {
        tableRef.current && tableRef.current.onQueryChange();
        console.log("[useEffect()] location.pathname: " + location.pathname)
    }, [location.pathname])
    const data_cols = [
        { field: "ent_id", title: "ID", width: "60px" },
        { field: "title", title: "Title", cellStyle: {width: '80%'}, headerStyle: {width: '80%'} },
        { field: "year_combined", title: "Year", width: "60px" },
    ];
    // MaterialTable documentation:
    // Orig: https://material-table.com/#/
    // Core: https://material-table-core.com/
    // For options:
    // https://github.com/mbrn/material-table.com/blob/master/src/pages/docs/all-props/options.md
    return (
        <TableContainer component={Paper}>
            <MaterialTable
                title={
                    <div>
                    <RadioGroup row={true} value={authName}>
                            <NavLink to="../marx"><FormControlLabel control={<Radio />} label="Marx" value="marx" /></NavLink>
                            <NavLink to="../engels"><FormControlLabel control={<Radio />} label="Engels" value="engels" /></NavLink>
                            <NavLink to="../me"><FormControlLabel control={<Radio />} label="Marx-Engels" value="me" /></NavLink>
                            <NavLink to="../st"><FormControlLabel control={<Radio />} label="Sources/Translations" value="st" /></NavLink>
                    </RadioGroup>
                    </div>
                }
                options={{
                    actionsColumnIndex: -1,
                    padding: 'dense',
                    pageSize: 10,
                    pageSizeOptions: [10],
                    columnsButton: true,
                    //showTitle: false,
                    exportAllData: true,
                    initialPage: 0,
                    draggable: false,
                    toolbar: true,
                    //sorting: false,
                    paginationType: 'stepped',
                    numberOfPagesAround: 4
                }}
                tableRef={tableRef}
                columns={data_cols}
                detailPanel={
                    ({ rowData }: any) => <EntryDetailsPanel data={rowData} />
                }
                data={(query) =>
                    new Promise((resolve, reject) => {
                        console.log("Fetching: " + authName);
                        fetch(`/fetch/reg/${authName}/10/${query.page}`)
                            .then(response => response.json())
                            .then(rsJson => {
                                resolve({
                                    data: rsJson.docs,
                                    page: query.page,
                                    totalCount: rsJson.total,
                                })
                            })
                    })
                }
                components={{
                    Cell: (props) => (
                        <MTableCell className="overflow-hidden text-ellipsis whitespace-nowrap max-w-[550px]" {...props} />
                    ),
                    Container: (props) => (
                        <Paper className="even:[&>*]:grow" sx={{ display: 'flex', flexDirection: 'column', height: '100%', maxHeight: '100%' }} elevation={1} {...props} />
                    ),
                    Toolbar: (props) => (
                        <Box sx={{ borderBottom: '1px solid rgba(184,184,184,1)' }} className="bg-sky-700/10">
                            <MTableToolbar className="min-h-[48px]" {...props} />
                        </Box>
                    ),
                    Body: (props) => (
                        <MTableBody className="overflow-hidden text-ellipsis" {...props} />
                    ),
                }}
                actions={[
                    {
                        icon: () => (
                            <InfoIcon />
                        ),
                        tooltip: "View Full Info",
                        onClick: (event, rowData) => {
                            //const rowJson = JSON.stringify(rowData, null, 2);
                            //alert(`Do save operation : ${rowJson}`);
                            openInNewTab(`./${rowData.ent_id}`)
                        },
                    },
                    {
                        icon: () => (
                            <DescriptionIcon />
                        ),
                        tooltip: "View Full Text",
                        onClick: (event, rowData) => {
                            console.log("fulltext");
                            openInNewTab(`./${rowData.ent_id}/fulltext`)
                        }
                    }
                ]}
                localization={{
                    pagination: {
                        labelDisplayedRows: '{from}-{to} of {count}'
                    },
                    toolbar: {
                        nRowsSelected: '{0} row(s) selected'
                    },
                    header: {
                        actions: ''
                    },
                    body: {
                        emptyDataSourceMessage: 'No records to display',
                        filterRow: {
                            filterTooltip: 'Filter'
                        }
                    }
                }}
            />
        </TableContainer>
    );
}