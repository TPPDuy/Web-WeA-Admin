import React from 'react'
import { connect } from 'react-redux'
import { handle_defined_time_filter } from '../actions/filter'

const StatisticTextButton = ({
        id, 
        children, 
        type,
        //REDUX
        selectedOption, 
        handleClick}) => 
    {
        return(
            <div style={{fontSize: '16px'}} 
                className={selectedOption === id ? "StatisticTextButton mr-1 StatisticTextButton-active" : "StatisticTextButton mr-1 "} 
                onClick={() => handleClick(id, type)} >
                {children}
            </div>
    )
}
const mapStateToProps = state => ({
    selectedOption: state.filter.dateFilterOption
})
const mapDispatchToProps = dispatch => ({
    handleClick: (option, type) => dispatch(handle_defined_time_filter(option, type))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StatisticTextButton)