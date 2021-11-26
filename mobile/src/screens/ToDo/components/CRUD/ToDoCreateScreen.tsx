import React, { useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";
import FormTodo from "../FormTodo";
import { IToDo } from "../../types/todos.type";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../../navigators/index";
import { addToDo } from "../../../../service/todos.service";
import { useQueryClient } from "react-query";
import { initialState } from "../../constants/info.constants";

type ToDoScreenNavigationProps = StackNavigationProp<AuthStackParamList>;

interface IToDoScreenProp {
  navigation: ToDoScreenNavigationProps;
}

const ToDoCreateScreen: React.FunctionComponent<IToDoScreenProp> = ({
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
