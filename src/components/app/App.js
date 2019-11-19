import React from 'react';
import { Component } from 'react'
import './App.css';
import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'
import '../Header'
import '../MainMenu'
import '../PathInfo'
import { Header } from '../Header';
import { MainMenu } from '../MainMenu';
import { Path } from '../PathInfo';
import { ComponentContainer } from '../ComponentContainer';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      collapseSideBar : false
    }
    this.collapse = this.collapse.bind(this)
  }

  collapse(){
    this.setState(prevState => ({collapseSideBar: !prevState.collapseSideBar}))
  }
  render(){
    const { collapseSideBar } = this.state
    const {collapse} = this
    return (
      <Container className="App" fluid="true">
        <Row>
          <Header name="UserName" onCollapse={collapse}></Header>
        </Row>
        <Row style={{marginTop:'1px', height:'100vh'}}>
          {
            (collapseSideBar) ? '' :
            <Col lg="2" md="3" sm="4" xs="5" className="nopadding">
              <MainMenu></MainMenu>
            </Col>
          }

          <Col lg={(collapseSideBar) ? 12 : 10} md={(collapseSideBar) ? 12 : 9} sm={(collapseSideBar) ? 12 : 8} xs={(collapseSideBar) ? 12 : 7}>
            <Row>
              <Path path="abc / cde / efg"></Path>
            </Row>
            <Row>
                <ComponentContainer selectedPart="Danh mục"></ComponentContainer>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}