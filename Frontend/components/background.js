import { ImageBackground, StyleSheet } from "react-native";

const Background = (props) => {
  return (
    <ImageBackground
      source={require("../assets/background.jpeg")}
      style={styles.background}
    >
      {props.children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default Background;
