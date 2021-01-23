import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editForm } from '../redux/actions'
import '../style.css'

export default ({view, index}) => {
    const dispatch = useDispatch()
    const [hov, setHov] = useState(false)
    let className = (index === useSelector(state => state.form.index)) ? ' ViewSelect' : ''
    let ObjectViewHov = hov ? ' ObjectViewHov' : ''
    const hover = () => setHov(!hov)
    if (view.objNumber) {
        index = ("new" === useSelector(state => state.form.form)) ? index-1 : index
        return (
            <div 
            className={"ObjectView" + className + ObjectViewHov} 
            onClick={() => dispatch(editForm(index))} 
            onMouseOver={hover}
            onMouseOut={hover}>
                {view.objName}
            </div>
        )
    }
    else {
        return (
            <div 
            className={"ObjectView ViewSelect" + ObjectViewHov}
            onMouseOver={hover}
            onMouseOut={hover}>
                {view.objName}
            </div>
        )
    }
}