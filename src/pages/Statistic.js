import React, { Component } from 'react'
import ComponentContainer from '../components/ComponentContainer';
import { Row, Col } from 'react-bootstrap'
import PageTemplate from '../components/PageTemplate'
import ListButton from '../components/ListButtonFilter'
import { DatePickerWithSpace as DatePicker } from '../components/DateRangePicker'
import Cascader from '../components/Cascader'
import Frame from '../components/StatisticFrame'
import { connect } from 'react-redux'
import { employee_filter } from '../actions/filter'
import { bill_overview_get_info } from '../actions/bill'
import { employee_fetch_data, user_total_number} from '../actions/user'

class Statistic extends Component {
    componentDidMount(){
        this.props.employeeFetchData()
        this.props.billGetOverviewInfo()
        this.props.getNumberOfUser()
    }
    render() {
        const {
            employees,
            bills,
            numberOfUsers,
            numberOfBills,
            totalBills,
            handleEmployee
        } = this.props
        
        let options = []
        employees.forEach(e => options.push({
            value: e.name,
            label: e.name
        }))
        
        return (
            <PageTemplate>
                <ComponentContainer selectedPart="Thống kê">
                    <Row className="nomargin">
                        <Col lg="2" className="d-flex flex-row justify-content-start align-items-center nopadding">
                            <span style={{ fontSize: '16px' }}>Ngày:</span>
                        </Col>
                        <Col lg="10" className="d-flex flex-row justify-content-start align-items-center nopadding">
                            <ListButton />
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
                            <Cascader options={options} allowClear="true" onChange={handleEmployee}/>
                        </Col>
                    </Row>
                    <div className='StatisticLine' />
                    <Row style={{ margin: '1rem 0rem' }} >
                        <div className="d-flex flex-row justify-content-between align-items-center w-100">
                            <Frame bgColor="#3498DB" url='/images/frame1.svg' title="Số hóa đơn" value={numberOfBills} alt="Number of bill" />
                            <Frame bgColor="#12CBC4" url='/images/frame2.svg' title="Doanh thu" value={totalBills} alt="Revenue" />
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
    employees: state.user.employees,
    numberOfBills: state.bill.quantity,
    totalBills: state.bill.total,
    numberOfUsers: state.user.quantity
})
const mapDispatchToProps = dispatch => ({
    handleEmployee: ([value]) => dispatch(employee_filter(value)),
    billGetOverviewInfo: () => dispatch(bill_overview_get_info()),
    employeeFetchData: () => dispatch(employee_fetch_data()),
    getNumberOfUser: () => dispatch(user_total_number())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Statistic)