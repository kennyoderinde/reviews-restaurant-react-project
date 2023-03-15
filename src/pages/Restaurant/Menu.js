import React, { useState } from 'react'
import Categories from "./Categories.js";
import Data_ from './RestaurantData.js';


const allCategories = ['All', ...new Set(Data_.map((item) => item.category))];
console.log(allCategories)

const Menu = () => {


  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if(category === "All") {
      setCategories(Data_);
      return
    }
    const NewItems = Data_.filter((item) => item.category
    === category);
    setCategories(NewItems)
}


    
  return (
    <div className='menu-section'>
      <div className="menu-title">
        <h1>Our Menu</h1>
        <div className='underline1'></div>
      </div>
      <Categories categories={categories} filterItems= {filterItems} />
    </div>
  )
}

export default Menu