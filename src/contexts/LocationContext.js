import React, { createContext, useState } from "react";

import { getLocations } from "../services/locationService";

const LocationContext = React.createContext({});

export const LocationProvider = ({ children }) => {
  const [processing, setProcessing] = useState(false);
  const [location, setLocation] = useState({});
  const [locationSearchResult, setLocationSearchResult] = useState([]);
  const [locationQuery, setLocationQuery] = useState();

  const searchLocation = async () => {
    try {
      setProcessing(true);
      const locations = await getLocations(locationQuery);
      setLocationSearchResult(locations);
      setProcessing(false);
    } catch (err) {
      // shwo notification or something
      setProcessing(false);
    }
  };

  return (
    <LocationContext.Provider value={{ location, locationSearchResult }} />
  );
};

export default LocationContext;
