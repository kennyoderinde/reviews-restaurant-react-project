import "./Header.css"
import { Link } from "react-router-dom";

import React from 'react'

export default function header() {
  return (
    <div className= "heading-bar" >
      <ul className="heading-list">
        <Link to='/'><li>Reviews</li></Link>
        <Link to='/restaurant'><li>Restaurant</li></Link>
        <Link to='/filter'><li>Filter</li></Link>
      </ul>
    </div>
  ) 
}
