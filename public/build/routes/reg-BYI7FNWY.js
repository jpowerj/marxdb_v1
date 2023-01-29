import {
  require_ArrowBack
} from "/build/_shared/chunk-MR2Y6Q4S.js";
import {
  Button_default,
  init_Button
} from "/build/_shared/chunk-G2GGUSV5.js";
import "/build/_shared/chunk-BKODUN5L.js";
import "/build/_shared/chunk-UXJTOQFQ.js";
import {
  NavLink,
  Outlet,
  useLocation
} from "/build/_shared/chunk-6DQPAQKB.js";
import "/build/_shared/chunk-T5RNB5I3.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-VFZ2QWLC.js";
import {
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// app/routes/reg.tsx
var import_ArrowBack = __toESM(require_ArrowBack());
init_Button();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var tabVals = {
  "marx": 0,
  "engels": 1,
  "me": 2,
  "st": 3
};
function getTabVal(authName) {
  return tabVals[authName];
}
function getBackSection(ent_id) {
  if (ent_id.startsWith("ME")) {
    return { regCode: "me", regName: "Marx-Engels" };
  } else if (ent_id.startsWith("M")) {
    return { regCode: "marx", regName: "Marx" };
  } else if (ent_id.startsWith("E")) {
    return { regCode: "engels", regName: "Engels" };
  } else {
    return { regCode: "st", regName: "Sources/Translations" };
  }
}
function EntryDetails(ent_id) {
  const backSection = getBackSection(ent_id);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
          to: `../reg/${backSection.regCode}`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
            startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ArrowBack.default, {}, void 0, false, {
              fileName: "app/routes/reg.tsx",
              lineNumber: 80,
              columnNumber: 30
            }, this),
            children: [
              "Back to ",
              backSection.regName,
              " Register"
            ]
          }, void 0, true, {
            fileName: "app/routes/reg.tsx",
            lineNumber: 80,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/reg.tsx",
          lineNumber: 79,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/reg.tsx",
        lineNumber: 78,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/routes/reg.tsx",
          lineNumber: 86,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/reg.tsx",
        lineNumber: 85,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
          to: `../reg/`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
            startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ArrowBack.default, {}, void 0, false, {
              fileName: "app/routes/reg.tsx",
              lineNumber: 90,
              columnNumber: 30
            }, this),
            children: "Back to Register"
          }, void 0, false, {
            fileName: "app/routes/reg.tsx",
            lineNumber: 90,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/reg.tsx",
          lineNumber: 89,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/reg.tsx",
        lineNumber: 88,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/reg.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}
var authNames = ["marx", "engels", "me", "st"];
function RegPage() {
  const location = useLocation();
  let pathnameClean = location.pathname;
  if (pathnameClean.endsWith("/")) {
    pathnameClean = pathnameClean.slice(0, -1);
  }
  const pathElts = pathnameClean.split("/");
  const regCode = pathElts[pathElts.length - 1];
  console.log("[reg.tsx] regCode: " + regCode);
  let activeTab = 0;
  if (regCode === "reg") {
    activeTab = getTabVal("marx");
  } else if (authNames.indexOf(regCode) > -1) {
    activeTab = getTabVal(regCode);
  } else {
    return EntryDetails(regCode);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/routes/reg.tsx",
    lineNumber: 130,
    columnNumber: 5
  }, this);
}
export {
  RegPage as default
};
//# sourceMappingURL=/build/routes/reg-BYI7FNWY.js.map
