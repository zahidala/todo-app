import { Pressable, Text } from 'react-native'
import { router, Stack } from 'expo-router'
import { TodosProvider } from '../contexts/TodosContext'

export default function Layout() {
	return (
		<TodosProvider>
			<Stack>
				<Stack.Screen name='(tabs)' options={{ headerShown: false }} />

				<Stack.Screen
					name='modal'
					options={{
						headerLeft: () => (
							<Pressable onPress={() => router.back()}>
								<Text>Back</Text>
							</Pressable>
						),

						presentation: 'modal',
					}}
				/>
			</Stack>
		</TodosProvider>
	)
}
