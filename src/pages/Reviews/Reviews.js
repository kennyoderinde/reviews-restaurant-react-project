import React from 'react'
import ReviewList from './ReviewList';

import "./Reviews.css"

const Reviews = () => {
  return (
    <main className='review-main-bg'>
        <div className='review-container'>
            <div className='review-title'>
                <h2>Our Reviews</h2>
                <div className='review-underline'></div>
            </div>  
            <ReviewList />
        </div>
    </main>
  )
}

export default Reviews