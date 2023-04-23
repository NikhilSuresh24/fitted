import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./home";
import LocationScreen from "./location";
import FitScreen from "./fit";
import MonthScreen from "./season";
import StyleScreen from "./style";
import LoadingScreen from "./loading";
import DisplayScreen from "./display";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const [location, setLocation] = useState("");
  const [month, setMonth] = useState("");
  const [fit, setFit] = useState("");
  const [clothingStyle, setClothingStyle] = useState("");

  const LocationComponent = (props) => (
    <LocationScreen {...props} location={location} setLocation={setLocation} />
  );

  const FitComponent = (props) => (
    <FitScreen {...props} fit={fit} setFit={setFit} />
  );

  const MonthComponent = (props) => (
    <MonthScreen {...props} month={month} setMonth={setMonth} />
  );

  const StyleComponent = (props) => (
    <StyleScreen
      {...props}
      clothingStyle={clothingStyle}
      setClothingStyle={setClothingStyle}
    />
  );

  const DisplayComponent = (props) => (
    <DisplayScreen
      {...props}
      location={location}
      fit={fit}
      month={month}
      clothingStyle={clothingStyle}
    />
  );

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Location" component={LocationComponent} />
      <Stack.Screen name="Fit" component={FitComponent} />
      <Stack.Screen name="Month" component={MonthComponent} />
      <Stack.Screen name="Style" component={StyleComponent} />
      {/* <Stack.Screen
        name="Loading"
        component={(props) => (
          <LoadingScreen
            {...props}
            location={location}
            fit={fit}
            month={month}
            clothingStyle={clothingStyle}
          />
        )}
      /> */}
      <Stack.Screen name="Display" component={DisplayComponent} />
    </Stack.Navigator>
  );
};

export default AppStack;
