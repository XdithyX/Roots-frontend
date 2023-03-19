import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
import './Explore.css'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../../utils/urls'
function Explore() {
  const [cuisines,setCuisines]=useState([])
   useEffect(()=>{
    
    async function fetchdata(){
       const response=  await axios.get(`${baseUrl}/cuisine/`)
       console.log(response.data)
            setCuisines(response.data);
            
         


   } fetchdata();
  },[])
    
  return (
    <MainLayout>
    <div className='explore__pg'>
       <div className='top__sec'>
         <div className='explore__heading'>ROOT The World </div>
         <div className='top__seccont'>
          Aliquet sem suspendisse tristique habitant consectetur cursus at. Leo in eget convallis nunc rhoncus nulla m
       </div>
       <input className='searchbar'  ></input>
       </div>

     <div className='ethnic__sec'>
       <div className='explore__subheading'>
       Ethnic Cuisines</div>
       <div className='ethnic__cont'>
        <div className='ethinc__subcont1'>
           <div className='ethnic__subsubcont1'>
             <div className='divn1'>
             <img className='ethnic__img' src={cuisines[0]?.food_image}/>
             <div className='exp__contentdiv'>
             <h4>{cuisines[0]?.food_name}</h4>
             <p className='ethnic__place'>Nigeria</p>
             </div>
             </div>
             <div className='divn2'><img className='ethnic__img' src={cuisines[1]?.food_image}/>
             <div className='exp__contentdiv'>
             <h4>{cuisines[1]?.food_name}</h4>
             <p className='ethnic__place'>Trivandrum</p>
             </div></div>
           </div>
           <div className='ethnic__subsubcont2'><img className='ethnic__img' src={cuisines[2]?.food_image}/>
           <div className='exp__contentdiv'>
           <h4>{cuisines[2]?.food_name}</h4>
           <p className='ethnic__place'>Kollam</p>
           </div></div>

        </div>
        <div className='ethnic__subcont2'><img className='ethnic__img' src={cuisines[3]?.food_image}/>
        <div className='exp__contentdiv'>
        <h4>{cuisines[3]?.food_name}</h4>
        <p className='ethnic__place'>Nigeria</p>
        </div></div>
       </div>
     
     </div>  

     <div className='cultural__sec'>
       <div className='explore__subheading'>Cultural Events</div>
       <div className='cultural__subheading'>Book to stand a chance to win our free offers to one of these tourist centers. </div>
     </div>
     <div className='Workshop__sec'>
     <div className='explore__subheading'>Cultural Events</div>
     <div className='cultural__subheading'>Book to stand a chance to win our free offers to one of these tourist centers. </div>
   </div>
    </div>
    </MainLayout>
  )
}

export default Explore