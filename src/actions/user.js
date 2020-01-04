import { api_2 } from '../api/api'
import { store } from '../index'
import qs from 'qs'
import { toast } from 'react-toastify'

export const EMPLOYEE_FETCH_DATA_BEGIN = 'EMPLOYEE_FETCH_DATA_BEGIN'
export const EMPLOYEE_FETCH_DATA_SUCCESS = 'EMPLOYEE_FETCH_DATA_SUCCESS'
export const EMPLOYEE_FETCH_DATA_FAILURE = 'EMPLOYEE_FETCH_DATA_FAILURE'
export const USER_FETCH_DATA_BEGIN = 'USER_FETCH_DATA_BEGIN'
export const USER_FETCH_DATA_SUCCESS = 'USER_FETCH_DATA_SUCCESS'
export const USER_FETCH_DATA_FAILURE = 'USER_FETCH_DATA_FAILURE'
export const USER_TOTAL_NUMBER = 'USER_TOTAL_NUMBER'
export const USER_PAGINATION = 'USER_PAGINATION'
export const USER_SORT = 'USER_SORT'
export const USER_CHANGE_STATUS_BEGIN = 'USER_CHANGE_STATUS_BEGIN'
export const USER_CHANGE_STATUS_SUCCESS = 'USER_CHANGE_STATUS_SUCCESS'
export const USER_CHANGE_STATUS_FAILURE = 'USER_CHANGE_STATUS_FAILURE'
export const USER_CREATE_BEGIN = 'USER_CREATE_BEGIN'
export const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS'
export const USER_CREATE_FAILURE = 'USER_CREATE_FAILURE'
export const USER_EDIT_BEGIN = 'USER_EDIT_BEGIN'
export const USER_EDIT_SUCCESS = 'USER_EDIT_SUCCESS'
export const USER_EDIT_FAILURE = 'USER_EDIT_FAILURE'
export const USER_OPEN_CREATE_MODAL = 'USER_OPEN_CREATE_MODAL'
export const USER_CLOSE_CREATE_MODAL = 'USER_CLOSE_CREATE_MODAL'
export const USER_OPEN_EDIT_MODAL = 'USER_OPEN_EDIT_MODAL'
export const USER_CLOSE_EDIT_MODAL = 'USER_CLOSE_EDIT_MODAL'

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
export const user_fetch_data_begin = () => ({
    type: USER_FETCH_DATA_BEGIN
})
export const user_fetch_data_success = (data) => ({
    type: USER_FETCH_DATA_SUCCESS,
    data
})
export const user_fetch_data_failure = (error) => ({
    type: USER_FETCH_DATA_FAILURE,
    error
})
export const user_pagination = (pageNo) => ({
    type: USER_PAGINATION,
    pageNo
})
export const user_sort = () => ({
    type: USER_SORT
})
export const user_change_status_begin = (id) => ({
    type: USER_CHANGE_STATUS_BEGIN,
    id
})
export const user_change_status_success = () => ({
    type: USER_CHANGE_STATUS_SUCCESS
})
export const user_change_status_failure = (id) => ({
    type: USER_CHANGE_STATUS_FAILURE,
    id
})
export const user_create_begin = () => ({
    type: USER_CREATE_BEGIN
})
export const user_create_success = () => ({
    type: USER_CREATE_SUCCESS
})
export const user_create_failure = (error) => ({
    type: USER_CREATE_FAILURE,
    error
})
export const user_edit_begin = () => ({
    type: USER_EDIT_BEGIN
})
export const user_edit_success = () => ({
    type: USER_EDIT_SUCCESS
})
export const user_edit_failure = (error) => ({
    type: USER_EDIT_FAILURE,
    error
})

export const user_open_create_modal = () => ({
    type: USER_OPEN_CREATE_MODAL
})
export const user_close_create_modal = () => dispatch => {
    let loading = store.getState().user.loading
    if(!loading)
        dispatch ({
            type: USER_CLOSE_CREATE_MODAL
        })
}
export const user_open_edit_modal = (employee) => {
    let e = {
        id: employee._id,
        username: employee.username,
        fullname: employee.fullname,
        level: employee.level
    }
    return{
        type: USER_OPEN_EDIT_MODAL,
        employee: e
    }
}
export const user_close_edit_modal = () => dispatch => {
    let loading = store.getState().user.loading
    if(!loading)
        dispatch ({
            type: USER_CLOSE_EDIT_MODAL
        })
}

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
export const user_fetch_data = () => dispatch => {
    dispatch(user_fetch_data_begin())
    let pageNo = store.getState().user.pageNo
    let pageSize = store.getState().user.pageSize
    return api_2.get('/users/all', {
        params: {
            pageNo: pageNo - 1,
            pageSize
        }
    })
        .then(res => {
            dispatch(user_fetch_data_success(res.data.data))
        })
        .catch(err => 
            dispatch(user_fetch_data_failure(err))
        )    
}
export const handle_user_pagination = (pageNo) => dispatch => {
    dispatch(user_pagination(pageNo))
    dispatch(user_fetch_data())
}
export const handle_change_status = (id) => dispatch => {
    dispatch(user_change_status_begin(id))
    api_2.post('users/status', qs.stringify({
        _id: id
    }), {
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    })
        .then(res => {            
            dispatch(user_change_status_success())
            toast('Cập nhật trạng thái thành công!', {
                className: 'success-modal',
                bodyClassName:'success-modal-text',
                progressClassName:'success-progress-bar'})
        })
        .catch(err => {            
            dispatch(user_change_status_failure(id))
            toast.error('Cập nhật trạng thái thất bại!')
        })
}
export const handle_create_user = (fullname, username, password, level) => dispatch => {
    dispatch(user_create_begin())
    api_2.post('users/create', qs.stringify({
        fullname,
        username,
        password,
        level
    }),{
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    })
        .then(res => {                    
            dispatch(user_create_success())             
            dispatch(user_close_create_modal())
            toast('Thêm nhân viên thành công!', {
                className: 'success-modal',
                bodyClassName:'success-modal-text',
                progressClassName:'success-progress-bar'})   
            dispatch(user_fetch_data())
        })
        .catch(error => {            
            dispatch(user_create_failure(error))
            toast.error('Thêm nhân viên thất bại!')
        })
}
export const handle_edit_user = (id, fullname, username, password, level) => dispatch => {    
    dispatch(user_edit_begin())
    api_2.post('users/edit', qs.stringify({
        _id: id,
        fullname,
        username,
        password,
        level
    }),{
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    })
        .then(res => {                    
            dispatch(user_edit_success())             
            dispatch(user_close_edit_modal())
            toast('Chỉnh sửa nhân viên thành công!', {
                className: 'success-modal',
                bodyClassName:'success-modal-text',
                progressClassName:'success-progress-bar'})   
            dispatch(user_fetch_data())
        })
        .catch(error => {            
            dispatch(user_edit_failure(error))
            toast.error('Chỉnh sửa nhân viên thất bại!')
        })
}
export const handle_delete_user = (id) => dispatch => {
    api_2.post('users/delete', qs.stringify({
        _id: id
    }),{
        headers: {
            'content-type' : 'application/x-www-form-urlencoded'
        }
    })
        .then(res => {
            toast('Xóa nhân viên thành công!', {
                className: 'success-modal',
                bodyClassName:'success-modal-text',
                progressClassName:'success-progress-bar'}) 
                dispatch(user_fetch_data())
        })
        .catch(err => {
            toast.error('Xóa nhân viên thất bại!')
        })
}
