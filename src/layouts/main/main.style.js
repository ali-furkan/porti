import { StyleSheet } from "react-native";
import { scaleSize, spacing, typography } from "@/styles";

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		fontFamily: typography.FONT_WEIGHT[700],
		fontSize: typography.FONT_SIZE[16],
	},
	header: {
		...spacing.padding(12, 36),
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	body: {
		flex: 1,
		paddingHorizontal: scaleSize(21),
	},
	logo: {
		width: scaleSize(56),
		height: scaleSize(36),
	},
});

export default styles;
