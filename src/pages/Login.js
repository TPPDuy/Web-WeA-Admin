import React, { Component } from 'react'
import {Container} from 'react-bootstrap'

class Login extends Component {
    render(){
        return(
            <Container fluid="true">
                <div style={{minHeight: '100vh'}} className="d-flex flex-row justify-content-center align-items-center">
                    <img src={process.env.PUBLIC_URL+'/images/login-sample.gif'} />
                </div>
            </Container>
        )
    }
}

export default Login