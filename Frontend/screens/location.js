import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  TextInput,
} from "react-native";
import React, {useState} from "react";
import Background from "../components/background.js";
import TitleWithLines from "../components/linedTitle.js";

const LocationScreen = ({ navigation, location, setLocation }) => {
  const [text, setText] = useState("");
  const handlePress = () => {
    setLocation(text);
    navigation.navigate("Fit");
  };
  return (
    <Background>
      <View style={styles.container}>
        <TitleWithLines title="FITTED" />
        <TouchableOpacity
          disabled={true}
          style={styles.button}
        >
          <Text style={styles.buttonText}>LOCATION</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
          placeholder="Paris, New York City, Moscow..."
        />
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SURPRISE ME!</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.submit_button} onPress={handlePress}> 
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
    marginTop: 20,
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

export default LocationScreen;
