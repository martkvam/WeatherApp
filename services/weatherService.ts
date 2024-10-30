import { weatherApiClient } from "@/api/client";
import { WeatherDetails } from "@/types/weatherDetails";

export const getWeatherForLocation = async (lat: number, long: number) => {
    try {
        const res = await weatherApiClient.get<WeatherDetails>("", {
            params: {
                lat: lat,
                lon: long
            },
            headers: {
                "User-Agent": "WeatherApp/1.0.0 CFNetwork/975.0.3 Darwin/17.7.0"
            }
        });
        return res.data as WeatherDetails;
    } catch (err){
        console.error(err);
        throw err; //For useQuery to return error message
    }
}