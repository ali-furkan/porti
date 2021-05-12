import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "@/styles";

const styles = StyleSheet.create({
	card: {
		...spacing.padding(12, 4),
	},
	title: {
		fontSize: typography.FONT_SIZE[24],
		fontFamily: typography.FONT_WEIGHT[700],
	},
	description: {
		fontSize: typography.FONT_SIZE[14],
		fontFamily: typography.FONT_WEIGHT[500],
		color: colors.primary[500],
		marginBottom: spacing.SCALE[4],
	},
	information: {
		fontSize: typography.FONT_SIZE[12],
		fontFamily: typography.FONT_WEIGHT[500],
		color: colors.primary[500],
	},
});

export default styles;
