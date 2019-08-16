import client, { normalizeResponse } from "./";

export const getWeatherData = async (location, days) => {
  return normalizeResponse(
    client.get("/forecast.json", {
      params: {
        q: location,
        days: days || 5
      }
    })
  );
};
