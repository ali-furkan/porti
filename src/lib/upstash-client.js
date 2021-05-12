import { UPSTASH_URL, UPSTASH_KEY } from "@env";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: UPSTASH_URL,
	headers: {
		Authorization: `Bearer ${UPSTASH_KEY}`,
	},
	cache: new InMemoryCache(),
});

export default client;
