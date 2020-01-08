import React, { Component } from 'react'
import { SearchAddForm } from '../components/SearchAddForm';
import { CategoryTableTitle } from '../components/TableTitle';
import ComponentContainer from '../components/ComponentContainer';
import PageTemplate from '../components/PageTemplate'
import { Categories } from '../components/ListRecords'
import { CategoryModal } from '../components/Modal';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import {changeModalVisibility, callFetchData, changeSelectedCategoryInfo, callAddData, callEditData, callDeleteData, callSearchData, categorySort, callChangePage, categorySelect} from '../actions/category'
class Category extends Component {

    componentDidMount(){
        this.props.onFetchData()
    }

    componentWillReceiveProps(nextProps){
        if(this.props.pageNo != nextProps.pageNo)
            this.props.onFetchData()
    }
    render() {
        const { modalVisibility, categories, pageNo, searchKey, selectedCategory, loading } = this.props;
        const {onChangeModalVisibility, onSort, onSearch, onChangePage, onAddData, onEditData, onDeleteData, onClickRecord, onChangeSelectedCategoryInfo} = this.props;
        return (
            <PageTemplate paths={[
                "Nhà hàng","Danh mục"
            ]}>
                <ComponentContainer selectedPart="Danh mục">
                    <div className="InputContainer">
                        <SearchAddForm onShowModal={onChangeModalVisibility} onInputSearchKey={onSearch}></SearchAddForm>
                    </div>
                    <div style={{ width: '100%' }}>
                        <CategoryTableTitle onSort={onSort}></CategoryTableTitle>
                        {loading ?
                        <div style ={{marginTop:'20px'}}>
                            <Spin size="large" />
                        </div> :
                        <Categories categories={categories}
                            pageNo={pageNo}
                            searchKey={searchKey}
                            onRemove={onDeleteData}
                            onChangePage={onChangePage}
                            onChangeActiveStatus={onEditData}
                            onClickRecord={onClickRecord}></Categories>
                        }
                        <CategoryModal selectedCategory={selectedCategory}
                            visibility={modalVisibility}
                            onCancel={onChangeModalVisibility}
                            onAddData = {onAddData}
                            onEditData = {onEditData}
                            onTextChange={onChangeSelectedCategoryInfo}></CategoryModal>
                    </div>
                </ComponentContainer>
            </PageTemplate>
        )
    }
}

const mapStateToProps = (state) => ({
    modalVisibility: state.category.modalVisibility,
    categories: state.category.categories,
    pageNo: state.category.pg_page,
    searchKey: state.category.search_key,
    selectedCategory: state.category.selectedCategory,
    loading: state.category.loading
})

const mapDispatchToProps = (dispatch) => ({
    onChangeModalVisibility: () => dispatch(changeModalVisibility()),
    onFetchData: (searchKey, pageNo, pageSize) => dispatch(callFetchData(searchKey, pageNo, pageSize)),
    onAddData: (name, img) => dispatch(callAddData(name, img)),
    onEditData: (category) => dispatch(callEditData(category.id, category.name, category.image, category.isActive)),
    onDeleteData: (id) => dispatch(callDeleteData(id)),
    onSearch: (searchKey) => dispatch(callSearchData(searchKey)),
    onSort: () => dispatch(categorySort()),
    onChangePage: (pageNo) => dispatch(callChangePage(pageNo-1)),
    onClickRecord: (category) => dispatch(categorySelect(category)),
    onChangeSelectedCategoryInfo: (value) => dispatch(changeSelectedCategoryInfo(value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Category)