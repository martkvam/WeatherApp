import { getSunEvents } from "@/services/sunEventService";
import { useQuery } from "@tanstack/react-query"

const useFetchSunEventsForLocation = (lat: number, long: number) => {
    return useQuery({
        queryKey: ["sunEvents", lat, long],
        queryFn: () => getSunEvents(lat, long)
    })
};

export default useFetchSunEventsForLocation;