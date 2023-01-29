import {
  AppBar_default,
  CssBaseline_default,
  Drawer_default,
  IconButton_default,
  Toolbar_default,
  init_AppBar,
  init_CssBaseline,
  init_Drawer,
  init_IconButton,
  init_Toolbar
} from "/build/_shared/chunk-OJKDIYLW.js";
import "/build/_shared/chunk-UYI3DEHX.js";
import {
  Box_default,
  init_Box,
  init_styles,
  responsiveFontSizes,
  useTheme
} from "/build/_shared/chunk-U22IPZJN.js";
import {
  Typography_default,
  init_Typography
} from "/build/_shared/chunk-DNM27T3Q.js";
import {
  ThemeProvider_default,
  createTheme_default,
  require_createSvgIcon,
  require_interopRequireDefault,
  require_jsx_runtime,
  styled_default
} from "/build/_shared/chunk-BKIZGXIQ.js";
import "/build/_shared/chunk-T5RNB5I3.js";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation
} from "/build/_shared/chunk-6DQPAQKB.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-VFZ2QWLC.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// node_modules/@mui/icons-material/GitHub.js
var require_GitHub = __commonJS({
  "node_modules/@mui/icons-material/GitHub.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React2 = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"
    }), "GitHub");
    exports.default = _default;
  }
});

// node_modules/@mui/icons-material/Menu.js
var require_Menu = __commonJS({
  "node_modules/@mui/icons-material/Menu.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
    }), "Menu");
    exports.default = _default;
  }
});

// app/root.tsx
init_styles();

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-LMID6T7K.css";

// app/root.tsx
var React = __toESM(require_react());
init_styles();
init_AppBar();
init_Box();
init_CssBaseline();
var import_GitHub = __toESM(require_GitHub());
init_Drawer();
init_IconButton();
var import_Menu = __toESM(require_Menu());
init_Toolbar();
init_Typography();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var robotoUrl = "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap";
var links = () => {
  return [
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: robotoUrl }
  ];
};
var meta = () => ({
  charset: "utf-8",
  title: "Marx-Engels Digital Cyclopedia",
  viewport: "width=device-width,initial-scale=1"
});
var dbs = [
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
];
var drawerWidth = 180;
var openedMixin = (theme2) => ({
  width: drawerWidth,
  transition: theme2.transitions.create(["width", "margin"], {
    easing: theme2.transitions.easing.sharp,
    duration: theme2.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});
var openedMixinOverlay = (theme2) => ({
  width: drawerWidth,
  transition: theme2.transitions.create(["width"], {
    easing: theme2.transitions.easing.sharp,
    duration: theme2.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});
var closedMixin = (theme2) => ({
  transition: theme2.transitions.create(["width", "margin"], {
    easing: theme2.transitions.easing.easeOut,
    duration: theme2.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: 0,
  [theme2.breakpoints.up("sm")]: {
    width: 0
  }
});
var closedMixinOverlay = (theme2) => ({
  transition: theme2.transitions.create(["width"], {
    easing: theme2.transitions.easing.easeOut,
    duration: theme2.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: 0,
  [theme2.breakpoints.up("sm")]: {
    width: 0
  }
});
var DrawerHeader = styled_default("div")(({ theme: theme2 }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme2.spacing(0, 1),
  ...theme2.mixins.toolbar
}));
var AppBar = styled_default(AppBar_default)(({ theme: theme2, open }) => ({
  zIndex: theme2.zIndex.drawer + 1,
  backgroundColor: getAppBarColor()
}));
var headerDict = {
  "/reg": "Marx-Engels Digital Register",
  "/chron": "Marx-Engels Digital Chronicle",
  "/notes": "Marx-Engels Digital Notebooks",
  "/letters": "Marx-Engels Digital Correspondence",
  "/gloss": "Marx-Engels Digital Glossary"
};
function getAppBarHeader(pathname) {
  if (pathname === "/") {
    return "Marx-Engels Digital Cyclopedia";
  }
  let headerKeys = Object.keys(headerDict);
  for (var i = 0; i < headerKeys.length; i++) {
    let curHeaderKey = headerKeys[i];
    if (pathname.startsWith(curHeaderKey)) {
      return headerDict[curHeaderKey];
    }
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
var Drawer = styled_default(Drawer_default, { shouldForwardProp: (prop) => prop !== "open" })(
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
);
var OverlayDrawer = styled_default(Drawer_default)(
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
);
var themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#3f51b5"
    },
    secondary: {
      main: "#f50057"
    }
  }
};
var theme = responsiveFontSizes(createTheme_default(themeOptions));
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
  const theme2 = useTheme();
  theme2.typography.h3 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem"
    },
    [theme2.breakpoints.up("md")]: {
      fontSize: "2.4rem"
    }
  };
  const [open, setOpen] = React.useState(true);
  const handleDrawerClick = () => {
    setOpen(!open);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const location = useLocation();
  const drawer = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "h-full border-r bg-gray-50",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toolbar_default, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 347,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, {
        sx: { overflow: "auto", overflowX: "hidden" },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
          children: dbs.map((db, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
              className: ({ isActive }) => `block border-b p-4 text-xl ${isActive ? "bg-white" : "bg-gray-50"}`,
              to: db.route,
              children: [
                db.icon,
                " ",
                open ? db.name : ""
              ]
            }, void 0, true, {
              fileName: "app/root.tsx",
              lineNumber: 352,
              columnNumber: 13
            }, this)
          }, db.route, false, {
            fileName: "app/root.tsx",
            lineNumber: 351,
            columnNumber: 11
          }, this))
        }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 349,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 348,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 346,
    columnNumber: 5
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, {
    sx: { display: "flex" },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CssBaseline_default, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 371,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppBar, {
        position: "fixed",
        sx: {
          zIndex: (theme3) => theme3.zIndex.drawer + 1
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toolbar_default, {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
              color: "inherit",
              "aria-label": "open drawer",
              onClick: handleDrawerClick,
              edge: "start",
              sx: {
                marginRight: 1
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Menu.default, {}, void 0, false, {
                fileName: "app/root.tsx",
                lineNumber: 388,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 379,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, {
              variant: "h4",
              noWrap: true,
              component: "div",
              sx: { flex: 1 },
              children: getAppBarHeader(location.pathname)
            }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 390,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              href: "https://github.com/jpowerj/digital-marxism/",
              target: "_blank",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
                component: "div",
                color: "inherit",
                edge: "end",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_GitHub.default, {
                  sx: { fontSize: "2.2rem" }
                }, void 0, false, {
                  fileName: "app/root.tsx",
                  lineNumber: 399,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/root.tsx",
                lineNumber: 394,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 393,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 378,
          columnNumber: 9
        }, this)
      }, void 0, false, {
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
      }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 404,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Drawer_default, {
        variant: "temporary",
        open,
        onClose: handleDrawerClose,
        onClick: handleDrawerClose,
        ModalProps: {
          keepMounted: true
        },
        sx: {
          display: { xs: "block", sm: "none" },
          width: drawerWidth,
          overflowX: "hidden",
          overflowY: "scroll",
          "& .MuiDrawer-paper": { overflowX: "hidden", overflowY: "scroll", width: drawerWidth, boxSizing: "border-box" }
        },
        disableScrollLock: true,
        anchor: "left",
        children: drawer
      }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 424,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, {
        component: "main",
        sx: { flexGrow: 1, p: 2, overflow: "hidden", overflowY: "scroll" },
        className: "w-full h-screen max-h-screen flex flex-col",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toolbar_default, {
            className: "flex-none"
          }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 449,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 450,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 444,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 461,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 462,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 460,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "h-full m-0",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeProvider_default, {
          theme,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainUI, {}, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 466,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 467,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 468,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 469,
              columnNumber: 9
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 465,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 464,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 459,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-F5FDLQ5J.js.map
