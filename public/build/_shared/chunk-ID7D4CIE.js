import {
  require_Link
} from "/build/_shared/chunk-S4TTM26Y.js";
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
  init_Tooltip
} from "/build/_shared/chunk-UMUWJCS4.js";
import {
  Box_default,
  init_Box
} from "/build/_shared/chunk-U22IPZJN.js";
import {
  Typography_default,
  init_Typography
} from "/build/_shared/chunk-DNM27T3Q.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-VFZ2QWLC.js";
import {
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// app/components/entityDetails.tsx
var React = __toESM(require_react());
init_Box();
init_Chip();
var import_Link = __toESM(require_Link());
init_Table();
init_TableBody();
init_TableCell();
init_TableRow();
init_Tooltip();
init_Typography();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function EntityDetailsPanel(props) {
  let rowData = props.data;
  console.log("[entityDetails] rowData: " + Object.keys(rowData));
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
          className: "grid grid-cols-2 mb-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "h-full",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, {
                variant: "h5",
                className: "inline-flex align-middle font-bold",
                children: rowData.id
              }, void 0, false, {
                fileName: "app/components/entityDetails.tsx",
                lineNumber: 39,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: "app/components/entityDetails.tsx",
              lineNumber: 38,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "self-center float-right",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip_default, {
                title: tooltipText,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chip_default, {
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Link.default, {}, void 0, false, {
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
                        console.log("Success! The text was copied to your clipboard");
                        setTooltipText("Link Copied!");
                      },
                      function() {
                        console.log("Oops! Your browser does not support the Clipboard API");
                      }
                    );
                  }
                }, void 0, false, {
                  fileName: "app/components/entityDetails.tsx",
                  lineNumber: 45,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: "app/components/entityDetails.tsx",
                lineNumber: 44,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: "app/components/entityDetails.tsx",
              lineNumber: 43,
              columnNumber: 21
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/entityDetails.tsx",
          lineNumber: 37,
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
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 72,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    colSpan: 5,
                    className: "font-bold",
                    children: rowData.header
                  }, void 0, false, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 79,
                    columnNumber: 29
                  }, this)
                ]
              }, "header", true, {
                fileName: "app/components/entityDetails.tsx",
                lineNumber: 71,
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
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 82,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    colSpan: 5,
                    className: "font-mono",
                    children: rowData.text
                  }, void 0, false, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 89,
                    columnNumber: 29
                  }, this)
                ]
              }, "desc", true, {
                fileName: "app/components/entityDetails.tsx",
                lineNumber: 81,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow_default, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    sx: { fontWeight: "bold" },
                    children: "Written"
                  }, void 0, false, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 92,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    children: rowData.written
                  }, void 0, false, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 95,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    sx: { fontWeight: "bold" },
                    children: "Dated"
                  }, void 0, false, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 98,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    children: Object.keys(rowData).indexOf("dated") > -1 ? rowData.dated : "NA"
                  }, void 0, false, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 101,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    sx: { fontWeight: "bold" },
                    children: "Published"
                  }, void 0, false, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 104,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    children: Object.keys(rowData).indexOf("published") > -1 ? rowData.published : "NA"
                  }, void 0, false, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 107,
                    columnNumber: 29
                  }, this)
                ]
              }, "dates", true, {
                fileName: "app/components/entityDetails.tsx",
                lineNumber: 91,
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
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 113,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    colSpan: 5,
                    children: rowData.lang_orig.join(", ")
                  }, void 0, false, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 120,
                    columnNumber: 33
                  }, this)
                ]
              }, "langs", true, {
                fileName: "app/components/entityDetails.tsx",
                lineNumber: 112,
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
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 125,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    colSpan: 5,
                    children: rowData.source
                  }, void 0, false, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 132,
                    columnNumber: 33
                  }, this)
                ]
              }, "sources", true, {
                fileName: "app/components/entityDetails.tsx",
                lineNumber: 124,
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
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 137,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    colSpan: 5,
                    children: rowData.reprint
                  }, void 0, false, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 144,
                    columnNumber: 33
                  }, this)
                ]
              }, "reprints", true, {
                fileName: "app/components/entityDetails.tsx",
                lineNumber: 136,
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
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 149,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    colSpan: 5,
                    children: rowData.more_info
                  }, void 0, false, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 156,
                    columnNumber: 33
                  }, this)
                ]
              }, "misc", true, {
                fileName: "app/components/entityDetails.tsx",
                lineNumber: 148,
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
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 161,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    colSpan: 5,
                    children: rowData.chron_ref_ids.map((item) => getChronRefLink(item))
                  }, void 0, false, {
                    fileName: "app/components/entityDetails.tsx",
                    lineNumber: 168,
                    columnNumber: 33
                  }, this)
                ]
              }, "chronrefs", true, {
                fileName: "app/components/entityDetails.tsx",
                lineNumber: 160,
                columnNumber: 29
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/entityDetails.tsx",
            lineNumber: 70,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: "app/components/entityDetails.tsx",
          lineNumber: 69,
          columnNumber: 17
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/entityDetails.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: "app/components/entityDetails.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this);
}

export {
  EntityDetailsPanel
};
//# sourceMappingURL=/build/_shared/chunk-ID7D4CIE.js.map
