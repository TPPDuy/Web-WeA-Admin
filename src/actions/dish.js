import {store} from '../index'
import { api_1, api_2 } from '../api/api'
// export const DISH_ADD = 'DISH_ADD'
// export const DISH_EDIT = 'DISH_EDIT'
// export const DISH_DELETE = 'DISH_DELETE'
export const DISH_SELECT = 'DISH_SELECT'
export const DISH_SEARCH = 'DISH_SEARCH'
export const DISH_SORT = 'DISH_SORT'
export const DISH_CHANGE_SELECTED_DISH ='DISH_CHANGE_SELECTED_DISH'
export const CHANGE_MODAL_VISISBILITY = 'CHANGE_MODAL_VISISBILITY'
export const DISH_FETCH_DATA = 'DISH_FETCH_DATA'
export const DISH_FETCH_DATA_SUCCESS  = 'DISH_FETCH_DATA_SUCCESS'
export const DISH_FETCH_DISH_SUCCESS = 'DISH_FETCH_DISH_SUCCESS'
export const DISH_FETCH_CATEGORY_SUCCESS = 'DISH_FETCH_CATEGORY_SUCCESS'
export const DISH_FETCH_DATA_FAIL = 'DISH_FETCH_DATE_FAIL'
export const DISH_CHANGE_PAGE = 'DISH_CHANGE_PAGE'

export const changeModalVisibility = () => ({
    type: CHANGE_MODAL_VISISBILITY,
})

export const dishSelect = (dish) => ({
    type: DISH_SELECT,
    payload: dish
})

export const dishChangePage = (pageNo) => ({
    type: DISH_CHANGE_PAGE,
    pg_page: pageNo
})

export const dishSearch = (search_key) => ({
    type: DISH_SEARCH,
    search_key: search_key
})

export const dishSort = () => ({
    type: DISH_SORT,
})

export const changeSelectedDishInfo = (value, field) => ({
    type: DISH_CHANGE_SELECTED_DISH,
    value: value, 
    field: field
})

export const fetchData = () => ({
    type: DISH_FETCH_DATA
})

export const fetchDishSuccess = (dishes) => ({
    type: DISH_FETCH_DISH_SUCCESS,
    dishes: dishes
})

export const fetchCategorySuccess = (categories) => ({
    type: DISH_FETCH_CATEGORY_SUCCESS,
    categories: categories
})

export const fetchDataFail = (err) => ({
    type: DISH_FETCH_DATA_FAIL,
    error: err
})
export const callFetchData = () => dispatch => {
    console.log("call fetch data")
    dispatch(fetchData())
    //call api get dish
    let searchKey = store.getState().dish.search_key
    let pageNo = store.getState().dish.pg_page
    let pageSize = store.getState().dish.pg_size

    
    return api_1.get('/dish/index', {
        params: {
            pg_page: pageNo,
            pg_size: pageSize,
            search_name: searchKey
        }
    } , {
        headers: {
            }
    }).then(res => {
        dispatch(fetchDishSuccess(res.data.dishes))
        console.log("dishes response", res.data.dishes)
        api_1.get('/category/index', {params: {pg_page: 0, pg_size: 20}}, {header: {}}).then(res => {
            dispatch(fetchCategorySuccess(res.data.categories))
        })
        
    }).catch(err => {
        console.log("dish error", err)
        dispatch(fetchDataFail(err))
    })
}

export const callAddData = (name, price, categoryId, img, describe) => dispatch => {
    //call api create dish

    console.log("create dish")
    console.log("name", name)
    console.log("price", price)
    console.log("categoryId", categoryId)
    console.log("describe", describe)

    const form = new FormData()
    form.append('name', name)
    form.append('price', price)
    form.append('category', categoryId)
    form.append('img', img)
    form.append('describe', describe)
    return api_1.post('dish/create', form, {header : {
        'content-type': `multipart/form-data; boundary=${form._boundary}`}})
        .then(res => {
            console.log("create success")
            dispatch(fetchData())
            //call api get dish
            let searchKey = store.getState().dish.search_key
            let pageNo = store.getState().dish.pg_page
            let pageSize = store.getState().dish.pg_size

            
            return api_1.get('/dish/index', {
                params: {
                    pg_page: pageNo,
                    pg_size: pageSize,
                    search_name: searchKey
                }
            } , {
                headers: {
                    }
            }).then(res => {
                dispatch(fetchDishSuccess(res.data.dishes))
                console.log("dishes response", res.data.dishes)
                api_1.get('/category/index', {params: {pg_page: 0, pg_size: 20}}, {header: {}}).then(res => {
                    dispatch(fetchCategorySuccess(res.data.categories))
                })
                
            }).catch(err => {
                console.log("dish error", err)
                dispatch(fetchDataFail(err))
            })
        })
        .catch(err => {
            console.log(err)
            dispatch(fetchDataFail(err))
        })

}

export const callEditData = (id, name, price, categoryId, img, describe, isActive) => dispatch => {
    //call api edit dish
    console.log("edit id: ", id)
    console.log("edit name: ", name)
    console.log("edit price: ", price)
    console.log("edit categoryID: ", categoryId)
    console.log("edit isActive: ", isActive)

    const form = new FormData()
    form.append('id', id)
    form.append('name', name)
    form.append('price', price)
    form.append('category', categoryId)
    form.append('img', img)
    form.append('describe', describe)
    form.append('is_active', isActive == "1")
    return api_1.post('dish/edit', form, {header : {
        'content-type': `multipart/form-data; boundary=${form._boundary}`}})
        .then(res => {
            console.log("edit success")
            dispatch(fetchData())
            //call api get dish
            let searchKey = store.getState().dish.search_key
            let pageNo = store.getState().dish.pg_page
            let pageSize = store.getState().dish.pg_size

            
            return api_1.get('/dish/index', {
                params: {
                    pg_page: pageNo,
                    pg_size: pageSize,
                    search_name: searchKey
                }
            } , {
                headers: {
                    }
            }).then(res => {
                dispatch(fetchDishSuccess(res.data.dishes))
                console.log("dishes response", res.data.dishes)
                api_1.get('/category/index', {params: {pg_page: 0, pg_size: 20}}, {header: {}}).then(res => {
                    dispatch(fetchCategorySuccess(res.data.categories))
                })
                
            }).catch(err => {
                console.log("dish error", err)
                dispatch(fetchDataFail(err))
            })
        })
        .catch(err => {
            console.log("edit fail", err)
            dispatch(fetchDataFail(err))
        })

}

export const callDeleteData = (id) => dispatch => {
    //call api delete dish
    console.log("delete id: ", id)
    const form = new FormData()
    form.append('id', id)
    return api_1.post('dish/delete', form, {header : {
        'content-type': `multipart/form-data; boundary=${form._boundary}`}})
        .then(res => {
            console.log("delete success")
            dispatch(fetchData())
            //call api get dish
            let searchKey = store.getState().dish.search_key
            let pageNo = store.getState().dish.pg_page
            let pageSize = store.getState().dish.pg_size

            
            return api_1.get('/dish/index', {
                params: {
                    pg_page: pageNo,
                    pg_size: pageSize,
                    search_name: searchKey
                }
            } , {
                headers: {
                    }
            }).then(res => {
                dispatch(fetchDishSuccess(res.data.dishes))
                console.log("dishes response", res.data.dishes)
                api_1.get('/category/index', {params: {pg_page: 0, pg_size: 20}}, {header: {}}).then(res => {
                    dispatch(fetchCategorySuccess(res.data.categories))
                })
                
            }).catch(err => {
                console.log("dish error", err)
                dispatch(fetchDataFail(err))
            })
        })
        .catch(err => {
            console.log("delete fail", err)
            dispatch(fetchDataFail(err))
        })

}

export const callSearchData = (searchKey) => dispatch => {
    console.log("search key: ", searchKey)
    dispatch(dishSearch(searchKey))
    //callFetchData()
    //call api get dish
}

export const callChangePage = (pageNo) => dispatch => {
    dispatch(dishChangePage(pageNo));
    console.log("page", pageNo)
    //call api fetch next page
}