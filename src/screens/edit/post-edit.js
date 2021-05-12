import React, { useCallback, useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import uuid from "uuid-random";

import { createPost, deletePost, updatePost } from "@/lib/posts";
import { useEdit } from "@/contexts/edit/edit.context";
import { useStore } from "@/contexts/store/store.context";
import { spacing, typography } from "@/styles";
import Input from "@/components/input/input";
import Button from "@/components/button/button";

function PostEdit({ isNew, data }) {
	const [editState, setState] = useState({ error: null, loading: false });
	const [state, edit] = useEdit(isNew ? "create" : "edit", {
		title: data.title || "",
		subtitle: data.subtitle || "",
		slug: data.slug || "",
		image: data.image || "",
		description: data.description || "",
		content: data.content || "",
	});
	const [, store] = useStore();
	const navigate = useNavigation();

	const handleSubmit = useCallback(async () => {
		setState({ error: null, loading: true });

		const payload = {
			...data,
			...state.data,
			id: isNew ? uuid() : data.id,
			createdAt: isNew ? new Date() : data.createdAt,
			updatedAt: new Date(),
		};

		const { error } = await (isNew ? createPost : updatePost)(payload);

		if (error) return setState({ error, loading: false });

		if (isNew) store.createItem("posts", payload);
		else store.updateItem("posts", payload.id, payload);

		navigate.goBack();
	}, [data, state]);

	const handleDelete = useCallback(async () => {
		const { error } = await deletePost(data.id);

		if (!error) {
			store.deleteItem("posts", data.id);
			navigate.goBack();
		}
	}, []);

	return (
		<ScrollView style={{ flex: 1, ...spacing.padding(8, 12) }}>
			<Input
				label="Title"
				placeholder="title"
				onChangeText={(t) => edit.updateField("title", t)}
				value={state.data.title}
				defaultValue={data.title || ""}
			/>
			<Input
				label="Subtitle"
				placeholder="subtitle"
				onChangeText={(t) => edit.updateField("subtitle", t)}
				value={state.data.subtitle}
				defaultValue={data.subtitle || ""}
			/>
			<Input
				label="Description"
				placeholder="description"
				onChangeText={(t) => edit.updateField("description", t)}
				value={state.data.description}
				defaultValue={data.description || ""}
			/>
			<Input
				label="Slug"
				placeholder="slug-name"
				onChangeText={(t) => edit.updateField("slug", t)}
				value={state.data.slug}
				defaultValue={data.slug || ""}
			/>
			<Input
				label="Image"
				placeholder="image url"
				onChangeText={(t) => edit.updateField("image", t)}
				value={state.data.image}
				defaultValue={data.image || ""}
			/>
			<View style={{ marginVertical: 12 }}>
				<Text style={{ fontFamily: typography.FONT_WEIGHT[600] }}>Content</Text>
				<TextInput
					style={{
						color: "#fff",
						backgroundColor: "#333",
						borderRadius: 8,
						textAlignVertical: "top",
						height: 180,
						...spacing.padding(8, 12),
						fontFamily: typography.FONT_WEIGHT[500],
					}}
					underlineColorAndroid="transparent"
					placeholderTextColor={"#888"}
					placeholder="Type something for content"
					numberOfLines={10}
					multiline={true}
					defaultValue={data.content || ""}
				/>
			</View>
			<Button onPress={handleSubmit} text="Submit" />
			{!isNew && <Button onPress={handleDelete} text="Delete Post" />}
			{editState.error && (
				<Text style={{ color: "#f00" }}>{editState.error.toString()}</Text>
			)}
			{editState.loading && <Text> Loading... </Text>}
		</ScrollView>
	);
}

export default PostEdit;
