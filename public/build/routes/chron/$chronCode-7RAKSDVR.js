import {
  require_OpenInNew
} from "/build/_shared/chunk-K4MP2D36.js";
import {
  require_Info
} from "/build/_shared/chunk-7M5ZYISC.js";
import {
  require_KeyboardArrowLeft,
  require_KeyboardArrowRight
} from "/build/_shared/chunk-UJILEZDE.js";
import {
  FormControlLabel_default,
  FormControl_default,
  InputAdornment_default,
  InputLabel_default,
  OutlinedInput_default,
  RadioGroup_default,
  Radio_default,
  TableContainer_default,
  init_FormControl,
  init_FormControlLabel,
  init_InputAdornment,
  init_InputLabel,
  init_OutlinedInput,
  init_Radio,
  init_RadioGroup,
  init_TableContainer,
  require_dist
} from "/build/_shared/chunk-5IOOYI6V.js";
import {
  Chip_default,
  TableBody_default,
  TableCell_default,
  TableRow_default,
  Table_default,
  Tooltip_default,
  init_Chip,
  init_Table,
  init_TableBody,
  init_TableCell,
  init_TableRow,
  init_Tooltip,
  init_tiny_invariant
} from "/build/_shared/chunk-V3P7P4NL.js";
import {
  require_ArrowBack
} from "/build/_shared/chunk-25FZ77QO.js";
import {
  Button_default,
  init_Button
} from "/build/_shared/chunk-NMIJB5HN.js";
import {
  IconButton_default,
  init_IconButton
} from "/build/_shared/chunk-FJAYQMSD.js";
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
  NavLink,
  useFetcher,
  useLoaderData
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

// node_modules/@mui/icons-material/ContentCopy.js
var require_ContentCopy = __commonJS({
  "node_modules/@mui/icons-material/ContentCopy.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
    }), "ContentCopy");
    exports.default = _default;
  }
});

// empty-module:~/models/event.server
var require_event = __commonJS({
  "empty-module:~/models/event.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/chron/$chronCode.tsx
var React2 = __toESM(require_react());
init_tiny_invariant();
var import_ArrowBack = __toESM(require_ArrowBack());
init_Box();
init_Button();
var import_KeyboardArrowLeft = __toESM(require_KeyboardArrowLeft());
var import_KeyboardArrowRight = __toESM(require_KeyboardArrowRight());
init_Paper();
init_TableContainer();
var import_Info2 = __toESM(require_Info());
var import_core = __toESM(require_dist());

// app/components/eventDetails.tsx
var React = __toESM(require_react());
init_Box();
init_Chip();
var import_Info = __toESM(require_Info());
init_Table();
init_TableBody();
init_TableCell();
init_TableRow();
init_Tooltip();
init_Typography();
var import_OpenInNew = __toESM(require_OpenInNew());
init_FormControl();
init_InputLabel();
init_OutlinedInput();
init_InputAdornment();
init_IconButton();
var import_ContentCopy = __toESM(require_ContentCopy());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function getChronRefLink(chronRefId) {
  let relUrl = "../../chron/" + chronRefId;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
    to: relUrl,
    rel: "noopener,noreferrer",
    target: "_blank",
    className: "m-2 p-2 border border-solid border-black cursor-pointer rounded-full",
    children: [
      "18" + chronRefId,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_OpenInNew.default, {
        sx: { ml: 1 },
        fontSize: "small"
      }, void 0, false, {
        fileName: "app/components/eventDetails.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/eventDetails.tsx",
    lineNumber: 55,
    columnNumber: 9
  }, this);
}
function EventDetailsPanel(props) {
  let rowData = props.data;
  const [tooltipText, setTooltipText] = React.useState("Copy Link");
  const handleTooltipClose = () => {
    setTooltipText("Copy Link");
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "grid grid-cols-2 mb-2 items-center",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, {
              variant: "h5",
              className: "table-cell align-middle font-bold",
              children: rowData.ymd
            }, void 0, false, {
              fileName: "app/components/eventDetails.tsx",
              lineNumber: 84,
              columnNumber: 21
            }, this),
            rowData.start_approx === "checked" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip_default, {
              title: "Start date is approximate",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chip_default, {
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Info.default, {}, void 0, false, {
                  fileName: "app/components/eventDetails.tsx",
                  lineNumber: 90,
                  columnNumber: 39
                }, this),
                label: "Approximate",
                className: "m-2 cursor-pointer"
              }, void 0, false, {
                fileName: "app/components/eventDetails.tsx",
                lineNumber: 89,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: "app/components/eventDetails.tsx",
              lineNumber: 88,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "self-center float-right",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl_default, {
                sx: { m: 1, width: "36ch" },
                variant: "outlined",
                className: "float-right",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLabel_default, {
                    htmlFor: "outlined-adornment-password",
                    children: "Permalink"
                  }, void 0, false, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 98,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OutlinedInput_default, {
                    id: "outlined-adornment-password",
                    className: "float-right",
                    value: `https://marxdb.com/chron/${rowData.entry_id_clean}`,
                    disabled: true,
                    type: "text",
                    size: "small",
                    endAdornment: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputAdornment_default, {
                      position: "end",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip_default, {
                        title: tooltipText,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
                          "aria-label": "toggle password visibility",
                          edge: "end",
                          onClick: () => {
                            navigator.clipboard.writeText(`https://marxdb.com/chron/${rowData.entry_id_clean}`).then(
                              function() {
                                console.log("Success! The text was copied to your clipboard");
                                setTooltipText("Link Copied!");
                              },
                              function() {
                                console.log("Oops! Your browser does not support the Clipboard API");
                              }
                            );
                          },
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ContentCopy.default, {}, void 0, false, {
                            fileName: "app/components/eventDetails.tsx",
                            lineNumber: 127,
                            columnNumber: 46
                          }, this)
                        }, void 0, false, {
                          fileName: "app/components/eventDetails.tsx",
                          lineNumber: 109,
                          columnNumber: 41
                        }, this)
                      }, void 0, false, {
                        fileName: "app/components/eventDetails.tsx",
                        lineNumber: 108,
                        columnNumber: 41
                      }, this)
                    }, void 0, false, {
                      fileName: "app/components/eventDetails.tsx",
                      lineNumber: 107,
                      columnNumber: 37
                    }, this),
                    label: "Permalink"
                  }, void 0, false, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 99,
                    columnNumber: 29
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/eventDetails.tsx",
                lineNumber: 97,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: "app/components/eventDetails.tsx",
              lineNumber: 96,
              columnNumber: 21
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/eventDetails.tsx",
          lineNumber: 83,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table_default, {
          size: "small",
          "aria-label": "details",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableBody_default, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow_default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Heading"
                  }, void 0, false, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 140,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    colSpan: 5,
                    className: "font-bold",
                    children: rowData.header
                  }, void 0, false, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 147,
                    columnNumber: 29
                  }, this)
                ]
              }, "header", true, {
                fileName: "app/components/eventDetails.tsx",
                lineNumber: 139,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow_default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Description"
                  }, void 0, false, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 150,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    colSpan: 5,
                    className: "font-mono",
                    children: rowData.text
                  }, void 0, false, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 157,
                    columnNumber: 29
                  }, this)
                ]
              }, "desc", true, {
                fileName: "app/components/eventDetails.tsx",
                lineNumber: 149,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow_default, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    sx: { fontWeight: "bold" },
                    children: "Written"
                  }, void 0, false, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 160,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    children: rowData.written
                  }, void 0, false, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 163,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    sx: { fontWeight: "bold" },
                    children: "Dated"
                  }, void 0, false, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 166,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    children: Object.keys(rowData).indexOf("dated") > -1 ? rowData.dated : "NA"
                  }, void 0, false, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 169,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    sx: { fontWeight: "bold" },
                    children: "Published"
                  }, void 0, false, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 172,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    children: Object.keys(rowData).indexOf("published") > -1 ? rowData.published : "NA"
                  }, void 0, false, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 175,
                    columnNumber: 29
                  }, this)
                ]
              }, "dates", true, {
                fileName: "app/components/eventDetails.tsx",
                lineNumber: 159,
                columnNumber: 25
              }, this),
              Object.keys(rowData).indexOf("lang_orig") > -1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow_default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Language(s)"
                  }, void 0, false, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 181,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    colSpan: 5,
                    children: rowData.lang_orig.join(", ")
                  }, void 0, false, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 188,
                    columnNumber: 33
                  }, this)
                ]
              }, "langs", true, {
                fileName: "app/components/eventDetails.tsx",
                lineNumber: 180,
                columnNumber: 29
              }, this),
              Object.keys(rowData).indexOf("source") > -1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow_default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Source(s)"
                  }, void 0, false, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 193,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    colSpan: 5,
                    children: rowData.source
                  }, void 0, false, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 200,
                    columnNumber: 33
                  }, this)
                ]
              }, "sources", true, {
                fileName: "app/components/eventDetails.tsx",
                lineNumber: 192,
                columnNumber: 29
              }, this),
              Object.keys(rowData).indexOf("reprint") > -1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow_default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Reprints"
                  }, void 0, false, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 205,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    colSpan: 5,
                    children: rowData.reprint
                  }, void 0, false, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 212,
                    columnNumber: 33
                  }, this)
                ]
              }, "reprints", true, {
                fileName: "app/components/eventDetails.tsx",
                lineNumber: 204,
                columnNumber: 29
              }, this),
              Object.keys(rowData).indexOf("more_info") > -1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow_default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Misc"
                  }, void 0, false, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 217,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    colSpan: 5,
                    children: rowData.more_info
                  }, void 0, false, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 224,
                    columnNumber: 33
                  }, this)
                ]
              }, "misc", true, {
                fileName: "app/components/eventDetails.tsx",
                lineNumber: 216,
                columnNumber: 29
              }, this),
              Object.keys(rowData).indexOf("chron_ref_ids") > -1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow_default, {
                sx: { borderTop: "1px solid rgba(224, 224, 224, 1)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    component: "th",
                    scope: "row",
                    sx: { fontWeight: "bold" },
                    children: "Chronicle References"
                  }, void 0, false, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 229,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    colSpan: 5,
                    children: rowData.chron_ref_ids.map((item) => getChronRefLink(item))
                  }, void 0, false, {
                    fileName: "app/components/eventDetails.tsx",
                    lineNumber: 236,
                    columnNumber: 33
                  }, this)
                ]
              }, "chronrefs", true, {
                fileName: "app/components/eventDetails.tsx",
                lineNumber: 228,
                columnNumber: 29
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/eventDetails.tsx",
            lineNumber: 138,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: "app/components/eventDetails.tsx",
          lineNumber: 137,
          columnNumber: 17
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/eventDetails.tsx",
      lineNumber: 82,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: "app/components/eventDetails.tsx",
    lineNumber: 75,
    columnNumber: 9
  }, this);
}

// app/routes/chron/$chronCode.tsx
var import_event = __toESM(require_event());
init_RadioGroup();
init_FormControlLabel();
init_Radio();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
function EventDetailsPage(entryData) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
          to: `../../chron/list`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
            startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ArrowBack.default, {}, void 0, false, {
              fileName: "app/routes/chron/$chronCode.tsx",
              lineNumber: 56,
              columnNumber: 40
            }, this),
            children: "Back to Chronicle"
          }, void 0, false, {
            fileName: "app/routes/chron/$chronCode.tsx",
            lineNumber: 56,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: "app/routes/chron/$chronCode.tsx",
          lineNumber: 55,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: "app/routes/chron/$chronCode.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paper_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EventDetailsPanel, {
          data: entryData
        }, void 0, false, {
          fileName: "app/routes/chron/$chronCode.tsx",
          lineNumber: 62,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: "app/routes/chron/$chronCode.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "float-left",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
              to: `../../chron/list`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_KeyboardArrowLeft.default, {}, void 0, false, {
                  fileName: "app/routes/chron/$chronCode.tsx",
                  lineNumber: 67,
                  columnNumber: 40
                }, this),
                children: "Previous Record"
              }, void 0, false, {
                fileName: "app/routes/chron/$chronCode.tsx",
                lineNumber: 67,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: "app/routes/chron/$chronCode.tsx",
              lineNumber: 66,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: "app/routes/chron/$chronCode.tsx",
            lineNumber: 65,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "float-right",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
              to: `../../chron/list`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                endIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_KeyboardArrowRight.default, {}, void 0, false, {
                  fileName: "app/routes/chron/$chronCode.tsx",
                  lineNumber: 74,
                  columnNumber: 42
                }, this),
                children: "Next Record"
              }, void 0, false, {
                fileName: "app/routes/chron/$chronCode.tsx",
                lineNumber: 74,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: "app/routes/chron/$chronCode.tsx",
              lineNumber: 73,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: "app/routes/chron/$chronCode.tsx",
            lineNumber: 72,
            columnNumber: 17
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/chron/$chronCode.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/chron/$chronCode.tsx",
    lineNumber: 53,
    columnNumber: 9
  }, this);
}
function ChronTable() {
  const reqData = useLoaderData();
  console.log("[ChronTable()] reqData: " + Object.keys(reqData));
  console.log("[ChronTable()] type: " + reqData.type);
  console.log("[ChronTable()] viewType: " + reqData.viewName);
  if (reqData.type === "details") {
    return EventDetailsPage(reqData.entryData);
  }
  const data_cols = [
    { field: "entry_id_clean", title: "ID", width: "60px" },
    { field: "year", title: "Year", width: "60px" },
    { field: "header", title: "Heading", cellStyle: { width: "120px", maxWidth: "140px" }, headerStyle: { width: "120px", maxWidth: "140px" } },
    { field: "text", title: "Text", cellStyle: { width: "65%" }, headerStyle: { width: "65%" } },
    { field: "monthday", title: "Date", width: "60px" }
  ];
  const fetcher = useFetcher();
  React2.useEffect(() => {
    if (fetcher.type === "init") {
      fetcher.load(`/fetch/chron/10/0`);
    }
  }, [fetcher]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableContainer_default, {
    component: Paper_default,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core.default, {
      title: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroup_default, {
          row: true,
          value: reqData.viewName,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
              to: "../list",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, {
                control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Radio_default, {}, void 0, false, {
                  fileName: "app/routes/chron/$chronCode.tsx",
                  lineNumber: 135,
                  columnNumber: 78
                }, this),
                label: "List View",
                value: "list"
              }, void 0, false, {
                fileName: "app/routes/chron/$chronCode.tsx",
                lineNumber: 135,
                columnNumber: 51
              }, this)
            }, void 0, false, {
              fileName: "app/routes/chron/$chronCode.tsx",
              lineNumber: 135,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
              to: "../cal",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, {
                control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Radio_default, {}, void 0, false, {
                  fileName: "app/routes/chron/$chronCode.tsx",
                  lineNumber: 136,
                  columnNumber: 77
                }, this),
                label: "Calendar View",
                value: "cal"
              }, void 0, false, {
                fileName: "app/routes/chron/$chronCode.tsx",
                lineNumber: 136,
                columnNumber: 50
              }, this)
            }, void 0, false, {
              fileName: "app/routes/chron/$chronCode.tsx",
              lineNumber: 136,
              columnNumber: 29
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/chron/$chronCode.tsx",
          lineNumber: 134,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: "app/routes/chron/$chronCode.tsx",
        lineNumber: 133,
        columnNumber: 21
      }, this),
      options: {
        actionsColumnIndex: -1,
        padding: "dense",
        pageSize: 10,
        pageSizeOptions: [10],
        columnsButton: true,
        exportAllData: true,
        initialPage: 0,
        draggable: false,
        toolbar: true,
        paginationType: "stepped",
        numberOfPagesAround: 4
      },
      columns: data_cols,
      detailPanel: ({ rowData }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EventDetailsPanel, {
        data: rowData
      }, void 0, false, {
        fileName: "app/routes/chron/$chronCode.tsx",
        lineNumber: 157,
        columnNumber: 43
      }, this),
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
        Cell: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core.MTableCell, {
          className: "overflow-hidden text-ellipsis whitespace-nowrap max-w-[350px]",
          ...props
        }, void 0, false, {
          fileName: "app/routes/chron/$chronCode.tsx",
          lineNumber: 174,
          columnNumber: 25
        }, this),
        Container: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paper_default, {
          className: "even:[&>*]:grow",
          sx: { display: "flex", flexDirection: "column", height: "100%", maxHeight: "100%" },
          elevation: 1,
          ...props
        }, void 0, false, {
          fileName: "app/routes/chron/$chronCode.tsx",
          lineNumber: 177,
          columnNumber: 25
        }, this),
        Toolbar: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, {
          sx: { borderBottom: "1px solid rgba(184,184,184,1)" },
          className: "bg-red-700/10",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core.MTableToolbar, {
            className: "min-h-[48px]",
            ...props
          }, void 0, false, {
            fileName: "app/routes/chron/$chronCode.tsx",
            lineNumber: 181,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: "app/routes/chron/$chronCode.tsx",
          lineNumber: 180,
          columnNumber: 25
        }, this),
        Body: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core.MTableBody, {
          className: "overflow-hidden text-ellipsis",
          ...props
        }, void 0, false, {
          fileName: "app/routes/chron/$chronCode.tsx",
          lineNumber: 185,
          columnNumber: 25
        }, this)
      },
      actions: [
        {
          icon: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Info2.default, {}, void 0, false, {
            fileName: "app/routes/chron/$chronCode.tsx",
            lineNumber: 191,
            columnNumber: 29
          }, this),
          tooltip: "View Full Info",
          onClick: (event, rowData) => {
            openInNewTab(`./${rowData.entry_id_clean}`);
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
    }, void 0, false, {
      fileName: "app/routes/chron/$chronCode.tsx",
      lineNumber: 131,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: "app/routes/chron/$chronCode.tsx",
    lineNumber: 130,
    columnNumber: 9
  }, this);
}
export {
  ChronTable as default
};
//# sourceMappingURL=/build/routes/chron/$chronCode-7RAKSDVR.js.map
