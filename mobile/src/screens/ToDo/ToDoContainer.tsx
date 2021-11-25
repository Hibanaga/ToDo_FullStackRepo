import React, { useCallback, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../navigators/index";
import TodoElement from "../ToDo/components/todoElement";
import { IToDo } from "./types/todos.type";
import { useQuery, useQueryClient } from "react-query";
import { getTodos, removeTodo } from "../../service/requests";
import Pagination from "./components/actions/pagination";

type ToDoAddScreenNavigationProps = StackNavigationProp<AuthStackParamList>;
interface ToDoAddScreenProp {
  navigation: ToDoAddScreenNavigationProps;
}

const ToDoScreen: React.FunctionComponent<ToDoAddScreenProp> = ({
  navigation,
}) => {
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 2;
  const { data, isLoading, isSuccess, isError } = useQuery(
    ["todos", { currentPage, limit }],
    getTodos
  );

  const editToDosHandler = useCallback((_id: string) => {
    // navigation.navigate("ToDoEdit", { _id });
    navigation.navigate("ToDoEdit", { _id });
  }, []);

  const deleteToDosHandler = useCallback((_id: string) => {
    removeTodo(_id).then(() => {
      queryClient.invalidateQueries("todos");
    });
  }, []);

  const handleChangePrevPage = () => setCurrentPage(currentPage - 1);
  const handleChangeNextPage = () => setCurrentPage(currentPage + 1);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.routeCreate}
        onPress={() => navigation.navigate("TodoAdd")}
      >
        <Text>Create new Todo</Text>
      </TouchableOpacity>

      {isError && <Text>Error...</Text>}

      {isLoading && <Text>Loading...</Text>}

      {isSuccess && (
        <View>
          {data.map(
            ({
              _id,
              description,
              title,
              year,
              isComplete,
              isPublic,
            }: IToDo) => (
              <TodoElement
                key={_id}
                _id={_id}
                onEditToDosHandler={editToDosHandler}
                onDeleteToDosHandler={deleteToDosHandler}
                description={description}
                title={title}
                year={year}
                isComplete={isComplete}
                isPublic={isPublic}
              />
            )
          )}
        </View>
      )}

      <Pagination
        currentPage={currentPage}
        isSuccess={isSuccess}
        limit={limit}
        data={data}
        onChangeNextPage={handleChangeNextPage}
        onChangePrevPage={handleChangePrevPage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },

  routeCreate: {
    borderColor: "#333",
    borderWidth: 1,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    width: 200,
    paddingVertical: 8,
    marginTop: 36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
});

export default ToDoScreen;
