import React, { Component } from 'react'
import { SearchAddForm } from '../components/SearchAddForm';
import { CategoryTableTitle } from '../components/TableTitle';
import ComponentContainer from '../components/ComponentContainer';
import PageTemplate from '../components/PageTemplate'
import {Categories} from '../components/ListRecords'
import { CategoryModal } from '../components/Modal';

class Category extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            modalVisibility: false
        }
        this.changeModalVisibility = this.changeModalVisibility.bind(this)
        this.onShowModal = this.onShowModal.bind(this)
        this.onOk = this.onOk.bind(this)
    }
    changeModalVisibility(){
        this.setState(prevState => ({ modalVisibility: !prevState.modalVisibility }))
    }
    onShowModal(){
        this.setState({modalVisibility: true})
    }
    onOk(){
        console.log("Add / Update new category");
        this.changeModalVisibility()
    }
    render() {
        const {modalVisibility} = this.state
        const {changeModalVisibility, onShowModal, onOk} = this
        return (
            <PageTemplate>
                <ComponentContainer selectedPart="Danh mục">
                    <div className="InputContainer">
                        <SearchAddForm onShowModal={onShowModal}></SearchAddForm>
                    </div>
                    <div style={{ width: '100%' }}>
                        <CategoryTableTitle></CategoryTableTitle>
                        <Categories></Categories>
                        <CategoryModal visibility={modalVisibility} onCancel={changeModalVisibility} onOk={onOk}></CategoryModal>
                    </div>
                </ComponentContainer>
            </PageTemplate>
        )
    }
}

export default Category