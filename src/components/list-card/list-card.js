import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import styles from "./list-card.style";

/**
 *	List Card
 *	@param {{title: string; information: string; description: string}&import("react-native").TouchableOpacityProps} params
 */
function ListCard({ title, information, description, style, ...props }) {
	return (
		<TouchableOpacity
			activeOpacity={0.5}
			accessibilityRole="button"
			style={style ? StyleSheet.flatten([styles.card, style]) : styles.card}
			{...props}
		>
			<>
				{title && (
					<Text style={StyleSheet.flatten([styles.title, styles.cardItem])}>
						{title}
					</Text>
				)}
				{description && (
					<Text
						style={StyleSheet.flatten([styles.description, styles.cardItem])}
					>
						{description}
					</Text>
				)}
				{information && (
					<Text
						style={StyleSheet.flatten([styles.information, styles.cardItem])}
					>
						{information}
					</Text>
				)}
			</>
		</TouchableOpacity>
	);
}

export default ListCard;
