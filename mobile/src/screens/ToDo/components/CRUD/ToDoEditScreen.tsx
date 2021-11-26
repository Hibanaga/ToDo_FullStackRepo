import React, { useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";
import FormTodo from "../FormTodo";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../../navigators/index";
import { useQuery } from "react-query";
import { getToDo, updateToDo } from "../../../../service/todos.service";
import { useQueryClient } from "react-query";
import { IToDo, IRoute } from "../../types/todos.type";

type ToDoEditScreenNavigationProps = StackNavigationProp<AuthStackParamList>;

interface IToDoEditScreenProp {
  navigation: ToDoEditScreenNavigationProps;
  route: IRoute;
}

const ToDoEditScreen: React.FunctionComponent<IToDoEditScreenProp> = ({
  route,
  navigation,
}) => {
  const { _id } = route.params;
  const queryClient = useQueryClient();
  const { data, isSuccess } = useQuery(["todos", { _id }], getToDo);

  const submitFormHandler = useCallback((obj: IToDo) => {
    delete obj["__v"];
    updateToDo(obj)
      .then(() => queryClient.invalidateQueries("todos"))
      .then(() => navigation.navigate("ToDoScreen"));
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
