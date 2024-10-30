import { render, waitFor } from "../../utils/test-utils";

import HomeScreen from "../(tabs)";
import { useLocations } from "../../hooks/useLocations";
import { Coordinates } from "@/types/coordinates";

const mockedLocations: Coordinates[] = [
  {
    name: "Berlin",
    lat: 52.52,
    long: 13.4049,
  },
  {
    name: "London",
    lat: 51.5098,
    long: -0.118,
  },
];
jest.mock("../../hooks/useLocations", () => ({
  useLocations: jest.fn(),
}));
describe("HomeScreen", () => {
  it("Correct number of widgets are rendered", () => {
    (useLocations as jest.Mock).mockReturnValue(mockedLocations);
    const { getAllByText } = render(<HomeScreen />);
    const components = getAllByText("Loading weather data...");
    expect(components.length).toBe(mockedLocations.length);
  });

  it("Location names are rendered correctly", async () => {
    (useLocations as jest.Mock).mockReturnValue(mockedLocations);
    const { queryByText, getByText } = render(<HomeScreen />);
    await waitFor(() => {
      expect(() => queryByText("Loading weather data...")).toBeNull();
    });
    mockedLocations.forEach((location) => {
      expect(getByText(location.name)).toBeTruthy();
    });
  });
});
