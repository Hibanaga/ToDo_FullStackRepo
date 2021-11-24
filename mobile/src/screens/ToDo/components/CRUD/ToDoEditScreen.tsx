import React from "react";
import { StyleSheet, View, Text } from "react-native";
// import FormTodo from "../formTodo";

export default function ToDoEditScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Todo</Text>
      {/* <FormTodo /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "90%",
    marginTop: "auto",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
  },
});
