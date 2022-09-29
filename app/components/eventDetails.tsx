import * as React from 'react';

import ArrowBack from '@mui/icons-material/ArrowBack';
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
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ContentCopy from '@mui/icons-material/ContentCopy';

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

function getChronRefLinks(chronRefIds: string[]) {
    let y = chronRefIds.map((item: string) => { return getChronRefLink(item)})
    return y.join(", ")
}

export function EventDetailsPanel(props: any) {
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
                <div className="grid grid-cols-2 mb-2 items-center">
                    <Typography variant="h5" className="table-cell align-middle font-bold">
                        {rowData.ymd}
                    </Typography>
                    {rowData.start_approx === "checked" &&
                        <Tooltip title="Start date is approximate">
                            <Chip
                                icon={<InfoIcon />}
                                label="Approximate"
                                className="m-2 cursor-pointer"
                            />
                        </Tooltip>
                    }
                    <div className="self-center float-right">
                        <FormControl sx={{ m: 1, width: '36ch' }} variant="outlined" className="float-right">
                            <InputLabel htmlFor="outlined-adornment-password">Permalink</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                className="float-right"
                                value={`https://marxdb.com/chron/${rowData.entry_id_clean}`}
                                disabled
                                type={'text'}
                                size={'small'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Tooltip title={tooltipText}>
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            edge="end"
                                            onClick={() => {
                                                //alert('clicked');
                                                navigator.clipboard.writeText(`https://marxdb.com/chron/${rowData.entry_id_clean}`).then(
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
                                        >
                                            {<ContentCopy />}
                                        </IconButton>
                                        </Tooltip>
                                    </InputAdornment>
                                }
                                label="Permalink"
                            />
                        </FormControl>
                    </div>
                </div>
                <Table size="small" aria-label="details">
                    <TableBody>
                        <TableRow key='header' sx={{ borderTop: '1px solid rgba(224, 224, 224, 1)' }}>
                            <TableCell
                                component="th"
                                scope="row"
                                sx={{ fontWeight: 'bold' }}
                            >
                                Heading
                            </TableCell>
                            <TableCell colSpan={5} className="font-bold">{rowData.header}</TableCell>
                        </TableRow>
                        <TableRow key='desc' sx={{ borderTop: '1px solid rgba(224, 224, 224, 1)' }}>
                            <TableCell
                                component="th"
                                scope="row"
                                sx={{ fontWeight: 'bold' }}
                            >
                                Description
                            </TableCell>
                            <TableCell colSpan={5} className="font-mono">{rowData.text}</TableCell>
                        </TableRow>
                        <TableRow key='dates'>
                            <TableCell sx={{ fontWeight: 'bold' }}>
                                Written
                            </TableCell>
                            <TableCell>
                                {rowData.written}
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