import React from 'react'
import Data_ from "./RestaurantData";

const Categories = ({categories, filterItems}) => {
  return (
    <div className='btn-containers'> 
       {categories.map((category, index) => (
        <button className='menu-btn' key={index} onClick={() => filterItems(category)}>
          {category}
        </button>
      ))} 
    </div>
  )
}

export default Categories;