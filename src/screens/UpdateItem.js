import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Button, Content } from "native-base";
import RadioButton from "../components/RadioButton";
import HeaderSimple from "../components/HeaderSimple";
import { View, StyleSheet, Text } from "react-native";
const UpdateItem = ({ navigation }) => {
  return (
    <View>
      <HeaderSimple navigation={navigation} title="Update Status" />
      <View style={styles.form}>
        <RadioButton title="Ordered" status={true} />
        <RadioButton title="Delivered" />
        <RadioButton title="Reviewed" />
        <RadioButton title="Refunded" />
        <RadioButton title="Returned" />
      </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    width: "95%",
    padding: 5,
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

export default UpdateItem;
