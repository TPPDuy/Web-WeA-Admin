import React, { Component } from 'react'
import { SearchAddForm } from '../components/SearchAddForm';
import { CategoryTableTitle } from '../components/TableTitle';
import ComponentContainer from '../components/ComponentContainer';
import PageTemplate from '../components/PageTemplate'
import {Categories} from '../components/ListRecords'

class Category extends Component {
    render() {
        return (
            <PageTemplate>
                <ComponentContainer selectedPart="Danh mục">
                    <div className="InputContainer">
                        <SearchAddForm></SearchAddForm>
                    </div>
                    <div style={{ width: '100%' }}>
                        <CategoryTableTitle></CategoryTableTitle>
                        <Categories></Categories>
                    </div>
                </ComponentContainer>
            </PageTemplate>
        )
    }
}

export default Category