import {
  Paper_default,
  getPaperUtilityClass,
  init_Paper,
  init_paperClasses,
  paperClasses_default
} from "/build/_shared/chunk-BKODUN5L.js";
import {
  __esm,
  __export
} from "/build/_shared/chunk-4IYZMDEG.js";

// node_modules/@mui/material/esm/Paper/index.js
var Paper_exports = {};
__export(Paper_exports, {
  default: () => Paper_default,
  getPaperUtilityClass: () => getPaperUtilityClass,
  paperClasses: () => paperClasses_default
});
var init_Paper2 = __esm({
  "node_modules/@mui/material/esm/Paper/index.js"() {
    init_Paper();
    init_paperClasses();
    init_paperClasses();
  }
});

// node_modules/@mui/material/esm/transitions/utils.js
function getTransitionProps(props, options) {
  var _style$transitionDura, _style$transitionTimi;
  const {
    timeout,
    easing,
    style = {}
  } = props;
  return {
    duration: (_style$transitionDura = style.transitionDuration) != null ? _style$transitionDura : typeof timeout === "number" ? timeout : timeout[options.mode] || 0,
    easing: (_style$transitionTimi = style.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing === "object" ? easing[options.mode] : easing,
    delay: style.transitionDelay
  };
}
var reflow;
var init_utils = __esm({
  "node_modules/@mui/material/esm/transitions/utils.js"() {
    reflow = (node) => node.scrollTop;
  }
});

export {
  Paper_exports,
  init_Paper2 as init_Paper,
  reflow,
  getTransitionProps,
  init_utils
};
//# sourceMappingURL=/build/_shared/chunk-HASI3UDZ.js.map
