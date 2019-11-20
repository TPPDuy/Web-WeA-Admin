import { Category, Dish, Bill } from "./Record";
import React from 'react'
import PropTypes from 'prop-types'
import {getPageData} from '../utils/utils'
import { Pagination } from 'antd';

export const Categories = ({ categories = [], onChangeActiveStatus = f => f, onRemove = f => f }) =>
    <div>
        {(categories.length === 0) ?
            <p style={{ marginTop: '30px' }}>Không có danh mục, hãy thêm danh mục mới</p> :
            categories.map((category, index) =>
                <Category key={category.id}
                    index={index + 1}
                    category={category}
                    onChangeActiveStatus={() => onChangeActiveStatus(category.id, !category.isActive)}
                    onRemove={() => onRemove(category.id)} />
            )
        }
    </div>
export const Dishes = ({ dishes = [], onChangeActiveStatus = f => f, onRemove = f => f }) =>
    <div>
        {(dishes.length === 0) ?
            <p style={{ marginTop: '30px' }}>Không có món ăn, hãy thêm món ăn mới</p> :
            dishes.map((dish, index) =>
                <Dish key={dish.id}
                    index={index + 1}
                    dish={dish}
                    onChangeActiveStatus={() => onChangeActiveStatus(dish.id, !dish.isActive)}
                    onRemove={() => onRemove(dish.id)} />
            )
        }
    </div>

export const Bills = ({ 
        dateFilter,
        searchCriteria,
        searchInput,
        startDate,
        endDate,
        bills = [] , 
        pageNo, 
        dateSort,
        searchSubmit,
        handlePagination
    }) => {
    let renderedData = bills
    if(searchSubmit)
    {
        if(searchInput !== "")
        {
            switch(searchCriteria[0])
            {
                case "1": renderedData = renderedData.filter(e => e.id.includes(searchInput)); break;
                case "2": renderedData = renderedData.filter(e => e.total == searchInput); break;
                case "3": renderedData = renderedData.filter(e => e.name.includes(searchInput)); break;
            }
        }
        if(startDate !== "" && typeof startDate === undefined)
        {     
            const a = new Date(startDate), b = new Date(endDate);     
            renderedData = renderedData.filter(e => {         
                const current = new Date(e.date);
                return a <= current && current <= b;
            });
        }
    }
    else{
        if(dateFilter != 0) {       
            //console.log(dateFilter);
            const a = new Date(dateFilter)
            renderedData = renderedData.filter(e => {         
                const current = new Date(e.date);
                return current >= a;
            }); 
        }
    }    
    let pageData= getPageData(renderedData, pageNo, 10);
    if(dateSort !== 0)
        pageData.sort((a,b) => (Date.parse(b.date) - Date.parse(a.date))*dateSort)
    return(
        <div>
            {(renderedData.length === 0) ?
                <p style={{ marginTop: '30px' }}>Danh sách rỗng</p> :
                    pageData.map((bill, index) =>
                        <Bill
                            key={bill.id}
                            index={(pageNo - 1) * 10 + index + 1}
                            bill={bill}
                        />
                    )
            }
            
            <div className="mt-3 mb-1 w-100 d-flex flex-row justify-content-center align-items-center">
                <Pagination simple defaultCurrent={1} total={renderedData.length} onChange={handlePagination}/>
            </div>
        </div>
    )
}
Categories.propTypes = {
    categories: PropTypes.array,
    onChangeActiveStatus: PropTypes.func,
    onRemove: PropTypes.func
}

Categories.defaultProps = {
    categories: [
        {
            id: '01',
            img: 'http://bit.ly/37dkZr3',
            name: 'Rau củ',
            isActive: 1,
            createdTime: 1574192100000,
            updatedTime: 1574195700000,
        },
        {
            id: '02',
            img: 'http://bit.ly/37n9CN5',
            name: 'Thịt',
            isActive: 1,
            createdTime: 1574196100000,
            updatedTime: 1574199700000,
        },
        {
            id: '03',
            img: 'http://bit.ly/35kKsgb',
            name: 'Hải sản',
            isActive: 1,
            createdTime: 1574113100000,
            updatedTime: 1574117700000,
        }
    ]
}

Dishes.propTypes = {
    categories: PropTypes.array,
    onChangeActiveStatus: PropTypes.func,
    onRemove: PropTypes.func
}

Dishes.defaultProps = {
    dishes: [
        {
            id: '01',
            img: 'http://bit.ly/2Qvxlox',
            name: 'Bò lúc lắc',
            category: {
                name: 'Thịt'
            },
            price: 320000,
            isActive: 1,
            createdTime: 1574192100000,
            updatedTime: 1574195700000,
        },
        {
            id: '02',
            img: 'http://bit.ly/2pxTQxU',
            name: 'Gà nướng',
            category: {
                name: 'Thịt'
            },
            price: 250000,
            isActive: 1,
            createdTime: 1574196100000,
            updatedTime: 1574199700000,
        },
        {
            id: '03',
            img: 'http://bit.ly/2XudqaV',
            name: 'Sò lông nướng',
            category: {
                name: 'Hải sản'
            },
            price: 80000,
            isActive: 1,
            createdTime: 1574113100000,
            updatedTime: 1574117700000,
        },
        {
            id: '04',
            img: 'http://bit.ly/344b314',
            name: 'Salad gà',
            category: {
                name: 'Rau củ'
            },
            price: 65000,
            isActive: 1,
            createdTime: 1574213100000,
            updatedTime: 1574917700000,
        }
    ]
}

Bills.propTypes = {
    bills: PropTypes.array
}

Bills.defaultProps = {
    bills: [
        {
            id: '01',
            total: 1500000,
            date: 1574113100000,
            name: 'Nguyen Van A'
        },
        {
            id: '02',
            total: 945000,
            date: 1574917700000,
            name: 'Le Thi C'
        },
        {
            id: '03',
            total: 250000,
            date: 1574199700000,
            name: 'Tran Thi Hai D'
        },
        {
            id: '04',
            total: 2900000,
            date: 1574195700000,
            name: 'Nguyen Van A'
        }
    ]
}