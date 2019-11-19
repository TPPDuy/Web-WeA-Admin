import React, { Component } from 'react'
import { Cascader } from 'antd'


class StatisticCascader extends Component {
    state = {
        value: "",
        options:[
            {
                value: 'A', //ID Nhan vien
                label: 'Nguyen Van A'
            },
            {
                value: 'H', //ID Nhan vien
                label: 'Tran Thi Thu H'
            },
            {
                value: 'D', //ID Nhan vien
                label: 'Le Tran Bao D'
            },
            {
                value: 'D', //ID Nhan vien
                label: 'Le Tran Bao D'
            },
            {
                value: 'D', //ID Nhan vien
                label: 'Le Tran Bao D'
            },
            {
                value: 'D', //ID Nhan vien
                label: 'Le Tran Bao D'
            },
            {
                value: 'D', //ID Nhan vien
                label: 'Le Tran Bao D'
            },
            {
                value: 'D', //ID Nhan vien
                label: 'Le Tran Bao D'
            },
        ]
    }
    handleChange = (value) => {
        this.setState({
            value
        })
    }
    render() {
        const {options} = this.state;
        return (
            <React.Fragment>
                <Cascader onChange={this.handleChange} options={options} placeholder=""/>
            </React.Fragment>
        )
    }
}

export default StatisticCascader