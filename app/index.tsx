import { AddButton } from "../components";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Checkbox from "expo-checkbox";

export default function App() {
	interface Todo {
		id: string;
		title: string;
		description: string;
		isChecked: boolean;
	}

	const [data, setData] = useState<Todo[]>([
		{
			description: "this is my first todo.",
			id: "1",
			isChecked: false,
			title: "First todo",
		},
		{
			description: "this is my second todo.",
			id: "2",
			isChecked: false,
			title: "Second todo",
		},
	]);

	const setCheckBoxValue = (id: string) => {
		setData(prevData => prevData.map(item => (item.id === id ? { ...item, isChecked: !item.isChecked } : item)));
	};

	// const Col: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	// 	<View style={{ flexDirection: "column" }}>{children}</View>
	// );

	const Item = ({ title, description, id, isChecked }: Todo) => (
		<View style={{ alignItems: "center", flexDirection: "row", gap: 20, margin: 10, padding: 10 }}>
			<Checkbox value={isChecked} onValueChange={() => setCheckBoxValue(id)} />
			<View style={{ flexDirection: "column", gap: 10 }}>
				<Text style={{ fontSize: 15, fontWeight: "bold" }}>{title} </Text>
				<Text>{description} </Text>
			</View>
		</View>
	);

	return (
		<View style={styles.container}>
			<Text style={{ alignSelf: "flex-start", fontSize: 32, padding: 20 }}>All Tasks</Text>
			<StatusBar style="auto" />
			<FlatList data={data} keyExtractor={item => item.id} renderItem={({ item }) => <Item {...item} />} />
			<AddButton onPress={() => console.log("works")} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		flex: 1,
	},
});
