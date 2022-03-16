import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Navigation from "./src/navigation";
import RootNavigator from "./src/navigation/RootNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <RootNavigator />
      <StatusBar />
    </SafeAreaProvider>
  );
}
