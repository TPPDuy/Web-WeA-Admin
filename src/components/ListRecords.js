import { Category, Dish, Bill, Employee } from "./Record";
import React from 'react'
import PropTypes from 'prop-types'
import { getPageData } from '../utils/utils'
import { Pagination } from 'antd';

export const Categories = ({ categories = [], pageNo, searchKey, onChangeActiveStatus = f => f, onClickRecord=f=>f, onRemove = f => f, onChangePage = f => f }) => {
    let renderedData = categories
    if(searchKey!==""){
        renderedData = renderedData.filter(category => category.name.toLowerCase().includes(searchKey.toLowerCase()))
    }
    let paginationData = getPageData(renderedData, pageNo, 5)
    return (
        <div>
            {(categories.length === 0) ?
                <p style={{ marginTop: '30px' }}>Không có danh mục, hãy thêm danh mục mới</p> :
                paginationData.map((category, index) =>
                    <Category key={category.id}
                        index={(pageNo - 1) * 5 + index + 1}
                        category={category}
                        onChangeActiveStatus={() => onChangeActiveStatus(category.id)}
                        onRemove={() => onRemove(category.id)}
                        onClickRecord={()=>onClickRecord(category)} />
                )
            }
            <div className="mt-3 mb-1 w-100 d-flex flex-row justify-content-center align-items-center">
                <Pagination simple defaultCurrent={1} total={renderedData.length} onChange={onChangePage} pageSize={5} />
            </div>
        </div>)
}

export const Dishes = ({ dishes = [], pageNo, searchKey, onChangeActiveStatus = f => f, onClickRecord=f=>f, onRemove = f => f, onChangePage = f => f }) => {
    let renderedData = dishes
    if(searchKey!==""){
        renderedData = renderedData.filter(dish => dish.name.toLowerCase().includes(searchKey.toLowerCase()))
    }
    let paginationData = getPageData(renderedData, pageNo, 5)
    return (
        <div>
            {(dishes.length === 0) ?
                <p style={{ marginTop: '30px' }}>Không có món ăn, hãy thêm món ăn mới</p> :
                paginationData.map((dish, index) =>
                    <Dish key={dish.id}
                        index={(pageNo - 1) * 5 + index + 1}
                        dish={dish}
                        onChangeActiveStatus={() => onChangeActiveStatus(dish.id)}
                        onRemove={() => onRemove(dish.id)}
                        onClickRecord={()=>onClickRecord(dish)} />
                )
            }
            <div className="mt-3 mb-1 w-100 d-flex flex-row justify-content-center align-items-center">
                <Pagination simple defaultCurrent={1} total={renderedData.length} onChange={onChangePage} pageSize={5}/>
            </div>
        </div>
    )
}


export const Bills = ({
    bills,
    pageNo,
    pageSize,
    sortOrder,
    onPagination
}) => {
    let renderedData = bills
    if (sortOrder !== 0){
        renderedData.sort((a, b) =>{ console.log(a.created_at, b.created_at);return (b.created_at - a.created_at) * sortOrder})
        console.log(renderedData)
    }
    return (
        <div>
            {(renderedData.length === 0) ?
                <p style={{ marginTop: '30px' }}>Danh sách rỗng</p> :
                renderedData.map((bill, index) =>
                    <Bill
                        key={bill._id}
                        index={(pageNo - 1) * pageSize + index + 1}
                        bill={bill}
                    />
                )
            }
            <div className="mt-3 mb-1 w-100 d-flex flex-row justify-content-center align-items-center">
                <Pagination simple defaultCurrent={pageNo} total={100} onChange={onPagination} pageSize={pageSize} />
            </div>
        </div>
    )
}

export const Employees = ({ 
    employees = [], 
    onChangeActiveStatus = f => f, 
    onRemove = f => f, 
    onEdit = f => f,
    pageNo, 
    dateSort,
    handlePagination = f => f }) => {
    let renderedDate = getPageData(employees, pageNo, 10);
    if(dateSort !== 0){
        renderedDate.sort((a,b) => (Date.parse(b.createdTime) - Date.parse(a.createdTime))*dateSort)
    }
    return(
        <div style={{width: '100%'}}>
            {(renderedDate.length === 0) ?
                <p style={{ marginTop: '30px' }}>Danh sách rỗng</p> :
                renderedDate.map((employee, index) =>
                    <Employee 
                        key={employee.id}
                        index={(pageNo - 1) * 10 + index + 1}
                        employee={employee}
                        onChangeActiveStatus={() => onChangeActiveStatus(employee.id, !employee.isActive)}
                        onEdit= {() => onEdit(employee)}
                        onRemove={() => onRemove(employee.id)} 
                        />
                )
            }
            <div className="mt-3 mb-1 w-100 d-flex flex-row justify-content-center align-items-center">
                    <Pagination simple defaultCurrent={1} total={employees.length} onChange={handlePagination}/>
                </div>
        </div>
    )
}

Categories.propTypes = {
    categories: PropTypes.array,
    onChangeActiveStatus: PropTypes.func,
    onRemove: PropTypes.func
}

Dishes.propTypes = {
    categories: PropTypes.array,
    onChangeActiveStatus: PropTypes.func,
    onRemove: PropTypes.func
}

Bills.propTypes = {
    bills: PropTypes.array
}

Employees.propTypes = {
    categories: PropTypes.array,
    onChangeActiveStatus: PropTypes.func,
    onRemove: PropTypes.func
}