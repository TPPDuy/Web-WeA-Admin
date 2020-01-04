import {
    EMPLOYEE_FETCH_DATA_BEGIN,
    EMPLOYEE_FETCH_DATA_SUCCESS,
    EMPLOYEE_FETCH_DATA_FAILURE,
    USER_TOTAL_NUMBER,
    USER_FETCH_DATA_BEGIN,
    USER_FETCH_DATA_SUCCESS,
    USER_FETCH_DATA_FAILURE,
    USER_PAGINATION,
    USER_SORT,
    USER_CHANGE_STATUS_BEGIN,
    USER_CHANGE_STATUS_SUCCESS,
    USER_CHANGE_STATUS_FAILURE,
    USER_CREATE_BEGIN,
    USER_CREATE_FAILURE,
    USER_CREATE_SUCCESS,
    USER_EDIT_BEGIN,
    USER_EDIT_FAILURE,
    USER_EDIT_SUCCESS,
    USER_OPEN_CREATE_MODAL,
    USER_CLOSE_CREATE_MODAL,
    USER_OPEN_EDIT_MODAL,
    USER_CLOSE_EDIT_MODAL
} from '../actions/user'

const initUsers = () => ({
    employees: {
        data: [],
        loading: true,
        error: null
    },
    users: {
        data: [],
        loading: true,
        error: null
    },
    quantity: 0,
    pageNo: 1,
    pageSize: 10,
    sortOrder: 0,
    loadingID: null,
    errorID: null,
    loading: false, // for edit, create, delete
    error: null,    // for edit, create, delete
    //
    createVisibility: false,
    editVisibility: false,
    selectedEmployee: {
        id: "",
        username: "",
        fullName: "",
        level: ""
    }
})

const user = (state = initUsers(), action) => {
    switch (action.type) {
        case EMPLOYEE_FETCH_DATA_BEGIN:
            return {
                ...state,
                employees: {
                    ...state.employees,
                    loading: true,
                    error: null
                }
            }
        case EMPLOYEE_FETCH_DATA_SUCCESS:

            return {
                ...state,
                employees: {
                    ...state.employees,
                    loading: false,
                    error: null,
                    data: action.data
                }
            }
        case EMPLOYEE_FETCH_DATA_FAILURE:
            return {
                ...state,
                employees: {
                    ...state.employees,
                    loading: false,
                    error: action.error,
                    data: []
                }
            }
        case USER_TOTAL_NUMBER:
            return {
                ...state,
                quantity: action.quantity
            }
        case USER_FETCH_DATA_BEGIN:
            return {
                ...state,
                users: {
                    ...state.users,
                    loading: true,
                    error: null
                }
            }
        case USER_FETCH_DATA_SUCCESS:
            return {
                ...state,
                users: {
                    ...state.users,
                    loading: false,
                    error: null,
                    data: action.data
                }
            }
        case USER_FETCH_DATA_FAILURE:
            return {
                ...state,
                users: {
                    ...state.users,
                    loading: false,
                    error: action.error,
                    data: []
                }
            }
        case USER_PAGINATION:
            return {
                ...state,
                pageNo: action.pageNo
            }
        case USER_SORT:
            return {
                ...state,
                sortOrder: state.sortOrder === 0 ? -1 : state.sortOrder * -1
            }
        case USER_CHANGE_STATUS_BEGIN:
            return {
                ...state,
                loadingID: action.id,
                errorID: null
            }
        case USER_CHANGE_STATUS_SUCCESS:
            return {
                ...state,
                loadingID: null,
                errorID: null
            }
        case USER_CHANGE_STATUS_FAILURE:
            return {
                ...state,
                loadingID: null,
                errorID: action.id
            }
        case USER_CREATE_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case USER_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            }
        case USER_CREATE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case USER_EDIT_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case USER_EDIT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            }
        case USER_EDIT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case USER_OPEN_CREATE_MODAL:
            return{
                ...state,
                createVisibility: true
            }
        case USER_CLOSE_CREATE_MODAL:
            return{
                ...state,
                createVisibility: false
            }
        case USER_OPEN_EDIT_MODAL:
            return{
                ...state,
                editVisibility: true,
                selectedEmployee: action.employee
            }
        case USER_CLOSE_EDIT_MODAL:
            return{
                ...state,
                editVisibility: false
            }
        default:
            return state
    }
}

export default user