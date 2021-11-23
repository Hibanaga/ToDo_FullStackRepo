import { Response, Request } from "express";
import Todo from "../models/ToDo";
import TodoService from "../services/todo.service";
import { todoSchema } from "../Validation/SchemeValidation";

export class TodoController {
  constructor(private todoService: TodoService) {}
  async getAllToDo(_: Request, res: Response) {
    const { current, size } = _.body;

    // TODO: Write your implementation here
    // const todos = await this.todoService.findAll();
    // res.send(todos);
    const items = await this.todoService.recieveAll(current, size);
    res.send({ result: items });
  }

  async getToDo(_: Request, res: Response) {
    const { _id } = _.body;

    const { code, result } = await this.todoService.findOne(_id);
    return code === 200
      ? res.json({ message: result })
      : res.json({ message: "Bad Request" });
  }

  async addToDo(_: Request, res: Response) {
    const state = _.body;
    const { code, result } = await this.todoService.add(state);

    return code === 200
      ? res.json({ result })
      : res.json({ message: "Bad Request" });
  }

  async updateToDo(_: Request, res: Response) {
    const { _id, ...state } = _.body;
    const { code, result } = await this.todoService.update(_id, state);
    return code === 200
      ? res.json(result)
      : res.json({ message: "Bad Request" });
  }

  async deleteToDo(_: Request, res: Response) {
    const { _id } = _.body;
    const { code, result } = await this.todoService.delete(_id);
    return code === 200
      ? res.json({ result })
      : res.json({ message: "Bad Request" });
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
