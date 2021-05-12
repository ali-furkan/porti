import { Dimensions, PixelRatio } from "react-native";

export const WINDOW_WIDTH = Dimensions.get("window").width;
export const WINDOW_HEIGHT = Dimensions.get("window").height;
const guidelineBaseWidth = 375;

export const scaleSize = (size) => (WINDOW_WIDTH / guidelineBaseWidth) * size;
export const scaleFont = (size) => size * (1 - PixelRatio.getFontScale() + 1);

export const dimensions = (
	top,
	right = top,
	bottom = top,
	left = right,
	prop,
) => {
	const styles = {};

	styles[`${prop}Top`] = scaleSize(top);
	styles[`${prop}Right`] = scaleSize(right);
	styles[`${prop}Bottom`] = scaleSize(bottom);
	styles[`${prop}Left`] = scaleSize(left);

	return styles;
};

export const boxShadow = (
	color = "#f00",
	offset = { height: 4, width: 0 },
	radius = 4,
	opacity = 0.2,
) => ({
	shadowColor: color,
	shadowOffset: offset,
	shadowOpacity: opacity,
	shadowRadius: radius,
	elevation: radius,
});
