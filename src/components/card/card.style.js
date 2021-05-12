import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "@/styles";

const styles = StyleSheet.create({
	card: {
		borderRadius: spacing.SCALE[8],
		borderWidth: spacing.SCALE[1],
		borderColor: colors.primary[800],
		...spacing.padding(8, 16, 16),
	},
	cardItem: {
		marginTop: spacing.SCALE[4],
	},
	title: {
		fontSize: typography.FONT_SIZE[18],
		color: colors.primary[400],
		fontFamily: typography.FONT_WEIGHT[600],
	},
	footer: {
		fontSize: typography.FONT_SIZE[8],
	},
});

export default styles;
