import React from "react";
import "./Place.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from "../../../src/assets/png/guide.png";
import MainLayout from "../../components/MainLayout/MainLayout";
import axios from 'axios'
import { useState,useEffect } from 'react'
import { baseUrl } from "../../utils/urls";
import {AiFillStar} from 'react-icons/ai'


function Place() {
   const[place,setPlace]=useState([])
   const[carplace,setCarplace]=useState([])
  useEffect(()=>{
        async function fetchdata(){
          const response=await axios.get(`${baseUrl}/trendings/`)
          setPlace(response.data)
          const response2=await axios.get(`${baseUrl}/places/`)
          setCarplace(response2.data)
          
        } fetchdata()
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
      <div className="place_container">
        <div className="places_heading">
          <div className="places_heading-title">PLACES</div>
          <div className="places_heading_text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
              sem suspendisse tristique habitant consectetur cursus at. Leo in
              eget convallis nunc rhoncus nulla m
            </p>
          </div>
          <div className="places_heading_search">
            <input
              className="places_searchbar"
              placeholder="Search for tourist centres,locations"
            ></input>
          </div>
        </div>
        <div className="places_recommented">
          <div className="places_recommented_heading">
            <div className="places_recommented_heading1">Most</div>{" "}
            <div className="places_recommented_heading2">Recommended
            </div>
          </div>
          <div className="places_recommented_cards">
            <div className="places__top__left">
              <div className="place__top__left__left">
                <div className="place__left__details">
                  <img src={place[0]?.place_image} alt="" className="place__img" />
                  <div className="places__details__p">
                    <div className="place__details__para">
                      <p>{place[0]?.trending_item}</p>
                      <p>{place[0]?.place_location}</p>
                    </div>
                    <div className="place__left__like">
                      <p>{<div><AiFillStar/> <AiFillStar/> <AiFillStar/>  <AiFillStar/></div>}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="places__top__left__right">
                <div className="place__left__details">
                  <img src={place[1]?.place_image} alt="" className="place__img" />
                  <div className="places__details__p">
                    <div className="place__details__para">
                      <p>{place[1]?.trending_item}</p>
                      <p>{place[1]?.place_location}</p>
                    </div>
                    <div className="place__left__like">
                      <p>{<div><AiFillStar/>  <AiFillStar/>  <AiFillStar/></div>}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="places__div__bottom">
              <div className="place__left__details__div">
                <img src={place[2]?.place_image} alt="" className="place__img" />
                <div className="places__details__p">
                  <div className="place__details__para">
                    <p>{place[2]?.trending_item}</p>
                    <p>{place[2]?.place_location}</p>
                  </div>
                  <div className="place__left__like">
                    <p>{<div><AiFillStar/> <AiFillStar/> <AiFillStar/>  <AiFillStar/> <AiFillStar/></div>}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="places__top__left">
              <div className="place__top__left__left">
                <div className="place__left__details">
                  <img src={place[3]?.place_image} alt="" className="place__img" />
                  <div className="places__details__p">
                    <div className="place__details__para">
                      <p>{place[3]?.trending_item}</p>
                      <p>{place[3]?.place_location}</p>
                    </div>
                    <div className="place__left__like">
                      <p>{<div><AiFillStar/> <AiFillStar/> <AiFillStar/>  <AiFillStar/></div>}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="places__top__left__right">
                <div className="place__left__details">
                  <img src={place[4]?.place_image} alt="" className="place__img" />
                  <div className="places__details__p">
                    <div className="place__details__para">
                      <p>{place[4]?.trending_item}</p>
                      <p>{place[4]?.place_location}</p>
                    </div>
                    <div className="place__left__like">
                      <p>{<div><AiFillStar/> <AiFillStar/></div>}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Carousel responsive={responsive}>
 
        { carplace.map((item)=>{

          return(
            <div class="place__div" >
            <div className="place__user__img">
              <img src={item.place_image} className="place__user__img" alt="" />
            </div>
            <div className="plcae__details">
              <p>Sanosh Jacob</p>
              <p className="place__place">{item.place_name}</p>
              <p className="place__content">{item.place_description}</p>
            </div>
          </div>
          )
        }) }

          

        </Carousel>
        ;
      </div>
    </MainLayout>
  );
}

export default Place;
