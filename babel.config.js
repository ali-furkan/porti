module.exports = {
	presets: ["module:metro-react-native-babel-preset"],
	plugins: [
		"module:react-native-dotenv",
		[
			"module-resolver",
			{
				root: ["./"],
				extensions: [".js"],
				alias: {
					"@/assets": "./assets",
					"@": "./src",
				},
			},
		],
	],
};
