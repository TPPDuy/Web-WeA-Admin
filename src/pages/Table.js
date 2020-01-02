import React, { Component } from 'react'
import { SearchAddForm } from '../components/SearchAddForm';
import { TableTitle } from '../components/TableTitle';
import ComponentContainer from '../components/ComponentContainer';
import PageTemplate from '../components/PageTemplate'
import { Tables } from '../components/ListRecords'
import { TableModal } from '../components/Modal';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisibility: false,
            pageNo: 1,
            searchKey: "",
            selectedTable: undefined,
            tables: [
                {
                    id: '01',
                    name: '101',
                    department: {
                        name: 'Tầng trệt'
                    },
                    isActive: 1,
                    createdTime: 1574192100000,
                    updatedTime: 1574195700000,
                },
                {
                    id: '02',
                    name: '102',
                    department: {
                        name: 'Tầng trệt'
                    },
                    isActive: 1,
                    createdTime: 1574196100000,
                    updatedTime: 1574199700000,
                },
                {
                    id: '03',
                    name: '203',
                    department: {
                        name: 'Tầng 1'
                    },
                    isActive: 1,
                    createdTime: 1574113100000,
                    updatedTime: 1574117700000,
                },
                {
                    id: '04',
                    name: '204',
                    department: {
                        name: 'Tầng 2'
                    },
                    isActive: 1,
                    createdTime: 1574213100000,
                    updatedTime: 1574917700000,
                }
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
        this.removeSelectedTable = this.removeSelectedTable.bind(this)
        this.onCancel = this.onCancel.bind(this)
        this.onTextChange = this.onTextChange.bind(this)
    }

    changeModalVisibility() {
        this.setState(prevState => ({ modalVisibility: !prevState.modalVisibility }))
    }
    onShowModal() {
        this.setState({ modalVisibility: true })
    }
    onOk() {
        this.setState(prevState => {
            if (prevState.selectedTable.id != undefined && prevState.selectedTable.id != null) {
                return ({
                    tables: prevState.tables.map(table =>
                        (table.id == prevState.selectedTable.id) ?
                            {
                                ...table,
                                name: prevState.selectedTable.name,
                                price: prevState.selectedTable.price,
                                department: prevState.selectedTable.department,
                            } : table)
                })
            }
            else {
                return ({
                    tables: [
                        ...prevState.tables,
                        {
                            ...prevState.selectedTable,
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
        this.removeSelectedTable()
    }
    onCancel() {
        this.removeSelectedTable()
        this.changeModalVisibility()
    }
    onSort() {
        this.setState(prevState => ({
            tables: [...prevState.tables].sort((a, b) => a["name"] < b["name"] ? -1 : 1)
        }))
    }
    removeSelectedTable() {
        this.setState({
            selectedTable: undefined
        })
    }
    onRemove(id) {
        this.setState(prevState => ({
            tables: prevState.tables.filter(table => table.id != id)
        }))
    }
    onChangeStatus(id) {
        this.setState(prevState => ({
            tables: prevState.tables.map(table => table.id != id ? table : { ...table, isActive: table.isActive ? 0 : 1 })
        }))
    }
    onChangePage(newPageNo) {
        this.setState({ pageNo: newPageNo })
    }
    onInputSearchKey(key) {
        this.setState({ searchKey: key.target.value })
    }
    onClickRecord(table) {
        this.setState({
            selectedTable: table,
            modalVisibility: table ? true : false
        })
    }
    onTextChange(value, field) {
        this.setState(prevState => ({
            selectedTable: { ...prevState.selectedTable, name: value }
        }));

    }
    render() {
        const { modalVisibility, tables, pageNo, searchKey, selectedTable } = this.state;
        const { onShowModal, onOk, onSort, onRemove, onChangePage, onChangeStatus, onInputSearchKey, onClickRecord, onCancel, onTextChange } = this
        return (
            <PageTemplate>
                <ComponentContainer selectedPart="Món ăn">
                    <div className="InputContainer">
                        <SearchAddForm onShowModal={onShowModal} onInputSearchKey={onInputSearchKey}></SearchAddForm>
                    </div>
                    <div style={{ width: '100%' }}>
                        <TableTitle onSort={onSort}></TableTitle>
                        <Tables tables={tables}
                            pageNo={pageNo}
                            searchKey={searchKey}
                            onRemove={onRemove}
                            onChangePage={onChangePage}
                            onChangeActiveStatus={onChangeStatus}
                            onClickRecord={onClickRecord}></Tables>
                        <TableModal selectedTable={selectedTable}
                            visibility={modalVisibility}
                            onCancel={onCancel}
                            onOk={onOk}
                            onTextChange={onTextChange}></TableModal>
                    </div>
                </ComponentContainer>
            </PageTemplate>
        )
    }
}

export default Table