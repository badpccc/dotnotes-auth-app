import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

export default function SafeArea({ children }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
      edges={["top", "bottom", "left", "right"]}
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      {children}
    </SafeAreaView>
  );
}