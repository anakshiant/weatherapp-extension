import React, { useState, useContext, useEffect } from "react";

import { Spinner } from "../components/Common/Spinner";
import WeatherContext from "../contexts/WeatherContext";
import TempratureUnitContext from "../contexts/TempratureContext";

export const HomeContainer = ({ children }) => {
  const {
    processing,
    currentWeather,
    forecastData,
    featchWeatherData,
    setWeatherData
  } = useContext(WeatherContext);

  const { tempratureUnit, setTempratureUnit, tempratureUnits } = useContext(
    TempratureUnitContext
  );

  const [search, setSearch] = useState("");

  useEffect(() => {
    featchWeatherData();
  }, [tempratureUnit]);

  return (
    <React.Fragment>
      {processing && <Spinner />}
      {!processing &&
        children({
          tempratureUnits,
          tempratureUnit,
          search,
          setSearch,
          setTempratureUnit,
          currentWeather,
          forecastData
        })}
    </React.Fragment>
  );
};
