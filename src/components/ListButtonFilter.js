import React, { Component } from 'react'
import Button from './StatisticTextButton'

const StatisticListButton = () => {    
    return (
        <React.Fragment>
            <Button id="1" >Hôm nay</Button>
            <Button id="2" >Hôm qua</Button>
            <Button id="3" >3 ngày trước</Button>
            <Button id="4" >1 tuần trước</Button>
            <Button id="5" >2 tuần trước</Button>
            <Button id="6" >1 tháng trước</Button>
            <Button id="7" >2 tháng trước</Button>
            <Button id="0" >Tất cả</Button>
        </React.Fragment>
    )
}

export default StatisticListButton