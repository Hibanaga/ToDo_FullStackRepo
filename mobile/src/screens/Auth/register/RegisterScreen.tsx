import React, { useCallback, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import RegisterForm from "./components/RegisterForm";
import { IRegisterProp } from "../../../types/user.type";
import instance from "../../../service/user.service";
import ErrorNotifications from "../components/ErrorNotifications";
import { useRoute } from "@react-navigation/native";

const RegisterScreen = () => {
  const [messageError, setMessageError] = useState("");
  const { params }: any = useRoute();
  const submitFormHandler = useCallback((prop: IRegisterProp) => {
    delete prop["confirmPassword"];
    instance
      .register(prop)
      .then((data) =>
        typeof data === "string"
          ? params.onSetLoggenIn(true)
          : setMessageError(`${data.message}: ${data.title}`)
      );
  }, []);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Register Form</Text>
      <ErrorNotifications message={messageError} />
      <RegisterForm onSubmitFormHandler={submitFormHandler} />
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

export default RegisterScreen;
