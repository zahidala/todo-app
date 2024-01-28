import { Tabs } from 'expo-router'
import { TodosProvider } from '../../contexts/TodosContext'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function Layout() {
	return (
		<TodosProvider>
			<Tabs>
				<Tabs.Screen
					name='all'
					options={{
						headerStyle: { backgroundColor: 'blue' },
						headerTitle: 'All Todos',
						headerTitleStyle: { color: 'white' },
						tabBarIcon: () => <FontAwesome name='bars' />,
						tabBarLabel: 'All Todos',
					}}
				/>

				<Tabs.Screen
					name='completed'
					options={{
						headerStyle: { backgroundColor: 'blue' },
						headerTitle: 'Completed',
						headerTitleStyle: { color: 'white' },
						tabBarIcon: () => <FontAwesome name='check' />,
						tabBarLabel: 'Completed',
					}}
				/>
			</Tabs>
		</TodosProvider>
	)
}
