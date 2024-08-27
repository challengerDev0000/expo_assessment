import React, { useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

const MAX_COLOR_VALUE = 16 ** 6;

const App = () => {
  const [bgColor, setBgColor] = useState("#ffffff");

  const getRandomColor = () => {
    const randomNumber = Math.floor(Math.random() * MAX_COLOR_VALUE);
    const hexColor = randomNumber.toString(16).padStart(6, "0");
    return `#${hexColor}`;
  };

  return (
    <TouchableWithoutFeedback onPress={() => setBgColor(getRandomColor())}>
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        <Text style={styles.text}>Hello there</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default App;
