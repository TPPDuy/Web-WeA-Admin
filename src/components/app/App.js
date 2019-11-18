import React from 'react';
import './App.css';
import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'
import '../Header'
import '../MainMenu'
import '../Path'
import { Header } from '../Header';
import { MainMenu } from '../MainMenu';
import { Path } from '../Path';
function App() {
  return (
    <Container className="App" fluid="true">
      <Row>
        <Header name="ABC"></Header>
      </Row>
      <Row style={{minHeight: '100vh'}}>
        <Col lg="2" md="2" sm="3" xs="3" className="nopadding">
          <MainMenu></MainMenu>
        </Col>
        <Col lg="10" md="10" sm ="9" xs="9" >
          <Row>
            <Path path="abc/cde/efg"></Path>
          </Row>
          <Row>
            <div>
              Children will be placed here
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
