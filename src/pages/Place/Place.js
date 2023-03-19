import React from "react";
import "./Place.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from "../../../src/assets/png/guide.png";
import MainLayout from "../../components/MainLayout/MainLayout";
function Place() {
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
        <Carousel responsive={responsive}>
          <div class="place__div" >
            <div className="place__user__img">
              <img src={img} className="place__user__img" alt="" />
            </div>
            <div className="plcae__details">
              <p>Sanosh Jacob</p>
              <p className="place__place">dem</p>
              <p className="place__content">demo</p>
            </div>
          </div>
          <div class="place__div" >
            <div className="place__user__img">
              <img src={img} className="place__user__img" alt="" />
            </div>
            <div className="plcae__details">
              <p>Sanosh Jacob</p>
              <p className="place__place">dem</p>
              <p className="place__content">demo</p>
            </div>
          </div>
          <div class="place__div" >
            <div className="place__user__img">
              <img src={img} className="place__user__img" alt="" />
            </div>
            <div className="plcae__details">
              <p>Sanosh Jacob</p>
              <p className="place__place">dem</p>
              <p className="place__content">demo</p>
            </div>
          </div>

        </Carousel>
        ;
      </div>
    </MainLayout>
  );
}

export default Place;
