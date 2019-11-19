import React from 'react'

const StatisticTextButton = ({id, selected, onClick, children}) => {
    return(
        <div className={selected == id ? "StatisticTextButton mr-1 StatisticTextButton-active" : "StatisticTextButton mr-1 "} onClick={() => onClick(id)}>
             {children}
        </div>
    )
}

export default StatisticTextButton