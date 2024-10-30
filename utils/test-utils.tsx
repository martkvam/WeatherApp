import React from "react";
import { render } from "@testing-library/react-native";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const AllTheProviders = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, //5 minutter
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={DefaultTheme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react-native";

// override render method
export { customRender as render };
