import { Drawer } from "expo-router/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles, { drawerScreenOptions } from "@/styles/global";

export default function DrawerLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
      <Drawer
        screenOptions={{
          ...drawerScreenOptions,
          drawerStyle: {
            backgroundColor: "#fff", // ou transparente se quiser efeito total
          },
        }}
      />
    </SafeAreaView>
  );
}