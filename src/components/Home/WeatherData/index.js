import React from "react";

import { WeatherSummary } from "./WeatherSummary";
import { WeatherDetail } from "./WeatherDetail";
import { WeatherForeCast } from "./WeatherForeCast";

export const WeatherData = ({}) => {
  const weatherSummary = {
    temprature: "40",
    tempratureUnit: "C",
    minTemprature: "12",
    maxTemprature: "23",
    location: "Noida, India",
    icon: "http://cdn.apixu.com/weather/64x64/day/296.png",
    condition: "Light Rain"
  };

  const weatherDetail = {
    humidity: 3,
    visiblity: 5
  };

  const weatherForecasts = [{
    day:12,
    year:19,
    temprature: 23,
    tempratureUnit: "c"
  }]

  return (
    <div className="row pt-2 pb-2">
      <div className="col-md-12 weather-data">
        <WeatherSummary {...weatherSummary} />
        <WeatherDetail {...weatherDetail} />
        <WeatherForeCast forecasts={weatherForecasts} />
      </div>
    </div>
  );
};
