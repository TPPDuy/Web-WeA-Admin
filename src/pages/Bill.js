import React, { Component } from 'react'
import ComponentContainer from '../components/ComponentContainer';
import { Row } from 'react-bootstrap'
import PageTemplate from '../components/PageTemplate'
import ListButton from '../components/ListButtonFilter'
import SearchPanel from '../components/BillSearchPanel'
import {BillTableTitle} from '../components/TableTitle'
import {Bills} from '../components/ListRecords'



class Bill extends Component {
    constructor(props){
        super(props)
        this.state = {
            dateFilter: "0",
            searchCriteria: ["1"],
            searchInput: "",
            startDate: "",
            endDate: "",
            pageNo: 1,
            dateSort: 0, // -1 : ascending, 1: descending
            searchSubmit: false,
            bills: [{"id":"9435633412","total":1304425,"date":"2019-06-29 18:01:00","name":"Lisha Iglesias"},
            {"id":"3775433791","total":1773559,"date":"2019-03-29 09:07:46","name":"Ansley Windmill"},
            {"id":"5153775437","total":1253650,"date":"2019-02-14 21:54:30","name":"Lamond Knutsen"},
            {"id":"3236016388","total":1765626,"date":"2019-10-03 17:31:53","name":"Lizabeth Falkner"},
            {"id":"4287315421","total":318547,"date":"2019-11-03 22:17:14","name":"Annette Beeres"},
            {"id":"5176832550","total":2868283,"date":"2019-09-14 20:46:10","name":"Hogan Traynor"},
            {"id":"8511723927","total":2332332,"date":"2019-06-20 06:46:25","name":"Erwin Kinloch"},
            {"id":"5444557878","total":3502224,"date":"2019-07-15 01:59:28","name":"Oswald Ahrendsen"},
            {"id":"1830870157","total":2395623,"date":"2019-02-26 00:11:38","name":"Whitby Gehrtz"},
            {"id":"9757005207","total":655739,"date":"2018-12-18 03:50:35","name":"Dur Favel"},
            {"id":"4182535154","total":3700031,"date":"2019-08-30 06:20:42","name":"Roldan Trudgeon"},
            {"id":"7980871510","total":3671188,"date":"2019-09-28 12:10:34","name":"Mick Kohring"},
            {"id":"3734519934","total":2267398,"date":"2019-04-07 23:17:19","name":"Francyne Le Clercq"},
            {"id":"4048487418","total":1565886,"date":"2019-08-15 21:24:30","name":"Ferdinande Hallyburton"},
            {"id":"2137438593","total":1467431,"date":"2019-03-03 00:50:23","name":"Sondra Dugdale"},
            {"id":"4399750472","total":3742194,"date":"2019-01-16 14:42:45","name":"Brandyn Ryall"},
            {"id":"7891959803","total":3320394,"date":"2019-08-23 21:24:36","name":"Gisella Kingsnorth"},
            {"id":"2443013634","total":3504731,"date":"2019-02-05 13:04:33","name":"Rosco Nickless"},
            {"id":"7506971488","total":3391741,"date":"2019-06-23 02:47:20","name":"Ivar Oguz"},
            {"id":"0108297993","total":2686580,"date":"2019-05-25 06:45:42","name":"Odell Pipping"},
            {"id":"2619021391","total":530613,"date":"2019-07-21 09:23:15","name":"Mel Charge"},
            {"id":"9729359679","total":3100772,"date":"2019-01-02 13:55:09","name":"Amelia Reardon"},
            {"id":"7722862586","total":618709,"date":"2019-03-14 14:15:54","name":"Maridel Toyer"},
            {"id":"1182009069","total":1351373,"date":"2019-05-25 12:21:01","name":"Elberta Feldklein"},
            {"id":"6376344003","total":3452116,"date":"2019-04-16 09:29:14","name":"Jayson Gartshore"},
            {"id":"2976020353","total":462314,"date":"2019-03-25 22:49:24","name":"Rebe Boon"},
            {"id":"5698236712","total":2513113,"date":"2019-11-18 11:18:59","name":"Shaun Nortcliffe"},
            {"id":"1862703507","total":3621276,"date":"2019-03-04 15:44:07","name":"Theodoric Wozencraft"},
            {"id":"9266161179","total":1999966,"date":"2019-10-18 17:18:08","name":"Harriet Fitzhenry"},
            {"id":"3060812152","total":2999075,"date":"2018-11-24 03:59:52","name":"Franky Braidley"}]
        }
    }
    handleDateFilter = (dateFilter) => {
        this.setState({
            dateFilter,
            dateSort: 0,
            searchSubmit: false
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
    handleDateRange = ([startDate, endDate], date)=> {
        this.setState({
            startDate,
            endDate
        })
    }
    handlePagination = (pageNo, pageSize) => {
        this.setState({
            pageNo
        })
    }
    handleSubmit = () => {
        this.setState({
            searchSubmit: true,
            dateSort: 0
        })
        
    }
    handleSort = () => {
        this.setState(prevState => {
            if(prevState.dateSort === 0) return {
                dateSort: -1
            }
            return {
                dateSort: prevState.dateSort*(-1)
            }
        })
    }
    render() {
        const {
            dateFilter,
            searchCriteria, 
            searchInput,
            startDate,
            endDate, 
            bills, 
            pageNo, 
            dateSort,
            searchSubmit
        } = this.state;
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
                    <div style={{ width: '100%', margin: '1rem 0rem' }}>
                        <BillTableTitle onSort={this.handleSort}/>
                        <Bills 
                            dateFilter={dateFilter}
                            searchCriteria = {searchCriteria}
                            searchInput={searchInput}
                            startDate={startDate}
                            endDate={endDate}
                            bills={bills} 
                            pageNo={pageNo} 
                            dateSort={dateSort}
                            searchSubmit={searchSubmit}
                            handlePagination={this.handlePagination}
                        />
                    </div>
                    
                </ComponentContainer>
            </PageTemplate>
        )
    }
}

export default Bill