import React, { useCallback, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useQuery, useQueryClient } from "react-query";
import instance from "../../service/todos.service";
import Pagination from "./components/actions/Pagination";
import ToDoList from "./components/CRUD/ToDoList";
import { getTokenInfo } from "./utils/useToken";
import Preloader from "./components/actions/Preloader";
import DropDownPicker from "react-native-dropdown-picker";
import { getValuesFromConverterPicker } from "./utils/convertedPicker";
import { pickerArr } from "./constants/info.constants";
import { useNavigation } from "@react-navigation/native";

const ToDoScreen = () => {
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 4;
  const { token, isExist } = getTokenInfo();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState(pickerArr);
  const options = getValuesFromConverterPicker(value);
  const { navigate } =
    useNavigation<{ navigate: (p: string, p1?: { _id: string }) => void }>();
  const { data, isLoading, isSuccess, isError } = useQuery(
    [
      "todos",
      {
        currentPage,
        limit,
        token,
        isExist,
        options,
      },
    ],
    instance.gets.bind(instance)
  );
  const editToDosHandler = useCallback((_id: string) => {
    navigate("ToDoEdit", { _id });
  }, []);

  const deleteToDosHandler = useCallback(
    (_id: string, tokenDelete: string | null | undefined) => {
      return instance
        .remove(_id, tokenDelete)
        .then(() => queryClient.invalidateQueries("todos"));
    },
    []
  );

  return (
    <View style={styles.container}>
      {isSuccess && (
        <Pagination
          currentPage={currentPage}
          isFirstPage={currentPage <= 1}
          isLastPage={data.length < limit}
          setCurrentPage={setCurrentPage}
        />
      )}
      {isSuccess && (
        <DropDownPicker
          multiple={true}
          categorySelectable={false}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={styles.dropDownPicker}
        />
      )}
      {isError && <Text>Error...</Text>}
      {isLoading && <Preloader />}
      {isSuccess && !isError && data.length === 0 && (
        <Text>This page is already empty...</Text>
      )}
      {isSuccess && (
        <ToDoList
          data={data}
          token={token}
          onDeleteToDosHandler={deleteToDosHandler}
          onEditToDosHandler={editToDosHandler}
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
    width: 340,
    marginLeft: "auto",
    marginRight: "auto",
  },
  dropDownPicker: {
    marginTop: 0,
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

export default React.memo(ToDoScreen);
