import { api_2 } from '../api/api'
export const EMPLOYEE_FETCH_DATA_BEGIN = 'EMPLOYEE_FETCH_DATA_BEGIN'
export const EMPLOYEE_FETCH_DATA_SUCCESS = 'EMPLOYEE_FETCH_DATA_SUCCESS'
export const EMPLOYEE_FETCH_DATA_FAILURE = 'EMPLOYEE_FETCH_DATA_FAILURE'
export const USER_TOTAL_NUMBER = 'USER_TOTAL_NUMBER'

export const employee_fetch_data_begin = () => ({
    type: EMPLOYEE_FETCH_DATA_BEGIN
})
export const employee_fetch_data_success = (data) => ({
    type: EMPLOYEE_FETCH_DATA_SUCCESS,
    data
})
export const employee_fetch_data_failure = (error) => ({
    type: EMPLOYEE_FETCH_DATA_FAILURE,
    error
})
export const user_total_number = (quantity) => ({
    type: USER_TOTAL_NUMBER,
    quantity
})

export const get_user_total_number = () => dispatch => {
    return api_2.get('/users/quantity', {})
        .then(res => 
            dispatch(user_total_number(res.data.data)
        )
    )
}

export const employee_fetch_data = () => dispatch => {
    dispatch(employee_fetch_data_begin())
    return api_2.get('/users/employee', {})
        .then(res => 
            dispatch(employee_fetch_data_success(res.data.data))
        )
        .catch(err => 
            dispatch(employee_fetch_data_failure(err))
        )    
}