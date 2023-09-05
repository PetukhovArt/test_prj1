import {configureStore} from '@reduxjs/toolkit'
import todosReducer from '../store/reducers/todo-reducer'

export const store = configureStore({
	reducer: todosReducer
})