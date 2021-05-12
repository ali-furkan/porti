import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "@/styles";

const styles = StyleSheet.create({
	button: {
		...spacing.padding(8, 16),
		backgroundColor: colors.primary[800],
		borderRadius: spacing.SCALE[8],
		alignItems: "center",
	},
	text: {
		fontFamily: typography.FONT_WEIGHT[600],
		fontSize: typography.FONT_SIZE[16],
		color: colors.primary[0],
	},
});

export default styles;
