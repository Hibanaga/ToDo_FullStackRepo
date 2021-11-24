import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import LoginForm from "./components/loginForm";
// import { home, register } from "../../../Router/routes";

interface formLoginProp {
  username: string;
  password: string;
}

function LoginScreen({ onSubmitLoginFormHandler }: any) {
  const initialValues: formLoginProp = {
    username: "",
    password: "",
  };
  const { username, password } = initialValues;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Login Form</Text>
      <LoginForm
        username={username}
        password={password}
        onSubmitLoginFormHandler={onSubmitLoginFormHandler}
      />

      <TouchableOpacity onPress={() => console.log("aaa")}>
        <Text>welcome page</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log("aaa")}>
        <Text>register page</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: "40%",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    color: "#f35a5a",
    marginBottom: 44,
  },
  wrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "#003f5c",
    fontFamily: "Arial",
  },
});

export default LoginScreen;
