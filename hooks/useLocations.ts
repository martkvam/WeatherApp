import { Coordinates } from "@/types/coordinates";
import { useEffect, useState } from "react";
import * as Location from "expo-location";

const defaultLocations: Coordinates[] = [{
    name: "Berlin",
    lat: 52.5200,
    long: 13.4049
},
{
    name: "London",
    lat: 51.5098,
    long: -0.1180
}];

export const useLocations = () => {
    const [locations, setLocations] = useState<Coordinates[]>(defaultLocations);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }

            const location = await Location.getCurrentPositionAsync({});
            const latitude = Number((location.coords.latitude).toFixed(4)); 
            const longitude = Number((location.coords.longitude).toFixed(4));
            const currentPosition: Coordinates = {
                name: "My location",
                lat: latitude,
                long: longitude
            } 
            let newLocationList = locations.filter(x => x.name !== "My location");
            newLocationList.unshift(currentPosition);
            setLocations(newLocationList);
            }
        )();
    }, [])

    return locations;
}