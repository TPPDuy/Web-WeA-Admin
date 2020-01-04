import React, {Component} from 'react'
import PageTemplate from '../components/PageTemplate'
import ComponentContainer from '../components/ComponentContainer'
import {Row} from 'react-bootstrap'
import {EmployeeTableTitle} from '../components/TableTitle'
import {Employees} from '../components/ListRecords'
import { AddEmployeeModal, EditEmployeeModal} from '../components/Modal';
import { Modal, Spin} from 'antd';
import {connect} from 'react-redux'
import { 
    user_fetch_data, 
    handle_user_pagination, 
    user_sort, 
    get_user_total_number,
    handle_change_status,
    handle_create_user,
    handle_edit_user,
    handle_delete_user,
    user_open_create_modal,
    user_close_create_modal,
    user_open_edit_modal,
    user_close_edit_modal 
} from '../actions/user'
import {toast} from 'react-toastify'

const { confirm } = Modal;

class Employee extends Component{
    constructor(props){
        super(props)
        this.state = {
            createVisibility: false,
            editVisibility: false,
            selectedEmployee: {
                id: "",
                username: "",
                fullName: "",
                type: ""
            }            
        }
    }
    handleDeleteEmployeeModal = (id) => {
        const a = (id) => this.props.handleDeleteUser(id)
        confirm({
            title: 'Bạn có chắc chắn muốn xóa nhân viên này?',
            onOk() {
              a(id)
            },
            onCancel() {
              console.log('Cancel');
            }
          });
    }

    componentDidMount(){
        this.props.userFetchData()
        this.props.getNumberOfUser()
    }
    handleAddSubmit = (fullname, username, password, level) => {        
        if(fullname==="") toast.error('Vui lòng nhập tên đầy đủ')
        else if(username==="") toast.error('Vui lòng nhập tên đăng nhập')
        else if(password==="") toast.error('Vui lòng nhập mật khẩu')
        else if(level==="") toast.error('Vui lòng chọn loại nhân viên')
        else {
            this.props.handleAddUser(fullname, username, password, level)
        }
    }
    handleEditSubmit = (id, fullname, username, password, level) => {  
        if(fullname==="") toast.error('Vui lòng nhập tên đầy đủ')
        else if(username==="") toast.error('Vui lòng nhập tên đăng nhập')
        else if(password==="") toast.error('Vui lòng nhập mật khẩu')
        else if(level==="") toast.error('Vui lòng chọn loại nhân viên')
        else {
            this.props.handleEditUser(id, fullname, username, password, level)
        }
    }
    render(){
        const {
            employees,
            pageNo,
            sortOrder,
            loading,
            quantity,
            loadingID,
            errorID,
            createVisibility,
            editVisibility,
            selectedEmployee,
            modalLoading,
            handleSort,
            handleOpenAddEmployeeModal,
            handleCloseAddEmployeeModal,
            handleOpenEditEmployeeModal,
            handleCloseEditEmployeeModal,
            handlePagination,
            handleChangeStatus
        } = this.props
        return (
            <PageTemplate>
                <ComponentContainer selectedPart="Nhân viên">
                    <Row className="nomargin">
                        <div className="employee-create-btn" onClick={handleOpenAddEmployeeModal}>
                            <span>Khởi tạo</span>
                            <img src={'/images/circle.svg'} />
                        </div>
                    </Row>
                    <Row className="nomargin">
                        <EmployeeTableTitle onSort={handleSort}/>
                        {loading ? 
                            <div className="my-5 mx-auto"><Spin size="large"/></div> :
                            <Employees 
                                employees={employees}
                                pageNo={pageNo}
                                quantity={quantity}
                                handlePagination={handlePagination}
                                onEdit={handleOpenEditEmployeeModal}
                                onRemove={this.handleDeleteEmployeeModal}
                                dateSort={sortOrder}
                                onChangeActiveStatus={handleChangeStatus}
                                loadingID={loadingID}
                                errorID={errorID}
                            />
                        }
                        <AddEmployeeModal loading={modalLoading} visibility={createVisibility} onCancel={handleCloseAddEmployeeModal} onOK = {this.handleAddSubmit}/>
                        <EditEmployeeModal loading={modalLoading} visibility={editVisibility} onCancel={handleCloseEditEmployeeModal} selectedEmployee={selectedEmployee} onOK={this.handleEditSubmit}/>
                    </Row>
                </ComponentContainer>
            </PageTemplate>
        )
    }
}
const mapStateToProps = (state) => ({
    employees: state.user.users.data,
    loading: state.user.users.loading,
    pageNo: state.user.pageNo,
    pageSize: state.user.pageSize,
    sortOrder: state.user.sortOrder,
    quantity: state.user.quantity,
    loadingID: state.user.loadingID,
    errorID: state.user.errorID,
    createVisibility: state.user.createVisibility,
    editVisibility: state.user.editVisibility,
    selectedEmployee: state.user.selectedEmployee,
    modalLoading: state.user.loading
})
const mapDispatchToProps = (dispatch) => ({
    userFetchData: () => dispatch(user_fetch_data()),
    handlePagination: (pageNo, pageSize) => dispatch(handle_user_pagination(pageNo)),
    handleSort: () => dispatch(user_sort()),
    getNumberOfUser: () => dispatch(get_user_total_number()),
    handleChangeStatus: (id) => dispatch(handle_change_status(id)),
    handleAddUser: (fullname, username, password, level) => dispatch(handle_create_user(fullname, username, password, level)),
    handleEditUser: (id, fullname, username, password, level) => dispatch(handle_edit_user(id, fullname, username, password, level)),
    handleDeleteUser: (id) => dispatch(handle_delete_user(id)),
    handleOpenAddEmployeeModal: () => dispatch(user_open_create_modal()),
    handleCloseAddEmployeeModal: () => dispatch(user_close_create_modal()),
    handleOpenEditEmployeeModal: (employee) => dispatch(user_open_edit_modal(employee)),
    handleCloseEditEmployeeModal: () => dispatch(user_close_edit_modal())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Employee)