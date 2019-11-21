import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faSort} from '@fortawesome/free-solid-svg-icons'
import '../index.css'
import PropTypes from 'prop-types'

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

CategoryTableTitle.propTypes = {
    onSort: PropTypes.func
}
DishTableTitle.propTypes = {
    onSort: PropTypes.func
}