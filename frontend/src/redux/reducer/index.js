import { combineReducers } from 'redux';
import { contactReducer } from './ContactReducer';


export const reducer = combineReducers({
    contact: contactReducer
})