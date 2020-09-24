import React from "react";
import { ListItem, Text, Radio, Right, Left } from "native-base";
import { StyleSheet } from "react-native";
const RadioButton = ({ status, title }) => {
  return (
    <ListItem>
      <Left>
        <Text>{title}</Text>
      </Left>
      <Right>
        <Radio selected={status} color={"#3a455c"} selectedColor={"#ffa502"} />
      </Right>
    </ListItem>
  );
};

const styles = StyleSheet.create({});

export default RadioButton;
