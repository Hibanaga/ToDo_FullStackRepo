import React, { useCallback, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { ILoginProp } from "../../../types/user.type";
import LoginForm from "./components/LoginForm";
import instance from "../../../service/user.service";
import { IToDoScreenProp } from "../../../types/navigation.type";

const LoginScreen: React.FC<IToDoScreenProp> = ({ navigation }) => {
  const [messageError, setMessageError] = useState("");
  const { email, password }: ILoginProp = {
    email: "123@gmail.com",
    password: "12345",
  };

  const submitLoginFormHandler = useCallback((objValues: any) => {
    instance
      .login(objValues)
      .then((data) =>
        typeof data === "string"
          ? navigation.navigate("ToDoScreen")
          : setMessageError(`${data.message}: ${data.title}`)
      );
  }, []);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Login Form</Text>

      {messageError !== "" && <Text>{messageError}</Text>}

      <LoginForm
        email={email}
        password={password}
        onSubmitLoginFormHandler={submitLoginFormHandler}
      />

      <View style={styles.wrapperAction}>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={styles.navigationButtonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          <Text style={styles.navigationButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // phone title margintop: 40%
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
  wrapperAction: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navigationButton: {
    backgroundColor: "#f35a5a",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,

    marginTop: 32,
    marginHorizontal: 32,
  },
  navigationButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
});

export default LoginScreen;
