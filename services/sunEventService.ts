import { sunApiClient, weatherApiClient } from "@/api/client";
import { SunEvents } from "@/types/sunEvents";

export const getSunEvents = async (latitude: number, longitude: number) => {
    try {
        const today = new Date().toISOString().split("T")[0];
        const res = await sunApiClient.get("", {
            params: {
                lat: latitude,
                lon: longitude,
                date: today,
                offset: "+01:00"
            }
        });
        return res.data as SunEvents;
    } catch (err){
        console.error(err);
        throw err;
    }
}