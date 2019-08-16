import React from "react";

export const WeatherSummary = ({
  temprature,
  tempratureUnit,
  minTemprature,
  maxTemprature,
  location,
  icon,
  condition
}) => {
  return (
    <React.Fragment>
      <div className="header-title">
        <img src={icon} alt={"Sunrise"} /> {temprature} &deg; {tempratureUnit}
        <span>
          min: {minTemprature} &deg; {tempratureUnit} max: {maxTemprature} &deg;{" "}
          {tempratureUnit}
        </span>
      </div>
      <div className="location-details">{location}</div>
      <div className="details">{condition}</div>
    </React.Fragment>
  );
};
