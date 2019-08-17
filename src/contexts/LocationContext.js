import React, { useState } from "react";

import { getLocations } from "../services/locationService";

const LocationContext = React.createContext({});

export const LocationProvider = ({ children }) => {
  const [processing, setProcessing] = useState(false);
  const [location, setLocation] = useState({});
  const [locationSearchResult, setLocationSearchResult] = useState([]);

  const searchLocation = async name => {
    try {
      setProcessing(true);
      const locations = await getLocations(name);
      setLocationSearchResult(locations);
      setProcessing(false);
    } catch (err) {
      // shwo notification or something
      setProcessing(false);
    }
  };

  return (
    <LocationContext.Provider
      value={{
        processing,
        location,
        locationSearchResult,
        setLocation,
        searchLocation
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
