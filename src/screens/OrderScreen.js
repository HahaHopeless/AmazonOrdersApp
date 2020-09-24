import React, { useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Container } from "native-base";
import BtnAdd from "../components/BtnAdd";
import AppHeader from "../components/Header";
import OrderCard from "../components/OrderCard";
import { Context } from "../Context/AmzContext";

const OrderScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  return (
    <Container>
      <AppHeader navigation={navigation} />
      <View style={{ borderWidth: 0.5, borderColor: "#ced6e0" }}></View>
      <Container>
        <FlatList
          data={state}
          keyExtractor={(cards) => cards.sellerName}
          renderItem={({ item }) => {
            return (
              <OrderCard
                itemName={item.itemName}
                seller={item.sellerName}
                orderNumber={item.orderNum}
                photo={item.image}
              />
            );
          }}
        />
      </Container>
      <BtnAdd gotoScreen="AddItem" navigation={navigation} />
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#3a455c",
    height: 70,
    width: "100%",
    borderBottomColor: "#757575",
  },
  icon: {
    color: "white",
    fontSize: 25,
  },
  cart: {
    color: "white",
    fontSize: 18,
  },
  iconMargin: {
    marginTop: 25,
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
  fabIcons: {
    color: "white",
    fontSize: 18,
  },
});

export default OrderScreen;
