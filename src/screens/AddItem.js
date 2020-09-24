import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Form, Item, Input, Button, Container } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import HeaderSimple from "../components/HeaderSimple";
import { Context } from "../Context/AmzContext";

const AddItem = ({ navigation }) => {
  const { addOrder } = useContext(Context);
  const [itemName, setItemName] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [orderNum, setOrderNum] = useState("");
  const [sellerContact, setSellerContact] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <HeaderSimple navigation={navigation} title="New Order" />
        <Form style={styles.form}>
          <Item style={styles.item}>
            <MaterialIcons style={styles.textIcon} name="shopping-cart" />
            <Input
              value={orderNum}
              placeholder="Order#"
              onChangeText={(text) => setOrderNum(text)}
            />
          </Item>
          <Item style={styles.item}>
            <MaterialIcons style={styles.textIcon} name="free-breakfast" />
            <Input
              placeholder="Item Name"
              onChangeText={(text) => setItemName(text)}
              value={itemName}
            />
          </Item>
          <Item style={styles.item}>
            <MaterialIcons style={styles.textIcon} name="phone" />
            <Input
              placeholder="Seller Contact"
              onChangeText={(text) => setSellerContact(text)}
              value={sellerContact}
            />
          </Item>
          <Item style={styles.item}>
            <MaterialIcons style={styles.textIcon} name="person" />
            <Input
              placeholder="Seller Name"
              onChangeText={(text) => setSellerName(text)}
              value={sellerName}
            />
          </Item>
        </Form>
        <View style={styles.buttonsView}>
          <Button
            onPress={() => {
              addOrder(orderNum, itemName, sellerName, sellerContact, () => {
                navigation.navigate("HomeScreen");
              });
            }}
            style={{
              width: "40%",
              justifyContent: "space-evenly",
              backgroundColor: "#44bd32",
              borderRadius: 8,
            }}
          >
            <MaterialIcons name="save" style={styles.icon} />
            <Text style={styles.text}>Save</Text>
          </Button>
          <Button
            onPress={() => {
              navigation.navigate("HomeScreen");
            }}
            style={{
              width: "40%",
              justifyContent: "space-evenly",
              backgroundColor: "#e84118",
              borderRadius: 8,
            }}
          >
            <MaterialIcons name="cancel" style={styles.icon} />
            <Text style={styles.text}>Cancel</Text>
          </Button>
        </View>
      </Container>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  textIcon: {
    fontSize: 25,
    color: "#b6b6b6",
    marginRight: 15,
  },
  form: {
    width: "95%",
    padding: 5,
  },
  item: {
    marginBottom: 15,
  },
  buttonsView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 5,
  },
  text: {
    color: "white",
    fontSize: 15,
  },
  icon: {
    color: "white",
    fontSize: 25,
  },
});

export default AddItem;
