import { Text, View } from 'react-native'
import { useTodosContext } from '../contexts/TodosContext'

export default function Modal() {
	const { data } = useTodosContext()

	return (
		<View>
			<Text>Modal</Text>
		</View>
	)
}
