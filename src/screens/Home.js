import React from "react";

import { ToggleButton } from "../components/Common/ToggleButton";
import { SearchBox } from "../components/Common/SearchBox";
import { WeatherData } from "../components/Weather";
import { HomeContainer } from "../container/home";

export const HomeScreen = () => {
  return (
    <HomeContainer>
      {({
        tempratureUnits,
        tempratureUnit,
        search,
        setSearch,
        setTempratureUnit,
        currentWeather,
        forecastData
      }) => {
        return (
          <React.Fragment>
            <ToggleButton
              options={tempratureUnits}
              value={tempratureUnit}
              handleOptionChange={setTempratureUnit}
            />
            <div className="row">
              <SearchBox
                searchPlaceHolder={"City,Country"}
                handleValueChange={value => {
                  setSearch(value);
                }}
                value={search}
              />
            </div>
            <div className="row pt-2 pb-2">
              <WeatherData
                currentWeather={currentWeather}
                forecastData={forecastData}
              />
            </div>
          </React.Fragment>
        );
      }}
    </HomeContainer>
  );
};
