import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
import './Reviewcards.scss'
function Reviewcards() {
  return (
   <MainLayout>
   <div className='reviewpg'>
   <div className='reviewpg__heading'>
  <h1> Tourist Experiences</h1>
   </div>
    <div class="review">
       <div class="reviewer">
     <h3>John Doe</h3>
     </div> *
   <div class="review-content">
     <h4>Amazing Experience</h4>
     <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id purus quis lectus sollicitudin congue. Morbi porta quam id risus dignissim consectetur. Nullam luctus metus nec erat commodo, non facilisis velit ultricies. </p>
    
   </div>
 </div>
 </div>

   </MainLayout>
  )
}

export default Reviewcards