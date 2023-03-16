import React, { useState } from 'react'
import people from "./ReviewsData"
import { FaQuoteRight, FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import './Reviews.css';



const ReviewList = () => {
    const [index, setIndex] = useState(4)
    console.log(index)
    const { name, job, image, text} = people[index]

    //checkNumber
    const CheckNumber = (number) => {
        if(number > people.length - 1) {
            return 0;
        }
        if(number < 0) {
            return people.length - 1
        }
        return number;
    }


    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1
            return CheckNumber(newIndex);
        })
    }

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1
            return CheckNumber(newIndex); 
        })
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        
        if(randomNumber === index) {
            randomNumber  = index + 1
        }
        
        setIndex(CheckNumber(randomNumber))
    }

  return (
    <div className='review-list'>
        <div className='img-review'> 
            <div className='quote-icon'> 
                <FaQuoteRight />
            </div>
            <img src={image} alt={name} className="person-img"/>
            
        </div>
        <h2 className='review-author'>{name}</h2>
        <p className='review-job'>{job}</p>
        <p className='review-text'>{text}</p>
        <div className='btns-container'>
            <div className='direction-btn'>
                <button className='review-left-btn'onClick={prevPerson}>
                <FaChevronCircleLeft />
                </button>
                <button className='review-right-btn' onClick={nextPerson}> 
                    <FaChevronCircleRight />
                </button>
            </div>
            <div className='btn-div'>
                <button className='random-btn' onClick={randomPerson}>
                    Surprise Me
                </button>
                <div className='review-space'></div>
            </div>
            
            
            
        </div>
    </div>
  )
}

export default ReviewList