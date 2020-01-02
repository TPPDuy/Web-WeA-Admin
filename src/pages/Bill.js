import React, { Component } from 'react'
import ComponentContainer from '../components/ComponentContainer';
import { Row } from 'react-bootstrap'
import PageTemplate from '../components/PageTemplate'
import ListButton from '../components/ListButtonFilter'
import SearchPanel from '../components/BillSearchPanel'
import {BillTableTitle} from '../components/TableTitle'
import {Bills} from '../components/ListRecords'
import {connect} from 'react-redux'
import { bill_sort, bill_fetch_data, bill_handle_pagination } from '../actions/bill'
import { Spin } from 'antd'

class Bill extends Component {
    componentDidMount(){
        this.props.billFetchData()
    }
    onPagination = (pageNo, pageSize) => {
        this.props.handlePagination(pageNo, pageSize)
    }
    render() {
        const {
            bills,
            sortOrder,
            pageNo,
            pageSize,
            loading,
            error,
            handleSort
        } = this.props
        return (
            <PageTemplate>
                <ComponentContainer selectedPart="Hóa đơn">
                    <Row className="nomargin">
                        <div style={{marginLeft: 'auto'}}>
                            <ListButton type="0"/>
                        </div>
                    </Row>
                    <Row style={{ margin: '1rem 0rem' }} >                        
                        <SearchPanel/>
                    </Row>   
                    <div style={{ width: '100%', margin: '1rem 0rem' }}>
                        <BillTableTitle onSort={handleSort}/>
                        {loading ? 
                            <div className="my-5"><Spin size="large"/></div> :
                            <Bills 
                                bills={bills} 
                                pageNo={pageNo} 
                                pageSize={pageSize}
                                sortOrder={sortOrder}
                                onPagination={this.onPagination}
                            /> 
                        }
                    </div>                    
                </ComponentContainer>
            </PageTemplate>
        )
    }
}
const mapStateToProps = (state) => ({
    bills: state.bill.bills,
    sortOrder: state.bill.sortOrder, 
    pageNo: state.bill.pageNo,
    pageSize: state.bill.pageSize,
    loading: state.bill.loading,
    error: state.bill.error
})

const mapDispatchToProps = dispatch => ({
    handleSort: () => dispatch(bill_sort()),
    billFetchData: () => dispatch(bill_fetch_data()),
    handlePagination: (pageNo, pageSize) => dispatch(bill_handle_pagination(pageNo))
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Bill)