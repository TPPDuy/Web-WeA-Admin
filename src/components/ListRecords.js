import { Department, Category, Table, Dish, Bill, Employee } from "./Record";
import React from 'react'
import PropTypes from 'prop-types'
import { getPageData } from '../utils/utils'
import { Pagination } from 'antd';

export const Departments = ({ departments = [], pageNo, searchKey, onChangeActiveStatus = f => f, onClickRecord=f=>f, onRemove = f => f, onChangePage = f => f }) => {
    return (
        <div>
            {(departments.length === 0) ?
                <p style={{ marginTop: '30px' }}>Không có bộ phận nào, hãy thêm bộ phận mới</p> :
                departments.map((department, index) =>
                    <Department key={department.id}
                        index={(pageNo) * 6 + index + 1}
                        department={department}
                        onChangeActiveStatus={() => onChangeActiveStatus({...department, is_active: department.is_active === 1 ? 0 : 1})}
                        onRemove={() => onRemove(department.id)}
                        onClickRecord={()=>onClickRecord(department)} />
                )
            }
            <div className="mt-3 mb-1 w-100 d-flex flex-row justify-content-center align-items-center">
                <Pagination simple defaultCurrent={pageNo+1} total={100} onChange={onChangePage} pageSize={6} />
            </div>
        </div>)
}

export const Categories = ({ categories = [], pageNo, searchKey, onChangeActiveStatus = f => f, onClickRecord=f=>f, onRemove = f => f, onChangePage = f => f }) => {
    return (
        <div>
            {(categories.length === 0) ?
                <p style={{ marginTop: '30px' }}>Không có danh mục, hãy thêm danh mục mới</p> :
                categories.map((category, index) =>
                    <Category key={category.id}
                        index={pageNo * 6 + index + 1}
                        category={category}
                        onChangeActiveStatus={() => onChangeActiveStatus({...category, isActive: category.isActive === 1 ? 0 : 1})}
                        onRemove={() => onRemove(category.id)}
                        onClickRecord={()=>onClickRecord(category)} />
                )
            }
            <div className="mt-3 mb-1 w-100 d-flex flex-row justify-content-center align-items-center">
                <Pagination simple defaultCurrent={pageNo+1} total={100} onChange={onChangePage} pageSize={6} />
            </div>
        </div>)
}

export const Dishes = ({ dishes, pageNo, searchKey, onChangeActiveStatus = f => f, onClickRecord=f=>f, onRemove = f => f, onChangePage = f => f }) => {
    return (
        <div>
            {(dishes.length === 0) ?
                <p style={{ marginTop: '30px' }}>Không có món ăn, hãy thêm món ăn mới</p> :
                dishes.map((dish, index) =>
                    <Dish key={dish.id}
                        index={pageNo * 6 + index + 1}
                        dish={dish}
                        onChangeActiveStatus={() => {
                            console.log("change active dish: ", {...dish, is_active: dish.is_active === 1 ? 0 : 1})
                            onChangeActiveStatus({...dish, is_active: !dish.is_active})
                            }}
                        onRemove={() => onRemove(dish._id)}
                        onClickRecord={()=>onClickRecord(dish)} />
                )
            }
            <div className="mt-3 mb-1 w-100 d-flex flex-row justify-content-center align-items-center">
                <Pagination simple defaultCurrent={pageNo+1} total={100} onChange={onChangePage} pageSize={6}/>
            </div>
        </div>
    )
}

export const Tables = ({ tables = [], pageNo, searchKey, onChangeActiveStatus = f => f, onClickRecord=f=>f, onRemove = f => f, onChangePage = f => f }) => {
    return (
        <div>
            {(tables.length === 0) ?
                <p style={{ marginTop: '30px' }}>Không có bàn, hãy thêm bàn mới</p> :
                tables.map((table, index) =>
                    <Table key={table.id}
                        index={(pageNo) * 5 + index + 1}
                        table={table}
                        onChangeActiveStatus={() => onChangeActiveStatus({...table, isActive: table.is_active === 1 ? 0 : 1})}
                        onRemove={() => onRemove(table.id)}
                        onClickRecord={()=>onClickRecord(table)} />
                )
            }
            <div className="mt-3 mb-1 w-100 d-flex flex-row justify-content-center align-items-center">
                <Pagination simple defaultCurrent={pageNo+1} total={100} onChange={onChangePage} pageSize={6}/>
            </div>
        </div>
    )
}

export const Bills = ({
    bills,
    pageNo,
    pageSize,
    sortOrder,
    quantity,
    onPagination
}) => {
    let renderedData = bills
    if (sortOrder !== 0){
        renderedData.sort((a, b) =>{ console.log(a.created_at, b.created_at);return (b.created_at - a.created_at) * sortOrder})
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
                <Pagination simple defaultCurrent={pageNo} total={quantity} onChange={onPagination} pageSize={pageSize} />
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
    quantity,
    loadingID,
    errorID,
    handlePagination = f => f }) => {
    let renderedDate = employees
    if(dateSort !== 0){
        renderedDate.sort((a,b) => (Date.parse(b.created_at) - Date.parse(a.created_at))*dateSort)
    }
    return(
        <div style={{width: '100%'}}>
            {(renderedDate.length === 0) ?
                <p style={{ marginTop: '30px' }}>Danh sách rỗng</p> :
                renderedDate.map((employee, index) =>
                    <Employee 
                        key={employee._id}
                        index={(pageNo - 1) * 10 + index + 1}
                        employee={employee}
                        onChangeActiveStatus={() => onChangeActiveStatus(employee._id)}
                        onEdit= {() => onEdit(employee)}
                        onRemove={() => onRemove(employee._id)} 
                        loading={loadingID === employee._id}
                        error={errorID === employee._id}
                        />
                )
            }
            <div className="mt-3 mb-1 w-100 d-flex flex-row justify-content-center align-items-center">
                    <Pagination simple defaultCurrent={pageNo} total={quantity} onChange={handlePagination}/>
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