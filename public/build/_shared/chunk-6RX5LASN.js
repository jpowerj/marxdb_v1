import {
  require_Link
} from "/build/_shared/chunk-S4TTM26Y.js";
import {
  require_OpenInNew
} from "/build/_shared/chunk-FTFRDN7S.js";
import {
  require_Info
} from "/build/_shared/chunk-BCVC5R7P.js";
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
  NavLink
} from "/build/_shared/chunk-6DQPAQKB.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-VFZ2QWLC.js";
import {
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// app/components/entryDetails.tsx
var React = __toESM(require_react());
init_Box();
init_Chip();
var import_Info = __toESM(require_Info());
var import_Link = __toESM(require_Link());
init_Table();
init_TableBody();
init_TableCell();
init_TableRow();
init_Tooltip();
init_Typography();
var import_OpenInNew = __toESM(require_OpenInNew());
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
        fileName: "app/components/entryDetails.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/entryDetails.tsx",
    lineNumber: 48,
    columnNumber: 9
  }, this);
}
function EntryDetailsPanel(props) {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, {
          variant: "h6",
          gutterBottom: true,
          component: "div",
          children: [
            rowData.title,
            rowData.dubious && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip_default, {
              title: "Authorship of this text is disputed (see description)",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chip_default, {
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Info.default, {}, void 0, false, {
                  fileName: "app/components/entryDetails.tsx",
                  lineNumber: 76,
                  columnNumber: 31
                }, this),
                label: "Dubious",
                className: "m-2 cursor-pointer"
              }, void 0, false, {
                fileName: "app/components/entryDetails.tsx",
                lineNumber: 75,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: "app/components/entryDetails.tsx",
              lineNumber: 74,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip_default, {
              title: tooltipText,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chip_default, {
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Link.default, {}, void 0, false, {
                  fileName: "app/components/entryDetails.tsx",
                  lineNumber: 84,
                  columnNumber: 29
                }, this),
                label: rowData.ent_id,
                variant: "outlined",
                className: "float-right",
                onMouseLeave: handleTooltipClose,
                onClick: () => {
                  navigator.clipboard.writeText(`https://marxdb.com/reg/${rowData.ent_id}`).then(
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
                fileName: "app/components/entryDetails.tsx",
                lineNumber: 83,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: "app/components/entryDetails.tsx",
              lineNumber: 82,
              columnNumber: 21
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/entryDetails.tsx",
          lineNumber: 71,
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
                    children: "Description"
                  }, void 0, false, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 109,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    colSpan: 5,
                    className: "font-mono",
                    children: rowData.full_text
                  }, void 0, false, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 116,
                    columnNumber: 29
                  }, this)
                ]
              }, "desc", true, {
                fileName: "app/components/entryDetails.tsx",
                lineNumber: 108,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow_default, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    sx: { fontWeight: "bold" },
                    children: "Written"
                  }, void 0, false, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 119,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    children: Object.keys(rowData).indexOf("written") > -1 ? rowData.written : "NA"
                  }, void 0, false, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 122,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    sx: { fontWeight: "bold" },
                    children: "Dated"
                  }, void 0, false, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 125,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    children: Object.keys(rowData).indexOf("dated") > -1 ? rowData.dated : "NA"
                  }, void 0, false, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 128,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    sx: { fontWeight: "bold" },
                    children: "Published"
                  }, void 0, false, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 131,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    children: Object.keys(rowData).indexOf("published") > -1 ? rowData.published : "NA"
                  }, void 0, false, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 134,
                    columnNumber: 29
                  }, this)
                ]
              }, "dates", true, {
                fileName: "app/components/entryDetails.tsx",
                lineNumber: 118,
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
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 140,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    colSpan: 5,
                    children: rowData.lang_orig.join(", ")
                  }, void 0, false, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 147,
                    columnNumber: 33
                  }, this)
                ]
              }, "langs", true, {
                fileName: "app/components/entryDetails.tsx",
                lineNumber: 139,
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
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 152,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    colSpan: 5,
                    children: rowData.source
                  }, void 0, false, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 159,
                    columnNumber: 33
                  }, this)
                ]
              }, "sources", true, {
                fileName: "app/components/entryDetails.tsx",
                lineNumber: 151,
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
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 164,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    colSpan: 5,
                    children: rowData.reprint
                  }, void 0, false, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 171,
                    columnNumber: 33
                  }, this)
                ]
              }, "reprints", true, {
                fileName: "app/components/entryDetails.tsx",
                lineNumber: 163,
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
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 176,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    colSpan: 5,
                    children: rowData.more_info
                  }, void 0, false, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 183,
                    columnNumber: 33
                  }, this)
                ]
              }, "misc", true, {
                fileName: "app/components/entryDetails.tsx",
                lineNumber: 175,
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
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 188,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                    colSpan: 5,
                    children: rowData.chron_ref_ids.map((item) => getChronRefLink(item))
                  }, void 0, false, {
                    fileName: "app/components/entryDetails.tsx",
                    lineNumber: 195,
                    columnNumber: 33
                  }, this)
                ]
              }, "chronrefs", true, {
                fileName: "app/components/entryDetails.tsx",
                lineNumber: 187,
                columnNumber: 29
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/entryDetails.tsx",
            lineNumber: 107,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: "app/components/entryDetails.tsx",
          lineNumber: 106,
          columnNumber: 17
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/entryDetails.tsx",
      lineNumber: 70,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: "app/components/entryDetails.tsx",
    lineNumber: 63,
    columnNumber: 9
  }, this);
}

export {
  EntryDetailsPanel
};
//# sourceMappingURL=/build/_shared/chunk-6RX5LASN.js.map
