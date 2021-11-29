import React from "react";
import { Formik } from "formik";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { IRegisterProp } from "../../../../types/user.type";

interface IStateProp {
  onSubmitFormHandler: (prop: IRegisterProp) => void;
}

export default function RegisterForm({ onSubmitFormHandler }: IStateProp) {
  return (
    <Formik
      initialValues={{
        avatar: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values) => onSubmitFormHandler(values)}
    >
      {({ handleChange, handleSubmit, values }) => (
        <View>
          <>
            <TextInput
              value={values.avatar}
              onChangeText={handleChange("avatar")}
              style={styles.textInput}
            />
            <TextInput
              value={values.email}
              onChangeText={handleChange("email")}
              style={styles.textInput}
            />
          </>

          <TextInput
            value={values.password}
            onChangeText={handleChange("password")}
            style={styles.textInput}
            secureTextEntry
          />
          <TextInput
            value={values.confirmPassword}
            onChangeText={handleChange("confirmPassword")}
            style={styles.textInput}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.submit}
            onPress={() => handleSubmit()}
          >
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 18,
    backgroundColor: "#465881",
    color: "#fff",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 16,
    borderRadius: 12,
  },
  submit: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#f35a5a",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 12,
    marginTop: 42,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  submitText: {
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 16,
  },
});
