import React from "react";
import { Text, TextInput, View } from "react-native";

import styles from "./input.style";

/**
 * Input Component
 * @param {{label:string}&import("react-native").TextInputProps} param0
 */
const Input = ({ style, label, ...props }) => (
	<View style={style}>
		{label && <Text style={styles.label}>{label} </Text>}
		<View style={styles.wrapper}>
			<TextInput
				style={styles.input}
				{...props}
				placeholderTextColor={"#aaa"}
			/>
		</View>
	</View>
);

export default React.memo(Input)
