import React, { useCallback, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { IToDoScreenProp } from "../../types/navigation.type";
import { useQuery, useQueryClient } from "react-query";
import instance from "../../service/todos.service";
import Pagination from "./components/actions/Pagination";
import ToDoList from "./components/CRUD/ToDoList";
import { getTokenInfo } from "./utils/useToken";
import Preloader from "./components/actions/Preloader";
import DropDownPicker from "react-native-dropdown-picker";
import { getValuesFromConverterPicker } from "./utils/convertedPicker";
import { pickerArr } from "./constants/info.constants";

const ToDoScreen: React.FC<IToDoScreenProp> = ({ navigation }) => {
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 4;
  const { token, isExist } = getTokenInfo();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState(pickerArr);
  const options = getValuesFromConverterPicker(value);

  // console.log(isPublic);
  // console.log(isComplete);
  // isPublic: isPublic,
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
    navigation.navigate("ToDoEdit", { _id });
  }, []);
  const deleteToDosHandler = useCallback(
    (_id: string, tokenDelete: string | null | undefined) => {
      return instance
        .remove(_id, tokenDelete)
        .then(() => queryClient.invalidateQueries("todos"));
    },
    []
  );
  const navigationHadler = () => {
    return navigation.navigate("TodoAdd");
  };
  return (
    <View style={styles.container}>
      {isSuccess && (
        <TouchableOpacity style={styles.routeCreate} onPress={navigationHadler}>
          <Text>Create new Todo</Text>
        </TouchableOpacity>
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
      {isSuccess && (
        <Pagination
          currentPage={currentPage}
          isFirstPage={currentPage <= 1}
          isLastPage={data.length < limit}
          setCurrentPage={setCurrentPage}
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
    marginTop: 16,
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
