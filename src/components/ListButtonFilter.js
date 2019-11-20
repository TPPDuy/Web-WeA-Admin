import React, {Component} from 'react'
import Button from './StatisticTextButton'
class StatisticListButton extends Component{    
    render(){
        const {value, onChange} = this.props
        return(
            <React.Fragment>
                <Button id="1" selected={value} onClick={() => onChange("1")}>Hôm nay</Button>
                <Button id="2" selected={value} onClick={() => onChange("2")}>Hôm qua</Button>
                <Button id="3" selected={value} onClick={() => onChange("3")}>3 ngày trước</Button>
                <Button id="4" selected={value} onClick={() => onChange("4")}>1 tuần trước</Button>
                <Button id="5" selected={value} onClick={() => onChange("5")}>2 tuần trước</Button>
                <Button id="6" selected={value} onClick={() => onChange("6")}>1 tháng trước</Button>
                <Button id="7" selected={value} onClick={() => onChange("7")}>2 tháng trước</Button>
                <Button id="8" selected={value} onClick={() => onChange("8")}>Tất cả</Button>
            </React.Fragment>
        )
    }
}

export default StatisticListButton