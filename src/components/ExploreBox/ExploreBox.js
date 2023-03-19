import React from 'react'
import './ExploreBox.css'
import img from '../../../src/assets/png/guide.png'
function ExploreBox() {
  return (
    <div className='expbox'>
       <div className='exp__img'>
        <img src={img} alt='ento' className='exp__img'></img>
       </div>
       <div className='exp__content'>
        <p>place</p>
        <p>desc</p>
        <button className='exp__btn'>Book Tickets</button>
       </div>
    </div>
  )
}

export default ExploreBox