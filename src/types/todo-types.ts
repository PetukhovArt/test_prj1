export enum TodoActionTypes {
	ADD_TASK = 'ADD_TASK',
	TOGGLE_STATE = 'TOGGLE_STATE',
	DELETE_TASK = 'DELETE_TASK',
	SET_ALL_ACTIVE = 'SET_ALL_ACTIVE'
}

export type TaskType = {
	id: string,
	text: string,
	isActive: boolean
}
export type DeleteTaskActionType = {
	type: TodoActionTypes.DELETE_TASK,
	payload: TaskType['id']
}
export type AddTaskActionType = {
	type: TodoActionTypes.ADD_TASK,
	payload: TaskType['text']
}

export type ToggleStateActionType = {
	type: TodoActionTypes.TOGGLE_STATE,
	payload: TaskType['id']
}

interface SetAllActiveActionType {
	type: TodoActionTypes.SET_ALL_ACTIVE,
}

export type TodoListType = {
	todos: TaskType[]
}

export type RootActionsType = AddTaskActionType | ToggleStateActionType | SetAllActiveActionType | DeleteTaskActionType