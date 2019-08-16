import client, { normalizeResponse } from "./";

export const getLocations = async name => {
  return normalizeResponse(client.get("/search.json", { params: { q: name } }));
};
