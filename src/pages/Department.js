import React, { Component } from 'react'
import { SearchAddForm } from '../components/SearchAddForm';
import { DepartmentTableTitle } from '../components/TableTitle';
import ComponentContainer from '../components/ComponentContainer';
import PageTemplate from '../components/PageTemplate'
import { Departments } from '../components/ListRecords'
import { DepartmentModal } from '../components/Modal';

class Department extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisibility: false,
            pageNo: 1,
            searchKey: "",
            selectedDepartment: undefined,
            departments: [
                {
                    id: '01',
                    name: 'Tầng trệt',
                    isActive: 1,
                    createdTime: 1574192100000,
                    updatedTime: 1574195700000,
                },
                {
                    id: '02',
                    name: 'Tầng 1',
                    isActive: 1,
                    createdTime: 1574196100000,
                    updatedTime: 1574199700000,
                },
                {
                    id: '03',
                    name: 'Tầng 2',
                    isActive: 1,
                    createdTime: 1574113100000,
                    updatedTime: 1574117700000,
                },
                {
                    id: '04',
                    name: 'Tầng 3',
                    isActive: 0,
                    createdTime: 1574153100000,
                    updatedTime: 1574197700000,
                },
            ]
        }
        this.changeModalVisibility = this.changeModalVisibility.bind(this)
        this.onShowModal = this.onShowModal.bind(this)
        this.onOk = this.onOk.bind(this)
        this.onSort = this.onSort.bind(this)
        this.onRemove = this.onRemove.bind(this)
        this.onChangePage = this.onChangePage.bind(this)
        this.onChangeStatus = this.onChangeStatus.bind(this)
        this.onInputSearchKey = this.onInputSearchKey.bind(this)
        this.onClickRecord = this.onClickRecord.bind(this)
        this.removeSelectedDepartment = this.removeSelectedDepartment.bind(this)
        this.onCancel = this.onCancel.bind(this)
        this.onTextChange = this.onTextChange.bind(this)
    }

    changeModalVisibility() {
        this.setState(prevState => ({ modalVisibility: !prevState.modalVisibility }))
    }
    onShowModal() {
        this.setState({ modalVisibility: true })
    }
    onOk(selected, title) {
        this.setState(prevState => {
            if (prevState.selectedDepartment.id != undefined && prevState.selectedDepartment.id != null) {
                return ({
                    departments: prevState.departments.map(department =>
                        department.id == prevState.selectedDepartment.id ? { ...department, name: prevState.selectedDepartment.name, updatedTime: new Date() } : department)
                })
            }
            else {
                return ({
                    departments: [
                        ...prevState.departments,
                        {
                            ...prevState.selectedDepartment,
                            id: Math.random(),
                            isActive: 1,
                            createdTime: new Date(),
                            updatedTime: new Date()
                        }
                    ]
                })
            }
        })
        this.changeModalVisibility()
        this.removeSelectedDepartment()
    }
    onCancel() {
        this.removeSelectedDepartment()
        this.changeModalVisibility()
    }
    removeSelectedDepartment() {
        this.setState({
            selectedCategory: undefined
        })
    }
    onSort() {
        this.setState(prevState =>
            ({ departments: [...prevState.departments].sort((a, b) => a["name"] < b["name"] ? -1 : 1) }))
    }
    onRemove(id) {
        this.setState(prevState => ({
            departments: prevState.departments.filter(department => department.id != id)
        }))
    }
    onChangeStatus(id) {
        this.setState(prevState => ({
            departments: prevState.departments.map(department => department.id != id ? department : { ...department, isActive: department.isActive ? 0 : 1 })
        }))
    }
    onChangePage(newPageNo) {
        this.setState({ pageNo: newPageNo })
    }
    onInputSearchKey(key) {
        this.setState({ searchKey: key.target.value })
    }
    onClickRecord(department) {
        this.setState({
            selectedDepartment: department,
            modalVisibility: department ? true : false
        })
    }
    onTextChange(value) {
        this.setState(prevState => ({
            selectedDepartment: { ...prevState.selectedDepartment, name: value }
        }))
    }

    render() {
        const { modalVisibility, departments, pageNo, searchKey, selectedDepartment } = this.state
        const { onShowModal, onOk, onSort, onRemove, onChangePage, onChangeStatus, onInputSearchKey, onClickRecord, onCancel, onTextChange } = this
        return (
            <PageTemplate>
                <ComponentContainer selectedPart="Danh mục">
                    <div className="InputContainer">
                        <SearchAddForm onShowModal={onShowModal} onInputSearchKey={onInputSearchKey}></SearchAddForm>
                    </div>
                    <div style={{ width: '100%' }}>
                        <DepartmentTableTitle onSort={onSort}></DepartmentTableTitle>
                        <Departments departments={departments}
                            pageNo={pageNo}
                            searchKey={searchKey}
                            onRemove={onRemove}
                            onChangePage={onChangePage}
                            onChangeActiveStatus={onChangeStatus}
                            onClickRecord={onClickRecord}></Departments>
                        <DepartmentModal selectedDepartment={selectedDepartment}
                            visibility={modalVisibility}
                            onCancel={onCancel}
                            onOk={onOk}
                            onTextChange={onTextChange}></DepartmentModal>
                    </div>
                </ComponentContainer>
            </PageTemplate>
        )
    }
}

export default Department