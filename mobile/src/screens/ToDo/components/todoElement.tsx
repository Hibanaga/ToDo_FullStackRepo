import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IToDoElement } from "../types/todos.type";
import { infoToDos } from "../constants/info.constants";

const TodoElement = ({
  _id,
  description,
  title,
  year,
  isComplete,
  isPublic,
  onDeleteToDosHandler,
  onEditToDosHandler,
}: IToDoElement) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <View style={styles.containerTiTle}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.title}>{year}</Text>
        </View>

        <Text style={styles.description}>{description}</Text>

        <View style={styles.containerBoolean}>
          <Text style={styles.textBoolean}>
            {isComplete === true
              ? infoToDos.complete.true
              : infoToDos.complete.false}
          </Text>

          <Text style={styles.textBoolean}>
            {isPublic === true ? infoToDos.public.true : infoToDos.public.false}
          </Text>
        </View>
      </View>

      <View style={styles.containerActions}>
        <TouchableOpacity
          style={styles.buttonAction}
          onPress={() => onEditToDosHandler(_id)}
        >
          <Text style={styles.buttonActionText}>edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonAction}
          onPress={() => onDeleteToDosHandler(_id)}
        >
          <Text style={styles.buttonActionText}>delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 330,
  },
  containerInfo: {
    display: "flex",
  },
  containerTiTle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
  },
  containerBoolean: {
    display: "flex",
    flexDirection: "row",
  },
  containerActions: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 12,
  },
  title: {
    fontSize: 20,
    marginLeft: 12,
    fontWeight: "700",
  },
  description: {
    marginBottom: 12,
    marginLeft: 12,
    fontSize: 16,
    marginTop: 8,
  },
  textBoolean: {
    marginLeft: 8,
    fontSize: 16,
  },
  buttonAction: {
    marginTop: 16,
    marginRight: 8,
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 4,

    height: 24,
    paddingVertical: 4,
    paddingHorizontal: 8,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonActionText: {
    fontSize: 16,
  },
});
export default TodoElement;
