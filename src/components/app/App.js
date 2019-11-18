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
  render(){
    return (
      <Container className="App" fluid="true">
        <Row>
          <Header name="UserName"></Header>
        </Row>
        <Row style={{marginTop:'1px', height:'100vh'}}>
          <Col lg="2" md="3" sm="4" xs="5" className="nopadding">
            <MainMenu></MainMenu>
          </Col>
          <Col lg="10" md="9" sm="8" xs="7">
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