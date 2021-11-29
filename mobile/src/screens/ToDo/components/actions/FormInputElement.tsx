import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import ErrorNotification from "./ErrorNotification";

interface IStateProp {
  title: string;
  propName: string;
  value: string;
  error: string | undefined;

  onHandleChange: any;
}

export default function FormInputElement({
  title,
  value,
  propName,
  error,

  onHandleChange,
}: IStateProp) {
  return (
    <View>
      <Text style={styles.subTitle}>{title}</Text>
      <ErrorNotification errorMessage={error} />
      <TextInput
        style={styles.input}
        onChangeText={onHandleChange(propName)}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 8,
    marginBottom: 16,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#333",
    marginLeft: 16,
    borderRadius: 12,
  },
});
