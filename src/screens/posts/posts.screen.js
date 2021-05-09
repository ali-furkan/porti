import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

const PostsScreen = () => (
	<View>
		<Text>PostsScreen</Text>
	</View>
);

PostsScreen.options = {
	tabBarIcon: ({ color, size }) => (
		<Ionicons name="book" color={color} size={size} />
	),
};


export default PostsScreen;
