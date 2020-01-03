import { api_1, api_2 } from '../api/api'
import { store } from '../index'

export const BILL_SORT = 'BILL_SORT'
export const BILL_FETCH_DATA_BEGIN = 'BILL_FETCH_DATA_BEGIN'
export const BILL_FETCH_DATA_SUCCESS = 'BILL_FETCH_DATA_SUCCESS'
export const BILL_FETCH_DATA_FAILURE = 'BILL_FETCH_DATA_FAILURE'
export const BILL_PAGINATION = 'BILL_PAGINATION'
export const RESET_BILL_PAGINATION = 'RESET_BILL_PAGINATION'
export const BILL_STATISTIC_BEGIN = 'BILL_STATISTIC_BEGIN'
export const BILL_STATISTIC_SUCCESS = 'BILL_STATISTIC_SUCCESS'
export const BILL_STATISTIC_FAILURE = 'BILL_STATISTIC_FAILURE'

export const bill_sort = () => ({
    type: BILL_SORT
})
export const bill_fetch_data_begin = () => ({
    type: BILL_FETCH_DATA_BEGIN
})
export const bill_fetch_data_success = (quantity, bills) => ({
    type: BILL_FETCH_DATA_SUCCESS,
    payload: bills, 
    quantity
})
export const bill_fetch_data_failure = (error) => ({
    type: BILL_FETCH_DATA_FAILURE,
    payload: error
})
export const bill_pagination = (pageNo) => ({
    type: BILL_PAGINATION,
    pageNo
})
export const reset_bill_pagination = () => ({
    type: RESET_BILL_PAGINATION
})
export const bill_statistic_begin = () => ({
    type: BILL_STATISTIC_BEGIN
})
export const bill_statistic_success = (statistic) => ({
    type: BILL_STATISTIC_SUCCESS,
    statistic
})
export const bill_statistic_failure = (error) => ({
    type: BILL_STATISTIC_FAILURE,
    error
})

export const bill_fetch_data = () => dispatch => {
    let filter = store.getState().filter
    let pageNo = store.getState().bill.pageNo
    let pageSize = store.getState().bill.pageSize
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
        dispatch(bill_fetch_data_success(res.data.totalResult, res.data.bills))
    }).catch(err => {
        dispatch(bill_fetch_data_failure(err))
    })
}

export const bill_handle_pagination = (pageNo) => dispatch => {
    dispatch(bill_pagination(pageNo))
    dispatch(bill_fetch_data())
}

export const bill_statistic = () => dispatch => {
    dispatch(bill_statistic_begin())
    let filter = store.getState().filter
    const form = new FormData()
    if(typeof filter.startDate !== 'undefined') form.append('startDate', (filter.startDate).toString())
    if(typeof filter.endDate !== 'undefined') form.append('endDate', (filter.endDate).toString())
    if(typeof filter.employeeFilterValue !== 'undefined') form.append('employeeSearch', (filter.employeeFilterValue).toString())
    return api_1.post('/bill/statistic', form , {
        headers: {
            'content-type': `application/x-www-form-urlencoded; boundary=${form._boundary}`}
    }).then(res => {
        dispatch(bill_statistic_success(res.data))
    }).catch(err => {
        dispatch(bill_statistic_failure(err))
    })

}