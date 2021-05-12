import React from "react";

import EditLayout from "@/layouts/edit/edit.screen";

import BookmarkEdit from "./bookmark-edit";
import PostEdit from "./post-edit";

function EditScreen({ route }) {
	const { type, data } = route.params;

	const title = [
		data !== undefined ? "Edit" : "Create New",
		type
			.split("")
			.map((s, i) => (i == 0 ? s.toUpperCase() : s))
			.join(""),
	].join(" ");

	console.log("EditScreen Rendering")

	return (
		<EditLayout title={title}>
			{type === "bookmark" ? <BookmarkEdit isNew={!data} data={data} /> : null}
			{type === "post" ? <PostEdit isNew={!data} data={data} /> : null}
		</EditLayout>
	);
}

export default React.memo(EditScreen);
