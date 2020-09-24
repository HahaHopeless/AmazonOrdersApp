import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Header, Left, Right, Body, Item, Input } from "native-base";
import { Feather } from "@expo/vector-icons";

const AppHeader = ({ navigation }) => {
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
        <Item style={styles.textInput}>
          <Feather
            name="search"
            style={{ fontSize: 20, marginHorizontal: 8 }}
          />
          <Input
            placeholder="Which order are you looking for?"
            placeholderTextColor="#a4b0be"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </Item>
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
    backgroundColor: "#3a455c",
    alignItems: "center",
    padding: 4,
    flexDirection: "row",
  },
  textInput: {
    borderRadius: 5,
    borderColor: "#bdc3c7",
    borderWidth: 3,
    backgroundColor: "white",
    height: 40,
    overflow: "hidden",
    flex: 1,
  },
  logo: {
    width: "80%",
    resizeMode: "contain",
    marginTop: 5,
  },
});

export default AppHeader;
