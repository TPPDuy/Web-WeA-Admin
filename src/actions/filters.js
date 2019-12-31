export const DEFAULT_TIME_FILTER = 'DEFAULT_TIME_FILTER'
export const DEFINED_TIME_FILTER = 'DEFINED_TIME_FILTER'
export const EMPLOYEE_FILTER = 'EMPLOYEE_FILTER'

export const default_time_filter = (startDate, endDate) => ({
    type: DEFAULT_TIME_FILTER,
    startDate,
    endDate
})

export const defined_time_filter = (dateFilterOption, dateFilterValue) => dispatch => {
    let startDate = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate()) // Date without timestamp
    let endDate = dateFilterValue
    //dispatch(default_time_filter(startDate, endDate))
    console.log('here')
    return {
        type: DEFINED_TIME_FILTER,
        dateFilterOption
    }
}
export const employee_filter = (employeeFilterValue) => ({
    type: EMPLOYEE_FILTER,
    employeeFilterValue
})