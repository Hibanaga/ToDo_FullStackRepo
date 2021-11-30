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
import { RegisterValidateScheme } from "../../validation/validation.scheme";
import { initialStateRegister } from "../../constants/info.contstants";

interface IStateProp {
  onSubmitFormHandler: (prop: IRegisterProp) => void;
}

export default function RegisterForm({ onSubmitFormHandler }: IStateProp) {
  return (
    <Formik
      initialValues={initialStateRegister}
      validationSchema={RegisterValidateScheme}
      onSubmit={onSubmitFormHandler}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <View>
          <>
            {errors.avatar && <Text> {errors.avatar} </Text>}
            <TextInput
              value={values.avatar}
              placeholder="avatar"
              onChangeText={handleChange("avatar")}
              style={styles.textInput}
            />

            {errors.email && <Text> {errors.email} </Text>}
            <TextInput
              value={values.email}
              placeholder="email"
              onChangeText={handleChange("email")}
              style={styles.textInput}
            />
          </>
          {errors.password && <Text>{errors.password}</Text>}
          <TextInput
            value={values.password}
            placeholder="password"
            onChangeText={handleChange("password")}
            style={styles.textInput}
            secureTextEntry
          />
          {errors.confirmPassword && <Text>{errors.confirmPassword}</Text>}
          <TextInput
            value={values.confirmPassword}
            placeholder="confirm password"
            onChangeText={handleChange("confirmPassword")}
            style={styles.textInput}
            secureTextEntry
          />

          <TouchableOpacity style={styles.submit} onPress={handleSubmit as any}>
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
