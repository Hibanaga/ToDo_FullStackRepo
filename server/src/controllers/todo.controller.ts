import { Response, Request } from "express";
import Todo from "../models/ToDo";
import TodoService from "../services/todo.service";
import { todoSchema } from "../Validation/SchemeValidation";

export class TodoController {
  constructor(private todoService: TodoService) {}
  async getAllToDo(_: Request, res: Response) {
    const { current, size } = _.body;
    const { code, result } = await this.todoService.recieveAll(current, size);
    res.send({ statusCode: code, result });
  }

  async getToDo(_: Request, res: Response) {
    const { _id } = _.body;
    const { code, result } = await this.todoService.findOne(_id);
    return res.json({ statusCode: code, result });
  }

  async addToDo(_: Request, res: Response) {
    const state = _.body;
    const { code, result } = await this.todoService.add(state);
    return res.json({ statusCode: code, result });
  }

  async updateToDo(_: Request, res: Response) {
    const { _id, ...state } = _.body;
    const { code, result } = await this.todoService.update(_id, state);
    return res.json({ statusCode: code, result });
  }

  async deleteToDo(_: Request, res: Response) {
    const { _id } = _.body;
    const { code, result } = await this.todoService.delete(_id);
    return res.json({ statusCode: code, result });
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
