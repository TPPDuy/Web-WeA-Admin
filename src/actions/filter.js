import { bill_fetch_data ,reset_bill_pagination, bill_statistic }  from './bill'

export const DEFAULT_TIME_FILTER = 'DEFAULT_TIME_FILTER'
export const DEFINED_TIME_FILTER = 'DEFINED_TIME_FILTER'
export const EMPLOYEE_FILTER = 'EMPLOYEE_FILTER'
export const CRITERIA_SEARCH = 'CRITERIA_SEARCH'
export const RESET_FILTER = 'RESET_FILTER'


export const default_time_filter = (startDate, endDate) => {
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

export const handle_defined_time_filter = (dateFilterOption, type) => dispatch => { //type: 1 - statistic, 0 - bill
    dispatch(reset_filter())
    dispatch(reset_bill_pagination())
    dispatch(defined_time_filter(dateFilterOption))
    if(type === "0") dispatch(bill_fetch_data())
    else dispatch(bill_statistic())
}

export const handle_criteria_search = (criteriaOption, searchValue, startDate, endDate) => dispatch => {
    console.log(criteriaOption)
    dispatch(reset_bill_pagination())
    dispatch(criteria_search(criteriaOption, searchValue, startDate, endDate))
    dispatch(bill_fetch_data())
}

export const handle_default_time_filter = (startDate, endDate) => dispatch => {
    dispatch(default_time_filter(startDate, endDate))
    dispatch(bill_statistic())
}

export const handle_employee_filter = (value) => dispatch => {
    dispatch(employee_filter(value))
    dispatch(bill_statistic())
}