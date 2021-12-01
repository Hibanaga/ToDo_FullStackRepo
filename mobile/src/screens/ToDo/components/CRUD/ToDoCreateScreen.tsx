import React, { useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";
import FormTodo from "../FormTodo";
import { IToDo } from "../../../../types/todos.type";
import instance from "../../../../service/todos.service";
import { useQueryClient } from "react-query";
import { initialState } from "../../constants/info.constants";
import { useNavigation } from "@react-navigation/native";
import { getTokenInfo } from "../../utils/useToken";

const ToDoCreateScreen = () => {
  const queryClient = useQueryClient();
  const { token } = getTokenInfo();
  const { navigate } = useNavigation<{ navigate: (p: string) => void }>();
  const submitFormHandler = useCallback((obj: IToDo) => {
    return instance
      .add(obj, token)
      .then(() => queryClient.invalidateQueries("todos"))
      .then(() => navigate("ToDoScreen"));
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
    width: 340,
    marginLeft: "auto",
    marginRight: "auto",
    height: "92%",
    marginTop: "auto",
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default ToDoCreateScreen;
