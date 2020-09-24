import React, { useContext } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { CardItem, Right, Button } from "native-base";

const OrderCard = ({ orderNumber, seller, itemName, photo }) => {
  return (
    <CardItem>
      <View>
        <Image
          source={{
            uri:
              "https://images-na.ssl-images-amazon.com/images/I/81zw62hPQOL._AC_SL1500_.jpg",
          }}
          style={styles.image}
        />
      </View>
      <Right
        style={{
          flex: 1,
          alignItems: "flex-start",
          marginLeft: 30,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>
          {itemName}
        </Text>
        <Text>Order# : {orderNumber}</Text>
        <Text>Seller : {seller}</Text>
      </Right>
    </CardItem>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
    resizeMode: "contain",
  },
});

export default OrderCard;
