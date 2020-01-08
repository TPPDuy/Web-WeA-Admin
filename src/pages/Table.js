import React, { Component } from 'react'
import { SearchAddForm } from '../components/SearchAddForm';
import { TableTitle } from '../components/TableTitle';
import ComponentContainer from '../components/ComponentContainer';
import PageTemplate from '../components/PageTemplate'
import { Tables } from '../components/ListRecords'
import { TableModal } from '../components/Modal';
import { connect } from 'react-redux';
import {Spin} from 'antd'
import {changeModalVisibility, callFetchData, callAddData, callEditData, callDeleteData, callSearchData, tableSort, callChangePage, tableSelect, changeSelectedTableInfo} from '../actions/table'
class Table extends Component {
    componentDidMount(){
        console.log("fetch data")
        this.props.onFetchData()
    }

    componentWillReceiveProps(nextProps){
        if(this.props.pageNo != nextProps.pageNo)
            this.props.onFetchData()
    }

    render() {
        const { modalVisibility, tables, departments, pageNo, searchKey, selectedTable, loading } = this.props;
        const { onChangeModalVisibility, onAddData, onEditData, onSort, onDeleteData, onChangePage, onSearch, onClickRecord, onCancel, onChangeSelectedTableInfo } = this.props
        return (
            <PageTemplate paths={[
                "Nhà hàng","Bàn"
            ]}>
                <ComponentContainer selectedPart="Món ăn">
                    <div className="InputContainer">
                        <SearchAddForm onShowModal={onChangeModalVisibility} onInputSearchKey={onSearch}></SearchAddForm>
                    </div>
                    <div style={{ width: '100%' }}>
                        <TableTitle onSort={onSort}></TableTitle>
                        {loading ? 
                        <div style ={{marginTop:'20px'}}>
                            <Spin size="large" />
                        </div> :
                        <Tables tables={tables}
                            pageNo={pageNo}
                            searchKey={searchKey}
                            onRemove={onDeleteData}
                            onChangePage={onChangePage}
                            onChangeActiveStatus={onEditData}
                            onClickRecord={onClickRecord}></Tables>
                        }
                        <TableModal selectedTable={selectedTable}
                            departments = {departments}
                            visibility={modalVisibility}
                            onCancel={onCancel}
                            onAddData = {onAddData}
                            onEditData = {onEditData}
                            onTextChange={onChangeSelectedTableInfo}></TableModal>
                    </div>
                </ComponentContainer>
            </PageTemplate>
        )
    }
}

const mapStateToProps = (state) => ({
    modalVisibility: state.table.modalVisibility,
    tables: state.table.tables,
    departments: state.table.departments,
    pageNo: state.table.pg_page,
    searchKey: state.table.search_key,
    selectedTable: state.table.selectedTable,
    loading: state.table.loading
})

const mapDispatchToProps = (dispatch) => ({
    onChangeModalVisibility: () => dispatch(changeModalVisibility()),
    onFetchData: (searchKey, pageNo, pageSize) => dispatch(callFetchData(searchKey, pageNo, pageSize)),
    onAddData: (name, departmentId) => dispatch(callAddData(name, departmentId)),
    onEditData: (table) => dispatch(callEditData(table.id, table.name, table.department.id, table.is_active)),
    onDeleteData: (id) => dispatch(callDeleteData(id)),
    onSearch: (searchKey) => dispatch(callSearchData(searchKey)),
    onSort: () => dispatch(tableSort()),
    onChangePage: (pageNo) => dispatch(callChangePage(pageNo-1)),
    onClickRecord: (table) => dispatch(tableSelect(table)),
    onChangeSelectedTableInfo: (value) => dispatch(changeSelectedTableInfo(value))
})
export default connect(mapStateToProps, mapDispatchToProps)(Table)