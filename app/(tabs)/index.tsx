import { Link } from "expo-router";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WeatherWidget from "@/components/WeatherWidget";
import useLocations from "@/hooks/useLocations";

export default function HomeScreen() {
  const locations = useLocations();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {locations?.map((coordinates) => {
          return (
            <Link href="/details" asChild key={coordinates.lat}>
              <Pressable>
                <WeatherWidget
                  latitude={coordinates.lat}
                  longitude={coordinates.long}
                />
              </Pressable>
            </Link>
          );
        })}
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
});
