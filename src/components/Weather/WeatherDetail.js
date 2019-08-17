import React from "react";

export const WeatherDetail = ({humidity,visiblity}) => {
  return (
    <div className="weather-details mt-2">
      <div className="card mb-3">
        <div className="card-header">Details</div>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="weather-details-item mb-2">Humidity</div>
            <div className="weather-details-item mb-2">{humidity} %</div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="weather-details-item mb-2">Visibility</div>
            <div className="weather-details-item mb-2">{visiblity} km</div>
          </div>
        </div>
      </div>
    </div>
  );
};
