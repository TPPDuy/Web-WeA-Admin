import React from 'react';
import { CategorySearchAdd } from './CategorySearchAdd';
import '../index.css'
import { CategoryTableTitle } from './CategoryTableTitle';
export const ComponentContainer = ({selectedPart, children}) =>
    <div className="ComponentContainer">
        <div className="ComponentContainer-title">{selectedPart}</div>
        <div className="ComponentContainer-body">
            <div className="InputContainer">
                <CategorySearchAdd></CategorySearchAdd>
            </div>
            <div style={{width:'100%'}}>
                <CategoryTableTitle></CategoryTableTitle>
            </div>
        </div>
    </div>