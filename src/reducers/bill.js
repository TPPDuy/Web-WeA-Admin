import {
    BILL_SORT,
    BILL_FETCH_DATA_BEGIN,
    BILL_FETCH_DATA_SUCCESS,
    BILL_FETCH_DATA_FAILURE,
    BILL_PAGINATION,
    RESET_BILL_PAGINATION,
    BILL_STATISTIC_BEGIN,
    BILL_STATISTIC_SUCCESS,
    BILL_STATISTIC_FAILURE
 } from '../actions/bill'

const initBills = () => ({
    sortOrder: 0,
    bills: [],
    total: 0,
    quantity: 0,
    pageNo: 1,
    pageSize: 6,
    loading: true,
    error: null,
    statistic: {
        loading: true,
        error: null,
        quantity: 0,
        total: 0
    }
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
                error: null
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
        case BILL_STATISTIC_BEGIN: 
            return{
                ...state,
                statistic: {
                    ...state.statistic,
                    loading: true,
                    error: null
                }
            }
        case BILL_STATISTIC_SUCCESS:
            return{
                ...state,
                statistic: {
                    ...state.statistic,
                    loading: false,
                    quantity: action.statistic.quantity,
                    total: action.statistic.total
                }
            }
        case BILL_STATISTIC_FAILURE:
            return {
                ...state,
                statistic: {
                    ...state.statistic,
                    loading: false,
                    error: action.error,
                    quantity: 0,
                    total: 0
                }
            }
        default: 
            return state
    }
}

export default bill