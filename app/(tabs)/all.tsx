import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { router } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { TodosContext } from '../../contexts/TodosContext'
import { useContext, useState } from 'react'
import Checkbox from 'expo-checkbox'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function All() {
	const { data, setData } = useContext(TodosContext)

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

				<View style={styles.buttonContainer}>
					<Pressable
						style={({ pressed }) => [
							{ backgroundColor: pressed ? '#00339A' : 'blue' },
							styles.button,
						]}
						onPress={() => router.push('/modal')}
					>
						<FontAwesome color={'white'} name='plus' size={15} />
					</Pressable>
				</View>
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
