import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/core";
import Toast from "react-native-toast-message";

import { spacing } from "@/styles";
import {
	CREATE_BOOKMARK,
	UPDATE_BOOKMARK,
	DELETE_BOOKMARK,
} from "@/lib/bookmarks";
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import { useCallback } from "react";
import { useEdit } from "@/contexts/edit/edit.context";
import { useStore } from "@/contexts/store/store.context";

function BookmarkEdit({ isNew, data }) {
	const navigate = useNavigation();
	const [mutBookmark, { loading, error, data: mutData }] = useMutation(
		isNew ? CREATE_BOOKMARK : UPDATE_BOOKMARK,
	);
	const [delBookmark] = useMutation(DELETE_BOOKMARK);

	const [state, edit] = useEdit(isNew ? "create" : "edit", {
		title: (data && data.title) || "",
		url: (data && data.url) || "",
	});
	const [, store] = useStore();

	const handleAction = useCallback(() => {
		const payload = {
			title: state.data.title,
			url: state.data.url,
			createdAt: isNew ? Date.now() : data.createdAt,
			likes: isNew ? 0 : data.likes,
		};

		let field = data && data.field;

		if (isNew) {
			field = Date.now().toString()
		}
		edit.updateField("field", field);

		mutBookmark({
			variables: { field, payload: JSON.stringify(payload) },
		});
	}, [state, data]);

	const handleDelete = useCallback(async () => {
		const res = await delBookmark({
			variables: { field: data.field },
		});

		if (res.data.redisHDel == 1) {
			store.deleteItem("bookmarks", data.field);
			navigate.goBack();
		}
	});

	useEffect(() => {
		if (!(loading || error) && mutData) {
			Toast.show({
				type: "success",
				text1: `Successfully ${isNew ? "Created" : "Saved"} Bookmark`,
				text2: `${isNew ? "Created" : "Saved"} ${state.data.title} bookmark`,
			});
			const payload = {
				id: state.data.field,
				field: state.data.field,
				title: state.data.title,
				url: state.data.url,
				likes: 0,
				createdAt: isNew ? Date.now() : data.createdAt,
			};

			if (isNew) store.createItem("bookmarks", payload);
			else store.updateItem("bookmarks", state.data.field, payload);

			navigate.goBack();
		}
	}, [loading, error, mutData]);

	return (
		<View style={{ flex: 1, ...spacing.padding(8, 12) }}>
			<Input
				label="Title"
				placeholder="type a bookmark title"
				onChangeText={(t) => edit.updateField("title", t)}
				value={state.data.title}
				defaultValue={(data && data.title) || ""}
			/>

			<Input
				style={{ marginVertical: spacing.SCALE[16] }}
				label="Url"
				placeholder="https://example.com"
				onChangeText={(t) => edit.updateField("url", t)}
				value={state.data.url}
				defaultValue={(data && data.url) || ""}
			/>
			<Button
				onPress={handleAction}
				text={`${isNew ? "Create" : "Save"} Bookmark`}
			/>
			{!isNew && <Button style={{marginVertical: 12}} onPress={handleDelete} text={`Delete Bookmark`} />}
			{error && (
				<Text style={{ color: "#f00" }}>
					{error.name} {error.message}{" "}
				</Text>
			)}
			{loading && <Text> Loading... </Text>}
		</View>
	);
}

export default BookmarkEdit;
