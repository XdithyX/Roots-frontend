import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import "./Reviewcards.css";
import img from "../../../src/assets/png/guide.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { baseUrl } from "../../utils/urls";
import axios from 'axios'
import { useState,useEffect } from "react";
import {AiFillStar} from 'react-icons/ai'
function Reviewcards() {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        async function fetchdata(){
            const response=  await axios.get(`${baseUrl}/reviews/`)
            console.log(response.data)
                 setReviews(response.data);
                 
              
     
     
        } fetchdata();
       
    },[])


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <MainLayout>
       
      <div className="reviewpg">
        <div className="reviewpg__heading">
          <h1> Tourist Experiences</h1>
        </div>
       
     
      </div>
      <Carousel responsive={responsive}>
        {reviews.map((item)=>{
            return(
            <div class="review__div" key={item.id}>
          <div className="rev__user__img">
            <img src={img} className="rev__user__img" alt="" />
          </div>
          <div className="rev__details">
            <p>user__name</p>
            <p>place</p>
            <p>{item.content}</p>
            <div className="user__rev__star">
              {[...Array(item.rating)].map((_, index) => (
                <AiFillStar key={index}/>   
              ))} 
            </div>
          </div>
        </div>
            )
        })}

        </Carousel>
        ;
    </MainLayout>
  );
}

export default Reviewcards;
