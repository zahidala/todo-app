import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Pressable, StyleSheet, View } from "react-native";
import React from "react";

interface AddButtonProps {
	onPress: () => void;
}

export const AddButton = (props: AddButtonProps) => {
	const { onPress } = props;
	return (
		<View style={{ alignItems: "flex-end", flex: 1, justifyContent: "flex-end", margin: 10, padding: 10 }}>
			<Pressable
				style={({ pressed }) => [
					{
						backgroundColor: "#2277ee",
						opacity: pressed ? 0.5 : 1,
					},
					styles.button,
				]}
				onPress={onPress}
			>
				<FontAwesomeIcon icon={faPlus} size={25} style={{ color: "white" }} />
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		backgroundColor: "blue",
		borderRadius: 30,
		height: 50,
		justifyContent: "center",
		padding: 30,
		width: 50,
	},
});
