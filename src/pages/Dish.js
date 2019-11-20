import React, { Component } from 'react'
import { SearchAddForm } from '../components/SearchAddForm';
import { DishTableTitle } from '../components/TableTitle';
import ComponentContainer from '../components/ComponentContainer';
import PageTemplate from '../components/PageTemplate'
import {Dishes} from '../components/ListRecords'
import { DishModal } from '../components/Modal';

class Dish extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisibility: false
        }
        this.changeModalVisibility = this.changeModalVisibility.bind(this);
        this.showModal = this.showModal.bind(this);
        this.onOk = this.onOk.bind(this)
    }

    changeModalVisibility(){
        this.setState(prevState => ({modalVisibility: !prevState.modalVisibility}))
    }
    showModal(){
        this.setState({modalVisibility: true})
    }
    onOk(){
        console.log("Add / Update new dish");
        this.changeModalVisibility()
    }
    render() {
        const {modalVisibility} = this.state;
        const {changeModalVisibility, showModal, onOk} = this
        return (
            <PageTemplate>
                <ComponentContainer selectedPart="Món ăn">
                    <div className="InputContainer">
                        <SearchAddForm onShowModal={showModal}></SearchAddForm>
                    </div>
                    <div style={{ width: '100%' }}>
                        <DishTableTitle></DishTableTitle>
                        <Dishes></Dishes>
                        <DishModal visibility = {modalVisibility} onCancel={changeModalVisibility} onOk={onOk}></DishModal>
                    </div>
                </ComponentContainer>
            </PageTemplate>
        )
    }
}

export default Dish