import React, { Component } from 'react'
import { Cascader } from 'antd'


class StatisticCascader extends Component {
    state = {
        value: this.props.defaultValue,
        options: this.props.options
    }
    handleChange = (value) => {
        this.setState({
            value
        })
    }
    render() {
        const {options, value} = this.state;
        const {allowClear, onChange} = this.props
        return (
            <React.Fragment>
                <Cascader allowClear={allowClear === 'true'} onChange={onChange} options={options} defaultValue={value} placeholder=""/>
            </React.Fragment>
        )
    }
}

export default StatisticCascader