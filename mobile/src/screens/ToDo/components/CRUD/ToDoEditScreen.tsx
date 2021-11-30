import React, { useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";
import FormTodo from "../FormTodo";
import { useQuery } from "react-query";
import { useQueryClient } from "react-query";
import { IToDo, IRoute } from "../../../../types/todos.type";
import { useNavigation, useRoute } from "@react-navigation/native";
import instance from "../../../../service/todos.service";
import { getTokenInfo } from "../../utils/useToken";

const ToDoEditScreen = () => {
  const navigation = useNavigation();
  const route: IRoute = useRoute();
  const { _id } = route.params;
  const { token, isExist } = getTokenInfo();
  const queryClient = useQueryClient();
  const { data, isSuccess } = useQuery(
    ["todos", { _id, token, isExist }],
    instance.get.bind(instance)
  );

  const submitFormHandler = useCallback((obj: IToDo) => {
    delete obj["__v"];
    isExist &&
      instance
        .update(obj, token)
        .then(() => queryClient.invalidateQueries("todos"))
        .then(() => navigation.goBack());
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Todo</Text>

      {isSuccess && (
        <FormTodo
          onSubmitFormHandler={submitFormHandler}
          state={data}
          option={"edit"}
        />
      )}
    </View>
  );
};

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

export default ToDoEditScreen;
