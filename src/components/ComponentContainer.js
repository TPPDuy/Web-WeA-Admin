import React from 'react';
import '../index.css'
const ComponentContainer = ({selectedPart, children}) =>
    <div className="ComponentContainer">
        <div className="ComponentContainer-title">{selectedPart}</div>
        <div className="ComponentContainer-body">
            {children}
        </div>
    </div>
export default ComponentContainer