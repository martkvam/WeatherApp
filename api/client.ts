import axios from "axios";

export const weatherApiClient = axios.create({
  baseURL: "https://api.met.no/weatherapi/locationforecast/2.0/compact",
});

export const sunApiClient = axios.create({
    baseURL: "https://api.met.no/weatherapi/sunrise/3.0/sun",
})