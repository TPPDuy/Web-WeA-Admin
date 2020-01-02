import React, { Component } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import Cascader from './Cascader'
import {DatePickerNoSpace as DatePicker} from './DateRangePicker'
import { connect } from 'react-redux'
import { handle_criteria_search } from '../actions/filter'


class SearchPanel extends Component {    
    state = {
        criteriaOption: '1',
        searchValue : '',
        startDate: undefined,
        endDate: undefined,
        options : [
            {
                value: '1',
                label: 'Mã hóa đơn'
            },
            {
                value: '2',
                label: 'Tổng tiền'
            },
            {
                value: '3',
                label: 'Nhân viên phục vụ'
            }
        ]
    }
    handleCascader = ([criteriaOption]) => {
        this.setState({
            criteriaOption
        })
    }
    handleSearch = (e) => {
        this.setState({
            searchValue: e.target.value
        })
    }
    handleDatePicker = ([startDate, endDate], date) => {
        if(typeof startDate !== "undefined"){
            this.setState({
                startDate: parseInt((startDate.toDate()).getTime()/1000),
                endDate: parseInt((endDate.toDate()).getTime()/1000)
            })
        }else{
            this.setState({
                startDate,
                endDate,
            })
        }
    }
    render() {
        const {
            options,
            criteriaOption,
            searchValue,
            startDate,
            endDate            
        } =  this.state
        const{
            handleSubmit
        } = this.props
        return (            
            <InputGroup >       
                <Cascader options={options} defaultValue={[criteriaOption]} allowClear="false" onChange={this.handleCascader} />         
                <FormControl
                    placeholder="Tìm kiếm"
                    aria-label="Tìm kiếm"
                    aria-describedby="basic-addon2"
                    style={{ border: '1px solid #000000', boxSizing: 'border-box' }}
                    value={searchValue} 
                    onChange={this.handleSearch}
                />
                <DatePicker onDateRange={this.handleDatePicker} onSubmit={() => handleSubmit(criteriaOption, searchValue, startDate, endDate)}/>
            </InputGroup>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    handleSubmit: (criteriaOption, 
        searchValue, 
        startDate, 
        endDate
        ) => dispatch(handle_criteria_search(criteriaOption, searchValue, startDate, endDate))
})
export default connect(
    null,
    mapDispatchToProps
)(SearchPanel)