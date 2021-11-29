import React, { useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";
import FormTodo from "../FormTodo";
import { IToDo } from "../../../../types/todos.type";
import instance from "../../../../service/todos.service";
import { useQueryClient } from "react-query";
import { initialState } from "../../constants/info.constants";
import { useNavigation } from "@react-navigation/native";

const ToDoCreateScreen = () => {
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const submitFormHandler = useCallback((obj: IToDo) => {
    instance
      .add(obj)
      .then(() => queryClient.invalidateQueries("todos"))
      .then(() => navigation.goBack());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create new Todo</Text>
      <FormTodo onSubmitFormHandler={submitFormHandler} state={initialState} />
    </View>
  );
};

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
