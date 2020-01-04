import { combineReducers } from 'redux'
import filter from './filter'
import bill from './bill'
import user from './user'
import dish from './dish'
import category from './category'
import department from './department'
import table from './table'
export default combineReducers({
    filter,
    bill,
    user,
    dish,
    category,
    department,
    table
})