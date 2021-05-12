import React from "react";
import { View, Text, FlatList, Linking } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import parse from "url-parse";

import { useStore } from "@/contexts/store/store.context";
import MainLayout from "@/layouts/main/main.screen";
import ListCard from "@/components/list-card/list-card";
import Button from "@/components/button/button";

import styles from "./bookmarks.style";

function BookmarksScreen({ navigation }) {
	const [store] = useStore();
	const {
		bookmarks: { loading, error, data },
	} = store;

	const clickBookmark = (url) => {
		return async () => await Linking.openURL(url);
	};

	return (
		<MainLayout>
			<Text style={styles.title}>Dashboard</Text>
			<Text style={styles.subtitle}>Bookmarks</Text>

			<Button
				style={styles.button}
				text={"Add Bookmarks"}
				onPress={() =>
					navigation.navigate("edit-modal", {
						type: "bookmark",
					})
				}
			/>

			<View>
				{loading && <Text>Loading...</Text>}
				{error && <Text style={{ color: "#f00" }}>Error {error.message} </Text>}
				{!(loading || error) && data && (
					<FlatList
						keyExtractor={(item) => "bookmark" + item.id}
						data={data.sort((a, b) => b.createdAt - a.createdAt)}
						renderItem={({ item }) => (
							<ListCard
								title={item.title}
								information={[
									parse(item.url).hostname,
									formatDistanceToNow(item.createdAt),
								].join(" - ")}
								onPress={clickBookmark(item.url)}
								onLongPress={() =>
									navigation.navigate("edit-modal", {
										type: "bookmark",
										data: item,
									})
								}
							/>
						)}
					/>
				)}
			</View>
		</MainLayout>
	);
}

BookmarksScreen.options = {
	tabBarIcon: ({ color, size }) => (
		<Ionicons name="bookmark" color={color} size={size} />
	),
};

export default BookmarksScreen;
