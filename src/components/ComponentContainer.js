import React from 'react';
export const ComponentContainer = ({selectedPart, children}) =>
    <div className="ComponentContainer">
        <div className="ComponentContainer-title">{selectedPart}</div>
        <div className="ComponentContainer-body">
            Children will be placed here
            {children}
        </div>
    </div>