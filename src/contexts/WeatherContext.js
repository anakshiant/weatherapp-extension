import React, { createContext, useState } from "react";

import { getWeatherData } from "../services/weatherService";

const WeatherContext = createContext({});

export const WeatherProvider = ({ children }) => {
  const [processing, setProcessing] = useState(false);
  const [tempratureUnit, setTempratureUnit] = useState("Celcius");
  const [currentWeather, setCurrentWeather] = useState({});
  const [locationData, setLocationData] = useState({});
  const [forecastData, setForeCastData] = useState({});

  const featchWeatherData = async () => {
    try {
      setProcessing(true);
      const weatherData = await getWeatherData();
      setLocationData(weatherData.location);
      setCurrentWeather(weatherData.current);
      setForeCastData(weatherData.forecast.forecastDay);
      setProcessing(false);
    } catch (error) {
      // do something show notification or something
      setProcessing(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        processing,
        tempratureUnit,
        setTempratureUnit,
        currentWeather,
        locationData,
        forecastData,
        featchWeatherData
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};


export default WeatherContext;
