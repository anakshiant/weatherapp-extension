import React from "react";

import { WeatherSummary } from "./WeatherSummary";
import { WeatherDetail } from "./WeatherDetail";
import { WeatherForeCast } from "./WeatherForeCast";

export const WeatherData = ({currentWeather,forecastData}) => {
  const weatherSummary = {
    temprature: currentWeather.temprature,
    tempratureUnit: currentWeather.tempratureUnit,
    minTemprature: currentWeather.minTemprature,
    maxTemprature: currentWeather.maxTemprature,
    location: currentWeather.location,
    icon: currentWeather.icon,
    condition: currentWeather.condition
  };

  const weatherDetail = {
    humidity: currentWeather.humidity,
    visiblity: currentWeather.visiblity
  };


  return (
    <div className="row pt-2 pb-2">
      <div className="col-md-12 weather-data">
        <WeatherSummary {...weatherSummary} />
        <WeatherDetail {...weatherDetail} />
        <WeatherForeCast forecasts={forecastData} />
      </div>
    </div>
  );
};
