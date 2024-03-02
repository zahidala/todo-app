import {
	Box,
	Divider,
	Input,
	InputField,
	Toast,
	ToastTitle,
	useToast,
} from '@gluestack-ui/themed'
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { useTodosContext } from '@/contexts/TodosContext'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export const AddNewTodoModal = () => {
	const [open, setOpen] = useState(false)
	const [text, setText] = useState('')

	const { data, setData } = useTodosContext()

	const toast = useToast()

	const handleAddNewTodo = (text: string) => {
		const newTodo: typeof data[0] = {
			completed: false,
			id: (Math.random() * 1000).toString(),
			title: text,
		}
		setData([...data, newTodo])
	}

	return (
		<View style={{ flex: 1 }}>
			<View style={styles.buttonContainer}>
				<Pressable
					style={({ pressed }) => [
						{ backgroundColor: pressed ? '#00339A' : 'blue' },
						styles.button,
					]}
					onPress={() => setOpen(true)}
				>
					<FontAwesome color={'white'} name='plus' size={15} />
				</Pressable>
			</View>
			<Modal
				animationType='slide'
				presentationStyle='pageSheet'
				visible={open}
				onRequestClose={() => setOpen(false)}
			>
				<View style={{ flex: 1 }}>
					<View style={styles.header}>
						<Pressable onPress={() => setOpen(false)}>
							{({ pressed }) => (
								<Text
									style={{
										color: pressed ? 'lightblue' : 'blue',
										fontWeight: '500',
									}}
								>
									Back
								</Text>
							)}
						</Pressable>

						<Text style={{ fontSize: 16, fontWeight: 'bold' }}>New Todo</Text>

						<Pressable
							onPress={() => {
								handleAddNewTodo(text)
								setOpen(false)
								toast.show({
									placement: 'top',
									render: ({ id }) => {
										const toastId = `toast-${id}`
										return (
											<Toast action='info' nativeID={toastId} variant='accent'>
												<ToastTitle>Todo added!</ToastTitle>
											</Toast>
										)
									},
								})
							}}
						>
							{({ pressed }) => (
								<Text
									style={{
										color: pressed ? 'lightblue' : 'blue',
										fontWeight: 'bold',
									}}
								>
									Add
								</Text>
							)}
						</Pressable>
					</View>

					<Divider />

					<Box p={'$3'}>
						<Input variant='outline'>
							<InputField
								placeholder='Title'
								type='text'
								onChangeText={text => setText(text)}
							/>
						</Input>
					</Box>
				</View>
			</Modal>
		</View>
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
		alignSelf: 'flex-end',
		flex: 1,
		justifyContent: 'flex-end',
	},
	header: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 20,
	},
})
