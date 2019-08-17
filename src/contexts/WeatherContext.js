import React, { createContext, useState, useContext } from "react";

import { getWeatherData } from "../services/weatherService";
import {
  formatCurrentWeather,
  formatForecast
} from "../utils/apiResponseFormatter";

import TempratureUnitContext from "../contexts/TempratureContext";
import NotificationContext from "../contexts/NotificationContext";

const WeatherContext = createContext({});

export const WeatherProvider = ({ children }) => {
  const { tempratureUnit } = useContext(TempratureUnitContext);
  const notify = useContext(NotificationContext);

  const [processing, setProcessing] = useState(false);
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecastData, setForeCastData] = useState({});
  const [responseData, setResponseData] = useState({});

  const featchWeatherData = async () => {
    try {
      setProcessing(true);
      const weatherData = await getWeatherData("Noida");
      setResponseData(weatherData);
      setCurrentWeather(formatCurrentWeather(weatherData, tempratureUnit));
      setForeCastData(formatForecast(weatherData, tempratureUnit));
      setProcessing(false);
    } catch (error) {
      setProcessing(false);
      notify("Something went wrong");
    }
  };

  const setWeatherData = () => {};
  
  return (
    <WeatherContext.Provider
      value={{
        processing,
        currentWeather,
        forecastData,
        featchWeatherData,
        setWeatherData
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
