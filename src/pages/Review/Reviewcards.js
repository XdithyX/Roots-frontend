import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import "./Reviewcards.scss";
import img from "../../../src/assets/png/guide.png";
function Reviewcards() {
  return (
    <MainLayout>
      <div className="reviewpg">
        <div className="reviewpg__heading">
          <h1> Tourist Experiences</h1>
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
      </div>
    </MainLayout>
  );
}

export default Reviewcards;
