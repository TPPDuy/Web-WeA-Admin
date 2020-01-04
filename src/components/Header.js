import '../index.css'
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'
import {clearStorage} from '../utils/utils'

const Header = ({name, onCollapse = f => f}) => {
    const [isShown, setIsShown] = useState(false);

    return (
        <Container fluid="true">
            <Row className="Header-container">
                <Col lg="2" md="3" sm="4" xs="5" className="nopadding">
                    <div className="Header-logo-part">
                        <Link to="/thongke">
                            <img src="/images/Logo.svg" className="Header-logo" alt="logo" style={{cursor: 'pointer'}}/>
                        </Link>
                        <div style={{float: 'right', marginRight:'15px', cursor: 'pointer'}} onClick={onCollapse}>
                            <img src="/images/hamburgerButton.svg" alt="expand"></img>
                        </div>
                    </div>
                </Col>
                <Col lg="10" md="9" sm="8" xs="7" >
                    <div style={{float:'right', cursor: 'pointer'}} 
                        className="Header-account" 
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                        onClick={() => {
                                clearStorage()
                                window.location.reload()
                            }
                        }
                        > 
                        {!isShown ? 
                            <React.Fragment>
                                <img style={{borderRadius: '50%'}} src="/images/avaterHolder.svg" alt="avatarHolder"/>
                                <div style={{marginLeft: '16px'}}>{name}</div>
                            </React.Fragment>
                        :   <React.Fragment>
                                {/* <img style={{borderRadius: '50%'}} src="/images/avaterHolder.svg" alt="avatarHolder"/> */}
                                <Icon type="logout" />
                                <div style={{marginLeft: '16px'}}>Đăng xuất</div>
                            </React.Fragment>
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
Header.propTypes = {
    name: PropTypes.string,
    onCollapse: PropTypes.func
}

export default Header