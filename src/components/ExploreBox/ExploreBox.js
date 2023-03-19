import React from 'react'
import './ExploreBox.css'
import img from '../../../src/assets/png/guide.png'
import {CiLocationOn} from 'react-icons/ci'
function ExploreBox({eventimg,eventname,eventdesc,eventloc}) {
  return (
    <div className='expbox'>
       <div className='exp__img'>
        <img src={eventimg} alt='ento' className='exp__img'></img>
       </div>
       <div className='exp__content'>
        <h3 className='cul__eventname'>{eventname}</h3>
        <div className='cul__loc'>
        <CiLocationOn/>
        <p style={{ color:'#fff' }}>{eventloc}</p>
        </div>
        <p style={{ color:'#fff' , textAlign:'left' }}>{eventdesc}</p>
        <button className='exp__btn'>Book Tickets</button>
       </div>
    </div>
  )
}

export default ExploreBox