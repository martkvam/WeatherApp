import { Stack, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WeatherDetails() {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const placeName = (params.name as string) ?? "";

  useEffect(() => {
    if (placeName) {
      navigation.setOptions({
        headerTitle: placeName,
      });
    }
  }, [params]);
  return (
    <SafeAreaView>
      <View>
        <Text>Her kommer værdetaljer</Text>
        <Text>{params.name}</Text>
      </View>
    </SafeAreaView>
  );
}
