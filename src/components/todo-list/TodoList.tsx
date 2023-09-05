import React from 'react'
import {v4 as uuid} from 'uuid';
import {TaskType} from '../../types/todo-types';
import {TodoItem} from '../todo-item/todo-item';

type TodoListPropsType = {
	filteredTasks: TaskType[]
}
export const TodoList = ({filteredTasks}: TodoListPropsType) => {
	return (
		<div>
			{filteredTasks.length ? filteredTasks.map((todo: TaskType) => {
					return (
						<TodoItem
							key={todo.id}
							id={todo.id}
							text={todo.text}
							isActive={todo.isActive}
						/>
					);
				})
				: <TodoItem text={'Input some task and press enter'} cutted id={uuid()}/>
			}
		</div>
	);
}

