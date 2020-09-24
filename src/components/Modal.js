import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
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
            <Text style={styles.modalText}>Order Details</Text>
            <Text>Order Number : {showOrderNumber}</Text>
            <Text>Seller Name : {showSellerName}</Text>
            <Text>Seller Contact : {showSellerContact}</Text>
            <Text>Order Status : {showStatus}</Text>
            <Text>Ordered On : {date}</Text>
            <View style={styles.buttonsView}>
              <MaterialIcons
                name="cancel"
                style={styles.icon}
                onPress={() => {
                  setModalOpen(!modalOpen);
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Modal;
