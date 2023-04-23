import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Background from "../components/background.js";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Location");
  };

  return (
    <Background background="../assets/background.jpeg">
      <View style={styles.container}>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.title}>FITTED</Text>
          <Text style={styles.subtitle}>PERSONALIZED TRAVEL STYLE</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#000",
  },
  subtitle: {
    fontSize: 20,
    color: "#000",
  },
});

export default HomeScreen;
