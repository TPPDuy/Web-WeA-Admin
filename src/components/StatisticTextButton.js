import React from 'react'
import { connect } from 'react-redux'
import { defined_time_filter } from '../actions/filters'

const StatisticTextButton = ({
        id, 
        children, 
        value, 
        //REDUX
        selectedOption, 
        handleClick}) => {
    console.log(selectedOption)
    return(
        <div style={{fontSize: '16px'}} className={selectedOption === id ? "StatisticTextButton mr-1 StatisticTextButton-active" : "StatisticTextButton mr-1 "} onClick={() => handleClick(id, value)} >
             {children}
        </div>
    )
}
const mapStateToProps = state => ({
    selectedOption: state.filter.dateFilterOption
})
const mapDispatchToProps = dispatch => ({
    handleClick: (option, value) => dispatch(defined_time_filter(option, value))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StatisticTextButton)