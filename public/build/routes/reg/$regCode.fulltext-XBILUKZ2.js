import "/build/_shared/chunk-SYBGNGRW.js";
import "/build/_shared/chunk-LC5ILKTL.js";
import {
  require_docinfo
} from "/build/_shared/chunk-DEXX44ZO.js";
import "/build/_shared/chunk-K4MP2D36.js";
import "/build/_shared/chunk-7M5ZYISC.js";
import {
  Chip_default,
  Tooltip_default,
  init_Chip,
  init_Tooltip,
  init_tiny_invariant
} from "/build/_shared/chunk-V3P7P4NL.js";
import {
  init_Paper
} from "/build/_shared/chunk-WRA6JOBO.js";
import {
  Box_default,
  Paper_default,
  init_Box
} from "/build/_shared/chunk-EX4Q4UD2.js";
import {
  require_createSvgIcon,
  require_interopRequireDefault
} from "/build/_shared/chunk-RNJFILWU.js";
import {
  Typography_default,
  init_Typography
} from "/build/_shared/chunk-UVX72LTR.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-KE4ITSFY.js";
import {
  useLoaderData,
  useLocation
} from "/build/_shared/chunk-6DQPAQKB.js";
import "/build/_shared/chunk-T5RNB5I3.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-VFZ2QWLC.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// node_modules/@mui/icons-material/Download.js
var require_Download = __commonJS({
  "node_modules/@mui/icons-material/Download.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"
    }), "Download");
    exports.default = _default;
  }
});

// app/routes/reg/$regCode.fulltext.tsx
var React = __toESM(require_react());
init_tiny_invariant();
init_Box();
var import_Download = __toESM(require_Download());
init_Paper();
init_Typography();
var import_docinfo = __toESM(require_docinfo());
init_Tooltip();
init_Chip();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function toHtml(origText) {
  return origText.replaceAll("\n", "<br>");
}
function FulltextPanel(props) {
  let reqData = props.data;
  const [tooltipText, setTooltipText] = React.useState("Download Fulltext");
  const handleTooltipClose = () => {
    setTooltipText("Download Fulltext");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    style: {
      fontSize: 16,
      padding: 5,
      margin: 5
    },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, {
      sx: { margin: 1 },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, {
          variant: "h6",
          gutterBottom: true,
          component: "div",
          children: [
            reqData.ent_id,
            ": ",
            reqData.title,
            Object.keys(reqData).indexOf("fulltext") > -1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip_default, {
              title: tooltipText,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chip_default, {
                component: "a",
                href: `https://drive.google.com/uc?export=download&id=${reqData.drive_id}`,
                clickable: true,
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Download.default, {}, void 0, false, {
                  fileName: "app/routes/reg/$regCode.fulltext.tsx",
                  lineNumber: 77,
                  columnNumber: 35
                }, this),
                label: reqData.fulltext_filename,
                variant: "outlined",
                className: "float-right cursor-pointer"
              }, void 0, false, {
                fileName: "app/routes/reg/$regCode.fulltext.tsx",
                lineNumber: 73,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: "app/routes/reg/$regCode.fulltext.tsx",
              lineNumber: 72,
              columnNumber: 21
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/reg/$regCode.fulltext.tsx",
          lineNumber: 69,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paper_default, {
          className: "break-words p-3 overflow-y-scroll",
          sx: { display: "flex", flexDirection: "column", height: "100%", maxHeight: "100%" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, {
            className: "h-full max-h-full w-full",
            children: Object.keys(reqData).indexOf("fulltext") > -1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "font-mono",
              dangerouslySetInnerHTML: { __html: toHtml(reqData.fulltext) }
            }, void 0, false, {
              fileName: "app/routes/reg/$regCode.fulltext.tsx",
              lineNumber: 92,
              columnNumber: 25
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "font-mono",
              children: "[Fulltext not available]"
            }, void 0, false, {
              fileName: "app/routes/reg/$regCode.fulltext.tsx",
              lineNumber: 92,
              columnNumber: 124
            }, this)
          }, void 0, false, {
            fileName: "app/routes/reg/$regCode.fulltext.tsx",
            lineNumber: 90,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: "app/routes/reg/$regCode.fulltext.tsx",
          lineNumber: 86,
          columnNumber: 17
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/reg/$regCode.fulltext.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: "app/routes/reg/$regCode.fulltext.tsx",
    lineNumber: 61,
    columnNumber: 9
  }, this);
}
function FulltextPage() {
  const reqData = useLoaderData();
  const authName = reqData.authName;
  const location = useLocation();
  const data_cols = [
    { field: "ent_id", title: "ID", width: "60px" },
    { field: "title", title: "Title", cellStyle: { width: "80%" }, headerStyle: { width: "80%" } },
    { field: "year_combined", title: "Year", width: "60px" }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FulltextPanel, {
    data: reqData
  }, void 0, false, {
    fileName: "app/routes/reg/$regCode.fulltext.tsx",
    lineNumber: 112,
    columnNumber: 9
  }, this);
}
export {
  FulltextPage as default
};
//# sourceMappingURL=/build/routes/reg/$regCode.fulltext-XBILUKZ2.js.map
