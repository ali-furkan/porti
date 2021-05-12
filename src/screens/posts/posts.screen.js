import React from "react";
import { View, Text, FlatList, Linking } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import MainLayout from "@/layouts/main/main.screen";
import ListCard from "@/components/list-card/list-card";
import Button from "@/components/button/button";

import styles from "./posts.style";
import { useStore } from "@/contexts/store/store.context";

const POST_BASE_URI = "https://alifurkan.co/posts/";

function PostScreen({ navigation }) {
	const [store] = useStore();
	const {
		posts: { loading, error, data },
	} = store;

	const clickBookmark = (url) => {
		return async () => await Linking.openURL(url);
	};

	console.log("Rendering");

	return (
		<MainLayout>
			<Text style={styles.title}>Dashboard</Text>
			<Text style={styles.subtitle}>Posts</Text>

			<Button
				style={styles.button}
				text={"Add Post"}
				onPress={() =>
					navigation.navigate("edit-modal", {
						type: "post",
					})
				}
			/>

			<View>
				{loading && <Text>Loading...</Text>}
				{error && <Text style={{ color: "#f00" }}>Error {error.message} </Text>}
				{!(loading || error) && data && (
					<FlatList
						data={data}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<ListCard
								title={item.title}
								description={item.description.slice(0, 128)}
								information={[
									item.subtitle,
									formatDistanceToNow(new Date(item.createdAt)),
								].join(" - ")}
								onPress={clickBookmark(POST_BASE_URI + item.slug)}
								onLongPress={() =>
									navigation.navigate("edit-modal", {
										type: "post",
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

PostScreen.options = {
	tabBarIcon: ({ color, size }) => (
		<Ionicons name="book" color={color} size={size} />
	),
};

export default PostScreen;
