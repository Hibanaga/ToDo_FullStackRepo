import { ITodo } from "../models/ToDo";
import Todo from "../models/ToDo";
import { todoSchema } from "../Validation/SchemeValidation";

export default class TodoService {
  async recieveAll(current: number, size: number) {
    try {
      const currentPage = current || 1;
      const pageSize = size || 5;
      const skipElements = (currentPage - 1) * pageSize;
      const items = await Todo.find().skip(skipElements).limit(pageSize);
      return { code: 200, result: items };
    } catch (error) {
      return { code: 400, result: error };
    }
  }

  async findOne(_id: string) {
    try {
      const item = await Todo.findById({ _id });
      return { code: 200, result: item };
    } catch (error) {
      return { code: 400, result: error };
    }
  }

  async add(item: ITodo) {
    try {
      const result = await Todo.create(item);
      return { code: 200, result };
    } catch (error) {
      return { code: 400, result: error };
    }
  }

  async update(_id: string, item: ITodo) {
    try {
      const result = await Todo.findByIdAndUpdate(_id, item);
      return { code: 200, result };
    } catch (error) {
      return { code: 400, result: error };
    }
  }

  async delete(_id: string) {
    try {
      const result = await Todo.deleteOne({ _id });
      return { code: 200, result };
    } catch (error) {
      return { code: 400, result: error };
    }
  }
}
