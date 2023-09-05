import {Input} from 'antd';
import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import {useDispatch} from 'react-redux';
import {setTodo} from '../../store/reducers/todo-reducer';
import s from './todo-input.module.scss'


export const TodoInput = () => {
	const dispatch = useDispatch()
	const [value, setValue] = useState('');

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	}
	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		const trimmedValue = e.currentTarget.value
		if (e.key === 'Enter' && trimmedValue !== '') {
			dispatch(setTodo(value));
			setValue('');
		}
	}

	return (
		<Input
			className={s.input}
			placeholder="What needs to be done?"
			value={value}
			onChange={(e) => onChangeHandler(e)}
			onKeyDown={(e) => onKeyPressHandler(e)}
		/>
	)
}

