import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StyleSheet, Text, View } from 'react-native'
import Checkbox from 'expo-checkbox'
import todos from '../../constants/todos.json'

export default function Completed() {
	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<View style={styles.todosContainer}>
					{todos
						.filter(({ completed }) => completed)
						.map(todo => (
							<View key={todo.id} style={styles.todoContainer}>
								<Checkbox value={todo.completed} />
								<Text style={styles.text}>{todo.title}</Text>
							</View>
						))}
				</View>
			</View>
		</SafeAreaProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1,
		gap: 20,
		padding: 30,
	},
	text: {
		textDecorationLine: 'line-through',
	},
	todoContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		gap: 10,
	},
	todosContainer: {
		gap: 10,
	},
})
