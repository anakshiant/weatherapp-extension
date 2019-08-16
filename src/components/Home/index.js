import React from "react";

import { ToggleButton } from "../Common/ToggleButton";
import { SearchBox } from "../Common/SearchBox";
import { WeatherData } from "./WeatherData";

export const Home = ({
  tempratureOptions,
  handleOptionChange,
  setSearch,
  search
}) => {
  return (
    <React.Fragment>
      <ToggleButton
        options={tempratureOptions}
        handleOptionChange={handleOptionChange}
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
        <WeatherData />
      </div>
    </React.Fragment>
  );
};
