import { Stack } from 'expo-router'
import { TodosProvider } from '@/contexts/TodosContext'
import GluestackProvider from '@/providers/GlueStackProvider'

export default function Layout() {
	return (
		<GluestackProvider>
			<TodosProvider>
				<Stack>
					<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
				</Stack>
			</TodosProvider>
		</GluestackProvider>
	)
}
