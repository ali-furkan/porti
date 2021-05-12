import { scaleFont, scaleSize } from "./mixins";

const FONT_FAMILY = "Montserrat";

const FONT_WEIGHT = {
	100: FONT_FAMILY + "-Thin",
	200: FONT_FAMILY + "-ExtraLight",
	300: FONT_FAMILY + "-Light",
	400: FONT_FAMILY + "-Regular",
	500: FONT_FAMILY + "-Medium",
	600: FONT_FAMILY + "-SemiBold",
	700: FONT_FAMILY + "-Bold",
	800: FONT_FAMILY + "-ExtraBold",
	900: FONT_FAMILY + "-Black",
};

const FONT_SIZE = {
	64: scaleFont(64),
	48: scaleFont(48),
	32: scaleFont(32),
	24: scaleFont(24),
	20: scaleFont(20),
	18: scaleFont(18),
	16: scaleFont(16),
	14: scaleFont(14),
	12: scaleFont(12),
	8: scaleFont(8),
};

const LINE_HEIGHT = {
	64: scaleSize(64),
	48: scaleSize(48),
	32: scaleSize(32),
	24: scaleSize(24),
	20: scaleSize(20),
	18: scaleSize(18),
	16: scaleSize(16),
	14: scaleSize(14),
	12: scaleSize(12),
	8: scaleSize(8),
};

export const typography = { FONT_SIZE, LINE_HEIGHT, FONT_WEIGHT };
