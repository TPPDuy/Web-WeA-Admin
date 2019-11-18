import '../index.css'
import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export const Header = ({name}) => 
    <Container fluid="true">
        <Row className="Header-container">
            <Col lg="2" md="2" sm="3" xs="3" className="nopadding">
                <div className="Header-logo-part">
                    <img src="/images/Logo.svg" className="Header-logo" alt="logo"/>
                    <img src="/images/hamburgerButton.svg" style={{float: 'right'}} alt="expand"></img>
                </div>
            </Col>
            <Col lg="10" md="10" sm ="9" xs="9" >
                <div style={{float:'right'}} className="Header-account">
                    <img style={{borderRadius: '50%'}} src="/images/avaterHolder.svg" alt="avatarHolder"/>
                    <div style={{marginLeft: '16px'}}>{name}</div>
                </div>
            </Col>
        </Row>
    </Container>