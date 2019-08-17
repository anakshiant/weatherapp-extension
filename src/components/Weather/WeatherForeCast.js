import React from "react";

export const WeatherForeCast = ({ forecasts }) => {
  return (
    <div className="weather-details mt-2">
      <div className="card bg-light mb-3">
        <div className="card-header">Forecast</div>
        <div className="card-body forecast">
          {forecasts &&
            forecasts.length &&
            forecasts.map((forecast, index) => (
              <div className="d-flex justify-content-between" key={index}>
                <div className="weather-details-item mb-2">
                  {forecast.day}/{forecast.year}
                </div>
                <div className="weather-details-item mb-2">
                  {forecast.temprature} &deg; {forecast.tempratureUnit}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
