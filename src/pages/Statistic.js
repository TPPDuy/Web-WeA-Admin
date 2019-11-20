import React, { Component } from 'react'
import ComponentContainer from '../components/ComponentContainer';
import { Row, Col } from 'react-bootstrap'
import PageTemplate from '../components/PageTemplate'
import ListButton from '../components/ListButtonFilter'
import {DatePickerWithSpace as DatePicker} from '../components/DateRangePicker'
import Cascader from '../components/Cascader'
import Frame from '../components/StatisticFrame'

class Statistic extends Component {
    options = [
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
    render() {
        return (
            <PageTemplate>
                <ComponentContainer selectedPart="Thống kê">
                    <Row className="nomargin">
                        <Col lg="2" className="d-flex flex-row justify-content-start align-items-center nopadding">
                            <span style={{fontSize: '16px'}}>Ngày:</span>
                        </Col>
                        <Col lg="10" className="d-flex flex-row justify-content-start align-items-center nopadding">
                            <ListButton defaultValue="1"/>
                        </Col>
                    </Row>
                    <Row style={{ margin: '1rem 0rem' }} >
                        <Col lg="2" className="d-flex flex-row justify-content-start align-items-center nopadding">
                            <span style={{fontSize: '16px'}}>Chọn ngày:</span>
                        </Col>
                        <Col lg="10" className="d-flex flex-row justify-content-start align-items-center nopadding">
                            <DatePicker />
                        </Col>
                    </Row>
                    <div className='StatisticLine' />
                    <Row style={{ margin: '1rem 0rem' }} >
                        <Col lg="2" className="d-flex flex-row justify-content-start align-items-center nopadding">
                            <span style={{fontSize: '16px'}}>Nhân viên:</span>
                        </Col>
                        <Col lg="10" className="d-flex flex-row justify-content-start align-items-center nopadding">
                            <Cascader options={this.options} allowClear="true"/>
                        </Col>
                    </Row>
                    <div className='StatisticLine' />
                    <Row style={{ margin: '1rem 0rem' }} >
                        <div className="d-flex flex-row justify-content-between align-items-center w-100">
                            <Frame bgColor="#3498DB" url='/images/frame1.svg' title="Số hóa đơn" value="0" alt="Number of bill"/>
                            <Frame bgColor="#12CBC4" url='/images/frame2.svg' title="Doanh thu" value="0" alt="Revenue"/>
                            <Frame bgColor="#8C7AE6" url='/images/frame3.svg' title="Tổng nhân viên" value="40" alt="Number or employee"/>
                            <Frame bgColor="#34495E" url='/images/frame4.svg' title="Nhân viên mới" value="0" alt="New employee"/>
                        </div>
                    </Row>
                </ComponentContainer>
            </PageTemplate>
        )
    }
}

export default Statistic