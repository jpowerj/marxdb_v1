import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Fab from '@mui/material/Fab';
import InfoIcon from '@mui/icons-material/Info';
import LinkIcon from '@mui/icons-material/Link';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { NavLink } from '@remix-run/react';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

/*
let regCodeDict: { [key: string]: string } = {
    "marx": "Marx",
    "engels": "Engels",
    "me": "Marx-Engels Joint Works",
    "st": "Sources/Translations",
}
function regCodeToAuth(authName: string) {
    return titleDict[authName];
}
*/

/*
function getChronRefLink(chronRefId: string) {
    let relUrl = "../chron/" + chronRefId;
    return (
        <Fab variant="extended" sx={{ boxShadow: 0, border: 1 }} className="m-2 p-2 cursor-pointer" size="small" onClick={() => window.open(relUrl, '_blank', 'noopener,noreferrer')}>
            {"18" + chronRefId}
            <OpenInNewIcon sx={{ ml: 1 }} fontSize="small" />
        </Fab>
    );
}
*/

function getChronRefLink(chronRefId: string) {
    let relUrl = "../../chron/" + chronRefId;
    return (
        <NavLink to={relUrl} rel="noopener,noreferrer" target="_blank" className="m-2 p-2 border border-solid border-black cursor-pointer rounded-full">
            {"18" + chronRefId}
            <OpenInNewIcon sx={{ ml: 1 }} fontSize="small" />
        </NavLink>
    );
}

export function EntryDetailsPanel(props: any) {
    let rowData = props.data;
    //console.log(rowData);
    const [tooltipText, setTooltipText] = React.useState("Copy Link");
    const handleTooltipClose = () => {
        setTooltipText("Copy Link");
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
                    {rowData.title}
                    {rowData.dubious && 
                      <Tooltip title="Authorship of this text is disputed (see description)">
                      <Chip
                        icon={<InfoIcon />}
                        label="Dubious"
                        className="m-2 cursor-pointer"
                      />
                      </Tooltip>
                    }
                    <Tooltip title={tooltipText}>
                    <Chip
                      icon={<LinkIcon />}
                      label={rowData.entry_id}
                      variant="outlined"
                      className="float-right"
                      onMouseLeave={handleTooltipClose}
                      onClick={() => {
                        //alert('clicked');
                        navigator.clipboard.writeText(`https://marxdb.com/reg/${rowData.entry_id}`).then(
                            function () {
                                /* clipboard successfully set */
                                console.log('Success! The text was copied to your clipboard');
                                setTooltipText("Link Copied!");
                            },
                            function () {
                                /* clipboard write failed */
                                console.log('Oops! Your browser does not support the Clipboard API');
                            }
                          )
                      }}
                    />
                    </Tooltip>
                </Typography>
                <Table size="small" aria-label="details">
                    <TableBody>
                        <TableRow key='desc' sx={{ borderTop: '1px solid rgba(224, 224, 224, 1)' }}>
                            <TableCell
                                component="th"
                                scope="row"
                                sx={{ fontWeight: 'bold' }}
                            >
                                Description
                            </TableCell>
                            <TableCell colSpan={5} className="font-mono">{rowData.full_text}</TableCell>
                        </TableRow>
                        <TableRow key='dates'>
                            <TableCell sx={{ fontWeight: 'bold' }}>
                                Written
                            </TableCell>
                            <TableCell>
                                {Object.keys(rowData).indexOf("written") > - 1 ? rowData.written : "NA"}
                            </TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>
                                Dated
                            </TableCell>
                            <TableCell>
                                {Object.keys(rowData).indexOf("dated") > - 1 ? rowData.dated : "NA"}
                            </TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>
                                Published
                            </TableCell>
                            <TableCell>
                                {Object.keys(rowData).indexOf("published") > - 1 ? rowData.published : "NA"}
                            </TableCell>
                        </TableRow>
                        {(Object.keys(rowData).indexOf("lang_orig") > -1) &&
                            <TableRow key='langs' sx={{ borderTop: '1px solid rgba(224, 224, 224, 1)' }}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    Language(s)
                                </TableCell>
                                <TableCell colSpan={5}>{rowData.lang_orig.join(", ")}</TableCell>
                            </TableRow>
                        }
                        {(Object.keys(rowData).indexOf("source") > -1) &&
                            <TableRow key='sources' sx={{ borderTop: '1px solid rgba(224, 224, 224, 1)' }}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    Source(s)
                                </TableCell>
                                <TableCell colSpan={5}>{rowData.source}</TableCell>
                            </TableRow>
                        }
                        {(Object.keys(rowData).indexOf("reprint") > -1) &&
                            <TableRow key='reprints' sx={{ borderTop: '1px solid rgba(224, 224, 224, 1)' }}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    Reprints
                                </TableCell>
                                <TableCell colSpan={5}>{rowData.reprint}</TableCell>
                            </TableRow>
                        }
                        {(Object.keys(rowData).indexOf("more_info") > -1) &&
                            <TableRow key='misc' sx={{ borderTop: '1px solid rgba(224, 224, 224, 1)' }}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    Misc
                                </TableCell>
                                <TableCell colSpan={5}>{rowData.more_info}</TableCell>
                            </TableRow>
                        }
                        {(Object.keys(rowData).indexOf("chron_ref_ids") > -1) &&
                            <TableRow key='chronrefs' sx={{ borderTop: '1px solid rgba(224, 224, 224, 1)' }}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    Chronicle References
                                </TableCell>
                                <TableCell colSpan={5}>{rowData.chron_ref_ids.map((item: string) => getChronRefLink(item))}</TableCell>
                            </TableRow>
                        }
                    </TableBody>
                </Table>
            </Box>
        </div>
    );
}