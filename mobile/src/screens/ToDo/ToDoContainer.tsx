import React, { useCallback, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../navigators/index";
import TodoElement from "./components/TodoElement";
import { IToDoMap } from "./types/todos.type";
import { useQuery, useQueryClient } from "react-query";
import { getTodos, removeTodo } from "../../service/todos.service";
import Pagination from "./components/actions/Pagination";

type ToDoAddScreenNavigationProps = StackNavigationProp<AuthStackParamList>;
interface IToDoAddScreenProp {
  navigation: ToDoAddScreenNavigationProps;
}

const ToDoScreen: React.FunctionComponent<IToDoAddScreenProp> = ({
  navigation,
}) => {
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 4;
  const { data, isLoading, isSuccess, isError } = useQuery(
    ["todos", { currentPage, limit }],
    getTodos
  );

  const editToDosHandler = useCallback((_id: string) => {
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
            }: IToDoMap) => (
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

      {isSuccess && (
        <Pagination
          currentPage={currentPage}
          isSuccess={isSuccess}
          limit={limit}
          length={data.length}
          onChangeNextPage={handleChangeNextPage}
          onChangePrevPage={handleChangePrevPage}
        />
      )}
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
