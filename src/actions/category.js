import {store} from '../index'
import { api_1, api_2 } from '../api/api'
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

export const categorySelect = (category) => ({
    type: CATEGORY_SELECT,
    payload: category
})

export const categoryChangePage = (pageNo) => ({
    type: CATEGORY_CHANGE_PAGE,
    pg_page: pageNo
})

export const categorySearch = (search_key) => ({
    type: CATEGORY_SEARCH,
    search_key: search_key
})

export const categorySort = () => ({
    type: CATEGORY_SORT,
})

export const changeSelectedCategoryInfo = (value) => ({
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
    let searchKey = store.getState().category.search_key
    let pageNo = store.getState().category.pg_page
    let pageSize = store.getState().category.pg_size

    
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
            dispatch(fetchData())
            //call api get category
            let searchKey = store.getState().category.search_key
            let pageNo = store.getState().category.pg_page
            let pageSize = store.getState().category.pg_size

            
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
        })
        .catch(err => {
            dispatch(fetchDataFail(err))
        })

}

export const callEditData = (id, name, img, isActive) => dispatch => {
    //call api edit dish
    console.log("edit category: ", id, name, isActive == "1")
    const form = new FormData()
    form.append('id', id)
    form.append('name', name)
    form.append('img', img)
    form.append('is_active', isActive == "1") 
    return api_1.post('category/edit', form, {header : {
        'content-type': `multipart/form-data; boundary=${form._boundary}`}})
        .then(res => {
            dispatch(fetchData())
            //call api get category
            let searchKey = store.getState().category.search_key
            let pageNo = store.getState().category.pg_page
            let pageSize = store.getState().category.pg_size

            
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
                console.log("category error", err)
                dispatch(fetchDataFail(err))
            })
        })
        .catch(err => {
            dispatch(fetchDataFail(err))
        })

}

export const callDeleteData = (id) => dispatch => {
    //call api delete dish
    console.log("delete category: ", id)
    const form = new FormData()
    form.append('id', id)
    return api_1.post('category/delete', form, {header : {
        'content-type': `multipart/form-data; boundary=${form._boundary}`}})
        .then(res => {
            dispatch(fetchData())
            //call api get dish
            let searchKey = store.getState().category.search_key
            let pageNo = store.getState().category.pg_page
            let pageSize = store.getState().category.pg_size

            
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
        })
        .catch(err => {
            dispatch(fetchDataFail(err))
        })

}

export const callSearchData = (key) => dispatch => {
    // dispatch(categorySearch(key))
    // dispatch(fetchData())
    // //call api get category
    // let searchKey = store.getState().category.search_key
    // let pageNo = store.getState().category.pg_page
    // let pageSize = store.getState().category.pg_size

    // console.log("search key: ", searchKey)
    // api_1.get('/category/index', {
    //     params: {
    //         pg_page: pageNo,
    //         pg_size: pageSize,
    //         search_name: searchKey
    //     }
    // } , {
    //     headers: {
    //         }
    // }).then(res => {
    //     dispatch(fetchDataSuccess(res.data.categories))
    //     console.log("category response", res.data.categories)
    // }).catch(err => {
    //     console.log("dish error", err)
    //     dispatch(fetchDataFail(err))
    // })
}

export const callChangePage = (page) => dispatch => {
    console.log("change page: ", page)
    dispatch(categoryChangePage(page));
}