import React, { useReducer, useEffect, useContext, useMemo } from "react";
import { useQuery } from "@apollo/client";

import { GET_BOOKMARKS } from "@/lib/bookmarks";
import { getPostList, usePost } from "@/lib/posts";

import storeReducer, { actions } from "./store.reducer";

export const StoreContext = React.createContext();

function Initializor() {
	const bookmark = useQuery(GET_BOOKMARKS);
	const post = usePost(36, getPostList);
	const [, store] = useStore();

	useEffect(() => {
		store.setData("bookmarks", {
			loading: bookmark.loading,
			error: bookmark.error,
			data: bookmark.data
				? bookmark.data.redisHGetAll.map(({ field, value }) => ({
						field,
						id: field,
						...JSON.parse(value),
				  }))
				: null,
		});
		store.setData("posts", post);
	}, [bookmark, post]);

	return null;
}
const MemoInitializor = React.memo(Initializor);

export function StoreProvider({ children }) {
	const [state, dispatch] = useReducer(storeReducer, {});

	const storeContext = useMemo(
		() => [
			state,
			{
				updateItem: (field, itemField, value) =>
					dispatch({
						type: actions.UPDATE_ITEM,
						field,
						item: itemField,
						data: value,
					}),
				createItem: (field, data) =>
					dispatch({
						type: actions.CREATE_ITEM,
						field,
						data,
					}),
				deleteItem: (field, itemField) =>
					dispatch({
						type: actions.DELETE_ITEM,
						field,
						item: itemField,
					}),
				setData: (field, value) =>
					dispatch({ type: actions.SET_DATA, field, data: value }),
				delete: (field) => dispatch({ type: actions.DELETE_ITEM, field }),
				reset: () => dispatch({ type: actions.RESET }),
			},
		],
		[state],
	);

	return (
		<StoreContext.Provider value={storeContext}>
			<MemoInitializor />
			{children}
		</StoreContext.Provider>
	);
}

export const useStore = () => {
	const [state, dispatch] = useContext(StoreContext);

	return [state, dispatch];
};
