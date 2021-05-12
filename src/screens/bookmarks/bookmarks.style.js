import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "@/styles";

const styles = StyleSheet.create({
	title: {
		fontSize: typography.FONT_SIZE[32],
		fontFamily: typography.FONT_WEIGHT[700],
	},
	subtitle: {
		fontSize: typography.FONT_SIZE[18],
		fontFamily: typography.FONT_WEIGHT[600],
		color: colors.primary[500],
	},
	button: {
		marginVertical: spacing.SCALE[16],
	},
});

export default styles;
