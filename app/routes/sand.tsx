import * as React from 'react';
const axios = require("axios");

import Box from '@mui/material/Box';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import MaterialTable, { MTableToolbar, MTableBody, MTableHeader, MTablePagination } from "@material-table/core";

import type { LoaderArgs } from "@remix-run/node";
import { Form, Link, useLoaderData, useFetcher, useSubmit } from "@remix-run/react";
import { IconButton, TableContainer, useTheme } from '@mui/material';

function MTableSandbox() {
    //let movies = useLoaderData();
    let fetcher = useFetcher();
    // See https://remix.run/docs/en/v1/api/remix#fetchersubmit
    React.useEffect(() => {
        if (fetcher.type === "init") {
            fetcher.load(`/fetch/sand/10/0`);
        }
    }, [fetcher]);

    return (
        fetcher.type !== "done" ? <div>Loading...</div> :
        <div>
            <h1>Movies</h1>
            <Form method="get">
                <p>
                    Showing {fetcher.data.totalShown} of {fetcher.data.totalCount} docs
                </p>
            </Form>
            <ul>
                {fetcher.data.docs.map((doc) => (
                    <li key={doc.title}>
                        <Link to={doc.title}>{doc.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default function SandboxTable() {
    const data_cols = [
        { field: "ent_id", title: "ID", width: "100px" },
        { field: "title", title: "Title" },
        { field: "year_combined", title: "Year", width: "100px" },
    ];
    const fetcher = useFetcher();
    // See https://remix.run/docs/en/v1/api/remix#fetchersubmit
    React.useEffect(() => {
        if (fetcher.type === "init") {
            fetcher.load(`/fetch/sand/10/0`);
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
    return (
        <TableContainer component={Paper}>
            <MaterialTable
                title={"Sandbox Table"}
                options={{
                    padding: 'dense', pageSize: 10, pageSizeOptions: [10],
                    //showTitle: false,
                    exportAllData: true,
                    initialPage: 0
                }}
                columns={data_cols}
                detailPanel={
                    ({ rowData }: any) => {
                        console.log(rowData);
                        return (
                            <div
                                style={{
                                    fontSize: 16,
                                    padding: 5,
                                    margin: 5,
                                }}
                            >
                                <Box sx={{ margin: 1 }}>
                                    <Typography variant="h6" gutterBottom component="div">
                                        {rowData.title}
                                    </Typography>
                                    <Table size="small" aria-label="details">
                                        <TableBody>
                                            <TableRow key='fulltext' sx={{ borderTop: '1px solid rgba(224, 224, 224, 1)' }}>
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                    sx={{ fontWeight: 'bold' }}
                                                >
                                                    Full Text
                                                </TableCell>
                                                <TableCell colSpan={5} className="font-mono">{rowData.full_text}</TableCell>
                                            </TableRow>
                                            <TableRow key='dates'>
                                                <TableCell sx={{ fontWeight: 'bold' }}>
                                                    Written
                                                </TableCell>
                                                <TableCell>
                                                    1/1/1850
                                                </TableCell>
                                                <TableCell sx={{ fontWeight: 'bold' }}>
                                                    Dated
                                                </TableCell>
                                                <TableCell>
                                                    1/3/1850
                                                </TableCell>
                                                <TableCell sx={{ fontWeight: 'bold' }}>
                                                    Published
                                                </TableCell>
                                                <TableCell>
                                                    1/2/1850
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </Box>
                            </div>
                        );
                    }
                }
                data={(query) =>
                    new Promise((resolve, reject) => {
                        fetch(`/fetch/sand/10/${query.page}`)
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
                    Container: (props) => (
                        <Paper className="even:[&>*]:grow" sx={{ display: 'flex', flexDirection: 'column', height: '100%' }} elevation={1} {...props} />
                    ),

                    Toolbar: (props) => (
                        <Box sx={{ borderBottom: '1px solid rgba(184,184,184,1)' }} className="bg-green-700/10">
                            <MTableToolbar className="min-h-[48px]" {...props} />
                        </Box>
                    ),
                    Body: (props) => (
                        <MTableBody className="" {...props} />
                    ),

                }}
            />
        </TableContainer>
    );
}

// <li key={row.name}>{row}</li>

// {
//     data.docinfoListItems.map((row: any, index: any) => (
//         <li>{row.ent_id}</li>
//     ))
// }

/*

// Old Pagination:
Pagination: (props) => (
        <Box className="flex justify-end bg-green-700/20" sx={{ borderTop: '1px solid rgba(184,184,184,1)' }}>
            <MTablePagination colspan={3} className="flex justify-end" {...props} />
        </Box>
    )
*/

// Old table container:
/*
<div className="flex grow h-full max-h-full flex-col min-h-0">
*/

// Toolbar example
/*
                    components={{
                      Toolbar: (props: any) => (
                        <div>
                          <MTableToolbar {...props} />
                          <div style={{ padding: '0px 10px' }}>
                            <Chip label="Chip 1" color="secondary" style={{ marginRight: 5 }} />
                            <Chip label="Chip 2" color="secondary" style={{ marginRight: 5 }} />
                            <Chip label="Chip 3" color="secondary" style={{ marginRight: 5 }} />
                            <Chip label="Chip 4" color="secondary" style={{ marginRight: 5 }} />
                            <Chip label="Chip 5" color="secondary" style={{ marginRight: 5 }} />
                          </div>
                        </div>
                      ),
                    }}
                    */

// Custom pagination attempt
/*
Pagination: (props) => (
    <Box className="flex justify-end bg-green-700/10" sx={{ borderTop: '1px solid rgba(184,184,184,1)' }}>
        <TableRow>
            <MTablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                totalCount={1000}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
                className="flex justify-end"
                {...props}
            />
        </TableRow>
    </Box>
),
*/
// use with: data = { fetcher.data.result }