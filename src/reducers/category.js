import { CHANGE_MODAL_VISISBILITY, 
    CATEGORY_CHANGE_PAGE, 
    CATEGORY_SELECT, 
    CATEGORY_SEARCH, 
    CATEGORY_SORT, 
    CATEGORY_CHANGE_SELECTED_CATEGORY, 
    CATEGORY_FETCH_DATA,
    CATEGORY_FETCH_DATA_SUCCESS,
    CATEGORY_FETCH_DATA_FAIL,
} from '../actions/dish'

const initState = () => ({
    loading: false,
    error: false,
    categories: [],
    modalVisibility: false,
    sortOrder: 1, //1: ascending - 0: descending
    selectedCategory: {
        id: null,
        name: '',
        img: '',
    },
    pg_page: 0,
    pg_size: 6,
    search_key: ''
})
const category = (state = initState(), action) => {
    switch(action.type){
        case CATEGORY_FETCH_DATA:
            return {
                ...state,
                loading: true,
            }
        case CATEGORY_FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                dishes: [...action.categories],
            }
        case CATEGORY_FETCH_DATA_FAIL:
            return {
                ...state,
                loading: true,
                error:true
            }
        case CATEGORY_SELECT:
            return {
                ...state,
                modalVisibility: true,
                selectedCategory: {
                    ...state.selectedCategory,
                    id: action.id,
                    name: action.name,
                    img: action.img,
                }
            }
        case CHANGE_MODAL_VISISBILITY:
            return {
                ...state,
                modalVisibility: !state.modalVisibility,
                selectedCategory: undefined
            }
        case CATEGORY_CHANGE_PAGE:
            return {
                ...state,
                pg_page: action.pg_page
            }
        case CATEGORY_SEARCH:
            return {
                ...state,
                search_key: action.search_key,
                pg_page: 0
            }
        case CATEGORY_SORT:
            if(state.sort === 1){
                return {
                    ...state,
                    sort: 0,
                    dishes: [...state.categories].sort((a, b)=> a['name'] > b['name'] ? 1 : -1) //ascending
                }
            }
            else
                return {
                    ...state,
                    sort: 1,
                    dishes: [...state.categories].sort((a, b)=> a['name'] < b['name'] ? 1 : -1) //descending
                }
        case CATEGORY_CHANGE_SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategory: {
                    ...state.selectedCategory,
                    name: action.value
                }
            }
        default:
            return state
    }
}

export default category