import '@testing-library/jest-dom/extend-expect'
import todosReducer from '../store/reducers/todo-reducer'
import {RootActionsType, TaskType, TodoActionTypes, TodoListType} from '../types';

const initialState: TodoListType = {
	todos: [] as TaskType[]
}

describe('reducer tests', () => {
	it('should return the initial state', () => {
		expect(todosReducer(initialState, {} as RootActionsType)).toEqual({
			todos: [] as TaskType[]
		})
	})
	it('should delete a todo', () => {
		expect(todosReducer(
			{todos: [{id: 'test', text: 'test', isActive: true}]} as TodoListType,
			{
				type: TodoActionTypes.DELETE_TASK,
				payload: 'test'
			}
		)).toEqual({
			todos: []
		});
	});
	it('should add a todo', () => {
		const prevState: TodoListType = {
			todos: [{id: 'test', text: 'test', isActive: true}],
		};

		const newState = todosReducer(prevState, {
			type: TodoActionTypes.ADD_TASK,
			payload: 'new',
		});

		expect(newState.todos.length).toBe(prevState.todos.length + 1);
	});
	it('should toggle isActive field', () => {
		expect(todosReducer({todos: [{id: 'test', text: 'test', isActive: true}]} as TodoListType,
			{
				type: TodoActionTypes.TOGGLE_STATE,
				payload: 'test'
			})).toEqual({
			todos: [{
				id: 'test', text: 'test', isActive: false
			}]
		})
	})
})