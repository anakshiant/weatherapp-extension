import React, { useState, useContext, useEffect } from "react";

import { Home } from "../components/Home";
import WeatherContext from "../contexts/WeatherContext";

export const HomeScreen = ({}) => {
  const {
    processing,
    currentWeather,
    forecastData,
    featchWeatherData
  } = useContext(WeatherContext);

  const [tempratureOptions, setTempratureOptions] = useState([
    { name: "Celcius", active: true },
    { name: "Farhenite", active: false }
  ]);

  const [search, setSearch] = useState("");

  const handleOptionChange = value => {
    let options = tempratureOptions.map(element => {
      if (element.name === value) {
        element.active = true;
        return element;
      }
      element.active = false;
      return element;
    });
    setTempratureOptions(options);
  };

  useEffect(() => {
    featchWeatherData();
  }, []);

  return (
    <Home
      tempratureOptions={tempratureOptions}
      search={search}
      setSearch={setSearch}
      handleOptionChange={handleOptionChange}
      currentWeather = {currentWeather}
      forecastData = {forecastData}
    />
  );
};
