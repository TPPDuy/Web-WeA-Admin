import React, { Component } from 'react'
import { Cascader } from 'antd'


class StatisticCascader extends Component {
    render() {
        const {
            options,
            allowClear, 
            onChange,
            defaultValue, 
            loading
        } = this.props
        return (
            <React.Fragment>
                <Cascader disabled={loading} allowClear={allowClear === 'true'} onChange={onChange} options={options} defaultValue={defaultValue} placeholder=""/>
            </React.Fragment>
        )
    }
}

export default StatisticCascader