import {
  EntityDetailsPanel
} from "/build/_shared/chunk-A4L4QWGP.js";
import "/build/_shared/chunk-LC5ILKTL.js";
import {
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
  init_Paper
} from "/build/_shared/chunk-WRA6JOBO.js";
import {
  Paper_default
} from "/build/_shared/chunk-EX4Q4UD2.js";
import "/build/_shared/chunk-RNJFILWU.js";
import "/build/_shared/chunk-UVX72LTR.js";
import "/build/_shared/chunk-KE4ITSFY.js";
import {
  NavLink,
  useLoaderData
} from "/build/_shared/chunk-6DQPAQKB.js";
import "/build/_shared/chunk-T5RNB5I3.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-VFZ2QWLC.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// empty-module:~/models/entity.server
var require_entity = __commonJS({
  "empty-module:~/models/entity.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/gloss/$glossCode.tsx
init_tiny_invariant();
var import_ArrowBack = __toESM(require_ArrowBack());
init_Button();
init_Paper();
var import_entity = __toESM(require_entity());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function EntityDetailsPage() {
  const reqData = useLoaderData();
  let entityData = reqData.entityData;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
          to: `../../gloss/`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
            startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ArrowBack.default, {}, void 0, false, {
              fileName: "app/routes/gloss/$glossCode.tsx",
              lineNumber: 35,
              columnNumber: 40
            }, this),
            children: "Back to Glossary"
          }, void 0, false, {
            fileName: "app/routes/gloss/$glossCode.tsx",
            lineNumber: 35,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: "app/routes/gloss/$glossCode.tsx",
          lineNumber: 34,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: "app/routes/gloss/$glossCode.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paper_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntityDetailsPanel, {
          data: entityData
        }, void 0, false, {
          fileName: "app/routes/gloss/$glossCode.tsx",
          lineNumber: 41,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: "app/routes/gloss/$glossCode.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/gloss/$glossCode.tsx",
    lineNumber: 32,
    columnNumber: 9
  }, this);
}
export {
  EntityDetailsPage as default
};
//# sourceMappingURL=/build/routes/gloss/$glossCode-KZM4AV4T.js.map
