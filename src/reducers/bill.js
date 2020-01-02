import {
    BILL_SORT,
    BILL_FETCH_DATA_BEGIN,
    BILL_FETCH_DATA_SUCCESS,
    BILL_FETCH_DATA_FAILURE,
    BILL_OVERVIEW_GET_INFO,
    BILL_PAGINATION,
    RESET_BILL_PAGINATION
} from '../actions/bill'

const initBills = () => ({
    sortOrder: 0,
    bills: [],
    total: 0,
    quantity: 0,
    pageNo: 1,
    pageSize: 6,
    loading: true,
    error: null
})

const bill = (state = initBills(), action) => {
    switch(action.type){
        case BILL_SORT: 
            console.log(state.sortOrder === 0 ? -1 : state.sortOrder * -1)
            return{
                ...state,
                sortOrder: state.sortOrder === 0 ? -1 : state.sortOrder * -1
        }
        case BILL_FETCH_DATA_BEGIN:           
            return {
                ...state,
                loading: true,
                error: true
            }
        case BILL_FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                bills: action.payload
            }
        case BILL_FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                bills: []
            }
        case BILL_OVERVIEW_GET_INFO:
            return {
                ...state,
                quantity: 400,
                total: 250000000
            }
        case BILL_PAGINATION:
            return {
                ...state,
                pageNo: action.pageNo
            }
        case RESET_BILL_PAGINATION: 
        return {
            ...state,
            pageNo: 1,
            pageSize: 6       
        }
        default: 
            return state
    }
}

export default bill