import {
    EMPLOYEE_FETCH_DATA_BEGIN,
    EMPLOYEE_FETCH_DATA_SUCCESS,
    EMPLOYEE_FETCH_DATA_FAILURE,
    USER_TOTAL_NUMBER
} from '../actions/user'
import { EMPLOYEE_FILTER } from '../actions/filter'

const initUsers = () => ({
    employees: {
        data: [],
        loading: true,
        error: null
    },
    quantity: 0,
})

const user = (state = initUsers(), action) => {
    switch(action.type){
        case EMPLOYEE_FETCH_DATA_BEGIN:
            return{
                ...state,
                employees:{
                    ...state.employees,
                    loading: true,
                    error: null
                }
            }
        case EMPLOYEE_FETCH_DATA_SUCCESS:
            return {
                ...state,
                employees:{
                    ...state.employees,
                    loading: false,
                    error: null,
                    data: action.data
                }
            }
        case EMPLOYEE_FETCH_DATA_FAILURE:
            return {
                ...state,
                employees:{
                    ...state.employees,
                    loading: false,
                    error: action.error,
                    data: []
                }
            }
        case USER_TOTAL_NUMBER:
            return {
                ...state,
                quantity: action.quantity
            }
        default: return state
    }
}

export default user