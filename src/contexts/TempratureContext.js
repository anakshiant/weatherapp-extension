import React, { createContext, useState } from "react";

import { TEMPRATURE_UNITS } from "../utils/temprature.util";

const TempratureUnitContext = createContext({});

export const TempratureUnitProvider = ({ children }) => {
  const [tempratureUnit, setTempratureUnit] = useState(
    TEMPRATURE_UNITS.CELSIUS
  );

  return (
    <TempratureUnitContext.Provider
      value={{ tempratureUnit, setTempratureUnit }}
    >
      {children}
    </TempratureUnitContext.Provider>
  );
};


export default TempratureUnitContext;