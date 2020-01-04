import {store} from '../index'
import { api_1, api_2 } from '../api/api'
export const TABLE_SELECT = 'TABLE_SELECT'
export const TABLE_SEARCH = 'TABLE_SEARCH'
export const TABLE_SORT = 'TABLE_SORT'
export const TABLE_CHANGE_SELECTED_TABLE ='TABLE_CHANGE_SELECTED_TABLE'
export const CHANGE_MODAL_VISISBILITY = 'CHANGE_MODAL_VISISBILITY'
export const TABLE_FETCH_DATA = 'TABLE_FETCH_DATA'
export const TABLE_FETCH_DATA_SUCCESS  = 'TABLE_FETCH_DATA_SUCCESS'
export const TABLE_FETCH_DEPARTMENT_SUCCESS = 'TABLE_FETCH_DEPARTMENT_SUCCESS'
export const TABLE_FETCH_DATA_FAIL = 'TABLE_FETCH_DATE_FAIL'
export const TABLE_CHANGE_PAGE = 'TABLE_CHANGE_PAGE'

export const changeModalVisibility = () => ({
    type: CHANGE_MODAL_VISISBILITY,
})

export const tableSelect = (table) => ({
    type: TABLE_SELECT,
    payload: table
})

export const tableChangePage = (pageNo) => ({
    type: TABLE_CHANGE_PAGE,
    pg_page: pageNo
})

export const tableSearch = (search_key) => ({
    type: TABLE_SEARCH,
    search_key: search_key
})

export const tableSort = () => ({
    type: TABLE_SORT,
})

export const changeSelectedTableInfo = (value) => ({
    type: TABLE_CHANGE_SELECTED_TABLE,
    value: value, 
})

export const fetchData = () => ({
    type: TABLE_FETCH_DATA
})

export const fetchDataSuccess = (tables) => ({
    type: TABLE_FETCH_DATA_SUCCESS,
    tables: tables
})

export const fetchDepartmentSuccess = (departments) => ({
    type: TABLE_FETCH_DEPARTMENT_SUCCESS,
    departments: departments
})

export const fetchDataFail = (err) => ({
    type: TABLE_FETCH_DATA_FAIL,
    error: err
})
export const callFetchData = () => dispatch => {
    dispatch(fetchData())
    //call api get dish
    let searchKey = store.getState().table.search_key
    let pageNo = store.getState().table.pg_page
    let pageSize = store.getState().table.pg_size

    
    return api_1.get('/table/index', {
        params: {
            pg_page: pageNo,
            pg_size: pageSize,
            search_name: searchKey} }, {headers: {}}
        ).then(res => {
            console.log("table response: ", res.data.tables)
            dispatch(fetchDataSuccess(res.data.tables))
            api_1.get('/department/index', {
                params: {
                    pg_page: 0,
                    pg_size: 20,
                    search_name: searchKey}
                } , {headers: {}}
            ).then(res => {
                dispatch(fetchDepartmentSuccess(res.data.departments))
                console.log("department response", res.data.departments)})
        }).catch(err => {
            console.log("table error", err)
            dispatch(fetchDataFail(err))
    })
}

export const callAddData = (name, departmentId) => dispatch => {
    //call api create dish
    const form = new FormData()
    form.append('name', name)
    form.append('department', departmentId)
    return api_1.post('table/create', form, {header : {
        'content-type': `multipart/form-data; boundary=${form._boundary}`}})
        .then(res => {
            dispatch(fetchData())
            //call api get dish
            let searchKey = store.getState().table.search_key
            let pageNo = store.getState().table.pg_page
            let pageSize = store.getState().table.pg_size

            
            return api_1.get('/table/index', {
                params: {
                    pg_page: pageNo,
                    pg_size: pageSize,
                    search_name: searchKey} }, {headers: {}}
                ).then(res => {
                    dispatch(fetchDataSuccess(res.data.tables))
                    api_1.get('/department/index', {
                        params: {
                            pg_page: 0,
                            pg_size: 20,
                            search_name: searchKey}
                        } , {headers: {}}
                    ).then(res => {
                        dispatch(fetchDepartmentSuccess(res.data.departments))
                        console.log("department response", res.data.departments)})
                }).catch(err => {
                    console.log("table error", err)
                    dispatch(fetchDataFail(err))
            })
        })
        .catch(err => {
            dispatch(fetchDataFail(err))
        })

}

export const callEditData = (id, name, departmentId, isActive) => dispatch => {
    //call api edit dish
    console.log("edit table: ", id, name, isActive)
    const form = new FormData()
    form.append('id', id)
    form.append('name', name)
    form.append('department', departmentId)
    form.append('is_active', isActive == "1")
    return api_1.post('table/edit', form, {header : {
        'content-type': `multipart/form-data; boundary=${form._boundary}`}})
        .then(res => {
            dispatch(fetchData())
            //call api get dish
            let searchKey = store.getState().table.search_key
            let pageNo = store.getState().table.pg_page
            let pageSize = store.getState().table.pg_size

            
            return api_1.get('/table/index', {
                params: {
                    pg_page: pageNo,
                    pg_size: pageSize,
                    search_name: searchKey} }, {headers: {}}
                ).then(res => {
                    dispatch(fetchDataSuccess(res.data.tables))
                    api_1.get('/department/index', {
                        params: {
                            pg_page: 0,
                            pg_size: 20,
                            search_name: searchKey}
                        } , {headers: {}}
                    ).then(res => {
                        dispatch(fetchDepartmentSuccess(res.data.departments))
                        console.log("department response", res.data.departments)})
                }).catch(err => {
                    console.log("table error", err)
                    dispatch(fetchDataFail(err))
            })
        })
        .catch(err => {
            dispatch(fetchDataFail(err))
        })

}

export const callDeleteData = (id) => dispatch => {
    //call api delete dish
    console.log("delete table: ", id)
    const form = new FormData()
    form.append('id', id)
    return api_1.post('table/delete', form, {header : {
        'content-type': `multipart/form-data; boundary=${form._boundary}`}})
        .then(res => {
            dispatch(fetchData())
            //call api get dish
            let searchKey = store.getState().table.search_key
            let pageNo = store.getState().table.pg_page
            let pageSize = store.getState().table.pg_size

            
            return api_1.get('/table/index', {
                params: {
                    pg_page: pageNo,
                    pg_size: pageSize,
                    search_name: searchKey} }, {headers: {}}
                ).then(res => {
                    dispatch(fetchDataSuccess(res.data.tables))
                    api_1.get('/department/index', {
                        params: {
                            pg_page: 0,
                            pg_size: 20,
                            search_name: searchKey}
                        } , {headers: {}}
                    ).then(res => {
                        dispatch(fetchDepartmentSuccess(res.data.departments))
                        console.log("department response", res.data.departments)})
                }).catch(err => {
                    console.log("table error", err)
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
    dispatch(tableChangePage(page));
}