import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigators/RootNavigator";
import { ThemeProvider } from "styled-components/native";
import { lightTheme } from "./theme/styled";
import { Asset } from "expo-asset";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "LineSeedKR-Bd": require("./assets/fonts/LINESeedKR-Bd.otf"),
          "LineSeedKR-Rg": require("./assets/fonts/LINESeedKR-Rg.otf"),
          "LineSeedKR-Th": require("./assets/fonts/LINESeedKR-Th.otf"),
        });
        await Font.loadAsync(Ionicons.font);
        await Asset.loadAsync([require("./assets/images/welcome.png")]);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const handleLayoutReady = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <NavigationContainer onReady={handleLayoutReady}>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
