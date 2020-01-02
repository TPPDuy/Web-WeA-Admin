import React, { Component } from 'react'
import { DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/vi_VN';
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { default_time_filter } from '../actions/filter'

const { RangePicker } = DatePicker

export class DatePickerNoSpace extends Component {
    render() {
        const { onSubmit, onDateRange } = this.props        
        return (
            <React.Fragment>
                <RangePicker locale={locale} format='DD/MM/YYYY' onChange={onDateRange}/>
                <Button 
                    variant="light" 
                    style={{ 
                        backgroundColor: '#333333', 
                        border: '0px solid #00000000', 
                        boxSizing: 'border-box', 
                        borderRadius: '0' }}
                    onClick={onSubmit} 
                    >
                    <FontAwesomeIcon icon={faSearch} style={{ color: '#ffffff' }} />
                </Button>
            </React.Fragment>
        )
    }
}

class UnconnectedDatePickerWithSpace extends Component {
    state = {
        startDate: null,
        endDate: null
    }
    handleChange = ([startDate, endDate], date) => {
        if(typeof startDate !== "undefined"){
            this.setState({
                startDate: startDate.toDate(),
                endDate: endDate.toDate()
            })
        }else{
            this.setState({
                startDate: null,
                endDate: null
            })
        }
    }
    render() {
        const { startDate, endDate } = this.state
        const { handleSubmit } = this.props
        return (
            <React.Fragment>
                <RangePicker locale={locale} format='DD/MM/YYYY' onChange={this.handleChange}/>
                <Button 
                    variant="light" 
                    style={{ 
                        backgroundColor: '#333333', 
                        border: '0px solid #00000000', 
                        boxSizing: 'border-box', 
                        borderRadius: '0', 
                        marginLeft: '1rem'}}
                    onClick={() => handleSubmit(startDate, endDate)}
                    >
                    <FontAwesomeIcon icon={faSearch} style={{ color: '#ffffff' }} />
                </Button>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps= dispatch => ({
    handleSubmit: (startDate, endDate) => dispatch(default_time_filter(startDate, endDate))
})

const ConnectedDatePickerWithSpace = connect(
    null,
    mapDispatchToProps
)(UnconnectedDatePickerWithSpace)

export const DatePickerWithSpace = () => <ConnectedDatePickerWithSpace/>



