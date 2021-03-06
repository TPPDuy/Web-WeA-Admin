import { Container, Row, Col} from "react-bootstrap";
import React from 'react'
import {Switch} from 'antd'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css';
import { seconds2Date } from '../utils/utils'
import {host_image } from '../api/api'
import { connect } from "react-redux";

export const Department = ({index=0, department, onChangeActiveStatus=f=>f, onClickRecord=f=>f, onRemove=f=>f}) =>
<Container fluid="true">
    <Row style={{alignItems:'center', paddingTop:'20px', paddingBottom:'20px', backgroundColor:(index%2===0) ? 'rgba(242, 242, 242, 0.55)' : '#ffffff'}}>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-center-align">
            {index}
        </Col>
        <Col lg ="3" md="2" sm="2" xs="2" className="TableTitle-left-align">
            <div className="name" onClick={onClickRecord}>{department.name}</div>
        </Col>
        <Col lg ="2" md="1" sm="2" xs="2" className="TableTitle-center-align">
            <Switch 
                    checkedChildren="Y" 
                    unCheckedChildren="N" 
                    checked={(department.is_active === 1 ? true : false)}
                    onChange={onChangeActiveStatus}>
            </Switch>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>{new Date(department.created_at).toLocaleString()}</div>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>{new Date(department.updated_at).toLocaleString()}</div>
        </Col>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-right-align"></Col>

        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-center-align">
            <button style={{backgroundColor:'#EB5757', border:'0px solid', padding:'5px 10px'}} onClick={onRemove}>
                <img src="/images/iconTrash.svg" alt="iconTrash"></img>
            </button>
        </Col>
    </Row>
</Container>

export const Category = ({index=0, category, onChangeActiveStatus=f=>f, onClickRecord=f=>f, onRemove=f=>f}) =>
<Container fluid="true">
    <Row style={{alignItems:'center', paddingTop:'20px', paddingBottom:'20px', backgroundColor:(index%2===0) ? 'rgba(242, 242, 242, 0.55)' : '#ffffff'}}>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-center-align">
            {index}
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <img className="ImageThumbnail" alt="category-thumbnail" src={(category.image) ? host_image + category.image : '/images/thumbnailHolder.png'}></img>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-left-align">
            <div className="name" onClick={onClickRecord}>{category.name}</div>
        </Col>
        <Col lg ="1" md="1" sm="2" xs="2" className="TableTitle-center-align">

            <Switch 
                    checkedChildren="Y" 
                    unCheckedChildren="N" 
                    checked={(category.isActive === 1 ? true : false)}
                    onChange={onChangeActiveStatus}>
            </Switch>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>{new Date(category.createdAt).toLocaleString()}</div>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>{new Date(category.updatedAt).toLocaleString()}</div>
        </Col>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-right-align"></Col>

        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-center-align">
            <button style={{backgroundColor:'#EB5757', border:'0px solid', padding:'5px 10px'}} onClick={onRemove}>
                <img src="/images/iconTrash.svg" alt="iconTrash"></img>
            </button>
        </Col>
    </Row>
</Container>


export const Dish = ({index=0, dish, onChangeActiveStatus=f=>f, onClickRecord=f=>f, onRemove=f=>f}) =>
<Container fluid="true">
    <Row style={{alignItems:'center', paddingTop:'20px', paddingBottom:'20px', backgroundColor:(index%2===0) ? 'rgba(242, 242, 242, 0.55)' : '#ffffff'}}>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-center-align">
            {index}
        </Col>
        <Col lg ="1" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <img className="ImageThumbnail" alt="category-thumbnail" src={(dish.image) ? host_image + dish.image : '/images/thumbnailHolder.png'}></img>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div className="name" onClick={onClickRecord}>{dish.name}</div>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>{(dish.category) ? dish.category.name : ""}</div>
        </Col>
        <Col lg ="1" md="2" sm="2" xs="2" className="TableTitle-right-align">
            <div>{new Intl.NumberFormat('vi-VN', {style: 'currency',currency: 'VND'}).format(dish.price)}</div>
        </Col>
        <Col lg ="1" md="1" sm="2" xs="2" className="TableTitle-center-align">
            <Switch 
                    checkedChildren="Y" 
                    unCheckedChildren="N" 
                    checked={(dish.is_active === 1 ? true : false)}
                    onChange={onChangeActiveStatus}>
            </Switch>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>{new Date(dish.updated_at).toLocaleString()}</div>
        </Col>

        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-right-align"></Col>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-center-align">
            <button style={{backgroundColor:'#EB5757', border:'0px solid', padding:'5px 10px'}} onClick={onRemove}>
                <img src="/images/iconTrash.svg" alt="iconTrash"></img>
            </button>
        </Col>
    </Row>
</Container>


export const Table = ({index=0, table, onChangeActiveStatus=f=>f, onClickRecord=f=>f, onRemove=f=>f}) =>
<Container fluid="true">
    <Row style={{alignItems:'center', paddingTop:'20px', paddingBottom:'20px', backgroundColor:(index%2===0) ? 'rgba(242, 242, 242, 0.55)' : '#ffffff'}}>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-center-align">
            {index}
        </Col>
        <Col lg ="3" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div className="name" onClick={onClickRecord}>{table.name}</div>
        </Col>
        <Col lg ="3" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>{(table.department) ? table.department.name : ""}</div>
        </Col>
        <Col lg ="1" md="1" sm="2" xs="2" className="TableTitle-center-align">
            <Switch 
                    checkedChildren="Y" 
                    unCheckedChildren="N" 
                    checked={(table.i_active ? true : false)}
                    onChange={onChangeActiveStatus}>
            </Switch>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>{new Date(table.updated_at).toLocaleString()}</div>
        </Col>

        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-right-align"></Col>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-center-align">
            <button style={{backgroundColor:'#EB5757', border:'0px solid', padding:'5px 10px'}} onClick={onRemove}>
                <img src="/images/iconTrash.svg" alt="iconTrash"></img>
            </button>
        </Col>
    </Row>
</Container>


export const Bill = ({index = 0 , bill}) =>
<Container fluid="true">
    <Row style={{alignItems:'center', paddingTop:'20px', paddingBottom:'20px', backgroundColor:(index%2===0) ? 'rgba(242, 242, 242, 0.55)' : '#ffffff'}}>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-center-align">
            {index}
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>{bill._id}</div>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-right-align">
            <div>{new Intl.NumberFormat('vi-VN', {style: 'currency',currency: 'VND'}).format(bill.total)}</div>
        </Col>        
        <Col lg ="3" md="3" sm="3" xs="3" className="TableTitle-right-align">
            <div>{seconds2Date(bill.created_at).toLocaleString()}</div>
        </Col>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-left-align">            
        </Col>
        <Col lg ="3" md="3" sm="3" xs="3" className="TableTitle-center-align">
            <div>{bill.creator.fullname}</div>
        </Col>
    </Row>
</Container>


export const Employee = ({ index = 0, employee, onChangeActiveStatus = f => f, onEdit = f => f, onRemove = f => f, loading, error}) => {
    const typesOfEmployee = [
        {
            level: 0,
            name: 'Nhân viên'
        },
        {
            level: 1,
            name: 'Quản lí'
        },
        {
            level: 2,
            name: 'Quản trị'
        }
    ]
    let checkedValue = employee.active === 0 ? false : true
    return (
    <Container fluid="true">
        <Row style={{alignItems:'center', paddingTop:'20px', paddingBottom:'20px', backgroundColor:(index%2===0) ? 'rgba(242, 242, 242, 0.55)' : '#ffffff'}}>
            <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-center-align">
                {index}
            </Col>
            <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
                <div>{employee.username}</div>
            </Col>
            <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
                <div>{employee.fullname}</div>
            </Col>
            <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
                <div>{(typesOfEmployee.find(e => e.level === employee.level)).name}</div>
            </Col>
            <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
                <div>{seconds2Date(employee.created_at).toLocaleString()}</div>
            </Col>
            <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-center-align">
                <Switch 
                    checkedChildren="Y" 
                    unCheckedChildren="N" 
                    loading={loading}
                    defaultChecked={error? checkedValue : checkedValue}
                    onChange={onChangeActiveStatus}>
                </Switch>
            </Col>        
            <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
                <button style={{backgroundColor:'#FED330', border:'0px solid', padding:'5px 10px'}}>
                    <img src="/images/iconEdit.svg" alt="iconEdit" onClick={onEdit}></img>
                </button>
                <button style={{backgroundColor:'#EB5757', border:'0px solid', padding:'5px 10px'}}>
                    <img src="/images/iconTrash.svg" alt="iconTrash" onClick={onRemove}></img>
                </button>
            </Col>
        </Row>
    </Container>
    )
}

Category.propTypes = {
    index: PropTypes.number,
    category: PropTypes.object,
    onChangeActiveStatus: PropTypes.func,
    onRemove: PropTypes.func
}

Dish.propTypes = {
    index: PropTypes.number,
    category: PropTypes.object,
    onChangeActiveStatus: PropTypes.func,
    onRemove: PropTypes.func
}

Bill.propTypes = {
    index: PropTypes.number,
    bill: PropTypes.object,
}