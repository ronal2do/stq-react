import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "navigation-overlay": {
        "display": "none"
    },
    "push-active navigation-overlay": {
        "background": "transparent",
        "display": "block",
        "position": "fixed",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "zIndex": 997
    },
    "fundo-azul": {
        "backgroundColor": "#002b45",
        "color": "white"
    },
    "push-nav": {
        "display": "block",
        "alignItems": "center",
        "justifyContent": "center",
        "WebkitTransition": "-webkit-transform 0.5s cubic-bezier(.16, .68, .43, .99)",
        "MozTransition": "-moz-transform 0.5s cubic-bezier(.16, .68, .43, .99)",
        "MsTransition": "-ms-transform 0.5s cubic-bezier(.16, .68, .43, .99)",
        "OTransition": "-o-transform 0.5s cubic-bezier(.16, .68, .43, .99)",
        "transition": "transform 0.5s cubic-bezier(.16, .68, .43, .99)",
        "verticalAlign": "middle",
        "position": "fixed",
        "width": 100 * vw,
        "height": "100%",
        "top": 0,
        "bottom": 0,
        "zIndex": 998,
        "overflow": "auto",
        "backgroundPosition": "center",
        "WebkitOverflowScrolling": "touch",
        "overflowX": "hidden"
    },
    "wrap": {
        "WebkitTransition": "-webkit-transform 0.5s cubic-bezier(.16, .68, .43, .99)",
        "MozTransition": "-moz-transform 0.5s cubic-bezier(.16, .68, .43, .99)",
        "MsTransition": "-ms-transform 0.5s cubic-bezier(.16, .68, .43, .99)",
        "OTransition": "-o-transform 0.5s cubic-bezier(.16, .68, .43, .99)",
        "transition": "transform 0.5s cubic-bezier(.16, .68, .43, .99)"
    },
    "push": {
        "WebkitTransition": "-webkit-transform 0.5s cubic-bezier(.16, .68, .43, .99)",
        "MozTransition": "-moz-transform 0.5s cubic-bezier(.16, .68, .43, .99)",
        "MsTransition": "-ms-transform 0.5s cubic-bezier(.16, .68, .43, .99)",
        "OTransition": "-o-transform 0.5s cubic-bezier(.16, .68, .43, .99)",
        "transition": "transform 0.5s cubic-bezier(.16, .68, .43, .99)"
    },
    "push-right": {
        "WebkitTransform": "translate3d(200%,0,0)",
        "MozTransform": "translate3d(200%,0,0)",
        "MsTransform": "translate3d(200%,0,0)",
        "OTransform": "translate3d(200%,0,0)",
        "transform": "translate3d(200%,0,0)"
    },
    "push-open": {
        "WebkitTransform": "translate3d(0%,0,0)",
        "MozTransform": "translate3d(0%,0,0)",
        "MsTransform": "translate3d(0%,0,0)",
        "OTransform": "translate3d(0%,0,0)",
        "transform": "translate3d(0%,0,0)"
    },
    "Menu-wrap": {
        "maxWidth": 900
    }
});