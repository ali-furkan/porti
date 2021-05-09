import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import HomeScreen from "@/screens/home/home.screen";
import BookmarksScreen from "@/screens/bookmarks/bookmarks.screen";
import PostsScreen from "@/screens/posts/posts.screen";

const Tab = createBottomTabNavigator();

const Theme = {
	dark: true,
	colors: {
		primary: "rgb(255, 45, 85)",
		background: "rgb(0, 0, 0)",
		card: "rgb(12, 12, 12)",
		text: "rgb(255, 255, 255)",
		border: "rgb(0, 0, 0)",
		notification: "rgb(0, 0, 0)",
	},
};

function Navigator() {
	return (
		<NavigationContainer theme={Theme}>
			<Tab.Navigator
				tabBarOptions={{ showLabel: false }}
				initialRouteName={HomeScreen.name}
			>
				<Tab.Screen
					options={HomeScreen.options}
					name={HomeScreen.name}
					component={HomeScreen}
				/>
				<Tab.Screen
					options={BookmarksScreen.options}
					name={BookmarksScreen.name}
					component={BookmarksScreen}
				/>
				<Tab.Screen
					options={PostsScreen.options}
					name={PostsScreen.name}
					component={PostsScreen}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default Navigator;
