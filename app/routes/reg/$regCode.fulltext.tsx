import * as React from 'react';
import type { LoaderArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { useLoaderData, useParams, useFetcher, NavLink, useTransition, useLocation } from "@remix-run/react";
import { json } from "@remix-run/node";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import DownloadIcon from '@mui/icons-material/Download';
import FormControlLabel from '@mui/material/FormControlLabel';
import LinkIcon from '@mui/icons-material/Link';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Typography from '@mui/material/Typography';

import MaterialTable, { MTableToolbar, MTableBody, MTableCell, MTableHeader, MTablePagination } from "@material-table/core";

import { EntryDetailsPanel } from '~/components/entryDetails'
import { getFulltext } from '~/models/docinfo.server';
import { RowData } from '@tanstack/react-table';
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';

export async function loader({ request, params }: LoaderArgs) {
    invariant(params.regCode, "Expected params.regCode");
    console.log("[$regCode.fulltext] params.regCode: " + params.regCode);
    // Fetch from DB
    let entryFulltext = await getFulltext(params.regCode);
    return entryFulltext;
}

const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

const authCodes = ['marx','engels','me','st'];

function toHtml(origText: string) {
    return origText.replaceAll("\n", "<br>");
}

function EntryDetailsPage(entryData: any) {
   return (
    <Paper>
        <EntryDetailsPanel data={entryData} />
    </Paper>
   );
}

function FulltextPanel(props: any) {
    let reqData = props.data;
    //console.log(rowData);
    const [tooltipText, setTooltipText] = React.useState("Download Fulltext");
    const handleTooltipClose = () => {
        setTooltipText("Download Fulltext");
    }
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
                    {reqData.ent_id}: {reqData.title}
                    {(Object.keys(reqData).indexOf("fulltext") > -1) &&
                    <Tooltip title={tooltipText}>
                        <Chip
                            component="a"
                            href={`https://drive.google.com/uc?export=download&id=${reqData.drive_id}`}
                            clickable
                            icon={<DownloadIcon />}
                            label={reqData.fulltext_filename}
                            variant="outlined"
                            className="float-right cursor-pointer"
                        />
                    </Tooltip>
                    }
                </Typography>

                <Paper
                    className="break-words p-3 overflow-y-scroll"
                    sx={{ display: 'flex', flexDirection: 'column', height: '100%', maxHeight: '100%' }}
                >
                    <Typography className="h-full max-h-full w-full">
                        {(Object.keys(reqData).indexOf("fulltext") > -1) ?
                        <div className="font-mono" dangerouslySetInnerHTML={{ __html: toHtml(reqData.fulltext) }}></div> : <div className="font-mono">[Fulltext not available]</div>
                        }
                    </Typography>
                </Paper>
            </Box>
        </div>
    );
}

export default function FulltextPage() {
    const reqData = useLoaderData();
    // Otherwise, reqData.type === "auth", and we can get the auth name
    const authName = reqData.authName;
    const location = useLocation();
    const data_cols = [
        { field: "ent_id", title: "ID", width: "60px" },
        { field: "title", title: "Title", cellStyle: {width: '80%'}, headerStyle: {width: '80%'} },
        { field: "year_combined", title: "Year", width: "60px" },
    ];
    return (
        <FulltextPanel data={reqData} />
    );
}

/*

Old Chip onClick:

onClick={() => {
                                console.log("Fulltext download");
                                const blob = new Blob([reqData.fulltext], { type: 'text/plain' });
                                console.log(blob);
                                const url = URL.createObjectURL(blob);
                                var link = document.createElement("a");
                                link.setAttribute("href", url);
                                link.setAttribute("download", reqData.fulltext_filename);
                                link.style.visibility = 'hidden';
                                document.body.appendChild(link); // Required for FF
                                link.click(); // This will download the data file named "my_data.csv".
                                document.body.removeChild(link);
                            }}

*/