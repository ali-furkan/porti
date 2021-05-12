import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "@/styles";

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: spacing.SCALE[12],
	},
	title: {
		fontSize: typography.FONT_SIZE[32],
		fontFamily: typography.FONT_WEIGHT[700],
	},
	subtitle: {
		fontSize: typography.FONT_SIZE[18],
		fontFamily: typography.FONT_WEIGHT[600],
		color: colors.primary[500],
	},
	containerBox: {
		marginVertical: spacing.SCALE[8],
	},
	boxRow: {
		flexDirection: "row",
	},
	sizeFull: {
		flex: 1,
	},
	card: {
		margin: spacing.SCALE[4],
	},
	cardBodyText: {
		fontSize: typography.FONT_SIZE[24],
		fontFamily: typography.FONT_WEIGHT[600],
	},
});

export default styles;
