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

Dishes.propTypes = {
categories: PropTypes.array,
onChangeActiveStatus: PropTypes.func,
onRemove: PropTypes.func
}