import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import "./Reviewcards.css";
import img from "../../../src/assets/png/guide.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Reviewcards() {
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
      <div class="review__div">
          <div className="rev__user__img">
            <img src={img} className="rev__user__img" alt="" />
          </div>
          <div className="rev__details">
            <p>user__name</p>
            <p>place</p>
            <p>user revies goes here</p>
            <div className="user__rev__star">
              <p>stars goes here</p>
            </div>
          </div>
        </div>
        <div class="review__div">
          <div className="rev__user__img">
            <img src={img} className="rev__user__img" alt="" />
          </div>
          <div className="rev__details">
            <p>user__name</p>
            <p>place</p>
            <p>user revies goes here</p>
            <div className="user__rev__star">
              <p>stars goes here</p>
            </div>
          </div>
        </div>
        <div class="review__div">
          <div className="rev__user__img">
            <img src={img} className="rev__user__img" alt="" />
          </div>
          <div className="rev__details">
            <p>user__name</p>
            <p>place</p>
            <p>user revies goes here</p>
            <div className="user__rev__star">
              <p>stars goes here</p>
            </div>
          </div>
        </div>
        <div class="review__div">
          <div className="rev__user__img">
            <img src={img} className="rev__user__img" alt="" />
          </div>
          <div className="rev__details">
            <p>user__name</p>
            <p>place</p>
            <p>user revies goes here</p>
            <div className="user__rev__star">
              <p>stars goes here</p>
            </div>
          </div>
        </div>
        </Carousel>
        ;
    </MainLayout>
  );
}

export default Reviewcards;
