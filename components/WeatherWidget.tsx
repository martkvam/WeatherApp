import useFetchWeatherReport from "@/hooks/useFetchWeatherReport";
import { Coordinates } from "@/types/coordinates";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  coordinates: Coordinates;
};

const WeatherWidget = ({ coordinates }: Props) => {
  const { data, isLoading, isError, error } = useFetchWeatherReport(
    coordinates.lat,
    coordinates.long
  );

  if (isError && error) {
    return (
      <View style={styles.container}>
        <Text>There was an error while fetching weather data</Text>
      </View>
    );
  }
  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading weather data...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text>{coordinates.name}</Text>
      <Text>
        {data?.properties?.timeseries[0]?.data.instant.details.air_temperature}
      </Text>
    </View>
  );
};

export default WeatherWidget;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 8,
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});
