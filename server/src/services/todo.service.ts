import { ITodo } from "../models/ToDo";
import Todo from "../models/ToDo";
import { Errors } from "./message.service.response";

export default class TodoService {
  async recieveAll(current: number, size: number) {
    const currentPage = current || 1;
    const pageSize = size || 5;
    const skipElements = (currentPage - 1) * pageSize;
    return await Todo.find().skip(skipElements).limit(pageSize);
  }

  async findOne(_id: string) {
    return await Todo.findById({ _id });
  }

  async add(item: ITodo) {
    return await Todo.create(item);
  }

  async update(_id: string, item: ITodo) {
    return await Todo.findByIdAndUpdate({ _id }, item);
  }

  async delete(_id: string) {
    return await Todo.findByIdAndRemove({ _id });
  }

  async exist(_id: string, options: string) {
    try {
      const isExist = await Todo.exists({ [options]: _id });
      return isExist;
    } catch (error) {
      return Errors.NotFound;
    }
  }
}
