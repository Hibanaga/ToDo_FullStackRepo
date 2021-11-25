// import axios from "axios";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/screens/navigators/index";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Navigator />
      </QueryClientProvider>
    </NavigationContainer>
  );
}
