import React, {Component} from 'react'
import PageTemplate from '../components/PageTemplate'
import ComponentContainer from '../components/ComponentContainer'
import {Row} from 'react-bootstrap'
import {EmployeeTableTitle} from '../components/TableTitle'
import {Employees} from '../components/ListRecords'
import { AddEmployeeModal, EditEmployeeModal} from '../components/Modal';
import {Modal} from 'antd';
const { confirm } = Modal;

class Employee extends Component{
    constructor(props){
        super(props)
        this.state = {
            pageNo: 1,
            createVisibility: false,
            editVisibility: false,
            selectedEmployee: {
                id: "",
                username: "",
                fullName: "",
                type: ""
            },
            dateSort: 0, // -1 : ascending, 1: descending
            employees: 
            [{"id":"dOJrQaIqpx","fullName":"Ave Duguid","username":"aduguid0","password":"vDzOZn","type":"2","createdTime":"2019-04-24 23:52:54","isActive":true},
            {"id":"AUfRewBoGj","fullName":"Deana Barribal","username":"dbarribal1","password":"b9zrmx6C1","type":"2","createdTime":"2018-12-30 22:26:08","isActive":true},
            {"id":"KVLTetrCaS","fullName":"Wadsworth Birtwell","username":"wbirtwell2","password":"54xGEVxxyj","type":"3","createdTime":"2019-08-03 00:13:00","isActive":true},
            {"id":"HmALEkwqKO","fullName":"Rickard Douch","username":"rdouch3","password":"hQjv8MDF7KA","type":"3","createdTime":"2019-05-15 12:53:30","isActive":false},
            {"id":"OQuqMPfIHK","fullName":"Olivero Pesticcio","username":"opesticcio4","password":"eiMpJjCo9Z","type":"3","createdTime":"2019-03-24 21:01:29","isActive":true},
            {"id":"HVzECGeQqi","fullName":"Cristionna Boldero","username":"cboldero5","password":"wBKB1mg","type":"1","createdTime":"2019-02-25 16:26:58","isActive":false},
            {"id":"RqEuVFsxPH","fullName":"Yehudi McCartney","username":"ymccartney6","password":"VS861De","type":"3","createdTime":"2019-09-18 18:59:21","isActive":true},
            {"id":"TjHGtrxnLi","fullName":"Kathleen Larkin","username":"klarkin7","password":"MKh3npkIN","type":"1","createdTime":"2019-10-24 22:23:32","isActive":false},
            {"id":"UVRZclDqsr","fullName":"Eugene Heeron","username":"eheeron8","password":"mRlruO6bI1","type":"1","createdTime":"2019-02-18 18:32:24","isActive":false},
            {"id":"UcVMfriBZe","fullName":"Major Fitzpayn","username":"mfitzpayn9","password":"K5jIGML","type":"1","createdTime":"2019-06-22 12:42:28","isActive":true},
            {"id":"zvLqJxEOBD","fullName":"Bryon Hearthfield","username":"bhearthfielda","password":"DVk6HO5XoBA","type":"3","createdTime":"2019-07-12 03:11:02","isActive":false},
            {"id":"QJubwoUtOv","fullName":"Leora Figger","username":"lfiggerb","password":"5FHU6B504","type":"1","createdTime":"2019-01-14 09:30:09","isActive":false},
            {"id":"nJEyBVvsQf","fullName":"Wang Wickersham","username":"wwickershamc","password":"afKXT5kMz","type":"1","createdTime":"2019-02-03 14:06:12","isActive":false},
            {"id":"qNbKzpeRhY","fullName":"Ellwood Petch","username":"epetchd","password":"DG8vjkfoMmQ","type":"3","createdTime":"2019-11-06 16:39:35","isActive":true},
            {"id":"iTmeJFRLZh","fullName":"Emylee Clemoes","username":"eclemoese","password":"D1p9ANHhl5TW","type":"1","createdTime":"2019-10-05 00:29:50","isActive":true},
            {"id":"vqIzVGirET","fullName":"Rowney Sambedge","username":"rsambedgef","password":"svTT944l4","type":"1","createdTime":"2019-11-15 23:49:25","isActive":true},
            {"id":"yXahMiHeSz","fullName":"Finn Lemin","username":"fleming","password":"UAMz66V","type":"3","createdTime":"2019-07-15 20:22:52","isActive":false},
            {"id":"bCPQWuYKyS","fullName":"Adam Nuzzetti","username":"anuzzettih","password":"QIbjV52mj7T","type":"3","createdTime":"2019-06-17 03:13:02","isActive":false},
            {"id":"WGwTVQUlcX","fullName":"Josy Bedinham","username":"jbedinhami","password":"G7Bb1GR4","type":"2","createdTime":"2019-06-18 21:39:32","isActive":true},
            {"id":"sxuEHBRjlC","fullName":"Kipp Bluck","username":"kbluckj","password":"5M9Rmb","type":"1","createdTime":"2019-11-05 17:16:46","isActive":false},
            {"id":"qNghLeucOH","fullName":"Christophorus Arnison","username":"carnisonk","password":"d3CoUPol","type":"3","createdTime":"2018-12-09 15:30:10","isActive":false},
            {"id":"qMFAhvzYNe","fullName":"Ivie Fantonetti","username":"ifantonettil","password":"RUBkVV","type":"3","createdTime":"2019-03-14 04:20:03","isActive":true},
            {"id":"bQejEJnmrR","fullName":"Cortney Belison","username":"cbelisonm","password":"6BInV9","type":"3","createdTime":"2019-09-12 14:33:34","isActive":false},
            {"id":"jBeSotpmrZ","fullName":"Liza Shervil","username":"lsherviln","password":"oQ2Th83TT6","type":"3","createdTime":"2019-10-16 11:07:10","isActive":false},
            {"id":"enbVJYZXQK","fullName":"Decca Gilffilland","username":"dgilffillando","password":"DC2OYUQBj2","type":"3","createdTime":"2019-08-07 20:23:55","isActive":true},
            {"id":"oIQrRKMGUl","fullName":"Isa Gytesham","username":"igyteshamp","password":"lf1qXiswjAv","type":"2","createdTime":"2018-12-29 21:57:59","isActive":false},
            {"id":"mEfGksdZOl","fullName":"Jackquelin Theobold","username":"jtheoboldq","password":"gw8ws46WSaN","type":"3","createdTime":"2019-06-11 16:17:55","isActive":false},
            {"id":"pbhJEgvLIP","fullName":"Rosa Stockton","username":"rstocktonr","password":"kbg8OtpNTj","type":"3","createdTime":"2018-12-05 16:14:40","isActive":false},
            {"id":"ASMKmpPnYz","fullName":"Alane Brisson","username":"abrissons","password":"UwPDktepvYp","type":"2","createdTime":"2019-07-23 09:01:38","isActive":false},
            {"id":"POfeRalIKS","fullName":"Brooks Brownjohn","username":"bbrownjohnt","password":"zguhPQ","type":"3","createdTime":"2019-02-05 11:38:06","isActive":true},
            {"id":"SksmaRZcxW","fullName":"Winston Pitbladdo","username":"wpitbladdou","password":"wy0Lk4O02","type":"2","createdTime":"2019-06-01 06:23:38","isActive":false},
            {"id":"CxQRberUYD","fullName":"Quintus Sambells","username":"qsambellsv","password":"nn3EfwRxvz3h","type":"2","createdTime":"2019-02-06 07:09:08","isActive":false},
            {"id":"hRkTvcCxQf","fullName":"Kary Blazej","username":"kblazejw","password":"mcKSp9uyQsv","type":"3","createdTime":"2018-11-29 20:18:20","isActive":false},
            {"id":"hOELRwbJHr","fullName":"Dinnie Ellwood","username":"dellwoodx","password":"Q1xh2spx8Z","type":"1","createdTime":"2019-09-15 11:25:57","isActive":true},
            {"id":"GCSHMiTFgw","fullName":"Dionne Firby","username":"dfirbyy","password":"P5SK7E","type":"1","createdTime":"2019-10-18 12:23:02","isActive":false},
            {"id":"ZOtjMoHsgP","fullName":"Donielle Ambroz","username":"dambrozz","password":"5Eq2RSQJjn8p","type":"3","createdTime":"2019-08-09 17:54:00","isActive":false},
            {"id":"YmvxwRpZDl","fullName":"Eugenia Gerard","username":"egerard10","password":"MfWTUO8Gfg4","type":"1","createdTime":"2019-08-02 19:09:48","isActive":false},
            {"id":"rJWGpDthPA","fullName":"Dennie Preene","username":"dpreene11","password":"Hf5FY83HwC","type":"1","createdTime":"2019-07-28 09:28:14","isActive":false},
            {"id":"IYRzoadXiU","fullName":"Eden Beattie","username":"ebeattie12","password":"LASePFZ","type":"3","createdTime":"2019-03-06 16:37:39","isActive":true},
            {"id":"ozEvSYVusc","fullName":"Tatiana Megany","username":"tmegany13","password":"rR2U567","type":"3","createdTime":"2019-11-13 06:05:41","isActive":false},
            {"id":"HaxCSZcEfY","fullName":"Yettie Jedryka","username":"yjedryka14","password":"rUML55c","type":"1","createdTime":"2019-08-12 01:15:46","isActive":false},
            {"id":"xZXFVTWsjR","fullName":"Even Lys","username":"elys15","password":"ZoS0SN99Rl","type":"1","createdTime":"2019-09-14 11:16:11","isActive":true},
            {"id":"lwPaSIuRCO","fullName":"Adeline Matveyev","username":"amatveyev16","password":"ohjY1uruc","type":"2","createdTime":"2019-11-08 03:18:16","isActive":true},
            {"id":"duEQjrWxIc","fullName":"Abbye Siggins","username":"asiggins17","password":"1QnLPz6J1wu9","type":"1","createdTime":"2018-12-29 11:43:39","isActive":false},
            {"id":"RmGOUgDnFe","fullName":"Brandie Kassidy","username":"bkassidy18","password":"7DjkZvk2","type":"1","createdTime":"2019-02-06 00:43:15","isActive":true},
            {"id":"KdOsujfywT","fullName":"Arlan Freire","username":"afreire19","password":"N4Ole2FRbe4","type":"3","createdTime":"2019-03-12 14:02:16","isActive":true},
            {"id":"IwAQvLGZis","fullName":"Brett Crebo","username":"bcrebo1a","password":"o0gM5Qih","type":"3","createdTime":"2019-03-11 08:44:03","isActive":false},
            {"id":"cpfjaWmGXw","fullName":"Zerk Overington","username":"zoverington1b","password":"IItUfsgZmq","type":"3","createdTime":"2019-10-03 13:37:01","isActive":false},
            {"id":"AwEUmYfqub","fullName":"Iggie Pateman","username":"ipateman1c","password":"ruch7Jk","type":"3","createdTime":"2019-08-24 00:59:00","isActive":false},
            {"id":"vndLeAsWDT","fullName":"Christian Havis","username":"chavis1d","password":"HfTN2Jg7GQi","type":"3","createdTime":"2019-10-15 06:15:30","isActive":true}]
            
        }
    }
    handleSort = () => {
        this.setState(prevState => {
            if(prevState.dateSort === 0) return {
                dateSort: -1
            }
            return {
                dateSort: prevState.dateSort*(-1)
            }
        })
    }
    handleDeleteEmployeeModal = (id) => {
        confirm({
            title: 'Bạn có chắc chắn muốn xóa nhân viên này?',
            onOk() {
              console.log(`Employee with id ${id} is removed!`);
            },
            onCancel() {
              console.log('Cancel');
            },
          });
    }
    handleOpenAddEmployeeModal = () => {
        this.setState({
            createVisibility: true
        })
    }
    handleCloseAddEmployeeModal = () => {
        this.setState({
            createVisibility: false
        })
    }
    handleOpenEditEmployeeModal = (employee) => {
        this.setState({
            editVisibility: true,
            selectedEmployee: employee
        })
    }
    handleCloseEditEmployeeModal = () => {
        this.setState({
            editVisibility: false
        })
    }
    handlePagination = (pageNo, pageSize) => {
        this.setState({
            pageNo
        })
    }
    render(){
        const {
            employees,
            pageNo,
            createVisibility,
            editVisibility,
            selectedEmployee,
            dateSort
        } = this.state;
        return (
            <PageTemplate>
                <ComponentContainer selectedPart="Nhân viên">
                    <Row className="nomargin">
                        <div className="employee-create-btn" onClick={this.handleOpenAddEmployeeModal}>
                            <span>Khởi tạo</span>
                            <img src={'/images/circle.svg'} />
                        </div>
                    </Row>
                    <Row className="nomargin">
                        <EmployeeTableTitle onSort={this.handleSort}/>
                        <Employees 
                            employees={employees}
                            pageNo={pageNo}
                            handlePagination={this.handlePagination}
                            onEdit={this.handleOpenEditEmployeeModal}
                            onRemove={this.handleDeleteEmployeeModal}
                            dateSort={dateSort}
                        />
                        <AddEmployeeModal visibility={createVisibility} onCancel={this.handleCloseAddEmployeeModal}/>
                        <EditEmployeeModal visibility={editVisibility} onCancel={this.handleCloseEditEmployeeModal} selectedEmployee={selectedEmployee}/>
                    </Row>
                </ComponentContainer>
            </PageTemplate>
        )
    }
}

export default Employee