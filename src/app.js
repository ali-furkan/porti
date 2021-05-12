import "react-native-gesture-handler";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import Toast from "react-native-toast-message";

import client from "@/lib/upstash-client";
import Navigator from "@/navigator";
import {StoreProvider} from "@/contexts/store/store.context"


const App = () => {
	return (
		<ApolloProvider client={client}>
			<Toast ref={(ref) => Toast.setRef(ref)} />
			<StoreProvider>
				<Navigator />
			</StoreProvider>
		</ApolloProvider>
	);
};

export default App;
