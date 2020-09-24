import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
} from "react-native";
import { Form, Item, Input, Button } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Context } from "../Context/AmzContext";

const LoginScreen = ({ navigation }) => {
  const { signIn, state, getUser } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(state);

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
                autoCorrect={false}
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
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="go"
              />
            </Item>
            <TouchableOpacity>
              <Text
                style={{
                  textAlign: "right",
                  marginBottom: 10,
                  marginTop: 8,
                  textDecorationLine: "underline",
                  fontSize: 12,
                }}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>
            {state.errorMessage ? (
              <Text style={styles.errorMessage}>{state.errorMessage}</Text>
            ) : null}
            <Button
              style={styles.loginButton}
              onPress={() => {
                signIn(email, password, () => {
                  Keyboard.dismiss();
                  getUser();
                  navigation.navigate("HomeScreen");
                });
              }}
            >
              <Text style={styles.buttonText}>LOGIN</Text>
            </Button>
          </Form>
          <Text style={{ textAlign: "center", marginTop: 20, fontSize: 15 }}>
            Dont have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignupScreen");
            }}
          >
            <Text
              style={{
                fontSize: 16,
                textDecorationLine: "underline",
                fontWeight: "bold",
              }}
            >
              Create One
            </Text>
          </TouchableOpacity>
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
  errorMessage: {
    color: "red",
    fontSize: 16,
    marginLeft: 15,
  },
});

export default LoginScreen;
