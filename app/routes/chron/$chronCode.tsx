import * as React from 'react';
import type { LoaderArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { useLoaderData, useParams, useFetcher, NavLink } from "@remix-run/react";
import { json } from "@remix-run/node";

import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';

import MaterialTable, { MTableToolbar, MTableBody, MTableCell, MTableHeader, MTablePagination } from "@material-table/core";

import { EventDetailsPanel } from '~/components/eventDetails'
import { getEvent } from '~/models/event.server';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

export async function loader({ request, params }: LoaderArgs) {
    invariant(params.chronCode, "Expected params.chronCode");
    let chronCode = params.chronCode;
    console.log("[$chronCode.tsx] chronCode: " + chronCode);
    if (chronCode === "") {
        // Default to list view
        return { type: 'chron', viewName: "list" };
    } else if (viewCodes.indexOf(chronCode) > -1) {
        // Specific view
        return { type: 'chron', viewName: chronCode };
    } else {
        // Assume it's an entry id, and fetch the data for it
        let entryData = await getEvent(chronCode);
        // And compute a monthday field
        entryData.monthday = entryData.month_start + " " + entryData.day_start;
        return { type: 'details', chronCode: chronCode, entryData: entryData };
    }
}

const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

const viewCodes = ['list', 'cal'];

function EventDetailsPage(entryData: any) {
    return (
        <div>
            <div>
                <NavLink to={`../../chron/list`}>
                    <Button startIcon={<ArrowBack />}>
                        Back to Chronicle
                    </Button>
                </NavLink>
            </div>
            <Paper>
                <EventDetailsPanel data={entryData} />
            </Paper>
            <div>
                <div className="float-left">
                <NavLink to={`../../chron/list`}>
                    <Button startIcon={<KeyboardArrowLeft />}>
                        Previous Record
                    </Button>
                </NavLink>
                </div>
                <div className="float-right">
                    <NavLink to={`../../chron/list`}>
                        <Button endIcon={<KeyboardArrowRight />}>
                            Next Record
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default function ChronTable() {
    const reqData = useLoaderData();
    console.log("[ChronTable()] reqData: " + Object.keys(reqData));
    console.log("[ChronTable()] type: " + reqData.type);
    console.log("[ChronTable()] viewType: " + reqData.viewName);
    if (reqData.type === "details") {
        return EventDetailsPage(reqData.entryData);
    }
    // (Otherwise reqData.type === "chron")
    const data_cols = [
        { field: "entry_id_clean", title: "ID", width: "60px" },
        { field: "year", title: "Year", width: "60px" },
        { field: "header", title: "Heading", cellStyle: { width: '120px', maxWidth: '140px' }, headerStyle: { width: '120px', maxWidth: '140px' } },
        { field: "text", title: "Text", cellStyle: { width: '65%' }, headerStyle: { width: '65%' } },
        { field: "monthday", title: "Date", width: "60px" }
    ];
    const fetcher = useFetcher();
    // See https://remix.run/docs/en/v1/api/remix#fetchersubmit
    React.useEffect(() => {
        if (fetcher.type === "init") {
            fetcher.load(`/fetch/chron/10/0`);
        }
    }, [fetcher]);
    /*
    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };
    */

    /*
    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    */
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
                        <RadioGroup row={true} value={reqData.viewName}>
                            <NavLink to="../list"><FormControlLabel control={<Radio />} label="List View" value="list" /></NavLink>
                            <NavLink to="../cal"><FormControlLabel control={<Radio />} label="Calendar View" value="cal" /></NavLink>
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
                columns={data_cols}
                detailPanel={
                    ({ rowData }: any) => <EventDetailsPanel data={rowData} />
                }
                data={(query) =>
                    new Promise((resolve, reject) => {
                        console.log("[$chronCode.tsx] query:");
                        console.log(query);
                        console.log("query.search: " + query.search);
                        if (query.search === "") {
                            fetch(`/fetch/chron/10/${query.page}`)
                                .then(response => response.json())
                                .then(rsJson => {
                                    resolve({
                                        data: rsJson.docs,
                                        page: query.page,
                                        totalCount: rsJson.total,
                                    })
                                });
                        } else {
                            console.log("Querying");
                            // Search query
                            fetch(`/fetch/chron/search/${query.search}`)
                                .then(response => response.json())
                                .then(rsJson => {
                                    resolve({
                                        data: rsJson.docs,
                                        page: query.page,
                                        totalCount: rsJson.total,
                                    })
                                });
                        }
                    })
                }
                components={{
                    Cell: (props) => (
                        <MTableCell className="overflow-hidden text-ellipsis whitespace-nowrap max-w-[350px]" {...props} />
                    ),
                    Container: (props) => (
                        <Paper className="even:[&>*]:grow" sx={{ display: 'flex', flexDirection: 'column', height: '100%', maxHeight: '100%' }} elevation={1} {...props} />
                    ),
                    Toolbar: (props) => (
                        <Box sx={{ borderBottom: '1px solid rgba(184,184,184,1)' }} className="bg-red-700/10">
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
                            openInNewTab(`./${rowData.entry_id_clean}`)
                        },
                    },
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