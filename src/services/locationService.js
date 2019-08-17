import client, { normalizeResponse } from "./";

export const getLocations = async name => {
  return normalizeResponse(client.get("/search.json", { params: { q: name } }));
};

export const getCurrentLocation = async () => {
  return process.env.NODE_ENV === "development" ? "Noida" : "Noida";
};
