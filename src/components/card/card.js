import React from "react";
import { StyleSheet, Text, View } from "react-native";

import styles from "./card.style";

function Card({ title, children, footer, style, ...props }) {
	return (
		<View
			style={style ? StyleSheet.flatten([styles.card, style]) : styles.card}
			{...props}
		>
			{title && (
				<Text style={StyleSheet.flatten([styles.title, styles.cardItem])}>
					{title}
				</Text>
			)}
			<View style={styles.cardItem}>{children}</View>
			{footer && (
				<Text style={StyleSheet.flatten([styles.footer, styles.cardItem])}>
					{footer}
				</Text>
			)}
		</View>
	);
}

export default Card;
