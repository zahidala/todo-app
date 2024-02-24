import { Stack } from 'expo-router'
import { TodosProvider } from '../contexts/TodosContext'

export default function Layout() {
	return (
		<TodosProvider>
			<Stack>
				<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
			</Stack>
		</TodosProvider>
	)
}
