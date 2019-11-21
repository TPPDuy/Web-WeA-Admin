import React, { Component } from 'react'
import { SearchAddForm } from '../components/SearchAddForm';
import { DishTableTitle } from '../components/TableTitle';
import ComponentContainer from '../components/ComponentContainer';
import PageTemplate from '../components/PageTemplate'
import { Dishes } from '../components/ListRecords'
import { DishModal } from '../components/Modal';

class Dish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisibility: false,
            pageNo: 1,
            searchKey: "",
            selectedDish: undefined,
            dishes: [
                {
                    id: '01',
                    img: 'http://bit.ly/2Qvxlox',
                    name: 'Bò lúc lắc',
                    category: {
                        name: 'Thịt'
                    },
                    price: 320000,
                    isActive: 1,
                    createdTime: 1574192100000,
                    updatedTime: 1574195700000,
                    describe: ""
                },
                {
                    id: '02',
                    img: 'http://bit.ly/2pxTQxU',
                    name: 'Gà nướng',
                    category: {
                        name: 'Thịt'
                    },
                    price: 250000,
                    isActive: 1,
                    createdTime: 1574196100000,
                    updatedTime: 1574199700000,
                    describe: ""
                },
                {
                    id: '03',
                    img: 'http://bit.ly/2XudqaV',
                    name: 'Sò lông nướng',
                    category: {
                        name: 'Hải sản'
                    },
                    price: 80000,
                    isActive: 1,
                    createdTime: 1574113100000,
                    updatedTime: 1574117700000,
                    describe: ""
                },
                {
                    id: '04',
                    img: 'http://bit.ly/344b314',
                    name: 'Salad gà',
                    category: {
                        name: 'Rau củ'
                    },
                    price: 65000,
                    isActive: 1,
                    createdTime: 1574213100000,
                    updatedTime: 1574917700000,
                    describe: ""
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
        this.removeSelectedDish = this.removeSelectedDish.bind(this)
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
            if (prevState.selectedDish.id != undefined && prevState.selectedDish.id != null) {
                return ({
                    dishes: prevState.dishes.map(dish =>
                        (dish.id == prevState.selectedDish.id) ?
                            {
                                ...dish,
                                name: prevState.selectedDish.name,
                                price: prevState.selectedDish.price,
                                category: prevState.selectedDish.category,
                                describe: prevState.selectedDish.describe
                            } : dish)
                })
            }
            else {
                return ({
                    dishes: [
                        ...prevState.dishes,
                        {
                            ...prevState.selectedDish,
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
        this.removeSelectedDish()
    }
    onCancel() {
        this.removeSelectedDish()
        this.changeModalVisibility()
    }
    onSort() {
        this.setState(prevState => ({
            dishes: [...prevState.dishes].sort((a, b) => a["price"] < b["price"] ? -1 : 1)
        }))
    }
    removeSelectedDish() {
        this.setState({
            selectedDish: undefined
        })
    }
    onRemove(id) {
        this.setState(prevState => ({
            dishes: prevState.dishes.filter(dish => dish.id != id)
        }))
    }
    onChangeStatus(id) {
        this.setState(prevState => ({
            dishes: prevState.dishes.map(dish => dish.id != id ? dish : { ...dish, isActive: dish.isActive ? 0 : 1 })
        }))
    }
    onChangePage(newPageNo) {
        this.setState({ pageNo: newPageNo })
    }
    onInputSearchKey(key) {
        this.setState({ searchKey: key.target.value })
    }
    onClickRecord(dish) {
        this.setState({
            selectedDish: dish,
            modalVisibility: dish ? true : false
        })
    }
    onTextChange(value, field) {
        switch (field) {
            case "name":
                this.setState(prevState => ({
                    selectedDish: { ...prevState.selectedDish, name: value }
                }));
                break;
            case "price":
                this.setState(prevState => ({
                    selectedDish: { ...prevState.selectedDish, price: value }
                }));
                break;
            case "describe":
                this.setState(prevState => ({
                    selectedDish: { ...prevState.selectedDish, describe: value }
                }));
                break;
        }

    }
    render() {
        const { modalVisibility, dishes, pageNo, searchKey, selectedDish } = this.state;
        const { onShowModal, onOk, onSort, onRemove, onChangePage, onChangeStatus, onInputSearchKey, onClickRecord, onCancel, onTextChange } = this
        return (
            <PageTemplate>
                <ComponentContainer selectedPart="Món ăn">
                    <div className="InputContainer">
                        <SearchAddForm onShowModal={onShowModal} onInputSearchKey={onInputSearchKey}></SearchAddForm>
                    </div>
                    <div style={{ width: '100%' }}>
                        <DishTableTitle onSort={onSort}></DishTableTitle>
                        <Dishes dishes={dishes}
                            pageNo={pageNo}
                            searchKey={searchKey}
                            onRemove={onRemove}
                            onChangePage={onChangePage}
                            onChangeActiveStatus={onChangeStatus}
                            onClickRecord={onClickRecord}></Dishes>
                        <DishModal selectedDish={selectedDish}
                            visibility={modalVisibility}
                            onCancel={onCancel}
                            onOk={onOk}
                            onTextChange={onTextChange}></DishModal>
                    </div>
                </ComponentContainer>
            </PageTemplate>
        )
    }
}

export default Dish