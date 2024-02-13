import { createContext, ReactNode, useContext, useState } from 'react'
import todos from '../constants/todos.json'

interface TodosContextType {
	data: typeof todos
	setData: React.Dispatch<React.SetStateAction<typeof todos>>
}

export const TodosContext = createContext({} as TodosContextType)

export function useTodosContext() {
	return useContext(TodosContext)
}

export const TodosProvider = ({ children }: { children: ReactNode }) => {
	const [data, setData] = useState(todos)

	return (
		<TodosContext.Provider value={{ data, setData }}>
			{children}
		</TodosContext.Provider>
	)
}
