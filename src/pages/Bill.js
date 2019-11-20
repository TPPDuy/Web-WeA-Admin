import React, { Component } from 'react'
import ComponentContainer from '../components/ComponentContainer';
import { Row, Col } from 'react-bootstrap'
import PageTemplate from '../components/PageTemplate'
import ListButton from '../components/ListButtonFilter'
import Cascader from '../components/Cascader'
import SearchPanel from '../components/BillSearchPanel'

class Bill extends Component {
    constructor(props){
        super(props)
        this.state = {
            dateFilter: "8",
            searchCriteria: ["1"],
            searchInput: "",
            startDate: "",
            endDate: ""
        }
    }
    handleDateFilter = (dateFilter) => {
        this.setState({
            dateFilter
        })
    }
    handleSearchCriteria = (searchCriteria) => {
        this.setState({
            searchCriteria
        })
    }
    handleSearchInput = (e) => {
        this.setState({
            searchInput: e.target.value
        })
    }
    handleDateRange = (date, [startDate, endDate])=> {
        this.setState({
            startDate,
            endDate
        })
    }
    handleSubmit = () => {
        const {
            dateFilter,
            searchCriteria,
            searchInput,
            startDate,
            endDate
        } = this.state;
        console.log('Date filter: ', dateFilter,'\nSearch criteria: ',searchCriteria,'\nSearch input: ',searchInput,'\nStart date: ',startDate,'\nEnd date: ',endDate);
    }
    render() {
        const {dateFilter, searchInput} = this.state;
        return (
            <PageTemplate>
                <ComponentContainer selectedPart="Hóa đơn">
                    <Row className="nomargin">
                        <div style={{marginLeft: 'auto'}}>
                            <ListButton value={dateFilter} onChange={this.handleDateFilter}/>
                        </div>
                    </Row>
                    <Row style={{ margin: '1rem 0rem' }} >                        
                        <SearchPanel 
                            onSearchCriteria={this.handleSearchCriteria} 
                            searchInput={searchInput}
                            onSearchInput={this.handleSearchInput}
                            onDateRange={this.handleDateRange}
                            onSubmit={this.handleSubmit}
                        />
                    </Row>
                    <div className='StatisticLine' />
                    <Row style={{ margin: '1rem 0rem' }} >
                        <Col lg="2" className="d-flex flex-row justify-content-start align-items-center nopadding">
                            <span>Nhân viên:</span>
                        </Col>
                        <Col lg="10" className="d-flex flex-row justify-content-start align-items-center nopadding">
                            <Cascader />
                        </Col>
                    </Row>
                    <div className='StatisticLine' />
                    <Row style={{ margin: '1rem 0rem' }} >
                        <div className="d-flex flex-row justify-content-between align-items-center w-100">
                            
                        </div>
                    </Row>
                </ComponentContainer>
            </PageTemplate>
        )
    }
}

export default Bill