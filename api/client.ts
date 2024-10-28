import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.met.no/weatherapi/locationforecast/2.0/compact",
});