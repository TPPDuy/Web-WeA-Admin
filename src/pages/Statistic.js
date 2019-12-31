import React, { Component } from 'react'
import ComponentContainer from '../components/ComponentContainer';
import { Row, Col } from 'react-bootstrap'
import PageTemplate from '../components/PageTemplate'
import ListButton from '../components/ListButtonFilter'
import { DatePickerWithSpace as DatePicker } from '../components/DateRangePicker'
import Cascader from '../components/Cascader'
import Frame from '../components/StatisticFrame'

class Statistic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dateFilter: "0",
            searchSubmit: false,
            employeeName: "",
            startDate: "",
            endDate: "",
            options: [
                {
                    value: 'Lisha Iglesias', //ID Nhan vien
                    label: 'Lisha Iglesias'
                },
                {
                    value: 'Ansley Windmill', //ID Nhan vien
                    label: 'Ansley Windmill'
                },
                {
                    value: 'Lamond Knutsen', //ID Nhan vien
                    label: 'Lamond Knutsen'
                },
                {
                    value: 'Odell Pipping', //ID Nhan vien
                    label: 'Odell Pipping'
                },
                {
                    value: 'Harriet Fitzhenry', //ID Nhan vien
                    label: 'Harriet Fitzhenry'
                }
            ],
            bills:
                [{ "id": "9435633412", "total": 1304425, "date": "2019-06-29 18:01:00", "name": "Lisha Iglesias" },
                { "id": "3775433791", "total": 1773559, "date": "2019-03-29 09:07:46", "name": "Ansley Windmill" },
                { "id": "5153775437", "total": 1253650, "date": "2019-02-14 21:54:30", "name": "Lamond Knutsen" },
                { "id": "3236016388", "total": 1765626, "date": "2019-10-03 17:31:53", "name": "Lisha Iglesias" },
                { "id": "4287315421", "total": 318547, "date": "2019-11-03 22:17:14", "name": "Annette Beeres" },
                { "id": "5176832550", "total": 2868283, "date": "2019-09-14 20:46:10", "name": "Lisha Iglesias" },
                { "id": "8511723927", "total": 2332332, "date": "2019-06-20 06:46:25", "name": "Lisha Iglesias" },
                { "id": "5444557878", "total": 3502224, "date": "2019-07-15 01:59:28", "name": "Lamond Knutsen" },
                { "id": "1830870157", "total": 2395623, "date": "2019-02-26 00:11:38", "name": "Lamond Knutsen" },
                { "id": "9757005207", "total": 655739, "date": "2018-12-18 03:50:35", "name": "Lamond Knutsen" },
                { "id": "4182535154", "total": 3700031, "date": "2019-08-30 06:20:42", "name": "Lisha Iglesias" },
                { "id": "7980871510", "total": 3671188, "date": "2019-09-28 12:10:34", "name": "Ansley Windmill" },
                { "id": "3734519934", "total": 2267398, "date": "2019-04-07 23:17:19", "name": "Ansley Windmill" },
                { "id": "4048487418", "total": 1565886, "date": "2019-08-15 21:24:30", "name": "Lisha Iglesias" },
                { "id": "2137438593", "total": 1467431, "date": "2019-03-03 00:50:23", "name": "Lisha Iglesias" },
                { "id": "4399750472", "total": 3742194, "date": "2019-01-16 14:42:45", "name": "Lisha Iglesias" },
                { "id": "7891959803", "total": 3320394, "date": "2019-08-23 21:24:36", "name": "Lisha Iglesias" },
                { "id": "2443013634", "total": 3504731, "date": "2019-02-05 13:04:33", "name": "Ansley Windmill" },
                { "id": "7506971488", "total": 3391741, "date": "2019-06-23 02:47:20", "name": "Lamond Knutsen" },
                { "id": "0108297993", "total": 2686580, "date": "2019-05-25 06:45:42", "name": "Odell Pipping" },
                { "id": "2619021391", "total": 530613, "date": "2019-07-21 09:23:15", "name": "Odell Pipping" },
                { "id": "9729359679", "total": 3100772, "date": "2019-01-02 13:55:09", "name": "Lisha Iglesias" },
                { "id": "7722862586", "total": 618709, "date": "2019-03-14 14:15:54", "name": "Lamond Knutsen" },
                { "id": "1182009069", "total": 1351373, "date": "2019-05-25 12:21:01", "name": "Lamond Knutsen" },
                { "id": "6376344003", "total": 3452116, "date": "2019-04-16 09:29:14", "name": "Lisha Iglesias" },
                { "id": "2976020353", "total": 462314, "date": "2019-03-25 22:49:24", "name": "Odell Pipping" },
                { "id": "5698236712", "total": 2513113, "date": "2019-11-18 11:18:59", "name": "Odell Pipping" },
                { "id": "1862703507", "total": 3621276, "date": "2019-03-04 15:44:07", "name": "Ansley Windmill" },
                { "id": "9266161179", "total": 1999966, "date": "2019-10-18 17:18:08", "name": "Harriet Fitzhenry" },
                { "id": "3060812152", "total": 2999075, "date": "2018-11-24 03:59:52", "name": "Ansley Windmill" }]
        }
    }
    handleDateFilter = (dateFilter) => {
        console.log(dateFilter)
        this.setState({
            dateFilter,
            searchSubmit: false
        })
    }
    handleDateRange = ([startDate, endDate], date) => {
        this.setState({
            startDate,
            endDate
        })
    }
    handleSubmit = () => {
        this.setState({
            searchSubmit: true,
            dateSort: 0
        })

    }
    handleEmployeeName = ([employeeName]) => {
        this.setState({
            employeeName
        })
    }
    render() {
        const { dateFilter, options, bills, searchSubmit, startDate, endDate, employeeName} = this.state
        let filteredData = bills;        
        if (searchSubmit) {
            if (startDate !== "" || typeof startDate === undefined) {
                const a = new Date(startDate), b = new Date(endDate);
                filteredData = filteredData.filter(e => {
                    const current = new Date(e.date);
                    return a <= current && current <= b;
                });
            }
        }else{
            if(dateFilter != 0) {    
                const a = new Date(dateFilter)
                filteredData = filteredData.filter(e => {         
                    const current = new Date(e.date);
                    return current >= a;
                }); 
            }
        }
        if(employeeName !== "" && employeeName !== undefined){
            filteredData = filteredData.filter(e => e.name === employeeName); 
        }
        const numberOfBill = filteredData.length;
        const revenue = filteredData.reduce((a,b) => a + b.total, 0);
        // console.log(filteredData)
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
                            <DatePicker onDateRange={this.handleDateRange} onSubmit={this.handleSubmit} />
                        </Col>
                    </Row>
                    <div className='StatisticLine' />
                    <Row style={{ margin: '1rem 0rem' }} >
                        <Col lg="2" className="d-flex flex-row justify-content-start align-items-center nopadding">
                            <span style={{ fontSize: '16px' }}>Nhân viên:</span>
                        </Col>
                        <Col lg="10" className="d-flex flex-row justify-content-start align-items-center nopadding">
                            <Cascader options={options} allowClear="true" onChange={this.handleEmployeeName} />
                        </Col>
                    </Row>
                    <div className='StatisticLine' />
                    <Row style={{ margin: '1rem 0rem' }} >
                        <div className="d-flex flex-row justify-content-between align-items-center w-100">
                            <Frame bgColor="#3498DB" url='/images/frame1.svg' title="Số hóa đơn" value={numberOfBill} alt="Number of bill" />
                            <Frame bgColor="#12CBC4" url='/images/frame2.svg' title="Doanh thu" value={revenue} alt="Revenue" />
                            <Frame bgColor="#8C7AE6" url='/images/frame3.svg' title="Tổng nhân viên" value="40" alt="Number or employee" />
                            <Frame bgColor="#34495E" url='/images/frame4.svg' title="Nhân viên mới" value="0" alt="New employee" />
                        </div>
                    </Row>
                </ComponentContainer>
            </PageTemplate>
        )
    }
}

export default Statistic