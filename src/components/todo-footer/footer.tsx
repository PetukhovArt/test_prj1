import {Button} from 'antd';
import React from 'react'
import {useDispatch} from 'react-redux'
import {setAllActive} from '../../store/reducers/todo-reducer';
import s from './footer.module.scss'

type FooterPropsType = {
	activeItems: number,
	doneItems: number,
	setOnlyActive: () => void
	setOnlyFinished: () => void
	setAll: () => void
}

export const Footer = ({activeItems, doneItems, setOnlyActive, setOnlyFinished, setAll}: FooterPropsType) => {
	const dispatch = useDispatch()
	return (
		<div className={s.container}>
			<span>{activeItems} items left</span>
			<div className={s.buttons}>
				<Button onClick={setAll}>All</Button>
				<Button onClick={setOnlyActive}>Active</Button>
				<Button onClick={setOnlyFinished}>Completed</Button>
			</div>
			{doneItems ? <Button onClick={() => dispatch(setAllActive())}>Clear completed</Button> : null}
		</div>
	)
}

