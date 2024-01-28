import { Tabs } from 'expo-router'

export default function Layout() {
	return (
		<Tabs>
			<Tabs.Screen
				name='index'
				options={{
					headerStyle: { backgroundColor: 'blue' },
					headerTitle: 'All Todos',
					headerTitleStyle: { color: 'white' },
					tabBarLabel: 'All Todos',
				}}
			/>
		</Tabs>
	)
}
