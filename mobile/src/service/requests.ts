import instance from "./http";
import { IToDo } from "../screens/ToDo/types/todos.type";

const getTodos = ({ queryKey }: any) => {
  const { currentPage, limit } = queryKey[1];
  return instance.gets(currentPage, limit);
};

const removeTodo = async (_id: string) => {
  return await instance.remove(_id);
};

const addToDo = async (data: IToDo) => {
  return await instance.add(data);
};

const getToDo = async ({ queryKey }: any) => {
  const { _id } = queryKey[1];
  return await instance.get(_id);
};

const updateToDo = async (data: IToDo) => {
  return await instance.update(data);
};

export { getTodos, removeTodo, addToDo, getToDo, updateToDo };
