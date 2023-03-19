import React from "react";
import "./Place.css";
import img from "../../../src/assets/png/guide.png";
import MainLayout from "../../components/MainLayout/MainLayout";
function Place() {
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
            <div className="places_recommented_heading2">Recommented</div>
          </div>
          <div className="places_recommented_cards">
            <div className="places__top__left">
              <div className="place__top__left__left">
                <div className="place__left__details">
                  <img src={img} alt="" className="place__img" />
                  <div className="places__details__p">
                    <div className="place__details__para">
                      <p>place_name</p>
                      <p>place__location</p>
                    </div>
                    <div className="place__left__like">
                      <p>place__like</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="places__top__left__right">
                <div className="place__left__details">
                  <img src={img} alt="" className="place__img" />
                  <div className="places__details__p">
                    <div className="place__details__para">
                      <p>place_name</p>
                      <p>place__location</p>
                    </div>
                    <div className="place__left__like">
                      <p>place__like</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="places__div__bottom">
              <div className="place__left__details__div">
                <img src={img} alt="" className="place__img" />
                <div className="places__details__p">
                  <div className="place__details__para">
                    <p>place_name</p>
                    <p>place__location</p>
                  </div>
                  <div className="place__left__like">
                    <p>place__like</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="places__top__left">
              <div className="place__top__left__left">
                <div className="place__left__details">
                  <img src={img} alt="" className="place__img" />
                  <div className="places__details__p">
                    <div className="place__details__para">
                      <p>place_name</p>
                      <p>place__location</p>
                    </div>
                    <div className="place__left__like">
                      <p>place__like</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="places__top__left__right">
                <div className="place__left__details">
                  <img src={img} alt="" className="place__img" />
                  <div className="places__details__p">
                    <div className="place__details__para">
                      <p>place_name</p>
                      <p>place__location</p>
                    </div>
                    <div className="place__left__like">
                      <p>place__like</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
       
      </div>
    </MainLayout>
  );
}

export default Place;
