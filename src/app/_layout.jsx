import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Styles from "@/styles/global";

export default function RootLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      
      <StatusBar style="dark" backgroundColor="#fff" />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#fff",
          },
        }}
      />
    </View>
  );
}