import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { Form, Item, Input, Button } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Context } from "../Context/AmzContext";

const SignupScreen = ({ navigation }) => {
  const { signUp } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <LinearGradient
        start={[0.8, 0.5]}
        end={[0.1, 0.7]}
        style={styles.bg}
        colors={["#fdfbfb", "#c3cfe2"]}
      >
        <View style={styles.container}>
          <Image
            source={require("../../assets/amzLogoBlack.png")}
            style={{
              width: 250,
              height: 100,
              alignSelf: "center",
              resizeMode: "contain",
            }}
          />
          <Form style={styles.form}>
            <Item style={styles.item}>
              <MaterialIcons
                size={25}
                style={{ marginRight: 15 }}
                name="person"
              />
              <Input
                value={email}
                placeholder="Email"
                onChangeText={(text) => {
                  setEmail(text);
                }}
              />
            </Item>
            <Item style={styles.item}>
              <MaterialIcons
                size={25}
                style={{ marginRight: 15 }}
                name="font-download"
              />
              <Input
                value={username}
                placeholder="Username"
                onChangeText={(text) => {
                  setUsername(text);
                }}
              />
            </Item>
            <Item style={styles.item}>
              <MaterialIcons
                size={25}
                style={{ marginRight: 15 }}
                name="vpn-key"
              />
              <Input
                value={password}
                placeholder="Password"
                onChangeText={(text) => {
                  setPassword(text);
                }}
              />
            </Item>
            <Button
              style={styles.loginButton}
              onPress={() => {
                signUp(email, username, password, () => {
                  navigation.navigate("LoginScreen");
                });
              }}
            >
              <Text style={styles.buttonText}>SIGN UP</Text>
            </Button>
          </Form>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  form: {
    padding: 60,
    marginTop: -20,
  },
  loginButton: {
    alignContent: "center",
    marginTop: 20,
    backgroundColor: "#ffa502",
    borderRadius: 20,
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    elevation: 5,
  },
  buttonText: {
    color: "#3a455c",
    fontWeight: "bold",
    letterSpacing: 1.5,
    fontSize: 16,
  },
  item: {
    borderColor: "#a4b0be",
    marginVertical: 10,
  },
});

export default SignupScreen;
