import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Form,
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useLoaderData
} from "@remix-run/react";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
  responsiveFontSizes
} from '@mui/material/styles';

const robotoUrl = "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap";

import tailwindStylesheetUrl from "./styles/tailwind.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "stylesheet", href: robotoUrl }
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Marx-Engels Digital Cyclopedia",
  viewport: "width=device-width,initial-scale=1",
});

import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const dbs = [
  {
    name: "Home",
    fullname: "Marx-Engels Digital Cyclopedia",
    route: "",
    icon: "🏠",
  },
  {
    name: "Register",
    fullname: "Marx-Engels Digital Register",
    route: "reg/marx",
    icon: "📕",
  },
  {
    name: "Chronicle",
    fullname: "Marx-Engels Digital Chronicle",
    route: "chron/list",
    icon: "📅",
  },
  /*
  {
    name: "Notebooks",
    fullname: "Marx-Engels Digital Notebooks",
    route: "notes",
    icon: "📓",
  },
  */
  {
    name: "Letters",
    fullname: "Marx-Engels Digital Correspondence",
    route: "letters",
    icon: "✉️"
  },
  {
    name: "Library",
    fullname: "Marx-Engels Digital Library",
    route: "lib/",
    icon: "🏛️"
  },
  {
    name: "Glossary",
    fullname: "Marx-Engels Digital Glossary",
    route: "gloss/",
    //icon: "📙",
    icon: "🔍"
  },
  /*
  {
    name: "Sandbox",
    fullname: "Sandbox",
    route: "sand",
    icon: "⏳",
  }
  */
];

// Drawer Width
const drawerWidth = 180;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create(['width','margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const openedMixinOverlay = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create(['width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create(['width','margin'], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: 0,
  [theme.breakpoints.up('sm')]: {
    width: 0,
  },
});

const closedMixinOverlay = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create(['width'], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: 0,
  [theme.breakpoints.up('sm')]: {
    width: 0,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: getAppBarColor(),
}));

let headerDict: { [key: string]: string } = {
  "/reg": "Marx-Engels Digital Register",
  "/chron": "Marx-Engels Digital Chronicle",
  "/notes": "Marx-Engels Digital Notebooks",
  "/letters": "Marx-Engels Digital Correspondence",
  "/gloss": "Marx-Engels Digital Glossary",
}
function getAppBarHeader(pathname: string) {
  // The root page "/" is a special case here
  if (pathname === "/") {
    return "Marx-Engels Digital Cyclopedia";
  }
  let headerKeys = Object.keys(headerDict);
  for (var i=0; i < headerKeys.length; i++) {
    let curHeaderKey = headerKeys[i];
    if (pathname.startsWith(curHeaderKey)) {
      return headerDict[curHeaderKey];
    }
  }
  return null;
}

/*let colorDict: { [key: string]: string } = {
  "/": "bg-blue-500",
  "/reg": "bg-red-500",
  "/chron": "bg-green-500",
}*/
// From https://tailwindcss.com/docs/background-color
// https://tailwindcss.com/docs/customizing-colors
let colorRGBDict: { [key: string]: string } = {
  "amber-500": "#F59E0B",
  "amber-600": "#D97706",
  "slate-500": "rgb(100 116 139)",
  "green-500": "rgb(34 197 94)",
  "green-700": "rgb(21 128 61)",
  "red-500": "rgb(239 68 68)",
  "red-700": "rgb(185 28 28)",
  "blue-500": "rgb(59 130 246)",
  "sky-700": "rgb(3 105 161)",
  "violet-500": "#8B5CF6",
  "violet-600": "#7C3AED",
}
function colorToRGB(colorName: string): string {
  return colorRGBDict[colorName];
}
let colorDict: { [key: string]: string } = {
  "/reg": colorToRGB("sky-700"),
  "/chron": colorToRGB("red-700"),
  "/notes": colorToRGB("amber-600"),
  "/letters": colorToRGB("violet-600"),
  "/gloss": colorToRGB("green-700"),
};
function getAppBarColor() {
  const location = useLocation();
  if (location.pathname === "/") {
    return colorToRGB("slate-500");
  }
  let colorKeys = Object.keys(colorDict);
  for (var i = 0; i < colorKeys.length; i++) {
    let curColorKey = colorKeys[i];
    if (location.pathname.startsWith(curColorKey)) {
      return colorDict[curColorKey];
    }
  }
  return colorToRGB("slate-500");
}


/*
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
*/

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const OverlayDrawer = styled(MuiDrawer)(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixinOverlay(theme),
      '& .MuiDrawer-paper': openedMixinOverlay(theme),
    }),
    ...(!open && {
      ...closedMixinOverlay(theme),
      '& .MuiDrawer-paper': closedMixinOverlay(theme),
    }),
  }),
);


const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
};

const theme = responsiveFontSizes(createTheme(themeOptions));
theme.typography.h4 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.0rem',
  },
};

export function MainUI() {
  const theme = useTheme();
  theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
    },
  };
  const [open, setOpen] = React.useState(true);
  const handleDrawerClick = () => {
    setOpen(!open);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const location = useLocation();
  //console.log("location");
  //console.log(location);

  const drawer = (
    <div className="h-full border-r bg-gray-50">
      <Toolbar />
      <Box sx={{ overflow: 'auto', overflowX: 'hidden' }}>
        <ol>
        {dbs.map((db, index) => (
          <li key={db.route}>
            <NavLink
              className={({ isActive }) =>
                `block border-b p-4 text-xl ${isActive ? "bg-white" : "bg-gray-50"}`
              }
              to={db.route}
            >
              {db.icon}{" "}{open ? db.name : ""}
            </NavLink>
          </li>
        ))}
        </ol>
      </Box>
    </div>
  );

  return (
    <Box
      sx={{ display: 'flex' }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
      >
        <Toolbar>
          <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerClick}
              edge="start"
              sx={{
                marginRight: 1,
              }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap component="div" sx={{flex:1}}>
            {getAppBarHeader(location.pathname)}
          </Typography>
          <a href="https://github.com/jpowerj/digital-marxism/" target='_blank'>
          <IconButton
            component="div"
            color="inherit"
            edge="end"
          >
            <GitHubIcon sx={{ fontSize: '2.2rem' }} />
          </IconButton>
          </a>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          width: drawerWidth,
          height: '100%',
          //flexShrink: 0,
          overflowX: 'hidden',
          overflowY: 'scroll',
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box',
            //flexShrink: 0,
            overflowX: 'hidden',
            overflowY: 'scroll',
          },
        }}
        open={open}
      >
        {drawer}
      </Drawer>
      <MuiDrawer
          variant="temporary"
          open={open}
          onClose={handleDrawerClose}
          onClick={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            width: drawerWidth,
            overflowX: 'hidden',
            overflowY: 'scroll',
            '& .MuiDrawer-paper': { overflowX: 'hidden', overflowY: 'scroll', width: drawerWidth, boxSizing: 'border-box' },
          }}
          disableScrollLock={true}
          anchor="left"
        >
          {drawer}
      </MuiDrawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 2, overflow: 'hidden', overflowY: 'scroll' }}
        className="w-full h-screen max-h-screen flex flex-col"
      >
        <Toolbar className="flex-none" />
        <Outlet />
      </Box>
    </Box>
  );
}


export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full m-0">
      <ThemeProvider theme={theme}>
        <MainUI />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </ThemeProvider>
      </body>
    </html>
  );
}
