import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Header, Left, Right, Body } from "native-base";
import { Feather } from "@expo/vector-icons";

const HeaderSimple = ({ navigation, title }) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View>
      <Header style={styles.header}>
        <Left style={styles.iconMargin}>
          <Feather style={styles.icon} name="menu" onPress={openDrawer} />
        </Left>
        <Body style={styles.iconMargin}>
          <Image
            source={require("../../assets/amzLogo.png")}
            style={styles.logo}
          />
        </Body>
        <Right style={styles.iconMargin}></Right>
      </Header>
      <View style={styles.searchBar}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#3a455c",
    height: 60,
    width: "100%",
    borderBottomColor: "#757575",
  },
  icon: {
    color: "white",
    fontSize: 25,
  },
  iconMargin: {
    marginTop: 5,
  },
  searchBar: {
    backgroundColor: "#9d9d9d",
    alignItems: "center",
    padding: 4,
    alignContent: "center",
  },
  logo: {
    width: "80%",
    resizeMode: "contain",
    marginTop: 5,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default HeaderSimple;
