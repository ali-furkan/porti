import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { useStore } from "@/contexts/store/store.context";
import Card from "@/components/card/card";
import MainLayout from "@/layouts/main/main.screen";

import styles from "./home.style";

function HomeScreen() {
	const [state] = useStore();

	return (
		<MainLayout>
			<View style={styles.container}>
				<Text style={styles.title}>Dashboard</Text>
				<Text style={styles.subtitle}>Activities</Text>
				<View style={styles.containerBox}>
					<View style={styles.boxRow}>
						<Card
							style={StyleSheet.flatten([styles.card, styles.sizeFull])}
							title={"BPM"}
						>
							<Text style={styles.cardBodyText}>120</Text>
						</Card>
						<Card
							style={StyleSheet.flatten([styles.card, styles.sizeFull])}
							title={"Steps"}
						>
							<Text style={styles.cardBodyText}>12000</Text>
						</Card>
					</View>
					<Card style={styles.card} title={"Sleeping Time"}>
						<Text style={styles.cardBodyText}> 6s 14d </Text>
					</Card>
				</View>

				<Text style={styles.subtitle}> Information </Text>
				<View style={styles.boxRow}>
					<Card
						style={StyleSheet.flatten([styles.card, styles.sizeFull])}
						title={"Bookmarks"}
					>
						<Text style={styles.cardBodyText}>
							{state.bookmarks &&
								state.bookmarks.data &&
								state.bookmarks.data.length.toString()}
						</Text>
					</Card>
					<Card
						style={StyleSheet.flatten([styles.card, styles.sizeFull])}
						title={"Posts"}
					>
						<Text style={styles.cardBodyText}>
							{state.posts &&
								state.posts.data &&
								state.posts.data.length.toString()}
						</Text>
					</Card>
				</View>
			</View>
		</MainLayout>
	);
}

HomeScreen.options = {
	tabBarIcon: ({ color, size }) => (
		<Ionicons name="home" color={color} size={size} />
	),
};

export default HomeScreen;
