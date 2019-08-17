import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

client.interceptors.request.use(function(config) {
  config.params.key = process.env.REACT_APP_API_SECRET_KEY;
  return config;
});

export const normalizeResponse = async apiTask => {
  try {
    const responseData = await apiTask;
    if (responseData.statusText === "OK") {
      return responseData.data;
    } else {
      throw responseData;
    }
  } catch (error) {
    throw new Error("Ap is not responding");
  }
};

export default client;
