import React, { Component } from 'react'
import Button from './StatisticTextButton'

const StatisticListButton = () => {

    const today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())

    let yesterday = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
    yesterday.setDate(yesterday.getDate() - 1);

    let threeDaysAgo = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

    let oneWeekAgo = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    let twoWeeksAgo = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);

    let oneMonthAgo = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
    oneMonthAgo.setDate(oneMonthAgo.getDate() - 30);

    let twoMonthsAgo = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
    twoMonthsAgo.setDate(twoMonthsAgo.getDate() - 60);

    return (
        <React.Fragment>
            <Button id="1" value={today}>Hôm nay</Button>
            <Button id="2" value={yesterday}>Hôm qua</Button>
            <Button id="3" value={threeDaysAgo}>3 ngày trước</Button>
            <Button id="4" value={oneWeekAgo}>1 tuần trước</Button>
            <Button id="5" value={twoWeeksAgo}>2 tuần trước</Button>
            <Button id="6" value={oneMonthAgo}>1 tháng trước</Button>
            <Button id="7" value={twoMonthsAgo}>2 tháng trước</Button>
            <Button id="0" value={""}>Tất cả</Button>
        </React.Fragment>
    )
}

export default StatisticListButton