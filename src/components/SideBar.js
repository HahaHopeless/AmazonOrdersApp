import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import { username } from "../Context/AmzContext";
import { email } from "../Context/AmzContext";

const SideBar = (props) => {
  return (
    <ScrollView>
      <LinearGradient
        start={[0.5, 0.2]}
        end={[0.8, 0.9]}
        style={styles.bg}
        colors={["#94b0b7", "#ddddda"]}
      >
        <Image
          source={require("../../assets/profile.png")}
          style={styles.profile}
        />
        <View style={{ marginHorizontal: "5%", marginTop: 20 }}>
          <Text style={styles.name}>{username}</Text>
          <Text style={{ fontSize: 10 }}>{email}</Text>
        </View>
      </LinearGradient>
      <View>
        <DrawerNavigatorItems {...props} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bg: {
    padding: 18,
    paddingTop: 30,
    flexDirection: "row",
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "white",
  },
  name: {
    marginTop: "2%",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SideBar;
