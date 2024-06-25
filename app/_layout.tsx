import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { Text } from "react-native";

import { useColorScheme } from "@/hooks/useColorScheme";
import { View } from "react-native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerTitle: () => (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingRight: 24,
              }}
            >
              <Text
                style={{ color: "#ce7328", fontSize: 26, fontWeight: "bold" }}
              >
                beije.
              </Text>
              <View style={{ flexDirection: "row", columnGap: 8 }}>
                <TabBarIcon
                  name="cart-outline"
                  color={Colors[colorScheme ?? "light"].text}
                />
                <TabBarIcon
                  name="person-outline"
                  color={Colors[colorScheme ?? "light"].text}
                />
                <TabBarIcon
                  name="menu-outline"
                  color={Colors[colorScheme ?? "light"].text}
                />
              </View>
            </View>
          ),
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </ThemeProvider>
  );
}
