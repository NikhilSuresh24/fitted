import { Text, View, TouchableOpacity, StyleSheet, ImageBackground, TextInput } from "react-native";
import React, {useState} from "react";
import Background from "../components/background.js";
import TitleWithLines from "../components/linedTitle.js";

const FitScreen = ({ navigation, fit, setFit }) => {

    const [curFit, setCurFit] = useState("Unisex");

    const handleSubmit = () => {
        setFit(curFit);
        navigation.navigate("Month");
    };
  return (
    <Background>
      <View style={styles.container}>
        <TitleWithLines title="FITTED" />

        <TouchableOpacity
        style={[
          styles.button,
          curFit === "Male" && styles.selectedButton,
        ]}
        onPress={() => {setCurFit("Male"); console.log(curFit)}}
      >
        <Text style={styles.buttonText}>Male</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          curFit === "Female" && styles.selectedButton,
        ]}
        onPress={() => {setCurFit("Female"); console.log(curFit)}}
      >
        <Text style={styles.buttonText}>Female</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          curFit === "Unisex" && styles.selectedButton,
        ]}
        onPress={() => {setCurFit("Unisex"); console.log(curFit)}}
      >
        <Text style={styles.buttonText}>Unisex</Text>
      </TouchableOpacity>
        <TouchableOpacity style={styles.submit_button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "start",
      marginVertical: 100,
      // marginTop: 100,
      // marginBottom: 150,
      alignItems: "center",
    },
    titleContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 20,
    },
    title: {
      fontSize: 44,
      fontWeight: "bold",
      color: "#000",
      marginHorizontal: 10,
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: "#000",
    },
    subtitle: {
      fontSize: 32,
      fontWeight: "bold",
      color: "#fff",
      backgroundColor: "#000",
      padding: 10,
      borderRadius: 10,
      marginVertical: 20,
    },
    input: {
      borderWidth: 3,
      borderColor: "#000",
      padding: 10,
      width: 250,
      borderRadius: 5,
      marginTop: 20,
      // margin: 15,
      height: 60,
      fontSize: 20,
    },
    selectedButton: {
        backgroundColor: "#2196F3",
      },
    button: {
      backgroundColor: "#000",
      paddingVertical: 20,
      paddingHorizontal: 40,
      borderRadius: 10,
      marginTop: 40,
      width: 250,
    },
    submit_button: {
      backgroundColor: "#4e5176",
      paddingVertical: 5,
      paddingHorizontal: 40,
      borderRadius: 10,
      // marginVertical: 5,
      marginTop: 30,
      width: 250,
    },
    buttonText: {
      color: "#fff",
      fontSize: 32,
      fontWeight: "bold",
      textAlign: "center",
      textAlignVertical: "center",
    },
  });

export default FitScreen;