import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  TextInput,
  Linking,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import Background from "../components/background.js";
import TitleWithLines from "../components/linedTitle.js";

const axios = require("axios");

const DisplayScreen = ({ navigation, location, fit, month, clothingStyle }) => {
  // const { res } = route.params;
  // outfits = route.params.response;
  // console.log(outfits);
  const [outfits, setOutfits] = useState([]);
  const [outfitNum, setOutfitNum] = useState(0);

  useEffect(() => {
    console.log("OUTFITS CHANGE");
    console.log(outfits);
  }, [outfits]);
  const backendRequest = () => {
    console.log("making request");
    // axios.get
    axios
      .get(
        `http://127.0.0.1:5000/get_outfits?location=${location}&month=${month}&fit=${fit}&style=${clothingStyle}`
      )
      .then(function (res) {
        console.log("RES");
        console.log(res);
        // const json = JSON.parse(res);
        // console.log(json);
        // console.log(json['_response']);
        console.log(outfits);
        // console.log(res.keys());
        // const response = res['request']['_response'];
        // const outfit1 = response[0];
        let response = res["request"]["_response"];
        // console.log(response);

        // console.log(JSON.parse(res["request"]["_response"]));
        // let outfit1 = res[0]
        // let outfit2 = res[1]
        // let outfit3 = res[2]
        setOutfits(JSON.parse(response));

        // navigation.navigate("Display", { res });
      });
  };
  useEffect(() => {
    backendRequest();
  }, []);

  return (
    <Background>
      <View style={styles.container}>
        {/* <TitleWithLines title="FITTED" /> */}

        <TouchableOpacity
          style={[styles.button, outfitNum === 0 && styles.selectedButton]}
          onPress={() => {
            setOutfitNum(0);
            console.log(outfitNum);
          }}
        >
          <Text style={styles.buttonText}>Outfit 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, outfitNum === 1 && styles.selectedButton]}
          onPress={() => {
            setOutfitNum(1);
            console.log(outfitNum);
          }}
        >
          <Text style={styles.buttonText}>Outfit 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, outfitNum === 2 && styles.selectedButton]}
          onPress={() => {
            setOutfitNum(2);
            console.log(outfitNum);
          }}
        >
          <Text style={styles.buttonText}>Outfit 3</Text>
        </TouchableOpacity>
        {/* <Text style={styles.subtitle}>{outfits[outfitNum]}</Text> */}
        {outfits.map((outfit_json, outfit_idx) => (
          <View>
            {outfit_idx === outfitNum && (
              <View key={outfit_idx}>
                {Object.entries(outfit_json).forEach(([key_i, value]) => (
                  <View key={key_i}>
                    <Image
                      style={{ width: "100%", height: "50%" }}
                      source={{ uri: (value[0]).image }}
                    />
                    <Text onPress={() => Linking.openURL((value[0]).link)}>
                      {key_i}
                    </Text>
                    <Text>{value[0].price}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 100,
    // marginTop: 100,
    // marginBottom: 150,
    alignItems: "start",
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
    color: "#000",
    // backgroundColor: "#000",
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
    paddingVertical: 5,
    paddingHorizontal: 3,
    borderRadius: 1,
    marginTop: 20,
    marginHorizontal: 10,
    width: 90,
    height: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default DisplayScreen;
