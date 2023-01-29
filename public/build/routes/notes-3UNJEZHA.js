import {
  require_docinfo
} from "/build/_shared/chunk-DEXX44ZO.js";
import "/build/_shared/chunk-UJILEZDE.js";
import {
  require_dist
} from "/build/_shared/chunk-5IOOYI6V.js";
import {
  TableBody_default,
  TableCell_default,
  TableRow_default,
  Table_default,
  init_Table,
  init_TableBody,
  init_TableCell,
  init_TableRow
} from "/build/_shared/chunk-V3P7P4NL.js";
import "/build/_shared/chunk-NMIJB5HN.js";
import "/build/_shared/chunk-FJAYQMSD.js";
import "/build/_shared/chunk-WRA6JOBO.js";
import {
  Box_default,
  init_Box
} from "/build/_shared/chunk-EX4Q4UD2.js";
import "/build/_shared/chunk-RNJFILWU.js";
import {
  Typography_default,
  init_Typography
} from "/build/_shared/chunk-UVX72LTR.js";
import "/build/_shared/chunk-KE4ITSFY.js";
import {
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-6DQPAQKB.js";
import "/build/_shared/chunk-T5RNB5I3.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-VFZ2QWLC.js";
import {
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// app/routes/notes.tsx
var React = __toESM(require_react());
init_Box();
init_Table();
init_TableBody();
init_TableCell();
init_TableRow();
init_Typography();
var import_core = __toESM(require_dist());
var import_docinfo = __toESM(require_docinfo());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var defaultPerPage = 3;
var defaultPageNum = 0;
function CollapsibleTable() {
  const initData = useLoaderData();
  const fetcher = useFetcher();
  React.useEffect(() => {
    if (fetcher.type === "init") {
      fetcher.load(`/fetch/gloss/${defaultPerPage}/${defaultPageNum}`);
    }
  }, [fetcher]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rowsOnPage, setRowsOnPage] = React.useState(5);
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowsOnPage) : 0;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const DEMO_DATA = [
    { id: 1, name: "Mary" },
    { id: 2, name: "Joe" },
    { id: 3, name: "Jim" },
    { id: 4, name: "Bob" },
    { id: 5, name: "Bernie" },
    { id: 6, name: "Jimbo" }
  ];
  const DEMO_COLS = [
    { field: "id", title: "Id" },
    { field: "title", title: "Title" }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: fetcher.type !== "done" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      children: "Loading..."
    }, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 254,
      columnNumber: 32
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core.default, {
      columns: DEMO_COLS,
      detailPanel: ({ rowData }) => {
        console.log(rowData);
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
                children: rowData.title
              }, void 0, false, {
                fileName: "app/routes/notes.tsx",
                lineNumber: 269,
                columnNumber: 21
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
                          children: "Full Text"
                        }, void 0, false, {
                          fileName: "app/routes/notes.tsx",
                          lineNumber: 275,
                          columnNumber: 29
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                          colSpan: 3,
                          children: rowData.fullText
                        }, void 0, false, {
                          fileName: "app/routes/notes.tsx",
                          lineNumber: 282,
                          columnNumber: 29
                        }, this)
                      ]
                    }, "fulltext", true, {
                      fileName: "app/routes/notes.tsx",
                      lineNumber: 274,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow_default, {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                          sx: { fontWeight: "bold" },
                          children: "Date Written"
                        }, void 0, false, {
                          fileName: "app/routes/notes.tsx",
                          lineNumber: 285,
                          columnNumber: 29
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                          children: "1/1/1850"
                        }, void 0, false, {
                          fileName: "app/routes/notes.tsx",
                          lineNumber: 288,
                          columnNumber: 29
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                          sx: { fontWeight: "bold" },
                          children: "Date Published"
                        }, void 0, false, {
                          fileName: "app/routes/notes.tsx",
                          lineNumber: 291,
                          columnNumber: 29
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                          children: "1/2/1850"
                        }, void 0, false, {
                          fileName: "app/routes/notes.tsx",
                          lineNumber: 294,
                          columnNumber: 29
                        }, this)
                      ]
                    }, "dates", true, {
                      fileName: "app/routes/notes.tsx",
                      lineNumber: 284,
                      columnNumber: 27
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/notes.tsx",
                  lineNumber: 273,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: "app/routes/notes.tsx",
                lineNumber: 272,
                columnNumber: 21
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/notes.tsx",
            lineNumber: 268,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 261,
          columnNumber: 17
        }, this);
      },
      data: fetcher.data.result
    }, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 255,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 253,
    columnNumber: 5
  }, this);
}
export {
  CollapsibleTable as default
};
//# sourceMappingURL=/build/routes/notes-3UNJEZHA.js.map
