import axios from "axios";

const client = axios.create({
  baseURL: "http://api.apixu.com/v1"
});

client.interceptors.request.use(function(config) {
  console.log(config);
  config.params.key = "f04c33c3c95e40c68a585310191308";
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
