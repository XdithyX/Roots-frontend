import React from "react";

const ActivityCard = ({ activityName, activityImage }) => {
  return (
    <div className="destination__cards_item ">
      <div
        className="act__card_image"
        style={{
          backgroundImage: `url(${activityImage})`,
          // backgroundImage: `url(${externalImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "15rem",
          width: "20rem",
        }}
      >
        <div className="act__card_titles">
          <p>{activityName}</p>
        </div>
       
      </div>
    </div>
  );
};

export default ActivityCard;
