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
                }
            ]
        }
        this.changeModalVisibility = this.changeModalVisibility.bind(this);
        this.showModal = this.showModal.bind(this);
        this.onOk = this.onOk.bind(this)
        this.onSort = this.onSort.bind(this)
        this.onRemove = this.onRemove.bind(this)
    }

    changeModalVisibility() {
        this.setState(prevState => ({ modalVisibility: !prevState.modalVisibility }))
    }
    showModal() {
        this.setState({ modalVisibility: true })
    }
    onOk() {
        console.log("Add / Update new dish");
        this.changeModalVisibility()
    }
    onSort(){
        this.setState(prevState => ({
            dishes: [...prevState.dishes].sort((a, b) => a["price"] < b["price"] ? -1 : 1)
        }))
    }
    onRemove(id){
        console.log("Remove dish: " + id)
    }
    render() {
        const { modalVisibility, dishes } = this.state;
        const { changeModalVisibility, showModal, onOk, onSort, onRemove } = this
        return (
            <PageTemplate>
                <ComponentContainer selectedPart="Món ăn">
                    <div className="InputContainer">
                        <SearchAddForm onShowModal={showModal}></SearchAddForm>
                    </div>
                    <div style={{ width: '100%' }}>
                        <DishTableTitle onSort={onSort}></DishTableTitle>
                        <Dishes dishes={dishes} onRemove={onRemove}></Dishes>
                        <DishModal visibility={modalVisibility} onCancel={changeModalVisibility} onOk={onOk}></DishModal>
                    </div>
                </ComponentContainer>
            </PageTemplate>
        )
    }
}

export default Dish