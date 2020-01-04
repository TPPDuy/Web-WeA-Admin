import { combineReducers } from 'redux'
import filter from './filter'
import bill from './bill'
import user from './user'
import dish from './dish'
export default combineReducers({
    filter,
    bill,
    user,
    dish
})