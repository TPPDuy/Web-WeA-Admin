import { Category, Dish } from "./Record";
import React from 'react'
import PropTypes from 'prop-types'

export const Categories = ({categories = [], onChangeActiveStatus=f=>f, onRemove=f=>f}) =>
    <div>
        {(categories.length === 0) ?
            <p style={{marginTop:'30px'}}>Không có danh mục, hãy thêm danh mục mới</p> :
            categories.map((category, index) =>
                <Category key={category.id}
                        index = {index+1}
                        category = {category}
                       onChangeActiveStatus={() => onChangeActiveStatus(category.id, !category.isActive)}
                       onRemove={() => onRemove(category.id)} />
            )
        }
    </div>
export const Dishes = ({dishes = [], onChangeActiveStatus=f=>f, onRemove=f=>f}) =>
<div>
    {(dishes.length === 0) ?
        <p style={{marginTop:'30px'}}>Không có món ăn, hãy thêm món ăn mới</p> :
        dishes.map((dish, index) =>
            <Dish key={dish.id}
                    index = {index+1}
                    dish = {dish}
                   onChangeActiveStatus={() => onChangeActiveStatus(dish.id, !dish.isActive)}
                   onRemove={() => onRemove(dish.id)} />
        )
    }
</div>

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