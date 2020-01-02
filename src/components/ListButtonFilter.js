import React, { Component } from 'react'
import Button from './StatisticTextButton'

const StatisticListButton = ({type}) => {    
    return (
        <React.Fragment>
            <Button id="1" type={type}>Hôm nay</Button>
            <Button id="2" type={type}>Hôm qua</Button>
            <Button id="3" type={type}>3 ngày trước</Button>
            <Button id="4" type={type}>1 tuần trước</Button>
            <Button id="5" type={type}>2 tuần trước</Button>
            <Button id="6" type={type}>1 tháng trước</Button>
            <Button id="7" type={type}>2 tháng trước</Button>
            <Button id="0" type={type}>Tất cả</Button>
        </React.Fragment>
    )
}

export default StatisticListButton