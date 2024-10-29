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
        {locations?.map((coordinates, index) => {
          return (
            <Link
              href={{
                pathname: "/details",
                params: {
                  name: coordinates.name,
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
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
});
