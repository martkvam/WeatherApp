import { render, waitForElementToBeRemoved } from "../../utils/test-utils";

import WeatherWidget from "../WeatherWidget";
import { Coordinates } from "@/types/coordinates";

describe("WeatherWidget", () => {
  test("Loading text is shown", async () => {
    const coordinates: Coordinates = {
      name: "New York",
      lat: 40.7306,
      long: -73.9352,
    };
    const { getByText } = render(<WeatherWidget coordinates={coordinates} />);
    getByText("Loading weather data...");
  });
});
