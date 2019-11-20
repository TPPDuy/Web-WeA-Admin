import React, { Component } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import Cascader from './Cascader'
import {DatePickerNoSpace as DatePicker} from './DateRangePicker'

class SearchPanel extends Component {
    options = [
        {
            value: '1',
            label: 'Mã hóa đơn'
        },
        {
            value: '2',
            label: 'Tổng tiền'
        },
        {
            value: '4',
            label: 'Nhân viên phục vụ'
        }
    ]
    render() {
        const {
            onSearchCriteria, 
            searchInput, 
            onSearchInput, 
            onDateRange, 
            onSubmit 
        } = this.props
        return (            
            <InputGroup >       
                <Cascader options={this.options} defaultValue={['1']} allowClear="false" onChange={onSearchCriteria} />         
                <FormControl
                    placeholder="Tìm kiếm"
                    aria-label="Tìm kiếm"
                    aria-describedby="basic-addon2"
                    style={{ border: '1px solid #000000', boxSizing: 'border-box' }}
                    value={searchInput} 
                    onChange={onSearchInput}/>
                <DatePicker onDateRange={onDateRange} onSubmit={onSubmit}/>
            </InputGroup>
        )
    }
}
export default SearchPanel