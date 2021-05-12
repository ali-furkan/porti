import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "@/styles";

const styles = StyleSheet.create({
	label: {
		marginBottom: spacing.SCALE[2],
		fontFamily: typography.FONT_WEIGHT[600],
		fontSize: typography.FONT_SIZE[14],
	},
	wrapper: {
		borderRadius: spacing.SCALE[8],
		backgroundColor: colors.primary[200],
		paddingHorizontal: spacing.SCALE[12],
	},
	input: {
		fontFamily: typography.FONT_WEIGHT[500],
		color: colors.primary[800],
		fontSize: typography.FONT_SIZE[14],
		paddingVertical: spacing.SCALE[8],
		zIndex: 999,
	},
});

export default styles;
