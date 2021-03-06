import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faSort} from '@fortawesome/free-solid-svg-icons'
import '../index.css'
import PropTypes from 'prop-types'

export const DepartmentTableTitle = ({onSort=f=>f}) =>
<Container fluid="true">
    <Row>
        <div style={{height:'1px', width:'100%', backgroundColor:'#F2F2F2', marginBottom:'20px'}}></div>
    </Row>
    <Row>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-center-align">
            <FontAwesomeIcon icon={faFile} style={{color:'#333333'}}/>
        </Col>
        <Col lg ="3" md="2" sm="2" xs="2" className="TableTitle-left-align">
            <div>Tên bộ phận</div>
        </Col>
        <Col lg ="2" md="1" sm="2" xs="2" className="TableTitle-center-align">
            <div>Trạng thái</div>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>Khởi tạo</div>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>Cập nhật</div>
        </Col>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-right-align">
            <FontAwesomeIcon icon={faSort} onClick={onSort}/>
        </Col>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-center-align">
            <div>#</div>
        </Col>
    </Row>
    <Row>
        <div style={{width:'100%', height:'2px', backgroundColor:'#E0E0E0', marginTop:'20px'}}></div>
    </Row>
</Container>

export const CategoryTableTitle = ({onSort=f=>f}) =>
<Container fluid="true">
    <Row>
        <div style={{height:'1px', width:'100%', backgroundColor:'#F2F2F2', marginBottom:'20px'}}></div>
    </Row>
    <Row>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-center-align">
            <FontAwesomeIcon icon={faFile} style={{color:'#333333'}}/>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>Hình ảnh</div>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-left-align">
            <div>Tên danh mục</div>
        </Col>
        <Col lg ="1" md="1" sm="2" xs="2" className="TableTitle-center-align">
            <div>Trạng thái</div>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>Khởi tạo</div>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>Cập nhật</div>
        </Col>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-right-align">
            <FontAwesomeIcon icon={faSort} onClick={onSort}/>
        </Col>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-center-align">
            <div>#</div>
        </Col>
    </Row>
    <Row>
        <div style={{width:'100%', height:'2px', backgroundColor:'#E0E0E0', marginTop:'20px'}}></div>
    </Row>
</Container>

export const DishTableTitle = ({onSort=f=>f}) =>
<Container fluid="true">
    <Row>
        <div style={{height:'1px', width:'100%', backgroundColor:'#F2F2F2', marginBottom:'20px'}}></div>
    </Row>
    <Row>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-center-align">
            <FontAwesomeIcon icon={faFile} style={{color:'#333333'}}/>
        </Col>
        <Col lg ="1" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>Hình ảnh</div>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>Tên món ăn</div>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>Danh mục</div>
        </Col>
        <Col lg ="1" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>Giá</div>
        </Col>
        <Col lg ="1" md="1" sm="2" xs="2" className="TableTitle-center-align">
            <div>Trạng thái</div>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>Cập nhật</div>
        </Col>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-right-align">
            <FontAwesomeIcon icon={faSort} onClick={onSort}/>
        </Col>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-center-align">
            <div>#</div>
        </Col>
    </Row>
    <Row>
        <div style={{width:'100%', height:'2px', backgroundColor:'#E0E0E0', marginTop:'20px'}}></div>
    </Row>
</Container>


export const TableTitle = ({onSort=f=>f}) =>
<Container fluid="true">
    <Row>
        <div style={{height:'1px', width:'100%', backgroundColor:'#F2F2F2', marginBottom:'20px'}}></div>
    </Row>
    <Row>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-center-align">
            <FontAwesomeIcon icon={faFile} style={{color:'#333333'}}/>
        </Col>
        <Col lg ="3" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>Tên bàn</div>
        </Col>
        <Col lg ="3" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>Bộ phận</div>
        </Col>
        <Col lg ="1" md="1" sm="2" xs="2" className="TableTitle-center-align">
            <div>Trạng thái</div>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>Cập nhật</div>
        </Col>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-right-align">
            <FontAwesomeIcon icon={faSort} onClick={onSort}/>
        </Col>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-center-align">
            <div>#</div>
        </Col>
    </Row>
    <Row>
        <div style={{width:'100%', height:'2px', backgroundColor:'#E0E0E0', marginTop:'20px'}}></div>
    </Row>
</Container>


CategoryTableTitle.propTypes = {
    onSort: PropTypes.func
}
DishTableTitle.propTypes = {
    onSort: PropTypes.func
}
export const BillTableTitle = ({onSort=f=>f}) =>
<Container fluid="true">
    <Row>
        <div style={{height:'1px', width:'100%', backgroundColor:'#F2F2F2', marginBottom:'20px'}}></div>
    </Row>
    <Row>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-center-align">
            <FontAwesomeIcon icon={faFile} style={{color:'#333333'}}/>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>Mã hóa đơn</div>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-right-align">
            <div>Tổng tiền</div>
        </Col>        
        <Col lg ="3" md="3" sm="3" xs="3" className="TableTitle-right-align">
            <div>Ngày tạo</div>
        </Col>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-left-align" onClick={onSort} style={{cursor: "pointer"}}>
            <FontAwesomeIcon icon={faSort}/>
        </Col>
        <Col lg ="3" md="3" sm="3" xs="3" className="TableTitle-center-align">
            <div>Nhân viên phục vụ</div>
        </Col>
    </Row>
    <Row>
        <div style={{width:'100%', height:'2px', backgroundColor:'#E0E0E0', marginTop:'20px'}}></div>
    </Row>
</Container>

BillTableTitle.propTypes = {
    onSort: PropTypes.func
}

export const EmployeeTableTitle = ({onSort=f=>f}) =>
<Container fluid="true">
    <Row>
        <div style={{height:'1px', width:'100%', backgroundColor:'#F2F2F2', marginBottom:'20px'}}></div>
    </Row>
    <Row>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-center-align">
            <FontAwesomeIcon icon={faFile} style={{color:'#333333'}}/>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>Tên đăng nhập</div>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>Tên đầy đủ</div>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>Loại người dùng</div>
        </Col>        
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div className="d-flex flex-row justify-content-center align-item-center">
                <div>Ngày tạo</div>
                <div style={{marginLeft: "1rem" , cursor: "pointer"}} onClick={onSort} >
                    <FontAwesomeIcon icon={faSort}/>
                </div>
            </div>
        </Col>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-center-align">
            <div>Trạng thái</div>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>#</div>
        </Col>
    </Row>
    <Row>
        <div style={{width:'100%', height:'2px', backgroundColor:'#E0E0E0', marginTop:'20px'}}></div>
    </Row>
</Container>