import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import Checkbox from 'expo-checkbox'
import todos from '../constants/todos.json'

export default function App() {
	const [data, setData] = useState(todos)
	const [editingKey, setEditingKey] = useState('')

	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<StatusBar style='auto' />

				<View style={styles.checkboxContainer}>
					{data.map(todo => (
						<View key={todo.id} style={styles.checkbox}>
							<Checkbox
								value={todo.completed}
								onValueChange={value => {
									const newTodos = data.map(newTodo => {
										if (todo.id === newTodo.id) {
											return { ...todo, completed: value }
										}
										return newTodo
									})

									setData(newTodos)
								}}
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
									onChangeText={text => {
										const newTodos = data.map(newTodo => {
											if (todo.id === newTodo.id) {
												return { ...todo, title: text }
											}
											return newTodo
										})

										setData(newTodos)
									}}
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
					>
						<FontAwesomeIcon color='white' icon={faPlus} />
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
	checkbox: {
		alignItems: 'center',
		flexDirection: 'row',
		gap: 10,
	},
	checkboxContainer: {
		gap: 10,
	},
	container: {
		backgroundColor: '#fff',
		flex: 1,
		gap: 20,
		padding: 30,
	},
})
