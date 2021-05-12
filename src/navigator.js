import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { EditProvider } from "@/contexts/edit/edit.context";
import { colors } from "@/styles/colors";

// Screens
import HomeScreen from "@/screens/home/home.screen";
import BookmarksScreen from "@/screens/bookmarks/bookmarks.screen";
import PostsScreen from "@/screens/posts/posts.screen";
import EditScreen from "./screens/edit/edit.screen";

// Navigators
const Root = createStackNavigator();
const Tab = createBottomTabNavigator();

// Wrapper Component
function EditScreenComponent(props) {
	return (
		<EditProvider>
			<EditScreen {...props} />
		</EditProvider>
	);
}

const Theme = {
	dark: true,
	colors: {
		primary: colors.secondary[500],
		background: colors.primary[0],
		card: colors.primary[0],
		text: colors.primary[700],
		border: colors.primary[0],
		notification: colors.primary[0],
	},
};

function TabScreen() {
	return (
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
	);
}

function Navigator() {
	return (
		<NavigationContainer theme={Theme}>
			<Root.Navigator mode="modal" headerMode={"none"}>
				<Root.Screen name={"home"} component={TabScreen} />
				<Root.Screen name={"edit-modal"} component={EditScreenComponent} />
			</Root.Navigator>
		</NavigationContainer>
	);
}

export default Navigator;
