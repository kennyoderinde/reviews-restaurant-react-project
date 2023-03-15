import "./Header.css"
import { Link } from "react-router-dom";

import React from 'react'

export default function header() {
  return (
    <div>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/reviews'><li>Reviews</li></Link>
        <Link to='/multiplication-table'><li>MultiplicationTable</li></Link>
        <Link to='/restaurant'><li>Restaurant</li></Link>
        <Link to='/filter'><li>Filter</li></Link>
      </ul>
    </div>
  ) 
}
