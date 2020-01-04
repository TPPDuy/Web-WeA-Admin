import {store} from '../index'
import { api_1, api_2 } from '../api/api'
// export const CATEGORY_ADD = 'CATEGORY_ADD'
// export const CATEGORY_EDIT = 'CATEGORY_EDIT'
// export const CATEGORY_DELETE = 'CATEGORY_DELETE'
export const CATEGORY_SELECT = 'CATEGORY_SELECT'
export const CATEGORY_SEARCH = 'CATEGORY_SEARCH'
export const CATEGORY_SORT = 'CATEGORY_SORT'
export const CATEGORY_CHANGE_SELECTED_CATEGORY ='CATEGORY_CHANGE_SELECTED_CATEGORY'
export const CHANGE_MODAL_VISISBILITY = 'CHANGE_MODAL_VISISBILITY'
export const CATEGORY_FETCH_DATA = 'CATEGORY_FETCH_DATA'
export const CATEGORY_FETCH_DATA_SUCCESS  = 'CATEGORY_FETCH_DATA_SUCCESS'
export const CATEGORY_FETCH_DATA_FAIL = 'CATEGORY_FETCH_DATE_FAIL'
export const CATEGORY_CHANGE_PAGE = 'CATEGORY_CHANGE_PAGE'

export const changeModalVisibility = () => ({
    type: CHANGE_MODAL_VISISBILITY,
})

export const dishSelect = (id, name, img) => ({
    type: CATEGORY_SELECT,
    id: id,
    name:name,
    img: img,
})

export const dishChangePage = (pageNo) => ({
    type: CATEGORY_CHANGE_PAGE,
    pg_page: pageNo
})

export const dishSearch = (search_key) => ({
    type: CATEGORY_SEARCH,
    search_key: search_key
})

export const dishSort = () => ({
    type: CATEGORY_SORT,
})

export const changeSelectedDishName = (value) => ({
    type: CATEGORY_CHANGE_SELECTED_CATEGORY,
    value: value, 
})

export const fetchData = () => ({
    type: CATEGORY_FETCH_DATA
})

export const fetchDataSuccess = (categories) => ({
    type: CATEGORY_FETCH_DATA_SUCCESS,
    categories: categories
})

export const fetchDataFail = (err) => ({
    type: CATEGORY_FETCH_DATA_FAIL,
    error: err
})
export const callFetchData = () => dispatch => {
    dispatch(fetchData())
    //call api get dish
    let searchKey = store.getState().dish.search_key
    let pageNo = store.getState().dish.pg_page
    let pageSize = store.getState().dish.pg_size

    
    return api_1.get('/category/index', {
        params: {
            pg_page: pageNo,
            pg_size: pageSize,
            search_name: searchKey
        }
    } , {
        headers: {
            }
    }).then(res => {
        dispatch(fetchDataSuccess(res.data.categories))
        console.log("category response", res.data.categories)
    }).catch(err => {
        console.log("dish error", err)
        dispatch(fetchDataFail(err))
    })
}

export const callAddData = (name, img) => dispatch => {
    //call api create dish
    const form = new FormData()
    form.append('name', name)
    form.append('img', img)
    return api_1.post('category/create', form, {header : {
        'content-type': `multipart/form-data; boundary=${form._boundary}`}})
        .then(res => {
            callFetchData()
        })
        .catch(err => {
            dispatch(fetchDataFail(err))
        })

}

export const callEditData = (id, name, img, isActive) => dispatch => {
    //call api edit dish
    const form = new FormData()
    form.append('id', id)
    form.append('name', name)
    form.append('img', img)
    form.append('is_active', isActive)
    return api_1.post('category/edit', form, {header : {
        'content-type': `multipart/form-data; boundary=${form._boundary}`}})
        .then(res => {
            callFetchData()
        })
        .catch(err => {
            dispatch(fetchDataFail(err))
        })

}

export const callDeleteData = (id) => dispatch => {
    //call api delete dish
    const form = new FormData()
    form.append('id', id)
    return api_1.post('category/delete', form, {header : {
        'content-type': `multipart/form-data; boundary=${form._boundary}`}})
        .then(res => {
            callFetchData()
        })
        .catch(err => {
            dispatch(fetchDataFail(err))
        })

}

export const callSearchData = (searchKey) => dispatch => {
    dispatch(dishSearch(searchKey))
    callFetchData()
    //call api get dish
}

export const callChangePage = (pageNo) => dispatch => {
    dispatch(dishChangePage(pageNo));
    dispatch(fetchData());
    //call api fetch next page
}