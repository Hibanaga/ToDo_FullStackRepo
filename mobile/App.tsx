import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import HomeBottomTabs from "./src/screens/navigators/BottomTabs";
import { LogInContext } from "./src/screens/Auth/hooks/contextLoggin";

export default function App() {
  const queryClient = new QueryClient();
  const [isLoggenIn, setLoggenIn] = useState<boolean>(false);

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <LogInContext.Provider value={{ isLoggenIn, setLoggenIn }}>
          <HomeBottomTabs isLoggenIn={isLoggenIn} />
        </LogInContext.Provider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
