import { bill_fetch_data } from './bill'
import {store} from '../index'
import { reset_bill_pagination }  from './bill'

export const DEFAULT_TIME_FILTER = 'DEFAULT_TIME_FILTER'
export const DEFINED_TIME_FILTER = 'DEFINED_TIME_FILTER'
export const EMPLOYEE_FILTER = 'EMPLOYEE_FILTER'
export const CRITERIA_SEARCH = 'CRITERIA_SEARCH'
export const RESET_FILTER = 'RESET_FILTER'


export const default_time_filter = (startDate, endDate) => {
    //console.log(startDate, endDate)
    return {
        type: DEFAULT_TIME_FILTER,
        startDate,
        endDate
    }
}

export const defined_time_filter = (dateFilterOption) => {    
    return {
        type: DEFINED_TIME_FILTER,
        dateFilterOption
    }
}

export const employee_filter = (employeeFilterValue) => ({
    type: EMPLOYEE_FILTER,
    employeeFilterValue
})

export const criteria_search = (criteriaOption, searchValue, startDate, endDate) => ({
    type: CRITERIA_SEARCH,
    criteriaOption,
    searchValue, 
    startDate, 
    endDate
})

export const reset_filter = () => ({
    type: RESET_FILTER
})

export const handle_defined_time_filter = (dateFilterOption) => dispatch => {
    dispatch(reset_filter())
    dispatch(reset_bill_pagination())
    let pageNo = store.getState().bill.pageNo
    let pageSize = store.getState().bill.pageSize
    dispatch(defined_time_filter(dateFilterOption))
    let filter = store.getState().filter
    dispatch(bill_fetch_data(filter, pageNo, pageSize))
}

export const handle_criteria_search = (criteriaOption, searchValue, startDate, endDate) => dispatch => {
    console.log(criteriaOption)
    dispatch(reset_bill_pagination())
    let pageNo = store.getState().bill.pageNo
    let pageSize = store.getState().bill.pageSize
    dispatch(criteria_search(criteriaOption, searchValue, startDate, endDate))
    let filter = store.getState().filter
    dispatch(bill_fetch_data(filter, pageNo, pageSize))
}