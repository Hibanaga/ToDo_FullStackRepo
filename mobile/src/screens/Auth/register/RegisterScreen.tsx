import React, { useCallback } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import RegisterForm from "./components/RegisterForm";
import { IRegisterProp } from "../../../types/user.type";
import instance from "../../../service/user.service";
import { IToDoScreenProp } from "../../../types/navigation.type";

const RegisterScreen: React.FC<IToDoScreenProp> = ({ navigation }) => {
  const submitFormHandler = useCallback((prop: IRegisterProp) => {
    delete prop["confirmPassword"];
    instance.register(prop);
  }, []);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Register Form</Text>
      <RegisterForm onSubmitFormHandler={submitFormHandler} />

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

export default RegisterScreen;
