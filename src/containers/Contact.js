import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "col-xs-12": {
        "width": "100%"
    },
    "p": {
        "fontSize": 14
    },
    "contact": {
        "position": "relative",
        "overflow": "hidden"
    },
    "center": {
        "textAlign": "center"
    },
    "switch": {
        "position": "absolute",
        "display": "block",
        "width": "100%",
        "bottom": 20,
        "zIndex": 100
    },
    "*": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "outline": "0 none",
        "border": "none"
    },
    "radio": {
        "position": "relative",
        "width": 45,
        "height": 25,
        "background": "transparent",
        "border": "1px solid #fff",
        "WebkitBorderRadius": 50,
        "MozBorderRadius": 50,
        "MsBorderRadius": 50,
        "OBorderRadius": 50,
        "borderRadius": 50
    },
    "radioactive elipse": {
        "left": "50%"
    },
    "button": {
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "lineHeight": "inherit"
    },
    "input": {
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "lineHeight": "inherit"
    },
    "select": {
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "lineHeight": "inherit"
    },
    "textarea": {
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "lineHeight": "inherit"
    },
    "elipse": {
        "position": "absolute",
        "display": "block",
        "width": 21,
        "height": 21,
        "background": "#fff",
        "top": 1,
        "left": 1,
        "WebkitBorderRadius": 50,
        "MozBorderRadius": 50,
        "MsBorderRadius": 50,
        "OBorderRadius": 50,
        "borderRadius": 50,
        "WebkitTransition": "all 0.2s linear",
        "MozTransition": "all 0.2s linear",
        "transition": "all 0.2s linear",
        "WebkitBoxShadow": "0px 2px 3px 0px rgba(0, 0, 0, 0.9)",
        "MozBoxShadow": "0px 2px 3px 0px rgba(0, 0, 0, 0.9)",
        "boxShadow": "0px 2px 3px 0px rgba(0, 0, 0, 0.9)"
    },
    "switch h5": {
        "textShadow": "0px 2px 3px rgba(0, 0, 0, 0.9)"
    },
    "contactform fieldset": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "border": "none"
    },
    "fieldset": {
        "border": "1px solid silver",
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 0,
        "marginLeft": 2,
        "paddingTop": 0.35,
        "paddingRight": 0.625,
        "paddingBottom": 0.75,
        "paddingLeft": 0.625
    },
    "animated": {
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationFillMode": "both",
        "animationFillMode": "both"
    },
    "form-field span": {
        "display": "block"
    },
    "form-field span input": {
        "border": "none",
        "outline": "none",
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0,
        "width": "100%",
        "background": "transparent",
        "borderBottom": "1px solid rgba(255,255,255,.5)",
        "borderRadius": 0,
        "color": "rgba(255,255,255,.5)",
        "textTransform": "lowercase",
        "fontSize": 18,
        "fontWeight": "400",
        "marginBottom": 20,
        "WebkitFontSmoothing": "antialiased",
        "WebkitTransition": "all 0.4s linear",
        "MozTransition": "all 0.4s linear",
        "transition": "all 0.4s linear"
    },
    "form-field span textarea": {
        "border": "none",
        "outline": "none",
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0,
        "width": "100%",
        "background": "transparent",
        "borderBottom": "1px solid rgba(255,255,255,.5)",
        "borderRadius": 0,
        "color": "rgba(255,255,255,.5)",
        "textTransform": "lowercase",
        "fontSize": 16,
        "fontWeight": "400",
        "marginBottom": 20,
        "WebkitFontSmoothing": "antialiased",
        "WebkitTransition": "all 0.4s linear",
        "MozTransition": "all 0.4s linear",
        "transition": "all 0.4s linear",
        "overflow": "auto",
        "height": 100
    },
    "form-click button": {
        "display": "inline-block",
        "position": "relative",
        "border": "1px solid rgba(255,255,255,.6)",
        "fontFamily": "'stq', sans-serif",
        "fontWeight": "400",
        "fontSize": 10,
        "lineHeight": 1,
        "textTransform": "lowercase",
        "color": "#fff",
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0,
        "width": "100%",
        "background": "rgba(255,255,255,.1)",
        "WebkitFontSmoothing": "antialiased",
        "WebkitTransition": "all 0.3s",
        "MozTransition": "all 0.3s",
        "MsTransition": "all 0.3s",
        "OTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "button[disabled]": {
        "cursor": "default"
    },
    "html input[disabled]": {
        "cursor": "default"
    },
    "[disabled]": {
        "color": "rgba(255, 255, 255, 0.31)!important",
        "border": "1px solid rgba(255, 255, 255, 0.25)!important"
    },
    "dark p": {
        "color": "#fff"
    },
    "map-overlay": {
        "background": "rgba(0,43,69,.9)",
        "paddingBottom": 130
    },
    "opacity": {
        "opacity": 0
    },
    "mapa": {
        "overflow": "hidden",
        "zIndex": -100
    },
    "mapa-ativo": {
        "overflow": "hidden",
        "zIndex": 1
    },
    "map": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "zIndex": -100
    }
});