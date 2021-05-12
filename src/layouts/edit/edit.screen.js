import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { colors } from "@/styles";

import styles from "./edit.style";

function EditLayout({ children, title, onSave }) {
	const navigate = useNavigation();

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={styles.row}>
					<TouchableOpacity
						accessibilityRole="button"
						onPress={() => navigate.goBack()}
					>
						<Ionicons name="arrow-back" size={24} color={colors.primary[700]} />
					</TouchableOpacity>
					{title && <Text style={styles.title}> {title} </Text>}
				</View>
				<TouchableOpacity
					accessibilityRole="button"
					style={styles.saveButton}
					onPress={onSave}
				>
					<Ionicons
						name="save-outline"
						size={24}
						color={colors.secondary[500]}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.body}>{children}</View>
		</View>
	);
}

export default EditLayout;
