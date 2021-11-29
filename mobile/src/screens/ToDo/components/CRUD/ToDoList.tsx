import React from "react";
import { View } from "react-native";
import { IToDoMap } from "../../../../types/todos.type";
import TodoElement from "../TodoElement";

interface IStateProp {
  data: IToDoMap[];
  onEditToDosHandler: (prop: string) => void;
  onDeleteToDosHandler: (prop: string) => void;
}

export default function ToDoList({
  data,
  onEditToDosHandler,
  onDeleteToDosHandler,
}: IStateProp) {
  console.log(data);
  return (
    <View>
      {data.map(
        ({ _id, description, title, year, isComplete, isPublic }: IToDoMap) => (
          <TodoElement
            key={_id}
            _id={_id}
            onEditToDosHandler={onEditToDosHandler}
            onDeleteToDosHandler={onDeleteToDosHandler}
            description={description}
            title={title}
            year={year}
            isComplete={isComplete}
            isPublic={isPublic}
          />
        )
      )}
    </View>
  );
}
