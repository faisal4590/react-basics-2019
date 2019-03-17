import React from "react";
import "../css/SeasonDisplay.css";

const getSeason = (lat, month) => {
  if (month >= 2 && month <= 10) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const seasonConfig = {
  summer: {
    text: "Its summer season in your region",
    iconName: "sun"
  },
  winter: {
    text: "Its winter season in your region",
    iconName: "snowflake"
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());

  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={` massive icon-left ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={` massive icon-right ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
