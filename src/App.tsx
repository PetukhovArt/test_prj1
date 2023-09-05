import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import s from './app.module.scss';
import {Footer} from './components/todo-footer';
import {TodoInput} from './components/todo-input';
import {TodoList} from './components/todo-list';
import {TaskType, TodoListType} from './types';

const App = () => {
	const [filter, setFilter] = useState('')
	const tasks = useSelector((state: TodoListType) => state.todos)
	const tasksLength = tasks.length
	const activeItemsLength = tasks.filter((todo: TaskType) => todo.isActive).length
	const doneItemsLength = tasks.filter((todo: TaskType) => !todo.isActive).length

	const filteredTasks = tasks.filter((todo: TaskType) => {
		if (filter === 'active') {
			return todo.isActive
		} else if (filter === 'finished') {
			return !todo.isActive
		}
		return tasks
	})

	return (
		<>
			<header className={s.title}>Your tasks</header>
			<div className={s.content}>
				<TodoInput/>
				<TodoList filteredTasks={filteredTasks}/>
				<Footer
					doneItems={doneItemsLength}
					activeItems={activeItemsLength}
					setOnlyActive={() => setFilter('active')}
					setOnlyFinished={() => setFilter('finished')}
					setAll={() => setFilter('')}/>
			</div>
		</>
	);
}
export default App

