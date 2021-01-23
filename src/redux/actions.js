import { CREATE_OBJECT, EDIT_FORM, EMPTY_FORM, NEW_FORM, SELECT_OBJECT, DESELECT_OBJECT, EDIT_OBJECT, DELETE_OBJECT } from "./types";

export function createObject(object) {
    return {
        type: CREATE_OBJECT,
        payload: object
    }
}

export function editObject(object, index) {
    return {
        type: EDIT_OBJECT,
        payload: {object, index}
    }
}

export function deleteObject(index) {
    return {
        type: DELETE_OBJECT,
        payload: index
    }
}

export function selectObject() {
    return {
        type: SELECT_OBJECT
    }
}

export function deselectObject() {
    return {
        type: DESELECT_OBJECT
    }
}

export function newForm() {
    return {
        type: NEW_FORM
    }
}

export function editForm(index) {
    return {
        type: EDIT_FORM,
        payload: index
    }
}

export function emptyForm() {
    return {
        type: EMPTY_FORM
    }
}