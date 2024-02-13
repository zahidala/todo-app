import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StyleSheet, Text, View } from 'react-native'
import { useMemo } from 'react'
import { useTodosContext } from '../../contexts/TodosContext'
import Checkbox from 'expo-checkbox'

export default function Completed() {
	const { data } = useTodosContext()

	const filteredData = useMemo(
		() => data.filter(({ completed }) => completed),
		[data],
	)

	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<View style={styles.todosContainer}>
					{filteredData.map(todo => (
						<View key={todo.id} style={styles.todoContainer}>
							<Checkbox color={'gray'} value={todo.completed} />
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
