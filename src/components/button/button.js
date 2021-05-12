import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import styles from "./button.style";

/**
 *
 * @param {{text: string} &import("react-native").TouchableOpacityProps} param0
 * @returns
 */
const Button = ({ style, text, ...props }) => (
	<TouchableOpacity
		activeOpacity={0.7}
		style={StyleSheet.flatten([style, styles.button])}
		{...props}
	>
		<Text style={styles.text}>{text} </Text>
	</TouchableOpacity>
);

export default React.memo(Button);
