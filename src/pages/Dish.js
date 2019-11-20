import React, { Component } from 'react'
import { SearchAddForm } from '../components/SearchAddForm';
import { DishTableTitle } from '../components/DishTableTitle';
import ComponentContainer from '../components/ComponentContainer';
import PageTemplate from '../components/PageTemplate'
import {Dishes} from '../components/Dishes'

class Dish extends Component {
    render() {
        return (
            <PageTemplate>
                <ComponentContainer selectedPart="Món ăn">
                    <div className="InputContainer">
                        <SearchAddForm></SearchAddForm>
                    </div>
                    <div style={{ width: '100%' }}>
                        <DishTableTitle></DishTableTitle>
                        <Dishes></Dishes>
                    </div>
                </ComponentContainer>
            </PageTemplate>
        )
    }
}

export default Dish