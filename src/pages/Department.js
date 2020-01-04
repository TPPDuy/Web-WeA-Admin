import React, { Component } from 'react'
import { SearchAddForm } from '../components/SearchAddForm';
import { DepartmentTableTitle } from '../components/TableTitle';
import ComponentContainer from '../components/ComponentContainer';
import PageTemplate from '../components/PageTemplate'
import { Departments } from '../components/ListRecords'
import { DepartmentModal } from '../components/Modal';
import { Spin } from 'antd';
import { connect } from 'react-redux';
import {changeModalVisibility, callFetchData, changeSelectedDepartmentInfo, callAddData, callEditData, callDeleteData, callSearchData, departmentSort, callChangePage, departmentSelect} from '../actions/department'

class Department extends Component {
    
    componentDidMount(){
        this.props.onFetchData();
    }

    componentWillReceiveProps(nextProps){
        if(this.props.pageNo != nextProps.pageNo)
            this.props.onFetchData()
    }
    render() {
        const {modalVisibility, departments, pageNo, searchKey, selectedDepartment, loading} = this.props
        const {onChangeModalVisibility, onSort, onAddData, onEditData, onDeleteData, onSearch, onChangePage, onClickRecord, onChangeSelectedDepartmentInfo} = this.props
        return (
            <PageTemplate>
                <ComponentContainer selectedPart="Danh mục">
                    <div className="InputContainer">
                        <SearchAddForm onShowModal={onChangeModalVisibility} onInputSearchKey={onSearch}></SearchAddForm>
                    </div>
                    <div style={{ width: '100%' }}>
                        <DepartmentTableTitle onSort={onSort}></DepartmentTableTitle>
                        {loading ?
                        <div style ={{marginTop:'20px'}}>
                            <Spin size="large" />
                        </div> :
                        <Departments departments={departments}
                            pageNo={pageNo}
                            searchKey={searchKey}
                            onRemove={onDeleteData}
                            onChangePage={onChangePage}
                            onChangeActiveStatus={onEditData}
                            onClickRecord={onClickRecord}></Departments>
                        }
                        <DepartmentModal selectedDepartment={selectedDepartment}
                            visibility={modalVisibility}
                            onCancel={onChangeModalVisibility}
                            onAddData = {onAddData}
                            onEditData = {onEditData}
                            onTextChange={onChangeSelectedDepartmentInfo}></DepartmentModal>
                    </div>
                </ComponentContainer>
            </PageTemplate>
        )
    }
}
const mapStateToProps = (state) => ({
    modalVisibility: state.department.modalVisibility,
    departments: state.department.departments,
    pageNo: state.department.pg_page,
    searchKey: state.department.search_key,
    selectedDepartment: state.department.selectedDepartment,
    loading: state.department.loading
})

const mapDispatchToProps = (dispatch) => ({
    onChangeModalVisibility: () => dispatch(changeModalVisibility()),
    onFetchData: (searchKey, pageNo, pageSize) => dispatch(callFetchData(searchKey, pageNo, pageSize)),
    onAddData: (name) => dispatch(callAddData(name)),
    onEditData: (department) => dispatch(callEditData(department.id, department.name, department.is_active)),
    onDeleteData: (id) => dispatch(callDeleteData(id)),
    onSearch: (searchKey) => dispatch(callSearchData(searchKey)),
    onSort: () => dispatch(departmentSort()),
    onChangePage: (pageNo) => dispatch(callChangePage(pageNo-1)),
    onClickRecord: (department) => dispatch(departmentSelect(department)),
    onChangeSelectedDepartmentInfo: (value) => dispatch(changeSelectedDepartmentInfo(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Department)