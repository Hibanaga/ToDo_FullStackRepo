import React from "react";
import { FlatList } from "react-native";
import { IToDoMap, IRenderProp } from "../../../../types/todos.type";
import TodoElement from "../TodoElement";

interface IStateProp {
  data: IToDoMap[];
  onEditToDosHandler: (prop: string) => void;
  onDeleteToDosHandler: (
    prop: string,
    token: string | null | undefined
  ) => void;
  token: string | null | undefined;
}

export default function ToDoList({
  data,
  onEditToDosHandler,
  token,
  onDeleteToDosHandler,
}: IStateProp) {
  const renderItem = ({ item }: IRenderProp) => (
    <TodoElement
      _id={item._id}
      token={token}
      onEditToDosHandler={onEditToDosHandler}
      onDeleteToDosHandler={onDeleteToDosHandler}
      description={item.description}
      title={item.title}
      year={item.year}
      isComplete={item.isComplete}
      isPublic={item.isPublic}
    />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
    />
  );
}
