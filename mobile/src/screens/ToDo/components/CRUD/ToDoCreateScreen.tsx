import React, { useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";
import FormTodo from "../formTodo";
import { IToDo } from "../../types/todos.type";

function ToDoCreateScreen() {
  const submitFormHandler = useCallback((obj: IToDo) => {
    console.log(obj);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create new Todo</Text>
      <FormTodo onSubmitFormHandler={submitFormHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "92%",
    marginTop: "auto",
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
  },
});

export default ToDoCreateScreen;
