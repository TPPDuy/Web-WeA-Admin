import {
    DEFAULT_TIME_FILTER,
    DEFINED_TIME_FILTER,
    EMPLOYEE_FILTER,
    CRITERIA_SEARCH,
    RESET_FILTER
} from '../actions/filter'
const initFilter = () => ({
    // DEFAULT_TIME_FILTER (DATE PICKER)
    startDate: undefined,
    endDate: undefined,
    //DEFINED_TIME_FILTER 
    dateFilterOption: "0",
    // EMPLOYEE_FILTER 
    employeeFilterValue: undefined,
    //CRITERIA SEARCH
    billIDValue: undefined,
    totalValue: undefined
})
const filter = (state = initFilter(), action) => {
    switch (action.type) {
        case DEFAULT_TIME_FILTER:
            if(typeof action.startDate !== 'undefined' && action.startDate !== null){
                let startDate = new Date(action.startDate)
                startDate.setHours(0,0,0,0)
                let endDate = new Date(action.endDate)
                endDate.setHours(23,59,59,999)
                return {
                    ...state,
                    startDate: parseInt(startDate.getTime()/1000),
                    endDate: parseInt(endDate.getTime()/1000)
                }
            }else{
                return {
                    ...state,
                    startDate: undefined,
                    endDate: undefined
                }
            }
            
        case DEFINED_TIME_FILTER: {
            let startDate, endDate, dateFilterOption = action.dateFilterOption            
            if (dateFilterOption !== "0") {
                endDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1)
                let d = 1
                switch (dateFilterOption) {
                    case "1": d += 0; break;
                    case "2": d += 1; break;
                    case "3": d += 3; break;
                    case "4": d += 7; break;
                    case "5": d += 14; break;
                    case "6": d += 30; break;
                    case "7": d += 60; break;
                    default: break;
                }
                startDate = new Date(endDate)
                startDate.setDate(endDate.getDate() - d)
                return {
                    ...state,
                    dateFilterOption,
                    startDate: startDate.getTime() / 1000,
                    endDate: endDate.getTime() / 1000
                }
            }
            return {
                ...state,
                dateFilterOption,
                startDate: undefined,
                endDate: undefined
            }
        }
        case EMPLOYEE_FILTER:
            var employeeFilterValue = action.employeeFilterValue
            return {
                ...state,
                employeeFilterValue
            }
        case CRITERIA_SEARCH:
            var billIDValue, totalValue , employeeFilterValue 
            switch(action.criteriaOption){
                case "1" : billIDValue = action.searchValue; break;
                case "3" : employeeFilterValue = action.searchValue; break;
                default: totalValue = parseInt(action.searchValue); break;
            }
            return {
                ...state,
                billIDValue,
                employeeFilterValue,
                totalValue,
                startDate: action.startDate,
                endDate: action.endDate
            }
        case RESET_FILTER:
            return initFilter()
        default:
            return state
    }
}

export default filter