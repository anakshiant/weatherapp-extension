import React, { createContext, useState } from "react";

import { getWeatherData } from "../services/weatherService";
import {
  formatCurrentWeather,
  formatForecast
} from "../utils/apiResponseFormatter";

const WeatherContext = createContext({});

export const WeatherProvider = ({ children }) => {
  const [processing, setProcessing] = useState(false);
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecastData, setForeCastData] = useState({});

  const featchWeatherData = async () => {
    try {
      setProcessing(true);
      const weatherData = await getWeatherData("Noida");
      console.log(weatherData);
      setCurrentWeather(formatCurrentWeather(weatherData));
      setForeCastData(formatForecast(weatherData));
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
        currentWeather,
        forecastData,
        featchWeatherData
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
