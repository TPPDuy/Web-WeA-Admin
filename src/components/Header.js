import '../index.css'
import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col} from 'react-bootstrap'

const Header = ({name, onCollapse = f => f}) => 
    <Container fluid="true">
        <Row className="Header-container">
            <Col lg="2" md="3" sm="4" xs="5" className="nopadding">
                <div className="Header-logo-part">
                    <img src="/images/Logo.svg" className="Header-logo" alt="logo"/>
                    <div style={{float: 'right', marginRight:'15px', cursor: 'pointer'}} onClick={onCollapse}>
                        <img src="/images/hamburgerButton.svg"  alt="expand"></img>
                    </div>
                </div>
            </Col>
            <Col lg="10" md="9" sm="8" xs="7" >
                <div style={{float:'right'}} className="Header-account">
                    <img style={{borderRadius: '50%'}} src="/images/avaterHolder.svg" alt="avatarHolder"/>
                    <div style={{marginLeft: '16px'}}>{name}</div>
                </div>
            </Col>
        </Row>
    </Container>

Header.propTypes = {
    name: PropTypes.string,
    onCollapse: PropTypes.func
}

export default Header