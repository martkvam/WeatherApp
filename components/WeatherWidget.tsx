import { View, Text, StyleSheet } from "react-native";

type Props = {
  longitude?: number;
  latitude?: number;
};

const WeatherWidget = ({ longitude, latitude }: Props) => {
  return (
    <View style={styles.container}>
      <Text>{latitude}</Text>
      <Text>{longitude}</Text>
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
