import React, { createContext, useState } from "react";

import { TEMPRATURE_UNITS } from "../utils/temprature.util";

const TempratureUnitContext = createContext({});

export const TempratureUnitProvider = ({ children }) => {
  const [tempratureUnit, setTempratureUnit] = useState(
    TEMPRATURE_UNITS.CELSIUS
  );

  const tempratureUnits = [TEMPRATURE_UNITS.CELSIUS,TEMPRATURE_UNITS.FAHRENHEIT];

  return (
    <TempratureUnitContext.Provider
      value={{ tempratureUnit, setTempratureUnit,tempratureUnits }}
    >
      {children}
    </TempratureUnitContext.Provider>
  );
};


export default TempratureUnitContext;