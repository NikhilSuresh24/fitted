import { Text, View, Button, StyleSheet, ImageBackground } from "react-native";
import React from "react";

const TitleWithLines = ({ title }) => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.line} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: "black",
    marginHorizontal: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default TitleWithLines;
