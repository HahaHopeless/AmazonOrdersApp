import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
// import { Entypo } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

const EmptyList = () => {
  return (
    <View style={styles.container}>
      {/* <Entypo name="emoji-sad" size={70} color="#B0BEC5" /> */}
      {/* <LottieView source={require("../../assets/empty.json")} autoPlay loop /> */}
      <Image
        source={require("../../assets/empty.gif")}
        style={{ width: 180, height: 180 }}
      />
      <Text style={styles.text}>We could not find any items.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "#B0BEC5",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
});

export default EmptyList;
