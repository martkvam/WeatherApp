import { Coordinates } from "@/types/coordinates"
import { useState } from "react"

const defaultLocations: Coordinates[] = [{
    lat: 52.5200,
    long: 13.4049
},
{
    lat: 51.5098,
    long: -0.1180
}];

const useLocations = () => {
    const [locations, setLocations] = useState<Coordinates[]>(defaultLocations);

    return locations;
}

export default useLocations;