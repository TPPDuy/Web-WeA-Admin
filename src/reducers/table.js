import { CHANGE_MODAL_VISISBILITY, 
    TABLE_CHANGE_PAGE, 
    TABLE_SELECT, 
    TABLE_SEARCH, 
    TABLE_SORT, 
    TABLE_CHANGE_SELECTED_TABLE, 
    TABLE_FETCH_DATA,
    TABLE_FETCH_DATA_SUCCESS,
    TABLE_FETCH_DEPARTMENT_SUCCESS,
    TABLE_FETCH_DATA_FAIL,
} from '../actions/table'
import { notification } from 'antd';

const initState = () => ({
    loading: false,
    error: false,
    tables: [],
    departments: [],
    modalVisibility: false,
    sortOrder: 1, //1: ascending - 0: descending
    selectedTable: {
        id: null,
        name: '',
        is_active: false,
        department: {
            id: '',
            name: ''
        }
    },
    pg_page: 0,
    pg_size: 6,
    search_key: ''
})
const table = (state = initState(), action) => {
    switch(action.type){
        case TABLE_FETCH_DATA:
            return {
                ...state,
                loading: true,
            }
        case TABLE_FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                tables: [...action.tables],
            }
        case TABLE_FETCH_DEPARTMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                departments: [...action.departments],
            }
        case TABLE_FETCH_DATA_FAIL:
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
                error: true
            }
        case TABLE_SELECT:
            return {
                ...state,
                modalVisibility: true,
                selectedTable: {
                    ...action.payload
                }
            }
        case CHANGE_MODAL_VISISBILITY:
            return {
                ...state,
                modalVisibility: !state.modalVisibility,
                selectedTable: state.modalVisibility === true ? {...state.selectedTable} : undefined
            }
        case TABLE_CHANGE_PAGE:
            return {
                ...state,
                pg_page: action.pg_page
            }
        case TABLE_SEARCH:
            return {
                ...state,
                search_key: action.search_key,
                pg_page: 0
            }
        case TABLE_SORT:
            if(state.sort === 1){
                return {
                    ...state,
                    sort: 0,
                    tables: [...state.tables].sort((a, b)=> a['name'] > b['name'] ? 1 : -1) //ascending
                }
            }
            else
                return {
                    ...state,
                    sort: 1,
                    tables: [...state.tables].sort((a, b)=> a['name'] < b['name'] ? 1 : -1) //descending
                }
        case TABLE_CHANGE_SELECTED_TABLE:
            return {
                ...state,
                selectedTable: {
                    ...state.selectedTable,
                    name: action.value
                }
            }
        default:
            return state
    }
}

export default table