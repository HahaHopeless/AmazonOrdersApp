import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Fab } from "native-base";

const BtnAdd = ({ gotoScreen, navigation }) => {
  return (
    <Fab
      direction="up"
      style={{ backgroundColor: "#f39c12" }}
      position="bottomRight"
      onPress={() => navigation.navigate(gotoScreen)}
    >
      <MaterialIcons name="add" />
    </Fab>
  );
};

export default BtnAdd;
