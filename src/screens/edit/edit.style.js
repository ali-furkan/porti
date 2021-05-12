import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "@/styles";

const styles = StyleSheet.create({
	editContainer: {
		flex: 1,
		...spacing.padding(8, 12),
	},
	input: {
		marginVertical: spacing.SCALE[8],
	},
	editorLabel: {
		fontFamily: typography.FONT_WEIGHT[600],
	},
	editorInput: {
		color: colors.primary[800],
		backgroundColor: colors.primary[200],
		borderRadius: spacing.SCALE[8],
		textAlignVertical: "top",
		height: 180,
		...spacing.padding(8, 12),
		fontFamily: typography.FONT_WEIGHT[500],
	},
    button: {
        marginBottom: spacing.SCALE[12]
    },
    error: {
        color: "#f00"
    }
});

export default styles;
