import { CHANGE_MODAL_VISISBILITY, 
    DISH_CHANGE_PAGE, 
    DISH_SELECT, 
    DISH_SEARCH, 
    DISH_SORT, 
    DISH_CHANGE_SELECTED_DISH, 
    DISH_FETCH_DATA,
    DISH_FETCH_DISH_SUCCESS,
    DISH_FETCH_DATA_FAIL,
    DISH_FETCH_CATEGORY_SUCCESS
} from '../actions/dish'
import { notification } from 'antd';
const initState = () => ({
    loading: false,
    error: false,
    dishes: [],
    categories: [],
    modalVisibility: false,
    sortOrder: 1, //1: ascending - 0: descending
    selectedDish: {
        _id: null,
        name: '',
        price: 0,
        category: {
            _id: '',
            name: ''
        },
        image: '',
        desc: '',
        is_active: true
    },
    pg_page: 0,
    pg_size: 6,
    search_key: ''
})
const dish = (state = initState(), action) => {
    switch(action.type){
        case DISH_FETCH_DATA:
            return {
                ...state,
                loading: true,
            }
        case DISH_FETCH_DISH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                dishes: [...action.dishes],
            }
        case DISH_FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                categories: [...action.categories]
            }
        case DISH_FETCH_DATA_FAIL:
            notification.open({
                message: 'Lỗi',
                description: action.error,
                onClick: () => {
                  console.log('Notification Clicked!');
                },
              });
            return {
                ...state,
                loading: false,
                error:true
            }
        case DISH_SELECT:
            return {
                ...state,
                modalVisibility: true,
                selectedDish: {
                    ...action.payload
                }
            }
        case CHANGE_MODAL_VISISBILITY:
            return {
                ...state,
                modalVisibility: !state.modalVisibility,
                selectedDish: state.modalVisibility === true ? {...state.selectedDish} : undefined
            }
        case DISH_CHANGE_PAGE:
            return {
                ...state,
                pg_page: action.pg_page
            }
        case DISH_SEARCH:
            return {
                ...state,
                search_key: action.search_key,
                pg_page: 0
            }
        case DISH_SORT:
            if(state.sort === 1){
                return {
                    ...state,
                    sort: 0,
                    dishes: [...state.dishes].sort((a, b)=> a['name'] > b['name'] ? 1 : -1) //ascending
                }
            }
            else
                return {
                    ...state,
                    sort: 1,
                    dishes: [...state.dishes].sort((a, b)=> a['name'] < b['name'] ? 1 : -1) //descending
                }
        case DISH_CHANGE_SELECTED_DISH:
            switch(action.field){
                case 'name':
                    return {
                        ...state,
                        selectedDish: {
                            ...state.selectedDish,
                            name: action.value
                        }
                    }
                case 'price':
                    return {
                        ...state,
                        selectedDish: {
                            ...state.selectedDish,
                            price: action.value
                        }
                    }
                case 'describe':
                    return {
                        ...state,
                        desc: action.value
                    }
            }
        default:
            return state
    }
}

export default dish