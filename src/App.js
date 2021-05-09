import "react-native-gesture-handler";
import React from "react";
import { ApolloProvider } from "@apollo/client";

import client from "@/lib/upstash-client";
import Navigator from "@/Navigator"

const App = () => {
	return (
		<ApolloProvider client={client}>
			<Navigator />
		</ApolloProvider>
	);
};

export default App;
