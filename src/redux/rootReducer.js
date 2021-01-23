import {combineReducers} from 'redux'
import { formReducer } from './formReducer'
import { objectReducer } from './objectReducer'

export const rootReducer = combineReducers({
    objects: objectReducer,
    form: formReducer,
})