import {
  EntryDetailsPanel
} from "/build/_shared/chunk-WS2RHWA3.js";
import "/build/_shared/chunk-S4TTM26Y.js";
import {
  require_docinfo
} from "/build/_shared/chunk-DEXX44ZO.js";
import "/build/_shared/chunk-FTFRDN7S.js";
import {
  require_Info
} from "/build/_shared/chunk-BCVC5R7P.js";
import {
  FormControlLabel_default,
  RadioGroup_default,
  Radio_default,
  TableContainer_default,
  init_FormControlLabel,
  init_Radio,
  init_RadioGroup,
  init_TableContainer,
  require_dist
} from "/build/_shared/chunk-VAFWP33S.js";
import {
  init_tiny_invariant
} from "/build/_shared/chunk-UMUWJCS4.js";
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
import {
  require_createSvgIcon,
  require_interopRequireDefault,
  require_jsx_runtime
} from "/build/_shared/chunk-BKIZGXIQ.js";
import "/build/_shared/chunk-T5RNB5I3.js";
import {
  NavLink,
  useLoaderData,
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

// node_modules/@mui/icons-material/Description.js
var require_Description = __commonJS({
  "node_modules/@mui/icons-material/Description.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
    }), "Description");
    exports.default = _default;
  }
});

// app/routes/reg/$regCode.tsx
var React = __toESM(require_react());
init_tiny_invariant();
init_Box();
var import_Description = __toESM(require_Description());
init_FormControlLabel();
init_Radio();
init_RadioGroup();
init_Paper();
init_TableContainer();
var import_Info = __toESM(require_Info());
var import_core = __toESM(require_dist());
var import_docinfo = __toESM(require_docinfo());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
function EntryDetailsPage(entryData) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paper_default, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryDetailsPanel, {
      data: entryData
    }, void 0, false, {
      fileName: "app/routes/reg/$regCode.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: "app/routes/reg/$regCode.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
function RegTable() {
  const reqData = useLoaderData();
  if (reqData.type === "details") {
    return EntryDetailsPage(reqData.entryData);
  }
  const authName = reqData.authName;
  const location = useLocation();
  console.log("[$regCode] location.pathname: " + location.pathname);
  const tableRef = React.createRef();
  React.useEffect(() => {
    tableRef.current && tableRef.current.onQueryChange();
    console.log("[useEffect()] location.pathname: " + location.pathname);
  }, [location.pathname]);
  const data_cols = [
    { field: "entry_id", title: "ID", width: "60px" },
    { field: "title", title: "Title", cellStyle: { width: "80%" }, headerStyle: { width: "80%" } },
    { field: "year_combined", title: "Year", width: "60px" }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableContainer_default, {
    component: Paper_default,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core.default, {
      title: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroup_default, {
          row: true,
          value: authName,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
              to: "../marx",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, {
                control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Radio_default, {}, void 0, false, {
                  fileName: "app/routes/reg/$regCode.tsx",
                  lineNumber: 85,
                  columnNumber: 78
                }, this),
                label: "Marx",
                value: "marx"
              }, void 0, false, {
                fileName: "app/routes/reg/$regCode.tsx",
                lineNumber: 85,
                columnNumber: 51
              }, this)
            }, void 0, false, {
              fileName: "app/routes/reg/$regCode.tsx",
              lineNumber: 85,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
              to: "../engels",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, {
                control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Radio_default, {}, void 0, false, {
                  fileName: "app/routes/reg/$regCode.tsx",
                  lineNumber: 86,
                  columnNumber: 80
                }, this),
                label: "Engels",
                value: "engels"
              }, void 0, false, {
                fileName: "app/routes/reg/$regCode.tsx",
                lineNumber: 86,
                columnNumber: 53
              }, this)
            }, void 0, false, {
              fileName: "app/routes/reg/$regCode.tsx",
              lineNumber: 86,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
              to: "../me",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, {
                control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Radio_default, {}, void 0, false, {
                  fileName: "app/routes/reg/$regCode.tsx",
                  lineNumber: 87,
                  columnNumber: 76
                }, this),
                label: "Marx-Engels",
                value: "me"
              }, void 0, false, {
                fileName: "app/routes/reg/$regCode.tsx",
                lineNumber: 87,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: "app/routes/reg/$regCode.tsx",
              lineNumber: 87,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
              to: "../st",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, {
                control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Radio_default, {}, void 0, false, {
                  fileName: "app/routes/reg/$regCode.tsx",
                  lineNumber: 88,
                  columnNumber: 76
                }, this),
                label: "Sources/Translations",
                value: "st"
              }, void 0, false, {
                fileName: "app/routes/reg/$regCode.tsx",
                lineNumber: 88,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: "app/routes/reg/$regCode.tsx",
              lineNumber: 88,
              columnNumber: 29
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/reg/$regCode.tsx",
          lineNumber: 84,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: "app/routes/reg/$regCode.tsx",
        lineNumber: 83,
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
      tableRef,
      columns: data_cols,
      detailPanel: ({ rowData }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryDetailsPanel, {
        data: rowData
      }, void 0, false, {
        fileName: "app/routes/reg/$regCode.tsx",
        lineNumber: 110,
        columnNumber: 43
      }, this),
      data: (query) => new Promise((resolve, reject) => {
        console.log("Fetching: " + authName);
        fetch(`/fetch/reg/${authName}/10/${query.page}`).then((response) => response.json()).then((rsJson) => {
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
          fileName: "app/routes/reg/$regCode.tsx",
          lineNumber: 128,
          columnNumber: 25
        }, this),
        Container: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paper_default, {
          className: "even:[&>*]:grow",
          sx: { display: "flex", flexDirection: "column", height: "100%", maxHeight: "100%" },
          elevation: 1,
          ...props
        }, void 0, false, {
          fileName: "app/routes/reg/$regCode.tsx",
          lineNumber: 131,
          columnNumber: 25
        }, this),
        Toolbar: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, {
          sx: { borderBottom: "1px solid rgba(184,184,184,1)" },
          className: "bg-sky-700/10",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core.MTableToolbar, {
            className: "min-h-[48px]",
            ...props
          }, void 0, false, {
            fileName: "app/routes/reg/$regCode.tsx",
            lineNumber: 135,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: "app/routes/reg/$regCode.tsx",
          lineNumber: 134,
          columnNumber: 25
        }, this),
        Body: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core.MTableBody, {
          className: "overflow-hidden text-ellipsis",
          ...props
        }, void 0, false, {
          fileName: "app/routes/reg/$regCode.tsx",
          lineNumber: 139,
          columnNumber: 25
        }, this)
      },
      actions: [
        {
          icon: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Info.default, {}, void 0, false, {
            fileName: "app/routes/reg/$regCode.tsx",
            lineNumber: 145,
            columnNumber: 29
          }, this),
          tooltip: "View Full Info",
          onClick: (event, rowData) => {
            openInNewTab(`./${rowData.entry_id}`);
          }
        },
        {
          icon: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Description.default, {}, void 0, false, {
            fileName: "app/routes/reg/$regCode.tsx",
            lineNumber: 156,
            columnNumber: 29
          }, this),
          tooltip: "View Full Text",
          onClick: (event, rowData) => {
            console.log("fulltext");
            openInNewTab(`./${rowData.entry_id}/fulltext`);
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
      fileName: "app/routes/reg/$regCode.tsx",
      lineNumber: 81,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: "app/routes/reg/$regCode.tsx",
    lineNumber: 80,
    columnNumber: 9
  }, this);
}
export {
  RegTable as default
};
//# sourceMappingURL=/build/routes/reg/$regCode-FZQ6QIVS.js.map
