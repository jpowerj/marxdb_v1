import {
  EntityDetailsPanel
} from "/build/_shared/chunk-ID7D4CIE.js";
import "/build/_shared/chunk-S4TTM26Y.js";
import {
  require_Info
} from "/build/_shared/chunk-BCVC5R7P.js";
import {
  TableContainer_default,
  init_TableContainer,
  require_dist
} from "/build/_shared/chunk-VAFWP33S.js";
import "/build/_shared/chunk-UMUWJCS4.js";
import "/build/_shared/chunk-IFJVANDQ.js";
import "/build/_shared/chunk-OJKDIYLW.js";
import {
  init_Paper
} from "/build/_shared/chunk-UYI3DEHX.js";
import {
  Box_default,
  Paper_default,
  init_Box
} from "/build/_shared/chunk-U22IPZJN.js";
import "/build/_shared/chunk-DNM27T3Q.js";
import "/build/_shared/chunk-BKIZGXIQ.js";
import "/build/_shared/chunk-T5RNB5I3.js";
import {
  useFetcher
} from "/build/_shared/chunk-6DQPAQKB.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-VFZ2QWLC.js";
import {
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// app/routes/gloss/index.tsx
var React = __toESM(require_react());
init_Box();
init_Paper();
init_TableContainer();
var import_Info = __toESM(require_Info());
var import_core = __toESM(require_dist());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
function GlossTable() {
  const data_cols = [
    { field: "id", title: "ID", width: "60px" },
    { field: "desc", title: "Description", cellStyle: { width: "65%" }, headerStyle: { width: "65%" } }
  ];
  const fetcher = useFetcher();
  React.useEffect(() => {
    if (fetcher.type === "init") {
      fetcher.load(`/fetch/gloss/10/0`);
    }
  }, [fetcher]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableContainer_default, {
    component: Paper_default,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core.default, {
      title: "Glossary",
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
      detailPanel: ({ rowData }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntityDetailsPanel, {
        data: rowData
      }, void 0, false, {
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
        Cell: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core.MTableCell, {
          className: "overflow-hidden text-ellipsis whitespace-nowrap max-w-[550px]",
          ...props
        }, void 0, false, {
          fileName: "app/routes/gloss/index.tsx",
          lineNumber: 98,
          columnNumber: 25
        }, this),
        Container: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paper_default, {
          className: "even:[&>*]:grow",
          sx: { display: "flex", flexDirection: "column", height: "100%", maxHeight: "100%" },
          elevation: 1,
          ...props
        }, void 0, false, {
          fileName: "app/routes/gloss/index.tsx",
          lineNumber: 101,
          columnNumber: 25
        }, this),
        Toolbar: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, {
          sx: { borderBottom: "1px solid rgba(184,184,184,1)" },
          className: "bg-green-700/10",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core.MTableToolbar, {
            className: "min-h-[48px]",
            ...props
          }, void 0, false, {
            fileName: "app/routes/gloss/index.tsx",
            lineNumber: 105,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: "app/routes/gloss/index.tsx",
          lineNumber: 104,
          columnNumber: 25
        }, this),
        Body: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core.MTableBody, {
          className: "overflow-hidden text-ellipsis",
          ...props
        }, void 0, false, {
          fileName: "app/routes/gloss/index.tsx",
          lineNumber: 109,
          columnNumber: 25
        }, this)
      },
      actions: [
        {
          icon: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Info.default, {}, void 0, false, {
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
    }, void 0, false, {
      fileName: "app/routes/gloss/index.tsx",
      lineNumber: 62,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: "app/routes/gloss/index.tsx",
    lineNumber: 61,
    columnNumber: 9
  }, this);
}
export {
  GlossTable as default
};
//# sourceMappingURL=/build/routes/gloss/index-BQDBRX7L.js.map
