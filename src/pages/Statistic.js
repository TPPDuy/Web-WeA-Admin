import React, { Component } from 'react'
import ComponentContainer from '../components/ComponentContainer';
import { Row, Col } from 'react-bootstrap'
import PageTemplate from '../components/PageTemplate'
import ListButton from '../components/StatisticListButton'
import DatePicker from '../components/StatisticDatePicker'
import Cascader from '../components/StatisticCascader'
import Frame from '../components/StatisticFrame'

class Statistic extends Component {
    render() {
        return (
            <PageTemplate>
                <ComponentContainer selectedPart="Thống kê">
                    <Row className="nomargin">
                        <Col lg="2" className="d-flex flex-row justify-content-start align-items-center nopadding">
                            <span>Ngày:</span>
                        </Col>
                        <Col lg="10" className="d-flex flex-row justify-content-start align-items-center nopadding">
                            <ListButton />
                        </Col>
                    </Row>
                    <Row style={{ margin: '1rem 0rem' }} >
                        <Col lg="2" className="d-flex flex-row justify-content-start align-items-center nopadding">
                            <span>Chọn ngày:</span>
                        </Col>
                        <Col lg="10" className="d-flex flex-row justify-content-start align-items-center nopadding">
                            <DatePicker />
                        </Col>
                    </Row>
                    <div className='StatisticLine' />
                    <Row style={{ margin: '1rem 0rem' }} >
                        <Col lg="2" className="d-flex flex-row justify-content-start align-items-center nopadding">
                            <span>Nhân viên:</span>
                        </Col>
                        <Col lg="10" className="d-flex flex-row justify-content-start align-items-center nopadding">
                            <Cascader />
                        </Col>
                    </Row>
                    <div className='StatisticLine' />
                    <Row style={{ margin: '1rem 0rem' }} >
                        <div className="d-flex flex-row justify-content-between align-items-center w-100">
                            <Frame bgColor="#3498DB" url='/images/frame1.svg' title="Số đơn hàng" value="0"/>
                            <Frame bgColor="#12CBC4" url='/images/frame2.svg' title="Doanh thu" value="0"/>
                            <Frame bgColor="#8C7AE6" url='/images/frame3.svg' title="Tổng nhân viên" value="40"/>
                            <Frame bgColor="#34495E" url='/images/frame4.svg' title="Nhân viên mới" value="0"/>
                        </div>
                    </Row>
                </ComponentContainer>
            </PageTemplate>
        )
    }
}

export default Statistic