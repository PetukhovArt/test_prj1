import {DeleteTwoTone} from '@ant-design/icons';
import {Button, Checkbox} from 'antd';
import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteTask, toggleTask} from '../../store/reducers/todo-reducer'
import s from './todo-item.module.scss'

type TodoItemPropsType = {
	id: string,
	text?: string,
	isActive?: boolean
	cutted?: boolean
}

export const TodoItem = ({id, text, isActive, cutted = false}: TodoItemPropsType) => {
	const dispatch = useDispatch()
	const onClickHandler = () => {
		dispatch(toggleTask(id));
	}
	const onClickDeleteTask = () => {
		dispatch(deleteTask(id));

	}
	return (
		<div className={s.container}>
			<div className={s.item} onClick={onClickHandler}>
				{!cutted && <Checkbox
            className={s.checkbox}
            checked={!isActive}
        />}
				<div className={!isActive ? s.text : s.base}>
					{text}
				</div>
			</div>
			{!cutted && <Button type={'text'} className={s.delete} onClick={onClickDeleteTask}><DeleteTwoTone/></Button>}
		</div>
	)
}

