import React, { useState } from "react";

import { Home } from "../components/Home";

export const HomeScreen = ({}) => {
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

  return (
    <Home
      tempratureOptions={tempratureOptions}
      search={search}
      setSearch={setSearch}
      handleOptionChange={handleOptionChange}
    />
  );
};
