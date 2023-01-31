var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  MainUI: () => MainUI,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_styles = require("@mui/material/styles");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-OCESLDPU.css";

// app/root.tsx
var React = __toESM(require("react")), import_styles2 = require("@mui/material/styles"), import_AppBar = __toESM(require("@mui/material/AppBar")), import_Box = __toESM(require("@mui/material/Box")), import_CssBaseline = __toESM(require("@mui/material/CssBaseline")), import_GitHub = __toESM(require("@mui/icons-material/GitHub")), import_Drawer = __toESM(require("@mui/material/Drawer")), import_IconButton = __toESM(require("@mui/material/IconButton")), import_Menu = __toESM(require("@mui/icons-material/Menu")), import_Toolbar = __toESM(require("@mui/material/Toolbar")), import_Typography = __toESM(require("@mui/material/Typography")), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), robotoUrl = "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap", links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: robotoUrl }
], meta = () => ({
  charset: "utf-8",
  title: "Marx-Engels Digital Cyclopedia",
  viewport: "width=device-width,initial-scale=1"
}), dbs = [
  {
    name: "Home",
    fullname: "Marx-Engels Digital Cyclopedia",
    route: "",
    icon: "\u{1F3E0}"
  },
  {
    name: "Register",
    fullname: "Marx-Engels Digital Register",
    route: "reg/marx",
    icon: "\u{1F4D5}"
  },
  {
    name: "Chronicle",
    fullname: "Marx-Engels Digital Chronicle",
    route: "chron/list",
    icon: "\u{1F4C5}"
  },
  {
    name: "Letters",
    fullname: "Marx-Engels Digital Correspondence",
    route: "letters",
    icon: "\u2709\uFE0F"
  },
  {
    name: "Library",
    fullname: "Marx-Engels Digital Library",
    route: "lib/",
    icon: "\u{1F3DB}\uFE0F"
  },
  {
    name: "Glossary",
    fullname: "Marx-Engels Digital Glossary",
    route: "gloss/",
    icon: "\u{1F50D}"
  }
], drawerWidth = 180, openedMixin = (theme2) => ({
  width: drawerWidth,
  transition: theme2.transitions.create(["width", "margin"], {
    easing: theme2.transitions.easing.sharp,
    duration: theme2.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
}), openedMixinOverlay = (theme2) => ({
  width: drawerWidth,
  transition: theme2.transitions.create(["width"], {
    easing: theme2.transitions.easing.sharp,
    duration: theme2.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
}), closedMixin = (theme2) => ({
  transition: theme2.transitions.create(["width", "margin"], {
    easing: theme2.transitions.easing.easeOut,
    duration: theme2.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: 0,
  [theme2.breakpoints.up("sm")]: {
    width: 0
  }
}), closedMixinOverlay = (theme2) => ({
  transition: theme2.transitions.create(["width"], {
    easing: theme2.transitions.easing.easeOut,
    duration: theme2.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: 0,
  [theme2.breakpoints.up("sm")]: {
    width: 0
  }
}), DrawerHeader = (0, import_styles2.styled)("div")(({ theme: theme2 }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme2.spacing(0, 1),
  ...theme2.mixins.toolbar
})), AppBar = (0, import_styles2.styled)(import_AppBar.default)(({ theme: theme2, open }) => ({
  zIndex: theme2.zIndex.drawer + 1,
  backgroundColor: getAppBarColor()
})), headerDict = {
  "/reg": "Marx-Engels Digital Register",
  "/chron": "Marx-Engels Digital Chronicle",
  "/notes": "Marx-Engels Digital Notebooks",
  "/letters": "Marx-Engels Digital Correspondence",
  "/gloss": "Marx-Engels Digital Glossary"
};
function getAppBarHeader(pathname) {
  if (pathname === "/")
    return "Marx-Engels Digital Cyclopedia";
  let headerKeys = Object.keys(headerDict);
  for (var i = 0; i < headerKeys.length; i++) {
    let curHeaderKey = headerKeys[i];
    if (pathname.startsWith(curHeaderKey))
      return headerDict[curHeaderKey];
  }
  return null;
}
var colorRGBDict = {
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
  "violet-600": "#7C3AED"
};
function colorToRGB(colorName) {
  return colorRGBDict[colorName];
}
var colorDict = {
  "/reg": colorToRGB("sky-700"),
  "/chron": colorToRGB("red-700"),
  "/notes": colorToRGB("amber-600"),
  "/letters": colorToRGB("violet-600"),
  "/gloss": colorToRGB("green-700")
};
function getAppBarColor() {
  let location = (0, import_react2.useLocation)();
  if (location.pathname === "/")
    return colorToRGB("slate-500");
  let colorKeys = Object.keys(colorDict);
  for (var i = 0; i < colorKeys.length; i++) {
    let curColorKey = colorKeys[i];
    if (location.pathname.startsWith(curColorKey))
      return colorDict[curColorKey];
  }
  return colorToRGB("slate-500");
}
var Drawer = (0, import_styles2.styled)(import_Drawer.default, { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme: theme2, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...open && {
      ...openedMixin(theme2),
      "& .MuiDrawer-paper": openedMixin(theme2)
    },
    ...!open && {
      ...closedMixin(theme2),
      "& .MuiDrawer-paper": closedMixin(theme2)
    }
  })
), OverlayDrawer = (0, import_styles2.styled)(import_Drawer.default)(
  ({ theme: theme2, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...open && {
      ...openedMixinOverlay(theme2),
      "& .MuiDrawer-paper": openedMixinOverlay(theme2)
    },
    ...!open && {
      ...closedMixinOverlay(theme2),
      "& .MuiDrawer-paper": closedMixinOverlay(theme2)
    }
  })
), themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#3f51b5"
    },
    secondary: {
      main: "#f50057"
    }
  }
}, theme = (0, import_styles.responsiveFontSizes)((0, import_styles.createTheme)(themeOptions));
theme.typography.h4 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem"
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.0rem"
  }
};
function MainUI() {
  let theme2 = (0, import_styles2.useTheme)();
  theme2.typography.h3 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem"
    },
    [theme2.breakpoints.up("md")]: {
      fontSize: "2.4rem"
    }
  };
  let [open, setOpen] = React.useState(!0), handleDrawerClick = () => {
    setOpen(!open);
  }, handleDrawerClose = () => {
    setOpen(!1);
  }, location = (0, import_react2.useLocation)(), drawer = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "h-full border-r bg-gray-50",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Toolbar.default, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 347,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Box.default, {
        sx: { overflow: "auto", overflowX: "hidden" },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
          children: dbs.map((db, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.NavLink, {
              className: ({ isActive }) => `block border-b p-4 text-xl ${isActive ? "bg-white" : "bg-gray-50"}`,
              to: db.route,
              children: [
                db.icon,
                " ",
                open ? db.name : ""
              ]
            }, void 0, !0, {
              fileName: "app/root.tsx",
              lineNumber: 352,
              columnNumber: 13
            }, this)
          }, db.route, !1, {
            fileName: "app/root.tsx",
            lineNumber: 351,
            columnNumber: 11
          }, this))
        }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 349,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 348,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 346,
    columnNumber: 5
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Box.default, {
    sx: { display: "flex" },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_CssBaseline.default, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 371,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppBar, {
        position: "fixed",
        sx: {
          zIndex: (theme3) => theme3.zIndex.drawer + 1
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Toolbar.default, {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_IconButton.default, {
              color: "inherit",
              "aria-label": "open drawer",
              onClick: handleDrawerClick,
              edge: "start",
              sx: {
                marginRight: 1
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Menu.default, {}, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 388,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 379,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Typography.default, {
              variant: "h4",
              noWrap: !0,
              component: "div",
              sx: { flex: 1 },
              children: getAppBarHeader(location.pathname)
            }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 390,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              href: "https://github.com/jpowerj/digital-marxism/",
              target: "_blank",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_IconButton.default, {
                component: "div",
                color: "inherit",
                edge: "end",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_GitHub.default, {
                  sx: { fontSize: "2.2rem" }
                }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 399,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 394,
                columnNumber: 11
              }, this)
            }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 393,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 378,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 372,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Drawer, {
        variant: "permanent",
        sx: {
          display: { xs: "none", sm: "block" },
          width: drawerWidth,
          height: "100%",
          overflowX: "hidden",
          overflowY: "scroll",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            overflowX: "hidden",
            overflowY: "scroll"
          }
        },
        open,
        children: drawer
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 404,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Drawer.default, {
        variant: "temporary",
        open,
        onClose: handleDrawerClose,
        onClick: handleDrawerClose,
        ModalProps: {
          keepMounted: !0
        },
        sx: {
          display: { xs: "block", sm: "none" },
          width: drawerWidth,
          overflowX: "hidden",
          overflowY: "scroll",
          "& .MuiDrawer-paper": { overflowX: "hidden", overflowY: "scroll", width: drawerWidth, boxSizing: "border-box" }
        },
        disableScrollLock: !0,
        anchor: "left",
        children: drawer
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 424,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Box.default, {
        component: "main",
        sx: { flexGrow: 1, p: 2, overflow: "hidden", overflowY: "scroll" },
        className: "w-full h-screen max-h-screen flex flex-col",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Toolbar.default, {
            className: "flex-none"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 449,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 450,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 444,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 368,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    className: "h-full",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 461,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 462,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 460,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "h-full m-0",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_styles.ThemeProvider, {
          theme,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainUI, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 466,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 467,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 468,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 469,
              columnNumber: 9
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 465,
          columnNumber: 7
        }, this)
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 464,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 459,
    columnNumber: 5
  }, this);
}

// app/routes/fetch/reg.$authName.$perPage.$pageNum.tsx
var reg_authName_perPage_pageNum_exports = {};
__export(reg_authName_perPage_pageNum_exports, {
  loader: () => loader
});
var import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/models/docinfo.server.ts
var axios = require("axios"), whichDB = process.env.WHICH_DB, whichFulltext = process.env.WHICH_FULLTEXT, Airtable = require("airtable"), atBaseKey = "appnZn2NYRxLtEvsT", atBase = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(atBaseKey), regBaseName = "M00_Register", fs = require("fs").promises, { authenticate } = require("@google-cloud/local-auth"), { google } = require("googleapis"), path = require("path");
function genConfig(data, action) {
  return {
    method: "post",
    url: process.env.MONGO_API_BASE_URL + "/action/" + action,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": process.env.MONGO_API_KEY
    },
    data
  };
}
function genDataObj({ ...dataArgs }) {
  return JSON.stringify({
    collection: "register",
    database: "marxdb",
    dataSource: process.env.MONGO_CLUSTER_NAME,
    ...dataArgs
  });
}
async function getDocinfoCountMongo() {
  var _a, _b;
  let data = genDataObj({ pipeline: [{ $count: "count" }] }), config = genConfig(data, "aggregate"), result = await axios(config);
  return (_b = (_a = result == null ? void 0 : result.data) == null ? void 0 : _a.documents[0]) == null ? void 0 : _b.count;
}
async function getDocinfoCountAirtable() {
  return (await atBase(regBaseName).select({
    view: "all_grid",
    fields: []
  }).all()).length;
}
async function getDocinfoCount() {
  return whichDB === "airtable" ? getDocinfoCountAirtable() : getDocinfoCountMongo();
}
async function getDocinfoListItems({ request }) {
  var _a, _b, _c;
  let data = genDataObj({ limit: 10, sort: "ent_id" }), config = genConfig(data, "find"), entries = await axios(config), totalFound = await getDocinfoCount();
  return {
    showCount: (_b = (_a = entries == null ? void 0 : entries.data) == null ? void 0 : _a.documents) == null ? void 0 : _b.length,
    totalCount: totalFound,
    documents: (_c = entries == null ? void 0 : entries.data) == null ? void 0 : _c.documents
  };
}
async function getDocinfoPageTotal(filterOptions) {
  var _a, _b;
  let data = genDataObj({
    sort: { ent_id: 1 },
    filter: filterOptions
  }), config = genConfig(data, "find"), entries = await axios(config);
  return (_b = (_a = entries == null ? void 0 : entries.data) == null ? void 0 : _a.documents) == null ? void 0 : _b.length;
}
async function getDocinfoPageTotalAirtable(regSection) {
  let filterFormula = "{reg_section} = '" + regSection + "'";
  return (await atBase(regBaseName).select({
    view: "all_grid",
    fields: [],
    filterByFormula: filterFormula
  }).all()).length;
}
var regSectionDict = {
  marx: "M",
  engels: "E",
  me: "ME",
  st: "ST"
};
function authNameToRegSection(authName) {
  return regSectionDict[authName];
}
var airtableData = {}, airtableTotals = {};
async function getDocinfoPageAirtable(authName, perPage, pageNum) {
  console.log("[docinfo.server] authName=" + authName + " perPage=" + perPage + " pageNum=" + pageNum);
  let gridName = authNameToRegSection(authName).toLowerCase();
  if (gridName in airtableData) {
    console.log("Using cached data");
    let gridData = airtableData[gridName], resultsFields = gridData.map((x) => x.fields), totalFound = airtableTotals[gridName], startIndex = pageNum * perPage, endIndex = (pageNum + 1) * perPage, requestedData = resultsFields.slice(startIndex, endIndex);
    return {
      showCount: gridData.length,
      totalCount: totalFound,
      documents: requestedData
    };
  } else {
    let authView = gridName + "_grid", results = await atBase(regBaseName).select({
      view: authView
    }).all();
    airtableData[gridName] = results;
    let resultsFields = results.map((x) => x.fields), regSection = authNameToRegSection(authName), totalFound = await getDocinfoPageTotalAirtable(regSection);
    airtableTotals[gridName] = totalFound;
    let startIndex = pageNum * perPage, endIndex = (pageNum + 1) * perPage, requestedData = resultsFields.slice(startIndex, endIndex);
    return {
      showCount: results.length,
      totalCount: totalFound,
      documents: requestedData
    };
  }
}
async function getDocinfoPageMongo(authName, perPage, pageNum) {
  var _a, _b, _c;
  let start = perPage * pageNum, end = start + perPage, numToSkip = Math.max(start - 1, 0), cancelledFilter = { cancelled: { $ne: !0 } }, rsFilter = {};
  authName === "st" ? rsFilter = { reg_section: { $regex: "ST" } } : rsFilter = { reg_section: { $eq: authNameToRegSection(authName) } };
  let filterOptions = { ...cancelledFilter, ...rsFilter }, data = genDataObj({
    skip: numToSkip,
    limit: perPage,
    sort: { ent_id: 1 },
    filter: filterOptions
  }), config = genConfig(data, "find"), entries = await axios(config), totalFound = await getDocinfoPageTotal(filterOptions);
  return {
    showCount: (_b = (_a = entries == null ? void 0 : entries.data) == null ? void 0 : _a.documents) == null ? void 0 : _b.length,
    totalCount: totalFound,
    documents: (_c = entries == null ? void 0 : entries.data) == null ? void 0 : _c.documents
  };
}
async function getDocinfoPage(authName, perPage, pageNum) {
  return whichDB === "airtable" ? getDocinfoPageAirtable(authName, perPage, pageNum) : getDocinfoPageMongo(authName, perPage, pageNum);
}
async function getDocinfoMongo(regCode) {
  var _a;
  let data = genDataObj({
    filter: { ent_id: { $eq: regCode } }
  }), config = genConfig(data, "findOne"), entries = await axios(config);
  console.log("[getDocinfo] entries = " + Object.keys(entries.data));
  let docResult = (_a = entries == null ? void 0 : entries.data) == null ? void 0 : _a.document;
  return console.log("[getDocinfo] returning " + docResult), docResult;
}
async function getDocinfoAirtable(regCode) {
  return console.log("[getDocInfoAirtable()]"), (await atBase(regBaseName).select({
    view: "all_grid",
    filterByFormula: "{entry_id} = '" + regCode + "'"
  }).all())[0].fields;
}
async function getDocinfo(regCode) {
  return whichDB === "mongo" ? getDocinfoMongo(regCode) : getDocinfoAirtable(regCode);
}
var SCOPES = ["https://www.googleapis.com/auth/drive.readonly"], TOKEN_PATH = path.join(process.cwd(), "gdrive", "token.json"), CREDENTIALS_PATH = path.join(process.cwd(), "gdrive", "credentials.json");
async function saveCredentials(client2) {
  let content = await fs.readFile(CREDENTIALS_PATH), keys = JSON.parse(content), key = keys.installed || keys.web, payload = JSON.stringify({
    type: "authorized_user",
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client2.credentials.refresh_token
  });
  await fs.writeFile(TOKEN_PATH, payload);
}
async function authorize() {
  let client2 = await loadSavedCredentialsIfExist();
  return client2 || (client2 = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH
  }), client2.credentials && await saveCredentials(client2), client2);
}
async function loadSavedCredentialsIfExist() {
  try {
    let content = await fs.readFile(TOKEN_PATH), credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch {
    return null;
  }
}
async function getGDriveFile(authClient, fileId) {
  let drive = google.drive({ version: "v3", auth: authClient }), filename = (await drive.files.get({
    fileId,
    fields: "name"
  })).data.name, res = await drive.files.get({
    fileId,
    alt: "media"
  });
  return {
    filename,
    fulltext: res.data
  };
}
async function getFulltextDrive(regCode) {
  let mongoDoc = await getFulltextMongo(regCode), driveId = mongoDoc.drive_id, client2 = await authorize(), fulltextData = await getGDriveFile(client2, driveId);
  return {
    entry_id: mongoDoc.ent_id,
    title: mongoDoc.title,
    fulltext_filename: fulltextData.filename,
    drive_id: driveId,
    fulltext: fulltextData.fulltext
  };
}
async function getFulltextMongo(regCode) {
  var _a;
  let data = genDataObj({
    filter: { ent_id: { $eq: regCode } },
    projection: {
      fulltext: 1,
      fulltext_filename: 1,
      drive_id: 1,
      ent_id: 1,
      title: 1
    }
  }), config = genConfig(data, "findOne"), entry2 = await axios(config), docResult = (_a = entry2 == null ? void 0 : entry2.data) == null ? void 0 : _a.document;
  return console.log("[getFulltext()] " + docResult), docResult;
}
async function getFulltext(regCode) {
  return whichFulltext === "mongo" ? getFulltextMongo(regCode) : getFulltextDrive(regCode);
}

// app/routes/fetch/reg.$authName.$perPage.$pageNum.tsx
async function loader({ request, params }) {
  (0, import_tiny_invariant.default)(params.authName, "Expected params.authName"), (0, import_tiny_invariant.default)(params.perPage, "Expected params.perPage"), (0, import_tiny_invariant.default)(params.pageNum, "Expected params.pageNum");
  let ppInt = Number(params.perPage) || 10, pnInt = Number(params.pageNum) || 0, result = await getDocinfoPage(params.authName, ppInt, pnInt);
  return {
    docs: result.documents,
    shown: result.showCount,
    total: result.totalCount
  };
}

// app/routes/fetch/chron.$perPage.$pageNum.tsx
var chron_perPage_pageNum_exports = {};
__export(chron_perPage_pageNum_exports, {
  loader: () => loader2
});
var import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// app/models/event.server.ts
var axios2 = require("axios"), { MongoClient } = require("mongodb"), mongoUri = "mongodb+srv://admin:" + process.env.MONGO_ADMIN_PW + "@cluster0.cg6nz.mongodb.net/test", client = new MongoClient(mongoUri);
function genConfig2(data, action) {
  return {
    method: "post",
    url: process.env.MONGO_API_BASE_URL + "/action/" + action,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": process.env.MONGO_API_KEY
    },
    data
  };
}
function genDataObj2({ ...dataArgs }) {
  return JSON.stringify({
    collection: "chronicle",
    database: "marxdb",
    dataSource: process.env.MONGO_CLUSTER_NAME,
    ...dataArgs
  });
}
function addMonthday(rowData) {
  return rowData.monthday = (rowData.month_start || "") + " " + (rowData.day_start || ""), rowData.ymd = rowData.year + " " + rowData.monthday, rowData;
}
async function getEventCount() {
  var _a, _b;
  let data = genDataObj2({ pipeline: [{ $count: "count" }] }), config = genConfig2(data, "aggregate"), result = await axios2(config);
  return (_b = (_a = result == null ? void 0 : result.data) == null ? void 0 : _a.documents[0]) == null ? void 0 : _b.count;
}
async function getEventPageTotal() {
  var _a, _b;
  let data = genDataObj2({ pipeline: [{ $count: "count" }] }), config = genConfig2(data, "aggregate"), result = await axios2(config);
  return (_b = (_a = result == null ? void 0 : result.data) == null ? void 0 : _a.documents[0]) == null ? void 0 : _b.count;
}
async function getEventPage(perPage, pageNum) {
  var _a, _b, _c;
  let start = perPage * pageNum, end = start + perPage, dataOptions = {
    skip: Math.max(start - 1, 0),
    limit: perPage,
    sort: { entry_id_clean: 1 }
  }, data = genDataObj2(dataOptions), config = genConfig2(data, "find"), entries = await axios2(config);
  for (var i = 0; i < entries.data.documents.length; i++) {
    let rowData = entries.data.documents[i], curMonthday = (rowData.month_start || "") + " " + (rowData.day_start || ""), curYmd = rowData.year + " " + curMonthday;
    entries.data.documents[i].monthday = curMonthday, entries.data.documents[i].ymd = curYmd;
  }
  let totalFound = await getEventPageTotal();
  return {
    showCount: (_b = (_a = entries == null ? void 0 : entries.data) == null ? void 0 : _a.documents) == null ? void 0 : _b.length,
    totalCount: totalFound,
    documents: (_c = entries == null ? void 0 : entries.data) == null ? void 0 : _c.documents
  };
}
async function getEvent(chronCode) {
  var _a;
  let data = genDataObj2({
    filter: { entry_id_clean: { $eq: chronCode } }
  }), config = genConfig2(data, "findOne"), entries = await axios2(config);
  console.log("[getEvent] entries = " + Object.keys(entries.data));
  let docResult = (_a = entries == null ? void 0 : entries.data) == null ? void 0 : _a.document;
  return console.log("[getEvent] returning " + docResult), docResult = addMonthday(docResult), docResult;
}
async function searchEvents(query) {
  await client.connect();
  let coll = client.db("marxdb").collection("chronicle"), mongoQuery = { $text: { $search: query } };
  console.log("mongoQuery: " + JSON.stringify(mongoQuery));
  let projection = {
    _id: 1,
    text: 1
  }, totalCount = await coll.find(mongoQuery).count(), limit = 10, sort = {
    entry_id: 1
  }, results = await coll.find(mongoQuery, { sort, limit }).toArray();
  return await client.close(), {
    documents: results,
    showCount: limit,
    totalCount
  };
}

// app/routes/fetch/chron.$perPage.$pageNum.tsx
async function loader2({ request, params }) {
  (0, import_tiny_invariant2.default)(params.perPage, "Expected params.perPage"), (0, import_tiny_invariant2.default)(params.pageNum, "Expected params.pageNum");
  let ppInt = Number(params.perPage) || 10, pnInt = Number(params.pageNum) || 0, result = await getEventPage(ppInt, pnInt);
  return {
    docs: result.documents,
    shown: result.showCount,
    total: result.totalCount
  };
}

// app/routes/fetch/gloss.$perPage.$pageNum.tsx
var gloss_perPage_pageNum_exports = {};
__export(gloss_perPage_pageNum_exports, {
  loader: () => loader3
});
var import_tiny_invariant3 = __toESM(require("tiny-invariant"));

// app/models/entity.server.ts
var axios3 = require("axios");
function genConfig3(data, action) {
  return {
    method: "post",
    url: process.env.MONGO_API_BASE_URL + "/action/" + action,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": process.env.MONGO_API_KEY
    },
    data
  };
}
function genDataObj3({ ...dataArgs }) {
  return JSON.stringify({
    collection: "glossary",
    database: "marxdb",
    dataSource: process.env.MONGO_CLUSTER_NAME,
    ...dataArgs
  });
}
async function getEntityCount() {
  var _a, _b;
  let data = genDataObj3({ pipeline: [{ $count: "count" }] }), config = genConfig3(data, "aggregate"), result = await axios3(config);
  return (_b = (_a = result == null ? void 0 : result.data) == null ? void 0 : _a.documents[0]) == null ? void 0 : _b.count;
}
async function getEntityPageTotal() {
  var _a, _b;
  let data = genDataObj3({ pipeline: [{ $count: "count" }] }), config = genConfig3(data, "aggregate"), result = await axios3(config);
  return (_b = (_a = result == null ? void 0 : result.data) == null ? void 0 : _a.documents[0]) == null ? void 0 : _b.count;
}
async function getEntityPage(perPage, pageNum) {
  var _a, _b, _c;
  let start = perPage * pageNum, end = start + perPage, dataOptions = {
    skip: Math.max(start - 1, 0),
    limit: perPage,
    sort: { id: 1 }
  }, data = genDataObj3(dataOptions), config = genConfig3(data, "find"), entries = await axios3(config), totalFound = await getEntityPageTotal();
  return {
    showCount: (_b = (_a = entries == null ? void 0 : entries.data) == null ? void 0 : _a.documents) == null ? void 0 : _b.length,
    totalCount: totalFound,
    documents: (_c = entries == null ? void 0 : entries.data) == null ? void 0 : _c.documents
  };
}
async function getEntity(entCode) {
  var _a;
  let data = genDataObj3({
    filter: { id: { $eq: entCode } }
  }), config = genConfig3(data, "findOne"), entries = await axios3(config);
  console.log("[getEntity] entries = " + Object.keys(entries.data));
  let docResult = (_a = entries == null ? void 0 : entries.data) == null ? void 0 : _a.document;
  return console.log("[getEntity] returning " + docResult), docResult;
}

// app/routes/fetch/gloss.$perPage.$pageNum.tsx
async function loader3({ request, params }) {
  (0, import_tiny_invariant3.default)(params.perPage, "Expected params.perPage"), (0, import_tiny_invariant3.default)(params.pageNum, "Expected params.pageNum");
  let ppInt = Number(params.perPage) || 10, pnInt = Number(params.pageNum) || 0, result = await getEntityPage(ppInt, pnInt);
  return {
    docs: result.documents,
    shown: result.showCount,
    total: result.totalCount
  };
}

// app/routes/fetch/reg.fulltext.$regCode.tsx
var reg_fulltext_regCode_exports = {};
__export(reg_fulltext_regCode_exports, {
  loader: () => loader4
});
var import_tiny_invariant4 = __toESM(require("tiny-invariant"));
async function loader4({ request, params }) {
  return (0, import_tiny_invariant4.default)(params.regCode, "Expected params.regCode"), await getFulltext(params.regCode);
}

// app/routes/fetch/reg.details.$regCode.tsx
var reg_details_regCode_exports = {};
__export(reg_details_regCode_exports, {
  loader: () => loader5
});
var import_tiny_invariant5 = __toESM(require("tiny-invariant"));
async function loader5({ request, params }) {
  return (0, import_tiny_invariant5.default)(params.regCode, "Expected params.regCode"), await getDocinfo(params.regCode);
}

// app/routes/fetch/chron.search.$query.tsx
var chron_search_query_exports = {};
__export(chron_search_query_exports, {
  loader: () => loader6
});
var import_tiny_invariant6 = __toESM(require("tiny-invariant"));
async function loader6({ request, params }) {
  (0, import_tiny_invariant6.default)(params.query, "Expected params.query");
  let result = await searchEvents(params.query);
  return {
    docs: result.documents,
    shown: result.showCount,
    total: result.totalCount
  };
}

// app/routes/fetch/chron.count.tsx
var chron_count_exports = {};
__export(chron_count_exports, {
  loader: () => loader7
});
async function loader7({ request, params }) {
  return await getEventCount();
}

// app/routes/fetch/gloss.count.tsx
var gloss_count_exports = {};
__export(gloss_count_exports, {
  loader: () => loader8
});
async function loader8({ request, params }) {
  return await getEntityCount();
}

// app/routes/gloss/$glossCode.tsx
var glossCode_exports = {};
__export(glossCode_exports, {
  default: () => EntityDetailsPage,
  loader: () => loader9
});
var import_tiny_invariant7 = __toESM(require("tiny-invariant")), import_react3 = require("@remix-run/react"), import_ArrowBack = __toESM(require("@mui/icons-material/ArrowBack")), import_Button = __toESM(require("@mui/material/Button")), import_Paper = __toESM(require("@mui/material/Paper"));

// app/components/entityDetails.tsx
var React2 = __toESM(require("react")), import_Box2 = __toESM(require("@mui/material/Box")), import_Chip = __toESM(require("@mui/material/Chip")), import_Link = __toESM(require("@mui/icons-material/Link")), import_Table = __toESM(require("@mui/material/Table")), import_TableBody = __toESM(require("@mui/material/TableBody")), import_TableCell = __toESM(require("@mui/material/TableCell")), import_TableRow = __toESM(require("@mui/material/TableRow")), import_Tooltip = __toESM(require("@mui/material/Tooltip")), import_Typography2 = __toESM(require("@mui/material/Typography")), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function EntityDetailsPanel(props) {
  let rowData = props.data;
  console.log("[entityDetails] rowData: " + Object.keys(rowData));
  let [tooltipText, setTooltipText] = React2.useState("Copy Link"), handleTooltipClose = () => {
    setTooltipText("Copy Link");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    style: {
      fontSize: 16,
      padding: 5,
      margin: 5
    },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Box2.default, {
      sx: { margin: 1 },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "grid grid-cols-2 mb-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "h-full",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Typography2.default, {
                variant: "h5",
                className: "inline-flex align-middle font-bold",
                children: rowData.id
              }, void 0, !1, {
                fileName: "app/components/entityDetails.tsx",
                lineNumber: 39,
                columnNumber: 25
              }, this)
            }, void 0, !1, {
              fileName: "app/components/entityDetails.tsx",
              lineNumber: 38,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "self-center float-right",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Tooltip.default, {
                title: tooltipText,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Chip.default, {
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Link.default, {}, void 0, !1, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 46,
                    columnNumber: 39
                  }, this),
                  label: rowData.id,
                  variant: "outlined",
                  className: "float-right",
                  onMouseLeave: handleTooltipClose,
                  onClick: () => {
                    navigator.clipboard.writeText(`https://marxdb.com/gloss/${rowData.id}`).then(
                      function() {
                        console.log("Success! The text was copied to your clipboard"), setTooltipText("Link Copied!");
                      },
                      function() {
                        console.log("Oops! Your browser does not support the Clipboard API");
                      }
                    );
                  }
                }, void 0, !1, {
                  fileName: "app/components/entityDetails.tsx",
                  lineNumber: 45,
                  columnNumber: 29
                }, this)
              }, void 0, !1, {
                fileName: "app/components/entityDetails.tsx",
                lineNumber: 44,
                columnNumber: 25
              }, this)
            }, void 0, !1, {
              fileName: "app/components/entityDetails.tsx",
              lineNumber: 43,
              columnNumber: 21
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/entityDetails.tsx",
          lineNumber: 37,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Table.default, {
          size: "small",
          "aria-label": "details",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableBody.default, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow.default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell.default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Heading"
                  }, void 0, !1, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 72,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell.default, {
                    colSpan: 5,
                    className: "font-bold",
                    children: rowData.header
                  }, void 0, !1, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 79,
                    columnNumber: 29
                  }, this)
                ]
              }, "header", !0, {
                fileName: "app/components/entityDetails.tsx",
                lineNumber: 71,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow.default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell.default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Description"
                  }, void 0, !1, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 82,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell.default, {
                    colSpan: 5,
                    className: "font-mono",
                    children: rowData.text
                  }, void 0, !1, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 89,
                    columnNumber: 29
                  }, this)
                ]
              }, "desc", !0, {
                fileName: "app/components/entityDetails.tsx",
                lineNumber: 81,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow.default, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell.default, {
                    sx: { fontWeight: "bold" },
                    children: "Written"
                  }, void 0, !1, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 92,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell.default, {
                    children: rowData.written
                  }, void 0, !1, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 95,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell.default, {
                    sx: { fontWeight: "bold" },
                    children: "Dated"
                  }, void 0, !1, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 98,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell.default, {
                    children: Object.keys(rowData).indexOf("dated") > -1 ? rowData.dated : "NA"
                  }, void 0, !1, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 101,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell.default, {
                    sx: { fontWeight: "bold" },
                    children: "Published"
                  }, void 0, !1, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 104,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell.default, {
                    children: Object.keys(rowData).indexOf("published") > -1 ? rowData.published : "NA"
                  }, void 0, !1, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 107,
                    columnNumber: 29
                  }, this)
                ]
              }, "dates", !0, {
                fileName: "app/components/entityDetails.tsx",
                lineNumber: 91,
                columnNumber: 25
              }, this),
              Object.keys(rowData).indexOf("lang_orig") > -1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow.default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell.default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Language(s)"
                  }, void 0, !1, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 113,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell.default, {
                    colSpan: 5,
                    children: rowData.lang_orig.join(", ")
                  }, void 0, !1, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 120,
                    columnNumber: 33
                  }, this)
                ]
              }, "langs", !0, {
                fileName: "app/components/entityDetails.tsx",
                lineNumber: 112,
                columnNumber: 29
              }, this),
              Object.keys(rowData).indexOf("source") > -1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow.default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell.default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Source(s)"
                  }, void 0, !1, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 125,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell.default, {
                    colSpan: 5,
                    children: rowData.source
                  }, void 0, !1, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 132,
                    columnNumber: 33
                  }, this)
                ]
              }, "sources", !0, {
                fileName: "app/components/entityDetails.tsx",
                lineNumber: 124,
                columnNumber: 29
              }, this),
              Object.keys(rowData).indexOf("reprint") > -1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow.default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell.default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Reprints"
                  }, void 0, !1, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 137,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell.default, {
                    colSpan: 5,
                    children: rowData.reprint
                  }, void 0, !1, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 144,
                    columnNumber: 33
                  }, this)
                ]
              }, "reprints", !0, {
                fileName: "app/components/entityDetails.tsx",
                lineNumber: 136,
                columnNumber: 29
              }, this),
              Object.keys(rowData).indexOf("more_info") > -1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow.default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell.default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Misc"
                  }, void 0, !1, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 149,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell.default, {
                    colSpan: 5,
                    children: rowData.more_info
                  }, void 0, !1, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 156,
                    columnNumber: 33
                  }, this)
                ]
              }, "misc", !0, {
                fileName: "app/components/entityDetails.tsx",
                lineNumber: 148,
                columnNumber: 29
              }, this),
              Object.keys(rowData).indexOf("chron_ref_ids") > -1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow.default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell.default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Chronicle References"
                  }, void 0, !1, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 161,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell.default, {
                    colSpan: 5,
                    children: rowData.chron_ref_ids.map((item) => getChronRefLink(item))
                  }, void 0, !1, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 168,
                    columnNumber: 33
                  }, this)
                ]
              }, "chronrefs", !0, {
                fileName: "app/components/entityDetails.tsx",
                lineNumber: 160,
                columnNumber: 29
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/entityDetails.tsx",
            lineNumber: 70,
            columnNumber: 21
          }, this)
        }, void 0, !1, {
          fileName: "app/components/entityDetails.tsx",
          lineNumber: 69,
          columnNumber: 17
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/entityDetails.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
    fileName: "app/components/entityDetails.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this);
}

// app/routes/gloss/$glossCode.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader9({ request, params }) {
  (0, import_tiny_invariant7.default)(params.glossCode, "Expected params.glossCode");
  let glossCode = params.glossCode;
  console.log("[$glossCode.tsx] glossCode: " + glossCode);
  let entityData = await getEntity(glossCode);
  return { glossCode, entityData };
}
function EntityDetailsPage() {
  let entityData = (0, import_react3.useLoaderData)().entityData;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.NavLink, {
          to: "../../gloss/",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Button.default, {
            startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ArrowBack.default, {}, void 0, !1, {
              fileName: "app/routes/gloss/$glossCode.tsx",
              lineNumber: 35,
              columnNumber: 40
            }, this),
            children: "Back to Glossary"
          }, void 0, !1, {
            fileName: "app/routes/gloss/$glossCode.tsx",
            lineNumber: 35,
            columnNumber: 21
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/gloss/$glossCode.tsx",
          lineNumber: 34,
          columnNumber: 17
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/gloss/$glossCode.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Paper.default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntityDetailsPanel, {
          data: entityData
        }, void 0, !1, {
          fileName: "app/routes/gloss/$glossCode.tsx",
          lineNumber: 41,
          columnNumber: 17
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/gloss/$glossCode.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/gloss/$glossCode.tsx",
    lineNumber: 32,
    columnNumber: 9
  }, this);
}

// app/routes/fetch/reg.count.tsx
var reg_count_exports = {};
__export(reg_count_exports, {
  loader: () => loader10
});
async function loader10({ request, params }) {
  return await getDocinfoCount();
}

// app/routes/gloss_datatable.tsx
var gloss_datatable_exports = {};
__export(gloss_datatable_exports, {
  default: () => CollapsibleTable,
  loader: () => loader11
});
var React3 = __toESM(require("react")), import_styles3 = require("@mui/material/styles"), import_Box3 = __toESM(require("@mui/material/Box")), import_Collapse = __toESM(require("@mui/material/Collapse")), import_FirstPage = __toESM(require("@mui/icons-material/FirstPage")), import_IconButton2 = __toESM(require("@mui/material/IconButton")), import_Toolbar2 = __toESM(require("@mui/material/Toolbar")), import_Table2 = __toESM(require("@mui/material/Table")), import_TableBody2 = __toESM(require("@mui/material/TableBody")), import_TableCell2 = __toESM(require("@mui/material/TableCell")), import_TableHead = __toESM(require("@mui/material/TableHead")), import_TableRow2 = __toESM(require("@mui/material/TableRow")), import_Typography3 = __toESM(require("@mui/material/Typography")), import_KeyboardArrowDown = __toESM(require("@mui/icons-material/KeyboardArrowDown")), import_KeyboardArrowUp = __toESM(require("@mui/icons-material/KeyboardArrowUp")), import_KeyboardArrowLeft = __toESM(require("@mui/icons-material/KeyboardArrowLeft")), import_KeyboardArrowRight = __toESM(require("@mui/icons-material/KeyboardArrowRight")), import_LastPage = __toESM(require("@mui/icons-material/LastPage")), import_core = __toESM(require("@material-table/core")), import_node = require("@remix-run/node"), import_react4 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), defaultPerPage = 3, defaultPageNum = 0;
async function loader11({ request }) {
  let docinfoListItems = await getDocinfoListItems();
  return (0, import_node.json)({ docinfoListItems });
}
function CollapsibleTable() {
  let initData = (0, import_react4.useLoaderData)(), fetcher = (0, import_react4.useFetcher)();
  React3.useEffect(() => {
    fetcher.type === "init" && fetcher.load(`/fetch/gloss/${defaultPerPage}/${defaultPageNum}`);
  }, [fetcher]);
  let [page, setPage] = React3.useState(0), [rowsPerPage, setRowsPerPage] = React3.useState(5), [rowsOnPage, setRowsOnPage] = React3.useState(5), emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowsOnPage) : 0, handleChangePage = (event, newPage) => {
    setPage(newPage);
  }, handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10)), setPage(0);
  }, DEMO_DATA = [
    { id: 1, name: "Mary" },
    { id: 2, name: "Joe" },
    { id: 3, name: "Jim" },
    { id: 4, name: "Bob" },
    { id: 5, name: "Bernie" },
    { id: 6, name: "Jimbo" }
  ], DEMO_COLS = [
    { field: "id", title: "Id" },
    { field: "title", title: "Title" }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: fetcher.type !== "done" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      children: "Loading..."
    }, void 0, !1, {
      fileName: "app/routes/gloss_datatable.tsx",
      lineNumber: 254,
      columnNumber: 32
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core.default, {
      columns: DEMO_COLS,
      detailPanel: ({ rowData }) => (console.log(rowData), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        style: {
          fontSize: 16,
          padding: 5,
          margin: 5
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Box3.default, {
          sx: { margin: 1 },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Typography3.default, {
              variant: "h6",
              gutterBottom: !0,
              component: "div",
              children: rowData.title
            }, void 0, !1, {
              fileName: "app/routes/gloss_datatable.tsx",
              lineNumber: 269,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Table2.default, {
              size: "small",
              "aria-label": "details",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableBody2.default, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow2.default, {
                    sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell2.default, {
                        component: "th",
                        scope: "row",
                        sx: { fontWeight: "bold" },
                        children: "Full Text"
                      }, void 0, !1, {
                        fileName: "app/routes/gloss_datatable.tsx",
                        lineNumber: 275,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell2.default, {
                        colSpan: 5,
                        children: rowData.fullText
                      }, void 0, !1, {
                        fileName: "app/routes/gloss_datatable.tsx",
                        lineNumber: 282,
                        columnNumber: 29
                      }, this)
                    ]
                  }, "fulltext", !0, {
                    fileName: "app/routes/gloss_datatable.tsx",
                    lineNumber: 274,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow2.default, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell2.default, {
                        sx: { fontWeight: "bold" },
                        children: "Written"
                      }, void 0, !1, {
                        fileName: "app/routes/gloss_datatable.tsx",
                        lineNumber: 285,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell2.default, {
                        children: "1/1/1850"
                      }, void 0, !1, {
                        fileName: "app/routes/gloss_datatable.tsx",
                        lineNumber: 288,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell2.default, {
                        sx: { fontWeight: "bold" },
                        children: "Dated"
                      }, void 0, !1, {
                        fileName: "app/routes/gloss_datatable.tsx",
                        lineNumber: 291,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell2.default, {
                        children: "1/3/1850"
                      }, void 0, !1, {
                        fileName: "app/routes/gloss_datatable.tsx",
                        lineNumber: 294,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell2.default, {
                        sx: { fontWeight: "bold" },
                        children: "Published"
                      }, void 0, !1, {
                        fileName: "app/routes/gloss_datatable.tsx",
                        lineNumber: 297,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell2.default, {
                        children: "1/2/1850"
                      }, void 0, !1, {
                        fileName: "app/routes/gloss_datatable.tsx",
                        lineNumber: 300,
                        columnNumber: 29
                      }, this)
                    ]
                  }, "dates", !0, {
                    fileName: "app/routes/gloss_datatable.tsx",
                    lineNumber: 284,
                    columnNumber: 27
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/gloss_datatable.tsx",
                lineNumber: 273,
                columnNumber: 23
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/gloss_datatable.tsx",
              lineNumber: 272,
              columnNumber: 21
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/gloss_datatable.tsx",
          lineNumber: 268,
          columnNumber: 19
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/gloss_datatable.tsx",
        lineNumber: 261,
        columnNumber: 17
      }, this)),
      data: fetcher.data.result
    }, void 0, !1, {
      fileName: "app/routes/gloss_datatable.tsx",
      lineNumber: 255,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/gloss_datatable.tsx",
    lineNumber: 253,
    columnNumber: 5
  }, this);
}

// app/routes/gloss/index.tsx
var gloss_exports = {};
__export(gloss_exports, {
  default: () => GlossTable
});
var React4 = __toESM(require("react")), import_react5 = require("@remix-run/react"), import_Box4 = __toESM(require("@mui/material/Box")), import_Paper2 = __toESM(require("@mui/material/Paper")), import_TableContainer = __toESM(require("@mui/material/TableContainer")), import_Info = __toESM(require("@mui/icons-material/Info")), import_core2 = __toESM(require("@material-table/core"));
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
function GlossTable() {
  let data_cols = [
    { field: "id", title: "ID", width: "60px" },
    { field: "desc", title: "Description", cellStyle: { width: "65%" }, headerStyle: { width: "65%" } }
  ], fetcher = (0, import_react5.useFetcher)();
  return React4.useEffect(() => {
    fetcher.type === "init" && fetcher.load("/fetch/gloss/10/0");
  }, [fetcher]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableContainer.default, {
    component: import_Paper2.default,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core2.default, {
      title: "Glossary",
      options: {
        actionsColumnIndex: -1,
        padding: "dense",
        pageSize: 10,
        pageSizeOptions: [10],
        columnsButton: !0,
        exportAllData: !0,
        initialPage: 0,
        draggable: !1,
        toolbar: !0,
        paginationType: "stepped",
        numberOfPagesAround: 4
      },
      columns: data_cols,
      detailPanel: ({ rowData }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntityDetailsPanel, {
        data: rowData
      }, void 0, !1, {
        fileName: "app/routes/gloss/index.tsx",
        lineNumber: 81,
        columnNumber: 43
      }, this),
      data: (query) => new Promise((resolve, reject) => {
        fetch(`/fetch/gloss/10/${query.page}`).then((response) => response.json()).then((rsJson) => {
          resolve({
            data: rsJson.docs,
            page: query.page,
            totalCount: rsJson.total
          });
        });
      }),
      components: {
        Cell: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core2.MTableCell, {
          className: "overflow-hidden text-ellipsis whitespace-nowrap max-w-[550px]",
          ...props
        }, void 0, !1, {
          fileName: "app/routes/gloss/index.tsx",
          lineNumber: 98,
          columnNumber: 25
        }, this),
        Container: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Paper2.default, {
          className: "even:[&>*]:grow",
          sx: { display: "flex", flexDirection: "column", height: "100%", maxHeight: "100%" },
          elevation: 1,
          ...props
        }, void 0, !1, {
          fileName: "app/routes/gloss/index.tsx",
          lineNumber: 101,
          columnNumber: 25
        }, this),
        Toolbar: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Box4.default, {
          sx: { borderBottom: "1px solid rgba(184,184,184,1)" },
          className: "bg-green-700/10",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core2.MTableToolbar, {
            className: "min-h-[48px]",
            ...props
          }, void 0, !1, {
            fileName: "app/routes/gloss/index.tsx",
            lineNumber: 105,
            columnNumber: 29
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/gloss/index.tsx",
          lineNumber: 104,
          columnNumber: 25
        }, this),
        Body: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core2.MTableBody, {
          className: "overflow-hidden text-ellipsis",
          ...props
        }, void 0, !1, {
          fileName: "app/routes/gloss/index.tsx",
          lineNumber: 109,
          columnNumber: 25
        }, this)
      },
      actions: [
        {
          icon: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Info.default, {}, void 0, !1, {
            fileName: "app/routes/gloss/index.tsx",
            lineNumber: 115,
            columnNumber: 29
          }, this),
          tooltip: "View Full Info",
          onClick: (event, rowData) => {
            openInNewTab(`./${rowData.id}`);
          }
        }
      ],
      localization: {
        pagination: {
          labelDisplayedRows: "{from}-{to} of {count}"
        },
        toolbar: {
          nRowsSelected: "{0} row(s) selected"
        },
        header: {
          actions: ""
        },
        body: {
          emptyDataSourceMessage: "No records to display",
          filterRow: {
            filterTooltip: "Filter"
          }
        }
      }
    }, void 0, !1, {
      fileName: "app/routes/gloss/index.tsx",
      lineNumber: 62,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/gloss/index.tsx",
    lineNumber: 61,
    columnNumber: 9
  }, this);
}

// app/routes/letters.tsx
var letters_exports = {};
__export(letters_exports, {
  default: () => CollapsibleTable2,
  loader: () => loader12
});
var React5 = __toESM(require("react")), import_styles4 = require("@mui/material/styles"), import_Box5 = __toESM(require("@mui/material/Box")), import_Collapse2 = __toESM(require("@mui/material/Collapse")), import_FirstPage2 = __toESM(require("@mui/icons-material/FirstPage")), import_IconButton3 = __toESM(require("@mui/material/IconButton")), import_Toolbar3 = __toESM(require("@mui/material/Toolbar")), import_Table3 = __toESM(require("@mui/material/Table")), import_TableBody3 = __toESM(require("@mui/material/TableBody")), import_TableCell3 = __toESM(require("@mui/material/TableCell")), import_TableHead2 = __toESM(require("@mui/material/TableHead")), import_TableRow3 = __toESM(require("@mui/material/TableRow")), import_Typography4 = __toESM(require("@mui/material/Typography")), import_KeyboardArrowDown2 = __toESM(require("@mui/icons-material/KeyboardArrowDown")), import_KeyboardArrowUp2 = __toESM(require("@mui/icons-material/KeyboardArrowUp")), import_KeyboardArrowLeft2 = __toESM(require("@mui/icons-material/KeyboardArrowLeft")), import_KeyboardArrowRight2 = __toESM(require("@mui/icons-material/KeyboardArrowRight")), import_LastPage2 = __toESM(require("@mui/icons-material/LastPage")), import_core3 = __toESM(require("@material-table/core")), import_node2 = require("@remix-run/node"), import_react6 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), defaultPerPage2 = 3, defaultPageNum2 = 0;
async function loader12({ request }) {
  let docinfoListItems = await getDocinfoListItems();
  return (0, import_node2.json)({ docinfoListItems });
}
function CollapsibleTable2() {
  let initData = (0, import_react6.useLoaderData)(), fetcher = (0, import_react6.useFetcher)();
  React5.useEffect(() => {
    fetcher.type === "init" && fetcher.load(`/fetch/gloss/${defaultPerPage2}/${defaultPageNum2}`);
  }, [fetcher]);
  let [page, setPage] = React5.useState(0), [rowsPerPage, setRowsPerPage] = React5.useState(5), [rowsOnPage, setRowsOnPage] = React5.useState(5), emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowsOnPage) : 0, handleChangePage = (event, newPage) => {
    setPage(newPage);
  }, handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10)), setPage(0);
  }, DEMO_DATA = [
    { id: 1, name: "Mary" },
    { id: 2, name: "Joe" },
    { id: 3, name: "Jim" },
    { id: 4, name: "Bob" },
    { id: 5, name: "Bernie" },
    { id: 6, name: "Jimbo" }
  ], DEMO_COLS = [
    { field: "id", title: "Id" },
    { field: "title", title: "Title" }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: fetcher.type !== "done" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      children: "Loading..."
    }, void 0, !1, {
      fileName: "app/routes/letters.tsx",
      lineNumber: 254,
      columnNumber: 32
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core3.default, {
      columns: DEMO_COLS,
      detailPanel: ({ rowData }) => (console.log(rowData), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        style: {
          fontSize: 16,
          padding: 5,
          margin: 5
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Box5.default, {
          sx: { margin: 1 },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Typography4.default, {
              variant: "h6",
              gutterBottom: !0,
              component: "div",
              children: rowData.title
            }, void 0, !1, {
              fileName: "app/routes/letters.tsx",
              lineNumber: 269,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Table3.default, {
              size: "small",
              "aria-label": "details",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableBody3.default, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow3.default, {
                    sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell3.default, {
                        component: "th",
                        scope: "row",
                        sx: { fontWeight: "bold" },
                        children: "Full Text"
                      }, void 0, !1, {
                        fileName: "app/routes/letters.tsx",
                        lineNumber: 275,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell3.default, {
                        colSpan: 3,
                        children: rowData.fullText
                      }, void 0, !1, {
                        fileName: "app/routes/letters.tsx",
                        lineNumber: 282,
                        columnNumber: 29
                      }, this)
                    ]
                  }, "fulltext", !0, {
                    fileName: "app/routes/letters.tsx",
                    lineNumber: 274,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow3.default, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell3.default, {
                        sx: { fontWeight: "bold" },
                        children: "Date Written"
                      }, void 0, !1, {
                        fileName: "app/routes/letters.tsx",
                        lineNumber: 285,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell3.default, {
                        children: "1/1/1850"
                      }, void 0, !1, {
                        fileName: "app/routes/letters.tsx",
                        lineNumber: 288,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell3.default, {
                        sx: { fontWeight: "bold" },
                        children: "Date Published"
                      }, void 0, !1, {
                        fileName: "app/routes/letters.tsx",
                        lineNumber: 291,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell3.default, {
                        children: "1/2/1850"
                      }, void 0, !1, {
                        fileName: "app/routes/letters.tsx",
                        lineNumber: 294,
                        columnNumber: 29
                      }, this)
                    ]
                  }, "dates", !0, {
                    fileName: "app/routes/letters.tsx",
                    lineNumber: 284,
                    columnNumber: 27
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/letters.tsx",
                lineNumber: 273,
                columnNumber: 23
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/letters.tsx",
              lineNumber: 272,
              columnNumber: 21
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/letters.tsx",
          lineNumber: 268,
          columnNumber: 19
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/letters.tsx",
        lineNumber: 261,
        columnNumber: 17
      }, this)),
      data: fetcher.data.result
    }, void 0, !1, {
      fileName: "app/routes/letters.tsx",
      lineNumber: 255,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/letters.tsx",
    lineNumber: 253,
    columnNumber: 5
  }, this);
}

// app/routes/chron.tsx
var chron_exports = {};
__export(chron_exports, {
  default: () => ChronPage
});
var import_react7 = require("@remix-run/react"), import_Typography5 = __toESM(require("@mui/material/Typography")), import_Button2 = __toESM(require("@mui/material/Button")), import_ArrowBack2 = __toESM(require("@mui/icons-material/ArrowBack")), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function ChronPage() {
  let pathname = (0, import_react7.useLocation)().pathname;
  return pathname.endsWith("/") && (pathname = pathname.substring(0, pathname.length - 1)), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Outlet, {}, void 0, !1, {
    fileName: "app/routes/chron.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
}

// app/routes/chron/$chronCode.tsx
var chronCode_exports = {};
__export(chronCode_exports, {
  default: () => ChronTable,
  loader: () => loader13
});
var React7 = __toESM(require("react")), import_tiny_invariant8 = __toESM(require("tiny-invariant")), import_react9 = require("@remix-run/react"), import_ArrowBack3 = __toESM(require("@mui/icons-material/ArrowBack")), import_Box7 = __toESM(require("@mui/material/Box")), import_Button3 = __toESM(require("@mui/material/Button")), import_KeyboardArrowLeft3 = __toESM(require("@mui/icons-material/KeyboardArrowLeft")), import_KeyboardArrowRight3 = __toESM(require("@mui/icons-material/KeyboardArrowRight")), import_Paper3 = __toESM(require("@mui/material/Paper")), import_TableContainer2 = __toESM(require("@mui/material/TableContainer")), import_Info3 = __toESM(require("@mui/icons-material/Info")), import_core4 = __toESM(require("@material-table/core"));

// app/components/eventDetails.tsx
var React6 = __toESM(require("react")), import_Box6 = __toESM(require("@mui/material/Box")), import_Chip2 = __toESM(require("@mui/material/Chip")), import_Info2 = __toESM(require("@mui/icons-material/Info")), import_Table4 = __toESM(require("@mui/material/Table")), import_TableBody4 = __toESM(require("@mui/material/TableBody")), import_TableCell4 = __toESM(require("@mui/material/TableCell")), import_TableRow4 = __toESM(require("@mui/material/TableRow")), import_Tooltip2 = __toESM(require("@mui/material/Tooltip")), import_Typography6 = __toESM(require("@mui/material/Typography")), import_react8 = require("@remix-run/react"), import_OpenInNew = __toESM(require("@mui/icons-material/OpenInNew")), import_FormControl = __toESM(require("@mui/material/FormControl")), import_InputLabel = __toESM(require("@mui/material/InputLabel")), import_OutlinedInput = __toESM(require("@mui/material/OutlinedInput")), import_InputAdornment = __toESM(require("@mui/material/InputAdornment")), import_IconButton4 = __toESM(require("@mui/material/IconButton")), import_ContentCopy = __toESM(require("@mui/icons-material/ContentCopy")), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function getChronRefLink2(chronRefId) {
  let relUrl = "../../chron/" + chronRefId;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.NavLink, {
    to: relUrl,
    rel: "noopener,noreferrer",
    target: "_blank",
    className: "m-2 p-2 border border-solid border-black cursor-pointer rounded-full",
    children: [
      "18" + chronRefId,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_OpenInNew.default, {
        sx: { ml: 1 },
        fontSize: "small"
      }, void 0, !1, {
        fileName: "app/components/eventDetails.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/eventDetails.tsx",
    lineNumber: 55,
    columnNumber: 9
  }, this);
}
function EventDetailsPanel(props) {
  let rowData = props.data, [tooltipText, setTooltipText] = React6.useState("Copy Link"), handleTooltipClose = () => {
    setTooltipText("Copy Link");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    style: {
      fontSize: 16,
      padding: 5,
      margin: 5
    },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Box6.default, {
      sx: { margin: 1 },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "grid grid-cols-2 mb-2 items-center",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Typography6.default, {
              variant: "h5",
              className: "table-cell align-middle font-bold",
              children: rowData.ymd
            }, void 0, !1, {
              fileName: "app/components/eventDetails.tsx",
              lineNumber: 84,
              columnNumber: 21
            }, this),
            rowData.start_approx === "checked" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Tooltip2.default, {
              title: "Start date is approximate",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Chip2.default, {
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Info2.default, {}, void 0, !1, {
                  fileName: "app/components/eventDetails.tsx",
                  lineNumber: 90,
                  columnNumber: 39
                }, this),
                label: "Approximate",
                className: "m-2 cursor-pointer"
              }, void 0, !1, {
                fileName: "app/components/eventDetails.tsx",
                lineNumber: 89,
                columnNumber: 29
              }, this)
            }, void 0, !1, {
              fileName: "app/components/eventDetails.tsx",
              lineNumber: 88,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "self-center float-right",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_FormControl.default, {
                sx: { m: 1, width: "36ch" },
                variant: "outlined",
                className: "float-right",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_InputLabel.default, {
                    htmlFor: "outlined-adornment-password",
                    children: "Permalink"
                  }, void 0, !1, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 98,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_OutlinedInput.default, {
                    id: "outlined-adornment-password",
                    className: "float-right",
                    value: `https://marxdb.com/chron/${rowData.entry_id_clean}`,
                    disabled: !0,
                    type: "text",
                    size: "small",
                    endAdornment: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_InputAdornment.default, {
                      position: "end",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Tooltip2.default, {
                        title: tooltipText,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_IconButton4.default, {
                          "aria-label": "toggle password visibility",
                          edge: "end",
                          onClick: () => {
                            navigator.clipboard.writeText(`https://marxdb.com/chron/${rowData.entry_id_clean}`).then(
                              function() {
                                console.log("Success! The text was copied to your clipboard"), setTooltipText("Link Copied!");
                              },
                              function() {
                                console.log("Oops! Your browser does not support the Clipboard API");
                              }
                            );
                          },
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ContentCopy.default, {}, void 0, !1, {
                            fileName: "app/components/eventDetails.tsx",
                            lineNumber: 127,
                            columnNumber: 46
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/components/eventDetails.tsx",
                          lineNumber: 109,
                          columnNumber: 41
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/components/eventDetails.tsx",
                        lineNumber: 108,
                        columnNumber: 41
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/components/eventDetails.tsx",
                      lineNumber: 107,
                      columnNumber: 37
                    }, this),
                    label: "Permalink"
                  }, void 0, !1, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 99,
                    columnNumber: 29
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/eventDetails.tsx",
                lineNumber: 97,
                columnNumber: 25
              }, this)
            }, void 0, !1, {
              fileName: "app/components/eventDetails.tsx",
              lineNumber: 96,
              columnNumber: 21
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/eventDetails.tsx",
          lineNumber: 83,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Table4.default, {
          size: "small",
          "aria-label": "details",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableBody4.default, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow4.default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell4.default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Heading"
                  }, void 0, !1, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 140,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell4.default, {
                    colSpan: 5,
                    className: "font-bold",
                    children: rowData.header
                  }, void 0, !1, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 147,
                    columnNumber: 29
                  }, this)
                ]
              }, "header", !0, {
                fileName: "app/components/eventDetails.tsx",
                lineNumber: 139,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow4.default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell4.default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Description"
                  }, void 0, !1, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 150,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell4.default, {
                    colSpan: 5,
                    className: "font-mono",
                    children: rowData.text
                  }, void 0, !1, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 157,
                    columnNumber: 29
                  }, this)
                ]
              }, "desc", !0, {
                fileName: "app/components/eventDetails.tsx",
                lineNumber: 149,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow4.default, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell4.default, {
                    sx: { fontWeight: "bold" },
                    children: "Written"
                  }, void 0, !1, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 160,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell4.default, {
                    children: rowData.written
                  }, void 0, !1, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 163,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell4.default, {
                    sx: { fontWeight: "bold" },
                    children: "Dated"
                  }, void 0, !1, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 166,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell4.default, {
                    children: Object.keys(rowData).indexOf("dated") > -1 ? rowData.dated : "NA"
                  }, void 0, !1, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 169,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell4.default, {
                    sx: { fontWeight: "bold" },
                    children: "Published"
                  }, void 0, !1, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 172,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell4.default, {
                    children: Object.keys(rowData).indexOf("published") > -1 ? rowData.published : "NA"
                  }, void 0, !1, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 175,
                    columnNumber: 29
                  }, this)
                ]
              }, "dates", !0, {
                fileName: "app/components/eventDetails.tsx",
                lineNumber: 159,
                columnNumber: 25
              }, this),
              Object.keys(rowData).indexOf("lang_orig") > -1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow4.default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell4.default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Language(s)"
                  }, void 0, !1, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 181,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell4.default, {
                    colSpan: 5,
                    children: rowData.lang_orig.join(", ")
                  }, void 0, !1, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 188,
                    columnNumber: 33
                  }, this)
                ]
              }, "langs", !0, {
                fileName: "app/components/eventDetails.tsx",
                lineNumber: 180,
                columnNumber: 29
              }, this),
              Object.keys(rowData).indexOf("source") > -1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow4.default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell4.default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Source(s)"
                  }, void 0, !1, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 193,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell4.default, {
                    colSpan: 5,
                    children: rowData.source
                  }, void 0, !1, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 200,
                    columnNumber: 33
                  }, this)
                ]
              }, "sources", !0, {
                fileName: "app/components/eventDetails.tsx",
                lineNumber: 192,
                columnNumber: 29
              }, this),
              Object.keys(rowData).indexOf("reprint") > -1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow4.default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell4.default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Reprints"
                  }, void 0, !1, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 205,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell4.default, {
                    colSpan: 5,
                    children: rowData.reprint
                  }, void 0, !1, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 212,
                    columnNumber: 33
                  }, this)
                ]
              }, "reprints", !0, {
                fileName: "app/components/eventDetails.tsx",
                lineNumber: 204,
                columnNumber: 29
              }, this),
              Object.keys(rowData).indexOf("more_info") > -1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow4.default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell4.default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Misc"
                  }, void 0, !1, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 217,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell4.default, {
                    colSpan: 5,
                    children: rowData.more_info
                  }, void 0, !1, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 224,
                    columnNumber: 33
                  }, this)
                ]
              }, "misc", !0, {
                fileName: "app/components/eventDetails.tsx",
                lineNumber: 216,
                columnNumber: 29
              }, this),
              Object.keys(rowData).indexOf("chron_ref_ids") > -1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow4.default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell4.default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Chronicle References"
                  }, void 0, !1, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 229,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell4.default, {
                    colSpan: 5,
                    children: rowData.chron_ref_ids.map((item) => getChronRefLink2(item))
                  }, void 0, !1, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 236,
                    columnNumber: 33
                  }, this)
                ]
              }, "chronrefs", !0, {
                fileName: "app/components/eventDetails.tsx",
                lineNumber: 228,
                columnNumber: 29
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/eventDetails.tsx",
            lineNumber: 138,
            columnNumber: 21
          }, this)
        }, void 0, !1, {
          fileName: "app/components/eventDetails.tsx",
          lineNumber: 137,
          columnNumber: 17
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/eventDetails.tsx",
      lineNumber: 82,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
    fileName: "app/components/eventDetails.tsx",
    lineNumber: 75,
    columnNumber: 9
  }, this);
}

// app/routes/chron/$chronCode.tsx
var import_RadioGroup = __toESM(require("@mui/material/RadioGroup")), import_FormControlLabel = __toESM(require("@mui/material/FormControlLabel")), import_Radio = __toESM(require("@mui/material/Radio")), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader13({ request, params }) {
  (0, import_tiny_invariant8.default)(params.chronCode, "Expected params.chronCode");
  let chronCode = params.chronCode;
  if (console.log("[$chronCode.tsx] chronCode: " + chronCode), chronCode === "")
    return { type: "chron", viewName: "list" };
  if (viewCodes.indexOf(chronCode) > -1)
    return { type: "chron", viewName: chronCode };
  {
    let entryData = await getEvent(chronCode);
    return entryData.monthday = entryData.month_start + " " + entryData.day_start, { type: "details", chronCode, entryData };
  }
}
var openInNewTab2 = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
}, viewCodes = ["list", "cal"];
function EventDetailsPage(entryData) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.NavLink, {
          to: "../../chron/list",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Button3.default, {
            startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ArrowBack3.default, {}, void 0, !1, {
              fileName: "app/routes/chron/$chronCode.tsx",
              lineNumber: 56,
              columnNumber: 40
            }, this),
            children: "Back to Chronicle"
          }, void 0, !1, {
            fileName: "app/routes/chron/$chronCode.tsx",
            lineNumber: 56,
            columnNumber: 21
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/chron/$chronCode.tsx",
          lineNumber: 55,
          columnNumber: 17
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/chron/$chronCode.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Paper3.default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EventDetailsPanel, {
          data: entryData
        }, void 0, !1, {
          fileName: "app/routes/chron/$chronCode.tsx",
          lineNumber: 62,
          columnNumber: 17
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/chron/$chronCode.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "float-left",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.NavLink, {
              to: "../../chron/list",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Button3.default, {
                startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_KeyboardArrowLeft3.default, {}, void 0, !1, {
                  fileName: "app/routes/chron/$chronCode.tsx",
                  lineNumber: 67,
                  columnNumber: 40
                }, this),
                children: "Previous Record"
              }, void 0, !1, {
                fileName: "app/routes/chron/$chronCode.tsx",
                lineNumber: 67,
                columnNumber: 21
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/chron/$chronCode.tsx",
              lineNumber: 66,
              columnNumber: 17
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/chron/$chronCode.tsx",
            lineNumber: 65,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "float-right",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.NavLink, {
              to: "../../chron/list",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Button3.default, {
                endIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_KeyboardArrowRight3.default, {}, void 0, !1, {
                  fileName: "app/routes/chron/$chronCode.tsx",
                  lineNumber: 74,
                  columnNumber: 42
                }, this),
                children: "Next Record"
              }, void 0, !1, {
                fileName: "app/routes/chron/$chronCode.tsx",
                lineNumber: 74,
                columnNumber: 25
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/chron/$chronCode.tsx",
              lineNumber: 73,
              columnNumber: 21
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/chron/$chronCode.tsx",
            lineNumber: 72,
            columnNumber: 17
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/chron/$chronCode.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/chron/$chronCode.tsx",
    lineNumber: 53,
    columnNumber: 9
  }, this);
}
function ChronTable() {
  let reqData = (0, import_react9.useLoaderData)();
  if (console.log("[ChronTable()] reqData: " + Object.keys(reqData)), console.log("[ChronTable()] type: " + reqData.type), console.log("[ChronTable()] viewType: " + reqData.viewName), reqData.type === "details")
    return EventDetailsPage(reqData.entryData);
  let data_cols = [
    { field: "entry_id_clean", title: "ID", width: "60px" },
    { field: "year", title: "Year", width: "60px" },
    { field: "header", title: "Heading", cellStyle: { width: "120px", maxWidth: "140px" }, headerStyle: { width: "120px", maxWidth: "140px" } },
    { field: "text", title: "Text", cellStyle: { width: "65%" }, headerStyle: { width: "65%" } },
    { field: "monthday", title: "Date", width: "60px" }
  ], fetcher = (0, import_react9.useFetcher)();
  return React7.useEffect(() => {
    fetcher.type === "init" && fetcher.load("/fetch/chron/10/0");
  }, [fetcher]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableContainer2.default, {
    component: import_Paper3.default,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.default, {
      title: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_RadioGroup.default, {
          row: !0,
          value: reqData.viewName,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.NavLink, {
              to: "../list",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_FormControlLabel.default, {
                control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Radio.default, {}, void 0, !1, {
                  fileName: "app/routes/chron/$chronCode.tsx",
                  lineNumber: 135,
                  columnNumber: 78
                }, this),
                label: "List View",
                value: "list"
              }, void 0, !1, {
                fileName: "app/routes/chron/$chronCode.tsx",
                lineNumber: 135,
                columnNumber: 51
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/chron/$chronCode.tsx",
              lineNumber: 135,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.NavLink, {
              to: "../cal",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_FormControlLabel.default, {
                control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Radio.default, {}, void 0, !1, {
                  fileName: "app/routes/chron/$chronCode.tsx",
                  lineNumber: 136,
                  columnNumber: 77
                }, this),
                label: "Calendar View",
                value: "cal"
              }, void 0, !1, {
                fileName: "app/routes/chron/$chronCode.tsx",
                lineNumber: 136,
                columnNumber: 50
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/chron/$chronCode.tsx",
              lineNumber: 136,
              columnNumber: 29
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/chron/$chronCode.tsx",
          lineNumber: 134,
          columnNumber: 25
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/chron/$chronCode.tsx",
        lineNumber: 133,
        columnNumber: 21
      }, this),
      options: {
        actionsColumnIndex: -1,
        padding: "dense",
        pageSize: 10,
        pageSizeOptions: [10],
        columnsButton: !0,
        exportAllData: !0,
        initialPage: 0,
        draggable: !1,
        toolbar: !0,
        paginationType: "stepped",
        numberOfPagesAround: 4
      },
      columns: data_cols,
      detailPanel: ({ rowData }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EventDetailsPanel, {
        data: rowData
      }, void 0, !1, {
        fileName: "app/routes/chron/$chronCode.tsx",
        lineNumber: 157,
        columnNumber: 43
      }, this),
      data: (query) => new Promise((resolve, reject) => {
        console.log("[$chronCode.tsx] query:"), console.log(query), console.log("query.search: " + query.search), query.search === "" ? fetch(`/fetch/chron/10/${query.page}`).then((response) => response.json()).then((rsJson) => {
          resolve({
            data: rsJson.docs,
            page: query.page,
            totalCount: rsJson.total
          });
        }) : (console.log("Querying"), fetch(`/fetch/chron/search/${query.search}`).then((response) => response.json()).then((rsJson) => {
          resolve({
            data: rsJson.docs,
            page: query.page,
            totalCount: rsJson.total
          });
        }));
      }),
      components: {
        Cell: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.MTableCell, {
          className: "overflow-hidden text-ellipsis whitespace-nowrap max-w-[350px]",
          ...props
        }, void 0, !1, {
          fileName: "app/routes/chron/$chronCode.tsx",
          lineNumber: 191,
          columnNumber: 25
        }, this),
        Container: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Paper3.default, {
          className: "even:[&>*]:grow",
          sx: { display: "flex", flexDirection: "column", height: "100%", maxHeight: "100%" },
          elevation: 1,
          ...props
        }, void 0, !1, {
          fileName: "app/routes/chron/$chronCode.tsx",
          lineNumber: 194,
          columnNumber: 25
        }, this),
        Toolbar: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Box7.default, {
          sx: { borderBottom: "1px solid rgba(184,184,184,1)" },
          className: "bg-red-700/10",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.MTableToolbar, {
            className: "min-h-[48px]",
            ...props
          }, void 0, !1, {
            fileName: "app/routes/chron/$chronCode.tsx",
            lineNumber: 198,
            columnNumber: 29
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/chron/$chronCode.tsx",
          lineNumber: 197,
          columnNumber: 25
        }, this),
        Body: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.MTableBody, {
          className: "overflow-hidden text-ellipsis",
          ...props
        }, void 0, !1, {
          fileName: "app/routes/chron/$chronCode.tsx",
          lineNumber: 202,
          columnNumber: 25
        }, this)
      },
      actions: [
        {
          icon: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Info3.default, {}, void 0, !1, {
            fileName: "app/routes/chron/$chronCode.tsx",
            lineNumber: 208,
            columnNumber: 29
          }, this),
          tooltip: "View Full Info",
          onClick: (event, rowData) => {
            openInNewTab2(`./${rowData.entry_id_clean}`);
          }
        }
      ],
      localization: {
        pagination: {
          labelDisplayedRows: "{from}-{to} of {count}"
        },
        toolbar: {
          nRowsSelected: "{0} row(s) selected"
        },
        header: {
          actions: ""
        },
        body: {
          emptyDataSourceMessage: "No records to display",
          filterRow: {
            filterTooltip: "Filter"
          }
        }
      }
    }, void 0, !1, {
      fileName: "app/routes/chron/$chronCode.tsx",
      lineNumber: 131,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/chron/$chronCode.tsx",
    lineNumber: 130,
    columnNumber: 9
  }, this);
}

// app/routes/chron/cal.tsx
var cal_exports = {};
__export(cal_exports, {
  default: () => ChronCal
});
var import_react10 = __toESM(require("@fullcalendar/react")), import_daygrid = __toESM(require("@fullcalendar/daygrid")), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function ChronCal() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.default, {
    plugins: [import_daygrid.default],
    initialView: "dayGridMonth"
  }, void 0, !1, {
    fileName: "app/routes/chron/cal.tsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => CycloPage
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function CycloPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "container",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "font-bold",
          children: "Welcome to the Marx-Engels Digital Cyclopedia!"
        }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 5,
          columnNumber: 17
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 4,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: "Choose a database in the menu on the left to get started."
        }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 8,
          columnNumber: 17
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 7,
        columnNumber: 13
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/routes/notes.tsx
var notes_exports = {};
__export(notes_exports, {
  default: () => CollapsibleTable3,
  loader: () => loader14
});
var React8 = __toESM(require("react")), import_styles5 = require("@mui/material/styles"), import_Box8 = __toESM(require("@mui/material/Box")), import_Collapse3 = __toESM(require("@mui/material/Collapse")), import_FirstPage3 = __toESM(require("@mui/icons-material/FirstPage")), import_IconButton5 = __toESM(require("@mui/material/IconButton")), import_Toolbar4 = __toESM(require("@mui/material/Toolbar")), import_Table5 = __toESM(require("@mui/material/Table")), import_TableBody5 = __toESM(require("@mui/material/TableBody")), import_TableCell5 = __toESM(require("@mui/material/TableCell")), import_TableHead3 = __toESM(require("@mui/material/TableHead")), import_TableRow5 = __toESM(require("@mui/material/TableRow")), import_Typography7 = __toESM(require("@mui/material/Typography")), import_KeyboardArrowDown3 = __toESM(require("@mui/icons-material/KeyboardArrowDown")), import_KeyboardArrowUp3 = __toESM(require("@mui/icons-material/KeyboardArrowUp")), import_KeyboardArrowLeft4 = __toESM(require("@mui/icons-material/KeyboardArrowLeft")), import_KeyboardArrowRight4 = __toESM(require("@mui/icons-material/KeyboardArrowRight")), import_LastPage3 = __toESM(require("@mui/icons-material/LastPage")), import_core5 = __toESM(require("@material-table/core")), import_node3 = require("@remix-run/node"), import_react11 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), defaultPerPage3 = 3, defaultPageNum3 = 0;
async function loader14({ request }) {
  let docinfoListItems = await getDocinfoListItems();
  return (0, import_node3.json)({ docinfoListItems });
}
function CollapsibleTable3() {
  let initData = (0, import_react11.useLoaderData)(), fetcher = (0, import_react11.useFetcher)();
  React8.useEffect(() => {
    fetcher.type === "init" && fetcher.load(`/fetch/gloss/${defaultPerPage3}/${defaultPageNum3}`);
  }, [fetcher]);
  let [page, setPage] = React8.useState(0), [rowsPerPage, setRowsPerPage] = React8.useState(5), [rowsOnPage, setRowsOnPage] = React8.useState(5), emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowsOnPage) : 0, handleChangePage = (event, newPage) => {
    setPage(newPage);
  }, handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10)), setPage(0);
  }, DEMO_DATA = [
    { id: 1, name: "Mary" },
    { id: 2, name: "Joe" },
    { id: 3, name: "Jim" },
    { id: 4, name: "Bob" },
    { id: 5, name: "Bernie" },
    { id: 6, name: "Jimbo" }
  ], DEMO_COLS = [
    { field: "id", title: "Id" },
    { field: "title", title: "Title" }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: fetcher.type !== "done" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      children: "Loading..."
    }, void 0, !1, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 254,
      columnNumber: 32
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core5.default, {
      columns: DEMO_COLS,
      detailPanel: ({ rowData }) => (console.log(rowData), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        style: {
          fontSize: 16,
          padding: 5,
          margin: 5
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Box8.default, {
          sx: { margin: 1 },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Typography7.default, {
              variant: "h6",
              gutterBottom: !0,
              component: "div",
              children: rowData.title
            }, void 0, !1, {
              fileName: "app/routes/notes.tsx",
              lineNumber: 269,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Table5.default, {
              size: "small",
              "aria-label": "details",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableBody5.default, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow5.default, {
                    sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell5.default, {
                        component: "th",
                        scope: "row",
                        sx: { fontWeight: "bold" },
                        children: "Full Text"
                      }, void 0, !1, {
                        fileName: "app/routes/notes.tsx",
                        lineNumber: 275,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell5.default, {
                        colSpan: 3,
                        children: rowData.fullText
                      }, void 0, !1, {
                        fileName: "app/routes/notes.tsx",
                        lineNumber: 282,
                        columnNumber: 29
                      }, this)
                    ]
                  }, "fulltext", !0, {
                    fileName: "app/routes/notes.tsx",
                    lineNumber: 274,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow5.default, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell5.default, {
                        sx: { fontWeight: "bold" },
                        children: "Date Written"
                      }, void 0, !1, {
                        fileName: "app/routes/notes.tsx",
                        lineNumber: 285,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell5.default, {
                        children: "1/1/1850"
                      }, void 0, !1, {
                        fileName: "app/routes/notes.tsx",
                        lineNumber: 288,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell5.default, {
                        sx: { fontWeight: "bold" },
                        children: "Date Published"
                      }, void 0, !1, {
                        fileName: "app/routes/notes.tsx",
                        lineNumber: 291,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell5.default, {
                        children: "1/2/1850"
                      }, void 0, !1, {
                        fileName: "app/routes/notes.tsx",
                        lineNumber: 294,
                        columnNumber: 29
                      }, this)
                    ]
                  }, "dates", !0, {
                    fileName: "app/routes/notes.tsx",
                    lineNumber: 284,
                    columnNumber: 27
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/notes.tsx",
                lineNumber: 273,
                columnNumber: 23
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/notes.tsx",
              lineNumber: 272,
              columnNumber: 21
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 268,
          columnNumber: 19
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 261,
        columnNumber: 17
      }, this)),
      data: fetcher.data.result
    }, void 0, !1, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 255,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 253,
    columnNumber: 5
  }, this);
}

// app/routes/sand.tsx
var sand_exports = {};
__export(sand_exports, {
  default: () => SandboxTable
});
var React9 = __toESM(require("react")), import_Box9 = __toESM(require("@mui/material/Box")), import_Paper4 = __toESM(require("@mui/material/Paper")), import_Table6 = __toESM(require("@mui/material/Table")), import_TableBody6 = __toESM(require("@mui/material/TableBody")), import_TableCell6 = __toESM(require("@mui/material/TableCell")), import_TableRow6 = __toESM(require("@mui/material/TableRow")), import_Typography8 = __toESM(require("@mui/material/Typography")), import_core6 = __toESM(require("@material-table/core")), import_react12 = require("@remix-run/react"), import_material = require("@mui/material"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), axios4 = require("axios");
function SandboxTable() {
  let data_cols = [
    { field: "ent_id", title: "ID", width: "100px" },
    { field: "title", title: "Title" },
    { field: "year_combined", title: "Year", width: "100px" }
  ], fetcher = (0, import_react12.useFetcher)();
  return React9.useEffect(() => {
    fetcher.type === "init" && fetcher.load("/fetch/sand/10/0");
  }, [fetcher]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_material.TableContainer, {
    component: import_Paper4.default,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core6.default, {
      title: "Sandbox Table",
      options: {
        padding: "dense",
        pageSize: 10,
        pageSizeOptions: [10],
        exportAllData: !0,
        initialPage: 0
      },
      columns: data_cols,
      detailPanel: ({ rowData }) => (console.log(rowData), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        style: {
          fontSize: 16,
          padding: 5,
          margin: 5
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Box9.default, {
          sx: { margin: 1 },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Typography8.default, {
              variant: "h6",
              gutterBottom: !0,
              component: "div",
              children: rowData.title
            }, void 0, !1, {
              fileName: "app/routes/sand.tsx",
              lineNumber: 108,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Table6.default, {
              size: "small",
              "aria-label": "details",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableBody6.default, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow6.default, {
                    sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell6.default, {
                        component: "th",
                        scope: "row",
                        sx: { fontWeight: "bold" },
                        children: "Full Text"
                      }, void 0, !1, {
                        fileName: "app/routes/sand.tsx",
                        lineNumber: 114,
                        columnNumber: 49
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell6.default, {
                        colSpan: 5,
                        className: "font-mono",
                        children: rowData.full_text
                      }, void 0, !1, {
                        fileName: "app/routes/sand.tsx",
                        lineNumber: 121,
                        columnNumber: 49
                      }, this)
                    ]
                  }, "fulltext", !0, {
                    fileName: "app/routes/sand.tsx",
                    lineNumber: 113,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow6.default, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell6.default, {
                        sx: { fontWeight: "bold" },
                        children: "Written"
                      }, void 0, !1, {
                        fileName: "app/routes/sand.tsx",
                        lineNumber: 124,
                        columnNumber: 49
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell6.default, {
                        children: "1/1/1850"
                      }, void 0, !1, {
                        fileName: "app/routes/sand.tsx",
                        lineNumber: 127,
                        columnNumber: 49
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell6.default, {
                        sx: { fontWeight: "bold" },
                        children: "Dated"
                      }, void 0, !1, {
                        fileName: "app/routes/sand.tsx",
                        lineNumber: 130,
                        columnNumber: 49
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell6.default, {
                        children: "1/3/1850"
                      }, void 0, !1, {
                        fileName: "app/routes/sand.tsx",
                        lineNumber: 133,
                        columnNumber: 49
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell6.default, {
                        sx: { fontWeight: "bold" },
                        children: "Published"
                      }, void 0, !1, {
                        fileName: "app/routes/sand.tsx",
                        lineNumber: 136,
                        columnNumber: 49
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell6.default, {
                        children: "1/2/1850"
                      }, void 0, !1, {
                        fileName: "app/routes/sand.tsx",
                        lineNumber: 139,
                        columnNumber: 49
                      }, this)
                    ]
                  }, "dates", !0, {
                    fileName: "app/routes/sand.tsx",
                    lineNumber: 123,
                    columnNumber: 45
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/sand.tsx",
                lineNumber: 112,
                columnNumber: 41
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/sand.tsx",
              lineNumber: 111,
              columnNumber: 37
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/sand.tsx",
          lineNumber: 107,
          columnNumber: 33
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/sand.tsx",
        lineNumber: 100,
        columnNumber: 29
      }, this)),
      data: (query) => new Promise((resolve, reject) => {
        fetch(`/fetch/sand/10/${query.page}`).then((response) => response.json()).then((rsJson) => {
          resolve({
            data: rsJson.docs,
            page: query.page,
            totalCount: rsJson.total
          });
        });
      }),
      components: {
        Container: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Paper4.default, {
          className: "even:[&>*]:grow",
          sx: { display: "flex", flexDirection: "column", height: "100%" },
          elevation: 1,
          ...props
        }, void 0, !1, {
          fileName: "app/routes/sand.tsx",
          lineNumber: 165,
          columnNumber: 25
        }, this),
        Toolbar: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Box9.default, {
          sx: { borderBottom: "1px solid rgba(184,184,184,1)" },
          className: "bg-green-700/10",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core6.MTableToolbar, {
            className: "min-h-[48px]",
            ...props
          }, void 0, !1, {
            fileName: "app/routes/sand.tsx",
            lineNumber: 170,
            columnNumber: 29
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/sand.tsx",
          lineNumber: 169,
          columnNumber: 25
        }, this),
        Body: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core6.MTableBody, {
          className: "",
          ...props
        }, void 0, !1, {
          fileName: "app/routes/sand.tsx",
          lineNumber: 174,
          columnNumber: 25
        }, this)
      }
    }, void 0, !1, {
      fileName: "app/routes/sand.tsx",
      lineNumber: 87,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/sand.tsx",
    lineNumber: 86,
    columnNumber: 9
  }, this);
}

// app/routes/reg.tsx
var reg_exports = {};
__export(reg_exports, {
  default: () => RegPage
});
var import_react13 = require("@remix-run/react"), import_ArrowBack4 = __toESM(require("@mui/icons-material/ArrowBack")), import_Box10 = __toESM(require("@mui/material/Box")), import_Button4 = __toESM(require("@mui/material/Button")), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
var tabVals = {
  marx: 0,
  engels: 1,
  me: 2,
  st: 3
};
function getTabVal(authName) {
  return tabVals[authName];
}
function getBackSection(ent_id) {
  return ent_id.startsWith("ME") ? { regCode: "me", regName: "Marx-Engels" } : ent_id.startsWith("M") ? { regCode: "marx", regName: "Marx" } : ent_id.startsWith("E") ? { regCode: "engels", regName: "Engels" } : { regCode: "st", regName: "Sources/Translations" };
}
function EntryDetails(ent_id) {
  let backSection = getBackSection(ent_id);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.NavLink, {
          to: `../reg/${backSection.regCode}`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Button4.default, {
            startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ArrowBack4.default, {}, void 0, !1, {
              fileName: "app/routes/reg.tsx",
              lineNumber: 80,
              columnNumber: 30
            }, this),
            children: [
              "Back to ",
              backSection.regName,
              " Register"
            ]
          }, void 0, !0, {
            fileName: "app/routes/reg.tsx",
            lineNumber: 80,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/reg.tsx",
          lineNumber: 79,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/reg.tsx",
        lineNumber: 78,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Outlet, {}, void 0, !1, {
          fileName: "app/routes/reg.tsx",
          lineNumber: 86,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/reg.tsx",
        lineNumber: 85,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.NavLink, {
          to: "../reg/",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Button4.default, {
            startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ArrowBack4.default, {}, void 0, !1, {
              fileName: "app/routes/reg.tsx",
              lineNumber: 90,
              columnNumber: 30
            }, this),
            children: "Back to Register"
          }, void 0, !1, {
            fileName: "app/routes/reg.tsx",
            lineNumber: 90,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/reg.tsx",
          lineNumber: 89,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/reg.tsx",
        lineNumber: 88,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/reg.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}
var authNames = ["marx", "engels", "me", "st"];
function RegPage() {
  let pathnameClean = (0, import_react13.useLocation)().pathname;
  pathnameClean.endsWith("/") && (pathnameClean = pathnameClean.slice(0, -1));
  let pathElts = pathnameClean.split("/"), regCode = pathElts[pathElts.length - 1];
  console.log("[reg.tsx] regCode: " + regCode);
  let activeTab = 0;
  if (regCode === "reg")
    activeTab = getTabVal("marx");
  else if (authNames.indexOf(regCode) > -1)
    activeTab = getTabVal(regCode);
  else
    return EntryDetails(regCode);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Outlet, {}, void 0, !1, {
    fileName: "app/routes/reg.tsx",
    lineNumber: 130,
    columnNumber: 5
  }, this);
}

// app/routes/reg/$regCode.fulltext.tsx
var regCode_fulltext_exports = {};
__export(regCode_fulltext_exports, {
  default: () => FulltextPage,
  loader: () => loader15
});
var React11 = __toESM(require("react")), import_tiny_invariant9 = __toESM(require("tiny-invariant")), import_react15 = require("@remix-run/react"), import_Box12 = __toESM(require("@mui/material/Box")), import_Download = __toESM(require("@mui/icons-material/Download")), import_Paper5 = __toESM(require("@mui/material/Paper")), import_Typography10 = __toESM(require("@mui/material/Typography"));

// app/components/entryDetails.tsx
var React10 = __toESM(require("react")), import_Box11 = __toESM(require("@mui/material/Box")), import_Chip3 = __toESM(require("@mui/material/Chip")), import_Info4 = __toESM(require("@mui/icons-material/Info")), import_Link2 = __toESM(require("@mui/icons-material/Link")), import_Table7 = __toESM(require("@mui/material/Table")), import_TableBody7 = __toESM(require("@mui/material/TableBody")), import_TableCell7 = __toESM(require("@mui/material/TableCell")), import_TableRow7 = __toESM(require("@mui/material/TableRow")), import_Tooltip3 = __toESM(require("@mui/material/Tooltip")), import_Typography9 = __toESM(require("@mui/material/Typography")), import_react14 = require("@remix-run/react"), import_OpenInNew2 = __toESM(require("@mui/icons-material/OpenInNew")), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function getChronRefLink3(chronRefId) {
  let relUrl = "../../chron/" + chronRefId;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react14.NavLink, {
    to: relUrl,
    rel: "noopener,noreferrer",
    target: "_blank",
    className: "m-2 p-2 border border-solid border-black cursor-pointer rounded-full",
    children: [
      "18" + chronRefId,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_OpenInNew2.default, {
        sx: { ml: 1 },
        fontSize: "small"
      }, void 0, !1, {
        fileName: "app/components/entryDetails.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/entryDetails.tsx",
    lineNumber: 48,
    columnNumber: 9
  }, this);
}
function EntryDetailsPanel(props) {
  let rowData = props.data, [tooltipText, setTooltipText] = React10.useState("Copy Link"), handleTooltipClose = () => {
    setTooltipText("Copy Link");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    style: {
      fontSize: 16,
      padding: 5,
      margin: 5
    },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Box11.default, {
      sx: { margin: 1 },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Typography9.default, {
          variant: "h6",
          gutterBottom: !0,
          component: "div",
          children: [
            rowData.title,
            rowData.dubious && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Tooltip3.default, {
              title: "Authorship of this text is disputed (see description)",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Chip3.default, {
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Info4.default, {}, void 0, !1, {
                  fileName: "app/components/entryDetails.tsx",
                  lineNumber: 76,
                  columnNumber: 31
                }, this),
                label: "Dubious",
                className: "m-2 cursor-pointer"
              }, void 0, !1, {
                fileName: "app/components/entryDetails.tsx",
                lineNumber: 75,
                columnNumber: 23
              }, this)
            }, void 0, !1, {
              fileName: "app/components/entryDetails.tsx",
              lineNumber: 74,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Tooltip3.default, {
              title: tooltipText,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Chip3.default, {
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Link2.default, {}, void 0, !1, {
                  fileName: "app/components/entryDetails.tsx",
                  lineNumber: 84,
                  columnNumber: 29
                }, this),
                label: rowData.entry_id,
                variant: "outlined",
                className: "float-right",
                onMouseLeave: handleTooltipClose,
                onClick: () => {
                  navigator.clipboard.writeText(`https://marxdb.com/reg/${rowData.entry_id}`).then(
                    function() {
                      console.log("Success! The text was copied to your clipboard"), setTooltipText("Link Copied!");
                    },
                    function() {
                      console.log("Oops! Your browser does not support the Clipboard API");
                    }
                  );
                }
              }, void 0, !1, {
                fileName: "app/components/entryDetails.tsx",
                lineNumber: 83,
                columnNumber: 21
              }, this)
            }, void 0, !1, {
              fileName: "app/components/entryDetails.tsx",
              lineNumber: 82,
              columnNumber: 21
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/entryDetails.tsx",
          lineNumber: 71,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Table7.default, {
          size: "small",
          "aria-label": "details",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableBody7.default, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow7.default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell7.default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Description"
                  }, void 0, !1, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 109,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell7.default, {
                    colSpan: 5,
                    className: "font-mono",
                    children: rowData.full_text
                  }, void 0, !1, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 116,
                    columnNumber: 29
                  }, this)
                ]
              }, "desc", !0, {
                fileName: "app/components/entryDetails.tsx",
                lineNumber: 108,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow7.default, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell7.default, {
                    sx: { fontWeight: "bold" },
                    children: "Written"
                  }, void 0, !1, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 119,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell7.default, {
                    children: Object.keys(rowData).indexOf("written") > -1 ? rowData.written : "NA"
                  }, void 0, !1, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 122,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell7.default, {
                    sx: { fontWeight: "bold" },
                    children: "Dated"
                  }, void 0, !1, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 125,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell7.default, {
                    children: Object.keys(rowData).indexOf("dated") > -1 ? rowData.dated : "NA"
                  }, void 0, !1, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 128,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell7.default, {
                    sx: { fontWeight: "bold" },
                    children: "Published"
                  }, void 0, !1, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 131,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell7.default, {
                    children: Object.keys(rowData).indexOf("published") > -1 ? rowData.published : "NA"
                  }, void 0, !1, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 134,
                    columnNumber: 29
                  }, this)
                ]
              }, "dates", !0, {
                fileName: "app/components/entryDetails.tsx",
                lineNumber: 118,
                columnNumber: 25
              }, this),
              Object.keys(rowData).indexOf("lang_orig") > -1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow7.default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell7.default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Language(s)"
                  }, void 0, !1, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 140,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell7.default, {
                    colSpan: 5,
                    children: rowData.lang_orig.join(", ")
                  }, void 0, !1, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 147,
                    columnNumber: 33
                  }, this)
                ]
              }, "langs", !0, {
                fileName: "app/components/entryDetails.tsx",
                lineNumber: 139,
                columnNumber: 29
              }, this),
              Object.keys(rowData).indexOf("source") > -1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow7.default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell7.default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Source(s)"
                  }, void 0, !1, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 152,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell7.default, {
                    colSpan: 5,
                    children: rowData.source
                  }, void 0, !1, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 159,
                    columnNumber: 33
                  }, this)
                ]
              }, "sources", !0, {
                fileName: "app/components/entryDetails.tsx",
                lineNumber: 151,
                columnNumber: 29
              }, this),
              Object.keys(rowData).indexOf("reprint") > -1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow7.default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell7.default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Reprints"
                  }, void 0, !1, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 164,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell7.default, {
                    colSpan: 5,
                    children: rowData.reprint
                  }, void 0, !1, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 171,
                    columnNumber: 33
                  }, this)
                ]
              }, "reprints", !0, {
                fileName: "app/components/entryDetails.tsx",
                lineNumber: 163,
                columnNumber: 29
              }, this),
              Object.keys(rowData).indexOf("more_info") > -1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow7.default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell7.default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Misc"
                  }, void 0, !1, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 176,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell7.default, {
                    colSpan: 5,
                    children: rowData.more_info
                  }, void 0, !1, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 183,
                    columnNumber: 33
                  }, this)
                ]
              }, "misc", !0, {
                fileName: "app/components/entryDetails.tsx",
                lineNumber: 175,
                columnNumber: 29
              }, this),
              Object.keys(rowData).indexOf("chron_ref_ids") > -1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableRow7.default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell7.default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Chronicle References"
                  }, void 0, !1, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 188,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableCell7.default, {
                    colSpan: 5,
                    children: rowData.chron_ref_ids.map((item) => getChronRefLink3(item))
                  }, void 0, !1, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 195,
                    columnNumber: 33
                  }, this)
                ]
              }, "chronrefs", !0, {
                fileName: "app/components/entryDetails.tsx",
                lineNumber: 187,
                columnNumber: 29
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/entryDetails.tsx",
            lineNumber: 107,
            columnNumber: 21
          }, this)
        }, void 0, !1, {
          fileName: "app/components/entryDetails.tsx",
          lineNumber: 106,
          columnNumber: 17
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/entryDetails.tsx",
      lineNumber: 70,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
    fileName: "app/components/entryDetails.tsx",
    lineNumber: 63,
    columnNumber: 9
  }, this);
}

// app/routes/reg/$regCode.fulltext.tsx
var import_Tooltip4 = __toESM(require("@mui/material/Tooltip")), import_Chip4 = __toESM(require("@mui/material/Chip")), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader15({ request, params }) {
  return (0, import_tiny_invariant9.default)(params.regCode, "Expected params.regCode"), console.log("[$regCode.fulltext] params.regCode: " + params.regCode), await getFulltext(params.regCode);
}
function toHtml(origText) {
  return origText.replaceAll(`
`, "<br>");
}
function FulltextPanel(props) {
  let reqData = props.data, [tooltipText, setTooltipText] = React11.useState("Download Fulltext"), handleTooltipClose = () => {
    setTooltipText("Download Fulltext");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    style: {
      fontSize: 16,
      padding: 5,
      margin: 5
    },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Box12.default, {
      sx: { margin: 1 },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Typography10.default, {
          variant: "h6",
          gutterBottom: !0,
          component: "div",
          children: [
            reqData.entry_id,
            ": ",
            reqData.title,
            Object.keys(reqData).indexOf("fulltext") > -1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Tooltip4.default, {
              title: tooltipText,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Chip4.default, {
                component: "a",
                href: `https://drive.google.com/uc?export=download&id=${reqData.drive_id}`,
                clickable: !0,
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Download.default, {}, void 0, !1, {
                  fileName: "app/routes/reg/$regCode.fulltext.tsx",
                  lineNumber: 77,
                  columnNumber: 35
                }, this),
                label: reqData.fulltext_filename,
                variant: "outlined",
                className: "float-right cursor-pointer"
              }, void 0, !1, {
                fileName: "app/routes/reg/$regCode.fulltext.tsx",
                lineNumber: 73,
                columnNumber: 25
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/reg/$regCode.fulltext.tsx",
              lineNumber: 72,
              columnNumber: 21
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/reg/$regCode.fulltext.tsx",
          lineNumber: 69,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Paper5.default, {
          className: "break-words p-3 overflow-y-scroll",
          sx: { display: "flex", flexDirection: "column", height: "100%", maxHeight: "100%" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Typography10.default, {
            className: "h-full max-h-full w-full",
            children: Object.keys(reqData).indexOf("fulltext") > -1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "font-mono",
              dangerouslySetInnerHTML: { __html: toHtml(reqData.fulltext) }
            }, void 0, !1, {
              fileName: "app/routes/reg/$regCode.fulltext.tsx",
              lineNumber: 92,
              columnNumber: 25
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "font-mono",
              children: "[Fulltext not available]"
            }, void 0, !1, {
              fileName: "app/routes/reg/$regCode.fulltext.tsx",
              lineNumber: 92,
              columnNumber: 124
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/reg/$regCode.fulltext.tsx",
            lineNumber: 90,
            columnNumber: 21
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/reg/$regCode.fulltext.tsx",
          lineNumber: 86,
          columnNumber: 17
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/reg/$regCode.fulltext.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/reg/$regCode.fulltext.tsx",
    lineNumber: 61,
    columnNumber: 9
  }, this);
}
function FulltextPage() {
  let reqData = (0, import_react15.useLoaderData)(), authName = reqData.authName, location = (0, import_react15.useLocation)(), data_cols = [
    { field: "ent_id", title: "ID", width: "60px" },
    { field: "title", title: "Title", cellStyle: { width: "80%" }, headerStyle: { width: "80%" } },
    { field: "year_combined", title: "Year", width: "60px" }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FulltextPanel, {
    data: reqData
  }, void 0, !1, {
    fileName: "app/routes/reg/$regCode.fulltext.tsx",
    lineNumber: 112,
    columnNumber: 9
  }, this);
}

// app/routes/reg/$regCode.tsx
var regCode_exports = {};
__export(regCode_exports, {
  default: () => RegTable,
  loader: () => loader16
});
var React12 = __toESM(require("react")), import_tiny_invariant10 = __toESM(require("tiny-invariant")), import_react16 = require("@remix-run/react"), import_Box13 = __toESM(require("@mui/material/Box")), import_Description = __toESM(require("@mui/icons-material/Description")), import_FormControlLabel2 = __toESM(require("@mui/material/FormControlLabel")), import_Radio2 = __toESM(require("@mui/material/Radio")), import_RadioGroup2 = __toESM(require("@mui/material/RadioGroup")), import_Paper6 = __toESM(require("@mui/material/Paper")), import_TableContainer3 = __toESM(require("@mui/material/TableContainer")), import_Info5 = __toESM(require("@mui/icons-material/Info")), import_core7 = __toESM(require("@material-table/core"));
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader16({ request, params }) {
  (0, import_tiny_invariant10.default)(params.regCode, "Expected params.regCode");
  let regCode = params.regCode;
  if (regCode === "")
    return { type: "auth", authName: "marx" };
  if (authCodes.indexOf(regCode) > -1)
    return { type: "auth", authName: regCode };
  {
    let entryData = await getDocinfo(regCode);
    return { type: "details", regCode, entryData };
  }
}
var openInNewTab3 = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
}, authCodes = ["marx", "engels", "me", "st"];
function EntryDetailsPage(entryData) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Paper6.default, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryDetailsPanel, {
      data: entryData
    }, void 0, !1, {
      fileName: "app/routes/reg/$regCode.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/reg/$regCode.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
function RegTable() {
  let reqData = (0, import_react16.useLoaderData)();
  if (reqData.type === "details")
    return EntryDetailsPage(reqData.entryData);
  let authName = reqData.authName, [lastAuth, setLastAuth] = React12.useState(authName), location = (0, import_react16.useLocation)();
  console.log("[$regCode] location.pathname: " + location.pathname);
  let tableRef = React12.createRef();
  return React12.useEffect(() => {
    tableRef.current && tableRef.current.onQueryChange(), tableRef.current && tableRef.current.onPageChange({}, 0), console.log("[useEffect()] location.pathname: " + location.pathname);
  }, [location.pathname]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_TableContainer3.default, {
    component: import_Paper6.default,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core7.default, {
      title: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "font-bold",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_RadioGroup2.default, {
          row: !0,
          value: authName,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.NavLink, {
              to: "../marx",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_FormControlLabel2.default, {
                control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Radio2.default, {}, void 0, !1, {
                  fileName: "app/routes/reg/$regCode.tsx",
                  lineNumber: 99,
                  columnNumber: 78
                }, this),
                label: "Marx",
                value: "marx"
              }, void 0, !1, {
                fileName: "app/routes/reg/$regCode.tsx",
                lineNumber: 99,
                columnNumber: 51
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/reg/$regCode.tsx",
              lineNumber: 99,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.NavLink, {
              to: "../engels",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_FormControlLabel2.default, {
                control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Radio2.default, {}, void 0, !1, {
                  fileName: "app/routes/reg/$regCode.tsx",
                  lineNumber: 100,
                  columnNumber: 80
                }, this),
                label: "Engels",
                value: "engels"
              }, void 0, !1, {
                fileName: "app/routes/reg/$regCode.tsx",
                lineNumber: 100,
                columnNumber: 53
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/reg/$regCode.tsx",
              lineNumber: 100,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.NavLink, {
              to: "../me",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_FormControlLabel2.default, {
                control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Radio2.default, {}, void 0, !1, {
                  fileName: "app/routes/reg/$regCode.tsx",
                  lineNumber: 101,
                  columnNumber: 76
                }, this),
                label: "Marx-Engels",
                value: "me"
              }, void 0, !1, {
                fileName: "app/routes/reg/$regCode.tsx",
                lineNumber: 101,
                columnNumber: 49
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/reg/$regCode.tsx",
              lineNumber: 101,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.NavLink, {
              to: "../st",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_FormControlLabel2.default, {
                control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Radio2.default, {}, void 0, !1, {
                  fileName: "app/routes/reg/$regCode.tsx",
                  lineNumber: 102,
                  columnNumber: 76
                }, this),
                label: "Sources/Translations",
                value: "st"
              }, void 0, !1, {
                fileName: "app/routes/reg/$regCode.tsx",
                lineNumber: 102,
                columnNumber: 49
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/reg/$regCode.tsx",
              lineNumber: 102,
              columnNumber: 29
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/reg/$regCode.tsx",
          lineNumber: 98,
          columnNumber: 25
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/reg/$regCode.tsx",
        lineNumber: 97,
        columnNumber: 21
      }, this),
      options: {
        actionsColumnIndex: -1,
        padding: "dense",
        pageSize: 10,
        pageSizeOptions: [10],
        columnsButton: !0,
        exportAllData: !0,
        initialPage: 0,
        draggable: !1,
        toolbar: !0,
        sorting: !1,
        paginationType: "stepped",
        numberOfPagesAround: 4
      },
      tableRef,
      columns: [
        { field: "entry_id", title: "ID", width: "60px" },
        { field: "title", title: "Title", cellStyle: { width: "60%" }, headerStyle: { width: "60%" } },
        { field: "day_combined", title: "Day", cellStyle: { textAlign: "right" }, headerStyle: { textAlign: "right", width: "50px" }, width: "50px", maxWidth: "50px" },
        { field: "month_combined", title: "Month", width: "50px", maxWidth: "50px", cellStyle: { textAlign: "center" }, headerStyle: { textAlign: "center" } },
        { field: "year_final", title: "Year", width: "70px", maxWidth: "70px", minWidth: "70px", headerStyle: { textAlign: "center" }, cellStyle: { textAlign: "center" } }
      ],
      detailPanel: ({ rowData }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryDetailsPanel, {
        data: rowData
      }, void 0, !1, {
        fileName: "app/routes/reg/$regCode.tsx",
        lineNumber: 124,
        columnNumber: 43
      }, this),
      data: (query) => new Promise((resolve, reject) => {
        console.log("Fetching: " + authName);
        let queryPage = query.page;
        authName !== lastAuth && (console.log("Changing authors"), queryPage = 0, setLastAuth(authName)), fetch(`/fetch/reg/${authName}/10/${queryPage}`).then((response) => response.json()).then((rsJson) => {
          resolve({
            data: rsJson.docs,
            page: queryPage,
            totalCount: rsJson.total
          });
        });
      }),
      components: {
        Cell: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core7.MTableCell, {
          className: "overflow-hidden text-ellipsis whitespace-nowrap max-w-[450px]",
          ...props
        }, void 0, !1, {
          fileName: "app/routes/reg/$regCode.tsx",
          lineNumber: 148,
          columnNumber: 25
        }, this),
        Container: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Paper6.default, {
          className: "even:[&>*]:grow",
          sx: { display: "flex", flexDirection: "column", height: "100%", maxHeight: "100%" },
          elevation: 1,
          ...props
        }, void 0, !1, {
          fileName: "app/routes/reg/$regCode.tsx",
          lineNumber: 151,
          columnNumber: 25
        }, this),
        Toolbar: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Box13.default, {
          sx: { borderBottom: "1px solid rgba(184,184,184,1)" },
          className: "bg-sky-700/10",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core7.MTableToolbar, {
            className: "min-h-[48px]",
            ...props
          }, void 0, !1, {
            fileName: "app/routes/reg/$regCode.tsx",
            lineNumber: 155,
            columnNumber: 29
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/reg/$regCode.tsx",
          lineNumber: 154,
          columnNumber: 25
        }, this),
        Body: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core7.MTableBody, {
          className: "overflow-hidden text-ellipsis",
          ...props
        }, void 0, !1, {
          fileName: "app/routes/reg/$regCode.tsx",
          lineNumber: 159,
          columnNumber: 25
        }, this)
      },
      actions: [
        {
          icon: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Info5.default, {}, void 0, !1, {
            fileName: "app/routes/reg/$regCode.tsx",
            lineNumber: 165,
            columnNumber: 29
          }, this),
          tooltip: "View Full Info",
          onClick: (event, rowData) => {
            openInNewTab3(`./${rowData.entry_id}`);
          }
        },
        {
          icon: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Description.default, {}, void 0, !1, {
            fileName: "app/routes/reg/$regCode.tsx",
            lineNumber: 176,
            columnNumber: 29
          }, this),
          tooltip: "View Full Text",
          onClick: (event, rowData) => {
            console.log("fulltext"), openInNewTab3(`./${rowData.entry_id}/fulltext`);
          }
        }
      ],
      localization: {
        pagination: {
          labelDisplayedRows: "{from}-{to} of {count}"
        },
        toolbar: {
          nRowsSelected: "{0} row(s) selected"
        },
        header: {
          actions: ""
        },
        body: {
          emptyDataSourceMessage: "No records to display",
          filterRow: {
            filterTooltip: "Filter"
          }
        }
      }
    }, void 0, !1, {
      fileName: "app/routes/reg/$regCode.tsx",
      lineNumber: 95,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/reg/$regCode.tsx",
    lineNumber: 94,
    columnNumber: 9
  }, this);
}

// app/routes/at.tsx
var at_exports = {};
__export(at_exports, {
  default: () => RegPage2,
  loader: () => loader17
});
var import_react17 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader17({ request }) {
  let docinfoPageCount = await getDocinfoPageTotalAirtable("M");
  return console.log("[loader()]"), console.log(docinfoPageCount), docinfoPageCount;
}
function RegPage2() {
  let reqData = (0, import_react17.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: reqData
  }, void 0, !1, {
    fileName: "app/routes/at.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "f5f77374", entry: { module: "/build/entry.client-DYZYRRII.js", imports: ["/build/_shared/chunk-6DQPAQKB.js", "/build/_shared/chunk-T5RNB5I3.js", "/build/_shared/chunk-VFZ2QWLC.js", "/build/_shared/chunk-4IYZMDEG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-7HK2QD2G.js", imports: ["/build/_shared/chunk-TN3QNU6F.js", "/build/_shared/chunk-HASI3UDZ.js", "/build/_shared/chunk-BKODUN5L.js", "/build/_shared/chunk-CVMSKPMO.js", "/build/_shared/chunk-UXJTOQFQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/at": { id: "routes/at", parentId: "root", path: "at", index: void 0, caseSensitive: void 0, module: "/build/routes/at-UU6XIRGM.js", imports: ["/build/_shared/chunk-DEXX44ZO.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/chron": { id: "routes/chron", parentId: "root", path: "chron", index: void 0, caseSensitive: void 0, module: "/build/routes/chron-KXC5MDR5.js", imports: ["/build/_shared/chunk-MR2Y6Q4S.js", "/build/_shared/chunk-G2GGUSV5.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/chron/$chronCode": { id: "routes/chron/$chronCode", parentId: "routes/chron", path: ":chronCode", index: void 0, caseSensitive: void 0, module: "/build/routes/chron/$chronCode-VT22UN7O.js", imports: ["/build/_shared/chunk-6EQGYKY7.js", "/build/_shared/chunk-M4D3OZQE.js", "/build/_shared/chunk-TVJDINII.js", "/build/_shared/chunk-ZMXBJVIV.js", "/build/_shared/chunk-3MBIIICT.js", "/build/_shared/chunk-TN3QNU6F.js", "/build/_shared/chunk-HASI3UDZ.js", "/build/_shared/chunk-BKODUN5L.js", "/build/_shared/chunk-CVMSKPMO.js", "/build/_shared/chunk-UXJTOQFQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/chron/cal": { id: "routes/chron/cal", parentId: "routes/chron", path: "cal", index: void 0, caseSensitive: void 0, module: "/build/routes/chron/cal-LLHRVBZO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/fetch/chron.$perPage.$pageNum": { id: "routes/fetch/chron.$perPage.$pageNum", parentId: "root", path: "fetch/chron/:perPage/:pageNum", index: void 0, caseSensitive: void 0, module: "/build/routes/fetch/chron.$perPage.$pageNum-LB43J7MU.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/fetch/chron.count": { id: "routes/fetch/chron.count", parentId: "root", path: "fetch/chron/count", index: void 0, caseSensitive: void 0, module: "/build/routes/fetch/chron.count-5GT5AXUK.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/fetch/chron.search.$query": { id: "routes/fetch/chron.search.$query", parentId: "root", path: "fetch/chron/search/:query", index: void 0, caseSensitive: void 0, module: "/build/routes/fetch/chron.search.$query-2TTIM5M2.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/fetch/gloss.$perPage.$pageNum": { id: "routes/fetch/gloss.$perPage.$pageNum", parentId: "root", path: "fetch/gloss/:perPage/:pageNum", index: void 0, caseSensitive: void 0, module: "/build/routes/fetch/gloss.$perPage.$pageNum-4ZSUHGZX.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/fetch/gloss.count": { id: "routes/fetch/gloss.count", parentId: "root", path: "fetch/gloss/count", index: void 0, caseSensitive: void 0, module: "/build/routes/fetch/gloss.count-FTS4XNTA.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/fetch/reg.$authName.$perPage.$pageNum": { id: "routes/fetch/reg.$authName.$perPage.$pageNum", parentId: "root", path: "fetch/reg/:authName/:perPage/:pageNum", index: void 0, caseSensitive: void 0, module: "/build/routes/fetch/reg.$authName.$perPage.$pageNum-YB3D2CEJ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/fetch/reg.count": { id: "routes/fetch/reg.count", parentId: "root", path: "fetch/reg/count", index: void 0, caseSensitive: void 0, module: "/build/routes/fetch/reg.count-77Y4HFUH.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/fetch/reg.details.$regCode": { id: "routes/fetch/reg.details.$regCode", parentId: "root", path: "fetch/reg/details/:regCode", index: void 0, caseSensitive: void 0, module: "/build/routes/fetch/reg.details.$regCode-SJYRBOAX.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/fetch/reg.fulltext.$regCode": { id: "routes/fetch/reg.fulltext.$regCode", parentId: "root", path: "fetch/reg/fulltext/:regCode", index: void 0, caseSensitive: void 0, module: "/build/routes/fetch/reg.fulltext.$regCode-SV42QWDP.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/gloss/$glossCode": { id: "routes/gloss/$glossCode", parentId: "root", path: "gloss/:glossCode", index: void 0, caseSensitive: void 0, module: "/build/routes/gloss/$glossCode-PHIMGTOS.js", imports: ["/build/_shared/chunk-SW2WAD6Y.js", "/build/_shared/chunk-35YDODSN.js", "/build/_shared/chunk-3MBIIICT.js", "/build/_shared/chunk-MR2Y6Q4S.js", "/build/_shared/chunk-G2GGUSV5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/gloss/index": { id: "routes/gloss/index", parentId: "root", path: "gloss", index: !0, caseSensitive: void 0, module: "/build/routes/gloss/index-S4ZLUSBH.js", imports: ["/build/_shared/chunk-M4D3OZQE.js", "/build/_shared/chunk-SW2WAD6Y.js", "/build/_shared/chunk-35YDODSN.js", "/build/_shared/chunk-ZMXBJVIV.js", "/build/_shared/chunk-3MBIIICT.js", "/build/_shared/chunk-G2GGUSV5.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/gloss_datatable": { id: "routes/gloss_datatable", parentId: "root", path: "gloss_datatable", index: void 0, caseSensitive: void 0, module: "/build/routes/gloss_datatable-MIHM6J5Z.js", imports: ["/build/_shared/chunk-TVJDINII.js", "/build/_shared/chunk-DEXX44ZO.js", "/build/_shared/chunk-ZMXBJVIV.js", "/build/_shared/chunk-3MBIIICT.js", "/build/_shared/chunk-G2GGUSV5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-LZHDFD7B.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/letters": { id: "routes/letters", parentId: "root", path: "letters", index: void 0, caseSensitive: void 0, module: "/build/routes/letters-ABZUL6SC.js", imports: ["/build/_shared/chunk-TVJDINII.js", "/build/_shared/chunk-DEXX44ZO.js", "/build/_shared/chunk-ZMXBJVIV.js", "/build/_shared/chunk-3MBIIICT.js", "/build/_shared/chunk-G2GGUSV5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes": { id: "routes/notes", parentId: "root", path: "notes", index: void 0, caseSensitive: void 0, module: "/build/routes/notes-JGTMVFIB.js", imports: ["/build/_shared/chunk-TVJDINII.js", "/build/_shared/chunk-DEXX44ZO.js", "/build/_shared/chunk-ZMXBJVIV.js", "/build/_shared/chunk-3MBIIICT.js", "/build/_shared/chunk-G2GGUSV5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/reg": { id: "routes/reg", parentId: "root", path: "reg", index: void 0, caseSensitive: void 0, module: "/build/routes/reg-BYI7FNWY.js", imports: ["/build/_shared/chunk-MR2Y6Q4S.js", "/build/_shared/chunk-G2GGUSV5.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/reg/$regCode": { id: "routes/reg/$regCode", parentId: "routes/reg", path: ":regCode", index: void 0, caseSensitive: void 0, module: "/build/routes/reg/$regCode-WKFOQRHW.js", imports: ["/build/_shared/chunk-AWD52SF5.js", "/build/_shared/chunk-6EQGYKY7.js", "/build/_shared/chunk-M4D3OZQE.js", "/build/_shared/chunk-35YDODSN.js", "/build/_shared/chunk-DEXX44ZO.js", "/build/_shared/chunk-ZMXBJVIV.js", "/build/_shared/chunk-3MBIIICT.js", "/build/_shared/chunk-TN3QNU6F.js", "/build/_shared/chunk-HASI3UDZ.js", "/build/_shared/chunk-BKODUN5L.js", "/build/_shared/chunk-CVMSKPMO.js", "/build/_shared/chunk-UXJTOQFQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/reg/$regCode.fulltext": { id: "routes/reg/$regCode.fulltext", parentId: "routes/reg", path: ":regCode/fulltext", index: void 0, caseSensitive: void 0, module: "/build/routes/reg/$regCode.fulltext-P2LZ443O.js", imports: ["/build/_shared/chunk-AWD52SF5.js", "/build/_shared/chunk-6EQGYKY7.js", "/build/_shared/chunk-M4D3OZQE.js", "/build/_shared/chunk-35YDODSN.js", "/build/_shared/chunk-DEXX44ZO.js", "/build/_shared/chunk-3MBIIICT.js", "/build/_shared/chunk-HASI3UDZ.js", "/build/_shared/chunk-BKODUN5L.js", "/build/_shared/chunk-CVMSKPMO.js", "/build/_shared/chunk-UXJTOQFQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sand": { id: "routes/sand", parentId: "root", path: "sand", index: void 0, caseSensitive: void 0, module: "/build/routes/sand-F5VSSERP.js", imports: ["/build/_shared/chunk-ZMXBJVIV.js", "/build/_shared/chunk-3MBIIICT.js", "/build/_shared/chunk-G2GGUSV5.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-F5F77374.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/fetch/reg.$authName.$perPage.$pageNum": {
    id: "routes/fetch/reg.$authName.$perPage.$pageNum",
    parentId: "root",
    path: "fetch/reg/:authName/:perPage/:pageNum",
    index: void 0,
    caseSensitive: void 0,
    module: reg_authName_perPage_pageNum_exports
  },
  "routes/fetch/chron.$perPage.$pageNum": {
    id: "routes/fetch/chron.$perPage.$pageNum",
    parentId: "root",
    path: "fetch/chron/:perPage/:pageNum",
    index: void 0,
    caseSensitive: void 0,
    module: chron_perPage_pageNum_exports
  },
  "routes/fetch/gloss.$perPage.$pageNum": {
    id: "routes/fetch/gloss.$perPage.$pageNum",
    parentId: "root",
    path: "fetch/gloss/:perPage/:pageNum",
    index: void 0,
    caseSensitive: void 0,
    module: gloss_perPage_pageNum_exports
  },
  "routes/fetch/reg.fulltext.$regCode": {
    id: "routes/fetch/reg.fulltext.$regCode",
    parentId: "root",
    path: "fetch/reg/fulltext/:regCode",
    index: void 0,
    caseSensitive: void 0,
    module: reg_fulltext_regCode_exports
  },
  "routes/fetch/reg.details.$regCode": {
    id: "routes/fetch/reg.details.$regCode",
    parentId: "root",
    path: "fetch/reg/details/:regCode",
    index: void 0,
    caseSensitive: void 0,
    module: reg_details_regCode_exports
  },
  "routes/fetch/chron.search.$query": {
    id: "routes/fetch/chron.search.$query",
    parentId: "root",
    path: "fetch/chron/search/:query",
    index: void 0,
    caseSensitive: void 0,
    module: chron_search_query_exports
  },
  "routes/fetch/chron.count": {
    id: "routes/fetch/chron.count",
    parentId: "root",
    path: "fetch/chron/count",
    index: void 0,
    caseSensitive: void 0,
    module: chron_count_exports
  },
  "routes/fetch/gloss.count": {
    id: "routes/fetch/gloss.count",
    parentId: "root",
    path: "fetch/gloss/count",
    index: void 0,
    caseSensitive: void 0,
    module: gloss_count_exports
  },
  "routes/gloss/$glossCode": {
    id: "routes/gloss/$glossCode",
    parentId: "root",
    path: "gloss/:glossCode",
    index: void 0,
    caseSensitive: void 0,
    module: glossCode_exports
  },
  "routes/fetch/reg.count": {
    id: "routes/fetch/reg.count",
    parentId: "root",
    path: "fetch/reg/count",
    index: void 0,
    caseSensitive: void 0,
    module: reg_count_exports
  },
  "routes/gloss_datatable": {
    id: "routes/gloss_datatable",
    parentId: "root",
    path: "gloss_datatable",
    index: void 0,
    caseSensitive: void 0,
    module: gloss_datatable_exports
  },
  "routes/gloss/index": {
    id: "routes/gloss/index",
    parentId: "root",
    path: "gloss",
    index: !0,
    caseSensitive: void 0,
    module: gloss_exports
  },
  "routes/letters": {
    id: "routes/letters",
    parentId: "root",
    path: "letters",
    index: void 0,
    caseSensitive: void 0,
    module: letters_exports
  },
  "routes/chron": {
    id: "routes/chron",
    parentId: "root",
    path: "chron",
    index: void 0,
    caseSensitive: void 0,
    module: chron_exports
  },
  "routes/chron/$chronCode": {
    id: "routes/chron/$chronCode",
    parentId: "routes/chron",
    path: ":chronCode",
    index: void 0,
    caseSensitive: void 0,
    module: chronCode_exports
  },
  "routes/chron/cal": {
    id: "routes/chron/cal",
    parentId: "routes/chron",
    path: "cal",
    index: void 0,
    caseSensitive: void 0,
    module: cal_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/notes": {
    id: "routes/notes",
    parentId: "root",
    path: "notes",
    index: void 0,
    caseSensitive: void 0,
    module: notes_exports
  },
  "routes/sand": {
    id: "routes/sand",
    parentId: "root",
    path: "sand",
    index: void 0,
    caseSensitive: void 0,
    module: sand_exports
  },
  "routes/reg": {
    id: "routes/reg",
    parentId: "root",
    path: "reg",
    index: void 0,
    caseSensitive: void 0,
    module: reg_exports
  },
  "routes/reg/$regCode.fulltext": {
    id: "routes/reg/$regCode.fulltext",
    parentId: "routes/reg",
    path: ":regCode/fulltext",
    index: void 0,
    caseSensitive: void 0,
    module: regCode_fulltext_exports
  },
  "routes/reg/$regCode": {
    id: "routes/reg/$regCode",
    parentId: "routes/reg",
    path: ":regCode",
    index: void 0,
    caseSensitive: void 0,
    module: regCode_exports
  },
  "routes/at": {
    id: "routes/at",
    parentId: "root",
    path: "at",
    index: void 0,
    caseSensitive: void 0,
    module: at_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
