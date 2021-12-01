import React, { useCallback, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import LoginForm from "./components/LoginForm";
import instance from "../../../service/user.service";
import ErrorNotifications from "../components/ErrorNotifications";
import { useLoginContext } from "../hooks/contextLoggin";

const LoginScreen = () => {
  const { setLoggenIn } = useLoginContext();
  const [messageError, setMessageError] = useState("");
  const submitLoginFormHandler = useCallback((objValues: any) => {
    instance.login(objValues).then((data) => {
      return typeof data === "string"
        ? setLoggenIn(true)
        : setMessageError(`${data.message}: ${data.title}`);
    });
  }, []);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Login Form</Text>
      <ErrorNotifications message={messageError} />
      <LoginForm onSubmitLoginFormHandler={submitLoginFormHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: "10%",
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
