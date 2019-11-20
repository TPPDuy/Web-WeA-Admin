import React, {Component} from 'react'
import Button from './StatisticTextButton'
class StatisticListButton extends Component{    
    constructor(props){
        super(props);
        const today = new Date();
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        let threeDaysAgo = new Date();
        threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
        let oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        let twoWeeksAgo = new Date();
        twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
        let oneMonthAgo = new Date();
        oneMonthAgo.setDate(oneMonthAgo.getDate() - 30);
        let twoMonthsAgo = new Date();
        twoMonthsAgo.setDate(twoMonthsAgo.getDate() - 60);
        this.state = {
            today,
            yesterday,
            threeDaysAgo,
            oneWeekAgo,
            twoWeeksAgo,
            oneMonthAgo,
            twoMonthsAgo
        }
    }
    render(){
        const {value, onChange} = this.props
        const {
            today,
            yesterday,
            threeDaysAgo,
            oneWeekAgo,
            twoWeeksAgo,
            oneMonthAgo,
            twoMonthsAgo
        } = this.state
        return(
            <React.Fragment>
                <Button id={today} selected={value} onClick={() => onChange(today)}>Hôm nay</Button>
                <Button id={yesterday} selected={value} onClick={() => onChange(yesterday)}>Hôm qua</Button>
                <Button id={threeDaysAgo} selected={value} onClick={() => onChange(threeDaysAgo)}>3 ngày trước</Button>
                <Button id={oneWeekAgo} selected={value} onClick={() => onChange(oneWeekAgo)}>1 tuần trước</Button>
                <Button id={twoWeeksAgo} selected={value} onClick={() => onChange(twoWeeksAgo)}>2 tuần trước</Button>
                <Button id={oneMonthAgo} selected={value} onClick={() => onChange(oneMonthAgo)}>1 tháng trước</Button>
                <Button id={twoMonthsAgo} selected={value} onClick={() => onChange(twoMonthsAgo)}>2 tháng trước</Button>
                <Button id="0" selected={value} onClick={() => onChange("0")}>Tất cả</Button>
            </React.Fragment>
        )
    }
}

export default StatisticListButton