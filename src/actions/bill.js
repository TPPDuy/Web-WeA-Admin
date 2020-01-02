import { api_1, api_2 } from '../api/api'
import { store } from '../index'

export const BILL_SORT = 'BILL_SORT'
export const BILL_FETCH_DATA_BEGIN = 'BILL_FETCH_DATA_BEGIN'
export const BILL_FETCH_DATA_SUCCESS = 'BILL_FETCH_DATA_SUCCESS'
export const BILL_FETCH_DATA_FAILURE = 'BILL_FETCH_DATA_FAILURE'
export const BILL_OVERVIEW_GET_INFO = 'BILL_OVERVIEW_GET_INFO'
export const BILL_PAGINATION = 'BILL_PAGINATION'
export const RESET_BILL_PAGINATION = 'RESET_BILL_PAGINATION'

export const bill_sort = () => ({
    type: BILL_SORT
})
export const bill_fetch_data_begin = () => ({
    type: BILL_FETCH_DATA_BEGIN
})
export const bill_fetch_data_success = (bills) => ({
    type: BILL_FETCH_DATA_SUCCESS,
    payload: bills
})
export const bill_fetch_data_failure = (error) => ({
    type: BILL_FETCH_DATA_FAILURE,
    payload: error
})
export const bill_overview_get_info = () => ({
    type: BILL_OVERVIEW_GET_INFO
})
export const bill_pagination = (pageNo) => ({
    type: BILL_PAGINATION,
    pageNo
})
export const reset_bill_pagination = () => ({
    type: RESET_BILL_PAGINATION
})

export const bill_fetch_data = (filter, pageNo, pageSize) => dispatch => {
    dispatch(bill_fetch_data_begin())
    const form = new FormData()
    if(typeof filter.startDate !== 'undefined') form.append('startDate', (filter.startDate).toString())
    if(typeof filter.endDate !== 'undefined') form.append('endDate', (filter.endDate).toString())
    if(typeof filter.employeeFilterValue !== 'undefined') form.append('employeeSearch', (filter.employeeFilterValue).toString())
    if(typeof filter.totalValue !== 'undefined') form.append('total', (filter.totalValue).toString())
    if(typeof filter.billIDValue !== 'undefined') form.append('billID', (filter.billIDValue).toString())
    form.append('pageNo', pageNo - 1)
    form.append('pageSize', pageSize)
    return api_1.post('/bill/filter', form , {
        headers: {
            'content-type': `multipart/form-data; boundary=${form._boundary}`}
    }).then(res => {
        dispatch(bill_fetch_data_success(res.data.bills))
    }).catch(err => {
        dispatch(bill_fetch_data_failure(err))
    })
}

export const bill_handle_pagination = (pageNo, pageSize) => dispatch => {
    let filter = store.getState().filter
    dispatch(bill_pagination(pageNo))
    dispatch(bill_fetch_data(filter, pageNo, pageSize))
}