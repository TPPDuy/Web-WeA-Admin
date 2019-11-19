import React, {Component} from 'react'
import Button from './StatisticTextButton'
class StatisticListButton extends Component{
    state = {
        dateFilter: 1
    }
    handleDateFilter = (id) => {
        this.setState({
            dateFilter: id
        })
        /*
        1: Hom nay
        2: Hom qua
        3: 3 ngay truoc
        4: 1 tuan truoc
        5: 2 tuan truoc
        6: 1 thang truoc
        7: 2 thang truoc
        8: Tat ca
        */
        //do something here to update the UI based on the filter value
    }
    render(){
        const {dateFilter} = this.state
        return(
            <React.Fragment>
                <Button id="1" selected={dateFilter} onClick={this.handleDateFilter}>Hôm nay</Button>
                <Button id="2" selected={dateFilter} onClick={this.handleDateFilter}>Hôm qua</Button>
                <Button id="3" selected={dateFilter} onClick={this.handleDateFilter}>3 ngày trước</Button>
                <Button id="4" selected={dateFilter} onClick={this.handleDateFilter}>1 tuần trước</Button>
                <Button id="5" selected={dateFilter} onClick={this.handleDateFilter}>2 tuần trước</Button>
                <Button id="6" selected={dateFilter} onClick={this.handleDateFilter}>1 tháng trước</Button>
                <Button id="7" selected={dateFilter} onClick={this.handleDateFilter}>2 tháng trước</Button>
                <Button id="8" selected={dateFilter} onClick={this.handleDateFilter}>Tất cả</Button>
            </React.Fragment>
        )
    }
}

export default StatisticListButton