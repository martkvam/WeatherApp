import { apiClient } from "@/api/client";
import { WeatherDetails } from "@/types/weatherDetails";

export default async function getWeatherForLocation(lat: number, long: number){
    try {
        const res = await apiClient.get<WeatherDetails>("", {
            params: {
                lat: lat,
                lon: long
            }
        });
        const weatherDetails = res.data as WeatherDetails;
        return weatherDetails;
    } catch (err){
        console.error(err);
    }
}