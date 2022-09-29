import * as React from 'react';
import { Form, Link, NavLink, Outlet, useLocation } from "@remix-run/react";

import ArrowBack from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

import MaterialTable, { MTableToolbar, MTableBody, MTableHeader, MTablePagination } from "@material-table/core";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
  
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

let tabVals: { [key: string]: number } = {
  "marx": 0,
  "engels": 1,
  "me": 2,
  "st": 3,
}
function getTabVal(authName: string) {
  return tabVals[authName];
}

function getBackSection(ent_id: string) {
  if (ent_id.startsWith("ME")) {
    return {regCode: "me", regName: "Marx-Engels"};
  } else if (ent_id.startsWith("M")) {
    return {regCode: "marx", regName: "Marx"};
  } else if (ent_id.startsWith("E")) {
    return {regCode: "engels", regName: "Engels"};
  } else {
    return {regCode: "st", regName: "Sources/Translations"};
  }
}

function EntryDetails(ent_id: string) {
  const backSection = getBackSection(ent_id);
  return (
    <div>
      <div>
        <NavLink to={`../reg/${backSection.regCode}`}>
          <Button startIcon={<ArrowBack />}>
            Back to {backSection.regName} Register
          </Button>
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <NavLink to={`../reg/`}>
          <Button startIcon={<ArrowBack />}>
            Back to Register
          </Button>
        </NavLink>
      </div>
    </div>
  )
}

const authNames = ['marx','engels','me','st'];

export default function RegPage() {
  const location = useLocation();
  //console.log(location)
  let pathnameClean = location.pathname;
  if (pathnameClean.endsWith("/")) {
    // Remove trailing slash
    pathnameClean = pathnameClean.slice(0,-1);
  }
  const pathElts = pathnameClean.split("/");
  const regCode = pathElts[pathElts.length-1];
  console.log("[reg.tsx] regCode: " + regCode);
  // If it's an author, we can set the active tab
  let activeTab = 0;
  if (regCode === "reg") {
    // Default to Marx
    activeTab = getTabVal('marx');
  } else if (authNames.indexOf(regCode) > -1) {
    activeTab = getTabVal(regCode);
  } else {
    // Assume it's an entry id and return the details
    return EntryDetails(regCode);
  }
  
  /*
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };
  */
  return (
    <Outlet />
  );
}


// Old Tabs obj
/*
<Tabs
            value={activeTab}
            onChange={handleChange}
            aria-label="basic tabs example"
        >
*/