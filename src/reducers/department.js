import { CHANGE_MODAL_VISISBILITY, 
    DEPARTMENT_CHANGE_PAGE, 
    DEPARTMENT_SELECT, 
    DEPARTMENT_SEARCH, 
    DEPARTMENT_SORT, 
    DEPARTMENT_CHANGE_SELECTED_DEPARTMENT, 
    DEPARTMENT_FETCH_DATA,
    DEPARTMENT_FETCH_DATA_SUCCESS,
    DEPARTMENT_FETCH_DATA_FAIL,
} from '../actions/department'
import {notification} from 'antd'

const initState = () => ({
    loading: false,
    error: false,
    departments: [],
    modalVisibility: false,
    sortOrder: 1, //1: ascending - 0: descending
    selectedDepartment: {
        id: null,
        name: '',
        is_active: false
    },
    pg_page: 0,
    pg_size: 6,
    search_key: ''
})
const department = (state = initState(), action) => {
    switch(action.type){
        case DEPARTMENT_FETCH_DATA:
            return {
                ...state,
                loading: true,
            }
        case DEPARTMENT_FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                departments: [...action.departments],
            }
        case DEPARTMENT_FETCH_DATA_FAIL:
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
        case DEPARTMENT_SELECT:
            return {
                ...state,
                modalVisibility: true,
                selectedDepartment: {
                    ...action.payload
                }
            }
        case CHANGE_MODAL_VISISBILITY:
            return {
                ...state,
                modalVisibility: !state.modalVisibility,
                selectedDepartment: state.modalVisibility === true ? {...state.selectedDepartment} : undefined
            }
        case DEPARTMENT_CHANGE_PAGE:
            return {
                ...state,
                pg_page: action.pg_page
            }
        case DEPARTMENT_SEARCH:
            return {
                ...state,
                search_key: action.search_key,
                pg_page: 0
            }
        case DEPARTMENT_SORT:
            if(state.sort === 1){
                return {
                    ...state,
                    sort: 0,
                    departments: [...state.departments].sort((a, b)=> a['name'] > b['name'] ? 1 : -1) //ascending
                }
            }
            else
                return {
                    ...state,
                    sort: 1,
                    departments: [...state.departments].sort((a, b)=> a['name'] < b['name'] ? 1 : -1) //descending
                }
        case DEPARTMENT_CHANGE_SELECTED_DEPARTMENT:
            return {
                ...state,
                selectedDepartment: {
                    ...state.selectedDepartment,
                    name: action.value
                }
            }
        default:
            return state
    }
}

export default department