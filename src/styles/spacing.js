import { scaleSize, dimensions } from "./mixins";

const SCALE = {
	1: scaleSize(1),
	2: scaleSize(2),
	3: scaleSize(3),
	4: scaleSize(4),
	5: scaleSize(5),
	8: scaleSize(8),
	12: scaleSize(12),
	16: scaleSize(16),
	18: scaleSize(18),
	20: scaleSize(20),
};

const margin = (t, r, b, l) => dimensions(t, r, b, l, "margin");
const padding = (t, r, b, l) => dimensions(t, r, b, l, "padding");

export const spacing = { SCALE, margin, padding };
