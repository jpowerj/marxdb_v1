var __create = Object.create;
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols = Object.getOwnPropertySymbols, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
}, __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b)), __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    __hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source))
      exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop) && (target[prop] = source[prop]);
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
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
var tailwind_default = "/build/_assets/tailwind-XVONKHKJ.css";

// app/root.tsx
var React2 = __toESM(require("react")), import_styles2 = require("@mui/material/styles"), import_AppBar = __toESM(require("@mui/material/AppBar")), import_Box = __toESM(require("@mui/material/Box")), import_CssBaseline = __toESM(require("@mui/material/CssBaseline")), import_GitHub = __toESM(require("@mui/icons-material/GitHub")), import_Drawer = __toESM(require("@mui/material/Drawer")), import_IconButton = __toESM(require("@mui/material/IconButton")), import_Menu = __toESM(require("@mui/icons-material/Menu")), import_Toolbar = __toESM(require("@mui/material/Toolbar")), import_Typography = __toESM(require("@mui/material/Typography")), robotoUrl = "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap", links = () => [
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
}), DrawerHeader = (0, import_styles2.styled)("div")(({ theme: theme2 }) => __spreadValues({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme2.spacing(0, 1)
}, theme2.mixins.toolbar)), AppBar = (0, import_styles2.styled)(import_AppBar.default)(({ theme: theme2, open }) => ({
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
var Drawer = (0, import_styles2.styled)(import_Drawer.default, { shouldForwardProp: (prop) => prop !== "open" })(({ theme: theme2, open }) => __spreadValues(__spreadValues({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box"
}, open && __spreadProps(__spreadValues({}, openedMixin(theme2)), {
  "& .MuiDrawer-paper": openedMixin(theme2)
})), !open && __spreadProps(__spreadValues({}, closedMixin(theme2)), {
  "& .MuiDrawer-paper": closedMixin(theme2)
}))), OverlayDrawer = (0, import_styles2.styled)(import_Drawer.default)(({ theme: theme2, open }) => __spreadValues(__spreadValues({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box"
}, open && __spreadProps(__spreadValues({}, openedMixinOverlay(theme2)), {
  "& .MuiDrawer-paper": openedMixinOverlay(theme2)
})), !open && __spreadProps(__spreadValues({}, closedMixinOverlay(theme2)), {
  "& .MuiDrawer-paper": closedMixinOverlay(theme2)
}))), themeOptions = {
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
  let [open, setOpen] = React2.useState(!0), handleDrawerClick = () => {
    setOpen(!open);
  }, handleDrawerClose = () => {
    setOpen(!1);
  }, location = (0, import_react2.useLocation)(), drawer = /* @__PURE__ */ React2.createElement("div", {
    className: "h-full border-r bg-gray-50"
  }, /* @__PURE__ */ React2.createElement(import_Toolbar.default, null), /* @__PURE__ */ React2.createElement(import_Box.default, {
    sx: { overflow: "auto", overflowX: "hidden" }
  }, /* @__PURE__ */ React2.createElement("ol", null, dbs.map((db, index) => /* @__PURE__ */ React2.createElement("li", {
    key: db.route
  }, /* @__PURE__ */ React2.createElement(import_react2.NavLink, {
    className: ({ isActive }) => `block border-b p-4 text-xl ${isActive ? "bg-white" : "bg-gray-50"}`,
    to: db.route
  }, db.icon, " ", open ? db.name : ""))))));
  return /* @__PURE__ */ React2.createElement(import_Box.default, {
    sx: { display: "flex" }
  }, /* @__PURE__ */ React2.createElement(import_CssBaseline.default, null), /* @__PURE__ */ React2.createElement(AppBar, {
    position: "fixed",
    sx: {
      zIndex: (theme3) => theme3.zIndex.drawer + 1
    }
  }, /* @__PURE__ */ React2.createElement(import_Toolbar.default, null, /* @__PURE__ */ React2.createElement(import_IconButton.default, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerClick,
    edge: "start",
    sx: {
      marginRight: 1
    }
  }, /* @__PURE__ */ React2.createElement(import_Menu.default, null)), /* @__PURE__ */ React2.createElement(import_Typography.default, {
    variant: "h4",
    noWrap: !0,
    component: "div",
    sx: { flex: 1 }
  }, getAppBarHeader(location.pathname)), /* @__PURE__ */ React2.createElement("a", {
    href: "https://github.com/jpowerj/digital-marxism/",
    target: "_blank"
  }, /* @__PURE__ */ React2.createElement(import_IconButton.default, {
    component: "div",
    color: "inherit",
    edge: "end"
  }, /* @__PURE__ */ React2.createElement(import_GitHub.default, {
    sx: { fontSize: "2.2rem" }
  }))))), /* @__PURE__ */ React2.createElement(Drawer, {
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
    open
  }, drawer), /* @__PURE__ */ React2.createElement(import_Drawer.default, {
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
    anchor: "left"
  }, drawer), /* @__PURE__ */ React2.createElement(import_Box.default, {
    component: "main",
    sx: { flexGrow: 1, p: 2, overflow: "hidden", overflowY: "scroll" },
    className: "w-full h-screen max-h-screen flex flex-col"
  }, /* @__PURE__ */ React2.createElement(import_Toolbar.default, {
    className: "flex-none"
  }), /* @__PURE__ */ React2.createElement(import_react2.Outlet, null)));
}
function App() {
  return /* @__PURE__ */ React2.createElement("html", {
    lang: "en",
    className: "h-full"
  }, /* @__PURE__ */ React2.createElement("head", null, /* @__PURE__ */ React2.createElement(import_react2.Meta, null), /* @__PURE__ */ React2.createElement(import_react2.Links, null)), /* @__PURE__ */ React2.createElement("body", {
    className: "h-full m-0"
  }, /* @__PURE__ */ React2.createElement(import_styles.ThemeProvider, {
    theme
  }, /* @__PURE__ */ React2.createElement(MainUI, null), /* @__PURE__ */ React2.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React2.createElement(import_react2.Scripts, null), /* @__PURE__ */ React2.createElement(import_react2.LiveReload, null))));
}

// app/routes/fetch/reg.$authName.$perPage.$pageNum.tsx
var reg_authName_perPage_pageNum_exports = {};
__export(reg_authName_perPage_pageNum_exports, {
  loader: () => loader
});
var import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/models/docinfo.server.ts
var axios = require("axios");
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
function genDataObj(_a) {
  var dataArgs = __objRest(_a, []);
  return JSON.stringify(__spreadValues({
    collection: "register",
    database: "marxdb",
    dataSource: process.env.MONGO_CLUSTER_NAME
  }, dataArgs));
}
async function getDocinfoCount() {
  var _a, _b;
  let data = genDataObj({ pipeline: [{ $count: "count" }] }), config = genConfig(data, "aggregate"), result = await axios(config);
  return (_b = (_a = result == null ? void 0 : result.data) == null ? void 0 : _a.documents[0]) == null ? void 0 : _b.count;
}
async function getDocinfoListItems({ request }) {
  var _a, _b, _c;
  console.log(request);
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
var regSectionDict = {
  marx: "M",
  engels: "E",
  me: "ME",
  st: "ST"
};
function authNameToRegSection(authName) {
  return regSectionDict[authName];
}
async function getDocinfoPage(authName, perPage, pageNum) {
  var _a, _b, _c;
  let start = perPage * pageNum, end = start + perPage, numToSkip = Math.max(start - 1, 0), cancelledFilter = { cancelled: { $ne: !0 } }, rsFilter = {};
  authName === "st" ? rsFilter = { reg_section: { $regex: "ST" } } : rsFilter = { reg_section: { $eq: authNameToRegSection(authName) } };
  let filterOptions = __spreadValues(__spreadValues({}, cancelledFilter), rsFilter), data = genDataObj({
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
async function getDocinfo(regCode) {
  var _a;
  let data = genDataObj({
    filter: { ent_id: { $eq: regCode } }
  }), config = genConfig(data, "findOne"), entries = await axios(config);
  console.log("[getDocinfo] entries = " + Object.keys(entries.data));
  let docResult = (_a = entries == null ? void 0 : entries.data) == null ? void 0 : _a.document;
  return console.log("[getDocinfo] returning " + docResult), docResult;
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
var axios2 = require("axios");
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
function genDataObj2(_a) {
  var dataArgs = __objRest(_a, []);
  return JSON.stringify(__spreadValues({
    collection: "chronicle",
    database: "marxdb",
    dataSource: process.env.MONGO_CLUSTER_NAME
  }, dataArgs));
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
function genDataObj3(_a) {
  var dataArgs = __objRest(_a, []);
  return JSON.stringify(__spreadValues({
    collection: "glossary",
    database: "marxdb",
    dataSource: process.env.MONGO_CLUSTER_NAME
  }, dataArgs));
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

// app/routes/fetch/reg.details.$regCode.tsx
var reg_details_regCode_exports = {};
__export(reg_details_regCode_exports, {
  loader: () => loader4
});
var import_tiny_invariant4 = __toESM(require("tiny-invariant"));
async function loader4({ request, params }) {
  return (0, import_tiny_invariant4.default)(params.regCode, "Expected params.regCode"), await getDocinfo(params.regCode);
}

// app/routes/fetch/chron.count.tsx
var chron_count_exports = {};
__export(chron_count_exports, {
  loader: () => loader5
});
async function loader5({ request, params }) {
  return await getEventCount();
}

// app/routes/fetch/gloss.count.tsx
var gloss_count_exports = {};
__export(gloss_count_exports, {
  loader: () => loader6
});
async function loader6({ request, params }) {
  return await getEntityCount();
}

// app/routes/gloss/$glossCode.tsx
var glossCode_exports = {};
__export(glossCode_exports, {
  default: () => EntityDetailsPage,
  loader: () => loader7
});
var React4 = __toESM(require("react")), import_tiny_invariant5 = __toESM(require("tiny-invariant")), import_react3 = require("@remix-run/react"), import_ArrowBack = __toESM(require("@mui/icons-material/ArrowBack")), import_Button = __toESM(require("@mui/material/Button")), import_Paper = __toESM(require("@mui/material/Paper"));

// app/components/entityDetails.tsx
var React3 = __toESM(require("react")), import_Box2 = __toESM(require("@mui/material/Box")), import_Chip = __toESM(require("@mui/material/Chip")), import_Link = __toESM(require("@mui/icons-material/Link")), import_Table = __toESM(require("@mui/material/Table")), import_TableBody = __toESM(require("@mui/material/TableBody")), import_TableCell = __toESM(require("@mui/material/TableCell")), import_TableRow = __toESM(require("@mui/material/TableRow")), import_Tooltip = __toESM(require("@mui/material/Tooltip")), import_Typography2 = __toESM(require("@mui/material/Typography"));
function EntityDetailsPanel(props) {
  let rowData = props.data;
  console.log("[entityDetails] rowData: " + Object.keys(rowData));
  let [tooltipText, setTooltipText] = React3.useState("Copy Link"), handleTooltipClose = () => {
    setTooltipText("Copy Link");
  };
  return /* @__PURE__ */ React3.createElement("div", {
    style: {
      fontSize: 16,
      padding: 5,
      margin: 5
    }
  }, /* @__PURE__ */ React3.createElement(import_Box2.default, {
    sx: { margin: 1 }
  }, /* @__PURE__ */ React3.createElement("div", {
    className: "grid grid-cols-2 mb-2"
  }, /* @__PURE__ */ React3.createElement("div", {
    className: "h-full"
  }, /* @__PURE__ */ React3.createElement(import_Typography2.default, {
    variant: "h5",
    className: "inline-flex align-middle font-bold"
  }, rowData.id)), /* @__PURE__ */ React3.createElement("div", {
    className: "self-center float-right"
  }, /* @__PURE__ */ React3.createElement(import_Tooltip.default, {
    title: tooltipText
  }, /* @__PURE__ */ React3.createElement(import_Chip.default, {
    icon: /* @__PURE__ */ React3.createElement(import_Link.default, null),
    label: rowData.id,
    variant: "outlined",
    className: "float-right",
    onMouseLeave: handleTooltipClose,
    onClick: () => {
      navigator.clipboard.writeText(`https://marxdb.com/gloss/${rowData.id}`).then(function() {
        console.log("Success! The text was copied to your clipboard"), setTooltipText("Link Copied!");
      }, function() {
        console.log("Oops! Your browser does not support the Clipboard API");
      });
    }
  })))), /* @__PURE__ */ React3.createElement(import_Table.default, {
    size: "small",
    "aria-label": "details"
  }, /* @__PURE__ */ React3.createElement(import_TableBody.default, null, /* @__PURE__ */ React3.createElement(import_TableRow.default, {
    key: "header",
    sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" }
  }, /* @__PURE__ */ React3.createElement(import_TableCell.default, {
    component: "th",
    scope: "row",
    sx: { fontWeight: "bold" }
  }, "Heading"), /* @__PURE__ */ React3.createElement(import_TableCell.default, {
    colSpan: 5,
    className: "font-bold"
  }, rowData.header)), /* @__PURE__ */ React3.createElement(import_TableRow.default, {
    key: "desc",
    sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" }
  }, /* @__PURE__ */ React3.createElement(import_TableCell.default, {
    component: "th",
    scope: "row",
    sx: { fontWeight: "bold" }
  }, "Description"), /* @__PURE__ */ React3.createElement(import_TableCell.default, {
    colSpan: 5,
    className: "font-mono"
  }, rowData.text)), /* @__PURE__ */ React3.createElement(import_TableRow.default, {
    key: "dates"
  }, /* @__PURE__ */ React3.createElement(import_TableCell.default, {
    sx: { fontWeight: "bold" }
  }, "Written"), /* @__PURE__ */ React3.createElement(import_TableCell.default, null, rowData.written), /* @__PURE__ */ React3.createElement(import_TableCell.default, {
    sx: { fontWeight: "bold" }
  }, "Dated"), /* @__PURE__ */ React3.createElement(import_TableCell.default, null, Object.keys(rowData).indexOf("dated") > -1 ? rowData.dated : "NA"), /* @__PURE__ */ React3.createElement(import_TableCell.default, {
    sx: { fontWeight: "bold" }
  }, "Published"), /* @__PURE__ */ React3.createElement(import_TableCell.default, null, Object.keys(rowData).indexOf("published") > -1 ? rowData.published : "NA")), Object.keys(rowData).indexOf("lang_orig") > -1 && /* @__PURE__ */ React3.createElement(import_TableRow.default, {
    key: "langs",
    sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" }
  }, /* @__PURE__ */ React3.createElement(import_TableCell.default, {
    component: "th",
    scope: "row",
    sx: { fontWeight: "bold" }
  }, "Language(s)"), /* @__PURE__ */ React3.createElement(import_TableCell.default, {
    colSpan: 5
  }, rowData.lang_orig.join(", "))), Object.keys(rowData).indexOf("source") > -1 && /* @__PURE__ */ React3.createElement(import_TableRow.default, {
    key: "sources",
    sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" }
  }, /* @__PURE__ */ React3.createElement(import_TableCell.default, {
    component: "th",
    scope: "row",
    sx: { fontWeight: "bold" }
  }, "Source(s)"), /* @__PURE__ */ React3.createElement(import_TableCell.default, {
    colSpan: 5
  }, rowData.source)), Object.keys(rowData).indexOf("reprint") > -1 && /* @__PURE__ */ React3.createElement(import_TableRow.default, {
    key: "reprints",
    sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" }
  }, /* @__PURE__ */ React3.createElement(import_TableCell.default, {
    component: "th",
    scope: "row",
    sx: { fontWeight: "bold" }
  }, "Reprints"), /* @__PURE__ */ React3.createElement(import_TableCell.default, {
    colSpan: 5
  }, rowData.reprint)), Object.keys(rowData).indexOf("more_info") > -1 && /* @__PURE__ */ React3.createElement(import_TableRow.default, {
    key: "misc",
    sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" }
  }, /* @__PURE__ */ React3.createElement(import_TableCell.default, {
    component: "th",
    scope: "row",
    sx: { fontWeight: "bold" }
  }, "Misc"), /* @__PURE__ */ React3.createElement(import_TableCell.default, {
    colSpan: 5
  }, rowData.more_info)), Object.keys(rowData).indexOf("chron_ref_ids") > -1 && /* @__PURE__ */ React3.createElement(import_TableRow.default, {
    key: "chronrefs",
    sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" }
  }, /* @__PURE__ */ React3.createElement(import_TableCell.default, {
    component: "th",
    scope: "row",
    sx: { fontWeight: "bold" }
  }, "Chronicle References"), /* @__PURE__ */ React3.createElement(import_TableCell.default, {
    colSpan: 5
  }, rowData.chron_ref_ids.map((item) => getChronRefLink(item))))))));
}

// app/routes/gloss/$glossCode.tsx
async function loader7({ request, params }) {
  (0, import_tiny_invariant5.default)(params.glossCode, "Expected params.glossCode");
  let glossCode = params.glossCode;
  console.log("[$glossCode.tsx] glossCode: " + glossCode);
  let entityData = await getEntity(glossCode);
  return { glossCode, entityData };
}
function EntityDetailsPage() {
  let entityData = (0, import_react3.useLoaderData)().entityData;
  return /* @__PURE__ */ React4.createElement("div", null, /* @__PURE__ */ React4.createElement("div", null, /* @__PURE__ */ React4.createElement(import_react3.NavLink, {
    to: "../../gloss/"
  }, /* @__PURE__ */ React4.createElement(import_Button.default, {
    startIcon: /* @__PURE__ */ React4.createElement(import_ArrowBack.default, null)
  }, "Back to Glossary"))), /* @__PURE__ */ React4.createElement(import_Paper.default, null, /* @__PURE__ */ React4.createElement(EntityDetailsPanel, {
    data: entityData
  })));
}

// app/routes/fetch/reg.count.tsx
var reg_count_exports = {};
__export(reg_count_exports, {
  loader: () => loader8
});
async function loader8({ request, params }) {
  return await getDocinfoCount();
}

// app/routes/gloss_datatable.tsx
var gloss_datatable_exports = {};
__export(gloss_datatable_exports, {
  default: () => CollapsibleTable,
  loader: () => loader9
});
var React5 = __toESM(require("react")), import_styles3 = require("@mui/material/styles"), import_Box3 = __toESM(require("@mui/material/Box")), import_Collapse = __toESM(require("@mui/material/Collapse")), import_FirstPage = __toESM(require("@mui/icons-material/FirstPage")), import_IconButton2 = __toESM(require("@mui/material/IconButton")), import_Toolbar2 = __toESM(require("@mui/material/Toolbar")), import_Table2 = __toESM(require("@mui/material/Table")), import_TableBody2 = __toESM(require("@mui/material/TableBody")), import_TableCell2 = __toESM(require("@mui/material/TableCell")), import_TableHead = __toESM(require("@mui/material/TableHead")), import_TableRow2 = __toESM(require("@mui/material/TableRow")), import_Typography3 = __toESM(require("@mui/material/Typography")), import_KeyboardArrowDown = __toESM(require("@mui/icons-material/KeyboardArrowDown")), import_KeyboardArrowUp = __toESM(require("@mui/icons-material/KeyboardArrowUp")), import_KeyboardArrowLeft = __toESM(require("@mui/icons-material/KeyboardArrowLeft")), import_KeyboardArrowRight = __toESM(require("@mui/icons-material/KeyboardArrowRight")), import_LastPage = __toESM(require("@mui/icons-material/LastPage")), import_core = __toESM(require("@material-table/core")), import_node = require("@remix-run/node"), import_react4 = require("@remix-run/react");
var defaultPerPage = 3, defaultPageNum = 0;
async function loader9({ request }) {
  let docinfoListItems = await getDocinfoListItems();
  return (0, import_node.json)({ docinfoListItems });
}
function CollapsibleTable() {
  let initData = (0, import_react4.useLoaderData)(), fetcher = (0, import_react4.useFetcher)();
  React5.useEffect(() => {
    fetcher.type === "init" && fetcher.load(`/fetch/gloss/${defaultPerPage}/${defaultPageNum}`);
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
  return /* @__PURE__ */ React5.createElement("div", null, fetcher.type !== "done" ? /* @__PURE__ */ React5.createElement("span", null, "Loading...") : /* @__PURE__ */ React5.createElement(import_core.default, {
    columns: DEMO_COLS,
    detailPanel: ({ rowData }) => (console.log(rowData), /* @__PURE__ */ React5.createElement("div", {
      style: {
        fontSize: 16,
        padding: 5,
        margin: 5
      }
    }, /* @__PURE__ */ React5.createElement(import_Box3.default, {
      sx: { margin: 1 }
    }, /* @__PURE__ */ React5.createElement(import_Typography3.default, {
      variant: "h6",
      gutterBottom: !0,
      component: "div"
    }, rowData.title), /* @__PURE__ */ React5.createElement(import_Table2.default, {
      size: "small",
      "aria-label": "details"
    }, /* @__PURE__ */ React5.createElement(import_TableBody2.default, null, /* @__PURE__ */ React5.createElement(import_TableRow2.default, {
      key: "fulltext",
      sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" }
    }, /* @__PURE__ */ React5.createElement(import_TableCell2.default, {
      component: "th",
      scope: "row",
      sx: { fontWeight: "bold" }
    }, "Full Text"), /* @__PURE__ */ React5.createElement(import_TableCell2.default, {
      colSpan: 5
    }, rowData.fullText)), /* @__PURE__ */ React5.createElement(import_TableRow2.default, {
      key: "dates"
    }, /* @__PURE__ */ React5.createElement(import_TableCell2.default, {
      sx: { fontWeight: "bold" }
    }, "Written"), /* @__PURE__ */ React5.createElement(import_TableCell2.default, null, "1/1/1850"), /* @__PURE__ */ React5.createElement(import_TableCell2.default, {
      sx: { fontWeight: "bold" }
    }, "Dated"), /* @__PURE__ */ React5.createElement(import_TableCell2.default, null, "1/3/1850"), /* @__PURE__ */ React5.createElement(import_TableCell2.default, {
      sx: { fontWeight: "bold" }
    }, "Published"), /* @__PURE__ */ React5.createElement(import_TableCell2.default, null, "1/2/1850"))))))),
    data: fetcher.data.result
  }));
}

// app/routes/gloss/index.tsx
var gloss_exports = {};
__export(gloss_exports, {
  default: () => GlossTable
});
var React6 = __toESM(require("react")), import_react5 = require("@remix-run/react"), import_Box4 = __toESM(require("@mui/material/Box")), import_Paper2 = __toESM(require("@mui/material/Paper")), import_TableContainer = __toESM(require("@mui/material/TableContainer")), import_Info = __toESM(require("@mui/icons-material/Info")), import_core2 = __toESM(require("@material-table/core"));
var openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
function GlossTable() {
  let data_cols = [
    { field: "id", title: "ID", width: "60px" },
    { field: "desc", title: "Description", cellStyle: { width: "65%" }, headerStyle: { width: "65%" } }
  ], fetcher = (0, import_react5.useFetcher)();
  return React6.useEffect(() => {
    fetcher.type === "init" && fetcher.load("/fetch/gloss/10/0");
  }, [fetcher]), /* @__PURE__ */ React6.createElement(import_TableContainer.default, {
    component: import_Paper2.default
  }, /* @__PURE__ */ React6.createElement(import_core2.default, {
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
    detailPanel: ({ rowData }) => /* @__PURE__ */ React6.createElement(EntityDetailsPanel, {
      data: rowData
    }),
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
      Cell: (props) => /* @__PURE__ */ React6.createElement(import_core2.MTableCell, __spreadValues({
        className: "overflow-hidden text-ellipsis whitespace-nowrap max-w-[550px]"
      }, props)),
      Container: (props) => /* @__PURE__ */ React6.createElement(import_Paper2.default, __spreadValues({
        className: "even:[&>*]:grow",
        sx: { display: "flex", flexDirection: "column", height: "100%", maxHeight: "100%" },
        elevation: 1
      }, props)),
      Toolbar: (props) => /* @__PURE__ */ React6.createElement(import_Box4.default, {
        sx: { borderBottom: "1px solid rgba(184,184,184,1)" },
        className: "bg-green-700/10"
      }, /* @__PURE__ */ React6.createElement(import_core2.MTableToolbar, __spreadValues({
        className: "min-h-[48px]"
      }, props))),
      Body: (props) => /* @__PURE__ */ React6.createElement(import_core2.MTableBody, __spreadValues({
        className: "overflow-hidden text-ellipsis"
      }, props))
    },
    actions: [
      {
        icon: () => /* @__PURE__ */ React6.createElement(import_Info.default, null),
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
  }));
}

// app/routes/letters.tsx
var letters_exports = {};
__export(letters_exports, {
  default: () => CollapsibleTable2,
  loader: () => loader10
});
var React7 = __toESM(require("react")), import_styles4 = require("@mui/material/styles"), import_Box5 = __toESM(require("@mui/material/Box")), import_Collapse2 = __toESM(require("@mui/material/Collapse")), import_FirstPage2 = __toESM(require("@mui/icons-material/FirstPage")), import_IconButton3 = __toESM(require("@mui/material/IconButton")), import_Toolbar3 = __toESM(require("@mui/material/Toolbar")), import_Table3 = __toESM(require("@mui/material/Table")), import_TableBody3 = __toESM(require("@mui/material/TableBody")), import_TableCell3 = __toESM(require("@mui/material/TableCell")), import_TableHead2 = __toESM(require("@mui/material/TableHead")), import_TableRow3 = __toESM(require("@mui/material/TableRow")), import_Typography4 = __toESM(require("@mui/material/Typography")), import_KeyboardArrowDown2 = __toESM(require("@mui/icons-material/KeyboardArrowDown")), import_KeyboardArrowUp2 = __toESM(require("@mui/icons-material/KeyboardArrowUp")), import_KeyboardArrowLeft2 = __toESM(require("@mui/icons-material/KeyboardArrowLeft")), import_KeyboardArrowRight2 = __toESM(require("@mui/icons-material/KeyboardArrowRight")), import_LastPage2 = __toESM(require("@mui/icons-material/LastPage")), import_core3 = __toESM(require("@material-table/core")), import_node2 = require("@remix-run/node"), import_react6 = require("@remix-run/react");
var defaultPerPage2 = 3, defaultPageNum2 = 0;
async function loader10({ request }) {
  let docinfoListItems = await getDocinfoListItems();
  return (0, import_node2.json)({ docinfoListItems });
}
function CollapsibleTable2() {
  let initData = (0, import_react6.useLoaderData)(), fetcher = (0, import_react6.useFetcher)();
  React7.useEffect(() => {
    fetcher.type === "init" && fetcher.load(`/fetch/gloss/${defaultPerPage2}/${defaultPageNum2}`);
  }, [fetcher]);
  let [page, setPage] = React7.useState(0), [rowsPerPage, setRowsPerPage] = React7.useState(5), [rowsOnPage, setRowsOnPage] = React7.useState(5), emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowsOnPage) : 0, handleChangePage = (event, newPage) => {
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
  return /* @__PURE__ */ React7.createElement("div", null, fetcher.type !== "done" ? /* @__PURE__ */ React7.createElement("span", null, "Loading...") : /* @__PURE__ */ React7.createElement(import_core3.default, {
    columns: DEMO_COLS,
    detailPanel: ({ rowData }) => (console.log(rowData), /* @__PURE__ */ React7.createElement("div", {
      style: {
        fontSize: 16,
        padding: 5,
        margin: 5
      }
    }, /* @__PURE__ */ React7.createElement(import_Box5.default, {
      sx: { margin: 1 }
    }, /* @__PURE__ */ React7.createElement(import_Typography4.default, {
      variant: "h6",
      gutterBottom: !0,
      component: "div"
    }, rowData.title), /* @__PURE__ */ React7.createElement(import_Table3.default, {
      size: "small",
      "aria-label": "details"
    }, /* @__PURE__ */ React7.createElement(import_TableBody3.default, null, /* @__PURE__ */ React7.createElement(import_TableRow3.default, {
      key: "fulltext",
      sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" }
    }, /* @__PURE__ */ React7.createElement(import_TableCell3.default, {
      component: "th",
      scope: "row",
      sx: { fontWeight: "bold" }
    }, "Full Text"), /* @__PURE__ */ React7.createElement(import_TableCell3.default, {
      colSpan: 3
    }, rowData.fullText)), /* @__PURE__ */ React7.createElement(import_TableRow3.default, {
      key: "dates"
    }, /* @__PURE__ */ React7.createElement(import_TableCell3.default, {
      sx: { fontWeight: "bold" }
    }, "Date Written"), /* @__PURE__ */ React7.createElement(import_TableCell3.default, null, "1/1/1850"), /* @__PURE__ */ React7.createElement(import_TableCell3.default, {
      sx: { fontWeight: "bold" }
    }, "Date Published"), /* @__PURE__ */ React7.createElement(import_TableCell3.default, null, "1/2/1850"))))))),
    data: fetcher.data.result
  }));
}

// app/routes/chron.tsx
var chron_exports = {};
__export(chron_exports, {
  default: () => ChronPage
});
var React8 = __toESM(require("react")), import_react7 = require("@remix-run/react"), import_Typography5 = __toESM(require("@mui/material/Typography")), import_Button2 = __toESM(require("@mui/material/Button")), import_ArrowBack2 = __toESM(require("@mui/icons-material/ArrowBack"));
function ChronPage() {
  let pathname = (0, import_react7.useLocation)().pathname;
  return pathname.endsWith("/") && (pathname = pathname.substring(0, pathname.length - 1)), /* @__PURE__ */ React8.createElement(import_react7.Outlet, null);
}

// app/routes/chron/$chronCode.tsx
var chronCode_exports = {};
__export(chronCode_exports, {
  default: () => ChronTable,
  loader: () => loader11
});
var React10 = __toESM(require("react")), import_tiny_invariant6 = __toESM(require("tiny-invariant")), import_react9 = require("@remix-run/react"), import_ArrowBack3 = __toESM(require("@mui/icons-material/ArrowBack")), import_Box7 = __toESM(require("@mui/material/Box")), import_Button3 = __toESM(require("@mui/material/Button")), import_KeyboardArrowLeft3 = __toESM(require("@mui/icons-material/KeyboardArrowLeft")), import_KeyboardArrowRight3 = __toESM(require("@mui/icons-material/KeyboardArrowRight")), import_Paper3 = __toESM(require("@mui/material/Paper")), import_TableContainer2 = __toESM(require("@mui/material/TableContainer")), import_Info3 = __toESM(require("@mui/icons-material/Info")), import_core4 = __toESM(require("@material-table/core"));

// app/components/eventDetails.tsx
var React9 = __toESM(require("react")), import_Box6 = __toESM(require("@mui/material/Box")), import_Chip2 = __toESM(require("@mui/material/Chip")), import_Info2 = __toESM(require("@mui/icons-material/Info")), import_Table4 = __toESM(require("@mui/material/Table")), import_TableBody4 = __toESM(require("@mui/material/TableBody")), import_TableCell4 = __toESM(require("@mui/material/TableCell")), import_TableRow4 = __toESM(require("@mui/material/TableRow")), import_Tooltip2 = __toESM(require("@mui/material/Tooltip")), import_Typography6 = __toESM(require("@mui/material/Typography")), import_react8 = require("@remix-run/react"), import_OpenInNew = __toESM(require("@mui/icons-material/OpenInNew")), import_FormControl = __toESM(require("@mui/material/FormControl")), import_InputLabel = __toESM(require("@mui/material/InputLabel")), import_OutlinedInput = __toESM(require("@mui/material/OutlinedInput")), import_InputAdornment = __toESM(require("@mui/material/InputAdornment")), import_IconButton4 = __toESM(require("@mui/material/IconButton")), import_ContentCopy = __toESM(require("@mui/icons-material/ContentCopy"));
function getChronRefLink2(chronRefId) {
  let relUrl = "../../chron/" + chronRefId;
  return /* @__PURE__ */ React9.createElement(import_react8.NavLink, {
    to: relUrl,
    rel: "noopener,noreferrer",
    target: "_blank",
    className: "m-2 p-2 border border-solid border-black cursor-pointer rounded-full"
  }, "18" + chronRefId, /* @__PURE__ */ React9.createElement(import_OpenInNew.default, {
    sx: { ml: 1 },
    fontSize: "small"
  }));
}
function EventDetailsPanel(props) {
  let rowData = props.data, [tooltipText, setTooltipText] = React9.useState("Copy Link"), handleTooltipClose = () => {
    setTooltipText("Copy Link");
  };
  return /* @__PURE__ */ React9.createElement("div", {
    style: {
      fontSize: 16,
      padding: 5,
      margin: 5
    }
  }, /* @__PURE__ */ React9.createElement(import_Box6.default, {
    sx: { margin: 1 }
  }, /* @__PURE__ */ React9.createElement("div", {
    className: "grid grid-cols-2 mb-2 items-center"
  }, /* @__PURE__ */ React9.createElement(import_Typography6.default, {
    variant: "h5",
    className: "table-cell align-middle font-bold"
  }, rowData.ymd), rowData.start_approx === "checked" && /* @__PURE__ */ React9.createElement(import_Tooltip2.default, {
    title: "Start date is approximate"
  }, /* @__PURE__ */ React9.createElement(import_Chip2.default, {
    icon: /* @__PURE__ */ React9.createElement(import_Info2.default, null),
    label: "Approximate",
    className: "m-2 cursor-pointer"
  })), /* @__PURE__ */ React9.createElement("div", {
    className: "self-center float-right"
  }, /* @__PURE__ */ React9.createElement(import_FormControl.default, {
    sx: { m: 1, width: "36ch" },
    variant: "outlined",
    className: "float-right"
  }, /* @__PURE__ */ React9.createElement(import_InputLabel.default, {
    htmlFor: "outlined-adornment-password"
  }, "Permalink"), /* @__PURE__ */ React9.createElement(import_OutlinedInput.default, {
    id: "outlined-adornment-password",
    className: "float-right",
    value: `https://marxdb.com/chron/${rowData.entry_id_clean}`,
    disabled: !0,
    type: "text",
    size: "small",
    endAdornment: /* @__PURE__ */ React9.createElement(import_InputAdornment.default, {
      position: "end"
    }, /* @__PURE__ */ React9.createElement(import_Tooltip2.default, {
      title: tooltipText
    }, /* @__PURE__ */ React9.createElement(import_IconButton4.default, {
      "aria-label": "toggle password visibility",
      edge: "end",
      onClick: () => {
        navigator.clipboard.writeText(`https://marxdb.com/chron/${rowData.entry_id_clean}`).then(function() {
          console.log("Success! The text was copied to your clipboard"), setTooltipText("Link Copied!");
        }, function() {
          console.log("Oops! Your browser does not support the Clipboard API");
        });
      }
    }, /* @__PURE__ */ React9.createElement(import_ContentCopy.default, null)))),
    label: "Permalink"
  })))), /* @__PURE__ */ React9.createElement(import_Table4.default, {
    size: "small",
    "aria-label": "details"
  }, /* @__PURE__ */ React9.createElement(import_TableBody4.default, null, /* @__PURE__ */ React9.createElement(import_TableRow4.default, {
    key: "header",
    sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" }
  }, /* @__PURE__ */ React9.createElement(import_TableCell4.default, {
    component: "th",
    scope: "row",
    sx: { fontWeight: "bold" }
  }, "Heading"), /* @__PURE__ */ React9.createElement(import_TableCell4.default, {
    colSpan: 5,
    className: "font-bold"
  }, rowData.header)), /* @__PURE__ */ React9.createElement(import_TableRow4.default, {
    key: "desc",
    sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" }
  }, /* @__PURE__ */ React9.createElement(import_TableCell4.default, {
    component: "th",
    scope: "row",
    sx: { fontWeight: "bold" }
  }, "Description"), /* @__PURE__ */ React9.createElement(import_TableCell4.default, {
    colSpan: 5,
    className: "font-mono"
  }, rowData.text)), /* @__PURE__ */ React9.createElement(import_TableRow4.default, {
    key: "dates"
  }, /* @__PURE__ */ React9.createElement(import_TableCell4.default, {
    sx: { fontWeight: "bold" }
  }, "Written"), /* @__PURE__ */ React9.createElement(import_TableCell4.default, null, rowData.written), /* @__PURE__ */ React9.createElement(import_TableCell4.default, {
    sx: { fontWeight: "bold" }
  }, "Dated"), /* @__PURE__ */ React9.createElement(import_TableCell4.default, null, Object.keys(rowData).indexOf("dated") > -1 ? rowData.dated : "NA"), /* @__PURE__ */ React9.createElement(import_TableCell4.default, {
    sx: { fontWeight: "bold" }
  }, "Published"), /* @__PURE__ */ React9.createElement(import_TableCell4.default, null, Object.keys(rowData).indexOf("published") > -1 ? rowData.published : "NA")), Object.keys(rowData).indexOf("lang_orig") > -1 && /* @__PURE__ */ React9.createElement(import_TableRow4.default, {
    key: "langs",
    sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" }
  }, /* @__PURE__ */ React9.createElement(import_TableCell4.default, {
    component: "th",
    scope: "row",
    sx: { fontWeight: "bold" }
  }, "Language(s)"), /* @__PURE__ */ React9.createElement(import_TableCell4.default, {
    colSpan: 5
  }, rowData.lang_orig.join(", "))), Object.keys(rowData).indexOf("source") > -1 && /* @__PURE__ */ React9.createElement(import_TableRow4.default, {
    key: "sources",
    sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" }
  }, /* @__PURE__ */ React9.createElement(import_TableCell4.default, {
    component: "th",
    scope: "row",
    sx: { fontWeight: "bold" }
  }, "Source(s)"), /* @__PURE__ */ React9.createElement(import_TableCell4.default, {
    colSpan: 5
  }, rowData.source)), Object.keys(rowData).indexOf("reprint") > -1 && /* @__PURE__ */ React9.createElement(import_TableRow4.default, {
    key: "reprints",
    sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" }
  }, /* @__PURE__ */ React9.createElement(import_TableCell4.default, {
    component: "th",
    scope: "row",
    sx: { fontWeight: "bold" }
  }, "Reprints"), /* @__PURE__ */ React9.createElement(import_TableCell4.default, {
    colSpan: 5
  }, rowData.reprint)), Object.keys(rowData).indexOf("more_info") > -1 && /* @__PURE__ */ React9.createElement(import_TableRow4.default, {
    key: "misc",
    sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" }
  }, /* @__PURE__ */ React9.createElement(import_TableCell4.default, {
    component: "th",
    scope: "row",
    sx: { fontWeight: "bold" }
  }, "Misc"), /* @__PURE__ */ React9.createElement(import_TableCell4.default, {
    colSpan: 5
  }, rowData.more_info)), Object.keys(rowData).indexOf("chron_ref_ids") > -1 && /* @__PURE__ */ React9.createElement(import_TableRow4.default, {
    key: "chronrefs",
    sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" }
  }, /* @__PURE__ */ React9.createElement(import_TableCell4.default, {
    component: "th",
    scope: "row",
    sx: { fontWeight: "bold" }
  }, "Chronicle References"), /* @__PURE__ */ React9.createElement(import_TableCell4.default, {
    colSpan: 5
  }, rowData.chron_ref_ids.map((item) => getChronRefLink2(item))))))));
}

// app/routes/chron/$chronCode.tsx
var import_RadioGroup = __toESM(require("@mui/material/RadioGroup")), import_FormControlLabel = __toESM(require("@mui/material/FormControlLabel")), import_Radio = __toESM(require("@mui/material/Radio"));
async function loader11({ request, params }) {
  (0, import_tiny_invariant6.default)(params.chronCode, "Expected params.chronCode");
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
  return /* @__PURE__ */ React10.createElement("div", null, /* @__PURE__ */ React10.createElement("div", null, /* @__PURE__ */ React10.createElement(import_react9.NavLink, {
    to: "../../chron/list"
  }, /* @__PURE__ */ React10.createElement(import_Button3.default, {
    startIcon: /* @__PURE__ */ React10.createElement(import_ArrowBack3.default, null)
  }, "Back to Chronicle"))), /* @__PURE__ */ React10.createElement(import_Paper3.default, null, /* @__PURE__ */ React10.createElement(EventDetailsPanel, {
    data: entryData
  })), /* @__PURE__ */ React10.createElement("div", null, /* @__PURE__ */ React10.createElement("div", {
    className: "float-left"
  }, /* @__PURE__ */ React10.createElement(import_react9.NavLink, {
    to: "../../chron/list"
  }, /* @__PURE__ */ React10.createElement(import_Button3.default, {
    startIcon: /* @__PURE__ */ React10.createElement(import_KeyboardArrowLeft3.default, null)
  }, "Previous Record"))), /* @__PURE__ */ React10.createElement("div", {
    className: "float-right"
  }, /* @__PURE__ */ React10.createElement(import_react9.NavLink, {
    to: "../../chron/list"
  }, /* @__PURE__ */ React10.createElement(import_Button3.default, {
    endIcon: /* @__PURE__ */ React10.createElement(import_KeyboardArrowRight3.default, null)
  }, "Next Record")))));
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
  return React10.useEffect(() => {
    fetcher.type === "init" && fetcher.load("/fetch/chron/10/0");
  }, [fetcher]), /* @__PURE__ */ React10.createElement(import_TableContainer2.default, {
    component: import_Paper3.default
  }, /* @__PURE__ */ React10.createElement(import_core4.default, {
    title: /* @__PURE__ */ React10.createElement("div", null, /* @__PURE__ */ React10.createElement(import_RadioGroup.default, {
      row: !0,
      value: reqData.viewName
    }, /* @__PURE__ */ React10.createElement(import_react9.NavLink, {
      to: "../list"
    }, /* @__PURE__ */ React10.createElement(import_FormControlLabel.default, {
      control: /* @__PURE__ */ React10.createElement(import_Radio.default, null),
      label: "List View",
      value: "list"
    })), /* @__PURE__ */ React10.createElement(import_react9.NavLink, {
      to: "../cal"
    }, /* @__PURE__ */ React10.createElement(import_FormControlLabel.default, {
      control: /* @__PURE__ */ React10.createElement(import_Radio.default, null),
      label: "Calendar View",
      value: "cal"
    })))),
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
    detailPanel: ({ rowData }) => /* @__PURE__ */ React10.createElement(EventDetailsPanel, {
      data: rowData
    }),
    data: (query) => new Promise((resolve, reject) => {
      fetch(`/fetch/chron/10/${query.page}`).then((response) => response.json()).then((rsJson) => {
        resolve({
          data: rsJson.docs,
          page: query.page,
          totalCount: rsJson.total
        });
      });
    }),
    components: {
      Cell: (props) => /* @__PURE__ */ React10.createElement(import_core4.MTableCell, __spreadValues({
        className: "overflow-hidden text-ellipsis whitespace-nowrap max-w-[350px]"
      }, props)),
      Container: (props) => /* @__PURE__ */ React10.createElement(import_Paper3.default, __spreadValues({
        className: "even:[&>*]:grow",
        sx: { display: "flex", flexDirection: "column", height: "100%", maxHeight: "100%" },
        elevation: 1
      }, props)),
      Toolbar: (props) => /* @__PURE__ */ React10.createElement(import_Box7.default, {
        sx: { borderBottom: "1px solid rgba(184,184,184,1)" },
        className: "bg-red-700/10"
      }, /* @__PURE__ */ React10.createElement(import_core4.MTableToolbar, __spreadValues({
        className: "min-h-[48px]"
      }, props))),
      Body: (props) => /* @__PURE__ */ React10.createElement(import_core4.MTableBody, __spreadValues({
        className: "overflow-hidden text-ellipsis"
      }, props))
    },
    actions: [
      {
        icon: () => /* @__PURE__ */ React10.createElement(import_Info3.default, null),
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
  }));
}

// app/routes/chron/cal.tsx
var cal_exports = {};
__export(cal_exports, {
  default: () => ChronCal
});
var import_react10 = __toESM(require("@fullcalendar/react")), import_daygrid = __toESM(require("@fullcalendar/daygrid"));
function ChronCal() {
  return /* @__PURE__ */ React.createElement(import_react10.default, {
    plugins: [import_daygrid.default],
    initialView: "dayGridMonth"
  });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => CycloPage
});
function CycloPage() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "font-bold"
  }, "Welcome to the Marx-Engels Digital Cyclopedia!")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Choose a database in the menu on the left to get started.")));
}

// app/routes/notes.tsx
var notes_exports = {};
__export(notes_exports, {
  default: () => CollapsibleTable3,
  loader: () => loader12
});
var React11 = __toESM(require("react")), import_styles5 = require("@mui/material/styles"), import_Box8 = __toESM(require("@mui/material/Box")), import_Collapse3 = __toESM(require("@mui/material/Collapse")), import_FirstPage3 = __toESM(require("@mui/icons-material/FirstPage")), import_IconButton5 = __toESM(require("@mui/material/IconButton")), import_Toolbar4 = __toESM(require("@mui/material/Toolbar")), import_Table5 = __toESM(require("@mui/material/Table")), import_TableBody5 = __toESM(require("@mui/material/TableBody")), import_TableCell5 = __toESM(require("@mui/material/TableCell")), import_TableHead3 = __toESM(require("@mui/material/TableHead")), import_TableRow5 = __toESM(require("@mui/material/TableRow")), import_Typography7 = __toESM(require("@mui/material/Typography")), import_KeyboardArrowDown3 = __toESM(require("@mui/icons-material/KeyboardArrowDown")), import_KeyboardArrowUp3 = __toESM(require("@mui/icons-material/KeyboardArrowUp")), import_KeyboardArrowLeft4 = __toESM(require("@mui/icons-material/KeyboardArrowLeft")), import_KeyboardArrowRight4 = __toESM(require("@mui/icons-material/KeyboardArrowRight")), import_LastPage3 = __toESM(require("@mui/icons-material/LastPage")), import_core5 = __toESM(require("@material-table/core")), import_node3 = require("@remix-run/node"), import_react11 = require("@remix-run/react");
var defaultPerPage3 = 3, defaultPageNum3 = 0;
async function loader12({ request }) {
  let docinfoListItems = await getDocinfoListItems();
  return (0, import_node3.json)({ docinfoListItems });
}
function CollapsibleTable3() {
  let initData = (0, import_react11.useLoaderData)(), fetcher = (0, import_react11.useFetcher)();
  React11.useEffect(() => {
    fetcher.type === "init" && fetcher.load(`/fetch/gloss/${defaultPerPage3}/${defaultPageNum3}`);
  }, [fetcher]);
  let [page, setPage] = React11.useState(0), [rowsPerPage, setRowsPerPage] = React11.useState(5), [rowsOnPage, setRowsOnPage] = React11.useState(5), emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowsOnPage) : 0, handleChangePage = (event, newPage) => {
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
  return /* @__PURE__ */ React11.createElement("div", null, fetcher.type !== "done" ? /* @__PURE__ */ React11.createElement("span", null, "Loading...") : /* @__PURE__ */ React11.createElement(import_core5.default, {
    columns: DEMO_COLS,
    detailPanel: ({ rowData }) => (console.log(rowData), /* @__PURE__ */ React11.createElement("div", {
      style: {
        fontSize: 16,
        padding: 5,
        margin: 5
      }
    }, /* @__PURE__ */ React11.createElement(import_Box8.default, {
      sx: { margin: 1 }
    }, /* @__PURE__ */ React11.createElement(import_Typography7.default, {
      variant: "h6",
      gutterBottom: !0,
      component: "div"
    }, rowData.title), /* @__PURE__ */ React11.createElement(import_Table5.default, {
      size: "small",
      "aria-label": "details"
    }, /* @__PURE__ */ React11.createElement(import_TableBody5.default, null, /* @__PURE__ */ React11.createElement(import_TableRow5.default, {
      key: "fulltext",
      sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" }
    }, /* @__PURE__ */ React11.createElement(import_TableCell5.default, {
      component: "th",
      scope: "row",
      sx: { fontWeight: "bold" }
    }, "Full Text"), /* @__PURE__ */ React11.createElement(import_TableCell5.default, {
      colSpan: 3
    }, rowData.fullText)), /* @__PURE__ */ React11.createElement(import_TableRow5.default, {
      key: "dates"
    }, /* @__PURE__ */ React11.createElement(import_TableCell5.default, {
      sx: { fontWeight: "bold" }
    }, "Date Written"), /* @__PURE__ */ React11.createElement(import_TableCell5.default, null, "1/1/1850"), /* @__PURE__ */ React11.createElement(import_TableCell5.default, {
      sx: { fontWeight: "bold" }
    }, "Date Published"), /* @__PURE__ */ React11.createElement(import_TableCell5.default, null, "1/2/1850"))))))),
    data: fetcher.data.result
  }));
}

// app/routes/sand.tsx
var sand_exports = {};
__export(sand_exports, {
  default: () => SandboxTable
});
var React12 = __toESM(require("react")), import_Box9 = __toESM(require("@mui/material/Box")), import_Paper4 = __toESM(require("@mui/material/Paper")), import_Table6 = __toESM(require("@mui/material/Table")), import_TableBody6 = __toESM(require("@mui/material/TableBody")), import_TableCell6 = __toESM(require("@mui/material/TableCell")), import_TableRow6 = __toESM(require("@mui/material/TableRow")), import_Typography8 = __toESM(require("@mui/material/Typography")), import_core6 = __toESM(require("@material-table/core")), import_react12 = require("@remix-run/react"), import_material = require("@mui/material"), axios4 = require("axios");
function SandboxTable() {
  let data_cols = [
    { field: "ent_id", title: "ID", width: "100px" },
    { field: "title", title: "Title" },
    { field: "year_combined", title: "Year", width: "100px" }
  ], fetcher = (0, import_react12.useFetcher)();
  return React12.useEffect(() => {
    fetcher.type === "init" && fetcher.load("/fetch/sand/10/0");
  }, [fetcher]), /* @__PURE__ */ React12.createElement(import_material.TableContainer, {
    component: import_Paper4.default
  }, /* @__PURE__ */ React12.createElement(import_core6.default, {
    title: "Sandbox Table",
    options: {
      padding: "dense",
      pageSize: 10,
      pageSizeOptions: [10],
      exportAllData: !0,
      initialPage: 0
    },
    columns: data_cols,
    detailPanel: ({ rowData }) => (console.log(rowData), /* @__PURE__ */ React12.createElement("div", {
      style: {
        fontSize: 16,
        padding: 5,
        margin: 5
      }
    }, /* @__PURE__ */ React12.createElement(import_Box9.default, {
      sx: { margin: 1 }
    }, /* @__PURE__ */ React12.createElement(import_Typography8.default, {
      variant: "h6",
      gutterBottom: !0,
      component: "div"
    }, rowData.title), /* @__PURE__ */ React12.createElement(import_Table6.default, {
      size: "small",
      "aria-label": "details"
    }, /* @__PURE__ */ React12.createElement(import_TableBody6.default, null, /* @__PURE__ */ React12.createElement(import_TableRow6.default, {
      key: "fulltext",
      sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" }
    }, /* @__PURE__ */ React12.createElement(import_TableCell6.default, {
      component: "th",
      scope: "row",
      sx: { fontWeight: "bold" }
    }, "Full Text"), /* @__PURE__ */ React12.createElement(import_TableCell6.default, {
      colSpan: 5,
      className: "font-mono"
    }, rowData.full_text)), /* @__PURE__ */ React12.createElement(import_TableRow6.default, {
      key: "dates"
    }, /* @__PURE__ */ React12.createElement(import_TableCell6.default, {
      sx: { fontWeight: "bold" }
    }, "Written"), /* @__PURE__ */ React12.createElement(import_TableCell6.default, null, "1/1/1850"), /* @__PURE__ */ React12.createElement(import_TableCell6.default, {
      sx: { fontWeight: "bold" }
    }, "Dated"), /* @__PURE__ */ React12.createElement(import_TableCell6.default, null, "1/3/1850"), /* @__PURE__ */ React12.createElement(import_TableCell6.default, {
      sx: { fontWeight: "bold" }
    }, "Published"), /* @__PURE__ */ React12.createElement(import_TableCell6.default, null, "1/2/1850"))))))),
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
      Container: (props) => /* @__PURE__ */ React12.createElement(import_Paper4.default, __spreadValues({
        className: "even:[&>*]:grow",
        sx: { display: "flex", flexDirection: "column", height: "100%" },
        elevation: 1
      }, props)),
      Toolbar: (props) => /* @__PURE__ */ React12.createElement(import_Box9.default, {
        sx: { borderBottom: "1px solid rgba(184,184,184,1)" },
        className: "bg-green-700/10"
      }, /* @__PURE__ */ React12.createElement(import_core6.MTableToolbar, __spreadValues({
        className: "min-h-[48px]"
      }, props))),
      Body: (props) => /* @__PURE__ */ React12.createElement(import_core6.MTableBody, __spreadValues({
        className: ""
      }, props))
    }
  }));
}

// app/routes/reg.tsx
var reg_exports = {};
__export(reg_exports, {
  default: () => RegPage
});
var React13 = __toESM(require("react")), import_react13 = require("@remix-run/react"), import_ArrowBack4 = __toESM(require("@mui/icons-material/ArrowBack")), import_Box10 = __toESM(require("@mui/material/Box")), import_Button4 = __toESM(require("@mui/material/Button"));
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
  return /* @__PURE__ */ React13.createElement("div", null, /* @__PURE__ */ React13.createElement("div", null, /* @__PURE__ */ React13.createElement(import_react13.NavLink, {
    to: `../reg/${backSection.regCode}`
  }, /* @__PURE__ */ React13.createElement(import_Button4.default, {
    startIcon: /* @__PURE__ */ React13.createElement(import_ArrowBack4.default, null)
  }, "Back to ", backSection.regName, " Register"))), /* @__PURE__ */ React13.createElement("div", null, /* @__PURE__ */ React13.createElement(import_react13.Outlet, null)), /* @__PURE__ */ React13.createElement("div", null, /* @__PURE__ */ React13.createElement(import_react13.NavLink, {
    to: "../reg/"
  }, /* @__PURE__ */ React13.createElement(import_Button4.default, {
    startIcon: /* @__PURE__ */ React13.createElement(import_ArrowBack4.default, null)
  }, "Back to Register"))));
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
  return /* @__PURE__ */ React13.createElement(import_react13.Outlet, null);
}

// app/routes/reg/$regCode.tsx
var regCode_exports = {};
__export(regCode_exports, {
  default: () => RegTable,
  loader: () => loader13
});
var React15 = __toESM(require("react")), import_tiny_invariant7 = __toESM(require("tiny-invariant")), import_react15 = require("@remix-run/react"), import_Box12 = __toESM(require("@mui/material/Box")), import_FormControlLabel2 = __toESM(require("@mui/material/FormControlLabel")), import_Radio2 = __toESM(require("@mui/material/Radio")), import_RadioGroup2 = __toESM(require("@mui/material/RadioGroup")), import_Paper5 = __toESM(require("@mui/material/Paper")), import_TableContainer3 = __toESM(require("@mui/material/TableContainer")), import_Info5 = __toESM(require("@mui/icons-material/Info")), import_core7 = __toESM(require("@material-table/core"));

// app/components/entryDetails.tsx
var React14 = __toESM(require("react")), import_Box11 = __toESM(require("@mui/material/Box")), import_Chip3 = __toESM(require("@mui/material/Chip")), import_Info4 = __toESM(require("@mui/icons-material/Info")), import_Link2 = __toESM(require("@mui/icons-material/Link")), import_Table7 = __toESM(require("@mui/material/Table")), import_TableBody7 = __toESM(require("@mui/material/TableBody")), import_TableCell7 = __toESM(require("@mui/material/TableCell")), import_TableRow7 = __toESM(require("@mui/material/TableRow")), import_Tooltip3 = __toESM(require("@mui/material/Tooltip")), import_Typography9 = __toESM(require("@mui/material/Typography")), import_react14 = require("@remix-run/react"), import_OpenInNew2 = __toESM(require("@mui/icons-material/OpenInNew"));
function getChronRefLink3(chronRefId) {
  let relUrl = "../../chron/" + chronRefId;
  return /* @__PURE__ */ React14.createElement(import_react14.NavLink, {
    to: relUrl,
    rel: "noopener,noreferrer",
    target: "_blank",
    className: "m-2 p-2 border border-solid border-black cursor-pointer rounded-full"
  }, "18" + chronRefId, /* @__PURE__ */ React14.createElement(import_OpenInNew2.default, {
    sx: { ml: 1 },
    fontSize: "small"
  }));
}
function EntryDetailsPanel(props) {
  let rowData = props.data, [tooltipText, setTooltipText] = React14.useState("Copy Link"), handleTooltipClose = () => {
    setTooltipText("Copy Link");
  };
  return /* @__PURE__ */ React14.createElement("div", {
    style: {
      fontSize: 16,
      padding: 5,
      margin: 5
    }
  }, /* @__PURE__ */ React14.createElement(import_Box11.default, {
    sx: { margin: 1 }
  }, /* @__PURE__ */ React14.createElement(import_Typography9.default, {
    variant: "h6",
    gutterBottom: !0,
    component: "div"
  }, rowData.title, rowData.dubious && /* @__PURE__ */ React14.createElement(import_Tooltip3.default, {
    title: "Authorship of this text is disputed (see description)"
  }, /* @__PURE__ */ React14.createElement(import_Chip3.default, {
    icon: /* @__PURE__ */ React14.createElement(import_Info4.default, null),
    label: "Dubious",
    className: "m-2 cursor-pointer"
  })), /* @__PURE__ */ React14.createElement(import_Tooltip3.default, {
    title: tooltipText
  }, /* @__PURE__ */ React14.createElement(import_Chip3.default, {
    icon: /* @__PURE__ */ React14.createElement(import_Link2.default, null),
    label: rowData.ent_id,
    variant: "outlined",
    className: "float-right",
    onMouseLeave: handleTooltipClose,
    onClick: () => {
      navigator.clipboard.writeText(`https://marxdb.com/reg/${rowData.ent_id}`).then(function() {
        console.log("Success! The text was copied to your clipboard"), setTooltipText("Link Copied!");
      }, function() {
        console.log("Oops! Your browser does not support the Clipboard API");
      });
    }
  }))), /* @__PURE__ */ React14.createElement(import_Table7.default, {
    size: "small",
    "aria-label": "details"
  }, /* @__PURE__ */ React14.createElement(import_TableBody7.default, null, /* @__PURE__ */ React14.createElement(import_TableRow7.default, {
    key: "desc",
    sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" }
  }, /* @__PURE__ */ React14.createElement(import_TableCell7.default, {
    component: "th",
    scope: "row",
    sx: { fontWeight: "bold" }
  }, "Description"), /* @__PURE__ */ React14.createElement(import_TableCell7.default, {
    colSpan: 5,
    className: "font-mono"
  }, rowData.full_text)), /* @__PURE__ */ React14.createElement(import_TableRow7.default, {
    key: "dates"
  }, /* @__PURE__ */ React14.createElement(import_TableCell7.default, {
    sx: { fontWeight: "bold" }
  }, "Written"), /* @__PURE__ */ React14.createElement(import_TableCell7.default, null, Object.keys(rowData).indexOf("written") > -1 ? rowData.written : "NA"), /* @__PURE__ */ React14.createElement(import_TableCell7.default, {
    sx: { fontWeight: "bold" }
  }, "Dated"), /* @__PURE__ */ React14.createElement(import_TableCell7.default, null, Object.keys(rowData).indexOf("dated") > -1 ? rowData.dated : "NA"), /* @__PURE__ */ React14.createElement(import_TableCell7.default, {
    sx: { fontWeight: "bold" }
  }, "Published"), /* @__PURE__ */ React14.createElement(import_TableCell7.default, null, Object.keys(rowData).indexOf("published") > -1 ? rowData.published : "NA")), Object.keys(rowData).indexOf("lang_orig") > -1 && /* @__PURE__ */ React14.createElement(import_TableRow7.default, {
    key: "langs",
    sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" }
  }, /* @__PURE__ */ React14.createElement(import_TableCell7.default, {
    component: "th",
    scope: "row",
    sx: { fontWeight: "bold" }
  }, "Language(s)"), /* @__PURE__ */ React14.createElement(import_TableCell7.default, {
    colSpan: 5
  }, rowData.lang_orig.join(", "))), Object.keys(rowData).indexOf("source") > -1 && /* @__PURE__ */ React14.createElement(import_TableRow7.default, {
    key: "sources",
    sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" }
  }, /* @__PURE__ */ React14.createElement(import_TableCell7.default, {
    component: "th",
    scope: "row",
    sx: { fontWeight: "bold" }
  }, "Source(s)"), /* @__PURE__ */ React14.createElement(import_TableCell7.default, {
    colSpan: 5
  }, rowData.source)), Object.keys(rowData).indexOf("reprint") > -1 && /* @__PURE__ */ React14.createElement(import_TableRow7.default, {
    key: "reprints",
    sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" }
  }, /* @__PURE__ */ React14.createElement(import_TableCell7.default, {
    component: "th",
    scope: "row",
    sx: { fontWeight: "bold" }
  }, "Reprints"), /* @__PURE__ */ React14.createElement(import_TableCell7.default, {
    colSpan: 5
  }, rowData.reprint)), Object.keys(rowData).indexOf("more_info") > -1 && /* @__PURE__ */ React14.createElement(import_TableRow7.default, {
    key: "misc",
    sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" }
  }, /* @__PURE__ */ React14.createElement(import_TableCell7.default, {
    component: "th",
    scope: "row",
    sx: { fontWeight: "bold" }
  }, "Misc"), /* @__PURE__ */ React14.createElement(import_TableCell7.default, {
    colSpan: 5
  }, rowData.more_info)), Object.keys(rowData).indexOf("chron_ref_ids") > -1 && /* @__PURE__ */ React14.createElement(import_TableRow7.default, {
    key: "chronrefs",
    sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" }
  }, /* @__PURE__ */ React14.createElement(import_TableCell7.default, {
    component: "th",
    scope: "row",
    sx: { fontWeight: "bold" }
  }, "Chronicle References"), /* @__PURE__ */ React14.createElement(import_TableCell7.default, {
    colSpan: 5
  }, rowData.chron_ref_ids.map((item) => getChronRefLink3(item))))))));
}

// app/routes/reg/$regCode.tsx
async function loader13({ request, params }) {
  (0, import_tiny_invariant7.default)(params.regCode, "Expected params.regCode");
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
  return /* @__PURE__ */ React15.createElement(import_Paper5.default, null, /* @__PURE__ */ React15.createElement(EntryDetailsPanel, {
    data: entryData
  }));
}
function RegTable() {
  let reqData = (0, import_react15.useLoaderData)();
  if (reqData.type === "details")
    return EntryDetailsPage(reqData.entryData);
  let authName = reqData.authName, location = (0, import_react15.useLocation)();
  console.log("[$regCode] location.pathname: " + location.pathname);
  let tableRef = React15.createRef();
  return React15.useEffect(() => {
    tableRef.current && tableRef.current.onQueryChange(), console.log("[useEffect()] location.pathname: " + location.pathname);
  }, [location.pathname]), /* @__PURE__ */ React15.createElement(import_TableContainer3.default, {
    component: import_Paper5.default
  }, /* @__PURE__ */ React15.createElement(import_core7.default, {
    title: /* @__PURE__ */ React15.createElement("div", null, /* @__PURE__ */ React15.createElement(import_RadioGroup2.default, {
      row: !0,
      value: authName
    }, /* @__PURE__ */ React15.createElement(import_react15.NavLink, {
      to: "../marx"
    }, /* @__PURE__ */ React15.createElement(import_FormControlLabel2.default, {
      control: /* @__PURE__ */ React15.createElement(import_Radio2.default, null),
      label: "Marx",
      value: "marx"
    })), /* @__PURE__ */ React15.createElement(import_react15.NavLink, {
      to: "../engels"
    }, /* @__PURE__ */ React15.createElement(import_FormControlLabel2.default, {
      control: /* @__PURE__ */ React15.createElement(import_Radio2.default, null),
      label: "Engels",
      value: "engels"
    })), /* @__PURE__ */ React15.createElement(import_react15.NavLink, {
      to: "../me"
    }, /* @__PURE__ */ React15.createElement(import_FormControlLabel2.default, {
      control: /* @__PURE__ */ React15.createElement(import_Radio2.default, null),
      label: "Marx-Engels",
      value: "me"
    })), /* @__PURE__ */ React15.createElement(import_react15.NavLink, {
      to: "../st"
    }, /* @__PURE__ */ React15.createElement(import_FormControlLabel2.default, {
      control: /* @__PURE__ */ React15.createElement(import_Radio2.default, null),
      label: "Sources/Translations",
      value: "st"
    })))),
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
    tableRef,
    columns: [
      { field: "ent_id", title: "ID", width: "60px" },
      { field: "title", title: "Title", cellStyle: { width: "80%" }, headerStyle: { width: "80%" } },
      { field: "year_combined", title: "Year", width: "60px" }
    ],
    detailPanel: ({ rowData }) => /* @__PURE__ */ React15.createElement(EntryDetailsPanel, {
      data: rowData
    }),
    data: (query) => new Promise((resolve, reject) => {
      console.log("Fetching: " + authName), fetch(`/fetch/reg/${authName}/10/${query.page}`).then((response) => response.json()).then((rsJson) => {
        resolve({
          data: rsJson.docs,
          page: query.page,
          totalCount: rsJson.total
        });
      });
    }),
    components: {
      Cell: (props) => /* @__PURE__ */ React15.createElement(import_core7.MTableCell, __spreadValues({
        className: "overflow-hidden text-ellipsis whitespace-nowrap max-w-[550px]"
      }, props)),
      Container: (props) => /* @__PURE__ */ React15.createElement(import_Paper5.default, __spreadValues({
        className: "even:[&>*]:grow",
        sx: { display: "flex", flexDirection: "column", height: "100%", maxHeight: "100%" },
        elevation: 1
      }, props)),
      Toolbar: (props) => /* @__PURE__ */ React15.createElement(import_Box12.default, {
        sx: { borderBottom: "1px solid rgba(184,184,184,1)" },
        className: "bg-sky-700/10"
      }, /* @__PURE__ */ React15.createElement(import_core7.MTableToolbar, __spreadValues({
        className: "min-h-[48px]"
      }, props))),
      Body: (props) => /* @__PURE__ */ React15.createElement(import_core7.MTableBody, __spreadValues({
        className: "overflow-hidden text-ellipsis"
      }, props))
    },
    actions: [
      {
        icon: () => /* @__PURE__ */ React15.createElement(import_Info5.default, null),
        tooltip: "View Full Info",
        onClick: (event, rowData) => {
          openInNewTab3(`./${rowData.ent_id}`);
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
  }));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "86eb28dd", entry: { module: "/build/entry.client-CFBCOVMU.js", imports: ["/build/_shared/chunk-EWBL4ASB.js", "/build/_shared/chunk-VIU3M2OR.js", "/build/_shared/chunk-BNRLY3XL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-O3YJOUVQ.js", imports: ["/build/_shared/chunk-4Y77IDT4.js", "/build/_shared/chunk-47XLUKVD.js", "/build/_shared/chunk-NEWUZE5G.js", "/build/_shared/chunk-VWNFPAXD.js", "/build/_shared/chunk-5ZSVRYJ4.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/chron": { id: "routes/chron", parentId: "root", path: "chron", index: void 0, caseSensitive: void 0, module: "/build/routes/chron-ASXJ5HE4.js", imports: ["/build/_shared/chunk-SAAUD5M4.js", "/build/_shared/chunk-FJF4T4CP.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/chron/$chronCode": { id: "routes/chron/$chronCode", parentId: "routes/chron", path: ":chronCode", index: void 0, caseSensitive: void 0, module: "/build/routes/chron/$chronCode-E2LCULFQ.js", imports: ["/build/_shared/chunk-35MLXAJW.js", "/build/_shared/chunk-OOQYTCIC.js", "/build/_shared/chunk-HOL7K22S.js", "/build/_shared/chunk-WCWPCK5W.js", "/build/_shared/chunk-2VIIVV5G.js", "/build/_shared/chunk-4Y77IDT4.js", "/build/_shared/chunk-47XLUKVD.js", "/build/_shared/chunk-NEWUZE5G.js", "/build/_shared/chunk-VWNFPAXD.js", "/build/_shared/chunk-5ZSVRYJ4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/chron/cal": { id: "routes/chron/cal", parentId: "routes/chron", path: "cal", index: void 0, caseSensitive: void 0, module: "/build/routes/chron/cal-YYMTFOYP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/fetch/chron.$perPage.$pageNum": { id: "routes/fetch/chron.$perPage.$pageNum", parentId: "root", path: "fetch/chron/:perPage/:pageNum", index: void 0, caseSensitive: void 0, module: "/build/routes/fetch/chron.$perPage.$pageNum-AZDGZGVL.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/fetch/chron.count": { id: "routes/fetch/chron.count", parentId: "root", path: "fetch/chron/count", index: void 0, caseSensitive: void 0, module: "/build/routes/fetch/chron.count-CD2XFXGH.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/fetch/gloss.$perPage.$pageNum": { id: "routes/fetch/gloss.$perPage.$pageNum", parentId: "root", path: "fetch/gloss/:perPage/:pageNum", index: void 0, caseSensitive: void 0, module: "/build/routes/fetch/gloss.$perPage.$pageNum-ZHVQPSPZ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/fetch/gloss.count": { id: "routes/fetch/gloss.count", parentId: "root", path: "fetch/gloss/count", index: void 0, caseSensitive: void 0, module: "/build/routes/fetch/gloss.count-FVHPYT4Z.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/fetch/reg.$authName.$perPage.$pageNum": { id: "routes/fetch/reg.$authName.$perPage.$pageNum", parentId: "root", path: "fetch/reg/:authName/:perPage/:pageNum", index: void 0, caseSensitive: void 0, module: "/build/routes/fetch/reg.$authName.$perPage.$pageNum-32BLF2IS.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/fetch/reg.count": { id: "routes/fetch/reg.count", parentId: "root", path: "fetch/reg/count", index: void 0, caseSensitive: void 0, module: "/build/routes/fetch/reg.count-BSJSJEI2.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/fetch/reg.details.$regCode": { id: "routes/fetch/reg.details.$regCode", parentId: "root", path: "fetch/reg/details/:regCode", index: void 0, caseSensitive: void 0, module: "/build/routes/fetch/reg.details.$regCode-X2WKCVVD.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/gloss/$glossCode": { id: "routes/gloss/$glossCode", parentId: "root", path: "gloss/:glossCode", index: void 0, caseSensitive: void 0, module: "/build/routes/gloss/$glossCode-5JJIHOR2.js", imports: ["/build/_shared/chunk-M2YUAJCB.js", "/build/_shared/chunk-3YBLXEMT.js", "/build/_shared/chunk-2VIIVV5G.js", "/build/_shared/chunk-SAAUD5M4.js", "/build/_shared/chunk-FJF4T4CP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/gloss/index": { id: "routes/gloss/index", parentId: "root", path: "gloss", index: !0, caseSensitive: void 0, module: "/build/routes/gloss/index-XDZZQ364.js", imports: ["/build/_shared/chunk-M2YUAJCB.js", "/build/_shared/chunk-3YBLXEMT.js", "/build/_shared/chunk-OOQYTCIC.js", "/build/_shared/chunk-WCWPCK5W.js", "/build/_shared/chunk-2VIIVV5G.js", "/build/_shared/chunk-FJF4T4CP.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/gloss_datatable": { id: "routes/gloss_datatable", parentId: "root", path: "gloss_datatable", index: void 0, caseSensitive: void 0, module: "/build/routes/gloss_datatable-PLEV6VVQ.js", imports: ["/build/_shared/chunk-P4NYRO2C.js", "/build/_shared/chunk-HOL7K22S.js", "/build/_shared/chunk-WCWPCK5W.js", "/build/_shared/chunk-2VIIVV5G.js", "/build/_shared/chunk-FJF4T4CP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-Y5BDDLG5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/letters": { id: "routes/letters", parentId: "root", path: "letters", index: void 0, caseSensitive: void 0, module: "/build/routes/letters-MY7OXBBZ.js", imports: ["/build/_shared/chunk-P4NYRO2C.js", "/build/_shared/chunk-HOL7K22S.js", "/build/_shared/chunk-WCWPCK5W.js", "/build/_shared/chunk-2VIIVV5G.js", "/build/_shared/chunk-FJF4T4CP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes": { id: "routes/notes", parentId: "root", path: "notes", index: void 0, caseSensitive: void 0, module: "/build/routes/notes-OQYKFXYH.js", imports: ["/build/_shared/chunk-P4NYRO2C.js", "/build/_shared/chunk-HOL7K22S.js", "/build/_shared/chunk-WCWPCK5W.js", "/build/_shared/chunk-2VIIVV5G.js", "/build/_shared/chunk-FJF4T4CP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/reg": { id: "routes/reg", parentId: "root", path: "reg", index: void 0, caseSensitive: void 0, module: "/build/routes/reg-GPHHIDMX.js", imports: ["/build/_shared/chunk-SAAUD5M4.js", "/build/_shared/chunk-FJF4T4CP.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/reg/$regCode": { id: "routes/reg/$regCode", parentId: "routes/reg", path: ":regCode", index: void 0, caseSensitive: void 0, module: "/build/routes/reg/$regCode-RZFP2VYI.js", imports: ["/build/_shared/chunk-3YBLXEMT.js", "/build/_shared/chunk-P4NYRO2C.js", "/build/_shared/chunk-35MLXAJW.js", "/build/_shared/chunk-OOQYTCIC.js", "/build/_shared/chunk-WCWPCK5W.js", "/build/_shared/chunk-2VIIVV5G.js", "/build/_shared/chunk-4Y77IDT4.js", "/build/_shared/chunk-47XLUKVD.js", "/build/_shared/chunk-NEWUZE5G.js", "/build/_shared/chunk-VWNFPAXD.js", "/build/_shared/chunk-5ZSVRYJ4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sand": { id: "routes/sand", parentId: "root", path: "sand", index: void 0, caseSensitive: void 0, module: "/build/routes/sand-IRPOZNNN.js", imports: ["/build/_shared/chunk-WCWPCK5W.js", "/build/_shared/chunk-2VIIVV5G.js", "/build/_shared/chunk-FJF4T4CP.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-86EB28DD.js" };

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
  "routes/fetch/reg.details.$regCode": {
    id: "routes/fetch/reg.details.$regCode",
    parentId: "root",
    path: "fetch/reg/details/:regCode",
    index: void 0,
    caseSensitive: void 0,
    module: reg_details_regCode_exports
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
  "routes/reg/$regCode": {
    id: "routes/reg/$regCode",
    parentId: "routes/reg",
    path: ":regCode",
    index: void 0,
    caseSensitive: void 0,
    module: regCode_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
