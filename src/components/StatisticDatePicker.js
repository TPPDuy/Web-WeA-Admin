import React, { Component } from 'react'
import { DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/vi_VN';
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const { RangePicker } = DatePicker;

class DatePickerGroup extends Component {
    state = {
        startDate: "",
        endDate: ""
    }
    handleChange = (date, [startDate, endDate]) => {
        this.setState({
            startDate,
            endDate
        })
    }
    render() {
        return (
            <React.Fragment>
                <RangePicker locale={locale} format='DD/MM/YYYY' onChange={this.handleChange}/>
                <Button variant="light" style={{ backgroundColor: '#333333', border: '0px solid #00000000', boxSizing: 'border-box', borderRadius: '0', marginLeft: '1rem' }}>
                    <FontAwesomeIcon icon={faSearch} style={{ color: '#ffffff' }} />
                </Button>
            </React.Fragment>
        )
    }
}

export default DatePickerGroup