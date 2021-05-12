import gql from "graphql-tag";

export const GET_BOOKMARKS = gql`
	query {
		redisHGetAll(key: "bookmarks") {
			field
			value
		}
	}
`;

export const GET_BOOKMARKS_LENGTH = gql`
	query {
		redisHLen(key: "bookmarks")
	}
`;

export const CREATE_BOOKMARK = gql`
	mutation CreateBookmark($field: String!, $payload: String!) {
		redisHSet(key: "bookmarks", field: $field, value: $payload)
	}
`;

export const UPDATE_BOOKMARK = gql`
	mutation UpdateBookmark($field: String!, $payload: String!) {
		redisHDel(key: "bookmarks", fields: [$field])
		redisHSetNX(key: "bookmarks", field: $field, value: $payload)
	}
`;

export const DELETE_BOOKMARK = gql`
	mutation DeleteBookmark($field: String!) {
		redisHDel(key: "bookmarks", fields: [$field])
	}
`;
