import { Tabs } from "expo-router/tabs";

export default function Layout() {
	return (
		<Tabs>
			<Tabs.Screen
				name="index"
				options={{
					headerStyle: {
						backgroundColor: "blue",
					},
					headerTintColor: "#fff",
					headerTitle: "All Tasks",
					headerTitleStyle: {
						fontWeight: "bold",
					},
					href: "/",
					tabBarLabel: "All Tasks",
				}}
			/>
		</Tabs>
	);
}
