import React, { useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";
import FormTodo from "../formTodo";
import { IToDo } from "../../types/todos.type";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../../navigators/index";
import { addToDo } from "../../../../service/requests";
import { useQueryClient } from "react-query";

type ToDoScreenNavigationProps = StackNavigationProp<AuthStackParamList>;

interface ToDoScreenProp {
  navigation: ToDoScreenNavigationProps;
}

const ToDoCreateScreen: React.FunctionComponent<ToDoScreenProp> = ({
  navigation,
}) => {
  const queryClient = useQueryClient();
  const submitFormHandler = useCallback((obj: IToDo) => {
    addToDo(obj)
      .then(() => queryClient.invalidateQueries("todos"))
      .then(() => navigation.navigate("ToDoScreen"));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create new Todo</Text>
      <FormTodo onSubmitFormHandler={submitFormHandler} />
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
