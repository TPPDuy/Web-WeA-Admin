import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Input, Icon, Spin } from 'antd'
import { toast } from 'react-toastify'
import { connect } from 'react-redux'
import {
    user_login_begin,
    user_login_success,
    user_login_failure
} from '../actions/user'
import { api_2 } from '../api/api'
import { Redirect } from "react-router-dom"
import qs from 'qs'
import { setUsernameToStorage, setJwtToStorage } from '../utils/utils'


class Login extends Component {
    state = {
        username: '',
        password: '',
        redirectToReferrer: false
    }
    handleUsernameInput = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    handlePasswordInput = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleEnterSubmit = (e) => {
        if(e.charCode === 13) {
            this.handleSubmit()
        }
    }
    handleSubmit = () => {
        const { username, password } = this.state
        if (username == "") {
            toast.error('Vui lòng nhập tên đăng nhập')
        }
        else if (password == "") {
            toast.error('Vui lòng nhập mật khẩu')
        }
        else {
            this.props.userLoginBegin()
            api_2.post('login', qs.stringify({
                username,
                password
            }), {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                }
            })
                .then(res => {
                    this.props.userLoginSuccess(res.data.data)
                    setJwtToStorage(res.data.data.token)
                    setUsernameToStorage(res.data.data.user.username)
                    toast('Đăng nhập thành công!', {
                        className: 'success-modal',
                        bodyClassName: 'success-modal-text',
                        progressClassName: 'success-progress-bar'
                    })
                    this.setState(() => ({
                        redirectToReferrer: true
                    }))
                })
                .catch(err => {
                    console.log(err)
                    this.props.userLoginFailure(err)
                    toast.error('Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin!')
                })
        }
    }
    render() {
        const {
            username,
            password,
            redirectToReferrer
        } = this.state

        const {
            loading
        } = this.props

        const { from } = this.props.location.state || { 
            from: { pathname: "/" }
        }

        if (redirectToReferrer === true) {
            return <Redirect to={from} />;
        }
        return (
            <Container fluid="true" style={{ padding: '0' }}>
                <div style={{ minHeight: '100vh', backgroundColor: '#E3E5E6' }} className="d-flex flex-row justify-content-center align-items-center">
                    {/* <img src={process.env.PUBLIC_URL+'/images/login-sample.gif'} alt="stupid dog"/> */}
                    <div className="card-wrapper">
                        <div className="content-center card-section-one">
                            <img src={process.env.PUBLIC_URL + '/images/Logo.svg'} alt="Logo" style={{ height: '30%' }} />
                        </div>
                        <div className="content-center card-section-two">
                            <div className="login-form-wrapper">
                                <span className="login-title">ĐĂNG NHẬP</span>
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Tên đăng nhập"
                                    style={{ width: '20rem', height: '2.5rem', marginBottom: '1.125rem' }}
                                    value={username}
                                    onChange={this.handleUsernameInput}
                                />
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Mật khẩu"
                                    style={{ width: '20rem', height: '2.5rem', marginBottom: '1.125rem' }}
                                    value={password}
                                    onChange={this.handlePasswordInput}
                                    onKeyPress={this.handleEnterSubmit}
                                />
                                <div className="login-separator" />
                                <button
                                    className={loading ? "login-button login-button-loading" : "login-button"}
                                    disabled={loading}
                                    onClick={this.handleSubmit}
                                >
                                    {loading ? <Spin size="small" /> : "Đăng nhập"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}
const mapStateToProps = (state) => ({
    loading: state.user.loading,
    error: state.user.error
})
const mapDispatchToProps = (dispatch) => ({
    userLoginBegin: () => dispatch(user_login_begin()),
    userLoginSuccess: (user) => dispatch(user_login_success(user)),
    userLoginFailure: (error) => dispatch(user_login_failure(error))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)