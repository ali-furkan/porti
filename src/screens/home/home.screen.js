import React from "react";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

function HomeScreen() {

	return (
		<View>
			<Text>Home Screen</Text>
		</View>
	);
}

HomeScreen.options = {
	tabBarIcon: ({ color, size }) => (
		<Ionicons name="home" color={color} size={size} />
	),
};

export default HomeScreen;
