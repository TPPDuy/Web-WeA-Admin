import { combineReducers } from 'redux'
import filter from './filter'
import bill from './bill'
import user from './user'
export default combineReducers({
    filter,
    bill,
    user
})