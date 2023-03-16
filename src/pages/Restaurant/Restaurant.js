import React, { useState }from "react";
import "./RestaurantData.js"
import Data_ from "./RestaurantData";
import "./Restaurant.css"
import Menu from "./Menu.js";




function DisplayMeals() {

    const [menuItems, setMenuItems] = useState(Data_)

   

  return (
    <React.Fragment>
        <div className="">
            <Menu Data_ = {menuItems} />
        </div>
        
        <div className="set-background">
            
            {
                menuItems.map(value => (
                <div className="food-tile"
                    key= {value.id}
                    >   <div className="menu-item">
                            <img src={value.img} alt="Show Image" className="img"/>
                        </div>
                        <div className="item-info">
                            <header>
                                <h5 className="title">{value.title}</h5>
                                <h4 className="price">{value.price}</h4>
                            </header>
                            <div className="underline-food"></div>
                            <p className="desc">{value.desc}</p>
                        </div>
                        


                </div>

                ))
            }
            
        </div>
       
    </React.Fragment>

  )
}

export default DisplayMeals

 