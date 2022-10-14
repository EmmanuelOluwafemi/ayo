import React, { useCallback, useEffect, useState } from "react";
import {
  NativeBaseProvider,
  extendTheme,
} from "native-base";
import MainLayout from "./src/layouts/MainLayout";
import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/config/routes";

const LinearGradient = require('expo-linear-gradient').LinearGradient;

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const dependencyConfig = {
  dependencies: {
    "linear-gradient": LinearGradient,
  }
}

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}
export default function App() {

  const [fontsLoaded] = useFonts({
    "EBGaramond-Bold": require("./assets/fonts/EBGaramond-Bold.ttf"),
    "EBGaramond-ExtraBold": require("./assets/fonts/EBGaramond-ExtraBold.ttf"),
    "EBGaramond-SemiBold": require("./assets/fonts/EBGaramond-SemiBold.ttf"),
    "EBGaramond-Medium": require("./assets/fonts/EBGaramond-Medium.ttf"),
    "EBGaramond-Regular": require("./assets/fonts/EBGaramond-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider config={dependencyConfig}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
