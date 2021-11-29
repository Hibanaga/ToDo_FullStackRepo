import React from "react";
import { Formik } from "formik";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { LoginValidateScheme } from "../../validation/validation.scheme";

export default function LoginForm({
  email,
  password,
  onSubmitLoginFormHandler,
}: any) {
  return (
    <Formik
      initialValues={{
        email,
        password,
      }}
      validationSchema={LoginValidateScheme}
      onSubmit={(values) => onSubmitLoginFormHandler(values)}
    >
      {({ handleChange, handleSubmit, values, errors, isValid }) => (
        <View>
          <>
            {errors.email && <Text>{errors.email} </Text>}
            <TextInput
              style={styles.textInput}
              placeholder="Username/email"
              onChangeText={handleChange("email")}
              value={values.email}
            />
            {errors.password && <Text>{errors.password} </Text>}
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              onChangeText={handleChange("password")}
              value={values.password}
              secureTextEntry
            />
          </>

          <TouchableOpacity
            onPress={() => handleSubmit()}
            style={styles.submit}
            disabled={!isValid}
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
