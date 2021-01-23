import React from 'react'
import { useDispatch } from 'react-redux'
import { newForm } from '../redux/actions'
import '../style.css'


export default () => {
const dispatch = useDispatch()

    return (
        <div className="BtnContainter">
            <button className="Btn" onClick={() => dispatch(newForm())}>ДОБАВИТЬ ОБЪЕКТЫ</button>
        </div>
    )
}