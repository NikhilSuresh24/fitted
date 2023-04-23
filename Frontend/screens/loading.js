import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Background from "../components/background.js";
import TitleWithLines from "../components/linedTitle.js";

const axios = require('axios');
const LoadingScreen = ({ navigation, location, fit, month, clothingStyle }) => {

    const backendRequest = () => {
        console.log("making request");
        // axios.get
        axios.get(
            `http://127.0.0.1:5000/get_outfits?location=${location}&month=${month}&fit=${fit}&style=${clothingStyle}`
          )
          .then(function (res) {
            console.log("RES" + res);
            let outfit1 = res[0]
            let outfit2 = res[1]
            let outfit3 = res[2]
            navigation.navigate("Display", { res });
          });
      };
    useEffect(() => {backendRequest()}, []);
  

  return (
    <Background>
      <View style={styles.container}>
        <TitleWithLines title="FITTED" />
        <TouchableOpacity>
          <Text style={styles.title}>Loading Results...</Text>
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
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#000",
  },
});

export default LoadingScreen;
