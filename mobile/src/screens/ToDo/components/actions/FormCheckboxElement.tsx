import React from "react";
import { Text, View, CheckBox, StyleSheet } from "react-native";
import ErrorNotification from "./ErrorNotification";

interface IStateProp {
  title: string;
  propName: string;
  value: boolean;
  error: string | undefined;

  onSetFieldValue: any;
}

export default function FormCheckboxElement({
  title,
  propName,
  value,
  error,
  onSetFieldValue,
}: IStateProp) {
  const toggleCheckBoxHandler = () => {
    onSetFieldValue(propName, !value);
  };

  return (
    <View style={styles.checkboxContainer}>
      <Text style={styles.subTitle}>{title}</Text>
      <ErrorNotification errorMessage={error} />
      <CheckBox value={value} onChange={toggleCheckBoxHandler} />
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
  checkboxContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "baseline",
  },
});
