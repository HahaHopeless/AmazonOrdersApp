import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from "react-native";
import { Container } from "native-base";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import BtnAdd from "../components/BtnAdd";
import AppHeader from "../components/Header";
import OrderCard from "../components/OrderCard";
import EmptyList from "../components/EmptyList";
import { Context } from "../Context/AmzContext";
import { SwipeListView } from "react-native-swipe-list-view";
import { Permissions, Notifications } from "expo";

const HomeScreen = ({ navigation }) => {
  const { deleteOrder, getOrder, state, getUser } = useContext(Context);
  const [modalOpen, setModalOpen] = useState(false);
  const [showOrderNumber, setShowOrderNumber] = useState(0);
  const [showSellerName, setShowSellerName] = useState("");
  const [showSellerContact, setShowSellerContact] = useState("");
  const [showStatus, setShowStatus] = useState("");
  const [date, setDate] = useState("");

  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      const token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      this.setState({ expoPushToken: token });
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.createChannelAndroidAsync("default", {
        name: "default",
        sound: true,
        priority: "max",
        vibrate: [0, 250, 250, 250],
      });
    }
  };

  useEffect(() => {
    const Listener = navigation.addListener("didFocus", () => {
      getOrder();
    });
    return () => {
      Listener.remove();
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <AppHeader navigation={navigation} />
      {/* <View style={{ borderWidth: 0.5, borderColor: "#ced6e0" }}>
        <Text
          style={{
            fontStyle: "italic",
            color: "#57606f",
            margin: 5,
            fontWeight: "100",
          }}
        >
          You've recently ordered these items
        </Text>
      </View> */}
      <Container>
        <SwipeListView
          data={state}
          keyExtractor={(item) => item.orderNumber}
          ListEmptyComponent={<EmptyList />}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.rowFront}
              onPress={() => {
                setShowOrderNumber(item.orderNumber);
                setShowSellerName(item.sellerName);
                setShowSellerContact(item.sellerContact);
                setShowStatus(item.orderStatus);
                setDate(item.orderDate);
                setModalOpen(true);
              }}
            >
              <OrderCard
                itemName={item.itemName}
                seller={item.sellerName}
                orderNumber={item.orderNumber}
                photo={item.image}
              />
            </TouchableOpacity>
          )}
          renderHiddenItem={({ item }) => (
            <View style={styles.rowBack}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("UpdateItem");
                }}
                style={styles.edit}
              >
                <Feather name="edit-2" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.delete}
                onPress={() => {
                  deleteOrder(item.orderNumber);
                }}
              >
                <Feather
                  name="trash-2"
                  size={30}
                  color="white"
                  onPress={() => {}}
                />
              </TouchableOpacity>
            </View>
          )}
          leftOpenValue={75}
          rightOpenValue={-75}
        />
      </Container>
      <BtnAdd gotoScreen="AddItem" navigation={navigation} />
      {/* ===
      ===
      ===
      ===
      === */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalOpen}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text
                style={{ fontSize: 25, fontWeight: "bold", marginBottom: 20 }}
              >
                Order Details
              </Text>
              <Text style={styles.modalText}>
                Order Number : {showOrderNumber}
              </Text>
              <Text style={styles.modalText}>
                Seller Name : {showSellerName}
              </Text>
              <Text style={styles.modalText}>
                Seller Contact : {showSellerContact}
              </Text>
              <Text style={styles.modalText}>Refund Status : {showStatus}</Text>
              <Text style={styles.modalText}>Ordered On : {date}</Text>
              <MaterialIcons
                name="cancel"
                style={styles.icon}
                onPress={() => {
                  setModalOpen(!modalOpen);
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {/* ===
      ===
      ===
      === */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#3a455c",
    height: 70,
    width: "100%",
    borderBottomColor: "#757575",
  },
  rowFront: {
    alignItems: "center",
    backgroundColor: "#f1f2f6",
    justifyContent: "center",
    height: 100,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#f1f2f6",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  delete: {
    backgroundColor: "#ff4757",
    width: 75,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  edit: {
    backgroundColor: "#2ed573",
    width: 75,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 45,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
  },
  icon: {
    color: "grey",
    fontSize: 45,
    marginTop: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default HomeScreen;

{
  /* <Modal
animationType="fade"
transparent={true}
visible={modalVisible}
onRequestClose={() => {
  Alert.alert("Modal has been closed.");
}}
>
<View style={styles.centeredView}>
  <View style={styles.modalView}>
    <Text style={styles.modalText}>{item.itemName}</Text>
    <Text>Order #: {item.orderNumber}</Text>
    <Text>Seller Name: {item.sellerName}</Text>
    <Text>Seller Contact: {item.sellerContact}</Text>
    <Text>Ordered On: </Text>
    <Text>Refund Status: </Text>
    <TouchableHighlight
      style={{
        ...styles.openButton,
        backgroundColor: "#2196F3",
      }}
      onPress={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <Text style={styles.textStyle}>Hide Modal</Text>
    </TouchableHighlight>
  </View>
</View>
</Modal> */
}
