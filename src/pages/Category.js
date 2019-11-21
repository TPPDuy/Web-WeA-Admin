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
            pageNo: 1,
            searchKey: "",
            selectedCategory: undefined,
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
                    isActive: 0,
                    createdTime: 1574153100000,
                    updatedTime: 1574197700000,
                },
                {
                    id: '05',
                    img: 'http://bit.ly/347m3KR',
                    name: 'Trái cây',
                    isActive: 1,
                    createdTime: 1574192100000,
                    updatedTime: 1574195700000,
                },
                {
                    id: '06',
                    img: 'http://bit.ly/2KG3F4h',
                    name: 'Đồ chiên',
                    isActive: 1,
                    createdTime: 1574196100000,
                    updatedTime: 1574199700000,
                },
                {
                    id: '07',
                    img: 'http://bit.ly/2DeZyrX',
                    name: 'Súp',
                    isActive: 1,
                    createdTime: 1574113100000,
                    updatedTime: 1574117700000,
                },
                {
                    id: '08',
                    img: 'http://bit.ly/35hDwQY',
                    name: 'Đồ nướng',
                    isActive: 0,
                    createdTime: 1574153100000,
                    updatedTime: 1574197700000,
                },
                {
                    id: '09',
                    img: 'http://bit.ly/2O4hhZ7',
                    name: 'Tráng miệng',
                    isActive: 1,
                    createdTime: 1574192100000,
                    updatedTime: 1574195700000,
                },
                {
                    id: '10',
                    img: 'http://bit.ly/2KFSh8w',
                    name: 'Nước ngọt',
                    isActive: 1,
                    createdTime: 1574196100000,
                    updatedTime: 1574199700000,
                },
                {
                    id: '11',
                    img: 'http://bit.ly/2rdNzYy',
                    name: 'Lẩu',
                    isActive: 1,
                    createdTime: 1574113100000,
                    updatedTime: 1574117700000,
                },
                {
                    id: '12',
                    img: 'http://bit.ly/2QELIHg',
                    name: 'Nước có cồn',
                    isActive: 1,
                    createdTime: 1574153100000,
                    updatedTime: 1574197700000,
                },
                {
                    id: '13',
                    img: 'http://bit.ly/35qwgm9',
                    name: 'Khăn lạnh',
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
        this.onChangePage = this.onChangePage.bind(this)
        this.onChangeStatus = this.onChangeStatus.bind(this)
        this.onInputSearchKey = this.onInputSearchKey.bind(this)
        this.onClickRecord = this.onClickRecord.bind(this)
        this.removeSelectedCategory = this.removeSelectedCategory.bind(this)
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
            if (prevState.selectedCategory.id != undefined && prevState.selectedCategory.id != null) {
                return ({
                    categories: prevState.categories.map(category =>
                        category.id == prevState.selectedCategory.id ? { ...category, name: prevState.selectedCategory.name, updatedTime: new Date() } : category)
                })
            }
            else {
                return ({
                    categories: [
                        ...prevState.categories,
                        {
                            ...prevState.selectedCategory,
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
        this.removeSelectedCategory()
    }
    onCancel() {
        this.removeSelectedCategory()
        this.changeModalVisibility()
    }
    removeSelectedCategory() {
        this.setState({
            selectedCategory: undefined
        })
    }
    onSort() {
        this.setState(prevState =>
            ({ categories: [...prevState.categories].sort((a, b) => a["name"] < b["name"] ? -1 : 1) }))
    }
    onRemove(id) {
        this.setState(prevState => ({
            categories: prevState.categories.filter(category => category.id != id)
        }))
    }
    onChangeStatus(id) {
        this.setState(prevState => ({
            categories: prevState.categories.map(category => category.id != id ? category : { ...category, isActive: category.isActive ? 0 : 1 })
        }))
    }
    onChangePage(newPageNo) {
        this.setState({ pageNo: newPageNo })
    }
    onInputSearchKey(key) {
        this.setState({ searchKey: key.target.value })
    }
    onClickRecord(category) {
        this.setState({
            selectedCategory: category,
            modalVisibility: category ? true : false
        })
    }
    onTextChange(value) {
        this.setState(prevState => ({
            selectedCategory: { ...prevState.selectedCategory, name: value }
        }))
    }

    render() {
        const { modalVisibility, categories, pageNo, searchKey, selectedCategory } = this.state
        const { onShowModal, onOk, onSort, onRemove, onChangePage, onChangeStatus, onInputSearchKey, onClickRecord, onCancel, onTextChange } = this
        return (
            <PageTemplate>
                <ComponentContainer selectedPart="Danh mục">
                    <div className="InputContainer">
                        <SearchAddForm onShowModal={onShowModal} onInputSearchKey={onInputSearchKey}></SearchAddForm>
                    </div>
                    <div style={{ width: '100%' }}>
                        <CategoryTableTitle onSort={onSort}></CategoryTableTitle>
                        <Categories categories={categories}
                            pageNo={pageNo}
                            searchKey={searchKey}
                            onRemove={onRemove}
                            onChangePage={onChangePage}
                            onChangeActiveStatus={onChangeStatus}
                            onClickRecord={onClickRecord}></Categories>
                        <CategoryModal selectedCategory={selectedCategory}
                            visibility={modalVisibility}
                            onCancel={onCancel}
                            onOk={onOk}
                            onTextChange={onTextChange}></CategoryModal>
                    </div>
                </ComponentContainer>
            </PageTemplate>
        )
    }
}

export default Category