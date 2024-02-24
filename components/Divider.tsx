import { View } from 'react-native'

interface DividerProps {
	width?: number
	orientation?: 'horizontal' | 'vertical'
	color?: string
}

export const Divider = (props: DividerProps) => {
	const { width = 1, orientation = 'horizontal', color = '#DFE4EA' } = props

	return (
		<View
			style={{
				backgroundColor: color,
				height: orientation === 'vertical' ? '100%' : width,
				width: orientation === 'horizontal' ? '100%' : width,
			}}
		/>
	)
}
