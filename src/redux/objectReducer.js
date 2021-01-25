import {CREATE_OBJECT, DELETE_OBJECT, EDIT_OBJECT} from './types'

const initialState = {
    objects: []
}

export const objectReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_OBJECT:
            return {...state, objects:[action.payload, ...state.objects]}
        case EDIT_OBJECT:
            let objectsArr = [...state.objects]
            objectsArr[action.payload.index] = action.payload.object
            return {...state, objects: [...objectsArr]}
        case DELETE_OBJECT:
            let objectsArr1 = [...state.objects]
            objectsArr1.splice(action.payload, 1)
            return {...state, objects: [...objectsArr1]}
        default:
            return state
    }
}