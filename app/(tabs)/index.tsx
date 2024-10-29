import { Link } from "expo-router";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WeatherWidget from "@/components/WeatherWidget";
import { useLocations } from "@/hooks/useLocations";
import { useEffect } from "react";

export default function HomeScreen() {
  const locations = useLocations();

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        {locations?.map((coordinates, index) => {
          return (
            <Link
              href={{
                pathname: "/details",
                params: {
                  name: coordinates.name,
                  latitude: coordinates.lat,
                  longitude: coordinates.long,
                },
              }}
              asChild
              key={index}
            >
              <Pressable>
                <WeatherWidget coordinates={coordinates} />
              </Pressable>
            </Link>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    backgroundColor: "white",
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
});
