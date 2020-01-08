import React, { Component } from 'react'
import { SearchAddForm } from '../components/SearchAddForm';
import { DishTableTitle } from '../components/TableTitle';
import ComponentContainer from '../components/ComponentContainer';
import PageTemplate from '../components/PageTemplate'
import { Dishes } from '../components/ListRecords'
import { DishModal } from '../components/Modal';
import { changeModalVisibility, callFetchData, changeSelectedDishInfo, callAddData, callEditData, callDeleteData, callSearchData, dishSort, callChangePage, dishSelect } from '../actions/dish';
import { connect } from 'react-redux';
import { Spin } from 'antd';

class Dish extends Component {

    componentDidMount(){
        console.log("fetch data")
        this.props.onFetchData()
    }

    componentWillReceiveProps(nextProps){
        if(this.props.pageNo != nextProps.pageNo)
            this.props.onFetchData()
    }

    render() {
        const { modalVisibility, dishes, categories, pageNo, searchKey, selectedDish, loading } = this.props;
        const {onChangeModalVisibility, onSort, onSearch, onChangePage, onAddData, onEditData, onDeleteData, onClickRecord, onChangeSelectedDishInfo} = this.props;
        console.log("dishes", dishes)
        return (
            <PageTemplate paths={[
                "Nhà hàng","Món ăn"
            ]}>
                <ComponentContainer selectedPart="Món ăn">
                    <div className="InputContainer">
                        <SearchAddForm onShowModal={onChangeModalVisibility} onInputSearchKey={onSearch}></SearchAddForm>
                    </div>
                    <div style={{ width: '100%' }}>
                        <DishTableTitle onSort={onSort}></DishTableTitle>
                        {loading ? 
                        <div style ={{marginTop:'20px'}}>
                            <Spin size="large" />
                        </div> :
                        <Dishes dishes={dishes}
                            pageNo={pageNo}
                            searchKey={searchKey}
                            onRemove={onDeleteData}
                            onChangePage={onChangePage}
                            onChangeActiveStatus={onEditData}
                            onClickRecord={onClickRecord}></Dishes>}
                        <DishModal selectedDish={selectedDish}
                            visibility={modalVisibility}
                            categories={categories}
                            onCancel={onChangeModalVisibility}
                            onAddData = {onAddData}
                            onEditData = {onEditData}
                            onTextChange = {onChangeSelectedDishInfo}></DishModal>
                    </div>
                </ComponentContainer>
            </PageTemplate>
        )
    }
}

const mapStateToProps = (state) => ({
    modalVisibility: state.dish.modalVisibility,
    dishes: state.dish.dishes,
    categories: state.dish.categories,
    pageNo: state.dish.pg_page,
    searchKey: state.dish.search_key,
    selectedDish: state.dish.selectedDish,
    loading: state.dish.loading
})

const mapDispatchToProps = (dispatch) => ({
    onChangeModalVisibility: () => dispatch(changeModalVisibility()),
    onFetchData: (searchKey, pageNo, pageSize) => dispatch(callFetchData(searchKey, pageNo, pageSize)),
    onAddData: (name, price, categoryId, img, describe) => dispatch(callAddData(name, price, categoryId, img, describe)),
    onEditData: (dish) => dispatch(callEditData(dish._id, dish.name, dish.price, dish.category._id, dish.image, dish.desc, dish.is_active)),
    onDeleteData: (id) => dispatch(callDeleteData(id)),
    onSearch: (searchKey) => dispatch(callSearchData(searchKey)),
    onSort: () => dispatch(dishSort()),
    onChangePage: (pageNo) => dispatch(callChangePage(pageNo-1)),
    onClickRecord: (dish) => dispatch(dishSelect(dish)),
    onChangeSelectedDishInfo: (value, field) => dispatch(changeSelectedDishInfo(value, field))
})
export default connect(mapStateToProps, mapDispatchToProps)(Dish)