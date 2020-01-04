import {store} from '../index'
import { api_1, api_2 } from '../api/api'
export const DEPARTMENT_SELECT = 'DEPARTMENT_SELECT'
export const DEPARTMENT_SEARCH = 'DEPARTMENT_SEARCH'
export const DEPARTMENT_SORT = 'DEPARTMENT_SORT'
export const DEPARTMENT_CHANGE_SELECTED_DEPARTMENT ='DEPARTMENT_CHANGE_SELECTED_DEPARTMENT'
export const CHANGE_MODAL_VISISBILITY = 'CHANGE_MODAL_VISISBILITY'
export const DEPARTMENT_FETCH_DATA = 'DEPARTMENT_FETCH_DATA'
export const DEPARTMENT_FETCH_DATA_SUCCESS  = 'DEPARTMENT_FETCH_DATA_SUCCESS'
export const DEPARTMENT_FETCH_DATA_FAIL = 'DEPARTMENT_FETCH_DATE_FAIL'
export const DEPARTMENT_CHANGE_PAGE = 'DEPARTMENT_CHANGE_PAGE'

export const changeModalVisibility = () => ({
    type: CHANGE_MODAL_VISISBILITY,
})

export const departmentSelect = (department) => ({
    type: DEPARTMENT_SELECT,
    payload: department
})

export const departmentChangePage = (pageNo) => ({
    type: DEPARTMENT_CHANGE_PAGE,
    pg_page: pageNo
})

export const departmentSearch = (search_key) => ({
    type: DEPARTMENT_SEARCH,
    search_key: search_key
})

export const departmentSort = () => ({
    type: DEPARTMENT_SORT,
})

export const changeSelectedDepartmentInfo = (value) => ({
    type: DEPARTMENT_CHANGE_SELECTED_DEPARTMENT,
    value: value, 
})

export const fetchData = () => ({
    type: DEPARTMENT_FETCH_DATA
})

export const fetchDataSuccess = (departments) => ({
    type: DEPARTMENT_FETCH_DATA_SUCCESS,
    departments: departments
})

export const fetchDataFail = (err) => ({
    type: DEPARTMENT_FETCH_DATA_FAIL,
    error: err
})
export const callFetchData = () => dispatch => {
    dispatch(fetchData())
    //call api get dish
    let searchKey = store.getState().department.search_key
    let pageNo = store.getState().department.pg_page
    let pageSize = store.getState().department.pg_size

    
    return api_1.get('/department/index', {
        params: {
            pg_page: pageNo,
            pg_size: pageSize,
            search_name: searchKey
        }
    } , {
        headers: {
            }
    }).then(res => {
        dispatch(fetchDataSuccess(res.data.departments))
        console.log("department response", res.data.departments)
    }).catch(err => {
        console.log("department error", err)
        dispatch(fetchDataFail(err))
    })
}

export const callAddData = (name) => dispatch => {
    //call api create dish
    const form = new FormData()
    form.append('name', name)
    return api_1.post('department/create', form, {header : {
        'content-type': `multipart/form-data; boundary=${form._boundary}`}})
        .then(res => {
            dispatch(fetchData())
            //call api get department
            let searchKey = store.getState().department.search_key
            let pageNo = store.getState().department.pg_page
            let pageSize = store.getState().department.pg_size

            return api_1.get('/department/index', {
                params: {
                    pg_page: pageNo,
                    pg_size: pageSize,
                    search_name: searchKey
                }
            } , {
                headers: {
                    }
            }).then(res => {
                dispatch(fetchDataSuccess(res.data.departments))
                console.log("department response", res.data.departments)
            }).catch(err => {
                console.log("department error", err)
                dispatch(fetchDataFail(err))
            })
        })
        .catch(err => {
            dispatch(fetchDataFail(err))
        })

}

export const callEditData = (id, name, isActive) => dispatch => {
    //call api edit dish
    console.log("edit department: ", id, name, isActive)
    const form = new FormData()
    form.append('id', id)
    form.append('name', name)
    form.append('is_active', isActive == "1")
    return api_1.post('department/edit', form, {header : {
        'content-type': `multipart/form-data; boundary=${form._boundary}`}})
        .then(res => {
            dispatch(fetchData())
            //call api get department
            let searchKey = store.getState().department.search_key
            let pageNo = store.getState().department.pg_page
            let pageSize = store.getState().department.pg_size

            
            return api_1.get('/department/index', {
                params: {
                    pg_page: pageNo,
                    pg_size: pageSize,
                    search_name: searchKey
                }
            } , {
                headers: {
                    }
            }).then(res => {
                dispatch(fetchDataSuccess(res.data.departments))
                console.log("department response", res.data.departments)
            }).catch(err => {
                console.log("department error", err)
                dispatch(fetchDataFail(err))
            })
        })
        .catch(err => {
            dispatch(fetchDataFail(err))
        })

}

export const callDeleteData = (id) => dispatch => {
    //call api delete dish
    console.log("delete department: ", id)
    const form = new FormData()
    form.append('id', id)
    return api_1.post('department/delete', form, {header : {
        'content-type': `multipart/form-data; boundary=${form._boundary}`}})
        .then(res => {
            dispatch(fetchData())
            //call api get dish
            let searchKey = store.getState().department.search_key
            let pageNo = store.getState().department.pg_page
            let pageSize = store.getState().department.pg_size

            
            return api_1.get('/department/index', {
                params: {
                    pg_page: pageNo,
                    pg_size: pageSize,
                    search_name: searchKey
                }
            } , {
                headers: {
                    }
            }).then(res => {
                dispatch(fetchDataSuccess(res.data.departments))
                console.log("department response", res.data.departments)
            }).catch(err => {
                console.log("department error", err)
                dispatch(fetchDataFail(err))
            })
        })
        .catch(err => {
            dispatch(fetchDataFail(err))
        })

}

export const callSearchData = (key) => dispatch => {
    
}

export const callChangePage = (page) => dispatch => {
    console.log("change page: ", page)
    dispatch(departmentChangePage(page));
}