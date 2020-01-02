import {
    EMPLOYEE_FETCH_DATA,
    USER_TOTAL_NUMBER
} from '../actions/user'

const initUsers = () => ({
    employees: [],
    quantity: 0
})

const user = (state = initUsers(), action) => {
    switch(action.type){
        case EMPLOYEE_FETCH_DATA:
            return{
                ...state,
                employees:[
                    {
                        id: '5e0c250cfc13ae0bb1000000', //ID Nhan vien
                        name: 'Lisha Iglesias'
                    },
                    {
                        id: '5e0c250cfc13ae0bb1000001', //ID Nhan vien
                        name: 'Ansley Windmill'
                    },
                    {
                        id: '5e0c250cfc13ae0bb1000002', //ID Nhan vien
                        name: 'Lamond Knutsen'
                    },
                    {
                        id: '5e0c250cfc13ae0bb1000003', //ID Nhan vien
                        name: 'Odell Pipping'
                    },
                    {
                        id: '5e0c250cfc13ae0bb1000004', //ID Nhan vien
                        name: 'Harriet Fitzhenry'
                    }
                ]
            }
        case USER_TOTAL_NUMBER:
            return {
                ...state,
                quantity: 55
            }
        default: return state
    }
}

export default user