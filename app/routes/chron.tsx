import * as React from 'react';
import {
  Form, Link, NavLink, Outlet,
  useLoaderData, useLocation 
} from "@remix-run/react";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import ArrowBack from '@mui/icons-material/ArrowBack';


function EventDetailsPage() {
  //const backSection = getBackSection(ent_id);
  return (
    <div>
      <div>
        <NavLink to={`../chron/`}>
          <Button startIcon={<ArrowBack />}>
            Back to Chronicle
          </Button>
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <NavLink to={`../chron/`}>
          <Button startIcon={<ArrowBack />}>
            Back to Chronicle
          </Button>
        </NavLink>
      </div>
    </div>
  )
}

function CurrentRoute() {
  const location = useLocation();

  return (
    <Typography variant="body2" sx={{ pb: 2 }} color="text.secondary">
      Current route: {location.pathname}
    </Typography>
  );
}

export default function ChronPage() {
  let location = useLocation();
  let pathname = location.pathname;
  if (pathname.endsWith("/")) {
    pathname = pathname.substring(0, pathname.length - 1);
  }
  // And now check if it's a detail or main page
  /*
  if (!pathname.endsWith("chron")) {
    return EventDetailsPage();
  }
  */
  /*
  const [activeTab, setActiveTab] = React.useState(0);
  React.useEffect(() => {
    setActiveTab(1);
  }, []);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };
  */
  return (
    <Outlet />
  );
}