import {v4 as uuid} from 'uuid';
import {RootActionsType, TaskType, TodoActionTypes, TodoListType} from '../../types';

const initialState: TodoListType = {
	todos: [] as Array<TaskType>
}

export default function todosReducer(state = initialState, action: RootActionsType) {
	switch (action.type) {
		case TodoActionTypes.ADD_TASK:
			return {
				todos: [
					...state.todos,
					{
						id: uuid(),
						text: action.payload,
						isActive: true
					}
				]
			}
		case TodoActionTypes.DELETE_TASK:
			return {
				todos: [...state.todos.filter(t => t.id !== action.payload)]
			}
		case TodoActionTypes.TOGGLE_STATE:
			return {
				todos: state.todos.map((todo: TaskType) => todo.id === action.payload ? {...todo, isActive: !todo.isActive} : todo)
			}
		case TodoActionTypes.SET_ALL_ACTIVE:
			return {
				todos: state.todos.map((todo: TaskType) => {
					return {
						...todo,
						isActive: true
					}
				})
			}
		default:
			return state
	}
}

export const setTodo = (todoText: string) => ({type: TodoActionTypes.ADD_TASK, payload: todoText})
export const toggleTask = (id: string) => ({type: TodoActionTypes.TOGGLE_STATE, payload: id})
export const deleteTask = (id: string) => ({type: TodoActionTypes.DELETE_TASK, payload: id})
export const setAllActive = () => ({type: TodoActionTypes.SET_ALL_ACTIVE})