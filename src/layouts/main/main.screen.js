import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./main.style";

function MainLayout({ children }) {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image source={require("@/assets/img/logo.png")} style={styles.logo} />
				<Text style={styles.title}>Porti</Text>
			</View>
			<View style={styles.body}>{children}</View>
		</View>
	);
}

export default MainLayout;
