import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import ExploreBox from "../../components/ExploreBox/ExploreBox";
import "./Explore.css";
function Explore() {
  return (
    <MainLayout>
      <div className="explore__pg">
        <div className="top__sec">
          <div className="explore__heading">ROOT The World </div>
          <div className="top__seccont">
            Aliquet sem suspendisse tristique habitant consectetur cursus at.
            Leo in eget convallis nunc rhoncus nulla m
          </div>
          <input className="searchbar"></input>
        </div>

        <div className="ethnic__sec">
          <div className="explore__subheading">Ethnic Cuisines</div>
          <div className="ethnic__cont">
            <div className="ethinc__subcont1">
              <div className="ethnic__subsubcont1">
                <div className="divn1">hello</div>
                <div className="divn2">hello</div>
              </div>
              <div className="ethnic__subsubcont2">hello</div>
            </div>
            <div className="ethnic__subcont2"></div>
          </div>
        </div>

        <div className="cultural__sec">
          <div className="explore__subheading">Cultural Events</div>
          <div className="cultural__subheading">
            Book to stand a chance to win our free offers to one of these
            tourist centers.{" "}
          </div>
          <div className="explore__container">
            <ExploreBox />
            <ExploreBox />
            <ExploreBox />
            <ExploreBox />
            <ExploreBox />
          </div>
        </div>
        <div className="Workshop__sec">
          <div className="explore__subheading">Cultural Events</div>
          <div className="cultural__subheading">
            Book to stand a chance to win our free offers to one of these
            tourist centers.{" "}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Explore;
