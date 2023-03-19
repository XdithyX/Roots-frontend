import React from 'react'
import './ExploreBox.css'
import img from '../../../src/assets/png/guide.png'
function ExploreBox({eventimg,eventname,eventdesc,eventloc}) {
  return (
    <div className='expbox'>
       <div className='exp__img'>
        <img src={img} alt='ento' className='exp__img'></img>
       </div>
       <div className='exp__content'>
        <h3></h3>
        <p>place</p>
        <p>desc</p>
        <button className='exp__btn'>Book Tickets</button>
       </div>
    </div>
  )
}

export default ExploreBox