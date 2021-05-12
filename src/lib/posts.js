import { useState, useEffect } from "react";
import client from "@/lib/supabase";

/**
 * @typedef {{
 * 	id: string;
 *  slug: string;
 *  title: string;
 *  subtitle: string;
 *  description: string;
 *  image: string;
 *  keywords: string[];
 *  content: string
 * }} post
 */

export const getPostSlugs = async () => {
	const { data, error } = await client.from("posts").select("slug");

	return { data, error };
};

export const getPost = async (slug) => {
	const { data, error } = await client.from("posts").select().eq("slug", slug);

	if (error)
		return {
			error,
		};

	return { data: data[0] };
};

export const getPostList = async (size = 12) => {
	const { data, error } = await client.from("posts").select("id, createdAt");

	if (error)
		return {
			error,
		};

	const selectedPosts = data
		.sort(
			(a, b) =>
				new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
		)
		.reverse()
		.map((post) => post.id)
		.slice(0, size);

	const res = await client.from("posts").select().in("id", selectedPosts);

	return res;
};

/**
 *
 * @param {post} payload
 */
export const updatePost = async (payload) => {
	const { data, error } = await client
		.from("posts")
		.update(payload)
		.match({ id: payload.id });

	return { data, error };
};

export const createPost = async (payload) => {
	const { data, error } = await client.from("posts").insert(payload);

	return { data, error };
};

export const deletePost = async (id) => {
	const { data, error } = await client.from("posts").delete().match({ id });

	return { data, error };
};

export const usePost = (init, adapter) => {
	const [state, setState] = useState({
		error: null,
		loading: true,
		data: null,
	});

	const handle = async () => {
		const { error, data } = await adapter(init);

		setState({ error, loading: false, data });
	};

	useEffect(() => {
		handle();
	}, [init, adapter]);

	return state;
};
