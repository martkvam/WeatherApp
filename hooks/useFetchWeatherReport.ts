import getWeatherForLocation from "@/services/weatherService"
import { useQuery } from "@tanstack/react-query"

const useFetchWeatherReport = (lat: number, long: number) => {
    return useQuery({
        queryKey: [lat, long],
        queryFn: () => getWeatherForLocation(lat, long)
    })
};

export default useFetchWeatherReport;