import { ITodo } from "../models/ToDo";
import Todo from "../models/ToDo";
import { todoSchema } from "../Validation/SchemeValidation";

export default class TodoService {
  async recieveAll(current: number, size: number) {
    const currentPage = current || 1;
    const pageSize = size || 5;
    const skipElements = (currentPage - 1) * pageSize;
    const items = await Todo.find().skip(skipElements).limit(pageSize);
    return items;
  }

  async findOne(_id: string) {
    const existingItem = await Todo.exists({ _id });
    if (existingItem) {
      const item = await Todo.findById({ _id });
      return { code: 200, result: item };
    } else {
      return { code: 400 };
    }
  }

  async add(item: ITodo) {
    const { error } = todoSchema.validate(item);
    const existingItem = Todo.exists({ title: item.title });

    if (error === undefined && existingItem) {
      const result = await Todo.create(item);
      return { code: 200, result };
    } else {
      return { code: 400 };
    }
  }

  async update(_id: string, item: ITodo) {
    const { error } = todoSchema.validate(item);
    if (error === undefined) {
      const result = await Todo.findByIdAndUpdate(_id, item);
      return { code: 200, result };
    } else {
      return { code: 400 };
    }
  }

  async delete(_id: string) {
    const existingItem = await Todo.exists({ _id });

    if (existingItem) {
      const result = await Todo.deleteOne({ _id });
      return { code: 200, result };
    } else {
      return { code: 400 };
    }
  }
}
