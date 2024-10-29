import useFetchSunEventsForLocation from "@/hooks/useFetchSunEventData";
import useFetchWeatherReport from "@/hooks/useFetchWeatherReport";
import { Stack, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { iconMap } from "../utils/iconMap";

export default function WeatherDetails() {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const placeName = (params.name as string) ?? "";
  const latitude = (params.latitude as unknown as number) ?? null;
  const longitude = (params.longitude as unknown as number) ?? null;
  const {
    data: weatherData,
    error: weatherDataError,
    isLoading: loadingWeatherData,
  } = useFetchWeatherReport(latitude, longitude);
  const {
    data: sunEvents,
    error: sunEventError,
    isLoading: loadingSunEvents,
  } = useFetchSunEventsForLocation(latitude, longitude);
  const weatherSymbolCode =
    weatherData?.properties.timeseries[0].data.next_1_hours?.summary
      .symbol_code;
  const weatherIcon = iconMap[weatherSymbolCode as keyof typeof iconMap];
  useEffect(() => {
    if (placeName) {
      navigation.setOptions({
        headerTitle: placeName,
      });
    }
  }, [params]);

  useEffect(() => {});

  if (weatherDataError) {
    return (
      <SafeAreaView>
        <View>
          <Text>There was an error while retrieving the weather data...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (loadingWeatherData) {
    return (
      <SafeAreaView>
        <View>
          <Text>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainDetails}>
        <Image source={weatherIcon} />
        <Text style={styles.temperatureText}>
          {weatherData?.properties?.timeseries[0]?.data.instant.details.air_temperature.toFixed(
            0
          )}{" "}
          °C
        </Text>
        <View style={styles.highLowTempContainer}>
          <Text>H: </Text>
          <Text>L:</Text>
        </View>
      </View>
      <View style={styles.additionalDetailsContainer}>
        <View style={[styles.additionalDetails, styles.borderBottom]}>
          <View style={[styles.detailBox, styles.borderRight]}>
            <Text style={styles.semiboldText}>Sunrise </Text>
            <Text>
              {sunEvents?.properties.sunrise.time.split("T")[1].split("+")[0]}
            </Text>
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.semiboldText}>Sunset </Text>
            <Text>
              {sunEvents?.properties.sunset.time.split("T")[1].split("+")[0]}
            </Text>
          </View>
        </View>
        <View style={styles.additionalDetails}>
          <View style={[styles.detailBox, styles.borderRight]}>
            <Text style={styles.semiboldText}>Humidity </Text>
            <Text>
              {
                weatherData?.properties.timeseries[0].data.instant.details
                  .relative_humidity
              }{" "}
              {weatherData?.properties.meta.units.relative_humidity}
            </Text>
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.semiboldText}>Windspeed </Text>
            <Text>
              {
                weatherData?.properties.timeseries[0].data.instant.details
                  .wind_speed
              }{" "}
              {weatherData?.properties.meta.units.wind_speed}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  mainDetails: {
    flexDirection: "column",
    alignItems: "center",
  },
  additionalDetailsContainer: {
    marginTop: 50,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  additionalDetails: {
    flexDirection: "row",
    gap: 20,
  },
  detailBox: {
    width: 130,
    height: 100,
    flexDirection: "column",
    justifyContent: "center",
    gap: 5,
  },
  highLowTempContainer: {
    flexDirection: "row",
  },
  temperatureText: {
    fontSize: 70,
  },
  semiboldText: {
    fontSize: 20,
    fontWeight: "500",
  },
  borderRight: {
    borderRightWidth: 1,
  },
  borderBottom: {
    borderBottomWidth: 1,
  },
});
