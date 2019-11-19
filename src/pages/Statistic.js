import React, { Component } from 'react'
import ComponentContainer from '../components/ComponentContainer';
import {Row, Col} from 'react-bootstrap'
import PageTemplate from '../components/PageTemplate'
import ListButton from '../components/StatisticListButton'

class Statistic extends Component {    
    render() {
        return(
            <PageTemplate>
                <ComponentContainer selectedPart="Thống kê">
                <Row>
                        <Col lg="2" className="d-flex flex-row justify-content-start align-items-center nopadding">
                            <span>Ngày:</span>
                        </Col>
                        <Col lg="10" className="d-flex flex-row justify-content-start align-items-center nopadding">
                            <ListButton/>
                        </Col>
                </Row>
                </ComponentContainer>
            </PageTemplate>
        )
    }
}

export default Statistic