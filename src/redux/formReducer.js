import { EDIT_FORM, EMPTY_FORM, NEW_FORM } from "./types"

const initialState = {
    form: "empty",
    index: -1
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_FORM:
            return {...state, form : "new", index: -1}
        case EDIT_FORM:
            return {...state, form: "edit", index: action.payload}
        case EMPTY_FORM:
            return {...state, form: "empty", index: -1}
        default:
            return state
    }
}