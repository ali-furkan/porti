import React from "react";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

function BookmarksScreen() {
	const { loading, error, data } = useQuery(getBookmarks);

	return (
		<View>
			<Text>Bookmark Screen</Text>
		</View>
	);
}

BookmarksScreen.options = {
	tabBarIcon: ({ color, size }) => (
		<Ionicons name="bookmark" color={color} size={size} />
	),
};

export default BookmarksScreen;
