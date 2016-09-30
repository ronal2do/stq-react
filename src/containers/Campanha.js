import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "hero": {
        "backgroundPosition": "center top",
        "backgroundSize": "cover",
        "height": 100 * vh
    },
    "poster:before": {
        "content": "''",
        "display": "block",
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "top": 0,
        "left": 0,
        "bottom": 0,
        "right": 0,
        "backgroundImage": "url(../images/site/grade-reverse.png)",
        "opacity": 0.5
    },
    "inner-titulo": {
        "textAlign": "left",
        "position": "relative",
        "width": "91%",
        "height": "101%"
    },
    "segundo-titulo": {
        "textAlign": "left",
        "paddingTop": 0,
        "paddingRight": "5%",
        "paddingBottom": 0,
        "paddingLeft": "5%"
    },
    "padding": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "overlay-azul": {
        "backgroundColor": "rgba(0, 43, 69, 0.9)"
    }
});