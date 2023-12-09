import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
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
					tabBarIcon: () => {
						return <FontAwesomeIcon icon={faBars} size={20} />;
					},
					tabBarLabel: "All Tasks",
				}}
			/>
		</Tabs>
	);
}
