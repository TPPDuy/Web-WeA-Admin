import React, { Component } from 'react'
import { CategorySearchAdd } from '../components/CategorySearchAdd';
import { CategoryTableTitle } from '../components/CategoryTableTitle';
import ComponentContainer from '../components/ComponentContainer';
import PageTemplate from '../components/PageTemplate'

class Category extends Component {
    render() {
        console.log('Category rendered');
        return(
            <PageTemplate>
                <ComponentContainer selectedPart="Danh mục">
                    <div className="InputContainer">
                        <CategorySearchAdd></CategorySearchAdd>
                    </div>
                    <div style={{ width: '100%' }}>
                        <CategoryTableTitle></CategoryTableTitle>
                    </div>
                </ComponentContainer>
            </PageTemplate>
        )
    }
}

export default Category