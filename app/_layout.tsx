import { Pressable, Text } from 'react-native'
import { router, Stack } from 'expo-router'

export default function Layout() {
	return (
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
	)
}
