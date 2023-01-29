import {
  ClassNameGenerator_default,
  StyledEngineProvider,
  ThemeProvider_default,
  _objectWithoutPropertiesLoose,
  alpha,
  chainPropTypes,
  clsx_m_default,
  colorChannel,
  composeClasses,
  createBox,
  createBreakpoints,
  createCssVarsProvider,
  createGetCssVar,
  createMuiTheme,
  createSpacing,
  createTheme_default,
  createTypography,
  darken,
  decomposeColor,
  deepmerge,
  defaultTheme_default,
  duration,
  easing,
  emphasize,
  generateUtilityClass,
  generateUtilityClasses,
  getContrastRatio,
  getLuminance,
  hexToRgb,
  hslToRgb,
  import_react,
  init_base,
  init_clsx_m,
  init_createTheme,
  init_createTransitions,
  init_createTypography,
  init_defaultTheme,
  init_esm,
  init_esm2,
  init_objectWithoutPropertiesLoose,
  init_styled,
  init_useThemeProps,
  integerPropType_default,
  lighten,
  recomposeColor,
  require_jsx_runtime,
  require_prop_types,
  rgbToHex,
  styled_default,
  sx_default,
  useThemeProps,
  useTheme_default
} from "/build/_shared/chunk-UXJTOQFQ.js";
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

// node_modules/@mui/material/esm/styles/cssUtils.js
function isUnitless(value) {
  return String(parseFloat(value)).length === String(value).length;
}
function getUnit(input) {
  return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function toUnitless(length) {
  return parseFloat(length);
}
function convertLength(baseFontSize) {
  return (length, toUnit) => {
    const fromUnit = getUnit(length);
    if (fromUnit === toUnit) {
      return length;
    }
    let pxLength = toUnitless(length);
    if (fromUnit !== "px") {
      if (fromUnit === "em") {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      } else if (fromUnit === "rem") {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      }
    }
    let outputLength = pxLength;
    if (toUnit !== "px") {
      if (toUnit === "em") {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else if (toUnit === "rem") {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else {
        return length;
      }
    }
    return parseFloat(outputLength.toFixed(5)) + toUnit;
  };
}
function alignProperty({
  size,
  grid
}) {
  const sizeBelow = size - size % grid;
  const sizeAbove = sizeBelow + grid;
  return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
}
function fontGrid({
  lineHeight,
  pixels,
  htmlFontSize
}) {
  return pixels / (lineHeight * htmlFontSize);
}
function responsiveProperty({
  cssProperty,
  min,
  max,
  unit = "rem",
  breakpoints = [600, 900, 1200],
  transform = null
}) {
  const output = {
    [cssProperty]: `${min}${unit}`
  };
  const factor = (max - min) / breakpoints[breakpoints.length - 1];
  breakpoints.forEach((breakpoint) => {
    let value = min + factor * breakpoint;
    if (transform !== null) {
      value = transform(value);
    }
    output[`@media (min-width:${breakpoint}px)`] = {
      [cssProperty]: `${Math.round(value * 1e4) / 1e4}${unit}`
    };
  });
  return output;
}
var init_cssUtils = __esm({
  "node_modules/@mui/material/esm/styles/cssUtils.js"() {
  }
});

// node_modules/@mui/material/esm/styles/responsiveFontSizes.js
function responsiveFontSizes(themeInput, options = {}) {
  const {
    breakpoints = ["sm", "md", "lg"],
    disableAlign = false,
    factor = 2,
    variants = ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "button", "overline"]
  } = options;
  const theme = _extends({}, themeInput);
  theme.typography = _extends({}, theme.typography);
  const typography = theme.typography;
  const convert = convertLength(typography.htmlFontSize);
  const breakpointValues = breakpoints.map((x) => theme.breakpoints.values[x]);
  variants.forEach((variant) => {
    const style = typography[variant];
    const remFontSize = parseFloat(convert(style.fontSize, "rem"));
    if (remFontSize <= 1) {
      return;
    }
    const maxFontSize = remFontSize;
    const minFontSize = 1 + (maxFontSize - 1) / factor;
    let {
      lineHeight
    } = style;
    if (!isUnitless(lineHeight) && !disableAlign) {
      throw new Error(true ? `MUI: Unsupported non-unitless line height with grid alignment.
Use unitless line heights instead.` : formatMuiErrorMessage(6));
    }
    if (!isUnitless(lineHeight)) {
      lineHeight = parseFloat(convert(lineHeight, "rem")) / parseFloat(remFontSize);
    }
    let transform = null;
    if (!disableAlign) {
      transform = (value) => alignProperty({
        size: value,
        grid: fontGrid({
          pixels: 4,
          lineHeight,
          htmlFontSize: typography.htmlFontSize
        })
      });
    }
    typography[variant] = _extends({}, style, responsiveProperty({
      cssProperty: "fontSize",
      min: minFontSize,
      max: maxFontSize,
      unit: "rem",
      breakpoints: breakpointValues,
      transform
    }));
  });
  return theme;
}
var init_responsiveFontSizes = __esm({
  "node_modules/@mui/material/esm/styles/responsiveFontSizes.js"() {
    init_extends();
    init_cssUtils();
  }
});

// node_modules/@mui/material/esm/styles/useTheme.js
function useTheme() {
  const theme = useTheme_default(defaultTheme_default);
  if (true) {
    React.useDebugValue(theme);
  }
  return theme;
}
var React;
var init_useTheme = __esm({
  "node_modules/@mui/material/esm/styles/useTheme.js"() {
    React = __toESM(require_react());
    init_esm2();
    init_defaultTheme();
  }
});

// node_modules/@mui/material/esm/styles/ThemeProvider.js
var init_ThemeProvider = __esm({
  "node_modules/@mui/material/esm/styles/ThemeProvider.js"() {
    init_esm2();
  }
});

// node_modules/@mui/material/esm/Paper/paperClasses.js
function getPaperUtilityClass(slot) {
  return generateUtilityClass("MuiPaper", slot);
}
var paperClasses, paperClasses_default;
var init_paperClasses = __esm({
  "node_modules/@mui/material/esm/Paper/paperClasses.js"() {
    init_base();
    paperClasses = generateUtilityClasses("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
    paperClasses_default = paperClasses;
  }
});

// node_modules/@mui/material/esm/Paper/Paper.js
var React2, import_prop_types, import_jsx_runtime, _excluded, getOverlayAlpha, useUtilityClasses, PaperRoot, Paper, Paper_default;
var init_Paper = __esm({
  "node_modules/@mui/material/esm/Paper/Paper.js"() {
    init_objectWithoutPropertiesLoose();
    init_extends();
    React2 = __toESM(require_react());
    import_prop_types = __toESM(require_prop_types());
    init_clsx_m();
    init_esm();
    init_base();
    init_esm2();
    init_styled();
    init_useThemeProps();
    init_useTheme();
    init_paperClasses();
    import_jsx_runtime = __toESM(require_jsx_runtime());
    _excluded = ["className", "component", "elevation", "square", "variant"];
    getOverlayAlpha = (elevation) => {
      let alphaValue;
      if (elevation < 1) {
        alphaValue = 5.11916 * elevation ** 2;
      } else {
        alphaValue = 4.5 * Math.log(elevation + 1) + 2;
      }
      return (alphaValue / 100).toFixed(2);
    };
    useUtilityClasses = (ownerState) => {
      const {
        square,
        elevation,
        variant,
        classes
      } = ownerState;
      const slots = {
        root: ["root", variant, !square && "rounded", variant === "elevation" && `elevation${elevation}`]
      };
      return composeClasses(slots, getPaperUtilityClass, classes);
    };
    PaperRoot = styled_default("div", {
      name: "MuiPaper",
      slot: "Root",
      overridesResolver: (props, styles) => {
        const {
          ownerState
        } = props;
        return [styles.root, styles[ownerState.variant], !ownerState.square && styles.rounded, ownerState.variant === "elevation" && styles[`elevation${ownerState.elevation}`]];
      }
    })(({
      theme,
      ownerState
    }) => {
      var _theme$vars$overlays;
      return _extends({
        backgroundColor: (theme.vars || theme).palette.background.paper,
        color: (theme.vars || theme).palette.text.primary,
        transition: theme.transitions.create("box-shadow")
      }, !ownerState.square && {
        borderRadius: theme.shape.borderRadius
      }, ownerState.variant === "outlined" && {
        border: `1px solid ${(theme.vars || theme).palette.divider}`
      }, ownerState.variant === "elevation" && _extends({
        boxShadow: (theme.vars || theme).shadows[ownerState.elevation]
      }, !theme.vars && theme.palette.mode === "dark" && {
        backgroundImage: `linear-gradient(${alpha("#fff", getOverlayAlpha(ownerState.elevation))}, ${alpha("#fff", getOverlayAlpha(ownerState.elevation))})`
      }, theme.vars && {
        backgroundImage: (_theme$vars$overlays = theme.vars.overlays) == null ? void 0 : _theme$vars$overlays[ownerState.elevation]
      }));
    });
    Paper = /* @__PURE__ */ React2.forwardRef(function Paper2(inProps, ref) {
      const props = useThemeProps({
        props: inProps,
        name: "MuiPaper"
      });
      const {
        className,
        component = "div",
        elevation = 1,
        square = false,
        variant = "elevation"
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
      const ownerState = _extends({}, props, {
        component,
        elevation,
        square,
        variant
      });
      const classes = useUtilityClasses(ownerState);
      if (true) {
        const theme = useTheme();
        if (theme.shadows[elevation] === void 0) {
          console.error([`MUI: The elevation provided <Paper elevation={${elevation}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${elevation}]\` is defined.`].join("\n"));
        }
      }
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperRoot, _extends({
        as: component,
        ownerState,
        className: clsx_m_default(classes.root, className),
        ref
      }, other));
    });
    true ? Paper.propTypes = {
      children: import_prop_types.default.node,
      classes: import_prop_types.default.object,
      className: import_prop_types.default.string,
      component: import_prop_types.default.elementType,
      elevation: chainPropTypes(integerPropType_default, (props) => {
        const {
          elevation,
          variant
        } = props;
        if (elevation > 0 && variant === "outlined") {
          return new Error(`MUI: Combining \`elevation={${elevation}}\` with \`variant="${variant}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`);
        }
        return null;
      }),
      square: import_prop_types.default.bool,
      sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
      variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["elevation", "outlined"]), import_prop_types.default.string])
    } : void 0;
    Paper_default = Paper;
  }
});

// node_modules/@mui/material/esm/styles/adaptV4Theme.js
function adaptV4Theme(inputTheme) {
  if (true) {
    console.warn(["MUI: adaptV4Theme() is deprecated.", "Follow the upgrade guide on https://mui.com/r/migration-v4#theme."].join("\n"));
  }
  const {
    defaultProps = {},
    mixins = {},
    overrides = {},
    palette = {},
    props = {},
    styleOverrides = {}
  } = inputTheme, other = _objectWithoutPropertiesLoose(inputTheme, _excluded2);
  const theme = _extends({}, other, {
    components: {}
  });
  Object.keys(defaultProps).forEach((component) => {
    const componentValue = theme.components[component] || {};
    componentValue.defaultProps = defaultProps[component];
    theme.components[component] = componentValue;
  });
  Object.keys(props).forEach((component) => {
    const componentValue = theme.components[component] || {};
    componentValue.defaultProps = props[component];
    theme.components[component] = componentValue;
  });
  Object.keys(styleOverrides).forEach((component) => {
    const componentValue = theme.components[component] || {};
    componentValue.styleOverrides = styleOverrides[component];
    theme.components[component] = componentValue;
  });
  Object.keys(overrides).forEach((component) => {
    const componentValue = theme.components[component] || {};
    componentValue.styleOverrides = overrides[component];
    theme.components[component] = componentValue;
  });
  theme.spacing = createSpacing(inputTheme.spacing);
  const breakpoints = createBreakpoints(inputTheme.breakpoints || {});
  const spacing = theme.spacing;
  theme.mixins = _extends({
    gutters: (styles = {}) => {
      return _extends({
        paddingLeft: spacing(2),
        paddingRight: spacing(2)
      }, styles, {
        [breakpoints.up("sm")]: _extends({
          paddingLeft: spacing(3),
          paddingRight: spacing(3)
        }, styles[breakpoints.up("sm")])
      });
    }
  }, mixins);
  const {
    type: typeInput,
    mode: modeInput
  } = palette, paletteRest = _objectWithoutPropertiesLoose(palette, _excluded22);
  const finalMode = modeInput || typeInput || "light";
  theme.palette = _extends({
    text: {
      hint: finalMode === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.38)"
    },
    mode: finalMode,
    type: finalMode
  }, paletteRest);
  return theme;
}
var _excluded2, _excluded22;
var init_adaptV4Theme = __esm({
  "node_modules/@mui/material/esm/styles/adaptV4Theme.js"() {
    init_extends();
    init_objectWithoutPropertiesLoose();
    init_esm2();
    _excluded2 = ["defaultProps", "mixins", "overrides", "palette", "props", "styleOverrides"];
    _excluded22 = ["type", "mode"];
  }
});

// node_modules/@mui/material/esm/styles/createMuiStrictModeTheme.js
function createMuiStrictModeTheme(options, ...args) {
  return createTheme_default(deepmerge({
    unstable_strictMode: true
  }, options), ...args);
}
var init_createMuiStrictModeTheme = __esm({
  "node_modules/@mui/material/esm/styles/createMuiStrictModeTheme.js"() {
    init_esm();
    init_createTheme();
  }
});

// node_modules/@mui/material/esm/styles/createStyles.js
function createStyles(styles) {
  if (!warnedOnce) {
    console.warn(["MUI: createStyles from @mui/material/styles is deprecated.", "Please use @mui/styles/createStyles"].join("\n"));
    warnedOnce = true;
  }
  return styles;
}
var warnedOnce;
var init_createStyles = __esm({
  "node_modules/@mui/material/esm/styles/createStyles.js"() {
    warnedOnce = false;
  }
});

// node_modules/@mui/material/esm/styles/makeStyles.js
function makeStyles() {
  throw new Error(true ? `MUI: makeStyles is no longer exported from @mui/material/styles.
You have to import it from @mui/styles.
See https://mui.com/r/migration-v4/#mui-material-styles for more details.` : formatMuiErrorMessage(14));
}
var init_makeStyles = __esm({
  "node_modules/@mui/material/esm/styles/makeStyles.js"() {
  }
});

// node_modules/@mui/material/esm/styles/withStyles.js
function withStyles() {
  throw new Error(true ? `MUI: withStyles is no longer exported from @mui/material/styles.
You have to import it from @mui/styles.
See https://mui.com/r/migration-v4/#mui-material-styles for more details.` : formatMuiErrorMessage(15));
}
var init_withStyles = __esm({
  "node_modules/@mui/material/esm/styles/withStyles.js"() {
  }
});

// node_modules/@mui/material/esm/styles/withTheme.js
function withTheme() {
  throw new Error(true ? `MUI: withTheme is no longer exported from @mui/material/styles.
You have to import it from @mui/styles.
See https://mui.com/r/migration-v4/#mui-material-styles for more details.` : formatMuiErrorMessage(16));
}
var init_withTheme = __esm({
  "node_modules/@mui/material/esm/styles/withTheme.js"() {
  }
});

// node_modules/@mui/material/esm/styles/experimental_extendTheme.js
function assignNode(obj, keys) {
  keys.forEach((k) => {
    if (!obj[k]) {
      obj[k] = {};
    }
  });
}
function setColor(obj, key, defaultValue) {
  obj[key] = obj[key] || defaultValue;
}
function extendTheme(options = {}, ...args) {
  var _colorSchemesInput$li, _colorSchemesInput$da, _colorSchemesInput$li2, _colorSchemesInput$li3, _colorSchemesInput$da2, _colorSchemesInput$da3;
  const {
    colorSchemes: colorSchemesInput = {},
    cssVarPrefix = "mui"
  } = options, input = _objectWithoutPropertiesLoose(options, _excluded3);
  const getCssVar = createGetCssVar2(cssVarPrefix);
  const _createThemeWithoutVa = createTheme_default(_extends({}, input, colorSchemesInput.light && {
    palette: (_colorSchemesInput$li = colorSchemesInput.light) == null ? void 0 : _colorSchemesInput$li.palette
  })), {
    palette: lightPalette
  } = _createThemeWithoutVa, muiTheme = _objectWithoutPropertiesLoose(_createThemeWithoutVa, _excluded23);
  const {
    palette: darkPalette
  } = createTheme_default({
    palette: _extends({
      mode: "dark"
    }, (_colorSchemesInput$da = colorSchemesInput.dark) == null ? void 0 : _colorSchemesInput$da.palette)
  });
  let theme = _extends({}, muiTheme, {
    cssVarPrefix,
    getCssVar,
    colorSchemes: _extends({}, colorSchemesInput, {
      light: _extends({}, colorSchemesInput.light, {
        palette: lightPalette,
        opacity: _extends({
          inputPlaceholder: 0.42,
          inputUnderline: 0.42,
          switchTrackDisabled: 0.12,
          switchTrack: 0.38
        }, (_colorSchemesInput$li2 = colorSchemesInput.light) == null ? void 0 : _colorSchemesInput$li2.opacity),
        overlays: ((_colorSchemesInput$li3 = colorSchemesInput.light) == null ? void 0 : _colorSchemesInput$li3.overlays) || []
      }),
      dark: _extends({}, colorSchemesInput.dark, {
        palette: darkPalette,
        opacity: _extends({
          inputPlaceholder: 0.5,
          inputUnderline: 0.7,
          switchTrackDisabled: 0.2,
          switchTrack: 0.3
        }, (_colorSchemesInput$da2 = colorSchemesInput.dark) == null ? void 0 : _colorSchemesInput$da2.opacity),
        overlays: ((_colorSchemesInput$da3 = colorSchemesInput.dark) == null ? void 0 : _colorSchemesInput$da3.overlays) || defaultDarkOverlays
      })
    })
  });
  Object.keys(theme.colorSchemes).forEach((key) => {
    const palette = theme.colorSchemes[key].palette;
    if (key === "light") {
      setColor(palette.common, "background", "#fff");
      setColor(palette.common, "onBackground", "#000");
    } else {
      setColor(palette.common, "background", "#000");
      setColor(palette.common, "onBackground", "#fff");
    }
    assignNode(palette, ["Alert", "AppBar", "Avatar", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]);
    if (key === "light") {
      setColor(palette.Alert, "errorColor", darken(palette.error.light, 0.6));
      setColor(palette.Alert, "infoColor", darken(palette.info.light, 0.6));
      setColor(palette.Alert, "successColor", darken(palette.success.light, 0.6));
      setColor(palette.Alert, "warningColor", darken(palette.warning.light, 0.6));
      setColor(palette.Alert, "errorFilledBg", getCssVar("palette-error-main"));
      setColor(palette.Alert, "infoFilledBg", getCssVar("palette-info-main"));
      setColor(palette.Alert, "successFilledBg", getCssVar("palette-success-main"));
      setColor(palette.Alert, "warningFilledBg", getCssVar("palette-warning-main"));
      setColor(palette.Alert, "errorFilledColor", lightPalette.getContrastText(palette.error.main));
      setColor(palette.Alert, "infoFilledColor", lightPalette.getContrastText(palette.info.main));
      setColor(palette.Alert, "successFilledColor", lightPalette.getContrastText(palette.success.main));
      setColor(palette.Alert, "warningFilledColor", lightPalette.getContrastText(palette.warning.main));
      setColor(palette.Alert, "errorStandardBg", lighten(palette.error.light, 0.9));
      setColor(palette.Alert, "infoStandardBg", lighten(palette.info.light, 0.9));
      setColor(palette.Alert, "successStandardBg", lighten(palette.success.light, 0.9));
      setColor(palette.Alert, "warningStandardBg", lighten(palette.warning.light, 0.9));
      setColor(palette.Alert, "errorIconColor", getCssVar("palette-error-light"));
      setColor(palette.Alert, "infoIconColor", getCssVar("palette-info-light"));
      setColor(palette.Alert, "successIconColor", getCssVar("palette-success-light"));
      setColor(palette.Alert, "warningIconColor", getCssVar("palette-warning-light"));
      setColor(palette.AppBar, "defaultBg", getCssVar("palette-grey-100"));
      setColor(palette.Avatar, "defaultBg", getCssVar("palette-grey-400"));
      setColor(palette.Chip, "defaultBorder", getCssVar("palette-grey-400"));
      setColor(palette.Chip, "defaultAvatarColor", getCssVar("palette-grey-700"));
      setColor(palette.Chip, "defaultIconColor", getCssVar("palette-grey-700"));
      setColor(palette.FilledInput, "bg", "rgba(0, 0, 0, 0.06)");
      setColor(palette.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)");
      setColor(palette.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)");
      setColor(palette.LinearProgress, "primaryBg", lighten(palette.primary.main, 0.62));
      setColor(palette.LinearProgress, "secondaryBg", lighten(palette.secondary.main, 0.62));
      setColor(palette.LinearProgress, "errorBg", lighten(palette.error.main, 0.62));
      setColor(palette.LinearProgress, "infoBg", lighten(palette.info.main, 0.62));
      setColor(palette.LinearProgress, "successBg", lighten(palette.success.main, 0.62));
      setColor(palette.LinearProgress, "warningBg", lighten(palette.warning.main, 0.62));
      setColor(palette.Skeleton, "bg", `rgba(${getCssVar("palette-text-primaryChannel")} / 0.11)`);
      setColor(palette.Slider, "primaryTrack", lighten(palette.primary.main, 0.62));
      setColor(palette.Slider, "secondaryTrack", lighten(palette.secondary.main, 0.62));
      setColor(palette.Slider, "errorTrack", lighten(palette.error.main, 0.62));
      setColor(palette.Slider, "infoTrack", lighten(palette.info.main, 0.62));
      setColor(palette.Slider, "successTrack", lighten(palette.success.main, 0.62));
      setColor(palette.Slider, "warningTrack", lighten(palette.warning.main, 0.62));
      const snackbarContentBackground = emphasize(palette.background.default, 0.8);
      setColor(palette.SnackbarContent, "bg", snackbarContentBackground);
      setColor(palette.SnackbarContent, "color", lightPalette.getContrastText(snackbarContentBackground));
      setColor(palette.SpeedDialAction, "fabHoverBg", emphasize(palette.background.paper, 0.15));
      setColor(palette.StepConnector, "border", getCssVar("palette-grey-400"));
      setColor(palette.StepContent, "border", getCssVar("palette-grey-400"));
      setColor(palette.Switch, "defaultColor", getCssVar("palette-common-white"));
      setColor(palette.Switch, "defaultDisabledColor", getCssVar("palette-grey-100"));
      setColor(palette.Switch, "primaryDisabledColor", lighten(palette.primary.main, 0.62));
      setColor(palette.Switch, "secondaryDisabledColor", lighten(palette.secondary.main, 0.62));
      setColor(palette.Switch, "errorDisabledColor", lighten(palette.error.main, 0.62));
      setColor(palette.Switch, "infoDisabledColor", lighten(palette.info.main, 0.62));
      setColor(palette.Switch, "successDisabledColor", lighten(palette.success.main, 0.62));
      setColor(palette.Switch, "warningDisabledColor", lighten(palette.warning.main, 0.62));
      setColor(palette.TableCell, "border", lighten(alpha(palette.divider, 1), 0.88));
      setColor(palette.Tooltip, "bg", alpha(palette.grey[700], 0.92));
    } else {
      setColor(palette.Alert, "errorColor", lighten(palette.error.light, 0.6));
      setColor(palette.Alert, "infoColor", lighten(palette.info.light, 0.6));
      setColor(palette.Alert, "successColor", lighten(palette.success.light, 0.6));
      setColor(palette.Alert, "warningColor", lighten(palette.warning.light, 0.6));
      setColor(palette.Alert, "errorFilledBg", getCssVar("palette-error-dark"));
      setColor(palette.Alert, "infoFilledBg", getCssVar("palette-info-dark"));
      setColor(palette.Alert, "successFilledBg", getCssVar("palette-success-dark"));
      setColor(palette.Alert, "warningFilledBg", getCssVar("palette-warning-dark"));
      setColor(palette.Alert, "errorFilledColor", darkPalette.getContrastText(palette.error.dark));
      setColor(palette.Alert, "infoFilledColor", darkPalette.getContrastText(palette.info.dark));
      setColor(palette.Alert, "successFilledColor", darkPalette.getContrastText(palette.success.dark));
      setColor(palette.Alert, "warningFilledColor", darkPalette.getContrastText(palette.warning.dark));
      setColor(palette.Alert, "errorStandardBg", darken(palette.error.light, 0.9));
      setColor(palette.Alert, "infoStandardBg", darken(palette.info.light, 0.9));
      setColor(palette.Alert, "successStandardBg", darken(palette.success.light, 0.9));
      setColor(palette.Alert, "warningStandardBg", darken(palette.warning.light, 0.9));
      setColor(palette.Alert, "errorIconColor", getCssVar("palette-error-main"));
      setColor(palette.Alert, "infoIconColor", getCssVar("palette-info-main"));
      setColor(palette.Alert, "successIconColor", getCssVar("palette-success-main"));
      setColor(palette.Alert, "warningIconColor", getCssVar("palette-warning-main"));
      setColor(palette.AppBar, "defaultBg", getCssVar("palette-grey-900"));
      setColor(palette.AppBar, "darkBg", getCssVar("palette-background-paper"));
      setColor(palette.AppBar, "darkColor", getCssVar("palette-text-primary"));
      setColor(palette.Avatar, "defaultBg", getCssVar("palette-grey-600"));
      setColor(palette.Chip, "defaultBorder", getCssVar("palette-grey-700"));
      setColor(palette.Chip, "defaultAvatarColor", getCssVar("palette-grey-300"));
      setColor(palette.Chip, "defaultIconColor", getCssVar("palette-grey-300"));
      setColor(palette.FilledInput, "bg", "rgba(255, 255, 255, 0.09)");
      setColor(palette.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)");
      setColor(palette.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)");
      setColor(palette.LinearProgress, "primaryBg", darken(palette.primary.main, 0.5));
      setColor(palette.LinearProgress, "secondaryBg", darken(palette.secondary.main, 0.5));
      setColor(palette.LinearProgress, "errorBg", darken(palette.error.main, 0.5));
      setColor(palette.LinearProgress, "infoBg", darken(palette.info.main, 0.5));
      setColor(palette.LinearProgress, "successBg", darken(palette.success.main, 0.5));
      setColor(palette.LinearProgress, "warningBg", darken(palette.warning.main, 0.5));
      setColor(palette.Skeleton, "bg", `rgba(${getCssVar("palette-text-primaryChannel")} / 0.13)`);
      setColor(palette.Slider, "primaryTrack", darken(palette.primary.main, 0.5));
      setColor(palette.Slider, "secondaryTrack", darken(palette.secondary.main, 0.5));
      setColor(palette.Slider, "errorTrack", darken(palette.error.main, 0.5));
      setColor(palette.Slider, "infoTrack", darken(palette.info.main, 0.5));
      setColor(palette.Slider, "successTrack", darken(palette.success.main, 0.5));
      setColor(palette.Slider, "warningTrack", darken(palette.warning.main, 0.5));
      const snackbarContentBackground = emphasize(palette.background.default, 0.98);
      setColor(palette.SnackbarContent, "bg", snackbarContentBackground);
      setColor(palette.SnackbarContent, "color", darkPalette.getContrastText(snackbarContentBackground));
      setColor(palette.SpeedDialAction, "fabHoverBg", emphasize(palette.background.paper, 0.15));
      setColor(palette.StepConnector, "border", getCssVar("palette-grey-600"));
      setColor(palette.StepContent, "border", getCssVar("palette-grey-600"));
      setColor(palette.Switch, "defaultColor", getCssVar("palette-grey-300"));
      setColor(palette.Switch, "defaultDisabledColor", getCssVar("palette-grey-600"));
      setColor(palette.Switch, "primaryDisabledColor", darken(palette.primary.main, 0.55));
      setColor(palette.Switch, "secondaryDisabledColor", darken(palette.secondary.main, 0.55));
      setColor(palette.Switch, "errorDisabledColor", darken(palette.error.main, 0.55));
      setColor(palette.Switch, "infoDisabledColor", darken(palette.info.main, 0.55));
      setColor(palette.Switch, "successDisabledColor", darken(palette.success.main, 0.55));
      setColor(palette.Switch, "warningDisabledColor", darken(palette.warning.main, 0.55));
      setColor(palette.TableCell, "border", darken(alpha(palette.divider, 1), 0.68));
      setColor(palette.Tooltip, "bg", alpha(palette.grey[700], 0.92));
    }
    palette.common.backgroundChannel = colorChannel(palette.common.background);
    palette.common.onBackgroundChannel = colorChannel(palette.common.onBackground);
    palette.dividerChannel = colorChannel(palette.divider);
    Object.keys(palette).forEach((color) => {
      const colors = palette[color];
      if (colors.main) {
        palette[color].mainChannel = colorChannel(colors.main);
      }
      if (colors.light) {
        palette[color].lightChannel = colorChannel(colors.light);
      }
      if (colors.dark) {
        palette[color].darkChannel = colorChannel(colors.dark);
      }
      if (colors.contrastText) {
        palette[color].contrastTextChannel = colorChannel(colors.contrastText);
      }
      if (colors.primary) {
        palette[color].primaryChannel = colorChannel(colors.primary);
      }
      if (colors.secondary) {
        palette[color].secondaryChannel = colorChannel(colors.secondary);
      }
      if (colors.active) {
        palette[color].activeChannel = colorChannel(colors.active);
      }
      if (colors.selected) {
        palette[color].selectedChannel = colorChannel(colors.selected);
      }
    });
  });
  theme = args.reduce((acc, argument) => deepmerge(acc, argument), theme);
  return theme;
}
var _excluded3, _excluded23, defaultDarkOverlays, createGetCssVar2;
var init_experimental_extendTheme = __esm({
  "node_modules/@mui/material/esm/styles/experimental_extendTheme.js"() {
    init_extends();
    init_objectWithoutPropertiesLoose();
    init_esm();
    init_esm2();
    init_createTheme();
    init_Paper();
    _excluded3 = ["colorSchemes", "cssVarPrefix"];
    _excluded23 = ["palette"];
    defaultDarkOverlays = [...Array(25)].map((_, index) => {
      if (index === 0) {
        return void 0;
      }
      const overlay = getOverlayAlpha(index);
      return `linear-gradient(rgba(255 255 255 / ${overlay}), rgba(255 255 255 / ${overlay}))`;
    });
    createGetCssVar2 = (cssVarPrefix = "mui") => createGetCssVar(cssVarPrefix);
  }
});

// node_modules/@mui/material/esm/styles/excludeVariablesFromRoot.js
var excludeVariablesFromRoot, excludeVariablesFromRoot_default;
var init_excludeVariablesFromRoot = __esm({
  "node_modules/@mui/material/esm/styles/excludeVariablesFromRoot.js"() {
    excludeVariablesFromRoot = (cssVarPrefix) => [...[...Array(24)].map((_, index) => `--${cssVarPrefix ? `${cssVarPrefix}-` : ""}overlays-${index + 1}`), `--${cssVarPrefix ? `${cssVarPrefix}-` : ""}palette-AppBar-darkBg`, `--${cssVarPrefix ? `${cssVarPrefix}-` : ""}palette-AppBar-darkColor`];
    excludeVariablesFromRoot_default = excludeVariablesFromRoot;
  }
});

// node_modules/@mui/material/esm/styles/CssVarsProvider.js
var shouldSkipGeneratingVar, defaultTheme, CssVarsProvider, useColorScheme, getInitColorSchemeScript;
var init_CssVarsProvider = __esm({
  "node_modules/@mui/material/esm/styles/CssVarsProvider.js"() {
    init_extends();
    init_esm2();
    init_experimental_extendTheme();
    init_createTypography();
    init_excludeVariablesFromRoot();
    shouldSkipGeneratingVar = (keys) => {
      var _keys$;
      return !!keys[0].match(/(typography|mixins|breakpoints|direction|transitions)/) || keys[0] === "palette" && !!((_keys$ = keys[1]) != null && _keys$.match(/(mode|contrastThreshold|tonalOffset)/));
    };
    defaultTheme = extendTheme();
    ({
      CssVarsProvider,
      useColorScheme,
      getInitColorSchemeScript
    } = createCssVarsProvider({
      theme: defaultTheme,
      attribute: "data-mui-color-scheme",
      modeStorageKey: "mui-mode",
      colorSchemeStorageKey: "mui-color-scheme",
      defaultColorScheme: {
        light: "light",
        dark: "dark"
      },
      resolveTheme: (theme) => {
        const newTheme = _extends({}, theme, {
          typography: createTypography(theme.palette, theme.typography)
        });
        return newTheme;
      },
      shouldSkipGeneratingVar,
      excludeVariablesFromRoot: excludeVariablesFromRoot_default
    }));
  }
});

// node_modules/@mui/material/esm/styles/index.js
var styles_exports = {};
__export(styles_exports, {
  Experimental_CssVarsProvider: () => CssVarsProvider,
  StyledEngineProvider: () => StyledEngineProvider,
  ThemeProvider: () => ThemeProvider_default,
  adaptV4Theme: () => adaptV4Theme,
  alpha: () => alpha,
  createMuiTheme: () => createMuiTheme,
  createStyles: () => createStyles,
  createTheme: () => createTheme_default,
  css: () => import_react.css,
  darken: () => darken,
  decomposeColor: () => decomposeColor,
  duration: () => duration,
  easing: () => easing,
  emphasize: () => emphasize,
  experimentalStyled: () => styled_default,
  experimental_extendTheme: () => extendTheme,
  experimental_sx: () => sx_default,
  getContrastRatio: () => getContrastRatio,
  getInitColorSchemeScript: () => getInitColorSchemeScript,
  getLuminance: () => getLuminance,
  hexToRgb: () => hexToRgb,
  hslToRgb: () => hslToRgb,
  keyframes: () => import_react.keyframes,
  lighten: () => lighten,
  makeStyles: () => makeStyles,
  recomposeColor: () => recomposeColor,
  responsiveFontSizes: () => responsiveFontSizes,
  rgbToHex: () => rgbToHex,
  shouldSkipGeneratingVar: () => shouldSkipGeneratingVar,
  styled: () => styled_default,
  unstable_createMuiStrictModeTheme: () => createMuiStrictModeTheme,
  unstable_getUnit: () => getUnit,
  unstable_toUnitless: () => toUnitless,
  useColorScheme: () => useColorScheme,
  useTheme: () => useTheme,
  useThemeProps: () => useThemeProps,
  withStyles: () => withStyles,
  withTheme: () => withTheme
});
var init_styles = __esm({
  "node_modules/@mui/material/esm/styles/index.js"() {
    init_adaptV4Theme();
    init_esm2();
    init_createTheme();
    init_createMuiStrictModeTheme();
    init_createStyles();
    init_cssUtils();
    init_responsiveFontSizes();
    init_createTransitions();
    init_useTheme();
    init_useThemeProps();
    init_styled();
    init_styled();
    init_ThemeProvider();
    init_esm2();
    init_makeStyles();
    init_withStyles();
    init_withTheme();
    init_CssVarsProvider();
    init_experimental_extendTheme();
  }
});

// node_modules/@mui/material/esm/className/index.js
var init_className = __esm({
  "node_modules/@mui/material/esm/className/index.js"() {
    init_esm();
  }
});

// node_modules/@mui/material/esm/Box/Box.js
var import_prop_types2, defaultTheme2, Box, Box_default;
var init_Box = __esm({
  "node_modules/@mui/material/esm/Box/Box.js"() {
    init_esm2();
    import_prop_types2 = __toESM(require_prop_types());
    init_className();
    init_styles();
    defaultTheme2 = createTheme_default();
    Box = createBox({
      defaultTheme: defaultTheme2,
      defaultClassName: "MuiBox-root",
      generateClassName: ClassNameGenerator_default.generate
    });
    true ? Box.propTypes = {
      children: import_prop_types2.default.node,
      component: import_prop_types2.default.elementType,
      sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object])
    } : void 0;
    Box_default = Box;
  }
});

// node_modules/@mui/material/esm/Box/index.js
var Box_exports = {};
__export(Box_exports, {
  default: () => Box_default
});
var init_Box2 = __esm({
  "node_modules/@mui/material/esm/Box/index.js"() {
    init_Box();
  }
});

export {
  getUnit,
  toUnitless,
  responsiveFontSizes,
  useTheme,
  init_useTheme,
  getPaperUtilityClass,
  paperClasses_default,
  init_paperClasses,
  Paper_default,
  init_Paper,
  styles_exports,
  init_styles,
  Box_default,
  Box_exports,
  init_Box2 as init_Box
};
//# sourceMappingURL=/build/_shared/chunk-BKODUN5L.js.map
