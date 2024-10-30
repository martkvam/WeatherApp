import useFetchWeatherReport from "@/hooks/useFetchWeatherReport";
import { Coordinates } from "@/types/coordinates";
import { iconMap } from "@/utils/iconMap";
import { View, Text, StyleSheet, Image } from "react-native";

type Props = {
  coordinates: Coordinates;
};

const WeatherWidget = ({ coordinates }: Props) => {
  const { data, isLoading, isError, error } = useFetchWeatherReport(
    coordinates.lat,
    coordinates.long
  );
  const weatherSymbolCode =
    data?.properties.timeseries[0].data.next_1_hours?.summary.symbol_code;
  const weatherIcon = iconMap[weatherSymbolCode as keyof typeof iconMap];
  if (isError) {
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
      <Text style={styles.boldText}>{coordinates.name}</Text>
      <View>
        <Image source={weatherIcon} style={styles.icon} />
        <Text style={styles.boldText}>
          {data?.properties?.timeseries[0]?.data.instant.details.air_temperature.toFixed(
            0
          )}{" "}
          °C
        </Text>
      </View>
    </View>
  );
};

export default WeatherWidget;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 8,
    width: "90%",
    height: 80,
    borderWidth: 1,
    borderRadius: 5,
  },
  boldText: {
    fontSize: 20,
    fontWeight: "500",
  },
  icon: {
    width: 40,
    height: 40,
  },
});
