import React, { Component } from 'react'
import ComponentContainer from '../components/ComponentContainer';
import { Row, Col } from 'react-bootstrap'
import PageTemplate from '../components/PageTemplate'
import ListButton from '../components/ListButtonFilter'
import { DatePickerWithSpace as DatePicker } from '../components/DateRangePicker'
import Cascader from '../components/Cascader'
import Frame from '../components/StatisticFrame'
import { connect } from 'react-redux'
import { handle_employee_filter } from '../actions/filter'
import { bill_statistic } from '../actions/bill'
import { employee_fetch_data, get_user_total_number} from '../actions/user'
import { Spin } from 'antd'
import { formatNumber } from '../utils/utils'

class Statistic extends Component {
    componentDidMount(){
        this.props.employeeFetchData()
        this.props.billStatistic()
        this.props.getNumberOfUser()
    }
    render() {
        const {
            employees,
            numberOfUsers,
            quantity,
            total,
            handleEmployee,
            loading,
            employeeLoading
        } = this.props
        
        let options = []
        employees.forEach((e, index) => options.push({
            value: e._id ,
            label: e.fullname,
        }))
        return (
            <PageTemplate>
                <ComponentContainer selectedPart="Thống kê">
                    <Row className="nomargin">
                        <Col lg="2" className="d-flex flex-row justify-content-start align-items-center nopadding">
                            <span style={{ fontSize: '16px' }}>Ngày:</span>
                        </Col>
                        <Col lg="10" className="d-flex flex-row justify-content-start align-items-center nopadding">
                            <ListButton type="1"/>
                        </Col>
                    </Row>
                    <Row style={{ margin: '1rem 0rem' }} >
                        <Col lg="2" className="d-flex flex-row justify-content-start align-items-center nopadding">
                            <span style={{ fontSize: '16px' }}>Chọn ngày:</span>
                        </Col>
                        <Col lg="10" className="d-flex flex-row justify-content-start align-items-center nopadding">
                            <DatePicker />
                        </Col>
                    </Row>
                    <div className='StatisticLine' />
                    <Row style={{ margin: '1rem 0rem' }} >
                        <Col lg="2" className="d-flex flex-row justify-content-start align-items-center nopadding">
                            <span style={{ fontSize: '16px' }}>Nhân viên:</span>
                        </Col>
                        <Col lg="10" className="d-flex flex-row justify-content-start align-items-center nopadding">
                            <Cascader loading={employeeLoading} options={options} allowClear="true" onChange={handleEmployee}/>
                            {employeeLoading && <div className="ml-3"><Spin size="small"/></div>}
                        </Col>
                    </Row>
                    <div className='StatisticLine' />
                    <Row style={{ margin: '1rem 0rem' }} >
                        <div className="d-flex flex-row justify-content-between align-items-center w-100">
                            <Frame bgColor="#3498DB" url='/images/frame1.svg' title="Số hóa đơn" value={quantity} alt="Number of bill" loading={loading}/>
                            <Frame bgColor="#12CBC4" url='/images/frame2.svg' title="Doanh thu" value={formatNumber(total)} alt="Revenue" loading={loading}/>
                            <Frame bgColor="#8C7AE6" url='/images/frame3.svg' title="Tổng nhân viên" value={numberOfUsers} alt="Number or employee" />
                            <Frame bgColor="#34495E" url='/images/frame4.svg' title="Nhân viên mới" value="0" alt="New employee" />
                        </div>
                    </Row>
                </ComponentContainer>
            </PageTemplate>
        )
    }
}
const mapStateToProps = (state) => ({    
    employees: state.user.employees.data,
    quantity: state.bill.statistic.quantity,
    total: state.bill.statistic.total,
    numberOfUsers: state.user.quantity,
    loading: state.bill.statistic.loading,
    employeeLoading: state.user.employees.loading
})
const mapDispatchToProps = dispatch => ({
    handleEmployee: ([value]) => dispatch(handle_employee_filter(value)),
    billStatistic: () => dispatch(bill_statistic()),
    employeeFetchData: () => dispatch(employee_fetch_data()),
    getNumberOfUser: () => dispatch(get_user_total_number())
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Statistic)