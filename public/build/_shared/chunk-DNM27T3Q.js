import {
  _objectWithoutPropertiesLoose,
  capitalize_default,
  clsx_m_default,
  composeClasses,
  extendSxProp,
  generateUtilityClass,
  generateUtilityClasses,
  init_base,
  init_capitalize,
  init_clsx_m,
  init_esm2 as init_esm,
  init_objectWithoutPropertiesLoose,
  init_styled,
  init_useThemeProps,
  require_jsx_runtime,
  require_prop_types,
  styled_default,
  useThemeProps
} from "/build/_shared/chunk-BKIZGXIQ.js";
import {
  _extends,
  init_extends
} from "/build/_shared/chunk-6DQPAQKB.js";
import {
  require_react
} from "/build/_shared/chunk-VFZ2QWLC.js";
import {
  __esm,
  __export,
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// node_modules/@mui/material/esm/Typography/typographyClasses.js
function getTypographyUtilityClass(slot) {
  return generateUtilityClass("MuiTypography", slot);
}
var typographyClasses, typographyClasses_default;
var init_typographyClasses = __esm({
  "node_modules/@mui/material/esm/Typography/typographyClasses.js"() {
    init_base();
    typographyClasses = generateUtilityClasses("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
    typographyClasses_default = typographyClasses;
  }
});

// node_modules/@mui/material/esm/Typography/Typography.js
var React, import_prop_types, import_jsx_runtime, _excluded, useUtilityClasses, TypographyRoot, defaultVariantMapping, colorTransformations, transformDeprecatedColors, Typography, Typography_default;
var init_Typography = __esm({
  "node_modules/@mui/material/esm/Typography/Typography.js"() {
    init_objectWithoutPropertiesLoose();
    init_extends();
    React = __toESM(require_react());
    import_prop_types = __toESM(require_prop_types());
    init_clsx_m();
    init_esm();
    init_base();
    init_styled();
    init_useThemeProps();
    init_capitalize();
    init_typographyClasses();
    import_jsx_runtime = __toESM(require_jsx_runtime());
    _excluded = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];
    useUtilityClasses = (ownerState) => {
      const {
        align,
        gutterBottom,
        noWrap,
        paragraph,
        variant,
        classes
      } = ownerState;
      const slots = {
        root: ["root", variant, ownerState.align !== "inherit" && `align${capitalize_default(align)}`, gutterBottom && "gutterBottom", noWrap && "noWrap", paragraph && "paragraph"]
      };
      return composeClasses(slots, getTypographyUtilityClass, classes);
    };
    TypographyRoot = styled_default("span", {
      name: "MuiTypography",
      slot: "Root",
      overridesResolver: (props, styles) => {
        const {
          ownerState
        } = props;
        return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== "inherit" && styles[`align${capitalize_default(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
      }
    })(({
      theme,
      ownerState
    }) => _extends({
      margin: 0
    }, ownerState.variant && theme.typography[ownerState.variant], ownerState.align !== "inherit" && {
      textAlign: ownerState.align
    }, ownerState.noWrap && {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }, ownerState.gutterBottom && {
      marginBottom: "0.35em"
    }, ownerState.paragraph && {
      marginBottom: 16
    }));
    defaultVariantMapping = {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
      subtitle1: "h6",
      subtitle2: "h6",
      body1: "p",
      body2: "p",
      inherit: "p"
    };
    colorTransformations = {
      primary: "primary.main",
      textPrimary: "text.primary",
      secondary: "secondary.main",
      textSecondary: "text.secondary",
      error: "error.main"
    };
    transformDeprecatedColors = (color) => {
      return colorTransformations[color] || color;
    };
    Typography = /* @__PURE__ */ React.forwardRef(function Typography2(inProps, ref) {
      const themeProps = useThemeProps({
        props: inProps,
        name: "MuiTypography"
      });
      const color = transformDeprecatedColors(themeProps.color);
      const props = extendSxProp(_extends({}, themeProps, {
        color
      }));
      const {
        align = "inherit",
        className,
        component,
        gutterBottom = false,
        noWrap = false,
        paragraph = false,
        variant = "body1",
        variantMapping = defaultVariantMapping
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
      const ownerState = _extends({}, props, {
        align,
        color,
        className,
        component,
        gutterBottom,
        noWrap,
        paragraph,
        variant,
        variantMapping
      });
      const Component = component || (paragraph ? "p" : variantMapping[variant] || defaultVariantMapping[variant]) || "span";
      const classes = useUtilityClasses(ownerState);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypographyRoot, _extends({
        as: Component,
        ref,
        ownerState,
        className: clsx_m_default(classes.root, className)
      }, other));
    });
    true ? Typography.propTypes = {
      align: import_prop_types.default.oneOf(["center", "inherit", "justify", "left", "right"]),
      children: import_prop_types.default.node,
      classes: import_prop_types.default.object,
      className: import_prop_types.default.string,
      component: import_prop_types.default.elementType,
      gutterBottom: import_prop_types.default.bool,
      noWrap: import_prop_types.default.bool,
      paragraph: import_prop_types.default.bool,
      sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
      variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), import_prop_types.default.string]),
      variantMapping: import_prop_types.default.object
    } : void 0;
    Typography_default = Typography;
  }
});

// node_modules/@mui/material/esm/Typography/index.js
var Typography_exports = {};
__export(Typography_exports, {
  default: () => Typography_default,
  getTypographyUtilityClass: () => getTypographyUtilityClass,
  typographyClasses: () => typographyClasses_default
});
var init_Typography2 = __esm({
  "node_modules/@mui/material/esm/Typography/index.js"() {
    init_Typography();
    init_typographyClasses();
    init_typographyClasses();
  }
});

export {
  Typography_default,
  Typography_exports,
  init_Typography2 as init_Typography
};
//# sourceMappingURL=/build/_shared/chunk-DNM27T3Q.js.map
