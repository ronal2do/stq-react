import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "react-parallax-content": {
        "minHeight": 100 * vh,
        "color": "white",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
    },
    "react-parallax-bgimage": {
        "backgroundPosition": "top center"
    },
    "react-parallax-content:before": {
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
    "container": {
        "zIndex": 10
    }
});