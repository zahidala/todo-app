import { AddNewTodoModal } from '@/components/AddNewTodoModal'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react'
import { useTodosContext } from '@/contexts/TodosContext'
import Checkbox from 'expo-checkbox'

export default function All() {
	const { data, setData } = useTodosContext()

	const [editingKey, setEditingKey] = useState('')

	const handleChange = (
		todo: typeof data[0],
		text?: string,
		value?: boolean,
	) => {
		const newTodos = data.map(newTodo => {
			if (todo.id === newTodo.id) {
				return {
					completed: value !== undefined ? value : todo.completed,
					id: todo.id,
					title: text ? text : todo.title,
				}
			}
			return newTodo
		})

		setData(newTodos)
	}

	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<StatusBar style='auto' />

				<View style={styles.todosContainer}>
					{data.map(todo => (
						<View key={todo.id} style={styles.todoContainer}>
							<Checkbox
								value={todo.completed}
								onValueChange={value => handleChange(todo, undefined, value)}
							/>

							{editingKey === todo.id ? (
								<TextInput
									style={{
										borderColor: '#ccc',
										borderRadius: 5,
										borderWidth: 1,
										flex: 1,
										padding: 3,
									}}
									value={todo.title}
									onChangeText={text => handleChange(todo, text)}
									onSubmitEditing={() => setEditingKey('')}
								/>
							) : (
								<Text
									style={{ flex: 1 }}
									onPress={() => setEditingKey(todo.id)}
								>
									{todo.title}
								</Text>
							)}
						</View>
					))}
				</View>

				<AddNewTodoModal />
			</View>
		</SafeAreaProvider>
	)
}

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		borderRadius: 50,
		height: 50,
		justifyContent: 'center',
		width: 50,
	},
	buttonContainer: {
		alignItems: 'flex-end',
		flex: 1,
		justifyContent: 'flex-end',
	},
	container: {
		backgroundColor: '#fff',
		flex: 1,
		gap: 20,
		padding: 30,
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
