import {
    DEFAULT_TIME_FILTER,
    DEFINED_TIME_FILTER,
    EMPLOYEE_FILTER
} from '../actions/filters'
const initFilter = () => ({    
    // DEFAULT_TIME_FILTER (DATE PICKER)
    startDate: "",
    endDate: "",
    //DEFINED_TIME_FILTER 
    dateFilterOption: "0",
    // EMPLOYEE_FILTER 
    employeeFilterValue: "" 
})
const filter = (state = initFilter(), action) => {
    switch (action.type){
        case DEFAULT_TIME_FILTER: 
            return {
                ...state,
                startDate: action.startDate,
                endDate: action.endDate
            }
        case DEFINED_TIME_FILTER:
            return {
                ...state,
                dateFilterOption: action.dateFilterOption
            }
        case EMPLOYEE_FILTER:
            return {
                ...state,
                employeeFilterValue : action.employeeFilterValue
            }
        default: 
            return state
    }
}

export default filter