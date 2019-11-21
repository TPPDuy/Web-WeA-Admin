import React, { Component } from 'react'
import { SearchAddForm } from '../components/SearchAddForm';
import { CategoryTableTitle } from '../components/TableTitle';
import ComponentContainer from '../components/ComponentContainer';
import PageTemplate from '../components/PageTemplate'
import { Categories } from '../components/ListRecords'
import { CategoryModal } from '../components/Modal';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisibility: false,
            categories: [
                {
                    id: '01',
                    img: 'http://bit.ly/37dkZr3',
                    name: 'Rau củ',
                    isActive: 1,
                    createdTime: 1574192100000,
                    updatedTime: 1574195700000,
                },
                {
                    id: '02',
                    img: 'http://bit.ly/37n9CN5',
                    name: 'Thịt',
                    isActive: 1,
                    createdTime: 1574196100000,
                    updatedTime: 1574199700000,
                },
                {
                    id: '03',
                    img: 'http://bit.ly/35kKsgb',
                    name: 'Hải sản',
                    isActive: 1,
                    createdTime: 1574113100000,
                    updatedTime: 1574117700000,
                },
                {
                    id: '04',
                    img: 'http://bit.ly/37oaD7M',
                    name: 'Bánh kẹo',
                    isActive: 1,
                    createdTime: 1574153100000,
                    updatedTime: 1574197700000,
                }
            ]
        }
        this.changeModalVisibility = this.changeModalVisibility.bind(this)
        this.onShowModal = this.onShowModal.bind(this)
        this.onOk = this.onOk.bind(this)
        this.onSort = this.onSort.bind(this)
        this.onRemove = this.onRemove.bind(this)
    }

    changeModalVisibility() {
        this.setState(prevState => ({ modalVisibility: !prevState.modalVisibility }))
    }
    onShowModal() {
        this.setState({ modalVisibility: true })
    }
    onOk() {
        console.log("Add / Update new category");
        this.changeModalVisibility()
    }

    onSort() {
        this.setState(prevState =>
            ({ categories: [...prevState.categories].sort((a, b) => a["name"] < b["name"] ? -1 : 1) }))
    }
    
    onRemove(id){
        console.log("Remove category: " + id)
    }
    // componentWillMount(){
    //     this.onSort()
    // }
    render() {
        const { modalVisibility, categories } = this.state
        const { changeModalVisibility, onShowModal, onOk, onSort, onRemove } = this
        return (
            <PageTemplate>
                <ComponentContainer selectedPart="Danh mục">
                    <div className="InputContainer">
                        <SearchAddForm onShowModal={onShowModal}></SearchAddForm>
                    </div>
                    <div style={{ width: '100%' }}>
                        <CategoryTableTitle onSort={onSort}></CategoryTableTitle>
                        <Categories categories={categories} onRemove={onRemove}></Categories>
                        <CategoryModal visibility={modalVisibility} onCancel={changeModalVisibility} onOk={onOk}></CategoryModal>
                    </div>
                </ComponentContainer>
            </PageTemplate>
        )
    }
}

export default Category