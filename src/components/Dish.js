import { Container, Row, Col} from "react-bootstrap";
import React from 'react'
import {Switch} from 'antd'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css';

export const Dish = ({index=0, dish, onChangeActiveStatus=f=>f, onRemove=f=>f}) =>
<Container fluid="true">
    <Row style={{alignItems:'center', paddingTop:'20px', paddingBottom:'20px', backgroundColor:(index%2===0) ? 'rgba(242, 242, 242, 0.55)' : '#ffffff'}}>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-center-align">
            {index}
        </Col>
        <Col lg ="1" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <img className="ImageThumbnail" alt="category-thumbnail" src={dish.img}></img>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>{dish.name}</div>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>{dish.category.name}</div>
        </Col>
        <Col lg ="1" md="2" sm="2" xs="2" className="TableTitle-right-align">
            <div>{new Intl.NumberFormat('vi-VN', {style: 'currency',currency: 'VND'}).format(dish.price)}</div>
        </Col>
        <Col lg ="1" md="1" sm="2" xs="2" className="TableTitle-center-align">
            <Switch 
                    checkedChildren="Y" 
                    unCheckedChildren="N" 
                    checked={(dish.isActive ? true : false)}
                    onChange={onChangeActiveStatus}>
            </Switch>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>{new Date(dish.updatedTime).toLocaleString()}</div>
        </Col>

        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-right-align"></Col>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-center-align">
            <button style={{backgroundColor:'#EB5757', border:'0px solid', padding:'5px 10px'}}>
                <img src="/images/iconTrash.svg" alt="iconTrash" onClick={onRemove}></img>
            </button>
        </Col>
    </Row>
</Container>

Dish.propTypes = {
    index: PropTypes.number,
    category: PropTypes.object,
    onChangeActiveStatus: PropTypes.func,
    onRemove: PropTypes.func
}