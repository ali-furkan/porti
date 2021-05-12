import { StyleSheet } from "react-native";
import { scaleSize, spacing, typography } from "@/styles";

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		...spacing.padding(12, 36),
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
	},
	title: {
		marginLeft: spacing.SCALE[8],
		fontFamily: typography.FONT_WEIGHT[600],
		fontSize: typography.FONT_SIZE[16],
	},
	body: {
		flex: 1,
		paddingHorizontal: scaleSize(21),
	},
	saveButton: {
		padding: spacing.SCALE[8],
	},
});

export default styles;
