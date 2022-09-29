import * as React from 'react';
import { useLoaderData, useParams, useFetcher, NavLink } from "@remix-run/react";

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

/*
export async function loader({ request, params }: LoaderArgs) {
}
*/

const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

export default function GlossTable() {
    const data_cols = [
        { field: "id", title: "ID", width: "60px" },
        { field: "desc", title: "Description", cellStyle: { width: '65%' }, headerStyle: { width: '65%' } }
    ];
    const fetcher = useFetcher();
    // See https://remix.run/docs/en/v1/api/remix#fetchersubmit
    React.useEffect(() => {
        if (fetcher.type === "init") {
            fetcher.load(`/fetch/gloss/10/0`);
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
                title={"Glossary"}
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
                    ({ rowData }: any) => <EntityDetailsPanel data={rowData} />
                }
                data={(query) =>
                    new Promise((resolve, reject) => {
                        fetch(`/fetch/gloss/10/${query.page}`)
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
                        <Box sx={{ borderBottom: '1px solid rgba(184,184,184,1)' }} className="bg-green-700/10">
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
                            openInNewTab(`./${rowData.id}`)
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