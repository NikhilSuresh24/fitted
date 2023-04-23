import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppStack from "./screens/appStack";

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!TEST</Text>
        <StatusBar style="auto" />
      </View> */}
      <AppStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
