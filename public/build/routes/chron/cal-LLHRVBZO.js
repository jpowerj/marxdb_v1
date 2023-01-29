import {
  require_react_dom
} from "/build/_shared/chunk-T5RNB5I3.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-VFZ2QWLC.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "node_modules/tslib/tslib.js"(exports, module) {
    var __extends2;
    var __assign2;
    var __rest2;
    var __decorate2;
    var __param2;
    var __metadata2;
    var __awaiter2;
    var __generator2;
    var __exportStar2;
    var __values2;
    var __read2;
    var __spread2;
    var __spreadArrays2;
    var __spreadArray2;
    var __await2;
    var __asyncGenerator2;
    var __asyncDelegator2;
    var __asyncValues2;
    var __makeTemplateObject2;
    var __importStar2;
    var __importDefault2;
    var __classPrivateFieldGet2;
    var __classPrivateFieldSet2;
    var __classPrivateFieldIn2;
    var __createBinding2;
    (function(factory) {
      var root = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v) {
          return exports2[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (Object.prototype.hasOwnProperty.call(b, p))
            d[p] = b[p];
      };
      __extends2 = function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest2 = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      __decorate2 = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param2 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata2 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter2 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator2 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar2 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding2(o, m, p);
      };
      __createBinding2 = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __values2 = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read2 = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread2 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read2(arguments[i]));
        return ar;
      };
      __spreadArrays2 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray2 = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      __await2 = function(v) {
        return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
      };
      __asyncGenerator2 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator2 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues2 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject2 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      __importStar2 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding2(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault2 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet2 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      __classPrivateFieldIn2 = function(state, receiver) {
        if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
          throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
      };
      exporter("__extends", __extends2);
      exporter("__assign", __assign2);
      exporter("__rest", __rest2);
      exporter("__decorate", __decorate2);
      exporter("__param", __param2);
      exporter("__metadata", __metadata2);
      exporter("__awaiter", __awaiter2);
      exporter("__generator", __generator2);
      exporter("__exportStar", __exportStar2);
      exporter("__createBinding", __createBinding2);
      exporter("__values", __values2);
      exporter("__read", __read2);
      exporter("__spread", __spread2);
      exporter("__spreadArrays", __spreadArrays2);
      exporter("__spreadArray", __spreadArray2);
      exporter("__await", __await2);
      exporter("__asyncGenerator", __asyncGenerator2);
      exporter("__asyncDelegator", __asyncDelegator2);
      exporter("__asyncValues", __asyncValues2);
      exporter("__makeTemplateObject", __makeTemplateObject2);
      exporter("__importStar", __importStar2);
      exporter("__importDefault", __importDefault2);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
      exporter("__classPrivateFieldIn", __classPrivateFieldIn2);
    });
  }
});

// node_modules/tslib/modules/index.js
var import_tslib = __toESM(require_tslib(), 1);
var {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __exportStar,
  __createBinding,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn
} = import_tslib.default;

// node_modules/@fullcalendar/react/dist/vdom.js
var react = __toESM(require_react());
var reactDom = __toESM(require_react_dom());
(typeof globalThis !== "undefined" ? globalThis : window).FullCalendarVDom = {
  Component: react.Component,
  createElement: react.createElement,
  render: reactDom.render,
  createRef: react.createRef,
  Fragment: react.Fragment,
  createContext: react.createContext,
  createPortal: reactDom.createPortal,
  flushSync,
  unmountComponentAtNode: reactDom.unmountComponentAtNode
};
function flushSync(callback) {
  callback();
}

// node_modules/@fullcalendar/react/dist/main.js
var React = __toESM(require_react());

// node_modules/@fullcalendar/common/vdom.js
if (typeof FullCalendarVDom === "undefined") {
  throw new Error("Please import the top-level fullcalendar lib before attempting to import a plugin.");
}
var Component2 = FullCalendarVDom.Component;
var createElement2 = FullCalendarVDom.createElement;
var render2 = FullCalendarVDom.render;
var createRef2 = FullCalendarVDom.createRef;
var Fragment2 = FullCalendarVDom.Fragment;
var createContext2 = FullCalendarVDom.createContext;
var createPortal2 = FullCalendarVDom.createPortal;
var flushSync2 = FullCalendarVDom.flushSync;
var unmountComponentAtNode2 = FullCalendarVDom.unmountComponentAtNode;

// node_modules/@fullcalendar/common/main.js
var EventSourceApi = function() {
  function EventSourceApi2(context, internalEventSource) {
    this.context = context;
    this.internalEventSource = internalEventSource;
  }
  EventSourceApi2.prototype.remove = function() {
    this.context.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: this.internalEventSource.sourceId
    });
  };
  EventSourceApi2.prototype.refetch = function() {
    this.context.dispatch({
      type: "FETCH_EVENT_SOURCES",
      sourceIds: [this.internalEventSource.sourceId],
      isRefetch: true
    });
  };
  Object.defineProperty(EventSourceApi2.prototype, "id", {
    get: function() {
      return this.internalEventSource.publicId;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventSourceApi2.prototype, "url", {
    get: function() {
      return this.internalEventSource.meta.url;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventSourceApi2.prototype, "format", {
    get: function() {
      return this.internalEventSource.meta.format;
    },
    enumerable: false,
    configurable: true
  });
  return EventSourceApi2;
}();
function removeElement(el) {
  if (el.parentNode) {
    el.parentNode.removeChild(el);
  }
}
function elementClosest(el, selector) {
  if (el.closest) {
    return el.closest(selector);
  }
  if (!document.documentElement.contains(el)) {
    return null;
  }
  do {
    if (elementMatches(el, selector)) {
      return el;
    }
    el = el.parentElement || el.parentNode;
  } while (el !== null && el.nodeType === 1);
  return null;
}
function elementMatches(el, selector) {
  var method = el.matches || el.matchesSelector || el.msMatchesSelector;
  return method.call(el, selector);
}
function findElements(container, selector) {
  var containers = container instanceof HTMLElement ? [container] : container;
  var allMatches = [];
  for (var i = 0; i < containers.length; i += 1) {
    var matches = containers[i].querySelectorAll(selector);
    for (var j = 0; j < matches.length; j += 1) {
      allMatches.push(matches[j]);
    }
  }
  return allMatches;
}
var PIXEL_PROP_RE = /(top|left|right|bottom|width|height)$/i;
function applyStyle(el, props) {
  for (var propName in props) {
    applyStyleProp(el, propName, props[propName]);
  }
}
function applyStyleProp(el, name, val) {
  if (val == null) {
    el.style[name] = "";
  } else if (typeof val === "number" && PIXEL_PROP_RE.test(name)) {
    el.style[name] = val + "px";
  } else {
    el.style[name] = val;
  }
}
function getEventTargetViaRoot(ev) {
  var _a, _b;
  return (_b = (_a = ev.composedPath) === null || _a === void 0 ? void 0 : _a.call(ev)[0]) !== null && _b !== void 0 ? _b : ev.target;
}
var guid$1 = 0;
function getUniqueDomId() {
  guid$1 += 1;
  return "fc-dom-" + guid$1;
}
function buildDelegationHandler(selector, handler) {
  return function(ev) {
    var matchedChild = elementClosest(ev.target, selector);
    if (matchedChild) {
      handler.call(matchedChild, ev, matchedChild);
    }
  };
}
function listenBySelector(container, eventType, selector, handler) {
  var attachedHandler = buildDelegationHandler(selector, handler);
  container.addEventListener(eventType, attachedHandler);
  return function() {
    container.removeEventListener(eventType, attachedHandler);
  };
}
function listenToHoverBySelector(container, selector, onMouseEnter, onMouseLeave) {
  var currentMatchedChild;
  return listenBySelector(container, "mouseover", selector, function(mouseOverEv, matchedChild) {
    if (matchedChild !== currentMatchedChild) {
      currentMatchedChild = matchedChild;
      onMouseEnter(mouseOverEv, matchedChild);
      var realOnMouseLeave_1 = function(mouseLeaveEv) {
        currentMatchedChild = null;
        onMouseLeave(mouseLeaveEv, matchedChild);
        matchedChild.removeEventListener("mouseleave", realOnMouseLeave_1);
      };
      matchedChild.addEventListener("mouseleave", realOnMouseLeave_1);
    }
  });
}
function createAriaClickAttrs(handler) {
  return __assign({ onClick: handler }, createAriaKeyboardAttrs(handler));
}
function createAriaKeyboardAttrs(handler) {
  return {
    tabIndex: 0,
    onKeyDown: function(ev) {
      if (ev.key === "Enter" || ev.key === " ") {
        handler(ev);
        ev.preventDefault();
      }
    }
  };
}
var guidNumber = 0;
function guid() {
  guidNumber += 1;
  return String(guidNumber);
}
function parseFieldSpecs(input) {
  var specs = [];
  var tokens = [];
  var i;
  var token;
  if (typeof input === "string") {
    tokens = input.split(/\s*,\s*/);
  } else if (typeof input === "function") {
    tokens = [input];
  } else if (Array.isArray(input)) {
    tokens = input;
  }
  for (i = 0; i < tokens.length; i += 1) {
    token = tokens[i];
    if (typeof token === "string") {
      specs.push(token.charAt(0) === "-" ? { field: token.substring(1), order: -1 } : { field: token, order: 1 });
    } else if (typeof token === "function") {
      specs.push({ func: token });
    }
  }
  return specs;
}
function compareByFieldSpecs(obj0, obj1, fieldSpecs) {
  var i;
  var cmp;
  for (i = 0; i < fieldSpecs.length; i += 1) {
    cmp = compareByFieldSpec(obj0, obj1, fieldSpecs[i]);
    if (cmp) {
      return cmp;
    }
  }
  return 0;
}
function compareByFieldSpec(obj0, obj1, fieldSpec) {
  if (fieldSpec.func) {
    return fieldSpec.func(obj0, obj1);
  }
  return flexibleCompare(obj0[fieldSpec.field], obj1[fieldSpec.field]) * (fieldSpec.order || 1);
}
function flexibleCompare(a, b) {
  if (!a && !b) {
    return 0;
  }
  if (b == null) {
    return -1;
  }
  if (a == null) {
    return 1;
  }
  if (typeof a === "string" || typeof b === "string") {
    return String(a).localeCompare(String(b));
  }
  return a - b;
}
function padStart(val, len) {
  var s = String(val);
  return "000".substr(0, len - s.length) + s;
}
function formatWithOrdinals(formatter, args, fallbackText) {
  if (typeof formatter === "function") {
    return formatter.apply(void 0, args);
  }
  if (typeof formatter === "string") {
    return args.reduce(function(str, arg, index) {
      return str.replace("$" + index, arg || "");
    }, formatter);
  }
  return fallbackText;
}
function isInt(n) {
  return n % 1 === 0;
}
function computeSmallestCellWidth(cellEl) {
  var allWidthEl = cellEl.querySelector(".fc-scrollgrid-shrink-frame");
  var contentWidthEl = cellEl.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!allWidthEl) {
    throw new Error("needs fc-scrollgrid-shrink-frame className");
  }
  if (!contentWidthEl) {
    throw new Error("needs fc-scrollgrid-shrink-cushion className");
  }
  return cellEl.getBoundingClientRect().width - allWidthEl.getBoundingClientRect().width + contentWidthEl.getBoundingClientRect().width;
}
var DAY_IDS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function addWeeks(m, n) {
  var a = dateToUtcArray(m);
  a[2] += n * 7;
  return arrayToUtcDate(a);
}
function addDays(m, n) {
  var a = dateToUtcArray(m);
  a[2] += n;
  return arrayToUtcDate(a);
}
function addMs(m, n) {
  var a = dateToUtcArray(m);
  a[6] += n;
  return arrayToUtcDate(a);
}
function diffWeeks(m0, m1) {
  return diffDays(m0, m1) / 7;
}
function diffDays(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1e3 * 60 * 60 * 24);
}
function diffHours(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1e3 * 60 * 60);
}
function diffMinutes(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1e3 * 60);
}
function diffSeconds(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / 1e3;
}
function diffDayAndTime(m0, m1) {
  var m0day = startOfDay(m0);
  var m1day = startOfDay(m1);
  return {
    years: 0,
    months: 0,
    days: Math.round(diffDays(m0day, m1day)),
    milliseconds: m1.valueOf() - m1day.valueOf() - (m0.valueOf() - m0day.valueOf())
  };
}
function diffWholeWeeks(m0, m1) {
  var d = diffWholeDays(m0, m1);
  if (d !== null && d % 7 === 0) {
    return d / 7;
  }
  return null;
}
function diffWholeDays(m0, m1) {
  if (timeAsMs(m0) === timeAsMs(m1)) {
    return Math.round(diffDays(m0, m1));
  }
  return null;
}
function startOfDay(m) {
  return arrayToUtcDate([
    m.getUTCFullYear(),
    m.getUTCMonth(),
    m.getUTCDate()
  ]);
}
function startOfHour(m) {
  return arrayToUtcDate([
    m.getUTCFullYear(),
    m.getUTCMonth(),
    m.getUTCDate(),
    m.getUTCHours()
  ]);
}
function startOfMinute(m) {
  return arrayToUtcDate([
    m.getUTCFullYear(),
    m.getUTCMonth(),
    m.getUTCDate(),
    m.getUTCHours(),
    m.getUTCMinutes()
  ]);
}
function startOfSecond(m) {
  return arrayToUtcDate([
    m.getUTCFullYear(),
    m.getUTCMonth(),
    m.getUTCDate(),
    m.getUTCHours(),
    m.getUTCMinutes(),
    m.getUTCSeconds()
  ]);
}
function weekOfYear(marker, dow, doy) {
  var y = marker.getUTCFullYear();
  var w = weekOfGivenYear(marker, y, dow, doy);
  if (w < 1) {
    return weekOfGivenYear(marker, y - 1, dow, doy);
  }
  var nextW = weekOfGivenYear(marker, y + 1, dow, doy);
  if (nextW >= 1) {
    return Math.min(w, nextW);
  }
  return w;
}
function weekOfGivenYear(marker, year, dow, doy) {
  var firstWeekStart = arrayToUtcDate([year, 0, 1 + firstWeekOffset(year, dow, doy)]);
  var dayStart = startOfDay(marker);
  var days = Math.round(diffDays(firstWeekStart, dayStart));
  return Math.floor(days / 7) + 1;
}
function firstWeekOffset(year, dow, doy) {
  var fwd = 7 + dow - doy;
  var fwdlw = (7 + arrayToUtcDate([year, 0, fwd]).getUTCDay() - dow) % 7;
  return -fwdlw + fwd - 1;
}
function dateToLocalArray(date) {
  return [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  ];
}
function arrayToLocalDate(a) {
  return new Date(
    a[0],
    a[1] || 0,
    a[2] == null ? 1 : a[2],
    a[3] || 0,
    a[4] || 0,
    a[5] || 0
  );
}
function dateToUtcArray(date) {
  return [
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds()
  ];
}
function arrayToUtcDate(a) {
  if (a.length === 1) {
    a = a.concat([0]);
  }
  return new Date(Date.UTC.apply(Date, a));
}
function isValidDate(m) {
  return !isNaN(m.valueOf());
}
function timeAsMs(m) {
  return m.getUTCHours() * 1e3 * 60 * 60 + m.getUTCMinutes() * 1e3 * 60 + m.getUTCSeconds() * 1e3 + m.getUTCMilliseconds();
}
function createEventInstance(defId, range, forcedStartTzo, forcedEndTzo) {
  return {
    instanceId: guid(),
    defId,
    range,
    forcedStartTzo: forcedStartTzo == null ? null : forcedStartTzo,
    forcedEndTzo: forcedEndTzo == null ? null : forcedEndTzo
  };
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function mergeProps(propObjs, complexPropsMap) {
  var dest = {};
  if (complexPropsMap) {
    for (var name_1 in complexPropsMap) {
      var complexObjs = [];
      for (var i = propObjs.length - 1; i >= 0; i -= 1) {
        var val = propObjs[i][name_1];
        if (typeof val === "object" && val) {
          complexObjs.unshift(val);
        } else if (val !== void 0) {
          dest[name_1] = val;
          break;
        }
      }
      if (complexObjs.length) {
        dest[name_1] = mergeProps(complexObjs);
      }
    }
  }
  for (var i = propObjs.length - 1; i >= 0; i -= 1) {
    var props = propObjs[i];
    for (var name_2 in props) {
      if (!(name_2 in dest)) {
        dest[name_2] = props[name_2];
      }
    }
  }
  return dest;
}
function filterHash(hash, func) {
  var filtered = {};
  for (var key in hash) {
    if (func(hash[key], key)) {
      filtered[key] = hash[key];
    }
  }
  return filtered;
}
function mapHash(hash, func) {
  var newHash = {};
  for (var key in hash) {
    newHash[key] = func(hash[key], key);
  }
  return newHash;
}
function arrayToHash(a) {
  var hash = {};
  for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
    var item = a_1[_i];
    hash[item] = true;
  }
  return hash;
}
function hashValuesToArray(obj) {
  var a = [];
  for (var key in obj) {
    a.push(obj[key]);
  }
  return a;
}
function isPropsEqual(obj0, obj1) {
  if (obj0 === obj1) {
    return true;
  }
  for (var key in obj0) {
    if (hasOwnProperty.call(obj0, key)) {
      if (!(key in obj1)) {
        return false;
      }
    }
  }
  for (var key in obj1) {
    if (hasOwnProperty.call(obj1, key)) {
      if (obj0[key] !== obj1[key]) {
        return false;
      }
    }
  }
  return true;
}
function getUnequalProps(obj0, obj1) {
  var keys = [];
  for (var key in obj0) {
    if (hasOwnProperty.call(obj0, key)) {
      if (!(key in obj1)) {
        keys.push(key);
      }
    }
  }
  for (var key in obj1) {
    if (hasOwnProperty.call(obj1, key)) {
      if (obj0[key] !== obj1[key]) {
        keys.push(key);
      }
    }
  }
  return keys;
}
function compareObjs(oldProps, newProps, equalityFuncs) {
  if (equalityFuncs === void 0) {
    equalityFuncs = {};
  }
  if (oldProps === newProps) {
    return true;
  }
  for (var key in newProps) {
    if (key in oldProps && isObjValsEqual(oldProps[key], newProps[key], equalityFuncs[key]))
      ;
    else {
      return false;
    }
  }
  for (var key in oldProps) {
    if (!(key in newProps)) {
      return false;
    }
  }
  return true;
}
function isObjValsEqual(val0, val1, comparator) {
  if (val0 === val1 || comparator === true) {
    return true;
  }
  if (comparator) {
    return comparator(val0, val1);
  }
  return false;
}
function collectFromHash(hash, startIndex, endIndex, step) {
  if (startIndex === void 0) {
    startIndex = 0;
  }
  if (step === void 0) {
    step = 1;
  }
  var res = [];
  if (endIndex == null) {
    endIndex = Object.keys(hash).length;
  }
  for (var i = startIndex; i < endIndex; i += step) {
    var val = hash[i];
    if (val !== void 0) {
      res.push(val);
    }
  }
  return res;
}
function parseRecurring(refined, defaultAllDay, dateEnv, recurringTypes) {
  for (var i = 0; i < recurringTypes.length; i += 1) {
    var parsed = recurringTypes[i].parse(refined, dateEnv);
    if (parsed) {
      var allDay = refined.allDay;
      if (allDay == null) {
        allDay = defaultAllDay;
        if (allDay == null) {
          allDay = parsed.allDayGuess;
          if (allDay == null) {
            allDay = false;
          }
        }
      }
      return {
        allDay,
        duration: parsed.duration,
        typeData: parsed.typeData,
        typeId: i
      };
    }
  }
  return null;
}
function expandRecurring(eventStore, framingRange, context) {
  var dateEnv = context.dateEnv, pluginHooks = context.pluginHooks, options = context.options;
  var defs = eventStore.defs, instances = eventStore.instances;
  instances = filterHash(instances, function(instance2) {
    return !defs[instance2.defId].recurringDef;
  });
  for (var defId in defs) {
    var def = defs[defId];
    if (def.recurringDef) {
      var duration = def.recurringDef.duration;
      if (!duration) {
        duration = def.allDay ? options.defaultAllDayEventDuration : options.defaultTimedEventDuration;
      }
      var starts = expandRecurringRanges(def, duration, framingRange, dateEnv, pluginHooks.recurringTypes);
      for (var _i = 0, starts_1 = starts; _i < starts_1.length; _i++) {
        var start = starts_1[_i];
        var instance = createEventInstance(defId, {
          start,
          end: dateEnv.add(start, duration)
        });
        instances[instance.instanceId] = instance;
      }
    }
  }
  return { defs, instances };
}
function expandRecurringRanges(eventDef, duration, framingRange, dateEnv, recurringTypes) {
  var typeDef = recurringTypes[eventDef.recurringDef.typeId];
  var markers = typeDef.expand(eventDef.recurringDef.typeData, {
    start: dateEnv.subtract(framingRange.start, duration),
    end: framingRange.end
  }, dateEnv);
  if (eventDef.allDay) {
    markers = markers.map(startOfDay);
  }
  return markers;
}
var PARSE_RE = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function createDuration(input, unit) {
  var _a;
  if (typeof input === "string") {
    return parseString(input);
  }
  if (typeof input === "object" && input) {
    return parseObject(input);
  }
  if (typeof input === "number") {
    return parseObject((_a = {}, _a[unit || "milliseconds"] = input, _a));
  }
  return null;
}
function parseString(s) {
  var m = PARSE_RE.exec(s);
  if (m) {
    var sign = m[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: sign * (m[2] ? parseInt(m[2], 10) : 0),
      milliseconds: sign * ((m[3] ? parseInt(m[3], 10) : 0) * 60 * 60 * 1e3 + (m[4] ? parseInt(m[4], 10) : 0) * 60 * 1e3 + (m[5] ? parseInt(m[5], 10) : 0) * 1e3 + (m[6] ? parseInt(m[6], 10) : 0))
    };
  }
  return null;
}
function parseObject(obj) {
  var duration = {
    years: obj.years || obj.year || 0,
    months: obj.months || obj.month || 0,
    days: obj.days || obj.day || 0,
    milliseconds: (obj.hours || obj.hour || 0) * 60 * 60 * 1e3 + (obj.minutes || obj.minute || 0) * 60 * 1e3 + (obj.seconds || obj.second || 0) * 1e3 + (obj.milliseconds || obj.millisecond || obj.ms || 0)
  };
  var weeks = obj.weeks || obj.week;
  if (weeks) {
    duration.days += weeks * 7;
    duration.specifiedWeeks = true;
  }
  return duration;
}
function durationsEqual(d0, d1) {
  return d0.years === d1.years && d0.months === d1.months && d0.days === d1.days && d0.milliseconds === d1.milliseconds;
}
function subtractDurations(d1, d0) {
  return {
    years: d1.years - d0.years,
    months: d1.months - d0.months,
    days: d1.days - d0.days,
    milliseconds: d1.milliseconds - d0.milliseconds
  };
}
function asRoughYears(dur) {
  return asRoughDays(dur) / 365;
}
function asRoughMonths(dur) {
  return asRoughDays(dur) / 30;
}
function asRoughDays(dur) {
  return asRoughMs(dur) / 864e5;
}
function asRoughMs(dur) {
  return dur.years * (365 * 864e5) + dur.months * (30 * 864e5) + dur.days * 864e5 + dur.milliseconds;
}
function greatestDurationDenominator(dur) {
  var ms = dur.milliseconds;
  if (ms) {
    if (ms % 1e3 !== 0) {
      return { unit: "millisecond", value: ms };
    }
    if (ms % (1e3 * 60) !== 0) {
      return { unit: "second", value: ms / 1e3 };
    }
    if (ms % (1e3 * 60 * 60) !== 0) {
      return { unit: "minute", value: ms / (1e3 * 60) };
    }
    if (ms) {
      return { unit: "hour", value: ms / (1e3 * 60 * 60) };
    }
  }
  if (dur.days) {
    if (dur.specifiedWeeks && dur.days % 7 === 0) {
      return { unit: "week", value: dur.days / 7 };
    }
    return { unit: "day", value: dur.days };
  }
  if (dur.months) {
    return { unit: "month", value: dur.months };
  }
  if (dur.years) {
    return { unit: "year", value: dur.years };
  }
  return { unit: "millisecond", value: 0 };
}
function buildIsoString(marker, timeZoneOffset, stripZeroTime) {
  if (stripZeroTime === void 0) {
    stripZeroTime = false;
  }
  var s = marker.toISOString();
  s = s.replace(".000", "");
  if (stripZeroTime) {
    s = s.replace("T00:00:00Z", "");
  }
  if (s.length > 10) {
    if (timeZoneOffset == null) {
      s = s.replace("Z", "");
    } else if (timeZoneOffset !== 0) {
      s = s.replace("Z", formatTimeZoneOffset(timeZoneOffset, true));
    }
  }
  return s;
}
function formatDayString(marker) {
  return marker.toISOString().replace(/T.*$/, "");
}
function formatTimeZoneOffset(minutes, doIso) {
  if (doIso === void 0) {
    doIso = false;
  }
  var sign = minutes < 0 ? "-" : "+";
  var abs = Math.abs(minutes);
  var hours = Math.floor(abs / 60);
  var mins = Math.round(abs % 60);
  if (doIso) {
    return sign + padStart(hours, 2) + ":" + padStart(mins, 2);
  }
  return "GMT" + sign + hours + (mins ? ":" + padStart(mins, 2) : "");
}
function isArraysEqual(a0, a1, equalityFunc) {
  if (a0 === a1) {
    return true;
  }
  var len = a0.length;
  var i;
  if (len !== a1.length) {
    return false;
  }
  for (i = 0; i < len; i += 1) {
    if (!(equalityFunc ? equalityFunc(a0[i], a1[i]) : a0[i] === a1[i])) {
      return false;
    }
  }
  return true;
}
function memoize(workerFunc, resEquality, teardownFunc) {
  var currentArgs;
  var currentRes;
  return function() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (!currentArgs) {
      currentRes = workerFunc.apply(this, newArgs);
    } else if (!isArraysEqual(currentArgs, newArgs)) {
      if (teardownFunc) {
        teardownFunc(currentRes);
      }
      var res = workerFunc.apply(this, newArgs);
      if (!resEquality || !resEquality(res, currentRes)) {
        currentRes = res;
      }
    }
    currentArgs = newArgs;
    return currentRes;
  };
}
function memoizeObjArg(workerFunc, resEquality, teardownFunc) {
  var _this = this;
  var currentArg;
  var currentRes;
  return function(newArg) {
    if (!currentArg) {
      currentRes = workerFunc.call(_this, newArg);
    } else if (!isPropsEqual(currentArg, newArg)) {
      if (teardownFunc) {
        teardownFunc(currentRes);
      }
      var res = workerFunc.call(_this, newArg);
      if (!resEquality || !resEquality(res, currentRes)) {
        currentRes = res;
      }
    }
    currentArg = newArg;
    return currentRes;
  };
}
var EXTENDED_SETTINGS_AND_SEVERITIES = {
  week: 3,
  separator: 0,
  omitZeroMinute: 0,
  meridiem: 0,
  omitCommas: 0
};
var STANDARD_DATE_PROP_SEVERITIES = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
};
var MERIDIEM_RE = /\s*([ap])\.?m\.?/i;
var COMMA_RE = /,/g;
var MULTI_SPACE_RE = /\s+/g;
var LTR_RE = /\u200e/g;
var UTC_RE = /UTC|GMT/;
var NativeFormatter = function() {
  function NativeFormatter2(formatSettings) {
    var standardDateProps = {};
    var extendedSettings = {};
    var severity = 0;
    for (var name_1 in formatSettings) {
      if (name_1 in EXTENDED_SETTINGS_AND_SEVERITIES) {
        extendedSettings[name_1] = formatSettings[name_1];
        severity = Math.max(EXTENDED_SETTINGS_AND_SEVERITIES[name_1], severity);
      } else {
        standardDateProps[name_1] = formatSettings[name_1];
        if (name_1 in STANDARD_DATE_PROP_SEVERITIES) {
          severity = Math.max(STANDARD_DATE_PROP_SEVERITIES[name_1], severity);
        }
      }
    }
    this.standardDateProps = standardDateProps;
    this.extendedSettings = extendedSettings;
    this.severity = severity;
    this.buildFormattingFunc = memoize(buildFormattingFunc);
  }
  NativeFormatter2.prototype.format = function(date, context) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, context)(date);
  };
  NativeFormatter2.prototype.formatRange = function(start, end, context, betterDefaultSeparator) {
    var _a = this, standardDateProps = _a.standardDateProps, extendedSettings = _a.extendedSettings;
    var diffSeverity = computeMarkerDiffSeverity(start.marker, end.marker, context.calendarSystem);
    if (!diffSeverity) {
      return this.format(start, context);
    }
    var biggestUnitForPartial = diffSeverity;
    if (biggestUnitForPartial > 1 && (standardDateProps.year === "numeric" || standardDateProps.year === "2-digit") && (standardDateProps.month === "numeric" || standardDateProps.month === "2-digit") && (standardDateProps.day === "numeric" || standardDateProps.day === "2-digit")) {
      biggestUnitForPartial = 1;
    }
    var full0 = this.format(start, context);
    var full1 = this.format(end, context);
    if (full0 === full1) {
      return full0;
    }
    var partialDateProps = computePartialFormattingOptions(standardDateProps, biggestUnitForPartial);
    var partialFormattingFunc = buildFormattingFunc(partialDateProps, extendedSettings, context);
    var partial0 = partialFormattingFunc(start);
    var partial1 = partialFormattingFunc(end);
    var insertion = findCommonInsertion(full0, partial0, full1, partial1);
    var separator = extendedSettings.separator || betterDefaultSeparator || context.defaultSeparator || "";
    if (insertion) {
      return insertion.before + partial0 + separator + partial1 + insertion.after;
    }
    return full0 + separator + full1;
  };
  NativeFormatter2.prototype.getLargestUnit = function() {
    switch (this.severity) {
      case 7:
      case 6:
      case 5:
        return "year";
      case 4:
        return "month";
      case 3:
        return "week";
      case 2:
        return "day";
      default:
        return "time";
    }
  };
  return NativeFormatter2;
}();
function buildFormattingFunc(standardDateProps, extendedSettings, context) {
  var standardDatePropCnt = Object.keys(standardDateProps).length;
  if (standardDatePropCnt === 1 && standardDateProps.timeZoneName === "short") {
    return function(date) {
      return formatTimeZoneOffset(date.timeZoneOffset);
    };
  }
  if (standardDatePropCnt === 0 && extendedSettings.week) {
    return function(date) {
      return formatWeekNumber(context.computeWeekNumber(date.marker), context.weekText, context.weekTextLong, context.locale, extendedSettings.week);
    };
  }
  return buildNativeFormattingFunc(standardDateProps, extendedSettings, context);
}
function buildNativeFormattingFunc(standardDateProps, extendedSettings, context) {
  standardDateProps = __assign({}, standardDateProps);
  extendedSettings = __assign({}, extendedSettings);
  sanitizeSettings(standardDateProps, extendedSettings);
  standardDateProps.timeZone = "UTC";
  var normalFormat = new Intl.DateTimeFormat(context.locale.codes, standardDateProps);
  var zeroFormat;
  if (extendedSettings.omitZeroMinute) {
    var zeroProps = __assign({}, standardDateProps);
    delete zeroProps.minute;
    zeroFormat = new Intl.DateTimeFormat(context.locale.codes, zeroProps);
  }
  return function(date) {
    var marker = date.marker;
    var format;
    if (zeroFormat && !marker.getUTCMinutes()) {
      format = zeroFormat;
    } else {
      format = normalFormat;
    }
    var s = format.format(marker);
    return postProcess(s, date, standardDateProps, extendedSettings, context);
  };
}
function sanitizeSettings(standardDateProps, extendedSettings) {
  if (standardDateProps.timeZoneName) {
    if (!standardDateProps.hour) {
      standardDateProps.hour = "2-digit";
    }
    if (!standardDateProps.minute) {
      standardDateProps.minute = "2-digit";
    }
  }
  if (standardDateProps.timeZoneName === "long") {
    standardDateProps.timeZoneName = "short";
  }
  if (extendedSettings.omitZeroMinute && (standardDateProps.second || standardDateProps.millisecond)) {
    delete extendedSettings.omitZeroMinute;
  }
}
function postProcess(s, date, standardDateProps, extendedSettings, context) {
  s = s.replace(LTR_RE, "");
  if (standardDateProps.timeZoneName === "short") {
    s = injectTzoStr(s, context.timeZone === "UTC" || date.timeZoneOffset == null ? "UTC" : formatTimeZoneOffset(date.timeZoneOffset));
  }
  if (extendedSettings.omitCommas) {
    s = s.replace(COMMA_RE, "").trim();
  }
  if (extendedSettings.omitZeroMinute) {
    s = s.replace(":00", "");
  }
  if (extendedSettings.meridiem === false) {
    s = s.replace(MERIDIEM_RE, "").trim();
  } else if (extendedSettings.meridiem === "narrow") {
    s = s.replace(MERIDIEM_RE, function(m0, m1) {
      return m1.toLocaleLowerCase();
    });
  } else if (extendedSettings.meridiem === "short") {
    s = s.replace(MERIDIEM_RE, function(m0, m1) {
      return m1.toLocaleLowerCase() + "m";
    });
  } else if (extendedSettings.meridiem === "lowercase") {
    s = s.replace(MERIDIEM_RE, function(m0) {
      return m0.toLocaleLowerCase();
    });
  }
  s = s.replace(MULTI_SPACE_RE, " ");
  s = s.trim();
  return s;
}
function injectTzoStr(s, tzoStr) {
  var replaced = false;
  s = s.replace(UTC_RE, function() {
    replaced = true;
    return tzoStr;
  });
  if (!replaced) {
    s += " " + tzoStr;
  }
  return s;
}
function formatWeekNumber(num, weekText, weekTextLong, locale, display) {
  var parts = [];
  if (display === "long") {
    parts.push(weekTextLong);
  } else if (display === "short" || display === "narrow") {
    parts.push(weekText);
  }
  if (display === "long" || display === "short") {
    parts.push(" ");
  }
  parts.push(locale.simpleNumberFormat.format(num));
  if (locale.options.direction === "rtl") {
    parts.reverse();
  }
  return parts.join("");
}
function computeMarkerDiffSeverity(d0, d1, ca) {
  if (ca.getMarkerYear(d0) !== ca.getMarkerYear(d1)) {
    return 5;
  }
  if (ca.getMarkerMonth(d0) !== ca.getMarkerMonth(d1)) {
    return 4;
  }
  if (ca.getMarkerDay(d0) !== ca.getMarkerDay(d1)) {
    return 2;
  }
  if (timeAsMs(d0) !== timeAsMs(d1)) {
    return 1;
  }
  return 0;
}
function computePartialFormattingOptions(options, biggestUnit) {
  var partialOptions = {};
  for (var name_2 in options) {
    if (!(name_2 in STANDARD_DATE_PROP_SEVERITIES) || STANDARD_DATE_PROP_SEVERITIES[name_2] <= biggestUnit) {
      partialOptions[name_2] = options[name_2];
    }
  }
  return partialOptions;
}
function findCommonInsertion(full0, partial0, full1, partial1) {
  var i0 = 0;
  while (i0 < full0.length) {
    var found0 = full0.indexOf(partial0, i0);
    if (found0 === -1) {
      break;
    }
    var before0 = full0.substr(0, found0);
    i0 = found0 + partial0.length;
    var after0 = full0.substr(i0);
    var i1 = 0;
    while (i1 < full1.length) {
      var found1 = full1.indexOf(partial1, i1);
      if (found1 === -1) {
        break;
      }
      var before1 = full1.substr(0, found1);
      i1 = found1 + partial1.length;
      var after1 = full1.substr(i1);
      if (before0 === before1 && after0 === after1) {
        return {
          before: before0,
          after: after0
        };
      }
    }
  }
  return null;
}
function expandZonedMarker(dateInfo, calendarSystem) {
  var a = calendarSystem.markerToArray(dateInfo.marker);
  return {
    marker: dateInfo.marker,
    timeZoneOffset: dateInfo.timeZoneOffset,
    array: a,
    year: a[0],
    month: a[1],
    day: a[2],
    hour: a[3],
    minute: a[4],
    second: a[5],
    millisecond: a[6]
  };
}
function createVerboseFormattingArg(start, end, context, betterDefaultSeparator) {
  var startInfo = expandZonedMarker(start, context.calendarSystem);
  var endInfo = end ? expandZonedMarker(end, context.calendarSystem) : null;
  return {
    date: startInfo,
    start: startInfo,
    end: endInfo,
    timeZone: context.timeZone,
    localeCodes: context.locale.codes,
    defaultSeparator: betterDefaultSeparator || context.defaultSeparator
  };
}
var CmdFormatter = function() {
  function CmdFormatter2(cmdStr) {
    this.cmdStr = cmdStr;
  }
  CmdFormatter2.prototype.format = function(date, context, betterDefaultSeparator) {
    return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
  };
  CmdFormatter2.prototype.formatRange = function(start, end, context, betterDefaultSeparator) {
    return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
  };
  return CmdFormatter2;
}();
var FuncFormatter = function() {
  function FuncFormatter2(func) {
    this.func = func;
  }
  FuncFormatter2.prototype.format = function(date, context, betterDefaultSeparator) {
    return this.func(createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
  };
  FuncFormatter2.prototype.formatRange = function(start, end, context, betterDefaultSeparator) {
    return this.func(createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
  };
  return FuncFormatter2;
}();
function createFormatter(input) {
  if (typeof input === "object" && input) {
    return new NativeFormatter(input);
  }
  if (typeof input === "string") {
    return new CmdFormatter(input);
  }
  if (typeof input === "function") {
    return new FuncFormatter(input);
  }
  return null;
}
var BASE_OPTION_REFINERS = {
  navLinkDayClick: identity,
  navLinkWeekClick: identity,
  duration: createDuration,
  bootstrapFontAwesome: identity,
  buttonIcons: identity,
  customButtons: identity,
  defaultAllDayEventDuration: createDuration,
  defaultTimedEventDuration: createDuration,
  nextDayThreshold: createDuration,
  scrollTime: createDuration,
  scrollTimeReset: Boolean,
  slotMinTime: createDuration,
  slotMaxTime: createDuration,
  dayPopoverFormat: createFormatter,
  slotDuration: createDuration,
  snapDuration: createDuration,
  headerToolbar: identity,
  footerToolbar: identity,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: createFormatter,
  dayHeaderClassNames: identity,
  dayHeaderContent: identity,
  dayHeaderDidMount: identity,
  dayHeaderWillUnmount: identity,
  dayCellClassNames: identity,
  dayCellContent: identity,
  dayCellDidMount: identity,
  dayCellWillUnmount: identity,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: identity,
  weekNumbers: Boolean,
  weekNumberClassNames: identity,
  weekNumberContent: identity,
  weekNumberDidMount: identity,
  weekNumberWillUnmount: identity,
  editable: Boolean,
  viewClassNames: identity,
  viewDidMount: identity,
  viewWillUnmount: identity,
  nowIndicator: Boolean,
  nowIndicatorClassNames: identity,
  nowIndicatorContent: identity,
  nowIndicatorDidMount: identity,
  nowIndicatorWillUnmount: identity,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: identity,
  locale: identity,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: identity,
  eventOrder: parseFieldSpecs,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: identity,
  contentHeight: identity,
  direction: String,
  weekNumberFormat: createFormatter,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  weekTextLong: String,
  progressiveEventRendering: Boolean,
  businessHours: identity,
  initialDate: identity,
  now: identity,
  eventDataTransform: identity,
  stickyHeaderDates: identity,
  stickyFooterScrollbar: identity,
  viewHeight: identity,
  defaultAllDay: Boolean,
  eventSourceFailure: identity,
  eventSourceSuccess: identity,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: identity,
  eventConstraint: identity,
  eventAllow: identity,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: identity,
  eventContent: identity,
  eventDidMount: identity,
  eventWillUnmount: identity,
  selectConstraint: identity,
  selectOverlap: identity,
  selectAllow: identity,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: identity,
  slotLaneClassNames: identity,
  slotLaneContent: identity,
  slotLaneDidMount: identity,
  slotLaneWillUnmount: identity,
  slotLabelClassNames: identity,
  slotLabelContent: identity,
  slotLabelDidMount: identity,
  slotLabelWillUnmount: identity,
  dayMaxEvents: identity,
  dayMaxEventRows: identity,
  dayMinWidth: Number,
  slotLabelInterval: createDuration,
  allDayText: String,
  allDayClassNames: identity,
  allDayContent: identity,
  allDayDidMount: identity,
  allDayWillUnmount: identity,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: createFormatter,
  rerenderDelay: Number,
  moreLinkText: identity,
  moreLinkHint: identity,
  selectMinDistance: Number,
  selectable: Boolean,
  selectLongPressDelay: Number,
  eventLongPressDelay: Number,
  selectMirror: Boolean,
  eventMaxStack: Number,
  eventMinHeight: Number,
  eventMinWidth: Number,
  eventShortHeight: Number,
  slotEventOverlap: Boolean,
  plugins: identity,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: createDuration,
  hiddenDays: identity,
  monthMode: Boolean,
  fixedWeekCount: Boolean,
  validRange: identity,
  visibleRange: identity,
  titleFormat: identity,
  eventInteractive: Boolean,
  noEventsText: String,
  viewHint: identity,
  navLinkHint: identity,
  closeHint: String,
  timeHint: String,
  eventHint: String,
  moreLinkClick: identity,
  moreLinkClassNames: identity,
  moreLinkContent: identity,
  moreLinkDidMount: identity,
  moreLinkWillUnmount: identity
};
var BASE_OPTION_DEFAULTS = {
  eventDisplay: "auto",
  defaultRangeSeparator: " - ",
  titleRangeSeparator: " \u2013 ",
  defaultTimedEventDuration: "01:00:00",
  defaultAllDayEventDuration: { day: 1 },
  forceEventDuration: false,
  nextDayThreshold: "00:00:00",
  dayHeaders: true,
  initialView: "",
  aspectRatio: 1.35,
  headerToolbar: {
    start: "title",
    center: "",
    end: "today prev,next"
  },
  weekends: true,
  weekNumbers: false,
  weekNumberCalculation: "local",
  editable: false,
  nowIndicator: false,
  scrollTime: "06:00:00",
  scrollTimeReset: true,
  slotMinTime: "00:00:00",
  slotMaxTime: "24:00:00",
  showNonCurrentDates: true,
  lazyFetching: true,
  startParam: "start",
  endParam: "end",
  timeZoneParam: "timeZone",
  timeZone: "local",
  locales: [],
  locale: "",
  themeSystem: "standard",
  dragRevertDuration: 500,
  dragScroll: true,
  allDayMaintainDuration: false,
  unselectAuto: true,
  dropAccept: "*",
  eventOrder: "start,-duration,allDay,title",
  dayPopoverFormat: { month: "long", day: "numeric", year: "numeric" },
  handleWindowResize: true,
  windowResizeDelay: 100,
  longPressDelay: 1e3,
  eventDragMinDistance: 5,
  expandRows: false,
  navLinks: false,
  selectable: false,
  eventMinHeight: 15,
  eventMinWidth: 30,
  eventShortHeight: 30
};
var CALENDAR_LISTENER_REFINERS = {
  datesSet: identity,
  eventsSet: identity,
  eventAdd: identity,
  eventChange: identity,
  eventRemove: identity,
  windowResize: identity,
  eventClick: identity,
  eventMouseEnter: identity,
  eventMouseLeave: identity,
  select: identity,
  unselect: identity,
  loading: identity,
  _unmount: identity,
  _beforeprint: identity,
  _afterprint: identity,
  _noEventDrop: identity,
  _noEventResize: identity,
  _resize: identity,
  _scrollRequest: identity
};
var CALENDAR_OPTION_REFINERS = {
  buttonText: identity,
  buttonHints: identity,
  views: identity,
  plugins: identity,
  initialEvents: identity,
  events: identity,
  eventSources: identity
};
var COMPLEX_OPTION_COMPARATORS = {
  headerToolbar: isMaybeObjectsEqual,
  footerToolbar: isMaybeObjectsEqual,
  buttonText: isMaybeObjectsEqual,
  buttonHints: isMaybeObjectsEqual,
  buttonIcons: isMaybeObjectsEqual,
  dateIncrement: isMaybeObjectsEqual
};
function isMaybeObjectsEqual(a, b) {
  if (typeof a === "object" && typeof b === "object" && a && b) {
    return isPropsEqual(a, b);
  }
  return a === b;
}
var VIEW_OPTION_REFINERS = {
  type: String,
  component: identity,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: identity,
  usesMinMaxTime: Boolean,
  classNames: identity,
  content: identity,
  didMount: identity,
  willUnmount: identity
};
function mergeRawOptions(optionSets) {
  return mergeProps(optionSets, COMPLEX_OPTION_COMPARATORS);
}
function refineProps(input, refiners) {
  var refined = {};
  var extra = {};
  for (var propName in refiners) {
    if (propName in input) {
      refined[propName] = refiners[propName](input[propName]);
    }
  }
  for (var propName in input) {
    if (!(propName in refiners)) {
      extra[propName] = input[propName];
    }
  }
  return { refined, extra };
}
function identity(raw) {
  return raw;
}
function parseEvents(rawEvents, eventSource, context, allowOpenRange) {
  var eventStore = createEmptyEventStore();
  var eventRefiners = buildEventRefiners(context);
  for (var _i = 0, rawEvents_1 = rawEvents; _i < rawEvents_1.length; _i++) {
    var rawEvent = rawEvents_1[_i];
    var tuple = parseEvent(rawEvent, eventSource, context, allowOpenRange, eventRefiners);
    if (tuple) {
      eventTupleToStore(tuple, eventStore);
    }
  }
  return eventStore;
}
function eventTupleToStore(tuple, eventStore) {
  if (eventStore === void 0) {
    eventStore = createEmptyEventStore();
  }
  eventStore.defs[tuple.def.defId] = tuple.def;
  if (tuple.instance) {
    eventStore.instances[tuple.instance.instanceId] = tuple.instance;
  }
  return eventStore;
}
function getRelevantEvents(eventStore, instanceId) {
  var instance = eventStore.instances[instanceId];
  if (instance) {
    var def_1 = eventStore.defs[instance.defId];
    var newStore = filterEventStoreDefs(eventStore, function(lookDef) {
      return isEventDefsGrouped(def_1, lookDef);
    });
    newStore.defs[def_1.defId] = def_1;
    newStore.instances[instance.instanceId] = instance;
    return newStore;
  }
  return createEmptyEventStore();
}
function isEventDefsGrouped(def0, def1) {
  return Boolean(def0.groupId && def0.groupId === def1.groupId);
}
function createEmptyEventStore() {
  return { defs: {}, instances: {} };
}
function mergeEventStores(store0, store1) {
  return {
    defs: __assign(__assign({}, store0.defs), store1.defs),
    instances: __assign(__assign({}, store0.instances), store1.instances)
  };
}
function filterEventStoreDefs(eventStore, filterFunc) {
  var defs = filterHash(eventStore.defs, filterFunc);
  var instances = filterHash(eventStore.instances, function(instance) {
    return defs[instance.defId];
  });
  return { defs, instances };
}
function excludeSubEventStore(master, sub) {
  var defs = master.defs, instances = master.instances;
  var filteredDefs = {};
  var filteredInstances = {};
  for (var defId in defs) {
    if (!sub.defs[defId]) {
      filteredDefs[defId] = defs[defId];
    }
  }
  for (var instanceId in instances) {
    if (!sub.instances[instanceId] && filteredDefs[instances[instanceId].defId]) {
      filteredInstances[instanceId] = instances[instanceId];
    }
  }
  return {
    defs: filteredDefs,
    instances: filteredInstances
  };
}
function normalizeConstraint(input, context) {
  if (Array.isArray(input)) {
    return parseEvents(input, null, context, true);
  }
  if (typeof input === "object" && input) {
    return parseEvents([input], null, context, true);
  }
  if (input != null) {
    return String(input);
  }
  return null;
}
function parseClassNames(raw) {
  if (Array.isArray(raw)) {
    return raw;
  }
  if (typeof raw === "string") {
    return raw.split(/\s+/);
  }
  return [];
}
var EVENT_UI_REFINERS = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: identity,
  overlap: identity,
  allow: identity,
  className: parseClassNames,
  classNames: parseClassNames,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
};
var EMPTY_EVENT_UI = {
  display: null,
  startEditable: null,
  durationEditable: null,
  constraints: [],
  overlap: null,
  allows: [],
  backgroundColor: "",
  borderColor: "",
  textColor: "",
  classNames: []
};
function createEventUi(refined, context) {
  var constraint = normalizeConstraint(refined.constraint, context);
  return {
    display: refined.display || null,
    startEditable: refined.startEditable != null ? refined.startEditable : refined.editable,
    durationEditable: refined.durationEditable != null ? refined.durationEditable : refined.editable,
    constraints: constraint != null ? [constraint] : [],
    overlap: refined.overlap != null ? refined.overlap : null,
    allows: refined.allow != null ? [refined.allow] : [],
    backgroundColor: refined.backgroundColor || refined.color || "",
    borderColor: refined.borderColor || refined.color || "",
    textColor: refined.textColor || "",
    classNames: (refined.className || []).concat(refined.classNames || [])
  };
}
function combineEventUis(uis) {
  return uis.reduce(combineTwoEventUis, EMPTY_EVENT_UI);
}
function combineTwoEventUis(item0, item1) {
  return {
    display: item1.display != null ? item1.display : item0.display,
    startEditable: item1.startEditable != null ? item1.startEditable : item0.startEditable,
    durationEditable: item1.durationEditable != null ? item1.durationEditable : item0.durationEditable,
    constraints: item0.constraints.concat(item1.constraints),
    overlap: typeof item1.overlap === "boolean" ? item1.overlap : item0.overlap,
    allows: item0.allows.concat(item1.allows),
    backgroundColor: item1.backgroundColor || item0.backgroundColor,
    borderColor: item1.borderColor || item0.borderColor,
    textColor: item1.textColor || item0.textColor,
    classNames: item0.classNames.concat(item1.classNames)
  };
}
var EVENT_NON_DATE_REFINERS = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
};
var EVENT_DATE_REFINERS = {
  start: identity,
  end: identity,
  date: identity,
  allDay: Boolean
};
var EVENT_REFINERS = __assign(__assign(__assign({}, EVENT_NON_DATE_REFINERS), EVENT_DATE_REFINERS), { extendedProps: identity });
function parseEvent(raw, eventSource, context, allowOpenRange, refiners) {
  if (refiners === void 0) {
    refiners = buildEventRefiners(context);
  }
  var _a = refineEventDef(raw, context, refiners), refined = _a.refined, extra = _a.extra;
  var defaultAllDay = computeIsDefaultAllDay(eventSource, context);
  var recurringRes = parseRecurring(refined, defaultAllDay, context.dateEnv, context.pluginHooks.recurringTypes);
  if (recurringRes) {
    var def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : "", recurringRes.allDay, Boolean(recurringRes.duration), context);
    def.recurringDef = {
      typeId: recurringRes.typeId,
      typeData: recurringRes.typeData,
      duration: recurringRes.duration
    };
    return { def, instance: null };
  }
  var singleRes = parseSingle(refined, defaultAllDay, context, allowOpenRange);
  if (singleRes) {
    var def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : "", singleRes.allDay, singleRes.hasEnd, context);
    var instance = createEventInstance(def.defId, singleRes.range, singleRes.forcedStartTzo, singleRes.forcedEndTzo);
    return { def, instance };
  }
  return null;
}
function refineEventDef(raw, context, refiners) {
  if (refiners === void 0) {
    refiners = buildEventRefiners(context);
  }
  return refineProps(raw, refiners);
}
function buildEventRefiners(context) {
  return __assign(__assign(__assign({}, EVENT_UI_REFINERS), EVENT_REFINERS), context.pluginHooks.eventRefiners);
}
function parseEventDef(refined, extra, sourceId, allDay, hasEnd, context) {
  var def = {
    title: refined.title || "",
    groupId: refined.groupId || "",
    publicId: refined.id || "",
    url: refined.url || "",
    recurringDef: null,
    defId: guid(),
    sourceId,
    allDay,
    hasEnd,
    interactive: refined.interactive,
    ui: createEventUi(refined, context),
    extendedProps: __assign(__assign({}, refined.extendedProps || {}), extra)
  };
  for (var _i = 0, _a = context.pluginHooks.eventDefMemberAdders; _i < _a.length; _i++) {
    var memberAdder = _a[_i];
    __assign(def, memberAdder(refined));
  }
  Object.freeze(def.ui.classNames);
  Object.freeze(def.extendedProps);
  return def;
}
function parseSingle(refined, defaultAllDay, context, allowOpenRange) {
  var allDay = refined.allDay;
  var startMeta;
  var startMarker = null;
  var hasEnd = false;
  var endMeta;
  var endMarker = null;
  var startInput = refined.start != null ? refined.start : refined.date;
  startMeta = context.dateEnv.createMarkerMeta(startInput);
  if (startMeta) {
    startMarker = startMeta.marker;
  } else if (!allowOpenRange) {
    return null;
  }
  if (refined.end != null) {
    endMeta = context.dateEnv.createMarkerMeta(refined.end);
  }
  if (allDay == null) {
    if (defaultAllDay != null) {
      allDay = defaultAllDay;
    } else {
      allDay = (!startMeta || startMeta.isTimeUnspecified) && (!endMeta || endMeta.isTimeUnspecified);
    }
  }
  if (allDay && startMarker) {
    startMarker = startOfDay(startMarker);
  }
  if (endMeta) {
    endMarker = endMeta.marker;
    if (allDay) {
      endMarker = startOfDay(endMarker);
    }
    if (startMarker && endMarker <= startMarker) {
      endMarker = null;
    }
  }
  if (endMarker) {
    hasEnd = true;
  } else if (!allowOpenRange) {
    hasEnd = context.options.forceEventDuration || false;
    endMarker = context.dateEnv.add(startMarker, allDay ? context.options.defaultAllDayEventDuration : context.options.defaultTimedEventDuration);
  }
  return {
    allDay,
    hasEnd,
    range: { start: startMarker, end: endMarker },
    forcedStartTzo: startMeta ? startMeta.forcedTzo : null,
    forcedEndTzo: endMeta ? endMeta.forcedTzo : null
  };
}
function computeIsDefaultAllDay(eventSource, context) {
  var res = null;
  if (eventSource) {
    res = eventSource.defaultAllDay;
  }
  if (res == null) {
    res = context.options.defaultAllDay;
  }
  return res;
}
function computeAlignedDayRange(timedRange) {
  var dayCnt = Math.floor(diffDays(timedRange.start, timedRange.end)) || 1;
  var start = startOfDay(timedRange.start);
  var end = addDays(start, dayCnt);
  return { start, end };
}
function computeVisibleDayRange(timedRange, nextDayThreshold) {
  if (nextDayThreshold === void 0) {
    nextDayThreshold = createDuration(0);
  }
  var startDay = null;
  var endDay = null;
  if (timedRange.end) {
    endDay = startOfDay(timedRange.end);
    var endTimeMS = timedRange.end.valueOf() - endDay.valueOf();
    if (endTimeMS && endTimeMS >= asRoughMs(nextDayThreshold)) {
      endDay = addDays(endDay, 1);
    }
  }
  if (timedRange.start) {
    startDay = startOfDay(timedRange.start);
    if (endDay && endDay <= startDay) {
      endDay = addDays(startDay, 1);
    }
  }
  return { start: startDay, end: endDay };
}
function diffDates(date0, date1, dateEnv, largeUnit) {
  if (largeUnit === "year") {
    return createDuration(dateEnv.diffWholeYears(date0, date1), "year");
  }
  if (largeUnit === "month") {
    return createDuration(dateEnv.diffWholeMonths(date0, date1), "month");
  }
  return diffDayAndTime(date0, date1);
}
function parseRange(input, dateEnv) {
  var start = null;
  var end = null;
  if (input.start) {
    start = dateEnv.createMarker(input.start);
  }
  if (input.end) {
    end = dateEnv.createMarker(input.end);
  }
  if (!start && !end) {
    return null;
  }
  if (start && end && end < start) {
    return null;
  }
  return { start, end };
}
function invertRanges(ranges, constraintRange) {
  var invertedRanges = [];
  var start = constraintRange.start;
  var i;
  var dateRange;
  ranges.sort(compareRanges);
  for (i = 0; i < ranges.length; i += 1) {
    dateRange = ranges[i];
    if (dateRange.start > start) {
      invertedRanges.push({ start, end: dateRange.start });
    }
    if (dateRange.end > start) {
      start = dateRange.end;
    }
  }
  if (start < constraintRange.end) {
    invertedRanges.push({ start, end: constraintRange.end });
  }
  return invertedRanges;
}
function compareRanges(range0, range1) {
  return range0.start.valueOf() - range1.start.valueOf();
}
function intersectRanges(range0, range1) {
  var start = range0.start, end = range0.end;
  var newRange = null;
  if (range1.start !== null) {
    if (start === null) {
      start = range1.start;
    } else {
      start = new Date(Math.max(start.valueOf(), range1.start.valueOf()));
    }
  }
  if (range1.end != null) {
    if (end === null) {
      end = range1.end;
    } else {
      end = new Date(Math.min(end.valueOf(), range1.end.valueOf()));
    }
  }
  if (start === null || end === null || start < end) {
    newRange = { start, end };
  }
  return newRange;
}
function rangesIntersect(range0, range1) {
  return (range0.end === null || range1.start === null || range0.end > range1.start) && (range0.start === null || range1.end === null || range0.start < range1.end);
}
function rangeContainsMarker(range, date) {
  return (range.start === null || date >= range.start) && (range.end === null || date < range.end);
}
function constrainMarkerToRange(date, range) {
  if (range.start != null && date < range.start) {
    return range.start;
  }
  if (range.end != null && date >= range.end) {
    return new Date(range.end.valueOf() - 1);
  }
  return date;
}
function sliceEventStore(eventStore, eventUiBases, framingRange, nextDayThreshold) {
  var inverseBgByGroupId = {};
  var inverseBgByDefId = {};
  var defByGroupId = {};
  var bgRanges = [];
  var fgRanges = [];
  var eventUis = compileEventUis(eventStore.defs, eventUiBases);
  for (var defId in eventStore.defs) {
    var def = eventStore.defs[defId];
    var ui = eventUis[def.defId];
    if (ui.display === "inverse-background") {
      if (def.groupId) {
        inverseBgByGroupId[def.groupId] = [];
        if (!defByGroupId[def.groupId]) {
          defByGroupId[def.groupId] = def;
        }
      } else {
        inverseBgByDefId[defId] = [];
      }
    }
  }
  for (var instanceId in eventStore.instances) {
    var instance = eventStore.instances[instanceId];
    var def = eventStore.defs[instance.defId];
    var ui = eventUis[def.defId];
    var origRange = instance.range;
    var normalRange = !def.allDay && nextDayThreshold ? computeVisibleDayRange(origRange, nextDayThreshold) : origRange;
    var slicedRange = intersectRanges(normalRange, framingRange);
    if (slicedRange) {
      if (ui.display === "inverse-background") {
        if (def.groupId) {
          inverseBgByGroupId[def.groupId].push(slicedRange);
        } else {
          inverseBgByDefId[instance.defId].push(slicedRange);
        }
      } else if (ui.display !== "none") {
        (ui.display === "background" ? bgRanges : fgRanges).push({
          def,
          ui,
          instance,
          range: slicedRange,
          isStart: normalRange.start && normalRange.start.valueOf() === slicedRange.start.valueOf(),
          isEnd: normalRange.end && normalRange.end.valueOf() === slicedRange.end.valueOf()
        });
      }
    }
  }
  for (var groupId in inverseBgByGroupId) {
    var ranges = inverseBgByGroupId[groupId];
    var invertedRanges = invertRanges(ranges, framingRange);
    for (var _i = 0, invertedRanges_1 = invertedRanges; _i < invertedRanges_1.length; _i++) {
      var invertedRange = invertedRanges_1[_i];
      var def = defByGroupId[groupId];
      var ui = eventUis[def.defId];
      bgRanges.push({
        def,
        ui,
        instance: null,
        range: invertedRange,
        isStart: false,
        isEnd: false
      });
    }
  }
  for (var defId in inverseBgByDefId) {
    var ranges = inverseBgByDefId[defId];
    var invertedRanges = invertRanges(ranges, framingRange);
    for (var _a = 0, invertedRanges_2 = invertedRanges; _a < invertedRanges_2.length; _a++) {
      var invertedRange = invertedRanges_2[_a];
      bgRanges.push({
        def: eventStore.defs[defId],
        ui: eventUis[defId],
        instance: null,
        range: invertedRange,
        isStart: false,
        isEnd: false
      });
    }
  }
  return { bg: bgRanges, fg: fgRanges };
}
function setElSeg(el, seg) {
  el.fcSeg = seg;
}
function getElSeg(el) {
  return el.fcSeg || el.parentNode.fcSeg || null;
}
function compileEventUis(eventDefs, eventUiBases) {
  return mapHash(eventDefs, function(eventDef) {
    return compileEventUi(eventDef, eventUiBases);
  });
}
function compileEventUi(eventDef, eventUiBases) {
  var uis = [];
  if (eventUiBases[""]) {
    uis.push(eventUiBases[""]);
  }
  if (eventUiBases[eventDef.defId]) {
    uis.push(eventUiBases[eventDef.defId]);
  }
  uis.push(eventDef.ui);
  return combineEventUis(uis);
}
function sortEventSegs(segs, eventOrderSpecs) {
  var objs = segs.map(buildSegCompareObj);
  objs.sort(function(obj0, obj1) {
    return compareByFieldSpecs(obj0, obj1, eventOrderSpecs);
  });
  return objs.map(function(c) {
    return c._seg;
  });
}
function buildSegCompareObj(seg) {
  var eventRange = seg.eventRange;
  var eventDef = eventRange.def;
  var range = eventRange.instance ? eventRange.instance.range : eventRange.range;
  var start = range.start ? range.start.valueOf() : 0;
  var end = range.end ? range.end.valueOf() : 0;
  return __assign(__assign(__assign({}, eventDef.extendedProps), eventDef), {
    id: eventDef.publicId,
    start,
    end,
    duration: end - start,
    allDay: Number(eventDef.allDay),
    _seg: seg
  });
}
function computeSegDraggable(seg, context) {
  var pluginHooks = context.pluginHooks;
  var transformers = pluginHooks.isDraggableTransformers;
  var _a = seg.eventRange, def = _a.def, ui = _a.ui;
  var val = ui.startEditable;
  for (var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
    var transformer = transformers_1[_i];
    val = transformer(val, def, ui, context);
  }
  return val;
}
function computeSegStartResizable(seg, context) {
  return seg.isStart && seg.eventRange.ui.durationEditable && context.options.eventResizableFromStart;
}
function computeSegEndResizable(seg, context) {
  return seg.isEnd && seg.eventRange.ui.durationEditable;
}
function buildSegTimeText(seg, timeFormat, context, defaultDisplayEventTime, defaultDisplayEventEnd, startOverride, endOverride) {
  var dateEnv = context.dateEnv, options = context.options;
  var displayEventTime = options.displayEventTime, displayEventEnd = options.displayEventEnd;
  var eventDef = seg.eventRange.def;
  var eventInstance = seg.eventRange.instance;
  if (displayEventTime == null) {
    displayEventTime = defaultDisplayEventTime !== false;
  }
  if (displayEventEnd == null) {
    displayEventEnd = defaultDisplayEventEnd !== false;
  }
  var wholeEventStart = eventInstance.range.start;
  var wholeEventEnd = eventInstance.range.end;
  var segStart = startOverride || seg.start || seg.eventRange.range.start;
  var segEnd = endOverride || seg.end || seg.eventRange.range.end;
  var isStartDay = startOfDay(wholeEventStart).valueOf() === startOfDay(segStart).valueOf();
  var isEndDay = startOfDay(addMs(wholeEventEnd, -1)).valueOf() === startOfDay(addMs(segEnd, -1)).valueOf();
  if (displayEventTime && !eventDef.allDay && (isStartDay || isEndDay)) {
    segStart = isStartDay ? wholeEventStart : segStart;
    segEnd = isEndDay ? wholeEventEnd : segEnd;
    if (displayEventEnd && eventDef.hasEnd) {
      return dateEnv.formatRange(segStart, segEnd, timeFormat, {
        forcedStartTzo: startOverride ? null : eventInstance.forcedStartTzo,
        forcedEndTzo: endOverride ? null : eventInstance.forcedEndTzo
      });
    }
    return dateEnv.format(segStart, timeFormat, {
      forcedTzo: startOverride ? null : eventInstance.forcedStartTzo
    });
  }
  return "";
}
function getSegMeta(seg, todayRange, nowDate) {
  var segRange = seg.eventRange.range;
  return {
    isPast: segRange.end < (nowDate || todayRange.start),
    isFuture: segRange.start >= (nowDate || todayRange.end),
    isToday: todayRange && rangeContainsMarker(todayRange, segRange.start)
  };
}
function getEventClassNames(props) {
  var classNames = ["fc-event"];
  if (props.isMirror) {
    classNames.push("fc-event-mirror");
  }
  if (props.isDraggable) {
    classNames.push("fc-event-draggable");
  }
  if (props.isStartResizable || props.isEndResizable) {
    classNames.push("fc-event-resizable");
  }
  if (props.isDragging) {
    classNames.push("fc-event-dragging");
  }
  if (props.isResizing) {
    classNames.push("fc-event-resizing");
  }
  if (props.isSelected) {
    classNames.push("fc-event-selected");
  }
  if (props.isStart) {
    classNames.push("fc-event-start");
  }
  if (props.isEnd) {
    classNames.push("fc-event-end");
  }
  if (props.isPast) {
    classNames.push("fc-event-past");
  }
  if (props.isToday) {
    classNames.push("fc-event-today");
  }
  if (props.isFuture) {
    classNames.push("fc-event-future");
  }
  return classNames;
}
function buildEventRangeKey(eventRange) {
  return eventRange.instance ? eventRange.instance.instanceId : eventRange.def.defId + ":" + eventRange.range.start.toISOString();
}
function getSegAnchorAttrs(seg, context) {
  var _a = seg.eventRange, def = _a.def, instance = _a.instance;
  var url = def.url;
  if (url) {
    return { href: url };
  }
  var emitter = context.emitter, options = context.options;
  var eventInteractive = options.eventInteractive;
  if (eventInteractive == null) {
    eventInteractive = def.interactive;
    if (eventInteractive == null) {
      eventInteractive = Boolean(emitter.hasHandlers("eventClick"));
    }
  }
  if (eventInteractive) {
    return createAriaKeyboardAttrs(function(ev) {
      emitter.trigger("eventClick", {
        el: ev.target,
        event: new EventApi(context, def, instance),
        jsEvent: ev,
        view: context.viewApi
      });
    });
  }
  return {};
}
var STANDARD_PROPS = {
  start: identity,
  end: identity,
  allDay: Boolean
};
function parseDateSpan(raw, dateEnv, defaultDuration) {
  var span = parseOpenDateSpan(raw, dateEnv);
  var range = span.range;
  if (!range.start) {
    return null;
  }
  if (!range.end) {
    if (defaultDuration == null) {
      return null;
    }
    range.end = dateEnv.add(range.start, defaultDuration);
  }
  return span;
}
function parseOpenDateSpan(raw, dateEnv) {
  var _a = refineProps(raw, STANDARD_PROPS), standardProps = _a.refined, extra = _a.extra;
  var startMeta = standardProps.start ? dateEnv.createMarkerMeta(standardProps.start) : null;
  var endMeta = standardProps.end ? dateEnv.createMarkerMeta(standardProps.end) : null;
  var allDay = standardProps.allDay;
  if (allDay == null) {
    allDay = startMeta && startMeta.isTimeUnspecified && (!endMeta || endMeta.isTimeUnspecified);
  }
  return __assign({ range: {
    start: startMeta ? startMeta.marker : null,
    end: endMeta ? endMeta.marker : null
  }, allDay }, extra);
}
function buildDateSpanApi(span, dateEnv) {
  return __assign(__assign({}, buildRangeApi(span.range, dateEnv, span.allDay)), { allDay: span.allDay });
}
function buildRangeApiWithTimeZone(range, dateEnv, omitTime) {
  return __assign(__assign({}, buildRangeApi(range, dateEnv, omitTime)), { timeZone: dateEnv.timeZone });
}
function buildRangeApi(range, dateEnv, omitTime) {
  return {
    start: dateEnv.toDate(range.start),
    end: dateEnv.toDate(range.end),
    startStr: dateEnv.formatIso(range.start, { omitTime }),
    endStr: dateEnv.formatIso(range.end, { omitTime })
  };
}
function fabricateEventRange(dateSpan, eventUiBases, context) {
  var res = refineEventDef({ editable: false }, context);
  var def = parseEventDef(
    res.refined,
    res.extra,
    "",
    dateSpan.allDay,
    true,
    context
  );
  return {
    def,
    ui: compileEventUi(def, eventUiBases),
    instance: createEventInstance(def.defId, dateSpan.range),
    range: dateSpan.range,
    isStart: true,
    isEnd: true
  };
}
function triggerDateSelect(selection, pev, context) {
  context.emitter.trigger("select", __assign(__assign({}, buildDateSpanApiWithContext(selection, context)), { jsEvent: pev ? pev.origEvent : null, view: context.viewApi || context.calendarApi.view }));
}
function triggerDateUnselect(pev, context) {
  context.emitter.trigger("unselect", {
    jsEvent: pev ? pev.origEvent : null,
    view: context.viewApi || context.calendarApi.view
  });
}
function buildDateSpanApiWithContext(dateSpan, context) {
  var props = {};
  for (var _i = 0, _a = context.pluginHooks.dateSpanTransforms; _i < _a.length; _i++) {
    var transform = _a[_i];
    __assign(props, transform(dateSpan, context));
  }
  __assign(props, buildDateSpanApi(dateSpan, context.dateEnv));
  return props;
}
function getDefaultEventEnd(allDay, marker, context) {
  var dateEnv = context.dateEnv, options = context.options;
  var end = marker;
  if (allDay) {
    end = startOfDay(end);
    end = dateEnv.add(end, options.defaultAllDayEventDuration);
  } else {
    end = dateEnv.add(end, options.defaultTimedEventDuration);
  }
  return end;
}
function applyMutationToEventStore(eventStore, eventConfigBase, mutation, context) {
  var eventConfigs = compileEventUis(eventStore.defs, eventConfigBase);
  var dest = createEmptyEventStore();
  for (var defId in eventStore.defs) {
    var def = eventStore.defs[defId];
    dest.defs[defId] = applyMutationToEventDef(def, eventConfigs[defId], mutation, context);
  }
  for (var instanceId in eventStore.instances) {
    var instance = eventStore.instances[instanceId];
    var def = dest.defs[instance.defId];
    dest.instances[instanceId] = applyMutationToEventInstance(instance, def, eventConfigs[instance.defId], mutation, context);
  }
  return dest;
}
function applyMutationToEventDef(eventDef, eventConfig, mutation, context) {
  var standardProps = mutation.standardProps || {};
  if (standardProps.hasEnd == null && eventConfig.durationEditable && (mutation.startDelta || mutation.endDelta)) {
    standardProps.hasEnd = true;
  }
  var copy = __assign(__assign(__assign({}, eventDef), standardProps), { ui: __assign(__assign({}, eventDef.ui), standardProps.ui) });
  if (mutation.extendedProps) {
    copy.extendedProps = __assign(__assign({}, copy.extendedProps), mutation.extendedProps);
  }
  for (var _i = 0, _a = context.pluginHooks.eventDefMutationAppliers; _i < _a.length; _i++) {
    var applier = _a[_i];
    applier(copy, mutation, context);
  }
  if (!copy.hasEnd && context.options.forceEventDuration) {
    copy.hasEnd = true;
  }
  return copy;
}
function applyMutationToEventInstance(eventInstance, eventDef, eventConfig, mutation, context) {
  var dateEnv = context.dateEnv;
  var forceAllDay = mutation.standardProps && mutation.standardProps.allDay === true;
  var clearEnd = mutation.standardProps && mutation.standardProps.hasEnd === false;
  var copy = __assign({}, eventInstance);
  if (forceAllDay) {
    copy.range = computeAlignedDayRange(copy.range);
  }
  if (mutation.datesDelta && eventConfig.startEditable) {
    copy.range = {
      start: dateEnv.add(copy.range.start, mutation.datesDelta),
      end: dateEnv.add(copy.range.end, mutation.datesDelta)
    };
  }
  if (mutation.startDelta && eventConfig.durationEditable) {
    copy.range = {
      start: dateEnv.add(copy.range.start, mutation.startDelta),
      end: copy.range.end
    };
  }
  if (mutation.endDelta && eventConfig.durationEditable) {
    copy.range = {
      start: copy.range.start,
      end: dateEnv.add(copy.range.end, mutation.endDelta)
    };
  }
  if (clearEnd) {
    copy.range = {
      start: copy.range.start,
      end: getDefaultEventEnd(eventDef.allDay, copy.range.start, context)
    };
  }
  if (eventDef.allDay) {
    copy.range = {
      start: startOfDay(copy.range.start),
      end: startOfDay(copy.range.end)
    };
  }
  if (copy.range.end < copy.range.start) {
    copy.range.end = getDefaultEventEnd(eventDef.allDay, copy.range.start, context);
  }
  return copy;
}
var ViewApi = function() {
  function ViewApi2(type, getCurrentData, dateEnv) {
    this.type = type;
    this.getCurrentData = getCurrentData;
    this.dateEnv = dateEnv;
  }
  Object.defineProperty(ViewApi2.prototype, "calendar", {
    get: function() {
      return this.getCurrentData().calendarApi;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ViewApi2.prototype, "title", {
    get: function() {
      return this.getCurrentData().viewTitle;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ViewApi2.prototype, "activeStart", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ViewApi2.prototype, "activeEnd", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ViewApi2.prototype, "currentStart", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ViewApi2.prototype, "currentEnd", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
    },
    enumerable: false,
    configurable: true
  });
  ViewApi2.prototype.getOption = function(name) {
    return this.getCurrentData().options[name];
  };
  return ViewApi2;
}();
var EVENT_SOURCE_REFINERS = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: identity,
  eventDataTransform: identity,
  success: identity,
  failure: identity
};
function parseEventSource(raw, context, refiners) {
  if (refiners === void 0) {
    refiners = buildEventSourceRefiners(context);
  }
  var rawObj;
  if (typeof raw === "string") {
    rawObj = { url: raw };
  } else if (typeof raw === "function" || Array.isArray(raw)) {
    rawObj = { events: raw };
  } else if (typeof raw === "object" && raw) {
    rawObj = raw;
  }
  if (rawObj) {
    var _a = refineProps(rawObj, refiners), refined = _a.refined, extra = _a.extra;
    var metaRes = buildEventSourceMeta(refined, context);
    if (metaRes) {
      return {
        _raw: raw,
        isFetching: false,
        latestFetchId: "",
        fetchRange: null,
        defaultAllDay: refined.defaultAllDay,
        eventDataTransform: refined.eventDataTransform,
        success: refined.success,
        failure: refined.failure,
        publicId: refined.id || "",
        sourceId: guid(),
        sourceDefId: metaRes.sourceDefId,
        meta: metaRes.meta,
        ui: createEventUi(refined, context),
        extendedProps: extra
      };
    }
  }
  return null;
}
function buildEventSourceRefiners(context) {
  return __assign(__assign(__assign({}, EVENT_UI_REFINERS), EVENT_SOURCE_REFINERS), context.pluginHooks.eventSourceRefiners);
}
function buildEventSourceMeta(raw, context) {
  var defs = context.pluginHooks.eventSourceDefs;
  for (var i = defs.length - 1; i >= 0; i -= 1) {
    var def = defs[i];
    var meta = def.parseMeta(raw);
    if (meta) {
      return { sourceDefId: i, meta };
    }
  }
  return null;
}
function reduceCurrentDate(currentDate, action) {
  switch (action.type) {
    case "CHANGE_DATE":
      return action.dateMarker;
    default:
      return currentDate;
  }
}
function getInitialDate(options, dateEnv) {
  var initialDateInput = options.initialDate;
  if (initialDateInput != null) {
    return dateEnv.createMarker(initialDateInput);
  }
  return getNow(options.now, dateEnv);
}
function getNow(nowInput, dateEnv) {
  if (typeof nowInput === "function") {
    nowInput = nowInput();
  }
  if (nowInput == null) {
    return dateEnv.createNowMarker();
  }
  return dateEnv.createMarker(nowInput);
}
var CalendarApi = function() {
  function CalendarApi2() {
  }
  CalendarApi2.prototype.getCurrentData = function() {
    return this.currentDataManager.getCurrentData();
  };
  CalendarApi2.prototype.dispatch = function(action) {
    return this.currentDataManager.dispatch(action);
  };
  Object.defineProperty(CalendarApi2.prototype, "view", {
    get: function() {
      return this.getCurrentData().viewApi;
    },
    enumerable: false,
    configurable: true
  });
  CalendarApi2.prototype.batchRendering = function(callback) {
    callback();
  };
  CalendarApi2.prototype.updateSize = function() {
    this.trigger("_resize", true);
  };
  CalendarApi2.prototype.setOption = function(name, val) {
    this.dispatch({
      type: "SET_OPTION",
      optionName: name,
      rawOptionValue: val
    });
  };
  CalendarApi2.prototype.getOption = function(name) {
    return this.currentDataManager.currentCalendarOptionsInput[name];
  };
  CalendarApi2.prototype.getAvailableLocaleCodes = function() {
    return Object.keys(this.getCurrentData().availableRawLocales);
  };
  CalendarApi2.prototype.on = function(handlerName, handler) {
    var currentDataManager = this.currentDataManager;
    if (currentDataManager.currentCalendarOptionsRefiners[handlerName]) {
      currentDataManager.emitter.on(handlerName, handler);
    } else {
      console.warn("Unknown listener name '" + handlerName + "'");
    }
  };
  CalendarApi2.prototype.off = function(handlerName, handler) {
    this.currentDataManager.emitter.off(handlerName, handler);
  };
  CalendarApi2.prototype.trigger = function(handlerName) {
    var _a;
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    (_a = this.currentDataManager.emitter).trigger.apply(_a, __spreadArray([handlerName], args));
  };
  CalendarApi2.prototype.changeView = function(viewType, dateOrRange) {
    var _this = this;
    this.batchRendering(function() {
      _this.unselect();
      if (dateOrRange) {
        if (dateOrRange.start && dateOrRange.end) {
          _this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType
          });
          _this.dispatch({
            type: "SET_OPTION",
            optionName: "visibleRange",
            rawOptionValue: dateOrRange
          });
        } else {
          var dateEnv = _this.getCurrentData().dateEnv;
          _this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType,
            dateMarker: dateEnv.createMarker(dateOrRange)
          });
        }
      } else {
        _this.dispatch({
          type: "CHANGE_VIEW_TYPE",
          viewType
        });
      }
    });
  };
  CalendarApi2.prototype.zoomTo = function(dateMarker, viewType) {
    var state = this.getCurrentData();
    var spec;
    viewType = viewType || "day";
    spec = state.viewSpecs[viewType] || this.getUnitViewSpec(viewType);
    this.unselect();
    if (spec) {
      this.dispatch({
        type: "CHANGE_VIEW_TYPE",
        viewType: spec.type,
        dateMarker
      });
    } else {
      this.dispatch({
        type: "CHANGE_DATE",
        dateMarker
      });
    }
  };
  CalendarApi2.prototype.getUnitViewSpec = function(unit) {
    var _a = this.getCurrentData(), viewSpecs = _a.viewSpecs, toolbarConfig = _a.toolbarConfig;
    var viewTypes = [].concat(toolbarConfig.header ? toolbarConfig.header.viewsWithButtons : [], toolbarConfig.footer ? toolbarConfig.footer.viewsWithButtons : []);
    var i;
    var spec;
    for (var viewType in viewSpecs) {
      viewTypes.push(viewType);
    }
    for (i = 0; i < viewTypes.length; i += 1) {
      spec = viewSpecs[viewTypes[i]];
      if (spec) {
        if (spec.singleUnit === unit) {
          return spec;
        }
      }
    }
    return null;
  };
  CalendarApi2.prototype.prev = function() {
    this.unselect();
    this.dispatch({ type: "PREV" });
  };
  CalendarApi2.prototype.next = function() {
    this.unselect();
    this.dispatch({ type: "NEXT" });
  };
  CalendarApi2.prototype.prevYear = function() {
    var state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: state.dateEnv.addYears(state.currentDate, -1)
    });
  };
  CalendarApi2.prototype.nextYear = function() {
    var state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: state.dateEnv.addYears(state.currentDate, 1)
    });
  };
  CalendarApi2.prototype.today = function() {
    var state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: getNow(state.calendarOptions.now, state.dateEnv)
    });
  };
  CalendarApi2.prototype.gotoDate = function(zonedDateInput) {
    var state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: state.dateEnv.createMarker(zonedDateInput)
    });
  };
  CalendarApi2.prototype.incrementDate = function(deltaInput) {
    var state = this.getCurrentData();
    var delta = createDuration(deltaInput);
    if (delta) {
      this.unselect();
      this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: state.dateEnv.add(state.currentDate, delta)
      });
    }
  };
  CalendarApi2.prototype.getDate = function() {
    var state = this.getCurrentData();
    return state.dateEnv.toDate(state.currentDate);
  };
  CalendarApi2.prototype.formatDate = function(d, formatter) {
    var dateEnv = this.getCurrentData().dateEnv;
    return dateEnv.format(dateEnv.createMarker(d), createFormatter(formatter));
  };
  CalendarApi2.prototype.formatRange = function(d0, d1, settings) {
    var dateEnv = this.getCurrentData().dateEnv;
    return dateEnv.formatRange(dateEnv.createMarker(d0), dateEnv.createMarker(d1), createFormatter(settings), settings);
  };
  CalendarApi2.prototype.formatIso = function(d, omitTime) {
    var dateEnv = this.getCurrentData().dateEnv;
    return dateEnv.formatIso(dateEnv.createMarker(d), { omitTime });
  };
  CalendarApi2.prototype.select = function(dateOrObj, endDate) {
    var selectionInput;
    if (endDate == null) {
      if (dateOrObj.start != null) {
        selectionInput = dateOrObj;
      } else {
        selectionInput = {
          start: dateOrObj,
          end: null
        };
      }
    } else {
      selectionInput = {
        start: dateOrObj,
        end: endDate
      };
    }
    var state = this.getCurrentData();
    var selection = parseDateSpan(selectionInput, state.dateEnv, createDuration({ days: 1 }));
    if (selection) {
      this.dispatch({ type: "SELECT_DATES", selection });
      triggerDateSelect(selection, null, state);
    }
  };
  CalendarApi2.prototype.unselect = function(pev) {
    var state = this.getCurrentData();
    if (state.dateSelection) {
      this.dispatch({ type: "UNSELECT_DATES" });
      triggerDateUnselect(pev, state);
    }
  };
  CalendarApi2.prototype.addEvent = function(eventInput, sourceInput) {
    if (eventInput instanceof EventApi) {
      var def = eventInput._def;
      var instance = eventInput._instance;
      var currentData = this.getCurrentData();
      if (!currentData.eventStore.defs[def.defId]) {
        this.dispatch({
          type: "ADD_EVENTS",
          eventStore: eventTupleToStore({ def, instance })
        });
        this.triggerEventAdd(eventInput);
      }
      return eventInput;
    }
    var state = this.getCurrentData();
    var eventSource;
    if (sourceInput instanceof EventSourceApi) {
      eventSource = sourceInput.internalEventSource;
    } else if (typeof sourceInput === "boolean") {
      if (sourceInput) {
        eventSource = hashValuesToArray(state.eventSources)[0];
      }
    } else if (sourceInput != null) {
      var sourceApi = this.getEventSourceById(sourceInput);
      if (!sourceApi) {
        console.warn('Could not find an event source with ID "' + sourceInput + '"');
        return null;
      }
      eventSource = sourceApi.internalEventSource;
    }
    var tuple = parseEvent(eventInput, eventSource, state, false);
    if (tuple) {
      var newEventApi = new EventApi(state, tuple.def, tuple.def.recurringDef ? null : tuple.instance);
      this.dispatch({
        type: "ADD_EVENTS",
        eventStore: eventTupleToStore(tuple)
      });
      this.triggerEventAdd(newEventApi);
      return newEventApi;
    }
    return null;
  };
  CalendarApi2.prototype.triggerEventAdd = function(eventApi) {
    var _this = this;
    var emitter = this.getCurrentData().emitter;
    emitter.trigger("eventAdd", {
      event: eventApi,
      relatedEvents: [],
      revert: function() {
        _this.dispatch({
          type: "REMOVE_EVENTS",
          eventStore: eventApiToStore(eventApi)
        });
      }
    });
  };
  CalendarApi2.prototype.getEventById = function(id) {
    var state = this.getCurrentData();
    var _a = state.eventStore, defs = _a.defs, instances = _a.instances;
    id = String(id);
    for (var defId in defs) {
      var def = defs[defId];
      if (def.publicId === id) {
        if (def.recurringDef) {
          return new EventApi(state, def, null);
        }
        for (var instanceId in instances) {
          var instance = instances[instanceId];
          if (instance.defId === def.defId) {
            return new EventApi(state, def, instance);
          }
        }
      }
    }
    return null;
  };
  CalendarApi2.prototype.getEvents = function() {
    var currentData = this.getCurrentData();
    return buildEventApis(currentData.eventStore, currentData);
  };
  CalendarApi2.prototype.removeAllEvents = function() {
    this.dispatch({ type: "REMOVE_ALL_EVENTS" });
  };
  CalendarApi2.prototype.getEventSources = function() {
    var state = this.getCurrentData();
    var sourceHash = state.eventSources;
    var sourceApis = [];
    for (var internalId in sourceHash) {
      sourceApis.push(new EventSourceApi(state, sourceHash[internalId]));
    }
    return sourceApis;
  };
  CalendarApi2.prototype.getEventSourceById = function(id) {
    var state = this.getCurrentData();
    var sourceHash = state.eventSources;
    id = String(id);
    for (var sourceId in sourceHash) {
      if (sourceHash[sourceId].publicId === id) {
        return new EventSourceApi(state, sourceHash[sourceId]);
      }
    }
    return null;
  };
  CalendarApi2.prototype.addEventSource = function(sourceInput) {
    var state = this.getCurrentData();
    if (sourceInput instanceof EventSourceApi) {
      if (!state.eventSources[sourceInput.internalEventSource.sourceId]) {
        this.dispatch({
          type: "ADD_EVENT_SOURCES",
          sources: [sourceInput.internalEventSource]
        });
      }
      return sourceInput;
    }
    var eventSource = parseEventSource(sourceInput, state);
    if (eventSource) {
      this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [eventSource] });
      return new EventSourceApi(state, eventSource);
    }
    return null;
  };
  CalendarApi2.prototype.removeAllEventSources = function() {
    this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
  };
  CalendarApi2.prototype.refetchEvents = function() {
    this.dispatch({ type: "FETCH_EVENT_SOURCES", isRefetch: true });
  };
  CalendarApi2.prototype.scrollToTime = function(timeInput) {
    var time = createDuration(timeInput);
    if (time) {
      this.trigger("_scrollRequest", { time });
    }
  };
  return CalendarApi2;
}();
var EventApi = function() {
  function EventApi2(context, def, instance) {
    this._context = context;
    this._def = def;
    this._instance = instance || null;
  }
  EventApi2.prototype.setProp = function(name, val) {
    var _a, _b;
    if (name in EVENT_DATE_REFINERS) {
      console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
    } else if (name === "id") {
      val = EVENT_NON_DATE_REFINERS[name](val);
      this.mutate({
        standardProps: { publicId: val }
      });
    } else if (name in EVENT_NON_DATE_REFINERS) {
      val = EVENT_NON_DATE_REFINERS[name](val);
      this.mutate({
        standardProps: (_a = {}, _a[name] = val, _a)
      });
    } else if (name in EVENT_UI_REFINERS) {
      var ui = EVENT_UI_REFINERS[name](val);
      if (name === "color") {
        ui = { backgroundColor: val, borderColor: val };
      } else if (name === "editable") {
        ui = { startEditable: val, durationEditable: val };
      } else {
        ui = (_b = {}, _b[name] = val, _b);
      }
      this.mutate({
        standardProps: { ui }
      });
    } else {
      console.warn("Could not set prop '" + name + "'. Use setExtendedProp instead.");
    }
  };
  EventApi2.prototype.setExtendedProp = function(name, val) {
    var _a;
    this.mutate({
      extendedProps: (_a = {}, _a[name] = val, _a)
    });
  };
  EventApi2.prototype.setStart = function(startInput, options) {
    if (options === void 0) {
      options = {};
    }
    var dateEnv = this._context.dateEnv;
    var start = dateEnv.createMarker(startInput);
    if (start && this._instance) {
      var instanceRange = this._instance.range;
      var startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity);
      if (options.maintainDuration) {
        this.mutate({ datesDelta: startDelta });
      } else {
        this.mutate({ startDelta });
      }
    }
  };
  EventApi2.prototype.setEnd = function(endInput, options) {
    if (options === void 0) {
      options = {};
    }
    var dateEnv = this._context.dateEnv;
    var end;
    if (endInput != null) {
      end = dateEnv.createMarker(endInput);
      if (!end) {
        return;
      }
    }
    if (this._instance) {
      if (end) {
        var endDelta = diffDates(this._instance.range.end, end, dateEnv, options.granularity);
        this.mutate({ endDelta });
      } else {
        this.mutate({ standardProps: { hasEnd: false } });
      }
    }
  };
  EventApi2.prototype.setDates = function(startInput, endInput, options) {
    if (options === void 0) {
      options = {};
    }
    var dateEnv = this._context.dateEnv;
    var standardProps = { allDay: options.allDay };
    var start = dateEnv.createMarker(startInput);
    var end;
    if (!start) {
      return;
    }
    if (endInput != null) {
      end = dateEnv.createMarker(endInput);
      if (!end) {
        return;
      }
    }
    if (this._instance) {
      var instanceRange = this._instance.range;
      if (options.allDay === true) {
        instanceRange = computeAlignedDayRange(instanceRange);
      }
      var startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity);
      if (end) {
        var endDelta = diffDates(instanceRange.end, end, dateEnv, options.granularity);
        if (durationsEqual(startDelta, endDelta)) {
          this.mutate({ datesDelta: startDelta, standardProps });
        } else {
          this.mutate({ startDelta, endDelta, standardProps });
        }
      } else {
        standardProps.hasEnd = false;
        this.mutate({ datesDelta: startDelta, standardProps });
      }
    }
  };
  EventApi2.prototype.moveStart = function(deltaInput) {
    var delta = createDuration(deltaInput);
    if (delta) {
      this.mutate({ startDelta: delta });
    }
  };
  EventApi2.prototype.moveEnd = function(deltaInput) {
    var delta = createDuration(deltaInput);
    if (delta) {
      this.mutate({ endDelta: delta });
    }
  };
  EventApi2.prototype.moveDates = function(deltaInput) {
    var delta = createDuration(deltaInput);
    if (delta) {
      this.mutate({ datesDelta: delta });
    }
  };
  EventApi2.prototype.setAllDay = function(allDay, options) {
    if (options === void 0) {
      options = {};
    }
    var standardProps = { allDay };
    var maintainDuration = options.maintainDuration;
    if (maintainDuration == null) {
      maintainDuration = this._context.options.allDayMaintainDuration;
    }
    if (this._def.allDay !== allDay) {
      standardProps.hasEnd = maintainDuration;
    }
    this.mutate({ standardProps });
  };
  EventApi2.prototype.formatRange = function(formatInput) {
    var dateEnv = this._context.dateEnv;
    var instance = this._instance;
    var formatter = createFormatter(formatInput);
    if (this._def.hasEnd) {
      return dateEnv.formatRange(instance.range.start, instance.range.end, formatter, {
        forcedStartTzo: instance.forcedStartTzo,
        forcedEndTzo: instance.forcedEndTzo
      });
    }
    return dateEnv.format(instance.range.start, formatter, {
      forcedTzo: instance.forcedStartTzo
    });
  };
  EventApi2.prototype.mutate = function(mutation) {
    var instance = this._instance;
    if (instance) {
      var def = this._def;
      var context_1 = this._context;
      var eventStore_1 = context_1.getCurrentData().eventStore;
      var relevantEvents = getRelevantEvents(eventStore_1, instance.instanceId);
      var eventConfigBase = {
        "": {
          display: "",
          startEditable: true,
          durationEditable: true,
          constraints: [],
          overlap: null,
          allows: [],
          backgroundColor: "",
          borderColor: "",
          textColor: "",
          classNames: []
        }
      };
      relevantEvents = applyMutationToEventStore(relevantEvents, eventConfigBase, mutation, context_1);
      var oldEvent = new EventApi2(context_1, def, instance);
      this._def = relevantEvents.defs[def.defId];
      this._instance = relevantEvents.instances[instance.instanceId];
      context_1.dispatch({
        type: "MERGE_EVENTS",
        eventStore: relevantEvents
      });
      context_1.emitter.trigger("eventChange", {
        oldEvent,
        event: this,
        relatedEvents: buildEventApis(relevantEvents, context_1, instance),
        revert: function() {
          context_1.dispatch({
            type: "RESET_EVENTS",
            eventStore: eventStore_1
          });
        }
      });
    }
  };
  EventApi2.prototype.remove = function() {
    var context = this._context;
    var asStore = eventApiToStore(this);
    context.dispatch({
      type: "REMOVE_EVENTS",
      eventStore: asStore
    });
    context.emitter.trigger("eventRemove", {
      event: this,
      relatedEvents: [],
      revert: function() {
        context.dispatch({
          type: "MERGE_EVENTS",
          eventStore: asStore
        });
      }
    });
  };
  Object.defineProperty(EventApi2.prototype, "source", {
    get: function() {
      var sourceId = this._def.sourceId;
      if (sourceId) {
        return new EventSourceApi(this._context, this._context.getCurrentData().eventSources[sourceId]);
      }
      return null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "start", {
    get: function() {
      return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "end", {
    get: function() {
      return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "startStr", {
    get: function() {
      var instance = this._instance;
      if (instance) {
        return this._context.dateEnv.formatIso(instance.range.start, {
          omitTime: this._def.allDay,
          forcedTzo: instance.forcedStartTzo
        });
      }
      return "";
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "endStr", {
    get: function() {
      var instance = this._instance;
      if (instance && this._def.hasEnd) {
        return this._context.dateEnv.formatIso(instance.range.end, {
          omitTime: this._def.allDay,
          forcedTzo: instance.forcedEndTzo
        });
      }
      return "";
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "id", {
    get: function() {
      return this._def.publicId;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "groupId", {
    get: function() {
      return this._def.groupId;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "allDay", {
    get: function() {
      return this._def.allDay;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "title", {
    get: function() {
      return this._def.title;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "url", {
    get: function() {
      return this._def.url;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "display", {
    get: function() {
      return this._def.ui.display || "auto";
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "startEditable", {
    get: function() {
      return this._def.ui.startEditable;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "durationEditable", {
    get: function() {
      return this._def.ui.durationEditable;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "constraint", {
    get: function() {
      return this._def.ui.constraints[0] || null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "overlap", {
    get: function() {
      return this._def.ui.overlap;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "allow", {
    get: function() {
      return this._def.ui.allows[0] || null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "backgroundColor", {
    get: function() {
      return this._def.ui.backgroundColor;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "borderColor", {
    get: function() {
      return this._def.ui.borderColor;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "textColor", {
    get: function() {
      return this._def.ui.textColor;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "classNames", {
    get: function() {
      return this._def.ui.classNames;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi2.prototype, "extendedProps", {
    get: function() {
      return this._def.extendedProps;
    },
    enumerable: false,
    configurable: true
  });
  EventApi2.prototype.toPlainObject = function(settings) {
    if (settings === void 0) {
      settings = {};
    }
    var def = this._def;
    var ui = def.ui;
    var _a = this, startStr = _a.startStr, endStr = _a.endStr;
    var res = {};
    if (def.title) {
      res.title = def.title;
    }
    if (startStr) {
      res.start = startStr;
    }
    if (endStr) {
      res.end = endStr;
    }
    if (def.publicId) {
      res.id = def.publicId;
    }
    if (def.groupId) {
      res.groupId = def.groupId;
    }
    if (def.url) {
      res.url = def.url;
    }
    if (ui.display && ui.display !== "auto") {
      res.display = ui.display;
    }
    if (settings.collapseColor && ui.backgroundColor && ui.backgroundColor === ui.borderColor) {
      res.color = ui.backgroundColor;
    } else {
      if (ui.backgroundColor) {
        res.backgroundColor = ui.backgroundColor;
      }
      if (ui.borderColor) {
        res.borderColor = ui.borderColor;
      }
    }
    if (ui.textColor) {
      res.textColor = ui.textColor;
    }
    if (ui.classNames.length) {
      res.classNames = ui.classNames;
    }
    if (Object.keys(def.extendedProps).length) {
      if (settings.collapseExtendedProps) {
        __assign(res, def.extendedProps);
      } else {
        res.extendedProps = def.extendedProps;
      }
    }
    return res;
  };
  EventApi2.prototype.toJSON = function() {
    return this.toPlainObject();
  };
  return EventApi2;
}();
function eventApiToStore(eventApi) {
  var _a, _b;
  var def = eventApi._def;
  var instance = eventApi._instance;
  return {
    defs: (_a = {}, _a[def.defId] = def, _a),
    instances: instance ? (_b = {}, _b[instance.instanceId] = instance, _b) : {}
  };
}
function buildEventApis(eventStore, context, excludeInstance) {
  var defs = eventStore.defs, instances = eventStore.instances;
  var eventApis = [];
  var excludeInstanceId = excludeInstance ? excludeInstance.instanceId : "";
  for (var id in instances) {
    var instance = instances[id];
    var def = defs[instance.defId];
    if (instance.instanceId !== excludeInstanceId) {
      eventApis.push(new EventApi(context, def, instance));
    }
  }
  return eventApis;
}
var calendarSystemClassMap = {};
function registerCalendarSystem(name, theClass) {
  calendarSystemClassMap[name] = theClass;
}
function createCalendarSystem(name) {
  return new calendarSystemClassMap[name]();
}
var GregorianCalendarSystem = function() {
  function GregorianCalendarSystem2() {
  }
  GregorianCalendarSystem2.prototype.getMarkerYear = function(d) {
    return d.getUTCFullYear();
  };
  GregorianCalendarSystem2.prototype.getMarkerMonth = function(d) {
    return d.getUTCMonth();
  };
  GregorianCalendarSystem2.prototype.getMarkerDay = function(d) {
    return d.getUTCDate();
  };
  GregorianCalendarSystem2.prototype.arrayToMarker = function(arr) {
    return arrayToUtcDate(arr);
  };
  GregorianCalendarSystem2.prototype.markerToArray = function(marker) {
    return dateToUtcArray(marker);
  };
  return GregorianCalendarSystem2;
}();
registerCalendarSystem("gregory", GregorianCalendarSystem);
var ISO_RE = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function parse(str) {
  var m = ISO_RE.exec(str);
  if (m) {
    var marker = new Date(Date.UTC(Number(m[1]), m[3] ? Number(m[3]) - 1 : 0, Number(m[5] || 1), Number(m[7] || 0), Number(m[8] || 0), Number(m[10] || 0), m[12] ? Number("0." + m[12]) * 1e3 : 0));
    if (isValidDate(marker)) {
      var timeZoneOffset = null;
      if (m[13]) {
        timeZoneOffset = (m[15] === "-" ? -1 : 1) * (Number(m[16] || 0) * 60 + Number(m[18] || 0));
      }
      return {
        marker,
        isTimeUnspecified: !m[6],
        timeZoneOffset
      };
    }
  }
  return null;
}
var DateEnv = function() {
  function DateEnv2(settings) {
    var timeZone = this.timeZone = settings.timeZone;
    var isNamedTimeZone = timeZone !== "local" && timeZone !== "UTC";
    if (settings.namedTimeZoneImpl && isNamedTimeZone) {
      this.namedTimeZoneImpl = new settings.namedTimeZoneImpl(timeZone);
    }
    this.canComputeOffset = Boolean(!isNamedTimeZone || this.namedTimeZoneImpl);
    this.calendarSystem = createCalendarSystem(settings.calendarSystem);
    this.locale = settings.locale;
    this.weekDow = settings.locale.week.dow;
    this.weekDoy = settings.locale.week.doy;
    if (settings.weekNumberCalculation === "ISO") {
      this.weekDow = 1;
      this.weekDoy = 4;
    }
    if (typeof settings.firstDay === "number") {
      this.weekDow = settings.firstDay;
    }
    if (typeof settings.weekNumberCalculation === "function") {
      this.weekNumberFunc = settings.weekNumberCalculation;
    }
    this.weekText = settings.weekText != null ? settings.weekText : settings.locale.options.weekText;
    this.weekTextLong = (settings.weekTextLong != null ? settings.weekTextLong : settings.locale.options.weekTextLong) || this.weekText;
    this.cmdFormatter = settings.cmdFormatter;
    this.defaultSeparator = settings.defaultSeparator;
  }
  DateEnv2.prototype.createMarker = function(input) {
    var meta = this.createMarkerMeta(input);
    if (meta === null) {
      return null;
    }
    return meta.marker;
  };
  DateEnv2.prototype.createNowMarker = function() {
    if (this.canComputeOffset) {
      return this.timestampToMarker(new Date().valueOf());
    }
    return arrayToUtcDate(dateToLocalArray(new Date()));
  };
  DateEnv2.prototype.createMarkerMeta = function(input) {
    if (typeof input === "string") {
      return this.parse(input);
    }
    var marker = null;
    if (typeof input === "number") {
      marker = this.timestampToMarker(input);
    } else if (input instanceof Date) {
      input = input.valueOf();
      if (!isNaN(input)) {
        marker = this.timestampToMarker(input);
      }
    } else if (Array.isArray(input)) {
      marker = arrayToUtcDate(input);
    }
    if (marker === null || !isValidDate(marker)) {
      return null;
    }
    return { marker, isTimeUnspecified: false, forcedTzo: null };
  };
  DateEnv2.prototype.parse = function(s) {
    var parts = parse(s);
    if (parts === null) {
      return null;
    }
    var marker = parts.marker;
    var forcedTzo = null;
    if (parts.timeZoneOffset !== null) {
      if (this.canComputeOffset) {
        marker = this.timestampToMarker(marker.valueOf() - parts.timeZoneOffset * 60 * 1e3);
      } else {
        forcedTzo = parts.timeZoneOffset;
      }
    }
    return { marker, isTimeUnspecified: parts.isTimeUnspecified, forcedTzo };
  };
  DateEnv2.prototype.getYear = function(marker) {
    return this.calendarSystem.getMarkerYear(marker);
  };
  DateEnv2.prototype.getMonth = function(marker) {
    return this.calendarSystem.getMarkerMonth(marker);
  };
  DateEnv2.prototype.add = function(marker, dur) {
    var a = this.calendarSystem.markerToArray(marker);
    a[0] += dur.years;
    a[1] += dur.months;
    a[2] += dur.days;
    a[6] += dur.milliseconds;
    return this.calendarSystem.arrayToMarker(a);
  };
  DateEnv2.prototype.subtract = function(marker, dur) {
    var a = this.calendarSystem.markerToArray(marker);
    a[0] -= dur.years;
    a[1] -= dur.months;
    a[2] -= dur.days;
    a[6] -= dur.milliseconds;
    return this.calendarSystem.arrayToMarker(a);
  };
  DateEnv2.prototype.addYears = function(marker, n) {
    var a = this.calendarSystem.markerToArray(marker);
    a[0] += n;
    return this.calendarSystem.arrayToMarker(a);
  };
  DateEnv2.prototype.addMonths = function(marker, n) {
    var a = this.calendarSystem.markerToArray(marker);
    a[1] += n;
    return this.calendarSystem.arrayToMarker(a);
  };
  DateEnv2.prototype.diffWholeYears = function(m0, m1) {
    var calendarSystem = this.calendarSystem;
    if (timeAsMs(m0) === timeAsMs(m1) && calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1) && calendarSystem.getMarkerMonth(m0) === calendarSystem.getMarkerMonth(m1)) {
      return calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0);
    }
    return null;
  };
  DateEnv2.prototype.diffWholeMonths = function(m0, m1) {
    var calendarSystem = this.calendarSystem;
    if (timeAsMs(m0) === timeAsMs(m1) && calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1)) {
      return calendarSystem.getMarkerMonth(m1) - calendarSystem.getMarkerMonth(m0) + (calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0)) * 12;
    }
    return null;
  };
  DateEnv2.prototype.greatestWholeUnit = function(m0, m1) {
    var n = this.diffWholeYears(m0, m1);
    if (n !== null) {
      return { unit: "year", value: n };
    }
    n = this.diffWholeMonths(m0, m1);
    if (n !== null) {
      return { unit: "month", value: n };
    }
    n = diffWholeWeeks(m0, m1);
    if (n !== null) {
      return { unit: "week", value: n };
    }
    n = diffWholeDays(m0, m1);
    if (n !== null) {
      return { unit: "day", value: n };
    }
    n = diffHours(m0, m1);
    if (isInt(n)) {
      return { unit: "hour", value: n };
    }
    n = diffMinutes(m0, m1);
    if (isInt(n)) {
      return { unit: "minute", value: n };
    }
    n = diffSeconds(m0, m1);
    if (isInt(n)) {
      return { unit: "second", value: n };
    }
    return { unit: "millisecond", value: m1.valueOf() - m0.valueOf() };
  };
  DateEnv2.prototype.countDurationsBetween = function(m0, m1, d) {
    var diff;
    if (d.years) {
      diff = this.diffWholeYears(m0, m1);
      if (diff !== null) {
        return diff / asRoughYears(d);
      }
    }
    if (d.months) {
      diff = this.diffWholeMonths(m0, m1);
      if (diff !== null) {
        return diff / asRoughMonths(d);
      }
    }
    if (d.days) {
      diff = diffWholeDays(m0, m1);
      if (diff !== null) {
        return diff / asRoughDays(d);
      }
    }
    return (m1.valueOf() - m0.valueOf()) / asRoughMs(d);
  };
  DateEnv2.prototype.startOf = function(m, unit) {
    if (unit === "year") {
      return this.startOfYear(m);
    }
    if (unit === "month") {
      return this.startOfMonth(m);
    }
    if (unit === "week") {
      return this.startOfWeek(m);
    }
    if (unit === "day") {
      return startOfDay(m);
    }
    if (unit === "hour") {
      return startOfHour(m);
    }
    if (unit === "minute") {
      return startOfMinute(m);
    }
    if (unit === "second") {
      return startOfSecond(m);
    }
    return null;
  };
  DateEnv2.prototype.startOfYear = function(m) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(m)
    ]);
  };
  DateEnv2.prototype.startOfMonth = function(m) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(m),
      this.calendarSystem.getMarkerMonth(m)
    ]);
  };
  DateEnv2.prototype.startOfWeek = function(m) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(m),
      this.calendarSystem.getMarkerMonth(m),
      m.getUTCDate() - (m.getUTCDay() - this.weekDow + 7) % 7
    ]);
  };
  DateEnv2.prototype.computeWeekNumber = function(marker) {
    if (this.weekNumberFunc) {
      return this.weekNumberFunc(this.toDate(marker));
    }
    return weekOfYear(marker, this.weekDow, this.weekDoy);
  };
  DateEnv2.prototype.format = function(marker, formatter, dateOptions) {
    if (dateOptions === void 0) {
      dateOptions = {};
    }
    return formatter.format({
      marker,
      timeZoneOffset: dateOptions.forcedTzo != null ? dateOptions.forcedTzo : this.offsetForMarker(marker)
    }, this);
  };
  DateEnv2.prototype.formatRange = function(start, end, formatter, dateOptions) {
    if (dateOptions === void 0) {
      dateOptions = {};
    }
    if (dateOptions.isEndExclusive) {
      end = addMs(end, -1);
    }
    return formatter.formatRange({
      marker: start,
      timeZoneOffset: dateOptions.forcedStartTzo != null ? dateOptions.forcedStartTzo : this.offsetForMarker(start)
    }, {
      marker: end,
      timeZoneOffset: dateOptions.forcedEndTzo != null ? dateOptions.forcedEndTzo : this.offsetForMarker(end)
    }, this, dateOptions.defaultSeparator);
  };
  DateEnv2.prototype.formatIso = function(marker, extraOptions) {
    if (extraOptions === void 0) {
      extraOptions = {};
    }
    var timeZoneOffset = null;
    if (!extraOptions.omitTimeZoneOffset) {
      if (extraOptions.forcedTzo != null) {
        timeZoneOffset = extraOptions.forcedTzo;
      } else {
        timeZoneOffset = this.offsetForMarker(marker);
      }
    }
    return buildIsoString(marker, timeZoneOffset, extraOptions.omitTime);
  };
  DateEnv2.prototype.timestampToMarker = function(ms) {
    if (this.timeZone === "local") {
      return arrayToUtcDate(dateToLocalArray(new Date(ms)));
    }
    if (this.timeZone === "UTC" || !this.namedTimeZoneImpl) {
      return new Date(ms);
    }
    return arrayToUtcDate(this.namedTimeZoneImpl.timestampToArray(ms));
  };
  DateEnv2.prototype.offsetForMarker = function(m) {
    if (this.timeZone === "local") {
      return -arrayToLocalDate(dateToUtcArray(m)).getTimezoneOffset();
    }
    if (this.timeZone === "UTC") {
      return 0;
    }
    if (this.namedTimeZoneImpl) {
      return this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m));
    }
    return null;
  };
  DateEnv2.prototype.toDate = function(m, forcedTzo) {
    if (this.timeZone === "local") {
      return arrayToLocalDate(dateToUtcArray(m));
    }
    if (this.timeZone === "UTC") {
      return new Date(m.valueOf());
    }
    if (!this.namedTimeZoneImpl) {
      return new Date(m.valueOf() - (forcedTzo || 0));
    }
    return new Date(m.valueOf() - this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m)) * 1e3 * 60);
  };
  return DateEnv2;
}();
var globalLocales = [];
var MINIMAL_RAW_EN_LOCALE = {
  code: "en",
  week: {
    dow: 0,
    doy: 4
  },
  direction: "ltr",
  buttonText: {
    prev: "prev",
    next: "next",
    prevYear: "prev year",
    nextYear: "next year",
    year: "year",
    today: "today",
    month: "month",
    week: "week",
    day: "day",
    list: "list"
  },
  weekText: "W",
  weekTextLong: "Week",
  closeHint: "Close",
  timeHint: "Time",
  eventHint: "Event",
  allDayText: "all-day",
  moreLinkText: "more",
  noEventsText: "No events to display"
};
var RAW_EN_LOCALE = __assign(__assign({}, MINIMAL_RAW_EN_LOCALE), {
  buttonHints: {
    prev: "Previous $0",
    next: "Next $0",
    today: function(buttonText, unit) {
      return unit === "day" ? "Today" : "This " + buttonText;
    }
  },
  viewHint: "$0 view",
  navLinkHint: "Go to $0",
  moreLinkHint: function(eventCnt) {
    return "Show " + eventCnt + " more event" + (eventCnt === 1 ? "" : "s");
  }
});
function organizeRawLocales(explicitRawLocales) {
  var defaultCode = explicitRawLocales.length > 0 ? explicitRawLocales[0].code : "en";
  var allRawLocales = globalLocales.concat(explicitRawLocales);
  var rawLocaleMap = {
    en: RAW_EN_LOCALE
  };
  for (var _i = 0, allRawLocales_1 = allRawLocales; _i < allRawLocales_1.length; _i++) {
    var rawLocale = allRawLocales_1[_i];
    rawLocaleMap[rawLocale.code] = rawLocale;
  }
  return {
    map: rawLocaleMap,
    defaultCode
  };
}
function buildLocale(inputSingular, available) {
  if (typeof inputSingular === "object" && !Array.isArray(inputSingular)) {
    return parseLocale(inputSingular.code, [inputSingular.code], inputSingular);
  }
  return queryLocale(inputSingular, available);
}
function queryLocale(codeArg, available) {
  var codes = [].concat(codeArg || []);
  var raw = queryRawLocale(codes, available) || RAW_EN_LOCALE;
  return parseLocale(codeArg, codes, raw);
}
function queryRawLocale(codes, available) {
  for (var i = 0; i < codes.length; i += 1) {
    var parts = codes[i].toLocaleLowerCase().split("-");
    for (var j = parts.length; j > 0; j -= 1) {
      var simpleId = parts.slice(0, j).join("-");
      if (available[simpleId]) {
        return available[simpleId];
      }
    }
  }
  return null;
}
function parseLocale(codeArg, codes, raw) {
  var merged = mergeProps([MINIMAL_RAW_EN_LOCALE, raw], ["buttonText"]);
  delete merged.code;
  var week = merged.week;
  delete merged.week;
  return {
    codeArg,
    codes,
    week,
    simpleNumberFormat: new Intl.NumberFormat(codeArg),
    options: merged
  };
}
var DEF_DEFAULTS = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  display: "inverse-background",
  classNames: "fc-non-business",
  groupId: "_businessHours"
};
function parseBusinessHours(input, context) {
  return parseEvents(refineInputs(input), null, context);
}
function refineInputs(input) {
  var rawDefs;
  if (input === true) {
    rawDefs = [{}];
  } else if (Array.isArray(input)) {
    rawDefs = input.filter(function(rawDef) {
      return rawDef.daysOfWeek;
    });
  } else if (typeof input === "object" && input) {
    rawDefs = [input];
  } else {
    rawDefs = [];
  }
  rawDefs = rawDefs.map(function(rawDef) {
    return __assign(__assign({}, DEF_DEFAULTS), rawDef);
  });
  return rawDefs;
}
function intersectRects(rect1, rect2) {
  var res = {
    left: Math.max(rect1.left, rect2.left),
    right: Math.min(rect1.right, rect2.right),
    top: Math.max(rect1.top, rect2.top),
    bottom: Math.min(rect1.bottom, rect2.bottom)
  };
  if (res.left < res.right && res.top < res.bottom) {
    return res;
  }
  return false;
}
var canVGrowWithinCell;
function getCanVGrowWithinCell() {
  if (canVGrowWithinCell == null) {
    canVGrowWithinCell = computeCanVGrowWithinCell();
  }
  return canVGrowWithinCell;
}
function computeCanVGrowWithinCell() {
  if (typeof document === "undefined") {
    return true;
  }
  var el = document.createElement("div");
  el.style.position = "absolute";
  el.style.top = "0px";
  el.style.left = "0px";
  el.innerHTML = "<table><tr><td><div></div></td></tr></table>";
  el.querySelector("table").style.height = "100px";
  el.querySelector("div").style.height = "100%";
  document.body.appendChild(el);
  var div = el.querySelector("div");
  var possible = div.offsetHeight > 0;
  document.body.removeChild(el);
  return possible;
}
var EMPTY_EVENT_STORE = createEmptyEventStore();
var Splitter = function() {
  function Splitter2() {
    this.getKeysForEventDefs = memoize(this._getKeysForEventDefs);
    this.splitDateSelection = memoize(this._splitDateSpan);
    this.splitEventStore = memoize(this._splitEventStore);
    this.splitIndividualUi = memoize(this._splitIndividualUi);
    this.splitEventDrag = memoize(this._splitInteraction);
    this.splitEventResize = memoize(this._splitInteraction);
    this.eventUiBuilders = {};
  }
  Splitter2.prototype.splitProps = function(props) {
    var _this = this;
    var keyInfos = this.getKeyInfo(props);
    var defKeys = this.getKeysForEventDefs(props.eventStore);
    var dateSelections = this.splitDateSelection(props.dateSelection);
    var individualUi = this.splitIndividualUi(props.eventUiBases, defKeys);
    var eventStores = this.splitEventStore(props.eventStore, defKeys);
    var eventDrags = this.splitEventDrag(props.eventDrag);
    var eventResizes = this.splitEventResize(props.eventResize);
    var splitProps = {};
    this.eventUiBuilders = mapHash(keyInfos, function(info, key2) {
      return _this.eventUiBuilders[key2] || memoize(buildEventUiForKey);
    });
    for (var key in keyInfos) {
      var keyInfo = keyInfos[key];
      var eventStore = eventStores[key] || EMPTY_EVENT_STORE;
      var buildEventUi = this.eventUiBuilders[key];
      splitProps[key] = {
        businessHours: keyInfo.businessHours || props.businessHours,
        dateSelection: dateSelections[key] || null,
        eventStore,
        eventUiBases: buildEventUi(props.eventUiBases[""], keyInfo.ui, individualUi[key]),
        eventSelection: eventStore.instances[props.eventSelection] ? props.eventSelection : "",
        eventDrag: eventDrags[key] || null,
        eventResize: eventResizes[key] || null
      };
    }
    return splitProps;
  };
  Splitter2.prototype._splitDateSpan = function(dateSpan) {
    var dateSpans = {};
    if (dateSpan) {
      var keys = this.getKeysForDateSpan(dateSpan);
      for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        dateSpans[key] = dateSpan;
      }
    }
    return dateSpans;
  };
  Splitter2.prototype._getKeysForEventDefs = function(eventStore) {
    var _this = this;
    return mapHash(eventStore.defs, function(eventDef) {
      return _this.getKeysForEventDef(eventDef);
    });
  };
  Splitter2.prototype._splitEventStore = function(eventStore, defKeys) {
    var defs = eventStore.defs, instances = eventStore.instances;
    var splitStores = {};
    for (var defId in defs) {
      for (var _i = 0, _a = defKeys[defId]; _i < _a.length; _i++) {
        var key = _a[_i];
        if (!splitStores[key]) {
          splitStores[key] = createEmptyEventStore();
        }
        splitStores[key].defs[defId] = defs[defId];
      }
    }
    for (var instanceId in instances) {
      var instance = instances[instanceId];
      for (var _b = 0, _c = defKeys[instance.defId]; _b < _c.length; _b++) {
        var key = _c[_b];
        if (splitStores[key]) {
          splitStores[key].instances[instanceId] = instance;
        }
      }
    }
    return splitStores;
  };
  Splitter2.prototype._splitIndividualUi = function(eventUiBases, defKeys) {
    var splitHashes = {};
    for (var defId in eventUiBases) {
      if (defId) {
        for (var _i = 0, _a = defKeys[defId]; _i < _a.length; _i++) {
          var key = _a[_i];
          if (!splitHashes[key]) {
            splitHashes[key] = {};
          }
          splitHashes[key][defId] = eventUiBases[defId];
        }
      }
    }
    return splitHashes;
  };
  Splitter2.prototype._splitInteraction = function(interaction) {
    var splitStates = {};
    if (interaction) {
      var affectedStores_1 = this._splitEventStore(interaction.affectedEvents, this._getKeysForEventDefs(interaction.affectedEvents));
      var mutatedKeysByDefId = this._getKeysForEventDefs(interaction.mutatedEvents);
      var mutatedStores_1 = this._splitEventStore(interaction.mutatedEvents, mutatedKeysByDefId);
      var populate = function(key2) {
        if (!splitStates[key2]) {
          splitStates[key2] = {
            affectedEvents: affectedStores_1[key2] || EMPTY_EVENT_STORE,
            mutatedEvents: mutatedStores_1[key2] || EMPTY_EVENT_STORE,
            isEvent: interaction.isEvent
          };
        }
      };
      for (var key in affectedStores_1) {
        populate(key);
      }
      for (var key in mutatedStores_1) {
        populate(key);
      }
    }
    return splitStates;
  };
  return Splitter2;
}();
function buildEventUiForKey(allUi, eventUiForKey, individualUi) {
  var baseParts = [];
  if (allUi) {
    baseParts.push(allUi);
  }
  if (eventUiForKey) {
    baseParts.push(eventUiForKey);
  }
  var stuff = {
    "": combineEventUis(baseParts)
  };
  if (individualUi) {
    __assign(stuff, individualUi);
  }
  return stuff;
}
function getDateMeta(date, todayRange, nowDate, dateProfile) {
  return {
    dow: date.getUTCDay(),
    isDisabled: Boolean(dateProfile && !rangeContainsMarker(dateProfile.activeRange, date)),
    isOther: Boolean(dateProfile && !rangeContainsMarker(dateProfile.currentRange, date)),
    isToday: Boolean(todayRange && rangeContainsMarker(todayRange, date)),
    isPast: Boolean(nowDate ? date < nowDate : todayRange ? date < todayRange.start : false),
    isFuture: Boolean(nowDate ? date > nowDate : todayRange ? date >= todayRange.end : false)
  };
}
function getDayClassNames(meta, theme) {
  var classNames = [
    "fc-day",
    "fc-day-" + DAY_IDS[meta.dow]
  ];
  if (meta.isDisabled) {
    classNames.push("fc-day-disabled");
  } else {
    if (meta.isToday) {
      classNames.push("fc-day-today");
      classNames.push(theme.getClass("today"));
    }
    if (meta.isPast) {
      classNames.push("fc-day-past");
    }
    if (meta.isFuture) {
      classNames.push("fc-day-future");
    }
    if (meta.isOther) {
      classNames.push("fc-day-other");
    }
  }
  return classNames;
}
var DAY_FORMAT = createFormatter({ year: "numeric", month: "long", day: "numeric" });
var WEEK_FORMAT = createFormatter({ week: "long" });
function buildNavLinkAttrs(context, dateMarker, viewType, isTabbable) {
  if (viewType === void 0) {
    viewType = "day";
  }
  if (isTabbable === void 0) {
    isTabbable = true;
  }
  var dateEnv = context.dateEnv, options = context.options, calendarApi = context.calendarApi;
  var dateStr = dateEnv.format(dateMarker, viewType === "week" ? WEEK_FORMAT : DAY_FORMAT);
  if (options.navLinks) {
    var zonedDate = dateEnv.toDate(dateMarker);
    var handleInteraction = function(ev) {
      var customAction = viewType === "day" ? options.navLinkDayClick : viewType === "week" ? options.navLinkWeekClick : null;
      if (typeof customAction === "function") {
        customAction.call(calendarApi, dateEnv.toDate(dateMarker), ev);
      } else {
        if (typeof customAction === "string") {
          viewType = customAction;
        }
        calendarApi.zoomTo(dateMarker, viewType);
      }
    };
    return __assign({ title: formatWithOrdinals(options.navLinkHint, [dateStr, zonedDate], dateStr), "data-navlink": "" }, isTabbable ? createAriaClickAttrs(handleInteraction) : { onClick: handleInteraction });
  }
  return { "aria-label": dateStr };
}
var _scrollbarWidths;
function getScrollbarWidths() {
  if (!_scrollbarWidths) {
    _scrollbarWidths = computeScrollbarWidths();
  }
  return _scrollbarWidths;
}
function computeScrollbarWidths() {
  var el = document.createElement("div");
  el.style.overflow = "scroll";
  el.style.position = "absolute";
  el.style.top = "-9999px";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  var res = computeScrollbarWidthsForEl(el);
  document.body.removeChild(el);
  return res;
}
function computeScrollbarWidthsForEl(el) {
  return {
    x: el.offsetHeight - el.clientHeight,
    y: el.offsetWidth - el.clientWidth
  };
}
function computeClippedClientRect(el) {
  var clippingParents = getClippingParents(el);
  var rect = el.getBoundingClientRect();
  for (var _i = 0, clippingParents_1 = clippingParents; _i < clippingParents_1.length; _i++) {
    var clippingParent = clippingParents_1[_i];
    var intersection = intersectRects(rect, clippingParent.getBoundingClientRect());
    if (intersection) {
      rect = intersection;
    } else {
      return null;
    }
  }
  return rect;
}
function getClippingParents(el) {
  var parents = [];
  while (el instanceof HTMLElement) {
    var computedStyle = window.getComputedStyle(el);
    if (computedStyle.position === "fixed") {
      break;
    }
    if (/(auto|scroll)/.test(computedStyle.overflow + computedStyle.overflowY + computedStyle.overflowX)) {
      parents.push(el);
    }
    el = el.parentNode;
  }
  return parents;
}
function unpromisify(func, success, failure) {
  var isResolved = false;
  var wrappedSuccess = function() {
    if (!isResolved) {
      isResolved = true;
      success.apply(this, arguments);
    }
  };
  var wrappedFailure = function() {
    if (!isResolved) {
      isResolved = true;
      if (failure) {
        failure.apply(this, arguments);
      }
    }
  };
  var res = func(wrappedSuccess, wrappedFailure);
  if (res && typeof res.then === "function") {
    res.then(wrappedSuccess, wrappedFailure);
  }
}
var Emitter = function() {
  function Emitter2() {
    this.handlers = {};
    this.thisContext = null;
  }
  Emitter2.prototype.setThisContext = function(thisContext) {
    this.thisContext = thisContext;
  };
  Emitter2.prototype.setOptions = function(options) {
    this.options = options;
  };
  Emitter2.prototype.on = function(type, handler) {
    addToHash(this.handlers, type, handler);
  };
  Emitter2.prototype.off = function(type, handler) {
    removeFromHash(this.handlers, type, handler);
  };
  Emitter2.prototype.trigger = function(type) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    var attachedHandlers = this.handlers[type] || [];
    var optionHandler = this.options && this.options[type];
    var handlers = [].concat(optionHandler || [], attachedHandlers);
    for (var _a = 0, handlers_1 = handlers; _a < handlers_1.length; _a++) {
      var handler = handlers_1[_a];
      handler.apply(this.thisContext, args);
    }
  };
  Emitter2.prototype.hasHandlers = function(type) {
    return Boolean(this.handlers[type] && this.handlers[type].length || this.options && this.options[type]);
  };
  return Emitter2;
}();
function addToHash(hash, type, handler) {
  (hash[type] || (hash[type] = [])).push(handler);
}
function removeFromHash(hash, type, handler) {
  if (handler) {
    if (hash[type]) {
      hash[type] = hash[type].filter(function(func) {
        return func !== handler;
      });
    }
  } else {
    delete hash[type];
  }
}
var PositionCache = function() {
  function PositionCache2(originEl, els, isHorizontal, isVertical) {
    this.els = els;
    var originClientRect = this.originClientRect = originEl.getBoundingClientRect();
    if (isHorizontal) {
      this.buildElHorizontals(originClientRect.left);
    }
    if (isVertical) {
      this.buildElVerticals(originClientRect.top);
    }
  }
  PositionCache2.prototype.buildElHorizontals = function(originClientLeft) {
    var lefts = [];
    var rights = [];
    for (var _i = 0, _a = this.els; _i < _a.length; _i++) {
      var el = _a[_i];
      var rect = el.getBoundingClientRect();
      lefts.push(rect.left - originClientLeft);
      rights.push(rect.right - originClientLeft);
    }
    this.lefts = lefts;
    this.rights = rights;
  };
  PositionCache2.prototype.buildElVerticals = function(originClientTop) {
    var tops = [];
    var bottoms = [];
    for (var _i = 0, _a = this.els; _i < _a.length; _i++) {
      var el = _a[_i];
      var rect = el.getBoundingClientRect();
      tops.push(rect.top - originClientTop);
      bottoms.push(rect.bottom - originClientTop);
    }
    this.tops = tops;
    this.bottoms = bottoms;
  };
  PositionCache2.prototype.leftToIndex = function(leftPosition) {
    var _a = this, lefts = _a.lefts, rights = _a.rights;
    var len = lefts.length;
    var i;
    for (i = 0; i < len; i += 1) {
      if (leftPosition >= lefts[i] && leftPosition < rights[i]) {
        return i;
      }
    }
    return void 0;
  };
  PositionCache2.prototype.topToIndex = function(topPosition) {
    var _a = this, tops = _a.tops, bottoms = _a.bottoms;
    var len = tops.length;
    var i;
    for (i = 0; i < len; i += 1) {
      if (topPosition >= tops[i] && topPosition < bottoms[i]) {
        return i;
      }
    }
    return void 0;
  };
  PositionCache2.prototype.getWidth = function(leftIndex) {
    return this.rights[leftIndex] - this.lefts[leftIndex];
  };
  PositionCache2.prototype.getHeight = function(topIndex) {
    return this.bottoms[topIndex] - this.tops[topIndex];
  };
  return PositionCache2;
}();
var ScrollController = function() {
  function ScrollController2() {
  }
  ScrollController2.prototype.getMaxScrollTop = function() {
    return this.getScrollHeight() - this.getClientHeight();
  };
  ScrollController2.prototype.getMaxScrollLeft = function() {
    return this.getScrollWidth() - this.getClientWidth();
  };
  ScrollController2.prototype.canScrollVertically = function() {
    return this.getMaxScrollTop() > 0;
  };
  ScrollController2.prototype.canScrollHorizontally = function() {
    return this.getMaxScrollLeft() > 0;
  };
  ScrollController2.prototype.canScrollUp = function() {
    return this.getScrollTop() > 0;
  };
  ScrollController2.prototype.canScrollDown = function() {
    return this.getScrollTop() < this.getMaxScrollTop();
  };
  ScrollController2.prototype.canScrollLeft = function() {
    return this.getScrollLeft() > 0;
  };
  ScrollController2.prototype.canScrollRight = function() {
    return this.getScrollLeft() < this.getMaxScrollLeft();
  };
  return ScrollController2;
}();
var ElementScrollController = function(_super) {
  __extends(ElementScrollController2, _super);
  function ElementScrollController2(el) {
    var _this = _super.call(this) || this;
    _this.el = el;
    return _this;
  }
  ElementScrollController2.prototype.getScrollTop = function() {
    return this.el.scrollTop;
  };
  ElementScrollController2.prototype.getScrollLeft = function() {
    return this.el.scrollLeft;
  };
  ElementScrollController2.prototype.setScrollTop = function(top) {
    this.el.scrollTop = top;
  };
  ElementScrollController2.prototype.setScrollLeft = function(left) {
    this.el.scrollLeft = left;
  };
  ElementScrollController2.prototype.getScrollWidth = function() {
    return this.el.scrollWidth;
  };
  ElementScrollController2.prototype.getScrollHeight = function() {
    return this.el.scrollHeight;
  };
  ElementScrollController2.prototype.getClientHeight = function() {
    return this.el.clientHeight;
  };
  ElementScrollController2.prototype.getClientWidth = function() {
    return this.el.clientWidth;
  };
  return ElementScrollController2;
}(ScrollController);
var WindowScrollController = function(_super) {
  __extends(WindowScrollController2, _super);
  function WindowScrollController2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  WindowScrollController2.prototype.getScrollTop = function() {
    return window.pageYOffset;
  };
  WindowScrollController2.prototype.getScrollLeft = function() {
    return window.pageXOffset;
  };
  WindowScrollController2.prototype.setScrollTop = function(n) {
    window.scroll(window.pageXOffset, n);
  };
  WindowScrollController2.prototype.setScrollLeft = function(n) {
    window.scroll(n, window.pageYOffset);
  };
  WindowScrollController2.prototype.getScrollWidth = function() {
    return document.documentElement.scrollWidth;
  };
  WindowScrollController2.prototype.getScrollHeight = function() {
    return document.documentElement.scrollHeight;
  };
  WindowScrollController2.prototype.getClientHeight = function() {
    return document.documentElement.clientHeight;
  };
  WindowScrollController2.prototype.getClientWidth = function() {
    return document.documentElement.clientWidth;
  };
  return WindowScrollController2;
}(ScrollController);
var Theme = function() {
  function Theme2(calendarOptions) {
    if (this.iconOverrideOption) {
      this.setIconOverride(calendarOptions[this.iconOverrideOption]);
    }
  }
  Theme2.prototype.setIconOverride = function(iconOverrideHash) {
    var iconClassesCopy;
    var buttonName;
    if (typeof iconOverrideHash === "object" && iconOverrideHash) {
      iconClassesCopy = __assign({}, this.iconClasses);
      for (buttonName in iconOverrideHash) {
        iconClassesCopy[buttonName] = this.applyIconOverridePrefix(iconOverrideHash[buttonName]);
      }
      this.iconClasses = iconClassesCopy;
    } else if (iconOverrideHash === false) {
      this.iconClasses = {};
    }
  };
  Theme2.prototype.applyIconOverridePrefix = function(className) {
    var prefix = this.iconOverridePrefix;
    if (prefix && className.indexOf(prefix) !== 0) {
      className = prefix + className;
    }
    return className;
  };
  Theme2.prototype.getClass = function(key) {
    return this.classes[key] || "";
  };
  Theme2.prototype.getIconClass = function(buttonName, isRtl) {
    var className;
    if (isRtl && this.rtlIconClasses) {
      className = this.rtlIconClasses[buttonName] || this.iconClasses[buttonName];
    } else {
      className = this.iconClasses[buttonName];
    }
    if (className) {
      return this.baseIconClass + " " + className;
    }
    return "";
  };
  Theme2.prototype.getCustomButtonIconClass = function(customButtonProps) {
    var className;
    if (this.iconOverrideCustomButtonOption) {
      className = customButtonProps[this.iconOverrideCustomButtonOption];
      if (className) {
        return this.baseIconClass + " " + this.applyIconOverridePrefix(className);
      }
    }
    return "";
  };
  return Theme2;
}();
Theme.prototype.classes = {};
Theme.prototype.iconClasses = {};
Theme.prototype.baseIconClass = "";
Theme.prototype.iconOverridePrefix = "";
var ScrollResponder = function() {
  function ScrollResponder2(execFunc, emitter, scrollTime, scrollTimeReset) {
    var _this = this;
    this.execFunc = execFunc;
    this.emitter = emitter;
    this.scrollTime = scrollTime;
    this.scrollTimeReset = scrollTimeReset;
    this.handleScrollRequest = function(request) {
      _this.queuedRequest = __assign({}, _this.queuedRequest || {}, request);
      _this.drain();
    };
    emitter.on("_scrollRequest", this.handleScrollRequest);
    this.fireInitialScroll();
  }
  ScrollResponder2.prototype.detach = function() {
    this.emitter.off("_scrollRequest", this.handleScrollRequest);
  };
  ScrollResponder2.prototype.update = function(isDatesNew) {
    if (isDatesNew && this.scrollTimeReset) {
      this.fireInitialScroll();
    } else {
      this.drain();
    }
  };
  ScrollResponder2.prototype.fireInitialScroll = function() {
    this.handleScrollRequest({
      time: this.scrollTime
    });
  };
  ScrollResponder2.prototype.drain = function() {
    if (this.queuedRequest && this.execFunc(this.queuedRequest)) {
      this.queuedRequest = null;
    }
  };
  return ScrollResponder2;
}();
var ViewContextType = createContext2({});
function buildViewContext(viewSpec, viewApi, viewOptions, dateProfileGenerator, dateEnv, theme, pluginHooks, dispatch, getCurrentData, emitter, calendarApi, registerInteractiveComponent, unregisterInteractiveComponent) {
  return {
    dateEnv,
    options: viewOptions,
    pluginHooks,
    emitter,
    dispatch,
    getCurrentData,
    calendarApi,
    viewSpec,
    viewApi,
    dateProfileGenerator,
    theme,
    isRtl: viewOptions.direction === "rtl",
    addResizeHandler: function(handler) {
      emitter.on("_resize", handler);
    },
    removeResizeHandler: function(handler) {
      emitter.off("_resize", handler);
    },
    createScrollResponder: function(execFunc) {
      return new ScrollResponder(execFunc, emitter, createDuration(viewOptions.scrollTime), viewOptions.scrollTimeReset);
    },
    registerInteractiveComponent,
    unregisterInteractiveComponent
  };
}
var PureComponent = function(_super) {
  __extends(PureComponent2, _super);
  function PureComponent2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  PureComponent2.prototype.shouldComponentUpdate = function(nextProps, nextState) {
    if (this.debug) {
      console.log(getUnequalProps(nextProps, this.props), getUnequalProps(nextState, this.state));
    }
    return !compareObjs(this.props, nextProps, this.propEquality) || !compareObjs(this.state, nextState, this.stateEquality);
  };
  PureComponent2.prototype.safeSetState = function(newState) {
    if (!compareObjs(this.state, __assign(__assign({}, this.state), newState), this.stateEquality)) {
      this.setState(newState);
    }
  };
  PureComponent2.addPropsEquality = addPropsEquality;
  PureComponent2.addStateEquality = addStateEquality;
  PureComponent2.contextType = ViewContextType;
  return PureComponent2;
}(Component2);
PureComponent.prototype.propEquality = {};
PureComponent.prototype.stateEquality = {};
var BaseComponent = function(_super) {
  __extends(BaseComponent2, _super);
  function BaseComponent2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  BaseComponent2.contextType = ViewContextType;
  return BaseComponent2;
}(PureComponent);
function addPropsEquality(propEquality) {
  var hash = Object.create(this.prototype.propEquality);
  __assign(hash, propEquality);
  this.prototype.propEquality = hash;
}
function addStateEquality(stateEquality) {
  var hash = Object.create(this.prototype.stateEquality);
  __assign(hash, stateEquality);
  this.prototype.stateEquality = hash;
}
function setRef(ref, current) {
  if (typeof ref === "function") {
    ref(current);
  } else if (ref) {
    ref.current = current;
  }
}
var DateComponent = function(_super) {
  __extends(DateComponent2, _super);
  function DateComponent2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.uid = guid();
    return _this;
  }
  DateComponent2.prototype.prepareHits = function() {
  };
  DateComponent2.prototype.queryHit = function(positionLeft, positionTop, elWidth, elHeight) {
    return null;
  };
  DateComponent2.prototype.isValidSegDownEl = function(el) {
    return !this.props.eventDrag && !this.props.eventResize && !elementClosest(el, ".fc-event-mirror");
  };
  DateComponent2.prototype.isValidDateDownEl = function(el) {
    return !elementClosest(el, ".fc-event:not(.fc-bg-event)") && !elementClosest(el, ".fc-more-link") && !elementClosest(el, "a[data-navlink]") && !elementClosest(el, ".fc-popover");
  };
  return DateComponent2;
}(BaseComponent);
function createPlugin(input) {
  return {
    id: guid(),
    deps: input.deps || [],
    reducers: input.reducers || [],
    isLoadingFuncs: input.isLoadingFuncs || [],
    contextInit: [].concat(input.contextInit || []),
    eventRefiners: input.eventRefiners || {},
    eventDefMemberAdders: input.eventDefMemberAdders || [],
    eventSourceRefiners: input.eventSourceRefiners || {},
    isDraggableTransformers: input.isDraggableTransformers || [],
    eventDragMutationMassagers: input.eventDragMutationMassagers || [],
    eventDefMutationAppliers: input.eventDefMutationAppliers || [],
    dateSelectionTransformers: input.dateSelectionTransformers || [],
    datePointTransforms: input.datePointTransforms || [],
    dateSpanTransforms: input.dateSpanTransforms || [],
    views: input.views || {},
    viewPropsTransformers: input.viewPropsTransformers || [],
    isPropsValid: input.isPropsValid || null,
    externalDefTransforms: input.externalDefTransforms || [],
    viewContainerAppends: input.viewContainerAppends || [],
    eventDropTransformers: input.eventDropTransformers || [],
    componentInteractions: input.componentInteractions || [],
    calendarInteractions: input.calendarInteractions || [],
    themeClasses: input.themeClasses || {},
    eventSourceDefs: input.eventSourceDefs || [],
    cmdFormatter: input.cmdFormatter,
    recurringTypes: input.recurringTypes || [],
    namedTimeZonedImpl: input.namedTimeZonedImpl,
    initialView: input.initialView || "",
    elementDraggingImpl: input.elementDraggingImpl,
    optionChangeHandlers: input.optionChangeHandlers || {},
    scrollGridImpl: input.scrollGridImpl || null,
    contentTypeHandlers: input.contentTypeHandlers || {},
    listenerRefiners: input.listenerRefiners || {},
    optionRefiners: input.optionRefiners || {},
    propSetHandlers: input.propSetHandlers || {}
  };
}
function buildPluginHooks(pluginDefs, globalDefs) {
  var isAdded = {};
  var hooks = {
    reducers: [],
    isLoadingFuncs: [],
    contextInit: [],
    eventRefiners: {},
    eventDefMemberAdders: [],
    eventSourceRefiners: {},
    isDraggableTransformers: [],
    eventDragMutationMassagers: [],
    eventDefMutationAppliers: [],
    dateSelectionTransformers: [],
    datePointTransforms: [],
    dateSpanTransforms: [],
    views: {},
    viewPropsTransformers: [],
    isPropsValid: null,
    externalDefTransforms: [],
    viewContainerAppends: [],
    eventDropTransformers: [],
    componentInteractions: [],
    calendarInteractions: [],
    themeClasses: {},
    eventSourceDefs: [],
    cmdFormatter: null,
    recurringTypes: [],
    namedTimeZonedImpl: null,
    initialView: "",
    elementDraggingImpl: null,
    optionChangeHandlers: {},
    scrollGridImpl: null,
    contentTypeHandlers: {},
    listenerRefiners: {},
    optionRefiners: {},
    propSetHandlers: {}
  };
  function addDefs(defs) {
    for (var _i = 0, defs_1 = defs; _i < defs_1.length; _i++) {
      var def = defs_1[_i];
      if (!isAdded[def.id]) {
        isAdded[def.id] = true;
        addDefs(def.deps);
        hooks = combineHooks(hooks, def);
      }
    }
  }
  if (pluginDefs) {
    addDefs(pluginDefs);
  }
  addDefs(globalDefs);
  return hooks;
}
function buildBuildPluginHooks() {
  var currentOverrideDefs = [];
  var currentGlobalDefs = [];
  var currentHooks;
  return function(overrideDefs, globalDefs) {
    if (!currentHooks || !isArraysEqual(overrideDefs, currentOverrideDefs) || !isArraysEqual(globalDefs, currentGlobalDefs)) {
      currentHooks = buildPluginHooks(overrideDefs, globalDefs);
    }
    currentOverrideDefs = overrideDefs;
    currentGlobalDefs = globalDefs;
    return currentHooks;
  };
}
function combineHooks(hooks0, hooks1) {
  return {
    reducers: hooks0.reducers.concat(hooks1.reducers),
    isLoadingFuncs: hooks0.isLoadingFuncs.concat(hooks1.isLoadingFuncs),
    contextInit: hooks0.contextInit.concat(hooks1.contextInit),
    eventRefiners: __assign(__assign({}, hooks0.eventRefiners), hooks1.eventRefiners),
    eventDefMemberAdders: hooks0.eventDefMemberAdders.concat(hooks1.eventDefMemberAdders),
    eventSourceRefiners: __assign(__assign({}, hooks0.eventSourceRefiners), hooks1.eventSourceRefiners),
    isDraggableTransformers: hooks0.isDraggableTransformers.concat(hooks1.isDraggableTransformers),
    eventDragMutationMassagers: hooks0.eventDragMutationMassagers.concat(hooks1.eventDragMutationMassagers),
    eventDefMutationAppliers: hooks0.eventDefMutationAppliers.concat(hooks1.eventDefMutationAppliers),
    dateSelectionTransformers: hooks0.dateSelectionTransformers.concat(hooks1.dateSelectionTransformers),
    datePointTransforms: hooks0.datePointTransforms.concat(hooks1.datePointTransforms),
    dateSpanTransforms: hooks0.dateSpanTransforms.concat(hooks1.dateSpanTransforms),
    views: __assign(__assign({}, hooks0.views), hooks1.views),
    viewPropsTransformers: hooks0.viewPropsTransformers.concat(hooks1.viewPropsTransformers),
    isPropsValid: hooks1.isPropsValid || hooks0.isPropsValid,
    externalDefTransforms: hooks0.externalDefTransforms.concat(hooks1.externalDefTransforms),
    viewContainerAppends: hooks0.viewContainerAppends.concat(hooks1.viewContainerAppends),
    eventDropTransformers: hooks0.eventDropTransformers.concat(hooks1.eventDropTransformers),
    calendarInteractions: hooks0.calendarInteractions.concat(hooks1.calendarInteractions),
    componentInteractions: hooks0.componentInteractions.concat(hooks1.componentInteractions),
    themeClasses: __assign(__assign({}, hooks0.themeClasses), hooks1.themeClasses),
    eventSourceDefs: hooks0.eventSourceDefs.concat(hooks1.eventSourceDefs),
    cmdFormatter: hooks1.cmdFormatter || hooks0.cmdFormatter,
    recurringTypes: hooks0.recurringTypes.concat(hooks1.recurringTypes),
    namedTimeZonedImpl: hooks1.namedTimeZonedImpl || hooks0.namedTimeZonedImpl,
    initialView: hooks0.initialView || hooks1.initialView,
    elementDraggingImpl: hooks0.elementDraggingImpl || hooks1.elementDraggingImpl,
    optionChangeHandlers: __assign(__assign({}, hooks0.optionChangeHandlers), hooks1.optionChangeHandlers),
    scrollGridImpl: hooks1.scrollGridImpl || hooks0.scrollGridImpl,
    contentTypeHandlers: __assign(__assign({}, hooks0.contentTypeHandlers), hooks1.contentTypeHandlers),
    listenerRefiners: __assign(__assign({}, hooks0.listenerRefiners), hooks1.listenerRefiners),
    optionRefiners: __assign(__assign({}, hooks0.optionRefiners), hooks1.optionRefiners),
    propSetHandlers: __assign(__assign({}, hooks0.propSetHandlers), hooks1.propSetHandlers)
  };
}
var StandardTheme = function(_super) {
  __extends(StandardTheme2, _super);
  function StandardTheme2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return StandardTheme2;
}(Theme);
StandardTheme.prototype.classes = {
  root: "fc-theme-standard",
  tableCellShaded: "fc-cell-shaded",
  buttonGroup: "fc-button-group",
  button: "fc-button fc-button-primary",
  buttonActive: "fc-button-active"
};
StandardTheme.prototype.baseIconClass = "fc-icon";
StandardTheme.prototype.iconClasses = {
  close: "fc-icon-x",
  prev: "fc-icon-chevron-left",
  next: "fc-icon-chevron-right",
  prevYear: "fc-icon-chevrons-left",
  nextYear: "fc-icon-chevrons-right"
};
StandardTheme.prototype.rtlIconClasses = {
  prev: "fc-icon-chevron-right",
  next: "fc-icon-chevron-left",
  prevYear: "fc-icon-chevrons-right",
  nextYear: "fc-icon-chevrons-left"
};
StandardTheme.prototype.iconOverrideOption = "buttonIcons";
StandardTheme.prototype.iconOverrideCustomButtonOption = "icon";
StandardTheme.prototype.iconOverridePrefix = "fc-icon-";
function compileViewDefs(defaultConfigs, overrideConfigs) {
  var hash = {};
  var viewType;
  for (viewType in defaultConfigs) {
    ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
  }
  for (viewType in overrideConfigs) {
    ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
  }
  return hash;
}
function ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
  if (hash[viewType]) {
    return hash[viewType];
  }
  var viewDef = buildViewDef(viewType, hash, defaultConfigs, overrideConfigs);
  if (viewDef) {
    hash[viewType] = viewDef;
  }
  return viewDef;
}
function buildViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
  var defaultConfig = defaultConfigs[viewType];
  var overrideConfig = overrideConfigs[viewType];
  var queryProp = function(name) {
    return defaultConfig && defaultConfig[name] !== null ? defaultConfig[name] : overrideConfig && overrideConfig[name] !== null ? overrideConfig[name] : null;
  };
  var theComponent = queryProp("component");
  var superType = queryProp("superType");
  var superDef = null;
  if (superType) {
    if (superType === viewType) {
      throw new Error("Can't have a custom view type that references itself");
    }
    superDef = ensureViewDef(superType, hash, defaultConfigs, overrideConfigs);
  }
  if (!theComponent && superDef) {
    theComponent = superDef.component;
  }
  if (!theComponent) {
    return null;
  }
  return {
    type: viewType,
    component: theComponent,
    defaults: __assign(__assign({}, superDef ? superDef.defaults : {}), defaultConfig ? defaultConfig.rawOptions : {}),
    overrides: __assign(__assign({}, superDef ? superDef.overrides : {}), overrideConfig ? overrideConfig.rawOptions : {})
  };
}
var RenderHook = function(_super) {
  __extends(RenderHook2, _super);
  function RenderHook2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.rootElRef = createRef2();
    _this.handleRootEl = function(el) {
      setRef(_this.rootElRef, el);
      if (_this.props.elRef) {
        setRef(_this.props.elRef, el);
      }
    };
    return _this;
  }
  RenderHook2.prototype.render = function() {
    var _this = this;
    var props = this.props;
    var hookProps = props.hookProps;
    return createElement2(MountHook, { hookProps, didMount: props.didMount, willUnmount: props.willUnmount, elRef: this.handleRootEl }, function(rootElRef) {
      return createElement2(ContentHook, { hookProps, content: props.content, defaultContent: props.defaultContent, backupElRef: _this.rootElRef }, function(innerElRef, innerContent) {
        return props.children(rootElRef, normalizeClassNames(props.classNames, hookProps), innerElRef, innerContent);
      });
    });
  };
  return RenderHook2;
}(BaseComponent);
var CustomContentRenderContext = createContext2(0);
function ContentHook(props) {
  return createElement2(CustomContentRenderContext.Consumer, null, function(renderId) {
    return createElement2(ContentHookInner, __assign({ renderId }, props));
  });
}
var ContentHookInner = function(_super) {
  __extends(ContentHookInner2, _super);
  function ContentHookInner2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.innerElRef = createRef2();
    return _this;
  }
  ContentHookInner2.prototype.render = function() {
    return this.props.children(this.innerElRef, this.renderInnerContent());
  };
  ContentHookInner2.prototype.componentDidMount = function() {
    this.updateCustomContent();
  };
  ContentHookInner2.prototype.componentDidUpdate = function() {
    this.updateCustomContent();
  };
  ContentHookInner2.prototype.componentWillUnmount = function() {
    if (this.customContentInfo && this.customContentInfo.destroy) {
      this.customContentInfo.destroy();
    }
  };
  ContentHookInner2.prototype.renderInnerContent = function() {
    var customContentInfo = this.customContentInfo;
    var innerContent = this.getInnerContent();
    var meta = this.getContentMeta(innerContent);
    if (!customContentInfo || customContentInfo.contentKey !== meta.contentKey) {
      if (customContentInfo) {
        if (customContentInfo.destroy) {
          customContentInfo.destroy();
        }
        customContentInfo = this.customContentInfo = null;
      }
      if (meta.contentKey) {
        customContentInfo = this.customContentInfo = __assign({ contentKey: meta.contentKey, contentVal: innerContent[meta.contentKey] }, meta.buildLifecycleFuncs());
      }
    } else if (customContentInfo) {
      customContentInfo.contentVal = innerContent[meta.contentKey];
    }
    return customContentInfo ? [] : innerContent;
  };
  ContentHookInner2.prototype.getInnerContent = function() {
    var props = this.props;
    var innerContent = normalizeContent(props.content, props.hookProps);
    if (innerContent === void 0) {
      innerContent = normalizeContent(props.defaultContent, props.hookProps);
    }
    return innerContent == null ? null : innerContent;
  };
  ContentHookInner2.prototype.getContentMeta = function(innerContent) {
    var contentTypeHandlers = this.context.pluginHooks.contentTypeHandlers;
    var contentKey = "";
    var buildLifecycleFuncs = null;
    if (innerContent) {
      for (var searchKey in contentTypeHandlers) {
        if (innerContent[searchKey] !== void 0) {
          contentKey = searchKey;
          buildLifecycleFuncs = contentTypeHandlers[searchKey];
          break;
        }
      }
    }
    return { contentKey, buildLifecycleFuncs };
  };
  ContentHookInner2.prototype.updateCustomContent = function() {
    if (this.customContentInfo) {
      this.customContentInfo.render(
        this.innerElRef.current || this.props.backupElRef.current,
        this.customContentInfo.contentVal
      );
    }
  };
  return ContentHookInner2;
}(BaseComponent);
var MountHook = function(_super) {
  __extends(MountHook2, _super);
  function MountHook2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.handleRootEl = function(rootEl) {
      _this.rootEl = rootEl;
      if (_this.props.elRef) {
        setRef(_this.props.elRef, rootEl);
      }
    };
    return _this;
  }
  MountHook2.prototype.render = function() {
    return this.props.children(this.handleRootEl);
  };
  MountHook2.prototype.componentDidMount = function() {
    var callback = this.props.didMount;
    if (callback) {
      callback(__assign(__assign({}, this.props.hookProps), { el: this.rootEl }));
    }
  };
  MountHook2.prototype.componentWillUnmount = function() {
    var callback = this.props.willUnmount;
    if (callback) {
      callback(__assign(__assign({}, this.props.hookProps), { el: this.rootEl }));
    }
  };
  return MountHook2;
}(BaseComponent);
function buildClassNameNormalizer() {
  var currentGenerator;
  var currentHookProps;
  var currentClassNames = [];
  return function(generator, hookProps) {
    if (!currentHookProps || !isPropsEqual(currentHookProps, hookProps) || generator !== currentGenerator) {
      currentGenerator = generator;
      currentHookProps = hookProps;
      currentClassNames = normalizeClassNames(generator, hookProps);
    }
    return currentClassNames;
  };
}
function normalizeClassNames(classNames, hookProps) {
  if (typeof classNames === "function") {
    classNames = classNames(hookProps);
  }
  return parseClassNames(classNames);
}
function normalizeContent(input, hookProps) {
  if (typeof input === "function") {
    return input(hookProps, createElement2);
  }
  return input;
}
var ViewRoot = function(_super) {
  __extends(ViewRoot2, _super);
  function ViewRoot2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.normalizeClassNames = buildClassNameNormalizer();
    return _this;
  }
  ViewRoot2.prototype.render = function() {
    var _a = this, props = _a.props, context = _a.context;
    var options = context.options;
    var hookProps = { view: context.viewApi };
    var customClassNames = this.normalizeClassNames(options.viewClassNames, hookProps);
    return createElement2(MountHook, { hookProps, didMount: options.viewDidMount, willUnmount: options.viewWillUnmount, elRef: props.elRef }, function(rootElRef) {
      return props.children(rootElRef, ["fc-" + props.viewSpec.type + "-view", "fc-view"].concat(customClassNames));
    });
  };
  return ViewRoot2;
}(BaseComponent);
function parseViewConfigs(inputs) {
  return mapHash(inputs, parseViewConfig);
}
function parseViewConfig(input) {
  var rawOptions = typeof input === "function" ? { component: input } : input;
  var component = rawOptions.component;
  if (rawOptions.content) {
    component = createViewHookComponent(rawOptions);
  }
  return {
    superType: rawOptions.type,
    component,
    rawOptions
  };
}
function createViewHookComponent(options) {
  return function(viewProps) {
    return createElement2(ViewContextType.Consumer, null, function(context) {
      return createElement2(ViewRoot, { viewSpec: context.viewSpec }, function(viewElRef, viewClassNames) {
        var hookProps = __assign(__assign({}, viewProps), { nextDayThreshold: context.options.nextDayThreshold });
        return createElement2(RenderHook, { hookProps, classNames: options.classNames, content: options.content, didMount: options.didMount, willUnmount: options.willUnmount, elRef: viewElRef }, function(rootElRef, customClassNames, innerElRef, innerContent) {
          return createElement2("div", { className: viewClassNames.concat(customClassNames).join(" "), ref: rootElRef }, innerContent);
        });
      });
    });
  };
}
function buildViewSpecs(defaultInputs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
  var defaultConfigs = parseViewConfigs(defaultInputs);
  var overrideConfigs = parseViewConfigs(optionOverrides.views);
  var viewDefs = compileViewDefs(defaultConfigs, overrideConfigs);
  return mapHash(viewDefs, function(viewDef) {
    return buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults);
  });
}
function buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
  var durationInput = viewDef.overrides.duration || viewDef.defaults.duration || dynamicOptionOverrides.duration || optionOverrides.duration;
  var duration = null;
  var durationUnit = "";
  var singleUnit = "";
  var singleUnitOverrides = {};
  if (durationInput) {
    duration = createDurationCached(durationInput);
    if (duration) {
      var denom = greatestDurationDenominator(duration);
      durationUnit = denom.unit;
      if (denom.value === 1) {
        singleUnit = durationUnit;
        singleUnitOverrides = overrideConfigs[durationUnit] ? overrideConfigs[durationUnit].rawOptions : {};
      }
    }
  }
  var queryButtonText = function(optionsSubset) {
    var buttonTextMap = optionsSubset.buttonText || {};
    var buttonTextKey = viewDef.defaults.buttonTextKey;
    if (buttonTextKey != null && buttonTextMap[buttonTextKey] != null) {
      return buttonTextMap[buttonTextKey];
    }
    if (buttonTextMap[viewDef.type] != null) {
      return buttonTextMap[viewDef.type];
    }
    if (buttonTextMap[singleUnit] != null) {
      return buttonTextMap[singleUnit];
    }
    return null;
  };
  var queryButtonTitle = function(optionsSubset) {
    var buttonHints = optionsSubset.buttonHints || {};
    var buttonKey = viewDef.defaults.buttonTextKey;
    if (buttonKey != null && buttonHints[buttonKey] != null) {
      return buttonHints[buttonKey];
    }
    if (buttonHints[viewDef.type] != null) {
      return buttonHints[viewDef.type];
    }
    if (buttonHints[singleUnit] != null) {
      return buttonHints[singleUnit];
    }
    return null;
  };
  return {
    type: viewDef.type,
    component: viewDef.component,
    duration,
    durationUnit,
    singleUnit,
    optionDefaults: viewDef.defaults,
    optionOverrides: __assign(__assign({}, singleUnitOverrides), viewDef.overrides),
    buttonTextOverride: queryButtonText(dynamicOptionOverrides) || queryButtonText(optionOverrides) || viewDef.overrides.buttonText,
    buttonTextDefault: queryButtonText(localeDefaults) || viewDef.defaults.buttonText || queryButtonText(BASE_OPTION_DEFAULTS) || viewDef.type,
    buttonTitleOverride: queryButtonTitle(dynamicOptionOverrides) || queryButtonTitle(optionOverrides) || viewDef.overrides.buttonHint,
    buttonTitleDefault: queryButtonTitle(localeDefaults) || viewDef.defaults.buttonHint || queryButtonTitle(BASE_OPTION_DEFAULTS)
  };
}
var durationInputMap = {};
function createDurationCached(durationInput) {
  var json = JSON.stringify(durationInput);
  var res = durationInputMap[json];
  if (res === void 0) {
    res = createDuration(durationInput);
    durationInputMap[json] = res;
  }
  return res;
}
var DateProfileGenerator = function() {
  function DateProfileGenerator2(props) {
    this.props = props;
    this.nowDate = getNow(props.nowInput, props.dateEnv);
    this.initHiddenDays();
  }
  DateProfileGenerator2.prototype.buildPrev = function(currentDateProfile, currentDate, forceToValid) {
    var dateEnv = this.props.dateEnv;
    var prevDate = dateEnv.subtract(
      dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit),
      currentDateProfile.dateIncrement
    );
    return this.build(prevDate, -1, forceToValid);
  };
  DateProfileGenerator2.prototype.buildNext = function(currentDateProfile, currentDate, forceToValid) {
    var dateEnv = this.props.dateEnv;
    var nextDate = dateEnv.add(
      dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit),
      currentDateProfile.dateIncrement
    );
    return this.build(nextDate, 1, forceToValid);
  };
  DateProfileGenerator2.prototype.build = function(currentDate, direction, forceToValid) {
    if (forceToValid === void 0) {
      forceToValid = true;
    }
    var props = this.props;
    var validRange;
    var currentInfo;
    var isRangeAllDay;
    var renderRange;
    var activeRange;
    var isValid;
    validRange = this.buildValidRange();
    validRange = this.trimHiddenDays(validRange);
    if (forceToValid) {
      currentDate = constrainMarkerToRange(currentDate, validRange);
    }
    currentInfo = this.buildCurrentRangeInfo(currentDate, direction);
    isRangeAllDay = /^(year|month|week|day)$/.test(currentInfo.unit);
    renderRange = this.buildRenderRange(this.trimHiddenDays(currentInfo.range), currentInfo.unit, isRangeAllDay);
    renderRange = this.trimHiddenDays(renderRange);
    activeRange = renderRange;
    if (!props.showNonCurrentDates) {
      activeRange = intersectRanges(activeRange, currentInfo.range);
    }
    activeRange = this.adjustActiveRange(activeRange);
    activeRange = intersectRanges(activeRange, validRange);
    isValid = rangesIntersect(currentInfo.range, validRange);
    return {
      validRange,
      currentRange: currentInfo.range,
      currentRangeUnit: currentInfo.unit,
      isRangeAllDay,
      activeRange,
      renderRange,
      slotMinTime: props.slotMinTime,
      slotMaxTime: props.slotMaxTime,
      isValid,
      dateIncrement: this.buildDateIncrement(currentInfo.duration)
    };
  };
  DateProfileGenerator2.prototype.buildValidRange = function() {
    var input = this.props.validRangeInput;
    var simpleInput = typeof input === "function" ? input.call(this.props.calendarApi, this.nowDate) : input;
    return this.refineRange(simpleInput) || { start: null, end: null };
  };
  DateProfileGenerator2.prototype.buildCurrentRangeInfo = function(date, direction) {
    var props = this.props;
    var duration = null;
    var unit = null;
    var range = null;
    var dayCount;
    if (props.duration) {
      duration = props.duration;
      unit = props.durationUnit;
      range = this.buildRangeFromDuration(date, direction, duration, unit);
    } else if (dayCount = this.props.dayCount) {
      unit = "day";
      range = this.buildRangeFromDayCount(date, direction, dayCount);
    } else if (range = this.buildCustomVisibleRange(date)) {
      unit = props.dateEnv.greatestWholeUnit(range.start, range.end).unit;
    } else {
      duration = this.getFallbackDuration();
      unit = greatestDurationDenominator(duration).unit;
      range = this.buildRangeFromDuration(date, direction, duration, unit);
    }
    return { duration, unit, range };
  };
  DateProfileGenerator2.prototype.getFallbackDuration = function() {
    return createDuration({ day: 1 });
  };
  DateProfileGenerator2.prototype.adjustActiveRange = function(range) {
    var _a = this.props, dateEnv = _a.dateEnv, usesMinMaxTime = _a.usesMinMaxTime, slotMinTime = _a.slotMinTime, slotMaxTime = _a.slotMaxTime;
    var start = range.start, end = range.end;
    if (usesMinMaxTime) {
      if (asRoughDays(slotMinTime) < 0) {
        start = startOfDay(start);
        start = dateEnv.add(start, slotMinTime);
      }
      if (asRoughDays(slotMaxTime) > 1) {
        end = startOfDay(end);
        end = addDays(end, -1);
        end = dateEnv.add(end, slotMaxTime);
      }
    }
    return { start, end };
  };
  DateProfileGenerator2.prototype.buildRangeFromDuration = function(date, direction, duration, unit) {
    var _a = this.props, dateEnv = _a.dateEnv, dateAlignment = _a.dateAlignment;
    var start;
    var end;
    var res;
    if (!dateAlignment) {
      var dateIncrement = this.props.dateIncrement;
      if (dateIncrement) {
        if (asRoughMs(dateIncrement) < asRoughMs(duration)) {
          dateAlignment = greatestDurationDenominator(dateIncrement).unit;
        } else {
          dateAlignment = unit;
        }
      } else {
        dateAlignment = unit;
      }
    }
    if (asRoughDays(duration) <= 1) {
      if (this.isHiddenDay(start)) {
        start = this.skipHiddenDays(start, direction);
        start = startOfDay(start);
      }
    }
    function computeRes() {
      start = dateEnv.startOf(date, dateAlignment);
      end = dateEnv.add(start, duration);
      res = { start, end };
    }
    computeRes();
    if (!this.trimHiddenDays(res)) {
      date = this.skipHiddenDays(date, direction);
      computeRes();
    }
    return res;
  };
  DateProfileGenerator2.prototype.buildRangeFromDayCount = function(date, direction, dayCount) {
    var _a = this.props, dateEnv = _a.dateEnv, dateAlignment = _a.dateAlignment;
    var runningCount = 0;
    var start = date;
    var end;
    if (dateAlignment) {
      start = dateEnv.startOf(start, dateAlignment);
    }
    start = startOfDay(start);
    start = this.skipHiddenDays(start, direction);
    end = start;
    do {
      end = addDays(end, 1);
      if (!this.isHiddenDay(end)) {
        runningCount += 1;
      }
    } while (runningCount < dayCount);
    return { start, end };
  };
  DateProfileGenerator2.prototype.buildCustomVisibleRange = function(date) {
    var props = this.props;
    var input = props.visibleRangeInput;
    var simpleInput = typeof input === "function" ? input.call(props.calendarApi, props.dateEnv.toDate(date)) : input;
    var range = this.refineRange(simpleInput);
    if (range && (range.start == null || range.end == null)) {
      return null;
    }
    return range;
  };
  DateProfileGenerator2.prototype.buildRenderRange = function(currentRange, currentRangeUnit, isRangeAllDay) {
    return currentRange;
  };
  DateProfileGenerator2.prototype.buildDateIncrement = function(fallback) {
    var dateIncrement = this.props.dateIncrement;
    var customAlignment;
    if (dateIncrement) {
      return dateIncrement;
    }
    if (customAlignment = this.props.dateAlignment) {
      return createDuration(1, customAlignment);
    }
    if (fallback) {
      return fallback;
    }
    return createDuration({ days: 1 });
  };
  DateProfileGenerator2.prototype.refineRange = function(rangeInput) {
    if (rangeInput) {
      var range = parseRange(rangeInput, this.props.dateEnv);
      if (range) {
        range = computeVisibleDayRange(range);
      }
      return range;
    }
    return null;
  };
  DateProfileGenerator2.prototype.initHiddenDays = function() {
    var hiddenDays = this.props.hiddenDays || [];
    var isHiddenDayHash = [];
    var dayCnt = 0;
    var i;
    if (this.props.weekends === false) {
      hiddenDays.push(0, 6);
    }
    for (i = 0; i < 7; i += 1) {
      if (!(isHiddenDayHash[i] = hiddenDays.indexOf(i) !== -1)) {
        dayCnt += 1;
      }
    }
    if (!dayCnt) {
      throw new Error("invalid hiddenDays");
    }
    this.isHiddenDayHash = isHiddenDayHash;
  };
  DateProfileGenerator2.prototype.trimHiddenDays = function(range) {
    var start = range.start, end = range.end;
    if (start) {
      start = this.skipHiddenDays(start);
    }
    if (end) {
      end = this.skipHiddenDays(end, -1, true);
    }
    if (start == null || end == null || start < end) {
      return { start, end };
    }
    return null;
  };
  DateProfileGenerator2.prototype.isHiddenDay = function(day) {
    if (day instanceof Date) {
      day = day.getUTCDay();
    }
    return this.isHiddenDayHash[day];
  };
  DateProfileGenerator2.prototype.skipHiddenDays = function(date, inc, isExclusive) {
    if (inc === void 0) {
      inc = 1;
    }
    if (isExclusive === void 0) {
      isExclusive = false;
    }
    while (this.isHiddenDayHash[(date.getUTCDay() + (isExclusive ? inc : 0) + 7) % 7]) {
      date = addDays(date, inc);
    }
    return date;
  };
  return DateProfileGenerator2;
}();
function reduceViewType(viewType, action) {
  switch (action.type) {
    case "CHANGE_VIEW_TYPE":
      viewType = action.viewType;
  }
  return viewType;
}
function reduceDynamicOptionOverrides(dynamicOptionOverrides, action) {
  var _a;
  switch (action.type) {
    case "SET_OPTION":
      return __assign(__assign({}, dynamicOptionOverrides), (_a = {}, _a[action.optionName] = action.rawOptionValue, _a));
    default:
      return dynamicOptionOverrides;
  }
}
function reduceDateProfile(currentDateProfile, action, currentDate, dateProfileGenerator) {
  var dp;
  switch (action.type) {
    case "CHANGE_VIEW_TYPE":
      return dateProfileGenerator.build(action.dateMarker || currentDate);
    case "CHANGE_DATE":
      return dateProfileGenerator.build(action.dateMarker);
    case "PREV":
      dp = dateProfileGenerator.buildPrev(currentDateProfile, currentDate);
      if (dp.isValid) {
        return dp;
      }
      break;
    case "NEXT":
      dp = dateProfileGenerator.buildNext(currentDateProfile, currentDate);
      if (dp.isValid) {
        return dp;
      }
      break;
  }
  return currentDateProfile;
}
function initEventSources(calendarOptions, dateProfile, context) {
  var activeRange = dateProfile ? dateProfile.activeRange : null;
  return addSources({}, parseInitialSources(calendarOptions, context), activeRange, context);
}
function reduceEventSources(eventSources, action, dateProfile, context) {
  var activeRange = dateProfile ? dateProfile.activeRange : null;
  switch (action.type) {
    case "ADD_EVENT_SOURCES":
      return addSources(eventSources, action.sources, activeRange, context);
    case "REMOVE_EVENT_SOURCE":
      return removeSource(eventSources, action.sourceId);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      if (dateProfile) {
        return fetchDirtySources(eventSources, activeRange, context);
      }
      return eventSources;
    case "FETCH_EVENT_SOURCES":
      return fetchSourcesByIds(eventSources, action.sourceIds ? arrayToHash(action.sourceIds) : excludeStaticSources(eventSources, context), activeRange, action.isRefetch || false, context);
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return receiveResponse(eventSources, action.sourceId, action.fetchId, action.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return eventSources;
  }
}
function reduceEventSourcesNewTimeZone(eventSources, dateProfile, context) {
  var activeRange = dateProfile ? dateProfile.activeRange : null;
  return fetchSourcesByIds(eventSources, excludeStaticSources(eventSources, context), activeRange, true, context);
}
function computeEventSourcesLoading(eventSources) {
  for (var sourceId in eventSources) {
    if (eventSources[sourceId].isFetching) {
      return true;
    }
  }
  return false;
}
function addSources(eventSourceHash, sources, fetchRange, context) {
  var hash = {};
  for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
    var source = sources_1[_i];
    hash[source.sourceId] = source;
  }
  if (fetchRange) {
    hash = fetchDirtySources(hash, fetchRange, context);
  }
  return __assign(__assign({}, eventSourceHash), hash);
}
function removeSource(eventSourceHash, sourceId) {
  return filterHash(eventSourceHash, function(eventSource) {
    return eventSource.sourceId !== sourceId;
  });
}
function fetchDirtySources(sourceHash, fetchRange, context) {
  return fetchSourcesByIds(sourceHash, filterHash(sourceHash, function(eventSource) {
    return isSourceDirty(eventSource, fetchRange, context);
  }), fetchRange, false, context);
}
function isSourceDirty(eventSource, fetchRange, context) {
  if (!doesSourceNeedRange(eventSource, context)) {
    return !eventSource.latestFetchId;
  }
  return !context.options.lazyFetching || !eventSource.fetchRange || eventSource.isFetching || fetchRange.start < eventSource.fetchRange.start || fetchRange.end > eventSource.fetchRange.end;
}
function fetchSourcesByIds(prevSources, sourceIdHash, fetchRange, isRefetch, context) {
  var nextSources = {};
  for (var sourceId in prevSources) {
    var source = prevSources[sourceId];
    if (sourceIdHash[sourceId]) {
      nextSources[sourceId] = fetchSource(source, fetchRange, isRefetch, context);
    } else {
      nextSources[sourceId] = source;
    }
  }
  return nextSources;
}
function fetchSource(eventSource, fetchRange, isRefetch, context) {
  var options = context.options, calendarApi = context.calendarApi;
  var sourceDef = context.pluginHooks.eventSourceDefs[eventSource.sourceDefId];
  var fetchId = guid();
  sourceDef.fetch({
    eventSource,
    range: fetchRange,
    isRefetch,
    context
  }, function(res) {
    var rawEvents = res.rawEvents;
    if (options.eventSourceSuccess) {
      rawEvents = options.eventSourceSuccess.call(calendarApi, rawEvents, res.xhr) || rawEvents;
    }
    if (eventSource.success) {
      rawEvents = eventSource.success.call(calendarApi, rawEvents, res.xhr) || rawEvents;
    }
    context.dispatch({
      type: "RECEIVE_EVENTS",
      sourceId: eventSource.sourceId,
      fetchId,
      fetchRange,
      rawEvents
    });
  }, function(error) {
    console.warn(error.message, error);
    if (options.eventSourceFailure) {
      options.eventSourceFailure.call(calendarApi, error);
    }
    if (eventSource.failure) {
      eventSource.failure(error);
    }
    context.dispatch({
      type: "RECEIVE_EVENT_ERROR",
      sourceId: eventSource.sourceId,
      fetchId,
      fetchRange,
      error
    });
  });
  return __assign(__assign({}, eventSource), { isFetching: true, latestFetchId: fetchId });
}
function receiveResponse(sourceHash, sourceId, fetchId, fetchRange) {
  var _a;
  var eventSource = sourceHash[sourceId];
  if (eventSource && fetchId === eventSource.latestFetchId) {
    return __assign(__assign({}, sourceHash), (_a = {}, _a[sourceId] = __assign(__assign({}, eventSource), { isFetching: false, fetchRange }), _a));
  }
  return sourceHash;
}
function excludeStaticSources(eventSources, context) {
  return filterHash(eventSources, function(eventSource) {
    return doesSourceNeedRange(eventSource, context);
  });
}
function parseInitialSources(rawOptions, context) {
  var refiners = buildEventSourceRefiners(context);
  var rawSources = [].concat(rawOptions.eventSources || []);
  var sources = [];
  if (rawOptions.initialEvents) {
    rawSources.unshift(rawOptions.initialEvents);
  }
  if (rawOptions.events) {
    rawSources.unshift(rawOptions.events);
  }
  for (var _i = 0, rawSources_1 = rawSources; _i < rawSources_1.length; _i++) {
    var rawSource = rawSources_1[_i];
    var source = parseEventSource(rawSource, context, refiners);
    if (source) {
      sources.push(source);
    }
  }
  return sources;
}
function doesSourceNeedRange(eventSource, context) {
  var defs = context.pluginHooks.eventSourceDefs;
  return !defs[eventSource.sourceDefId].ignoreRange;
}
function reduceEventStore(eventStore, action, eventSources, dateProfile, context) {
  switch (action.type) {
    case "RECEIVE_EVENTS":
      return receiveRawEvents(eventStore, eventSources[action.sourceId], action.fetchId, action.fetchRange, action.rawEvents, context);
    case "ADD_EVENTS":
      return addEvent(
        eventStore,
        action.eventStore,
        dateProfile ? dateProfile.activeRange : null,
        context
      );
    case "RESET_EVENTS":
      return action.eventStore;
    case "MERGE_EVENTS":
      return mergeEventStores(eventStore, action.eventStore);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      if (dateProfile) {
        return expandRecurring(eventStore, dateProfile.activeRange, context);
      }
      return eventStore;
    case "REMOVE_EVENTS":
      return excludeSubEventStore(eventStore, action.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return excludeEventsBySourceId(eventStore, action.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return filterEventStoreDefs(eventStore, function(eventDef) {
        return !eventDef.sourceId;
      });
    case "REMOVE_ALL_EVENTS":
      return createEmptyEventStore();
    default:
      return eventStore;
  }
}
function receiveRawEvents(eventStore, eventSource, fetchId, fetchRange, rawEvents, context) {
  if (eventSource && fetchId === eventSource.latestFetchId) {
    var subset = parseEvents(transformRawEvents(rawEvents, eventSource, context), eventSource, context);
    if (fetchRange) {
      subset = expandRecurring(subset, fetchRange, context);
    }
    return mergeEventStores(excludeEventsBySourceId(eventStore, eventSource.sourceId), subset);
  }
  return eventStore;
}
function transformRawEvents(rawEvents, eventSource, context) {
  var calEachTransform = context.options.eventDataTransform;
  var sourceEachTransform = eventSource ? eventSource.eventDataTransform : null;
  if (sourceEachTransform) {
    rawEvents = transformEachRawEvent(rawEvents, sourceEachTransform);
  }
  if (calEachTransform) {
    rawEvents = transformEachRawEvent(rawEvents, calEachTransform);
  }
  return rawEvents;
}
function transformEachRawEvent(rawEvents, func) {
  var refinedEvents;
  if (!func) {
    refinedEvents = rawEvents;
  } else {
    refinedEvents = [];
    for (var _i = 0, rawEvents_1 = rawEvents; _i < rawEvents_1.length; _i++) {
      var rawEvent = rawEvents_1[_i];
      var refinedEvent = func(rawEvent);
      if (refinedEvent) {
        refinedEvents.push(refinedEvent);
      } else if (refinedEvent == null) {
        refinedEvents.push(rawEvent);
      }
    }
  }
  return refinedEvents;
}
function addEvent(eventStore, subset, expandRange, context) {
  if (expandRange) {
    subset = expandRecurring(subset, expandRange, context);
  }
  return mergeEventStores(eventStore, subset);
}
function rezoneEventStoreDates(eventStore, oldDateEnv, newDateEnv) {
  var defs = eventStore.defs;
  var instances = mapHash(eventStore.instances, function(instance) {
    var def = defs[instance.defId];
    if (def.allDay || def.recurringDef) {
      return instance;
    }
    return __assign(__assign({}, instance), { range: {
      start: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.start, instance.forcedStartTzo)),
      end: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.end, instance.forcedEndTzo))
    }, forcedStartTzo: newDateEnv.canComputeOffset ? null : instance.forcedStartTzo, forcedEndTzo: newDateEnv.canComputeOffset ? null : instance.forcedEndTzo });
  });
  return { defs, instances };
}
function excludeEventsBySourceId(eventStore, sourceId) {
  return filterEventStoreDefs(eventStore, function(eventDef) {
    return eventDef.sourceId !== sourceId;
  });
}
function reduceDateSelection(currentSelection, action) {
  switch (action.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return action.selection;
    default:
      return currentSelection;
  }
}
function reduceSelectedEvent(currentInstanceId, action) {
  switch (action.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return action.eventInstanceId;
    default:
      return currentInstanceId;
  }
}
function reduceEventDrag(currentDrag, action) {
  var newDrag;
  switch (action.type) {
    case "UNSET_EVENT_DRAG":
      return null;
    case "SET_EVENT_DRAG":
      newDrag = action.state;
      return {
        affectedEvents: newDrag.affectedEvents,
        mutatedEvents: newDrag.mutatedEvents,
        isEvent: newDrag.isEvent
      };
    default:
      return currentDrag;
  }
}
function reduceEventResize(currentResize, action) {
  var newResize;
  switch (action.type) {
    case "UNSET_EVENT_RESIZE":
      return null;
    case "SET_EVENT_RESIZE":
      newResize = action.state;
      return {
        affectedEvents: newResize.affectedEvents,
        mutatedEvents: newResize.mutatedEvents,
        isEvent: newResize.isEvent
      };
    default:
      return currentResize;
  }
}
function parseToolbars(calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
  var header = calendarOptions.headerToolbar ? parseToolbar(calendarOptions.headerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) : null;
  var footer = calendarOptions.footerToolbar ? parseToolbar(calendarOptions.footerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) : null;
  return { header, footer };
}
function parseToolbar(sectionStrHash, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
  var sectionWidgets = {};
  var viewsWithButtons = [];
  var hasTitle = false;
  for (var sectionName in sectionStrHash) {
    var sectionStr = sectionStrHash[sectionName];
    var sectionRes = parseSection(sectionStr, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi);
    sectionWidgets[sectionName] = sectionRes.widgets;
    viewsWithButtons.push.apply(viewsWithButtons, sectionRes.viewsWithButtons);
    hasTitle = hasTitle || sectionRes.hasTitle;
  }
  return { sectionWidgets, viewsWithButtons, hasTitle };
}
function parseSection(sectionStr, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
  var isRtl = calendarOptions.direction === "rtl";
  var calendarCustomButtons = calendarOptions.customButtons || {};
  var calendarButtonTextOverrides = calendarOptionOverrides.buttonText || {};
  var calendarButtonText = calendarOptions.buttonText || {};
  var calendarButtonHintOverrides = calendarOptionOverrides.buttonHints || {};
  var calendarButtonHints = calendarOptions.buttonHints || {};
  var sectionSubstrs = sectionStr ? sectionStr.split(" ") : [];
  var viewsWithButtons = [];
  var hasTitle = false;
  var widgets = sectionSubstrs.map(function(buttonGroupStr) {
    return buttonGroupStr.split(",").map(function(buttonName) {
      if (buttonName === "title") {
        hasTitle = true;
        return { buttonName };
      }
      var customButtonProps;
      var viewSpec;
      var buttonClick;
      var buttonIcon;
      var buttonText;
      var buttonHint;
      if (customButtonProps = calendarCustomButtons[buttonName]) {
        buttonClick = function(ev) {
          if (customButtonProps.click) {
            customButtonProps.click.call(ev.target, ev, ev.target);
          }
        };
        (buttonIcon = theme.getCustomButtonIconClass(customButtonProps)) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = customButtonProps.text);
        buttonHint = customButtonProps.hint || customButtonProps.text;
      } else if (viewSpec = viewSpecs[buttonName]) {
        viewsWithButtons.push(buttonName);
        buttonClick = function() {
          calendarApi.changeView(buttonName);
        };
        (buttonText = viewSpec.buttonTextOverride) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = viewSpec.buttonTextDefault);
        var textFallback = viewSpec.buttonTextOverride || viewSpec.buttonTextDefault;
        buttonHint = formatWithOrdinals(
          viewSpec.buttonTitleOverride || viewSpec.buttonTitleDefault || calendarOptions.viewHint,
          [textFallback, buttonName],
          textFallback
        );
      } else if (calendarApi[buttonName]) {
        buttonClick = function() {
          calendarApi[buttonName]();
        };
        (buttonText = calendarButtonTextOverrides[buttonName]) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = calendarButtonText[buttonName]);
        if (buttonName === "prevYear" || buttonName === "nextYear") {
          var prevOrNext = buttonName === "prevYear" ? "prev" : "next";
          buttonHint = formatWithOrdinals(calendarButtonHintOverrides[prevOrNext] || calendarButtonHints[prevOrNext], [
            calendarButtonText.year || "year",
            "year"
          ], calendarButtonText[buttonName]);
        } else {
          buttonHint = function(navUnit) {
            return formatWithOrdinals(calendarButtonHintOverrides[buttonName] || calendarButtonHints[buttonName], [
              calendarButtonText[navUnit] || navUnit,
              navUnit
            ], calendarButtonText[buttonName]);
          };
        }
      }
      return { buttonName, buttonClick, buttonIcon, buttonText, buttonHint };
    });
  });
  return { widgets, viewsWithButtons, hasTitle };
}
var eventSourceDef$2 = {
  ignoreRange: true,
  parseMeta: function(refined) {
    if (Array.isArray(refined.events)) {
      return refined.events;
    }
    return null;
  },
  fetch: function(arg, success) {
    success({
      rawEvents: arg.eventSource.meta
    });
  }
};
var arrayEventSourcePlugin = createPlugin({
  eventSourceDefs: [eventSourceDef$2]
});
var eventSourceDef$1 = {
  parseMeta: function(refined) {
    if (typeof refined.events === "function") {
      return refined.events;
    }
    return null;
  },
  fetch: function(arg, success, failure) {
    var dateEnv = arg.context.dateEnv;
    var func = arg.eventSource.meta;
    unpromisify(func.bind(null, buildRangeApiWithTimeZone(arg.range, dateEnv)), function(rawEvents) {
      success({ rawEvents });
    }, failure);
  }
};
var funcEventSourcePlugin = createPlugin({
  eventSourceDefs: [eventSourceDef$1]
});
function requestJson(method, url, params, successCallback, failureCallback) {
  method = method.toUpperCase();
  var body = null;
  if (method === "GET") {
    url = injectQueryStringParams(url, params);
  } else {
    body = encodeParams(params);
  }
  var xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  if (method !== "GET") {
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  }
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 400) {
      var parsed = false;
      var res = void 0;
      try {
        res = JSON.parse(xhr.responseText);
        parsed = true;
      } catch (err) {
      }
      if (parsed) {
        successCallback(res, xhr);
      } else {
        failureCallback("Failure parsing JSON", xhr);
      }
    } else {
      failureCallback("Request failed", xhr);
    }
  };
  xhr.onerror = function() {
    failureCallback("Request failed", xhr);
  };
  xhr.send(body);
}
function injectQueryStringParams(url, params) {
  return url + (url.indexOf("?") === -1 ? "?" : "&") + encodeParams(params);
}
function encodeParams(params) {
  var parts = [];
  for (var key in params) {
    parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
  }
  return parts.join("&");
}
var JSON_FEED_EVENT_SOURCE_REFINERS = {
  method: String,
  extraParams: identity,
  startParam: String,
  endParam: String,
  timeZoneParam: String
};
var eventSourceDef = {
  parseMeta: function(refined) {
    if (refined.url && (refined.format === "json" || !refined.format)) {
      return {
        url: refined.url,
        format: "json",
        method: (refined.method || "GET").toUpperCase(),
        extraParams: refined.extraParams,
        startParam: refined.startParam,
        endParam: refined.endParam,
        timeZoneParam: refined.timeZoneParam
      };
    }
    return null;
  },
  fetch: function(arg, success, failure) {
    var meta = arg.eventSource.meta;
    var requestParams = buildRequestParams(meta, arg.range, arg.context);
    requestJson(meta.method, meta.url, requestParams, function(rawEvents, xhr) {
      success({ rawEvents, xhr });
    }, function(errorMessage, xhr) {
      failure({ message: errorMessage, xhr });
    });
  }
};
var jsonFeedEventSourcePlugin = createPlugin({
  eventSourceRefiners: JSON_FEED_EVENT_SOURCE_REFINERS,
  eventSourceDefs: [eventSourceDef]
});
function buildRequestParams(meta, range, context) {
  var dateEnv = context.dateEnv, options = context.options;
  var startParam;
  var endParam;
  var timeZoneParam;
  var customRequestParams;
  var params = {};
  startParam = meta.startParam;
  if (startParam == null) {
    startParam = options.startParam;
  }
  endParam = meta.endParam;
  if (endParam == null) {
    endParam = options.endParam;
  }
  timeZoneParam = meta.timeZoneParam;
  if (timeZoneParam == null) {
    timeZoneParam = options.timeZoneParam;
  }
  if (typeof meta.extraParams === "function") {
    customRequestParams = meta.extraParams();
  } else {
    customRequestParams = meta.extraParams || {};
  }
  __assign(params, customRequestParams);
  params[startParam] = dateEnv.formatIso(range.start);
  params[endParam] = dateEnv.formatIso(range.end);
  if (dateEnv.timeZone !== "local") {
    params[timeZoneParam] = dateEnv.timeZone;
  }
  return params;
}
var SIMPLE_RECURRING_REFINERS = {
  daysOfWeek: identity,
  startTime: createDuration,
  endTime: createDuration,
  duration: createDuration,
  startRecur: identity,
  endRecur: identity
};
var recurring = {
  parse: function(refined, dateEnv) {
    if (refined.daysOfWeek || refined.startTime || refined.endTime || refined.startRecur || refined.endRecur) {
      var recurringData = {
        daysOfWeek: refined.daysOfWeek || null,
        startTime: refined.startTime || null,
        endTime: refined.endTime || null,
        startRecur: refined.startRecur ? dateEnv.createMarker(refined.startRecur) : null,
        endRecur: refined.endRecur ? dateEnv.createMarker(refined.endRecur) : null
      };
      var duration = void 0;
      if (refined.duration) {
        duration = refined.duration;
      }
      if (!duration && refined.startTime && refined.endTime) {
        duration = subtractDurations(refined.endTime, refined.startTime);
      }
      return {
        allDayGuess: Boolean(!refined.startTime && !refined.endTime),
        duration,
        typeData: recurringData
      };
    }
    return null;
  },
  expand: function(typeData, framingRange, dateEnv) {
    var clippedFramingRange = intersectRanges(framingRange, { start: typeData.startRecur, end: typeData.endRecur });
    if (clippedFramingRange) {
      return expandRanges(typeData.daysOfWeek, typeData.startTime, clippedFramingRange, dateEnv);
    }
    return [];
  }
};
var simpleRecurringEventsPlugin = createPlugin({
  recurringTypes: [recurring],
  eventRefiners: SIMPLE_RECURRING_REFINERS
});
function expandRanges(daysOfWeek, startTime, framingRange, dateEnv) {
  var dowHash = daysOfWeek ? arrayToHash(daysOfWeek) : null;
  var dayMarker = startOfDay(framingRange.start);
  var endMarker = framingRange.end;
  var instanceStarts = [];
  while (dayMarker < endMarker) {
    var instanceStart = void 0;
    if (!dowHash || dowHash[dayMarker.getUTCDay()]) {
      if (startTime) {
        instanceStart = dateEnv.add(dayMarker, startTime);
      } else {
        instanceStart = dayMarker;
      }
      instanceStarts.push(instanceStart);
    }
    dayMarker = addDays(dayMarker, 1);
  }
  return instanceStarts;
}
var changeHandlerPlugin = createPlugin({
  optionChangeHandlers: {
    events: function(events, context) {
      handleEventSources([events], context);
    },
    eventSources: handleEventSources
  }
});
function handleEventSources(inputs, context) {
  var unfoundSources = hashValuesToArray(context.getCurrentData().eventSources);
  var newInputs = [];
  for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
    var input = inputs_1[_i];
    var inputFound = false;
    for (var i = 0; i < unfoundSources.length; i += 1) {
      if (unfoundSources[i]._raw === input) {
        unfoundSources.splice(i, 1);
        inputFound = true;
        break;
      }
    }
    if (!inputFound) {
      newInputs.push(input);
    }
  }
  for (var _a = 0, unfoundSources_1 = unfoundSources; _a < unfoundSources_1.length; _a++) {
    var unfoundSource = unfoundSources_1[_a];
    context.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: unfoundSource.sourceId
    });
  }
  for (var _b = 0, newInputs_1 = newInputs; _b < newInputs_1.length; _b++) {
    var newInput = newInputs_1[_b];
    context.calendarApi.addEventSource(newInput);
  }
}
function handleDateProfile(dateProfile, context) {
  context.emitter.trigger("datesSet", __assign(__assign({}, buildRangeApiWithTimeZone(dateProfile.activeRange, context.dateEnv)), { view: context.viewApi }));
}
function handleEventStore(eventStore, context) {
  var emitter = context.emitter;
  if (emitter.hasHandlers("eventsSet")) {
    emitter.trigger("eventsSet", buildEventApis(eventStore, context));
  }
}
var globalPlugins = [
  arrayEventSourcePlugin,
  funcEventSourcePlugin,
  jsonFeedEventSourcePlugin,
  simpleRecurringEventsPlugin,
  changeHandlerPlugin,
  createPlugin({
    isLoadingFuncs: [
      function(state) {
        return computeEventSourcesLoading(state.eventSources);
      }
    ],
    contentTypeHandlers: {
      html: buildHtmlRenderer,
      domNodes: buildDomNodeRenderer
    },
    propSetHandlers: {
      dateProfile: handleDateProfile,
      eventStore: handleEventStore
    }
  })
];
function buildHtmlRenderer() {
  var currentEl = null;
  var currentHtml = "";
  function render3(el, html) {
    if (el !== currentEl || html !== currentHtml) {
      el.innerHTML = html;
    }
    currentEl = el;
    currentHtml = html;
  }
  function destroy() {
    currentEl.innerHTML = "";
    currentEl = null;
    currentHtml = "";
  }
  return { render: render3, destroy };
}
function buildDomNodeRenderer() {
  var currentEl = null;
  var currentDomNodes = [];
  function render3(el, domNodes) {
    var newDomNodes = Array.prototype.slice.call(domNodes);
    if (el !== currentEl || !isArraysEqual(currentDomNodes, newDomNodes)) {
      for (var _i = 0, newDomNodes_1 = newDomNodes; _i < newDomNodes_1.length; _i++) {
        var newNode = newDomNodes_1[_i];
        el.appendChild(newNode);
      }
      destroy();
    }
    currentEl = el;
    currentDomNodes = newDomNodes;
  }
  function destroy() {
    currentDomNodes.forEach(removeElement);
    currentDomNodes = [];
    currentEl = null;
  }
  return { render: render3, destroy };
}
var DelayedRunner = function() {
  function DelayedRunner2(drainedOption) {
    this.drainedOption = drainedOption;
    this.isRunning = false;
    this.isDirty = false;
    this.pauseDepths = {};
    this.timeoutId = 0;
  }
  DelayedRunner2.prototype.request = function(delay) {
    this.isDirty = true;
    if (!this.isPaused()) {
      this.clearTimeout();
      if (delay == null) {
        this.tryDrain();
      } else {
        this.timeoutId = setTimeout(
          this.tryDrain.bind(this),
          delay
        );
      }
    }
  };
  DelayedRunner2.prototype.pause = function(scope) {
    if (scope === void 0) {
      scope = "";
    }
    var pauseDepths = this.pauseDepths;
    pauseDepths[scope] = (pauseDepths[scope] || 0) + 1;
    this.clearTimeout();
  };
  DelayedRunner2.prototype.resume = function(scope, force) {
    if (scope === void 0) {
      scope = "";
    }
    var pauseDepths = this.pauseDepths;
    if (scope in pauseDepths) {
      if (force) {
        delete pauseDepths[scope];
      } else {
        pauseDepths[scope] -= 1;
        var depth = pauseDepths[scope];
        if (depth <= 0) {
          delete pauseDepths[scope];
        }
      }
      this.tryDrain();
    }
  };
  DelayedRunner2.prototype.isPaused = function() {
    return Object.keys(this.pauseDepths).length;
  };
  DelayedRunner2.prototype.tryDrain = function() {
    if (!this.isRunning && !this.isPaused()) {
      this.isRunning = true;
      while (this.isDirty) {
        this.isDirty = false;
        this.drained();
      }
      this.isRunning = false;
    }
  };
  DelayedRunner2.prototype.clear = function() {
    this.clearTimeout();
    this.isDirty = false;
    this.pauseDepths = {};
  };
  DelayedRunner2.prototype.clearTimeout = function() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = 0;
    }
  };
  DelayedRunner2.prototype.drained = function() {
    if (this.drainedOption) {
      this.drainedOption();
    }
  };
  return DelayedRunner2;
}();
var TaskRunner = function() {
  function TaskRunner2(runTaskOption, drainedOption) {
    this.runTaskOption = runTaskOption;
    this.drainedOption = drainedOption;
    this.queue = [];
    this.delayedRunner = new DelayedRunner(this.drain.bind(this));
  }
  TaskRunner2.prototype.request = function(task, delay) {
    this.queue.push(task);
    this.delayedRunner.request(delay);
  };
  TaskRunner2.prototype.pause = function(scope) {
    this.delayedRunner.pause(scope);
  };
  TaskRunner2.prototype.resume = function(scope, force) {
    this.delayedRunner.resume(scope, force);
  };
  TaskRunner2.prototype.drain = function() {
    var queue = this.queue;
    while (queue.length) {
      var completedTasks = [];
      var task = void 0;
      while (task = queue.shift()) {
        this.runTask(task);
        completedTasks.push(task);
      }
      this.drained(completedTasks);
    }
  };
  TaskRunner2.prototype.runTask = function(task) {
    if (this.runTaskOption) {
      this.runTaskOption(task);
    }
  };
  TaskRunner2.prototype.drained = function(completedTasks) {
    if (this.drainedOption) {
      this.drainedOption(completedTasks);
    }
  };
  return TaskRunner2;
}();
function buildTitle(dateProfile, viewOptions, dateEnv) {
  var range;
  if (/^(year|month)$/.test(dateProfile.currentRangeUnit)) {
    range = dateProfile.currentRange;
  } else {
    range = dateProfile.activeRange;
  }
  return dateEnv.formatRange(range.start, range.end, createFormatter(viewOptions.titleFormat || buildTitleFormat(dateProfile)), {
    isEndExclusive: dateProfile.isRangeAllDay,
    defaultSeparator: viewOptions.titleRangeSeparator
  });
}
function buildTitleFormat(dateProfile) {
  var currentRangeUnit = dateProfile.currentRangeUnit;
  if (currentRangeUnit === "year") {
    return { year: "numeric" };
  }
  if (currentRangeUnit === "month") {
    return { year: "numeric", month: "long" };
  }
  var days = diffWholeDays(dateProfile.currentRange.start, dateProfile.currentRange.end);
  if (days !== null && days > 1) {
    return { year: "numeric", month: "short", day: "numeric" };
  }
  return { year: "numeric", month: "long", day: "numeric" };
}
var CalendarDataManager = function() {
  function CalendarDataManager2(props) {
    var _this = this;
    this.computeOptionsData = memoize(this._computeOptionsData);
    this.computeCurrentViewData = memoize(this._computeCurrentViewData);
    this.organizeRawLocales = memoize(organizeRawLocales);
    this.buildLocale = memoize(buildLocale);
    this.buildPluginHooks = buildBuildPluginHooks();
    this.buildDateEnv = memoize(buildDateEnv);
    this.buildTheme = memoize(buildTheme);
    this.parseToolbars = memoize(parseToolbars);
    this.buildViewSpecs = memoize(buildViewSpecs);
    this.buildDateProfileGenerator = memoizeObjArg(buildDateProfileGenerator);
    this.buildViewApi = memoize(buildViewApi);
    this.buildViewUiProps = memoizeObjArg(buildViewUiProps);
    this.buildEventUiBySource = memoize(buildEventUiBySource, isPropsEqual);
    this.buildEventUiBases = memoize(buildEventUiBases);
    this.parseContextBusinessHours = memoizeObjArg(parseContextBusinessHours);
    this.buildTitle = memoize(buildTitle);
    this.emitter = new Emitter();
    this.actionRunner = new TaskRunner(this._handleAction.bind(this), this.updateData.bind(this));
    this.currentCalendarOptionsInput = {};
    this.currentCalendarOptionsRefined = {};
    this.currentViewOptionsInput = {};
    this.currentViewOptionsRefined = {};
    this.currentCalendarOptionsRefiners = {};
    this.getCurrentData = function() {
      return _this.data;
    };
    this.dispatch = function(action) {
      _this.actionRunner.request(action);
    };
    this.props = props;
    this.actionRunner.pause();
    var dynamicOptionOverrides = {};
    var optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
    var currentViewType = optionsData.calendarOptions.initialView || optionsData.pluginHooks.initialView;
    var currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides);
    props.calendarApi.currentDataManager = this;
    this.emitter.setThisContext(props.calendarApi);
    this.emitter.setOptions(currentViewData.options);
    var currentDate = getInitialDate(optionsData.calendarOptions, optionsData.dateEnv);
    var dateProfile = currentViewData.dateProfileGenerator.build(currentDate);
    if (!rangeContainsMarker(dateProfile.activeRange, currentDate)) {
      currentDate = dateProfile.currentRange.start;
    }
    var calendarContext = {
      dateEnv: optionsData.dateEnv,
      options: optionsData.calendarOptions,
      pluginHooks: optionsData.pluginHooks,
      calendarApi: props.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    };
    for (var _i = 0, _a = optionsData.pluginHooks.contextInit; _i < _a.length; _i++) {
      var callback = _a[_i];
      callback(calendarContext);
    }
    var eventSources = initEventSources(optionsData.calendarOptions, dateProfile, calendarContext);
    var initialState = {
      dynamicOptionOverrides,
      currentViewType,
      currentDate,
      dateProfile,
      businessHours: this.parseContextBusinessHours(calendarContext),
      eventSources,
      eventUiBases: {},
      eventStore: createEmptyEventStore(),
      renderableEventStore: createEmptyEventStore(),
      dateSelection: null,
      eventSelection: "",
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(calendarContext).selectionConfig
    };
    var contextAndState = __assign(__assign({}, calendarContext), initialState);
    for (var _b = 0, _c = optionsData.pluginHooks.reducers; _b < _c.length; _b++) {
      var reducer = _c[_b];
      __assign(initialState, reducer(null, null, contextAndState));
    }
    if (computeIsLoading(initialState, calendarContext)) {
      this.emitter.trigger("loading", true);
    }
    this.state = initialState;
    this.updateData();
    this.actionRunner.resume();
  }
  CalendarDataManager2.prototype.resetOptions = function(optionOverrides, append) {
    var props = this.props;
    props.optionOverrides = append ? __assign(__assign({}, props.optionOverrides), optionOverrides) : optionOverrides;
    this.actionRunner.request({
      type: "NOTHING"
    });
  };
  CalendarDataManager2.prototype._handleAction = function(action) {
    var _a = this, props = _a.props, state = _a.state, emitter = _a.emitter;
    var dynamicOptionOverrides = reduceDynamicOptionOverrides(state.dynamicOptionOverrides, action);
    var optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
    var currentViewType = reduceViewType(state.currentViewType, action);
    var currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides);
    props.calendarApi.currentDataManager = this;
    emitter.setThisContext(props.calendarApi);
    emitter.setOptions(currentViewData.options);
    var calendarContext = {
      dateEnv: optionsData.dateEnv,
      options: optionsData.calendarOptions,
      pluginHooks: optionsData.pluginHooks,
      calendarApi: props.calendarApi,
      dispatch: this.dispatch,
      emitter,
      getCurrentData: this.getCurrentData
    };
    var currentDate = state.currentDate, dateProfile = state.dateProfile;
    if (this.data && this.data.dateProfileGenerator !== currentViewData.dateProfileGenerator) {
      dateProfile = currentViewData.dateProfileGenerator.build(currentDate);
    }
    currentDate = reduceCurrentDate(currentDate, action);
    dateProfile = reduceDateProfile(dateProfile, action, currentDate, currentViewData.dateProfileGenerator);
    if (action.type === "PREV" || action.type === "NEXT" || !rangeContainsMarker(dateProfile.currentRange, currentDate)) {
      currentDate = dateProfile.currentRange.start;
    }
    var eventSources = reduceEventSources(state.eventSources, action, dateProfile, calendarContext);
    var eventStore = reduceEventStore(state.eventStore, action, eventSources, dateProfile, calendarContext);
    var isEventsLoading = computeEventSourcesLoading(eventSources);
    var renderableEventStore = isEventsLoading && !currentViewData.options.progressiveEventRendering ? state.renderableEventStore || eventStore : eventStore;
    var _b = this.buildViewUiProps(calendarContext), eventUiSingleBase = _b.eventUiSingleBase, selectionConfig = _b.selectionConfig;
    var eventUiBySource = this.buildEventUiBySource(eventSources);
    var eventUiBases = this.buildEventUiBases(renderableEventStore.defs, eventUiSingleBase, eventUiBySource);
    var newState = {
      dynamicOptionOverrides,
      currentViewType,
      currentDate,
      dateProfile,
      eventSources,
      eventStore,
      renderableEventStore,
      selectionConfig,
      eventUiBases,
      businessHours: this.parseContextBusinessHours(calendarContext),
      dateSelection: reduceDateSelection(state.dateSelection, action),
      eventSelection: reduceSelectedEvent(state.eventSelection, action),
      eventDrag: reduceEventDrag(state.eventDrag, action),
      eventResize: reduceEventResize(state.eventResize, action)
    };
    var contextAndState = __assign(__assign({}, calendarContext), newState);
    for (var _i = 0, _c = optionsData.pluginHooks.reducers; _i < _c.length; _i++) {
      var reducer = _c[_i];
      __assign(newState, reducer(state, action, contextAndState));
    }
    var wasLoading = computeIsLoading(state, calendarContext);
    var isLoading = computeIsLoading(newState, calendarContext);
    if (!wasLoading && isLoading) {
      emitter.trigger("loading", true);
    } else if (wasLoading && !isLoading) {
      emitter.trigger("loading", false);
    }
    this.state = newState;
    if (props.onAction) {
      props.onAction(action);
    }
  };
  CalendarDataManager2.prototype.updateData = function() {
    var _a = this, props = _a.props, state = _a.state;
    var oldData = this.data;
    var optionsData = this.computeOptionsData(props.optionOverrides, state.dynamicOptionOverrides, props.calendarApi);
    var currentViewData = this.computeCurrentViewData(state.currentViewType, optionsData, props.optionOverrides, state.dynamicOptionOverrides);
    var data = this.data = __assign(__assign(__assign({ viewTitle: this.buildTitle(state.dateProfile, currentViewData.options, optionsData.dateEnv), calendarApi: props.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, optionsData), currentViewData), state);
    var changeHandlers = optionsData.pluginHooks.optionChangeHandlers;
    var oldCalendarOptions = oldData && oldData.calendarOptions;
    var newCalendarOptions = optionsData.calendarOptions;
    if (oldCalendarOptions && oldCalendarOptions !== newCalendarOptions) {
      if (oldCalendarOptions.timeZone !== newCalendarOptions.timeZone) {
        state.eventSources = data.eventSources = reduceEventSourcesNewTimeZone(data.eventSources, state.dateProfile, data);
        state.eventStore = data.eventStore = rezoneEventStoreDates(data.eventStore, oldData.dateEnv, data.dateEnv);
      }
      for (var optionName in changeHandlers) {
        if (oldCalendarOptions[optionName] !== newCalendarOptions[optionName]) {
          changeHandlers[optionName](newCalendarOptions[optionName], data);
        }
      }
    }
    if (props.onData) {
      props.onData(data);
    }
  };
  CalendarDataManager2.prototype._computeOptionsData = function(optionOverrides, dynamicOptionOverrides, calendarApi) {
    var _a = this.processRawCalendarOptions(optionOverrides, dynamicOptionOverrides), refinedOptions = _a.refinedOptions, pluginHooks = _a.pluginHooks, localeDefaults = _a.localeDefaults, availableLocaleData = _a.availableLocaleData, extra = _a.extra;
    warnUnknownOptions(extra);
    var dateEnv = this.buildDateEnv(refinedOptions.timeZone, refinedOptions.locale, refinedOptions.weekNumberCalculation, refinedOptions.firstDay, refinedOptions.weekText, pluginHooks, availableLocaleData, refinedOptions.defaultRangeSeparator);
    var viewSpecs = this.buildViewSpecs(pluginHooks.views, optionOverrides, dynamicOptionOverrides, localeDefaults);
    var theme = this.buildTheme(refinedOptions, pluginHooks);
    var toolbarConfig = this.parseToolbars(refinedOptions, optionOverrides, theme, viewSpecs, calendarApi);
    return {
      calendarOptions: refinedOptions,
      pluginHooks,
      dateEnv,
      viewSpecs,
      theme,
      toolbarConfig,
      localeDefaults,
      availableRawLocales: availableLocaleData.map
    };
  };
  CalendarDataManager2.prototype.processRawCalendarOptions = function(optionOverrides, dynamicOptionOverrides) {
    var _a = mergeRawOptions([
      BASE_OPTION_DEFAULTS,
      optionOverrides,
      dynamicOptionOverrides
    ]), locales = _a.locales, locale = _a.locale;
    var availableLocaleData = this.organizeRawLocales(locales);
    var availableRawLocales = availableLocaleData.map;
    var localeDefaults = this.buildLocale(locale || availableLocaleData.defaultCode, availableRawLocales).options;
    var pluginHooks = this.buildPluginHooks(optionOverrides.plugins || [], globalPlugins);
    var refiners = this.currentCalendarOptionsRefiners = __assign(__assign(__assign(__assign(__assign({}, BASE_OPTION_REFINERS), CALENDAR_LISTENER_REFINERS), CALENDAR_OPTION_REFINERS), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);
    var extra = {};
    var raw = mergeRawOptions([
      BASE_OPTION_DEFAULTS,
      localeDefaults,
      optionOverrides,
      dynamicOptionOverrides
    ]);
    var refined = {};
    var currentRaw = this.currentCalendarOptionsInput;
    var currentRefined = this.currentCalendarOptionsRefined;
    var anyChanges = false;
    for (var optionName in raw) {
      if (optionName !== "plugins") {
        if (raw[optionName] === currentRaw[optionName] || COMPLEX_OPTION_COMPARATORS[optionName] && optionName in currentRaw && COMPLEX_OPTION_COMPARATORS[optionName](currentRaw[optionName], raw[optionName])) {
          refined[optionName] = currentRefined[optionName];
        } else if (refiners[optionName]) {
          refined[optionName] = refiners[optionName](raw[optionName]);
          anyChanges = true;
        } else {
          extra[optionName] = currentRaw[optionName];
        }
      }
    }
    if (anyChanges) {
      this.currentCalendarOptionsInput = raw;
      this.currentCalendarOptionsRefined = refined;
    }
    return {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks,
      availableLocaleData,
      localeDefaults,
      extra
    };
  };
  CalendarDataManager2.prototype._computeCurrentViewData = function(viewType, optionsData, optionOverrides, dynamicOptionOverrides) {
    var viewSpec = optionsData.viewSpecs[viewType];
    if (!viewSpec) {
      throw new Error('viewType "' + viewType + `" is not available. Please make sure you've loaded all neccessary plugins`);
    }
    var _a = this.processRawViewOptions(viewSpec, optionsData.pluginHooks, optionsData.localeDefaults, optionOverrides, dynamicOptionOverrides), refinedOptions = _a.refinedOptions, extra = _a.extra;
    warnUnknownOptions(extra);
    var dateProfileGenerator = this.buildDateProfileGenerator({
      dateProfileGeneratorClass: viewSpec.optionDefaults.dateProfileGeneratorClass,
      duration: viewSpec.duration,
      durationUnit: viewSpec.durationUnit,
      usesMinMaxTime: viewSpec.optionDefaults.usesMinMaxTime,
      dateEnv: optionsData.dateEnv,
      calendarApi: this.props.calendarApi,
      slotMinTime: refinedOptions.slotMinTime,
      slotMaxTime: refinedOptions.slotMaxTime,
      showNonCurrentDates: refinedOptions.showNonCurrentDates,
      dayCount: refinedOptions.dayCount,
      dateAlignment: refinedOptions.dateAlignment,
      dateIncrement: refinedOptions.dateIncrement,
      hiddenDays: refinedOptions.hiddenDays,
      weekends: refinedOptions.weekends,
      nowInput: refinedOptions.now,
      validRangeInput: refinedOptions.validRange,
      visibleRangeInput: refinedOptions.visibleRange,
      monthMode: refinedOptions.monthMode,
      fixedWeekCount: refinedOptions.fixedWeekCount
    });
    var viewApi = this.buildViewApi(viewType, this.getCurrentData, optionsData.dateEnv);
    return { viewSpec, options: refinedOptions, dateProfileGenerator, viewApi };
  };
  CalendarDataManager2.prototype.processRawViewOptions = function(viewSpec, pluginHooks, localeDefaults, optionOverrides, dynamicOptionOverrides) {
    var raw = mergeRawOptions([
      BASE_OPTION_DEFAULTS,
      viewSpec.optionDefaults,
      localeDefaults,
      optionOverrides,
      viewSpec.optionOverrides,
      dynamicOptionOverrides
    ]);
    var refiners = __assign(__assign(__assign(__assign(__assign(__assign({}, BASE_OPTION_REFINERS), CALENDAR_LISTENER_REFINERS), CALENDAR_OPTION_REFINERS), VIEW_OPTION_REFINERS), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);
    var refined = {};
    var currentRaw = this.currentViewOptionsInput;
    var currentRefined = this.currentViewOptionsRefined;
    var anyChanges = false;
    var extra = {};
    for (var optionName in raw) {
      if (raw[optionName] === currentRaw[optionName] || COMPLEX_OPTION_COMPARATORS[optionName] && COMPLEX_OPTION_COMPARATORS[optionName](raw[optionName], currentRaw[optionName])) {
        refined[optionName] = currentRefined[optionName];
      } else {
        if (raw[optionName] === this.currentCalendarOptionsInput[optionName] || COMPLEX_OPTION_COMPARATORS[optionName] && COMPLEX_OPTION_COMPARATORS[optionName](raw[optionName], this.currentCalendarOptionsInput[optionName])) {
          if (optionName in this.currentCalendarOptionsRefined) {
            refined[optionName] = this.currentCalendarOptionsRefined[optionName];
          }
        } else if (refiners[optionName]) {
          refined[optionName] = refiners[optionName](raw[optionName]);
        } else {
          extra[optionName] = raw[optionName];
        }
        anyChanges = true;
      }
    }
    if (anyChanges) {
      this.currentViewOptionsInput = raw;
      this.currentViewOptionsRefined = refined;
    }
    return {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra
    };
  };
  return CalendarDataManager2;
}();
function buildDateEnv(timeZone, explicitLocale, weekNumberCalculation, firstDay, weekText, pluginHooks, availableLocaleData, defaultSeparator) {
  var locale = buildLocale(explicitLocale || availableLocaleData.defaultCode, availableLocaleData.map);
  return new DateEnv({
    calendarSystem: "gregory",
    timeZone,
    namedTimeZoneImpl: pluginHooks.namedTimeZonedImpl,
    locale,
    weekNumberCalculation,
    firstDay,
    weekText,
    cmdFormatter: pluginHooks.cmdFormatter,
    defaultSeparator
  });
}
function buildTheme(options, pluginHooks) {
  var ThemeClass = pluginHooks.themeClasses[options.themeSystem] || StandardTheme;
  return new ThemeClass(options);
}
function buildDateProfileGenerator(props) {
  var DateProfileGeneratorClass = props.dateProfileGeneratorClass || DateProfileGenerator;
  return new DateProfileGeneratorClass(props);
}
function buildViewApi(type, getCurrentData, dateEnv) {
  return new ViewApi(type, getCurrentData, dateEnv);
}
function buildEventUiBySource(eventSources) {
  return mapHash(eventSources, function(eventSource) {
    return eventSource.ui;
  });
}
function buildEventUiBases(eventDefs, eventUiSingleBase, eventUiBySource) {
  var eventUiBases = { "": eventUiSingleBase };
  for (var defId in eventDefs) {
    var def = eventDefs[defId];
    if (def.sourceId && eventUiBySource[def.sourceId]) {
      eventUiBases[defId] = eventUiBySource[def.sourceId];
    }
  }
  return eventUiBases;
}
function buildViewUiProps(calendarContext) {
  var options = calendarContext.options;
  return {
    eventUiSingleBase: createEventUi({
      display: options.eventDisplay,
      editable: options.editable,
      startEditable: options.eventStartEditable,
      durationEditable: options.eventDurationEditable,
      constraint: options.eventConstraint,
      overlap: typeof options.eventOverlap === "boolean" ? options.eventOverlap : void 0,
      allow: options.eventAllow,
      backgroundColor: options.eventBackgroundColor,
      borderColor: options.eventBorderColor,
      textColor: options.eventTextColor,
      color: options.eventColor
    }, calendarContext),
    selectionConfig: createEventUi({
      constraint: options.selectConstraint,
      overlap: typeof options.selectOverlap === "boolean" ? options.selectOverlap : void 0,
      allow: options.selectAllow
    }, calendarContext)
  };
}
function computeIsLoading(state, context) {
  for (var _i = 0, _a = context.pluginHooks.isLoadingFuncs; _i < _a.length; _i++) {
    var isLoadingFunc = _a[_i];
    if (isLoadingFunc(state)) {
      return true;
    }
  }
  return false;
}
function parseContextBusinessHours(calendarContext) {
  return parseBusinessHours(calendarContext.options.businessHours, calendarContext);
}
function warnUnknownOptions(options, viewName) {
  for (var optionName in options) {
    console.warn("Unknown option '" + optionName + "'" + (viewName ? " for view '" + viewName + "'" : ""));
  }
}
var CalendarDataProvider = function(_super) {
  __extends(CalendarDataProvider2, _super);
  function CalendarDataProvider2(props) {
    var _this = _super.call(this, props) || this;
    _this.handleData = function(data) {
      if (!_this.dataManager) {
        _this.state = data;
      } else {
        _this.setState(data);
      }
    };
    _this.dataManager = new CalendarDataManager({
      optionOverrides: props.optionOverrides,
      calendarApi: props.calendarApi,
      onData: _this.handleData
    });
    return _this;
  }
  CalendarDataProvider2.prototype.render = function() {
    return this.props.children(this.state);
  };
  CalendarDataProvider2.prototype.componentDidUpdate = function(prevProps) {
    var newOptionOverrides = this.props.optionOverrides;
    if (newOptionOverrides !== prevProps.optionOverrides) {
      this.dataManager.resetOptions(newOptionOverrides);
    }
  };
  return CalendarDataProvider2;
}(Component2);
var NamedTimeZoneImpl = function() {
  function NamedTimeZoneImpl2(timeZoneName) {
    this.timeZoneName = timeZoneName;
  }
  return NamedTimeZoneImpl2;
}();
var SegHierarchy = function() {
  function SegHierarchy2() {
    this.strictOrder = false;
    this.allowReslicing = false;
    this.maxCoord = -1;
    this.maxStackCnt = -1;
    this.levelCoords = [];
    this.entriesByLevel = [];
    this.stackCnts = {};
  }
  SegHierarchy2.prototype.addSegs = function(inputs) {
    var hiddenEntries = [];
    for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
      var input = inputs_1[_i];
      this.insertEntry(input, hiddenEntries);
    }
    return hiddenEntries;
  };
  SegHierarchy2.prototype.insertEntry = function(entry, hiddenEntries) {
    var insertion = this.findInsertion(entry);
    if (this.isInsertionValid(insertion, entry)) {
      this.insertEntryAt(entry, insertion);
      return 1;
    }
    return this.handleInvalidInsertion(insertion, entry, hiddenEntries);
  };
  SegHierarchy2.prototype.isInsertionValid = function(insertion, entry) {
    return (this.maxCoord === -1 || insertion.levelCoord + entry.thickness <= this.maxCoord) && (this.maxStackCnt === -1 || insertion.stackCnt < this.maxStackCnt);
  };
  SegHierarchy2.prototype.handleInvalidInsertion = function(insertion, entry, hiddenEntries) {
    if (this.allowReslicing && insertion.touchingEntry) {
      return this.splitEntry(entry, insertion.touchingEntry, hiddenEntries);
    }
    hiddenEntries.push(entry);
    return 0;
  };
  SegHierarchy2.prototype.splitEntry = function(entry, barrier, hiddenEntries) {
    var partCnt = 0;
    var splitHiddenEntries = [];
    var entrySpan = entry.span;
    var barrierSpan = barrier.span;
    if (entrySpan.start < barrierSpan.start) {
      partCnt += this.insertEntry({
        index: entry.index,
        thickness: entry.thickness,
        span: { start: entrySpan.start, end: barrierSpan.start }
      }, splitHiddenEntries);
    }
    if (entrySpan.end > barrierSpan.end) {
      partCnt += this.insertEntry({
        index: entry.index,
        thickness: entry.thickness,
        span: { start: barrierSpan.end, end: entrySpan.end }
      }, splitHiddenEntries);
    }
    if (partCnt) {
      hiddenEntries.push.apply(hiddenEntries, __spreadArray([{
        index: entry.index,
        thickness: entry.thickness,
        span: intersectSpans(barrierSpan, entrySpan)
      }], splitHiddenEntries));
      return partCnt;
    }
    hiddenEntries.push(entry);
    return 0;
  };
  SegHierarchy2.prototype.insertEntryAt = function(entry, insertion) {
    var _a = this, entriesByLevel = _a.entriesByLevel, levelCoords = _a.levelCoords;
    if (insertion.lateral === -1) {
      insertAt(levelCoords, insertion.level, insertion.levelCoord);
      insertAt(entriesByLevel, insertion.level, [entry]);
    } else {
      insertAt(entriesByLevel[insertion.level], insertion.lateral, entry);
    }
    this.stackCnts[buildEntryKey(entry)] = insertion.stackCnt;
  };
  SegHierarchy2.prototype.findInsertion = function(newEntry) {
    var _a = this, levelCoords = _a.levelCoords, entriesByLevel = _a.entriesByLevel, strictOrder = _a.strictOrder, stackCnts = _a.stackCnts;
    var levelCnt = levelCoords.length;
    var candidateCoord = 0;
    var touchingLevel = -1;
    var touchingLateral = -1;
    var touchingEntry = null;
    var stackCnt = 0;
    for (var trackingLevel = 0; trackingLevel < levelCnt; trackingLevel += 1) {
      var trackingCoord = levelCoords[trackingLevel];
      if (!strictOrder && trackingCoord >= candidateCoord + newEntry.thickness) {
        break;
      }
      var trackingEntries = entriesByLevel[trackingLevel];
      var trackingEntry = void 0;
      var searchRes = binarySearch(trackingEntries, newEntry.span.start, getEntrySpanEnd);
      var lateralIndex = searchRes[0] + searchRes[1];
      while ((trackingEntry = trackingEntries[lateralIndex]) && trackingEntry.span.start < newEntry.span.end) {
        var trackingEntryBottom = trackingCoord + trackingEntry.thickness;
        if (trackingEntryBottom > candidateCoord) {
          candidateCoord = trackingEntryBottom;
          touchingEntry = trackingEntry;
          touchingLevel = trackingLevel;
          touchingLateral = lateralIndex;
        }
        if (trackingEntryBottom === candidateCoord) {
          stackCnt = Math.max(stackCnt, stackCnts[buildEntryKey(trackingEntry)] + 1);
        }
        lateralIndex += 1;
      }
    }
    var destLevel = 0;
    if (touchingEntry) {
      destLevel = touchingLevel + 1;
      while (destLevel < levelCnt && levelCoords[destLevel] < candidateCoord) {
        destLevel += 1;
      }
    }
    var destLateral = -1;
    if (destLevel < levelCnt && levelCoords[destLevel] === candidateCoord) {
      destLateral = binarySearch(entriesByLevel[destLevel], newEntry.span.end, getEntrySpanEnd)[0];
    }
    return {
      touchingLevel,
      touchingLateral,
      touchingEntry,
      stackCnt,
      levelCoord: candidateCoord,
      level: destLevel,
      lateral: destLateral
    };
  };
  SegHierarchy2.prototype.toRects = function() {
    var _a = this, entriesByLevel = _a.entriesByLevel, levelCoords = _a.levelCoords;
    var levelCnt = entriesByLevel.length;
    var rects = [];
    for (var level = 0; level < levelCnt; level += 1) {
      var entries = entriesByLevel[level];
      var levelCoord = levelCoords[level];
      for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var entry = entries_1[_i];
        rects.push(__assign(__assign({}, entry), { levelCoord }));
      }
    }
    return rects;
  };
  return SegHierarchy2;
}();
function getEntrySpanEnd(entry) {
  return entry.span.end;
}
function buildEntryKey(entry) {
  return entry.index + ":" + entry.span.start;
}
function intersectSpans(span0, span1) {
  var start = Math.max(span0.start, span1.start);
  var end = Math.min(span0.end, span1.end);
  if (start < end) {
    return { start, end };
  }
  return null;
}
function insertAt(arr, index, item) {
  arr.splice(index, 0, item);
}
function binarySearch(a, searchVal, getItemVal) {
  var startIndex = 0;
  var endIndex = a.length;
  if (!endIndex || searchVal < getItemVal(a[startIndex])) {
    return [0, 0];
  }
  if (searchVal > getItemVal(a[endIndex - 1])) {
    return [endIndex, 0];
  }
  while (startIndex < endIndex) {
    var middleIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
    var middleVal = getItemVal(a[middleIndex]);
    if (searchVal < middleVal) {
      endIndex = middleIndex;
    } else if (searchVal > middleVal) {
      startIndex = middleIndex + 1;
    } else {
      return [middleIndex, 1];
    }
  }
  return [startIndex, 0];
}
var Interaction = function() {
  function Interaction2(settings) {
    this.component = settings.component;
    this.isHitComboAllowed = settings.isHitComboAllowed || null;
  }
  Interaction2.prototype.destroy = function() {
  };
  return Interaction2;
}();
function parseInteractionSettings(component, input) {
  return {
    component,
    el: input.el,
    useEventCenter: input.useEventCenter != null ? input.useEventCenter : true,
    isHitComboAllowed: input.isHitComboAllowed || null
  };
}
var interactionSettingsStore = {};
var ElementDragging = function() {
  function ElementDragging2(el, selector) {
    this.emitter = new Emitter();
  }
  ElementDragging2.prototype.destroy = function() {
  };
  ElementDragging2.prototype.setMirrorIsVisible = function(bool) {
  };
  ElementDragging2.prototype.setMirrorNeedsRevert = function(bool) {
  };
  ElementDragging2.prototype.setAutoScrollEnabled = function(bool) {
  };
  return ElementDragging2;
}();
var ToolbarSection = function(_super) {
  __extends(ToolbarSection2, _super);
  function ToolbarSection2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  ToolbarSection2.prototype.render = function() {
    var _this = this;
    var children = this.props.widgetGroups.map(function(widgetGroup) {
      return _this.renderWidgetGroup(widgetGroup);
    });
    return createElement2.apply(void 0, __spreadArray(["div", { className: "fc-toolbar-chunk" }], children));
  };
  ToolbarSection2.prototype.renderWidgetGroup = function(widgetGroup) {
    var props = this.props;
    var theme = this.context.theme;
    var children = [];
    var isOnlyButtons = true;
    for (var _i = 0, widgetGroup_1 = widgetGroup; _i < widgetGroup_1.length; _i++) {
      var widget = widgetGroup_1[_i];
      var buttonName = widget.buttonName, buttonClick = widget.buttonClick, buttonText = widget.buttonText, buttonIcon = widget.buttonIcon, buttonHint = widget.buttonHint;
      if (buttonName === "title") {
        isOnlyButtons = false;
        children.push(createElement2("h2", { className: "fc-toolbar-title", id: props.titleId }, props.title));
      } else {
        var isPressed = buttonName === props.activeButton;
        var isDisabled = !props.isTodayEnabled && buttonName === "today" || !props.isPrevEnabled && buttonName === "prev" || !props.isNextEnabled && buttonName === "next";
        var buttonClasses = ["fc-" + buttonName + "-button", theme.getClass("button")];
        if (isPressed) {
          buttonClasses.push(theme.getClass("buttonActive"));
        }
        children.push(createElement2("button", { type: "button", title: typeof buttonHint === "function" ? buttonHint(props.navUnit) : buttonHint, disabled: isDisabled, "aria-pressed": isPressed, className: buttonClasses.join(" "), onClick: buttonClick }, buttonText || (buttonIcon ? createElement2("span", { className: buttonIcon }) : "")));
      }
    }
    if (children.length > 1) {
      var groupClassName = isOnlyButtons && theme.getClass("buttonGroup") || "";
      return createElement2.apply(void 0, __spreadArray(["div", { className: groupClassName }], children));
    }
    return children[0];
  };
  return ToolbarSection2;
}(BaseComponent);
var Toolbar = function(_super) {
  __extends(Toolbar2, _super);
  function Toolbar2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Toolbar2.prototype.render = function() {
    var _a = this.props, model = _a.model, extraClassName = _a.extraClassName;
    var forceLtr = false;
    var startContent;
    var endContent;
    var sectionWidgets = model.sectionWidgets;
    var centerContent = sectionWidgets.center;
    if (sectionWidgets.left) {
      forceLtr = true;
      startContent = sectionWidgets.left;
    } else {
      startContent = sectionWidgets.start;
    }
    if (sectionWidgets.right) {
      forceLtr = true;
      endContent = sectionWidgets.right;
    } else {
      endContent = sectionWidgets.end;
    }
    var classNames = [
      extraClassName || "",
      "fc-toolbar",
      forceLtr ? "fc-toolbar-ltr" : ""
    ];
    return createElement2(
      "div",
      { className: classNames.join(" ") },
      this.renderSection("start", startContent || []),
      this.renderSection("center", centerContent || []),
      this.renderSection("end", endContent || [])
    );
  };
  Toolbar2.prototype.renderSection = function(key, widgetGroups) {
    var props = this.props;
    return createElement2(ToolbarSection, { key, widgetGroups, title: props.title, navUnit: props.navUnit, activeButton: props.activeButton, isTodayEnabled: props.isTodayEnabled, isPrevEnabled: props.isPrevEnabled, isNextEnabled: props.isNextEnabled, titleId: props.titleId });
  };
  return Toolbar2;
}(BaseComponent);
var ViewContainer = function(_super) {
  __extends(ViewContainer2, _super);
  function ViewContainer2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.state = {
      availableWidth: null
    };
    _this.handleEl = function(el) {
      _this.el = el;
      setRef(_this.props.elRef, el);
      _this.updateAvailableWidth();
    };
    _this.handleResize = function() {
      _this.updateAvailableWidth();
    };
    return _this;
  }
  ViewContainer2.prototype.render = function() {
    var _a = this, props = _a.props, state = _a.state;
    var aspectRatio = props.aspectRatio;
    var classNames = [
      "fc-view-harness",
      aspectRatio || props.liquid || props.height ? "fc-view-harness-active" : "fc-view-harness-passive"
    ];
    var height = "";
    var paddingBottom = "";
    if (aspectRatio) {
      if (state.availableWidth !== null) {
        height = state.availableWidth / aspectRatio;
      } else {
        paddingBottom = 1 / aspectRatio * 100 + "%";
      }
    } else {
      height = props.height || "";
    }
    return createElement2("div", { "aria-labelledby": props.labeledById, ref: this.handleEl, className: classNames.join(" "), style: { height, paddingBottom } }, props.children);
  };
  ViewContainer2.prototype.componentDidMount = function() {
    this.context.addResizeHandler(this.handleResize);
  };
  ViewContainer2.prototype.componentWillUnmount = function() {
    this.context.removeResizeHandler(this.handleResize);
  };
  ViewContainer2.prototype.updateAvailableWidth = function() {
    if (this.el && this.props.aspectRatio) {
      this.setState({ availableWidth: this.el.offsetWidth });
    }
  };
  return ViewContainer2;
}(BaseComponent);
var EventClicking = function(_super) {
  __extends(EventClicking2, _super);
  function EventClicking2(settings) {
    var _this = _super.call(this, settings) || this;
    _this.handleSegClick = function(ev, segEl) {
      var component = _this.component;
      var context = component.context;
      var seg = getElSeg(segEl);
      if (seg && component.isValidSegDownEl(ev.target)) {
        var hasUrlContainer = elementClosest(ev.target, ".fc-event-forced-url");
        var url = hasUrlContainer ? hasUrlContainer.querySelector("a[href]").href : "";
        context.emitter.trigger("eventClick", {
          el: segEl,
          event: new EventApi(component.context, seg.eventRange.def, seg.eventRange.instance),
          jsEvent: ev,
          view: context.viewApi
        });
        if (url && !ev.defaultPrevented) {
          window.location.href = url;
        }
      }
    };
    _this.destroy = listenBySelector(
      settings.el,
      "click",
      ".fc-event",
      _this.handleSegClick
    );
    return _this;
  }
  return EventClicking2;
}(Interaction);
var EventHovering = function(_super) {
  __extends(EventHovering2, _super);
  function EventHovering2(settings) {
    var _this = _super.call(this, settings) || this;
    _this.handleEventElRemove = function(el) {
      if (el === _this.currentSegEl) {
        _this.handleSegLeave(null, _this.currentSegEl);
      }
    };
    _this.handleSegEnter = function(ev, segEl) {
      if (getElSeg(segEl)) {
        _this.currentSegEl = segEl;
        _this.triggerEvent("eventMouseEnter", ev, segEl);
      }
    };
    _this.handleSegLeave = function(ev, segEl) {
      if (_this.currentSegEl) {
        _this.currentSegEl = null;
        _this.triggerEvent("eventMouseLeave", ev, segEl);
      }
    };
    _this.removeHoverListeners = listenToHoverBySelector(
      settings.el,
      ".fc-event",
      _this.handleSegEnter,
      _this.handleSegLeave
    );
    return _this;
  }
  EventHovering2.prototype.destroy = function() {
    this.removeHoverListeners();
  };
  EventHovering2.prototype.triggerEvent = function(publicEvName, ev, segEl) {
    var component = this.component;
    var context = component.context;
    var seg = getElSeg(segEl);
    if (!ev || component.isValidSegDownEl(ev.target)) {
      context.emitter.trigger(publicEvName, {
        el: segEl,
        event: new EventApi(context, seg.eventRange.def, seg.eventRange.instance),
        jsEvent: ev,
        view: context.viewApi
      });
    }
  };
  return EventHovering2;
}(Interaction);
var CalendarContent = function(_super) {
  __extends(CalendarContent2, _super);
  function CalendarContent2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.buildViewContext = memoize(buildViewContext);
    _this.buildViewPropTransformers = memoize(buildViewPropTransformers);
    _this.buildToolbarProps = memoize(buildToolbarProps);
    _this.headerRef = createRef2();
    _this.footerRef = createRef2();
    _this.interactionsStore = {};
    _this.state = {
      viewLabelId: getUniqueDomId()
    };
    _this.registerInteractiveComponent = function(component, settingsInput) {
      var settings = parseInteractionSettings(component, settingsInput);
      var DEFAULT_INTERACTIONS = [
        EventClicking,
        EventHovering
      ];
      var interactionClasses = DEFAULT_INTERACTIONS.concat(_this.props.pluginHooks.componentInteractions);
      var interactions = interactionClasses.map(function(TheInteractionClass) {
        return new TheInteractionClass(settings);
      });
      _this.interactionsStore[component.uid] = interactions;
      interactionSettingsStore[component.uid] = settings;
    };
    _this.unregisterInteractiveComponent = function(component) {
      var listeners = _this.interactionsStore[component.uid];
      if (listeners) {
        for (var _i = 0, listeners_1 = listeners; _i < listeners_1.length; _i++) {
          var listener = listeners_1[_i];
          listener.destroy();
        }
        delete _this.interactionsStore[component.uid];
      }
      delete interactionSettingsStore[component.uid];
    };
    _this.resizeRunner = new DelayedRunner(function() {
      _this.props.emitter.trigger("_resize", true);
      _this.props.emitter.trigger("windowResize", { view: _this.props.viewApi });
    });
    _this.handleWindowResize = function(ev) {
      var options = _this.props.options;
      if (options.handleWindowResize && ev.target === window) {
        _this.resizeRunner.request(options.windowResizeDelay);
      }
    };
    return _this;
  }
  CalendarContent2.prototype.render = function() {
    var props = this.props;
    var toolbarConfig = props.toolbarConfig, options = props.options;
    var toolbarProps = this.buildToolbarProps(
      props.viewSpec,
      props.dateProfile,
      props.dateProfileGenerator,
      props.currentDate,
      getNow(props.options.now, props.dateEnv),
      props.viewTitle
    );
    var viewVGrow = false;
    var viewHeight = "";
    var viewAspectRatio;
    if (props.isHeightAuto || props.forPrint) {
      viewHeight = "";
    } else if (options.height != null) {
      viewVGrow = true;
    } else if (options.contentHeight != null) {
      viewHeight = options.contentHeight;
    } else {
      viewAspectRatio = Math.max(options.aspectRatio, 0.5);
    }
    var viewContext = this.buildViewContext(props.viewSpec, props.viewApi, props.options, props.dateProfileGenerator, props.dateEnv, props.theme, props.pluginHooks, props.dispatch, props.getCurrentData, props.emitter, props.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent);
    var viewLabelId = toolbarConfig.header && toolbarConfig.header.hasTitle ? this.state.viewLabelId : "";
    return createElement2(
      ViewContextType.Provider,
      { value: viewContext },
      toolbarConfig.header && createElement2(Toolbar, __assign({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: toolbarConfig.header, titleId: viewLabelId }, toolbarProps)),
      createElement2(
        ViewContainer,
        { liquid: viewVGrow, height: viewHeight, aspectRatio: viewAspectRatio, labeledById: viewLabelId },
        this.renderView(props),
        this.buildAppendContent()
      ),
      toolbarConfig.footer && createElement2(Toolbar, __assign({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: toolbarConfig.footer, titleId: "" }, toolbarProps))
    );
  };
  CalendarContent2.prototype.componentDidMount = function() {
    var props = this.props;
    this.calendarInteractions = props.pluginHooks.calendarInteractions.map(function(CalendarInteractionClass) {
      return new CalendarInteractionClass(props);
    });
    window.addEventListener("resize", this.handleWindowResize);
    var propSetHandlers = props.pluginHooks.propSetHandlers;
    for (var propName in propSetHandlers) {
      propSetHandlers[propName](props[propName], props);
    }
  };
  CalendarContent2.prototype.componentDidUpdate = function(prevProps) {
    var props = this.props;
    var propSetHandlers = props.pluginHooks.propSetHandlers;
    for (var propName in propSetHandlers) {
      if (props[propName] !== prevProps[propName]) {
        propSetHandlers[propName](props[propName], props);
      }
    }
  };
  CalendarContent2.prototype.componentWillUnmount = function() {
    window.removeEventListener("resize", this.handleWindowResize);
    this.resizeRunner.clear();
    for (var _i = 0, _a = this.calendarInteractions; _i < _a.length; _i++) {
      var interaction = _a[_i];
      interaction.destroy();
    }
    this.props.emitter.trigger("_unmount");
  };
  CalendarContent2.prototype.buildAppendContent = function() {
    var props = this.props;
    var children = props.pluginHooks.viewContainerAppends.map(function(buildAppendContent) {
      return buildAppendContent(props);
    });
    return createElement2.apply(void 0, __spreadArray([Fragment2, {}], children));
  };
  CalendarContent2.prototype.renderView = function(props) {
    var pluginHooks = props.pluginHooks;
    var viewSpec = props.viewSpec;
    var viewProps = {
      dateProfile: props.dateProfile,
      businessHours: props.businessHours,
      eventStore: props.renderableEventStore,
      eventUiBases: props.eventUiBases,
      dateSelection: props.dateSelection,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      isHeightAuto: props.isHeightAuto,
      forPrint: props.forPrint
    };
    var transformers = this.buildViewPropTransformers(pluginHooks.viewPropsTransformers);
    for (var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
      var transformer = transformers_1[_i];
      __assign(viewProps, transformer.transform(viewProps, props));
    }
    var ViewComponent = viewSpec.component;
    return createElement2(ViewComponent, __assign({}, viewProps));
  };
  return CalendarContent2;
}(PureComponent);
function buildToolbarProps(viewSpec, dateProfile, dateProfileGenerator, currentDate, now, title) {
  var todayInfo = dateProfileGenerator.build(now, void 0, false);
  var prevInfo = dateProfileGenerator.buildPrev(dateProfile, currentDate, false);
  var nextInfo = dateProfileGenerator.buildNext(dateProfile, currentDate, false);
  return {
    title,
    activeButton: viewSpec.type,
    navUnit: viewSpec.singleUnit,
    isTodayEnabled: todayInfo.isValid && !rangeContainsMarker(dateProfile.currentRange, now),
    isPrevEnabled: prevInfo.isValid,
    isNextEnabled: nextInfo.isValid
  };
}
function buildViewPropTransformers(theClasses) {
  return theClasses.map(function(TheClass) {
    return new TheClass();
  });
}
var CalendarRoot = function(_super) {
  __extends(CalendarRoot2, _super);
  function CalendarRoot2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.state = {
      forPrint: false
    };
    _this.handleBeforePrint = function() {
      _this.setState({ forPrint: true });
    };
    _this.handleAfterPrint = function() {
      _this.setState({ forPrint: false });
    };
    return _this;
  }
  CalendarRoot2.prototype.render = function() {
    var props = this.props;
    var options = props.options;
    var forPrint = this.state.forPrint;
    var isHeightAuto = forPrint || options.height === "auto" || options.contentHeight === "auto";
    var height = !isHeightAuto && options.height != null ? options.height : "";
    var classNames = [
      "fc",
      forPrint ? "fc-media-print" : "fc-media-screen",
      "fc-direction-" + options.direction,
      props.theme.getClass("root")
    ];
    if (!getCanVGrowWithinCell()) {
      classNames.push("fc-liquid-hack");
    }
    return props.children(classNames, height, isHeightAuto, forPrint);
  };
  CalendarRoot2.prototype.componentDidMount = function() {
    var emitter = this.props.emitter;
    emitter.on("_beforeprint", this.handleBeforePrint);
    emitter.on("_afterprint", this.handleAfterPrint);
  };
  CalendarRoot2.prototype.componentWillUnmount = function() {
    var emitter = this.props.emitter;
    emitter.off("_beforeprint", this.handleBeforePrint);
    emitter.off("_afterprint", this.handleAfterPrint);
  };
  return CalendarRoot2;
}(BaseComponent);
function computeFallbackHeaderFormat(datesRepDistinctDays, dayCnt) {
  if (!datesRepDistinctDays || dayCnt > 10) {
    return createFormatter({ weekday: "short" });
  }
  if (dayCnt > 1) {
    return createFormatter({ weekday: "short", month: "numeric", day: "numeric", omitCommas: true });
  }
  return createFormatter({ weekday: "long" });
}
var CLASS_NAME = "fc-col-header-cell";
function renderInner$1(hookProps) {
  return hookProps.text;
}
var TableDateCell = function(_super) {
  __extends(TableDateCell2, _super);
  function TableDateCell2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  TableDateCell2.prototype.render = function() {
    var _a = this.context, dateEnv = _a.dateEnv, options = _a.options, theme = _a.theme, viewApi = _a.viewApi;
    var props = this.props;
    var date = props.date, dateProfile = props.dateProfile;
    var dayMeta = getDateMeta(date, props.todayRange, null, dateProfile);
    var classNames = [CLASS_NAME].concat(getDayClassNames(dayMeta, theme));
    var text = dateEnv.format(date, props.dayHeaderFormat);
    var navLinkAttrs = !dayMeta.isDisabled && props.colCnt > 1 ? buildNavLinkAttrs(this.context, date) : {};
    var hookProps = __assign(__assign(__assign({ date: dateEnv.toDate(date), view: viewApi }, props.extraHookProps), { text }), dayMeta);
    return createElement2(RenderHook, { hookProps, classNames: options.dayHeaderClassNames, content: options.dayHeaderContent, defaultContent: renderInner$1, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, function(rootElRef, customClassNames, innerElRef, innerContent) {
      return createElement2(
        "th",
        __assign({ ref: rootElRef, role: "columnheader", className: classNames.concat(customClassNames).join(" "), "data-date": !dayMeta.isDisabled ? formatDayString(date) : void 0, colSpan: props.colSpan }, props.extraDataAttrs),
        createElement2("div", { className: "fc-scrollgrid-sync-inner" }, !dayMeta.isDisabled && createElement2("a", __assign({ ref: innerElRef, className: [
          "fc-col-header-cell-cushion",
          props.isSticky ? "fc-sticky" : ""
        ].join(" ") }, navLinkAttrs), innerContent))
      );
    });
  };
  return TableDateCell2;
}(BaseComponent);
var WEEKDAY_FORMAT = createFormatter({ weekday: "long" });
var TableDowCell = function(_super) {
  __extends(TableDowCell2, _super);
  function TableDowCell2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  TableDowCell2.prototype.render = function() {
    var props = this.props;
    var _a = this.context, dateEnv = _a.dateEnv, theme = _a.theme, viewApi = _a.viewApi, options = _a.options;
    var date = addDays(new Date(2592e5), props.dow);
    var dateMeta = {
      dow: props.dow,
      isDisabled: false,
      isFuture: false,
      isPast: false,
      isToday: false,
      isOther: false
    };
    var classNames = [CLASS_NAME].concat(getDayClassNames(dateMeta, theme), props.extraClassNames || []);
    var text = dateEnv.format(date, props.dayHeaderFormat);
    var hookProps = __assign(__assign(__assign(__assign({
      date
    }, dateMeta), { view: viewApi }), props.extraHookProps), { text });
    return createElement2(RenderHook, { hookProps, classNames: options.dayHeaderClassNames, content: options.dayHeaderContent, defaultContent: renderInner$1, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, function(rootElRef, customClassNames, innerElRef, innerContent) {
      return createElement2(
        "th",
        __assign({ ref: rootElRef, role: "columnheader", className: classNames.concat(customClassNames).join(" "), colSpan: props.colSpan }, props.extraDataAttrs),
        createElement2(
          "div",
          { className: "fc-scrollgrid-sync-inner" },
          createElement2("a", { "aria-label": dateEnv.format(date, WEEKDAY_FORMAT), className: [
            "fc-col-header-cell-cushion",
            props.isSticky ? "fc-sticky" : ""
          ].join(" "), ref: innerElRef }, innerContent)
        )
      );
    });
  };
  return TableDowCell2;
}(BaseComponent);
var NowTimer = function(_super) {
  __extends(NowTimer2, _super);
  function NowTimer2(props, context) {
    var _this = _super.call(this, props, context) || this;
    _this.initialNowDate = getNow(context.options.now, context.dateEnv);
    _this.initialNowQueriedMs = new Date().valueOf();
    _this.state = _this.computeTiming().currentState;
    return _this;
  }
  NowTimer2.prototype.render = function() {
    var _a = this, props = _a.props, state = _a.state;
    return props.children(state.nowDate, state.todayRange);
  };
  NowTimer2.prototype.componentDidMount = function() {
    this.setTimeout();
  };
  NowTimer2.prototype.componentDidUpdate = function(prevProps) {
    if (prevProps.unit !== this.props.unit) {
      this.clearTimeout();
      this.setTimeout();
    }
  };
  NowTimer2.prototype.componentWillUnmount = function() {
    this.clearTimeout();
  };
  NowTimer2.prototype.computeTiming = function() {
    var _a = this, props = _a.props, context = _a.context;
    var unroundedNow = addMs(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs);
    var currentUnitStart = context.dateEnv.startOf(unroundedNow, props.unit);
    var nextUnitStart = context.dateEnv.add(currentUnitStart, createDuration(1, props.unit));
    var waitMs = nextUnitStart.valueOf() - unroundedNow.valueOf();
    waitMs = Math.min(1e3 * 60 * 60 * 24, waitMs);
    return {
      currentState: { nowDate: currentUnitStart, todayRange: buildDayRange(currentUnitStart) },
      nextState: { nowDate: nextUnitStart, todayRange: buildDayRange(nextUnitStart) },
      waitMs
    };
  };
  NowTimer2.prototype.setTimeout = function() {
    var _this = this;
    var _a = this.computeTiming(), nextState = _a.nextState, waitMs = _a.waitMs;
    this.timeoutId = setTimeout(function() {
      _this.setState(nextState, function() {
        _this.setTimeout();
      });
    }, waitMs);
  };
  NowTimer2.prototype.clearTimeout = function() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  };
  NowTimer2.contextType = ViewContextType;
  return NowTimer2;
}(Component2);
function buildDayRange(date) {
  var start = startOfDay(date);
  var end = addDays(start, 1);
  return { start, end };
}
var DayHeader = function(_super) {
  __extends(DayHeader2, _super);
  function DayHeader2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.createDayHeaderFormatter = memoize(createDayHeaderFormatter);
    return _this;
  }
  DayHeader2.prototype.render = function() {
    var context = this.context;
    var _a = this.props, dates = _a.dates, dateProfile = _a.dateProfile, datesRepDistinctDays = _a.datesRepDistinctDays, renderIntro = _a.renderIntro;
    var dayHeaderFormat = this.createDayHeaderFormatter(context.options.dayHeaderFormat, datesRepDistinctDays, dates.length);
    return createElement2(NowTimer, { unit: "day" }, function(nowDate, todayRange) {
      return createElement2(
        "tr",
        { role: "row" },
        renderIntro && renderIntro("day"),
        dates.map(function(date) {
          return datesRepDistinctDays ? createElement2(TableDateCell, { key: date.toISOString(), date, dateProfile, todayRange, colCnt: dates.length, dayHeaderFormat }) : createElement2(TableDowCell, { key: date.getUTCDay(), dow: date.getUTCDay(), dayHeaderFormat });
        })
      );
    });
  };
  return DayHeader2;
}(BaseComponent);
function createDayHeaderFormatter(explicitFormat, datesRepDistinctDays, dateCnt) {
  return explicitFormat || computeFallbackHeaderFormat(datesRepDistinctDays, dateCnt);
}
var DaySeriesModel = function() {
  function DaySeriesModel2(range, dateProfileGenerator) {
    var date = range.start;
    var end = range.end;
    var indices = [];
    var dates = [];
    var dayIndex = -1;
    while (date < end) {
      if (dateProfileGenerator.isHiddenDay(date)) {
        indices.push(dayIndex + 0.5);
      } else {
        dayIndex += 1;
        indices.push(dayIndex);
        dates.push(date);
      }
      date = addDays(date, 1);
    }
    this.dates = dates;
    this.indices = indices;
    this.cnt = dates.length;
  }
  DaySeriesModel2.prototype.sliceRange = function(range) {
    var firstIndex = this.getDateDayIndex(range.start);
    var lastIndex = this.getDateDayIndex(addDays(range.end, -1));
    var clippedFirstIndex = Math.max(0, firstIndex);
    var clippedLastIndex = Math.min(this.cnt - 1, lastIndex);
    clippedFirstIndex = Math.ceil(clippedFirstIndex);
    clippedLastIndex = Math.floor(clippedLastIndex);
    if (clippedFirstIndex <= clippedLastIndex) {
      return {
        firstIndex: clippedFirstIndex,
        lastIndex: clippedLastIndex,
        isStart: firstIndex === clippedFirstIndex,
        isEnd: lastIndex === clippedLastIndex
      };
    }
    return null;
  };
  DaySeriesModel2.prototype.getDateDayIndex = function(date) {
    var indices = this.indices;
    var dayOffset = Math.floor(diffDays(this.dates[0], date));
    if (dayOffset < 0) {
      return indices[0] - 1;
    }
    if (dayOffset >= indices.length) {
      return indices[indices.length - 1] + 1;
    }
    return indices[dayOffset];
  };
  return DaySeriesModel2;
}();
var DayTableModel = function() {
  function DayTableModel2(daySeries, breakOnWeeks) {
    var dates = daySeries.dates;
    var daysPerRow;
    var firstDay;
    var rowCnt;
    if (breakOnWeeks) {
      firstDay = dates[0].getUTCDay();
      for (daysPerRow = 1; daysPerRow < dates.length; daysPerRow += 1) {
        if (dates[daysPerRow].getUTCDay() === firstDay) {
          break;
        }
      }
      rowCnt = Math.ceil(dates.length / daysPerRow);
    } else {
      rowCnt = 1;
      daysPerRow = dates.length;
    }
    this.rowCnt = rowCnt;
    this.colCnt = daysPerRow;
    this.daySeries = daySeries;
    this.cells = this.buildCells();
    this.headerDates = this.buildHeaderDates();
  }
  DayTableModel2.prototype.buildCells = function() {
    var rows = [];
    for (var row = 0; row < this.rowCnt; row += 1) {
      var cells = [];
      for (var col = 0; col < this.colCnt; col += 1) {
        cells.push(this.buildCell(row, col));
      }
      rows.push(cells);
    }
    return rows;
  };
  DayTableModel2.prototype.buildCell = function(row, col) {
    var date = this.daySeries.dates[row * this.colCnt + col];
    return {
      key: date.toISOString(),
      date
    };
  };
  DayTableModel2.prototype.buildHeaderDates = function() {
    var dates = [];
    for (var col = 0; col < this.colCnt; col += 1) {
      dates.push(this.cells[0][col].date);
    }
    return dates;
  };
  DayTableModel2.prototype.sliceRange = function(range) {
    var colCnt = this.colCnt;
    var seriesSeg = this.daySeries.sliceRange(range);
    var segs = [];
    if (seriesSeg) {
      var firstIndex = seriesSeg.firstIndex, lastIndex = seriesSeg.lastIndex;
      var index = firstIndex;
      while (index <= lastIndex) {
        var row = Math.floor(index / colCnt);
        var nextIndex = Math.min((row + 1) * colCnt, lastIndex + 1);
        segs.push({
          row,
          firstCol: index % colCnt,
          lastCol: (nextIndex - 1) % colCnt,
          isStart: seriesSeg.isStart && index === firstIndex,
          isEnd: seriesSeg.isEnd && nextIndex - 1 === lastIndex
        });
        index = nextIndex;
      }
    }
    return segs;
  };
  return DayTableModel2;
}();
var Slicer = function() {
  function Slicer2() {
    this.sliceBusinessHours = memoize(this._sliceBusinessHours);
    this.sliceDateSelection = memoize(this._sliceDateSpan);
    this.sliceEventStore = memoize(this._sliceEventStore);
    this.sliceEventDrag = memoize(this._sliceInteraction);
    this.sliceEventResize = memoize(this._sliceInteraction);
    this.forceDayIfListItem = false;
  }
  Slicer2.prototype.sliceProps = function(props, dateProfile, nextDayThreshold, context) {
    var extraArgs = [];
    for (var _i = 4; _i < arguments.length; _i++) {
      extraArgs[_i - 4] = arguments[_i];
    }
    var eventUiBases = props.eventUiBases;
    var eventSegs = this.sliceEventStore.apply(this, __spreadArray([props.eventStore, eventUiBases, dateProfile, nextDayThreshold], extraArgs));
    return {
      dateSelectionSegs: this.sliceDateSelection.apply(this, __spreadArray([props.dateSelection, eventUiBases, context], extraArgs)),
      businessHourSegs: this.sliceBusinessHours.apply(this, __spreadArray([props.businessHours, dateProfile, nextDayThreshold, context], extraArgs)),
      fgEventSegs: eventSegs.fg,
      bgEventSegs: eventSegs.bg,
      eventDrag: this.sliceEventDrag.apply(this, __spreadArray([props.eventDrag, eventUiBases, dateProfile, nextDayThreshold], extraArgs)),
      eventResize: this.sliceEventResize.apply(this, __spreadArray([props.eventResize, eventUiBases, dateProfile, nextDayThreshold], extraArgs)),
      eventSelection: props.eventSelection
    };
  };
  Slicer2.prototype.sliceNowDate = function(date, context) {
    var extraArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      extraArgs[_i - 2] = arguments[_i];
    }
    return this._sliceDateSpan.apply(this, __spreadArray([
      { range: { start: date, end: addMs(date, 1) }, allDay: false },
      {},
      context
    ], extraArgs));
  };
  Slicer2.prototype._sliceBusinessHours = function(businessHours, dateProfile, nextDayThreshold, context) {
    var extraArgs = [];
    for (var _i = 4; _i < arguments.length; _i++) {
      extraArgs[_i - 4] = arguments[_i];
    }
    if (!businessHours) {
      return [];
    }
    return this._sliceEventStore.apply(this, __spreadArray([
      expandRecurring(businessHours, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), context),
      {},
      dateProfile,
      nextDayThreshold
    ], extraArgs)).bg;
  };
  Slicer2.prototype._sliceEventStore = function(eventStore, eventUiBases, dateProfile, nextDayThreshold) {
    var extraArgs = [];
    for (var _i = 4; _i < arguments.length; _i++) {
      extraArgs[_i - 4] = arguments[_i];
    }
    if (eventStore) {
      var rangeRes = sliceEventStore(eventStore, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
      return {
        bg: this.sliceEventRanges(rangeRes.bg, extraArgs),
        fg: this.sliceEventRanges(rangeRes.fg, extraArgs)
      };
    }
    return { bg: [], fg: [] };
  };
  Slicer2.prototype._sliceInteraction = function(interaction, eventUiBases, dateProfile, nextDayThreshold) {
    var extraArgs = [];
    for (var _i = 4; _i < arguments.length; _i++) {
      extraArgs[_i - 4] = arguments[_i];
    }
    if (!interaction) {
      return null;
    }
    var rangeRes = sliceEventStore(interaction.mutatedEvents, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
    return {
      segs: this.sliceEventRanges(rangeRes.fg, extraArgs),
      affectedInstances: interaction.affectedEvents.instances,
      isEvent: interaction.isEvent
    };
  };
  Slicer2.prototype._sliceDateSpan = function(dateSpan, eventUiBases, context) {
    var extraArgs = [];
    for (var _i = 3; _i < arguments.length; _i++) {
      extraArgs[_i - 3] = arguments[_i];
    }
    if (!dateSpan) {
      return [];
    }
    var eventRange = fabricateEventRange(dateSpan, eventUiBases, context);
    var segs = this.sliceRange.apply(this, __spreadArray([dateSpan.range], extraArgs));
    for (var _a = 0, segs_1 = segs; _a < segs_1.length; _a++) {
      var seg = segs_1[_a];
      seg.eventRange = eventRange;
    }
    return segs;
  };
  Slicer2.prototype.sliceEventRanges = function(eventRanges, extraArgs) {
    var segs = [];
    for (var _i = 0, eventRanges_1 = eventRanges; _i < eventRanges_1.length; _i++) {
      var eventRange = eventRanges_1[_i];
      segs.push.apply(segs, this.sliceEventRange(eventRange, extraArgs));
    }
    return segs;
  };
  Slicer2.prototype.sliceEventRange = function(eventRange, extraArgs) {
    var dateRange = eventRange.range;
    if (this.forceDayIfListItem && eventRange.ui.display === "list-item") {
      dateRange = {
        start: dateRange.start,
        end: addDays(dateRange.start, 1)
      };
    }
    var segs = this.sliceRange.apply(this, __spreadArray([dateRange], extraArgs));
    for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
      var seg = segs_2[_i];
      seg.eventRange = eventRange;
      seg.isStart = eventRange.isStart && seg.isStart;
      seg.isEnd = eventRange.isEnd && seg.isEnd;
    }
    return segs;
  };
  return Slicer2;
}();
function computeActiveRange(dateProfile, isComponentAllDay) {
  var range = dateProfile.activeRange;
  if (isComponentAllDay) {
    return range;
  }
  return {
    start: addMs(range.start, dateProfile.slotMinTime.milliseconds),
    end: addMs(range.end, dateProfile.slotMaxTime.milliseconds - 864e5)
  };
}
var VISIBLE_HIDDEN_RE = /^(visible|hidden)$/;
var Scroller = function(_super) {
  __extends(Scroller2, _super);
  function Scroller2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.handleEl = function(el) {
      _this.el = el;
      setRef(_this.props.elRef, el);
    };
    return _this;
  }
  Scroller2.prototype.render = function() {
    var props = this.props;
    var liquid = props.liquid, liquidIsAbsolute = props.liquidIsAbsolute;
    var isAbsolute = liquid && liquidIsAbsolute;
    var className = ["fc-scroller"];
    if (liquid) {
      if (liquidIsAbsolute) {
        className.push("fc-scroller-liquid-absolute");
      } else {
        className.push("fc-scroller-liquid");
      }
    }
    return createElement2("div", { ref: this.handleEl, className: className.join(" "), style: {
      overflowX: props.overflowX,
      overflowY: props.overflowY,
      left: isAbsolute && -(props.overcomeLeft || 0) || "",
      right: isAbsolute && -(props.overcomeRight || 0) || "",
      bottom: isAbsolute && -(props.overcomeBottom || 0) || "",
      marginLeft: !isAbsolute && -(props.overcomeLeft || 0) || "",
      marginRight: !isAbsolute && -(props.overcomeRight || 0) || "",
      marginBottom: !isAbsolute && -(props.overcomeBottom || 0) || "",
      maxHeight: props.maxHeight || ""
    } }, props.children);
  };
  Scroller2.prototype.needsXScrolling = function() {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
      return false;
    }
    var el = this.el;
    var realClientWidth = this.el.getBoundingClientRect().width - this.getYScrollbarWidth();
    var children = el.children;
    for (var i = 0; i < children.length; i += 1) {
      var childEl = children[i];
      if (childEl.getBoundingClientRect().width > realClientWidth) {
        return true;
      }
    }
    return false;
  };
  Scroller2.prototype.needsYScrolling = function() {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
      return false;
    }
    var el = this.el;
    var realClientHeight = this.el.getBoundingClientRect().height - this.getXScrollbarWidth();
    var children = el.children;
    for (var i = 0; i < children.length; i += 1) {
      var childEl = children[i];
      if (childEl.getBoundingClientRect().height > realClientHeight) {
        return true;
      }
    }
    return false;
  };
  Scroller2.prototype.getXScrollbarWidth = function() {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
      return 0;
    }
    return this.el.offsetHeight - this.el.clientHeight;
  };
  Scroller2.prototype.getYScrollbarWidth = function() {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
      return 0;
    }
    return this.el.offsetWidth - this.el.clientWidth;
  };
  return Scroller2;
}(BaseComponent);
var RefMap = function() {
  function RefMap2(masterCallback) {
    var _this = this;
    this.masterCallback = masterCallback;
    this.currentMap = {};
    this.depths = {};
    this.callbackMap = {};
    this.handleValue = function(val, key) {
      var _a = _this, depths = _a.depths, currentMap = _a.currentMap;
      var removed = false;
      var added = false;
      if (val !== null) {
        removed = key in currentMap;
        currentMap[key] = val;
        depths[key] = (depths[key] || 0) + 1;
        added = true;
      } else {
        depths[key] -= 1;
        if (!depths[key]) {
          delete currentMap[key];
          delete _this.callbackMap[key];
          removed = true;
        }
      }
      if (_this.masterCallback) {
        if (removed) {
          _this.masterCallback(null, String(key));
        }
        if (added) {
          _this.masterCallback(val, String(key));
        }
      }
    };
  }
  RefMap2.prototype.createRef = function(key) {
    var _this = this;
    var refCallback = this.callbackMap[key];
    if (!refCallback) {
      refCallback = this.callbackMap[key] = function(val) {
        _this.handleValue(val, String(key));
      };
    }
    return refCallback;
  };
  RefMap2.prototype.collect = function(startIndex, endIndex, step) {
    return collectFromHash(this.currentMap, startIndex, endIndex, step);
  };
  RefMap2.prototype.getAll = function() {
    return hashValuesToArray(this.currentMap);
  };
  return RefMap2;
}();
function computeShrinkWidth(chunkEls) {
  var shrinkCells = findElements(chunkEls, ".fc-scrollgrid-shrink");
  var largestWidth = 0;
  for (var _i = 0, shrinkCells_1 = shrinkCells; _i < shrinkCells_1.length; _i++) {
    var shrinkCell = shrinkCells_1[_i];
    largestWidth = Math.max(largestWidth, computeSmallestCellWidth(shrinkCell));
  }
  return Math.ceil(largestWidth);
}
function getSectionHasLiquidHeight(props, sectionConfig) {
  return props.liquid && sectionConfig.liquid;
}
function getAllowYScrolling(props, sectionConfig) {
  return sectionConfig.maxHeight != null || getSectionHasLiquidHeight(props, sectionConfig);
}
function renderChunkContent(sectionConfig, chunkConfig, arg, isHeader) {
  var expandRows = arg.expandRows;
  var content = typeof chunkConfig.content === "function" ? chunkConfig.content(arg) : createElement2("table", {
    role: "presentation",
    className: [
      chunkConfig.tableClassName,
      sectionConfig.syncRowHeights ? "fc-scrollgrid-sync-table" : ""
    ].join(" "),
    style: {
      minWidth: arg.tableMinWidth,
      width: arg.clientWidth,
      height: expandRows ? arg.clientHeight : ""
    }
  }, arg.tableColGroupNode, createElement2(isHeader ? "thead" : "tbody", {
    role: "presentation"
  }, typeof chunkConfig.rowContent === "function" ? chunkConfig.rowContent(arg) : chunkConfig.rowContent));
  return content;
}
function isColPropsEqual(cols0, cols1) {
  return isArraysEqual(cols0, cols1, isPropsEqual);
}
function renderMicroColGroup(cols, shrinkWidth) {
  var colNodes = [];
  for (var _i = 0, cols_1 = cols; _i < cols_1.length; _i++) {
    var colProps = cols_1[_i];
    var span = colProps.span || 1;
    for (var i = 0; i < span; i += 1) {
      colNodes.push(createElement2("col", { style: {
        width: colProps.width === "shrink" ? sanitizeShrinkWidth(shrinkWidth) : colProps.width || "",
        minWidth: colProps.minWidth || ""
      } }));
    }
  }
  return createElement2.apply(void 0, __spreadArray(["colgroup", {}], colNodes));
}
function sanitizeShrinkWidth(shrinkWidth) {
  return shrinkWidth == null ? 4 : shrinkWidth;
}
function hasShrinkWidth(cols) {
  for (var _i = 0, cols_2 = cols; _i < cols_2.length; _i++) {
    var col = cols_2[_i];
    if (col.width === "shrink") {
      return true;
    }
  }
  return false;
}
function getScrollGridClassNames(liquid, context) {
  var classNames = [
    "fc-scrollgrid",
    context.theme.getClass("table")
  ];
  if (liquid) {
    classNames.push("fc-scrollgrid-liquid");
  }
  return classNames;
}
function getSectionClassNames(sectionConfig, wholeTableVGrow) {
  var classNames = [
    "fc-scrollgrid-section",
    "fc-scrollgrid-section-" + sectionConfig.type,
    sectionConfig.className
  ];
  if (wholeTableVGrow && sectionConfig.liquid && sectionConfig.maxHeight == null) {
    classNames.push("fc-scrollgrid-section-liquid");
  }
  if (sectionConfig.isSticky) {
    classNames.push("fc-scrollgrid-section-sticky");
  }
  return classNames;
}
function renderScrollShim(arg) {
  return createElement2("div", { className: "fc-scrollgrid-sticky-shim", style: {
    width: arg.clientWidth,
    minWidth: arg.tableMinWidth
  } });
}
function getStickyHeaderDates(options) {
  var stickyHeaderDates = options.stickyHeaderDates;
  if (stickyHeaderDates == null || stickyHeaderDates === "auto") {
    stickyHeaderDates = options.height === "auto" || options.viewHeight === "auto";
  }
  return stickyHeaderDates;
}
function getStickyFooterScrollbar(options) {
  var stickyFooterScrollbar = options.stickyFooterScrollbar;
  if (stickyFooterScrollbar == null || stickyFooterScrollbar === "auto") {
    stickyFooterScrollbar = options.height === "auto" || options.viewHeight === "auto";
  }
  return stickyFooterScrollbar;
}
var SimpleScrollGrid = function(_super) {
  __extends(SimpleScrollGrid2, _super);
  function SimpleScrollGrid2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.processCols = memoize(function(a) {
      return a;
    }, isColPropsEqual);
    _this.renderMicroColGroup = memoize(renderMicroColGroup);
    _this.scrollerRefs = new RefMap();
    _this.scrollerElRefs = new RefMap(_this._handleScrollerEl.bind(_this));
    _this.state = {
      shrinkWidth: null,
      forceYScrollbars: false,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    };
    _this.handleSizing = function() {
      _this.safeSetState(__assign({ shrinkWidth: _this.computeShrinkWidth() }, _this.computeScrollerDims()));
    };
    return _this;
  }
  SimpleScrollGrid2.prototype.render = function() {
    var _a = this, props = _a.props, state = _a.state, context = _a.context;
    var sectionConfigs = props.sections || [];
    var cols = this.processCols(props.cols);
    var microColGroupNode = this.renderMicroColGroup(cols, state.shrinkWidth);
    var classNames = getScrollGridClassNames(props.liquid, context);
    if (props.collapsibleWidth) {
      classNames.push("fc-scrollgrid-collapsible");
    }
    var configCnt = sectionConfigs.length;
    var configI = 0;
    var currentConfig;
    var headSectionNodes = [];
    var bodySectionNodes = [];
    var footSectionNodes = [];
    while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === "header") {
      headSectionNodes.push(this.renderSection(currentConfig, microColGroupNode, true));
      configI += 1;
    }
    while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === "body") {
      bodySectionNodes.push(this.renderSection(currentConfig, microColGroupNode, false));
      configI += 1;
    }
    while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === "footer") {
      footSectionNodes.push(this.renderSection(currentConfig, microColGroupNode, true));
      configI += 1;
    }
    var isBuggy = !getCanVGrowWithinCell();
    var roleAttrs = { role: "rowgroup" };
    return createElement2("table", {
      role: "grid",
      className: classNames.join(" "),
      style: { height: props.height }
    }, Boolean(!isBuggy && headSectionNodes.length) && createElement2.apply(void 0, __spreadArray(["thead", roleAttrs], headSectionNodes)), Boolean(!isBuggy && bodySectionNodes.length) && createElement2.apply(void 0, __spreadArray(["tbody", roleAttrs], bodySectionNodes)), Boolean(!isBuggy && footSectionNodes.length) && createElement2.apply(void 0, __spreadArray(["tfoot", roleAttrs], footSectionNodes)), isBuggy && createElement2.apply(void 0, __spreadArray(__spreadArray(__spreadArray(["tbody", roleAttrs], headSectionNodes), bodySectionNodes), footSectionNodes)));
  };
  SimpleScrollGrid2.prototype.renderSection = function(sectionConfig, microColGroupNode, isHeader) {
    if ("outerContent" in sectionConfig) {
      return createElement2(Fragment2, { key: sectionConfig.key }, sectionConfig.outerContent);
    }
    return createElement2("tr", { key: sectionConfig.key, role: "presentation", className: getSectionClassNames(sectionConfig, this.props.liquid).join(" ") }, this.renderChunkTd(sectionConfig, microColGroupNode, sectionConfig.chunk, isHeader));
  };
  SimpleScrollGrid2.prototype.renderChunkTd = function(sectionConfig, microColGroupNode, chunkConfig, isHeader) {
    if ("outerContent" in chunkConfig) {
      return chunkConfig.outerContent;
    }
    var props = this.props;
    var _a = this.state, forceYScrollbars = _a.forceYScrollbars, scrollerClientWidths = _a.scrollerClientWidths, scrollerClientHeights = _a.scrollerClientHeights;
    var needsYScrolling = getAllowYScrolling(props, sectionConfig);
    var isLiquid = getSectionHasLiquidHeight(props, sectionConfig);
    var overflowY = !props.liquid ? "visible" : forceYScrollbars ? "scroll" : !needsYScrolling ? "hidden" : "auto";
    var sectionKey = sectionConfig.key;
    var content = renderChunkContent(sectionConfig, chunkConfig, {
      tableColGroupNode: microColGroupNode,
      tableMinWidth: "",
      clientWidth: !props.collapsibleWidth && scrollerClientWidths[sectionKey] !== void 0 ? scrollerClientWidths[sectionKey] : null,
      clientHeight: scrollerClientHeights[sectionKey] !== void 0 ? scrollerClientHeights[sectionKey] : null,
      expandRows: sectionConfig.expandRows,
      syncRowHeights: false,
      rowSyncHeights: [],
      reportRowHeightChange: function() {
      }
    }, isHeader);
    return createElement2(isHeader ? "th" : "td", {
      ref: chunkConfig.elRef,
      role: "presentation"
    }, createElement2(
      "div",
      { className: "fc-scroller-harness" + (isLiquid ? " fc-scroller-harness-liquid" : "") },
      createElement2(Scroller, { ref: this.scrollerRefs.createRef(sectionKey), elRef: this.scrollerElRefs.createRef(sectionKey), overflowY, overflowX: !props.liquid ? "visible" : "hidden", maxHeight: sectionConfig.maxHeight, liquid: isLiquid, liquidIsAbsolute: true }, content)
    ));
  };
  SimpleScrollGrid2.prototype._handleScrollerEl = function(scrollerEl, key) {
    var section = getSectionByKey(this.props.sections, key);
    if (section) {
      setRef(section.chunk.scrollerElRef, scrollerEl);
    }
  };
  SimpleScrollGrid2.prototype.componentDidMount = function() {
    this.handleSizing();
    this.context.addResizeHandler(this.handleSizing);
  };
  SimpleScrollGrid2.prototype.componentDidUpdate = function() {
    this.handleSizing();
  };
  SimpleScrollGrid2.prototype.componentWillUnmount = function() {
    this.context.removeResizeHandler(this.handleSizing);
  };
  SimpleScrollGrid2.prototype.computeShrinkWidth = function() {
    return hasShrinkWidth(this.props.cols) ? computeShrinkWidth(this.scrollerElRefs.getAll()) : 0;
  };
  SimpleScrollGrid2.prototype.computeScrollerDims = function() {
    var scrollbarWidth = getScrollbarWidths();
    var _a = this, scrollerRefs = _a.scrollerRefs, scrollerElRefs = _a.scrollerElRefs;
    var forceYScrollbars = false;
    var scrollerClientWidths = {};
    var scrollerClientHeights = {};
    for (var sectionKey in scrollerRefs.currentMap) {
      var scroller = scrollerRefs.currentMap[sectionKey];
      if (scroller && scroller.needsYScrolling()) {
        forceYScrollbars = true;
        break;
      }
    }
    for (var _i = 0, _b = this.props.sections; _i < _b.length; _i++) {
      var section = _b[_i];
      var sectionKey = section.key;
      var scrollerEl = scrollerElRefs.currentMap[sectionKey];
      if (scrollerEl) {
        var harnessEl = scrollerEl.parentNode;
        scrollerClientWidths[sectionKey] = Math.floor(harnessEl.getBoundingClientRect().width - (forceYScrollbars ? scrollbarWidth.y : 0));
        scrollerClientHeights[sectionKey] = Math.floor(harnessEl.getBoundingClientRect().height);
      }
    }
    return { forceYScrollbars, scrollerClientWidths, scrollerClientHeights };
  };
  return SimpleScrollGrid2;
}(BaseComponent);
SimpleScrollGrid.addStateEquality({
  scrollerClientWidths: isPropsEqual,
  scrollerClientHeights: isPropsEqual
});
function getSectionByKey(sections, key) {
  for (var _i = 0, sections_1 = sections; _i < sections_1.length; _i++) {
    var section = sections_1[_i];
    if (section.key === key) {
      return section;
    }
  }
  return null;
}
var EventRoot = function(_super) {
  __extends(EventRoot2, _super);
  function EventRoot2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.elRef = createRef2();
    return _this;
  }
  EventRoot2.prototype.render = function() {
    var _a = this, props = _a.props, context = _a.context;
    var options = context.options;
    var seg = props.seg;
    var eventRange = seg.eventRange;
    var ui = eventRange.ui;
    var hookProps = {
      event: new EventApi(context, eventRange.def, eventRange.instance),
      view: context.viewApi,
      timeText: props.timeText,
      textColor: ui.textColor,
      backgroundColor: ui.backgroundColor,
      borderColor: ui.borderColor,
      isDraggable: !props.disableDragging && computeSegDraggable(seg, context),
      isStartResizable: !props.disableResizing && computeSegStartResizable(seg, context),
      isEndResizable: !props.disableResizing && computeSegEndResizable(seg),
      isMirror: Boolean(props.isDragging || props.isResizing || props.isDateSelecting),
      isStart: Boolean(seg.isStart),
      isEnd: Boolean(seg.isEnd),
      isPast: Boolean(props.isPast),
      isFuture: Boolean(props.isFuture),
      isToday: Boolean(props.isToday),
      isSelected: Boolean(props.isSelected),
      isDragging: Boolean(props.isDragging),
      isResizing: Boolean(props.isResizing)
    };
    var standardClassNames = getEventClassNames(hookProps).concat(ui.classNames);
    return createElement2(RenderHook, { hookProps, classNames: options.eventClassNames, content: options.eventContent, defaultContent: props.defaultContent, didMount: options.eventDidMount, willUnmount: options.eventWillUnmount, elRef: this.elRef }, function(rootElRef, customClassNames, innerElRef, innerContent) {
      return props.children(rootElRef, standardClassNames.concat(customClassNames), innerElRef, innerContent, hookProps);
    });
  };
  EventRoot2.prototype.componentDidMount = function() {
    setElSeg(this.elRef.current, this.props.seg);
  };
  EventRoot2.prototype.componentDidUpdate = function(prevProps) {
    var seg = this.props.seg;
    if (seg !== prevProps.seg) {
      setElSeg(this.elRef.current, seg);
    }
  };
  return EventRoot2;
}(BaseComponent);
var StandardEvent = function(_super) {
  __extends(StandardEvent2, _super);
  function StandardEvent2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  StandardEvent2.prototype.render = function() {
    var _a = this, props = _a.props, context = _a.context;
    var seg = props.seg;
    var timeFormat = context.options.eventTimeFormat || props.defaultTimeFormat;
    var timeText = buildSegTimeText(seg, timeFormat, context, props.defaultDisplayEventTime, props.defaultDisplayEventEnd);
    return createElement2(EventRoot, { seg, timeText, disableDragging: props.disableDragging, disableResizing: props.disableResizing, defaultContent: props.defaultContent || renderInnerContent$1, isDragging: props.isDragging, isResizing: props.isResizing, isDateSelecting: props.isDateSelecting, isSelected: props.isSelected, isPast: props.isPast, isFuture: props.isFuture, isToday: props.isToday }, function(rootElRef, classNames, innerElRef, innerContent, hookProps) {
      return createElement2(
        "a",
        __assign({ className: props.extraClassNames.concat(classNames).join(" "), style: {
          borderColor: hookProps.borderColor,
          backgroundColor: hookProps.backgroundColor
        }, ref: rootElRef }, getSegAnchorAttrs(seg, context)),
        createElement2("div", { className: "fc-event-main", ref: innerElRef, style: { color: hookProps.textColor } }, innerContent),
        hookProps.isStartResizable && createElement2("div", { className: "fc-event-resizer fc-event-resizer-start" }),
        hookProps.isEndResizable && createElement2("div", { className: "fc-event-resizer fc-event-resizer-end" })
      );
    });
  };
  return StandardEvent2;
}(BaseComponent);
function renderInnerContent$1(innerProps) {
  return createElement2(
    "div",
    { className: "fc-event-main-frame" },
    innerProps.timeText && createElement2("div", { className: "fc-event-time" }, innerProps.timeText),
    createElement2(
      "div",
      { className: "fc-event-title-container" },
      createElement2("div", { className: "fc-event-title fc-sticky" }, innerProps.event.title || createElement2(Fragment2, null, "\xA0"))
    )
  );
}
var DAY_NUM_FORMAT = createFormatter({ day: "numeric" });
var DayCellContent = function(_super) {
  __extends(DayCellContent2, _super);
  function DayCellContent2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  DayCellContent2.prototype.render = function() {
    var _a = this, props = _a.props, context = _a.context;
    var options = context.options;
    var hookProps = refineDayCellHookProps({
      date: props.date,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      showDayNumber: props.showDayNumber,
      extraProps: props.extraHookProps,
      viewApi: context.viewApi,
      dateEnv: context.dateEnv
    });
    return createElement2(ContentHook, { hookProps, content: options.dayCellContent, defaultContent: props.defaultContent }, props.children);
  };
  return DayCellContent2;
}(BaseComponent);
function refineDayCellHookProps(raw) {
  var date = raw.date, dateEnv = raw.dateEnv;
  var dayMeta = getDateMeta(date, raw.todayRange, null, raw.dateProfile);
  return __assign(__assign(__assign({ date: dateEnv.toDate(date), view: raw.viewApi }, dayMeta), { dayNumberText: raw.showDayNumber ? dateEnv.format(date, DAY_NUM_FORMAT) : "" }), raw.extraProps);
}
var DayCellRoot = function(_super) {
  __extends(DayCellRoot2, _super);
  function DayCellRoot2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.refineHookProps = memoizeObjArg(refineDayCellHookProps);
    _this.normalizeClassNames = buildClassNameNormalizer();
    return _this;
  }
  DayCellRoot2.prototype.render = function() {
    var _a = this, props = _a.props, context = _a.context;
    var options = context.options;
    var hookProps = this.refineHookProps({
      date: props.date,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      showDayNumber: props.showDayNumber,
      extraProps: props.extraHookProps,
      viewApi: context.viewApi,
      dateEnv: context.dateEnv
    });
    var classNames = getDayClassNames(hookProps, context.theme).concat(hookProps.isDisabled ? [] : this.normalizeClassNames(options.dayCellClassNames, hookProps));
    var dataAttrs = hookProps.isDisabled ? {} : {
      "data-date": formatDayString(props.date)
    };
    return createElement2(MountHook, { hookProps, didMount: options.dayCellDidMount, willUnmount: options.dayCellWillUnmount, elRef: props.elRef }, function(rootElRef) {
      return props.children(rootElRef, classNames, dataAttrs, hookProps.isDisabled);
    });
  };
  return DayCellRoot2;
}(BaseComponent);
function renderFill(fillType) {
  return createElement2("div", { className: "fc-" + fillType });
}
var BgEvent = function(props) {
  return createElement2(EventRoot, { defaultContent: renderInnerContent, seg: props.seg, timeText: "", disableDragging: true, disableResizing: true, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: false, isPast: props.isPast, isFuture: props.isFuture, isToday: props.isToday }, function(rootElRef, classNames, innerElRef, innerContent, hookProps) {
    return createElement2("div", { ref: rootElRef, className: ["fc-bg-event"].concat(classNames).join(" "), style: {
      backgroundColor: hookProps.backgroundColor
    } }, innerContent);
  });
};
function renderInnerContent(props) {
  var title = props.event.title;
  return title && createElement2("div", { className: "fc-event-title" }, props.event.title);
}
var WeekNumberRoot = function(props) {
  return createElement2(ViewContextType.Consumer, null, function(context) {
    var dateEnv = context.dateEnv, options = context.options;
    var date = props.date;
    var format = options.weekNumberFormat || props.defaultFormat;
    var num = dateEnv.computeWeekNumber(date);
    var text = dateEnv.format(date, format);
    var hookProps = { num, text, date };
    return createElement2(RenderHook, { hookProps, classNames: options.weekNumberClassNames, content: options.weekNumberContent, defaultContent: renderInner, didMount: options.weekNumberDidMount, willUnmount: options.weekNumberWillUnmount }, props.children);
  });
};
function renderInner(innerProps) {
  return innerProps.text;
}
var PADDING_FROM_VIEWPORT = 10;
var Popover = function(_super) {
  __extends(Popover2, _super);
  function Popover2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.state = {
      titleId: getUniqueDomId()
    };
    _this.handleRootEl = function(el) {
      _this.rootEl = el;
      if (_this.props.elRef) {
        setRef(_this.props.elRef, el);
      }
    };
    _this.handleDocumentMouseDown = function(ev) {
      var target = getEventTargetViaRoot(ev);
      if (!_this.rootEl.contains(target)) {
        _this.handleCloseClick();
      }
    };
    _this.handleDocumentKeyDown = function(ev) {
      if (ev.key === "Escape") {
        _this.handleCloseClick();
      }
    };
    _this.handleCloseClick = function() {
      var onClose = _this.props.onClose;
      if (onClose) {
        onClose();
      }
    };
    return _this;
  }
  Popover2.prototype.render = function() {
    var _a = this.context, theme = _a.theme, options = _a.options;
    var _b = this, props = _b.props, state = _b.state;
    var classNames = [
      "fc-popover",
      theme.getClass("popover")
    ].concat(props.extraClassNames || []);
    return createPortal2(createElement2(
      "div",
      __assign({ id: props.id, className: classNames.join(" "), "aria-labelledby": state.titleId }, props.extraAttrs, { ref: this.handleRootEl }),
      createElement2(
        "div",
        { className: "fc-popover-header " + theme.getClass("popoverHeader") },
        createElement2("span", { className: "fc-popover-title", id: state.titleId }, props.title),
        createElement2("span", { className: "fc-popover-close " + theme.getIconClass("close"), title: options.closeHint, onClick: this.handleCloseClick })
      ),
      createElement2("div", { className: "fc-popover-body " + theme.getClass("popoverContent") }, props.children)
    ), props.parentEl);
  };
  Popover2.prototype.componentDidMount = function() {
    document.addEventListener("mousedown", this.handleDocumentMouseDown);
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    this.updateSize();
  };
  Popover2.prototype.componentWillUnmount = function() {
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
  };
  Popover2.prototype.updateSize = function() {
    var isRtl = this.context.isRtl;
    var _a = this.props, alignmentEl = _a.alignmentEl, alignGridTop = _a.alignGridTop;
    var rootEl = this.rootEl;
    var alignmentRect = computeClippedClientRect(alignmentEl);
    if (alignmentRect) {
      var popoverDims = rootEl.getBoundingClientRect();
      var popoverTop = alignGridTop ? elementClosest(alignmentEl, ".fc-scrollgrid").getBoundingClientRect().top : alignmentRect.top;
      var popoverLeft = isRtl ? alignmentRect.right - popoverDims.width : alignmentRect.left;
      popoverTop = Math.max(popoverTop, PADDING_FROM_VIEWPORT);
      popoverLeft = Math.min(popoverLeft, document.documentElement.clientWidth - PADDING_FROM_VIEWPORT - popoverDims.width);
      popoverLeft = Math.max(popoverLeft, PADDING_FROM_VIEWPORT);
      var origin_1 = rootEl.offsetParent.getBoundingClientRect();
      applyStyle(rootEl, {
        top: popoverTop - origin_1.top,
        left: popoverLeft - origin_1.left
      });
    }
  };
  return Popover2;
}(BaseComponent);
var MorePopover = function(_super) {
  __extends(MorePopover2, _super);
  function MorePopover2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.handleRootEl = function(rootEl) {
      _this.rootEl = rootEl;
      if (rootEl) {
        _this.context.registerInteractiveComponent(_this, {
          el: rootEl,
          useEventCenter: false
        });
      } else {
        _this.context.unregisterInteractiveComponent(_this);
      }
    };
    return _this;
  }
  MorePopover2.prototype.render = function() {
    var _a = this.context, options = _a.options, dateEnv = _a.dateEnv;
    var props = this.props;
    var startDate = props.startDate, todayRange = props.todayRange, dateProfile = props.dateProfile;
    var title = dateEnv.format(startDate, options.dayPopoverFormat);
    return createElement2(DayCellRoot, { date: startDate, dateProfile, todayRange, elRef: this.handleRootEl }, function(rootElRef, dayClassNames, dataAttrs) {
      return createElement2(
        Popover,
        { elRef: rootElRef, id: props.id, title, extraClassNames: ["fc-more-popover"].concat(dayClassNames), extraAttrs: dataAttrs, parentEl: props.parentEl, alignmentEl: props.alignmentEl, alignGridTop: props.alignGridTop, onClose: props.onClose },
        createElement2(DayCellContent, { date: startDate, dateProfile, todayRange }, function(innerElRef, innerContent) {
          return innerContent && createElement2("div", { className: "fc-more-popover-misc", ref: innerElRef }, innerContent);
        }),
        props.children
      );
    });
  };
  MorePopover2.prototype.queryHit = function(positionLeft, positionTop, elWidth, elHeight) {
    var _a = this, rootEl = _a.rootEl, props = _a.props;
    if (positionLeft >= 0 && positionLeft < elWidth && positionTop >= 0 && positionTop < elHeight) {
      return {
        dateProfile: props.dateProfile,
        dateSpan: __assign({ allDay: true, range: {
          start: props.startDate,
          end: props.endDate
        } }, props.extraDateSpan),
        dayEl: rootEl,
        rect: {
          left: 0,
          top: 0,
          right: elWidth,
          bottom: elHeight
        },
        layer: 1
      };
    }
    return null;
  };
  return MorePopover2;
}(DateComponent);
var MoreLinkRoot = function(_super) {
  __extends(MoreLinkRoot2, _super);
  function MoreLinkRoot2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.linkElRef = createRef2();
    _this.state = {
      isPopoverOpen: false,
      popoverId: getUniqueDomId()
    };
    _this.handleClick = function(ev) {
      var _a = _this, props = _a.props, context = _a.context;
      var moreLinkClick = context.options.moreLinkClick;
      var date = computeRange(props).start;
      function buildPublicSeg(seg) {
        var _a2 = seg.eventRange, def = _a2.def, instance = _a2.instance, range = _a2.range;
        return {
          event: new EventApi(context, def, instance),
          start: context.dateEnv.toDate(range.start),
          end: context.dateEnv.toDate(range.end),
          isStart: seg.isStart,
          isEnd: seg.isEnd
        };
      }
      if (typeof moreLinkClick === "function") {
        moreLinkClick = moreLinkClick({
          date,
          allDay: Boolean(props.allDayDate),
          allSegs: props.allSegs.map(buildPublicSeg),
          hiddenSegs: props.hiddenSegs.map(buildPublicSeg),
          jsEvent: ev,
          view: context.viewApi
        });
      }
      if (!moreLinkClick || moreLinkClick === "popover") {
        _this.setState({ isPopoverOpen: true });
      } else if (typeof moreLinkClick === "string") {
        context.calendarApi.zoomTo(date, moreLinkClick);
      }
    };
    _this.handlePopoverClose = function() {
      _this.setState({ isPopoverOpen: false });
    };
    return _this;
  }
  MoreLinkRoot2.prototype.render = function() {
    var _this = this;
    var _a = this, props = _a.props, state = _a.state;
    return createElement2(ViewContextType.Consumer, null, function(context) {
      var viewApi = context.viewApi, options = context.options, calendarApi = context.calendarApi;
      var moreLinkText = options.moreLinkText;
      var moreCnt = props.moreCnt;
      var range = computeRange(props);
      var text = typeof moreLinkText === "function" ? moreLinkText.call(calendarApi, moreCnt) : "+" + moreCnt + " " + moreLinkText;
      var title = formatWithOrdinals(options.moreLinkHint, [moreCnt], text);
      var hookProps = {
        num: moreCnt,
        shortText: "+" + moreCnt,
        text,
        view: viewApi
      };
      return createElement2(
        Fragment2,
        null,
        Boolean(props.moreCnt) && createElement2(RenderHook, { elRef: _this.linkElRef, hookProps, classNames: options.moreLinkClassNames, content: options.moreLinkContent, defaultContent: props.defaultContent || renderMoreLinkInner, didMount: options.moreLinkDidMount, willUnmount: options.moreLinkWillUnmount }, function(rootElRef, customClassNames, innerElRef, innerContent) {
          return props.children(rootElRef, ["fc-more-link"].concat(customClassNames), innerElRef, innerContent, _this.handleClick, title, state.isPopoverOpen, state.isPopoverOpen ? state.popoverId : "");
        }),
        state.isPopoverOpen && createElement2(MorePopover, { id: state.popoverId, startDate: range.start, endDate: range.end, dateProfile: props.dateProfile, todayRange: props.todayRange, extraDateSpan: props.extraDateSpan, parentEl: _this.parentEl, alignmentEl: props.alignmentElRef.current, alignGridTop: props.alignGridTop, onClose: _this.handlePopoverClose }, props.popoverContent())
      );
    });
  };
  MoreLinkRoot2.prototype.componentDidMount = function() {
    this.updateParentEl();
  };
  MoreLinkRoot2.prototype.componentDidUpdate = function() {
    this.updateParentEl();
  };
  MoreLinkRoot2.prototype.updateParentEl = function() {
    if (this.linkElRef.current) {
      this.parentEl = elementClosest(this.linkElRef.current, ".fc-view-harness");
    }
  };
  return MoreLinkRoot2;
}(BaseComponent);
function renderMoreLinkInner(props) {
  return props.text;
}
function computeRange(props) {
  if (props.allDayDate) {
    return {
      start: props.allDayDate,
      end: addDays(props.allDayDate, 1)
    };
  }
  var hiddenSegs = props.hiddenSegs;
  return {
    start: computeEarliestSegStart(hiddenSegs),
    end: computeLatestSegEnd(hiddenSegs)
  };
}
function computeEarliestSegStart(segs) {
  return segs.reduce(pickEarliestStart).eventRange.range.start;
}
function pickEarliestStart(seg0, seg1) {
  return seg0.eventRange.range.start < seg1.eventRange.range.start ? seg0 : seg1;
}
function computeLatestSegEnd(segs) {
  return segs.reduce(pickLatestEnd).eventRange.range.end;
}
function pickLatestEnd(seg0, seg1) {
  return seg0.eventRange.range.end > seg1.eventRange.range.end ? seg0 : seg1;
}

// node_modules/@fullcalendar/react/dist/main.js
var FullCalendar = function(_super) {
  __extends(FullCalendar2, _super);
  function FullCalendar2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this._calendarApi = new CalendarApi();
    return _this;
  }
  FullCalendar2.prototype.render = function() {
    return React.createElement(CalendarDataProvider, { optionOverrides: this.props, calendarApi: this._calendarApi }, function(data) {
      return React.createElement(CalendarRoot, { options: data.calendarOptions, theme: data.theme, emitter: data.emitter }, function(classNames, height, isHeightAuto, forPrint) {
        return React.createElement(
          "div",
          { className: classNames.join(" "), style: { height } },
          React.createElement(CalendarContent, __assign({ isHeightAuto, forPrint }, data))
        );
      });
    });
  };
  FullCalendar2.prototype.getApi = function() {
    return this._calendarApi;
  };
  return FullCalendar2;
}(React.Component);
var main_default = FullCalendar;

// node_modules/@fullcalendar/daygrid/main.js
var TableView = function(_super) {
  __extends(TableView2, _super);
  function TableView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.headerElRef = createRef2();
    return _this;
  }
  TableView2.prototype.renderSimpleLayout = function(headerRowContent, bodyContent) {
    var _a = this, props = _a.props, context = _a.context;
    var sections = [];
    var stickyHeaderDates = getStickyHeaderDates(context.options);
    if (headerRowContent) {
      sections.push({
        type: "header",
        key: "header",
        isSticky: stickyHeaderDates,
        chunk: {
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: headerRowContent
        }
      });
    }
    sections.push({
      type: "body",
      key: "body",
      liquid: true,
      chunk: { content: bodyContent }
    });
    return createElement2(ViewRoot, { viewSpec: context.viewSpec }, function(rootElRef, classNames) {
      return createElement2(
        "div",
        { ref: rootElRef, className: ["fc-daygrid"].concat(classNames).join(" ") },
        createElement2(SimpleScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: props.forPrint, cols: [], sections })
      );
    });
  };
  TableView2.prototype.renderHScrollLayout = function(headerRowContent, bodyContent, colCnt, dayMinWidth) {
    var ScrollGrid = this.context.pluginHooks.scrollGridImpl;
    if (!ScrollGrid) {
      throw new Error("No ScrollGrid implementation");
    }
    var _a = this, props = _a.props, context = _a.context;
    var stickyHeaderDates = !props.forPrint && getStickyHeaderDates(context.options);
    var stickyFooterScrollbar = !props.forPrint && getStickyFooterScrollbar(context.options);
    var sections = [];
    if (headerRowContent) {
      sections.push({
        type: "header",
        key: "header",
        isSticky: stickyHeaderDates,
        chunks: [{
          key: "main",
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: headerRowContent
        }]
      });
    }
    sections.push({
      type: "body",
      key: "body",
      liquid: true,
      chunks: [{
        key: "main",
        content: bodyContent
      }]
    });
    if (stickyFooterScrollbar) {
      sections.push({
        type: "footer",
        key: "footer",
        isSticky: true,
        chunks: [{
          key: "main",
          content: renderScrollShim
        }]
      });
    }
    return createElement2(ViewRoot, { viewSpec: context.viewSpec }, function(rootElRef, classNames) {
      return createElement2(
        "div",
        { ref: rootElRef, className: ["fc-daygrid"].concat(classNames).join(" ") },
        createElement2(ScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: props.forPrint, colGroups: [{ cols: [{ span: colCnt, minWidth: dayMinWidth }] }], sections })
      );
    });
  };
  return TableView2;
}(DateComponent);
function splitSegsByRow(segs, rowCnt) {
  var byRow = [];
  for (var i = 0; i < rowCnt; i += 1) {
    byRow[i] = [];
  }
  for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
    var seg = segs_1[_i];
    byRow[seg.row].push(seg);
  }
  return byRow;
}
function splitSegsByFirstCol(segs, colCnt) {
  var byCol = [];
  for (var i = 0; i < colCnt; i += 1) {
    byCol[i] = [];
  }
  for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
    var seg = segs_2[_i];
    byCol[seg.firstCol].push(seg);
  }
  return byCol;
}
function splitInteractionByRow(ui, rowCnt) {
  var byRow = [];
  if (!ui) {
    for (var i = 0; i < rowCnt; i += 1) {
      byRow[i] = null;
    }
  } else {
    for (var i = 0; i < rowCnt; i += 1) {
      byRow[i] = {
        affectedInstances: ui.affectedInstances,
        isEvent: ui.isEvent,
        segs: []
      };
    }
    for (var _i = 0, _a = ui.segs; _i < _a.length; _i++) {
      var seg = _a[_i];
      byRow[seg.row].segs.push(seg);
    }
  }
  return byRow;
}
var TableCellTop = function(_super) {
  __extends(TableCellTop2, _super);
  function TableCellTop2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  TableCellTop2.prototype.render = function() {
    var props = this.props;
    var navLinkAttrs = buildNavLinkAttrs(this.context, props.date);
    return createElement2(DayCellContent, { date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, showDayNumber: props.showDayNumber, extraHookProps: props.extraHookProps, defaultContent: renderTopInner }, function(innerElRef, innerContent) {
      return (innerContent || props.forceDayTop) && createElement2(
        "div",
        { className: "fc-daygrid-day-top", ref: innerElRef },
        createElement2("a", __assign({ id: props.dayNumberId, className: "fc-daygrid-day-number" }, navLinkAttrs), innerContent || createElement2(Fragment2, null, "\xA0"))
      );
    });
  };
  return TableCellTop2;
}(BaseComponent);
function renderTopInner(props) {
  return props.dayNumberText;
}
var DEFAULT_TABLE_EVENT_TIME_FORMAT = createFormatter({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: true,
  meridiem: "narrow"
});
function hasListItemDisplay(seg) {
  var display = seg.eventRange.ui.display;
  return display === "list-item" || display === "auto" && !seg.eventRange.def.allDay && seg.firstCol === seg.lastCol && seg.isStart && seg.isEnd;
}
var TableBlockEvent = function(_super) {
  __extends(TableBlockEvent2, _super);
  function TableBlockEvent2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  TableBlockEvent2.prototype.render = function() {
    var props = this.props;
    return createElement2(StandardEvent, __assign({}, props, { extraClassNames: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"], defaultTimeFormat: DEFAULT_TABLE_EVENT_TIME_FORMAT, defaultDisplayEventEnd: props.defaultDisplayEventEnd, disableResizing: !props.seg.eventRange.def.allDay }));
  };
  return TableBlockEvent2;
}(BaseComponent);
var TableListItemEvent = function(_super) {
  __extends(TableListItemEvent2, _super);
  function TableListItemEvent2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  TableListItemEvent2.prototype.render = function() {
    var _a = this, props = _a.props, context = _a.context;
    var timeFormat = context.options.eventTimeFormat || DEFAULT_TABLE_EVENT_TIME_FORMAT;
    var timeText = buildSegTimeText(props.seg, timeFormat, context, true, props.defaultDisplayEventEnd);
    return createElement2(EventRoot, { seg: props.seg, timeText, defaultContent: renderInnerContent2, isDragging: props.isDragging, isResizing: false, isDateSelecting: false, isSelected: props.isSelected, isPast: props.isPast, isFuture: props.isFuture, isToday: props.isToday }, function(rootElRef, classNames, innerElRef, innerContent) {
      return createElement2("a", __assign({ className: ["fc-daygrid-event", "fc-daygrid-dot-event"].concat(classNames).join(" "), ref: rootElRef }, getSegAnchorAttrs(props.seg, context)), innerContent);
    });
  };
  return TableListItemEvent2;
}(BaseComponent);
function renderInnerContent2(innerProps) {
  return createElement2(
    Fragment2,
    null,
    createElement2("div", { className: "fc-daygrid-event-dot", style: { borderColor: innerProps.borderColor || innerProps.backgroundColor } }),
    innerProps.timeText && createElement2("div", { className: "fc-event-time" }, innerProps.timeText),
    createElement2("div", { className: "fc-event-title" }, innerProps.event.title || createElement2(Fragment2, null, "\xA0"))
  );
}
var TableCellMoreLink = function(_super) {
  __extends(TableCellMoreLink2, _super);
  function TableCellMoreLink2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.compileSegs = memoize(compileSegs);
    return _this;
  }
  TableCellMoreLink2.prototype.render = function() {
    var props = this.props;
    var _a = this.compileSegs(props.singlePlacements), allSegs = _a.allSegs, invisibleSegs = _a.invisibleSegs;
    return createElement2(MoreLinkRoot, { dateProfile: props.dateProfile, todayRange: props.todayRange, allDayDate: props.allDayDate, moreCnt: props.moreCnt, allSegs, hiddenSegs: invisibleSegs, alignmentElRef: props.alignmentElRef, alignGridTop: props.alignGridTop, extraDateSpan: props.extraDateSpan, popoverContent: function() {
      var isForcedInvisible = (props.eventDrag ? props.eventDrag.affectedInstances : null) || (props.eventResize ? props.eventResize.affectedInstances : null) || {};
      return createElement2(Fragment2, null, allSegs.map(function(seg) {
        var instanceId = seg.eventRange.instance.instanceId;
        return createElement2("div", { className: "fc-daygrid-event-harness", key: instanceId, style: {
          visibility: isForcedInvisible[instanceId] ? "hidden" : ""
        } }, hasListItemDisplay(seg) ? createElement2(TableListItemEvent, __assign({ seg, isDragging: false, isSelected: instanceId === props.eventSelection, defaultDisplayEventEnd: false }, getSegMeta(seg, props.todayRange))) : createElement2(TableBlockEvent, __assign({ seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: instanceId === props.eventSelection, defaultDisplayEventEnd: false }, getSegMeta(seg, props.todayRange))));
      }));
    } }, function(rootElRef, classNames, innerElRef, innerContent, handleClick, title, isExpanded, popoverId) {
      return createElement2("a", __assign({ ref: rootElRef, className: ["fc-daygrid-more-link"].concat(classNames).join(" "), title, "aria-expanded": isExpanded, "aria-controls": popoverId }, createAriaClickAttrs(handleClick)), innerContent);
    });
  };
  return TableCellMoreLink2;
}(BaseComponent);
function compileSegs(singlePlacements) {
  var allSegs = [];
  var invisibleSegs = [];
  for (var _i = 0, singlePlacements_1 = singlePlacements; _i < singlePlacements_1.length; _i++) {
    var placement = singlePlacements_1[_i];
    allSegs.push(placement.seg);
    if (!placement.isVisible) {
      invisibleSegs.push(placement.seg);
    }
  }
  return { allSegs, invisibleSegs };
}
var DEFAULT_WEEK_NUM_FORMAT = createFormatter({ week: "narrow" });
var TableCell = function(_super) {
  __extends(TableCell2, _super);
  function TableCell2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.rootElRef = createRef2();
    _this.state = {
      dayNumberId: getUniqueDomId()
    };
    _this.handleRootEl = function(el) {
      setRef(_this.rootElRef, el);
      setRef(_this.props.elRef, el);
    };
    return _this;
  }
  TableCell2.prototype.render = function() {
    var _a = this, context = _a.context, props = _a.props, state = _a.state, rootElRef = _a.rootElRef;
    var date = props.date, dateProfile = props.dateProfile;
    var navLinkAttrs = buildNavLinkAttrs(context, date, "week");
    return createElement2(DayCellRoot, { date, dateProfile, todayRange: props.todayRange, showDayNumber: props.showDayNumber, extraHookProps: props.extraHookProps, elRef: this.handleRootEl }, function(dayElRef, dayClassNames, rootDataAttrs, isDisabled) {
      return createElement2(
        "td",
        __assign({ ref: dayElRef, role: "gridcell", className: ["fc-daygrid-day"].concat(dayClassNames, props.extraClassNames || []).join(" ") }, rootDataAttrs, props.extraDataAttrs, props.showDayNumber ? { "aria-labelledby": state.dayNumberId } : {}),
        createElement2(
          "div",
          { className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", ref: props.innerElRef },
          props.showWeekNumber && createElement2(WeekNumberRoot, { date, defaultFormat: DEFAULT_WEEK_NUM_FORMAT }, function(weekElRef, weekClassNames, innerElRef, innerContent) {
            return createElement2("a", __assign({ ref: weekElRef, className: ["fc-daygrid-week-number"].concat(weekClassNames).join(" ") }, navLinkAttrs), innerContent);
          }),
          !isDisabled && createElement2(TableCellTop, { date, dateProfile, showDayNumber: props.showDayNumber, dayNumberId: state.dayNumberId, forceDayTop: props.forceDayTop, todayRange: props.todayRange, extraHookProps: props.extraHookProps }),
          createElement2(
            "div",
            { className: "fc-daygrid-day-events", ref: props.fgContentElRef },
            props.fgContent,
            createElement2(
              "div",
              { className: "fc-daygrid-day-bottom", style: { marginTop: props.moreMarginTop } },
              createElement2(TableCellMoreLink, { allDayDate: date, singlePlacements: props.singlePlacements, moreCnt: props.moreCnt, alignmentElRef: rootElRef, alignGridTop: !props.showDayNumber, extraDateSpan: props.extraDateSpan, dateProfile: props.dateProfile, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, todayRange: props.todayRange })
            )
          ),
          createElement2("div", { className: "fc-daygrid-day-bg" }, props.bgContent)
        )
      );
    });
  };
  return TableCell2;
}(DateComponent);
function computeFgSegPlacement(segs, dayMaxEvents, dayMaxEventRows, strictOrder, eventInstanceHeights, maxContentHeight, cells) {
  var hierarchy = new DayGridSegHierarchy();
  hierarchy.allowReslicing = true;
  hierarchy.strictOrder = strictOrder;
  if (dayMaxEvents === true || dayMaxEventRows === true) {
    hierarchy.maxCoord = maxContentHeight;
    hierarchy.hiddenConsumes = true;
  } else if (typeof dayMaxEvents === "number") {
    hierarchy.maxStackCnt = dayMaxEvents;
  } else if (typeof dayMaxEventRows === "number") {
    hierarchy.maxStackCnt = dayMaxEventRows;
    hierarchy.hiddenConsumes = true;
  }
  var segInputs = [];
  var unknownHeightSegs = [];
  for (var i = 0; i < segs.length; i += 1) {
    var seg = segs[i];
    var instanceId = seg.eventRange.instance.instanceId;
    var eventHeight = eventInstanceHeights[instanceId];
    if (eventHeight != null) {
      segInputs.push({
        index: i,
        thickness: eventHeight,
        span: {
          start: seg.firstCol,
          end: seg.lastCol + 1
        }
      });
    } else {
      unknownHeightSegs.push(seg);
    }
  }
  var hiddenEntries = hierarchy.addSegs(segInputs);
  var segRects = hierarchy.toRects();
  var _a = placeRects(segRects, segs, cells), singleColPlacements = _a.singleColPlacements, multiColPlacements = _a.multiColPlacements, leftoverMargins = _a.leftoverMargins;
  var moreCnts = [];
  var moreMarginTops = [];
  for (var _i = 0, unknownHeightSegs_1 = unknownHeightSegs; _i < unknownHeightSegs_1.length; _i++) {
    var seg = unknownHeightSegs_1[_i];
    multiColPlacements[seg.firstCol].push({
      seg,
      isVisible: false,
      isAbsolute: true,
      absoluteTop: 0,
      marginTop: 0
    });
    for (var col = seg.firstCol; col <= seg.lastCol; col += 1) {
      singleColPlacements[col].push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: false,
        isAbsolute: false,
        absoluteTop: 0,
        marginTop: 0
      });
    }
  }
  for (var col = 0; col < cells.length; col += 1) {
    moreCnts.push(0);
  }
  for (var _b = 0, hiddenEntries_1 = hiddenEntries; _b < hiddenEntries_1.length; _b++) {
    var hiddenEntry = hiddenEntries_1[_b];
    var seg = segs[hiddenEntry.index];
    var hiddenSpan = hiddenEntry.span;
    multiColPlacements[hiddenSpan.start].push({
      seg: resliceSeg(seg, hiddenSpan.start, hiddenSpan.end, cells),
      isVisible: false,
      isAbsolute: true,
      absoluteTop: 0,
      marginTop: 0
    });
    for (var col = hiddenSpan.start; col < hiddenSpan.end; col += 1) {
      moreCnts[col] += 1;
      singleColPlacements[col].push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: false,
        isAbsolute: false,
        absoluteTop: 0,
        marginTop: 0
      });
    }
  }
  for (var col = 0; col < cells.length; col += 1) {
    moreMarginTops.push(leftoverMargins[col]);
  }
  return { singleColPlacements, multiColPlacements, moreCnts, moreMarginTops };
}
function placeRects(allRects, segs, cells) {
  var rectsByEachCol = groupRectsByEachCol(allRects, cells.length);
  var singleColPlacements = [];
  var multiColPlacements = [];
  var leftoverMargins = [];
  for (var col = 0; col < cells.length; col += 1) {
    var rects = rectsByEachCol[col];
    var singlePlacements = [];
    var currentHeight = 0;
    var currentMarginTop = 0;
    for (var _i = 0, rects_1 = rects; _i < rects_1.length; _i++) {
      var rect = rects_1[_i];
      var seg = segs[rect.index];
      singlePlacements.push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: true,
        isAbsolute: false,
        absoluteTop: rect.levelCoord,
        marginTop: rect.levelCoord - currentHeight
      });
      currentHeight = rect.levelCoord + rect.thickness;
    }
    var multiPlacements = [];
    currentHeight = 0;
    currentMarginTop = 0;
    for (var _a = 0, rects_2 = rects; _a < rects_2.length; _a++) {
      var rect = rects_2[_a];
      var seg = segs[rect.index];
      var isAbsolute = rect.span.end - rect.span.start > 1;
      var isFirstCol = rect.span.start === col;
      currentMarginTop += rect.levelCoord - currentHeight;
      currentHeight = rect.levelCoord + rect.thickness;
      if (isAbsolute) {
        currentMarginTop += rect.thickness;
        if (isFirstCol) {
          multiPlacements.push({
            seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
            isVisible: true,
            isAbsolute: true,
            absoluteTop: rect.levelCoord,
            marginTop: 0
          });
        }
      } else if (isFirstCol) {
        multiPlacements.push({
          seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
          isVisible: true,
          isAbsolute: false,
          absoluteTop: rect.levelCoord,
          marginTop: currentMarginTop
        });
        currentMarginTop = 0;
      }
    }
    singleColPlacements.push(singlePlacements);
    multiColPlacements.push(multiPlacements);
    leftoverMargins.push(currentMarginTop);
  }
  return { singleColPlacements, multiColPlacements, leftoverMargins };
}
function groupRectsByEachCol(rects, colCnt) {
  var rectsByEachCol = [];
  for (var col = 0; col < colCnt; col += 1) {
    rectsByEachCol.push([]);
  }
  for (var _i = 0, rects_3 = rects; _i < rects_3.length; _i++) {
    var rect = rects_3[_i];
    for (var col = rect.span.start; col < rect.span.end; col += 1) {
      rectsByEachCol[col].push(rect);
    }
  }
  return rectsByEachCol;
}
function resliceSeg(seg, spanStart, spanEnd, cells) {
  if (seg.firstCol === spanStart && seg.lastCol === spanEnd - 1) {
    return seg;
  }
  var eventRange = seg.eventRange;
  var origRange = eventRange.range;
  var slicedRange = intersectRanges(origRange, {
    start: cells[spanStart].date,
    end: addDays(cells[spanEnd - 1].date, 1)
  });
  return __assign(__assign({}, seg), { firstCol: spanStart, lastCol: spanEnd - 1, eventRange: {
    def: eventRange.def,
    ui: __assign(__assign({}, eventRange.ui), { durationEditable: false }),
    instance: eventRange.instance,
    range: slicedRange
  }, isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(), isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf() });
}
var DayGridSegHierarchy = function(_super) {
  __extends(DayGridSegHierarchy2, _super);
  function DayGridSegHierarchy2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.hiddenConsumes = false;
    _this.forceHidden = {};
    return _this;
  }
  DayGridSegHierarchy2.prototype.addSegs = function(segInputs) {
    var _this = this;
    var hiddenSegs = _super.prototype.addSegs.call(this, segInputs);
    var entriesByLevel = this.entriesByLevel;
    var excludeHidden = function(entry) {
      return !_this.forceHidden[buildEntryKey(entry)];
    };
    for (var level = 0; level < entriesByLevel.length; level += 1) {
      entriesByLevel[level] = entriesByLevel[level].filter(excludeHidden);
    }
    return hiddenSegs;
  };
  DayGridSegHierarchy2.prototype.handleInvalidInsertion = function(insertion, entry, hiddenEntries) {
    var _a = this, entriesByLevel = _a.entriesByLevel, forceHidden = _a.forceHidden;
    var touchingEntry = insertion.touchingEntry, touchingLevel = insertion.touchingLevel, touchingLateral = insertion.touchingLateral;
    if (this.hiddenConsumes && touchingEntry) {
      var touchingEntryId = buildEntryKey(touchingEntry);
      if (!forceHidden[touchingEntryId]) {
        if (this.allowReslicing) {
          var placeholderEntry = __assign(__assign({}, touchingEntry), { span: intersectSpans(touchingEntry.span, entry.span) });
          var placeholderEntryId = buildEntryKey(placeholderEntry);
          forceHidden[placeholderEntryId] = true;
          entriesByLevel[touchingLevel][touchingLateral] = placeholderEntry;
          this.splitEntry(touchingEntry, entry, hiddenEntries);
        } else {
          forceHidden[touchingEntryId] = true;
          hiddenEntries.push(touchingEntry);
        }
      }
    }
    return _super.prototype.handleInvalidInsertion.call(this, insertion, entry, hiddenEntries);
  };
  return DayGridSegHierarchy2;
}(SegHierarchy);
var TableRow = function(_super) {
  __extends(TableRow2, _super);
  function TableRow2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.cellElRefs = new RefMap();
    _this.frameElRefs = new RefMap();
    _this.fgElRefs = new RefMap();
    _this.segHarnessRefs = new RefMap();
    _this.rootElRef = createRef2();
    _this.state = {
      framePositions: null,
      maxContentHeight: null,
      eventInstanceHeights: {}
    };
    return _this;
  }
  TableRow2.prototype.render = function() {
    var _this = this;
    var _a = this, props = _a.props, state = _a.state, context = _a.context;
    var options = context.options;
    var colCnt = props.cells.length;
    var businessHoursByCol = splitSegsByFirstCol(props.businessHourSegs, colCnt);
    var bgEventSegsByCol = splitSegsByFirstCol(props.bgEventSegs, colCnt);
    var highlightSegsByCol = splitSegsByFirstCol(this.getHighlightSegs(), colCnt);
    var mirrorSegsByCol = splitSegsByFirstCol(this.getMirrorSegs(), colCnt);
    var _b = computeFgSegPlacement(sortEventSegs(props.fgEventSegs, options.eventOrder), props.dayMaxEvents, props.dayMaxEventRows, options.eventOrderStrict, state.eventInstanceHeights, state.maxContentHeight, props.cells), singleColPlacements = _b.singleColPlacements, multiColPlacements = _b.multiColPlacements, moreCnts = _b.moreCnts, moreMarginTops = _b.moreMarginTops;
    var isForcedInvisible = props.eventDrag && props.eventDrag.affectedInstances || props.eventResize && props.eventResize.affectedInstances || {};
    return createElement2(
      "tr",
      { ref: this.rootElRef, role: "row" },
      props.renderIntro && props.renderIntro(),
      props.cells.map(function(cell, col) {
        var normalFgNodes = _this.renderFgSegs(col, props.forPrint ? singleColPlacements[col] : multiColPlacements[col], props.todayRange, isForcedInvisible);
        var mirrorFgNodes = _this.renderFgSegs(col, buildMirrorPlacements(mirrorSegsByCol[col], multiColPlacements), props.todayRange, {}, Boolean(props.eventDrag), Boolean(props.eventResize), false);
        return createElement2(TableCell, { key: cell.key, elRef: _this.cellElRefs.createRef(cell.key), innerElRef: _this.frameElRefs.createRef(cell.key), dateProfile: props.dateProfile, date: cell.date, showDayNumber: props.showDayNumbers, showWeekNumber: props.showWeekNumbers && col === 0, forceDayTop: props.showWeekNumbers, todayRange: props.todayRange, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, extraHookProps: cell.extraHookProps, extraDataAttrs: cell.extraDataAttrs, extraClassNames: cell.extraClassNames, extraDateSpan: cell.extraDateSpan, moreCnt: moreCnts[col], moreMarginTop: moreMarginTops[col], singlePlacements: singleColPlacements[col], fgContentElRef: _this.fgElRefs.createRef(cell.key), fgContent: createElement2(
          Fragment2,
          null,
          createElement2(Fragment2, null, normalFgNodes),
          createElement2(Fragment2, null, mirrorFgNodes)
        ), bgContent: createElement2(
          Fragment2,
          null,
          _this.renderFillSegs(highlightSegsByCol[col], "highlight"),
          _this.renderFillSegs(businessHoursByCol[col], "non-business"),
          _this.renderFillSegs(bgEventSegsByCol[col], "bg-event")
        ) });
      })
    );
  };
  TableRow2.prototype.componentDidMount = function() {
    this.updateSizing(true);
  };
  TableRow2.prototype.componentDidUpdate = function(prevProps, prevState) {
    var currentProps = this.props;
    this.updateSizing(!isPropsEqual(prevProps, currentProps));
  };
  TableRow2.prototype.getHighlightSegs = function() {
    var props = this.props;
    if (props.eventDrag && props.eventDrag.segs.length) {
      return props.eventDrag.segs;
    }
    if (props.eventResize && props.eventResize.segs.length) {
      return props.eventResize.segs;
    }
    return props.dateSelectionSegs;
  };
  TableRow2.prototype.getMirrorSegs = function() {
    var props = this.props;
    if (props.eventResize && props.eventResize.segs.length) {
      return props.eventResize.segs;
    }
    return [];
  };
  TableRow2.prototype.renderFgSegs = function(col, segPlacements, todayRange, isForcedInvisible, isDragging, isResizing, isDateSelecting) {
    var context = this.context;
    var eventSelection = this.props.eventSelection;
    var framePositions = this.state.framePositions;
    var defaultDisplayEventEnd = this.props.cells.length === 1;
    var isMirror = isDragging || isResizing || isDateSelecting;
    var nodes = [];
    if (framePositions) {
      for (var _i = 0, segPlacements_1 = segPlacements; _i < segPlacements_1.length; _i++) {
        var placement = segPlacements_1[_i];
        var seg = placement.seg;
        var instanceId = seg.eventRange.instance.instanceId;
        var key = instanceId + ":" + col;
        var isVisible = placement.isVisible && !isForcedInvisible[instanceId];
        var isAbsolute = placement.isAbsolute;
        var left = "";
        var right = "";
        if (isAbsolute) {
          if (context.isRtl) {
            right = 0;
            left = framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol];
          } else {
            left = 0;
            right = framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol];
          }
        }
        nodes.push(createElement2("div", { className: "fc-daygrid-event-harness" + (isAbsolute ? " fc-daygrid-event-harness-abs" : ""), key, ref: isMirror ? null : this.segHarnessRefs.createRef(key), style: {
          visibility: isVisible ? "" : "hidden",
          marginTop: isAbsolute ? "" : placement.marginTop,
          top: isAbsolute ? placement.absoluteTop : "",
          left,
          right
        } }, hasListItemDisplay(seg) ? createElement2(TableListItemEvent, __assign({ seg, isDragging, isSelected: instanceId === eventSelection, defaultDisplayEventEnd }, getSegMeta(seg, todayRange))) : createElement2(TableBlockEvent, __assign({ seg, isDragging, isResizing, isDateSelecting, isSelected: instanceId === eventSelection, defaultDisplayEventEnd }, getSegMeta(seg, todayRange)))));
      }
    }
    return nodes;
  };
  TableRow2.prototype.renderFillSegs = function(segs, fillType) {
    var isRtl = this.context.isRtl;
    var todayRange = this.props.todayRange;
    var framePositions = this.state.framePositions;
    var nodes = [];
    if (framePositions) {
      for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
        var seg = segs_1[_i];
        var leftRightCss = isRtl ? {
          right: 0,
          left: framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol]
        } : {
          left: 0,
          right: framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol]
        };
        nodes.push(createElement2("div", { key: buildEventRangeKey(seg.eventRange), className: "fc-daygrid-bg-harness", style: leftRightCss }, fillType === "bg-event" ? createElement2(BgEvent, __assign({ seg }, getSegMeta(seg, todayRange))) : renderFill(fillType)));
      }
    }
    return createElement2.apply(void 0, __spreadArray([Fragment2, {}], nodes));
  };
  TableRow2.prototype.updateSizing = function(isExternalSizingChange) {
    var _a = this, props = _a.props, frameElRefs = _a.frameElRefs;
    if (!props.forPrint && props.clientWidth !== null) {
      if (isExternalSizingChange) {
        var frameEls = props.cells.map(function(cell) {
          return frameElRefs.currentMap[cell.key];
        });
        if (frameEls.length) {
          var originEl = this.rootElRef.current;
          this.setState({
            framePositions: new PositionCache(
              originEl,
              frameEls,
              true,
              false
            )
          });
        }
      }
      var oldInstanceHeights = this.state.eventInstanceHeights;
      var newInstanceHeights = this.queryEventInstanceHeights();
      var limitByContentHeight = props.dayMaxEvents === true || props.dayMaxEventRows === true;
      this.safeSetState({
        eventInstanceHeights: __assign(__assign({}, oldInstanceHeights), newInstanceHeights),
        maxContentHeight: limitByContentHeight ? this.computeMaxContentHeight() : null
      });
    }
  };
  TableRow2.prototype.queryEventInstanceHeights = function() {
    var segElMap = this.segHarnessRefs.currentMap;
    var eventInstanceHeights = {};
    for (var key in segElMap) {
      var height = Math.round(segElMap[key].getBoundingClientRect().height);
      var instanceId = key.split(":")[0];
      eventInstanceHeights[instanceId] = Math.max(eventInstanceHeights[instanceId] || 0, height);
    }
    return eventInstanceHeights;
  };
  TableRow2.prototype.computeMaxContentHeight = function() {
    var firstKey = this.props.cells[0].key;
    var cellEl = this.cellElRefs.currentMap[firstKey];
    var fcContainerEl = this.fgElRefs.currentMap[firstKey];
    return cellEl.getBoundingClientRect().bottom - fcContainerEl.getBoundingClientRect().top;
  };
  TableRow2.prototype.getCellEls = function() {
    var elMap = this.cellElRefs.currentMap;
    return this.props.cells.map(function(cell) {
      return elMap[cell.key];
    });
  };
  return TableRow2;
}(DateComponent);
TableRow.addStateEquality({
  eventInstanceHeights: isPropsEqual
});
function buildMirrorPlacements(mirrorSegs, colPlacements) {
  if (!mirrorSegs.length) {
    return [];
  }
  var topsByInstanceId = buildAbsoluteTopHash(colPlacements);
  return mirrorSegs.map(function(seg) {
    return {
      seg,
      isVisible: true,
      isAbsolute: true,
      absoluteTop: topsByInstanceId[seg.eventRange.instance.instanceId],
      marginTop: 0
    };
  });
}
function buildAbsoluteTopHash(colPlacements) {
  var topsByInstanceId = {};
  for (var _i = 0, colPlacements_1 = colPlacements; _i < colPlacements_1.length; _i++) {
    var placements = colPlacements_1[_i];
    for (var _a = 0, placements_1 = placements; _a < placements_1.length; _a++) {
      var placement = placements_1[_a];
      topsByInstanceId[placement.seg.eventRange.instance.instanceId] = placement.absoluteTop;
    }
  }
  return topsByInstanceId;
}
var Table = function(_super) {
  __extends(Table2, _super);
  function Table2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.splitBusinessHourSegs = memoize(splitSegsByRow);
    _this.splitBgEventSegs = memoize(splitSegsByRow);
    _this.splitFgEventSegs = memoize(splitSegsByRow);
    _this.splitDateSelectionSegs = memoize(splitSegsByRow);
    _this.splitEventDrag = memoize(splitInteractionByRow);
    _this.splitEventResize = memoize(splitInteractionByRow);
    _this.rowRefs = new RefMap();
    _this.handleRootEl = function(rootEl) {
      _this.rootEl = rootEl;
      if (rootEl) {
        _this.context.registerInteractiveComponent(_this, {
          el: rootEl,
          isHitComboAllowed: _this.props.isHitComboAllowed
        });
      } else {
        _this.context.unregisterInteractiveComponent(_this);
      }
    };
    return _this;
  }
  Table2.prototype.render = function() {
    var _this = this;
    var props = this.props;
    var dateProfile = props.dateProfile, dayMaxEventRows = props.dayMaxEventRows, dayMaxEvents = props.dayMaxEvents, expandRows = props.expandRows;
    var rowCnt = props.cells.length;
    var businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, rowCnt);
    var bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, rowCnt);
    var fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, rowCnt);
    var dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, rowCnt);
    var eventDragByRow = this.splitEventDrag(props.eventDrag, rowCnt);
    var eventResizeByRow = this.splitEventResize(props.eventResize, rowCnt);
    var limitViaBalanced = dayMaxEvents === true || dayMaxEventRows === true;
    if (limitViaBalanced && !expandRows) {
      limitViaBalanced = false;
      dayMaxEventRows = null;
      dayMaxEvents = null;
    }
    var classNames = [
      "fc-daygrid-body",
      limitViaBalanced ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
      expandRows ? "" : "fc-daygrid-body-natural"
    ];
    return createElement2(
      "div",
      { className: classNames.join(" "), ref: this.handleRootEl, style: {
        width: props.clientWidth,
        minWidth: props.tableMinWidth
      } },
      createElement2(NowTimer, { unit: "day" }, function(nowDate, todayRange) {
        return createElement2(
          Fragment2,
          null,
          createElement2(
            "table",
            { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
              width: props.clientWidth,
              minWidth: props.tableMinWidth,
              height: expandRows ? props.clientHeight : ""
            } },
            props.colGroupNode,
            createElement2("tbody", { role: "presentation" }, props.cells.map(function(cells, row) {
              return createElement2(TableRow, {
                ref: _this.rowRefs.createRef(row),
                key: cells.length ? cells[0].date.toISOString() : row,
                showDayNumbers: rowCnt > 1,
                showWeekNumbers: props.showWeekNumbers,
                todayRange,
                dateProfile,
                cells,
                renderIntro: props.renderRowIntro,
                businessHourSegs: businessHourSegsByRow[row],
                eventSelection: props.eventSelection,
                bgEventSegs: bgEventSegsByRow[row].filter(isSegAllDay),
                fgEventSegs: fgEventSegsByRow[row],
                dateSelectionSegs: dateSelectionSegsByRow[row],
                eventDrag: eventDragByRow[row],
                eventResize: eventResizeByRow[row],
                dayMaxEvents,
                dayMaxEventRows,
                clientWidth: props.clientWidth,
                clientHeight: props.clientHeight,
                forPrint: props.forPrint
              });
            }))
          )
        );
      })
    );
  };
  Table2.prototype.prepareHits = function() {
    this.rowPositions = new PositionCache(
      this.rootEl,
      this.rowRefs.collect().map(function(rowObj) {
        return rowObj.getCellEls()[0];
      }),
      false,
      true
    );
    this.colPositions = new PositionCache(
      this.rootEl,
      this.rowRefs.currentMap[0].getCellEls(),
      true,
      false
    );
  };
  Table2.prototype.queryHit = function(positionLeft, positionTop) {
    var _a = this, colPositions = _a.colPositions, rowPositions = _a.rowPositions;
    var col = colPositions.leftToIndex(positionLeft);
    var row = rowPositions.topToIndex(positionTop);
    if (row != null && col != null) {
      var cell = this.props.cells[row][col];
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: __assign({ range: this.getCellRange(row, col), allDay: true }, cell.extraDateSpan),
        dayEl: this.getCellEl(row, col),
        rect: {
          left: colPositions.lefts[col],
          right: colPositions.rights[col],
          top: rowPositions.tops[row],
          bottom: rowPositions.bottoms[row]
        },
        layer: 0
      };
    }
    return null;
  };
  Table2.prototype.getCellEl = function(row, col) {
    return this.rowRefs.currentMap[row].getCellEls()[col];
  };
  Table2.prototype.getCellRange = function(row, col) {
    var start = this.props.cells[row][col].date;
    var end = addDays(start, 1);
    return { start, end };
  };
  return Table2;
}(DateComponent);
function isSegAllDay(seg) {
  return seg.eventRange.def.allDay;
}
var DayTableSlicer = function(_super) {
  __extends(DayTableSlicer2, _super);
  function DayTableSlicer2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.forceDayIfListItem = true;
    return _this;
  }
  DayTableSlicer2.prototype.sliceRange = function(dateRange, dayTableModel) {
    return dayTableModel.sliceRange(dateRange);
  };
  return DayTableSlicer2;
}(Slicer);
var DayTable = function(_super) {
  __extends(DayTable2, _super);
  function DayTable2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.slicer = new DayTableSlicer();
    _this.tableRef = createRef2();
    return _this;
  }
  DayTable2.prototype.render = function() {
    var _a = this, props = _a.props, context = _a.context;
    return createElement2(Table, __assign({ ref: this.tableRef }, this.slicer.sliceProps(props, props.dateProfile, props.nextDayThreshold, context, props.dayTableModel), { dateProfile: props.dateProfile, cells: props.dayTableModel.cells, colGroupNode: props.colGroupNode, tableMinWidth: props.tableMinWidth, renderRowIntro: props.renderRowIntro, dayMaxEvents: props.dayMaxEvents, dayMaxEventRows: props.dayMaxEventRows, showWeekNumbers: props.showWeekNumbers, expandRows: props.expandRows, headerAlignElRef: props.headerAlignElRef, clientWidth: props.clientWidth, clientHeight: props.clientHeight, forPrint: props.forPrint }));
  };
  return DayTable2;
}(DateComponent);
var DayTableView = function(_super) {
  __extends(DayTableView2, _super);
  function DayTableView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.buildDayTableModel = memoize(buildDayTableModel);
    _this.headerRef = createRef2();
    _this.tableRef = createRef2();
    return _this;
  }
  DayTableView2.prototype.render = function() {
    var _this = this;
    var _a = this.context, options = _a.options, dateProfileGenerator = _a.dateProfileGenerator;
    var props = this.props;
    var dayTableModel = this.buildDayTableModel(props.dateProfile, dateProfileGenerator);
    var headerContent = options.dayHeaders && createElement2(DayHeader, { ref: this.headerRef, dateProfile: props.dateProfile, dates: dayTableModel.headerDates, datesRepDistinctDays: dayTableModel.rowCnt === 1 });
    var bodyContent = function(contentArg) {
      return createElement2(DayTable, { ref: _this.tableRef, dateProfile: props.dateProfile, dayTableModel, businessHours: props.businessHours, dateSelection: props.dateSelection, eventStore: props.eventStore, eventUiBases: props.eventUiBases, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, nextDayThreshold: options.nextDayThreshold, colGroupNode: contentArg.tableColGroupNode, tableMinWidth: contentArg.tableMinWidth, dayMaxEvents: options.dayMaxEvents, dayMaxEventRows: options.dayMaxEventRows, showWeekNumbers: options.weekNumbers, expandRows: !props.isHeightAuto, headerAlignElRef: _this.headerElRef, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, forPrint: props.forPrint });
    };
    return options.dayMinWidth ? this.renderHScrollLayout(headerContent, bodyContent, dayTableModel.colCnt, options.dayMinWidth) : this.renderSimpleLayout(headerContent, bodyContent);
  };
  return DayTableView2;
}(TableView);
function buildDayTableModel(dateProfile, dateProfileGenerator) {
  var daySeries = new DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
  return new DayTableModel(daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
}
var TableDateProfileGenerator = function(_super) {
  __extends(TableDateProfileGenerator2, _super);
  function TableDateProfileGenerator2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  TableDateProfileGenerator2.prototype.buildRenderRange = function(currentRange, currentRangeUnit, isRangeAllDay) {
    var dateEnv = this.props.dateEnv;
    var renderRange = _super.prototype.buildRenderRange.call(this, currentRange, currentRangeUnit, isRangeAllDay);
    var start = renderRange.start;
    var end = renderRange.end;
    var endOfWeek;
    if (/^(year|month)$/.test(currentRangeUnit)) {
      start = dateEnv.startOfWeek(start);
      endOfWeek = dateEnv.startOfWeek(end);
      if (endOfWeek.valueOf() !== end.valueOf()) {
        end = addWeeks(endOfWeek, 1);
      }
    }
    if (this.props.monthMode && this.props.fixedWeekCount) {
      var rowCnt = Math.ceil(
        diffWeeks(start, end)
      );
      end = addWeeks(end, 6 - rowCnt);
    }
    return { start, end };
  };
  return TableDateProfileGenerator2;
}(DateProfileGenerator);
var main = createPlugin({
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: DayTableView,
      dateProfileGeneratorClass: TableDateProfileGenerator
    },
    dayGridDay: {
      type: "dayGrid",
      duration: { days: 1 }
    },
    dayGridWeek: {
      type: "dayGrid",
      duration: { weeks: 1 }
    },
    dayGridMonth: {
      type: "dayGrid",
      duration: { months: 1 },
      monthMode: true,
      fixedWeekCount: true
    }
  }
});
var main_default2 = main;

// app/routes/chron/cal.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ChronCal() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(main_default, {
    plugins: [main_default2],
    initialView: "dayGridMonth"
  }, void 0, false, {
    fileName: "app/routes/chron/cal.tsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}
export {
  ChronCal as default
};
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
//# sourceMappingURL=/build/routes/chron/cal-LLHRVBZO.js.map
