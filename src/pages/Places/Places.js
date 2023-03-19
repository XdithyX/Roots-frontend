import React, { useState } from 'react'
import './Places.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import PlaceCard from './PlaceCard'
import axios from 'axios'
import { useEffect } from 'react'
import { baseUrl } from '../../utils/urls'
import CustomTitle from '../../utils/CustomTitle'
const Places = () => {
  const[places,setPlaces]=useState([])
  useEffect(()=>{
    axios.get(`${baseUrl}/places/`).then((res)=>{
      setPlaces(res.data)
    },(err)=>{
      
    })
  },[])
    return (
    <MainLayout>
      <CustomTitle title="Explore"/>
      <div className="places__main_container">
        <h1 className="place__pg_header">Places</h1>
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
        <div className="places__cards_container">
          {places.map((place,index)=>{
            return(
            <PlaceCard key={index} placeId={place.id} placeName={place.place_name} placeImage={place.place_image} placeDesc={place.place_description}/>
            )
          })}
          
        </div>
      </div>
    </MainLayout>
  )
}

export default Places  