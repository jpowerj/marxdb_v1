import * as React from 'react';
import { useTheme, withStyles } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';

import Chip from '@mui/material/Chip';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

import MaterialTable from "@material-table/core";
import MTableToolbar from '@material-table/core';

import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, NavLink, Outlet, useLoaderData, useFetcher } from "@remix-run/react";
import { getDocinfoListItems } from "~/models/docinfo.server";

const defaultPerPage = 3;
const defaultPageNum = 0;

export async function loader({ request }: LoaderArgs) {
  const docinfoListItems = await getDocinfoListItems();
  return json({ docinfoListItems });
}

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}


function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}


function createData(
  id: string,
  title: string
) {
  return {
    id,
    title,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props: { data: ReturnType<typeof createData> }) {
  const { data } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" sx={{ maxWidth: 100, overflowX: 'clip' }}>
          {data.id}
        </TableCell>
        <TableCell>
          {data.title}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Text Info
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const EnhancedTableToolbar = () => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h5"
        id="tableTitle"
        component="div"
      >
        Marx-Engels Digital Register
      </Typography>
    </Toolbar>
  );
};

export default function CollapsibleTable() {
  const initData = useLoaderData<typeof loader>();
  const fetcher = useFetcher();
  // See https://remix.run/docs/en/v1/api/remix#fetchersubmit

  React.useEffect(() => {
    if (fetcher.type === "init") {
      fetcher.load(`/fetch/gloss/${defaultPerPage}/${defaultPageNum}`);
    }
  }, [fetcher]);
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rowsOnPage, setRowsOnPage] = React.useState(5);
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowsOnPage) : 0;
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const DEMO_DATA = [
    { id: 1, name: "Mary" },
    { id: 2, name: "Joe" },
    { id: 3, name: "Jim" },
    { id: 4, name: "Bob" },
    { id: 5, name: "Bernie" },
    { id: 6, name: "Jimbo" },
  ];
  const DEMO_COLS = [
    { field: "id", title: "Id" },
    { field: "title", title: "Title" },
  ];
  return (
    <div>
    {fetcher.type !== "done" ? <span>Loading...</span> :
        <MaterialTable
          columns={DEMO_COLS}
          detailPanel={
            ({ rowData }) => {
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
                            <TableCell colSpan={5}>{rowData.fullText}</TableCell>
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
          data={fetcher.data.result}
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
        />
    }
    </div>
  );
}