import React, { Component } from 'react'
import { DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/vi_VN';
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const { RangePicker } = DatePicker;

export class DatePickerNoSpace extends Component {
    render() {
        const {
            onDateRange,
            onSubmit
        } = this.props
        
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

export class DatePickerWithSpace extends Component {
    render() {
        const {
            onDateRange,
            onSubmit
        } = this.props
        return (
            <React.Fragment>
                <RangePicker locale={locale} format='DD/MM/YYYY' onChange={onDateRange}/>
                <Button 
                    variant="light" 
                    style={{ 
                        backgroundColor: '#333333', 
                        border: '0px solid #00000000', 
                        boxSizing: 'border-box', 
                        borderRadius: '0', 
                        marginLeft: '1rem'}}
                    onClick={onSubmit}
                    >
                    <FontAwesomeIcon icon={faSearch} style={{ color: '#ffffff' }} />
                </Button>
            </React.Fragment>
        )
    }
}

