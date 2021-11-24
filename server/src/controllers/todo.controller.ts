import { Response, Request, NextFunction, json } from "express";
import { Errors, Success } from "../services/message.service.response";
import TodoService from "../services/todo.service";

export class TodoController {
  constructor(private todoService: TodoService) {}
  async getAllToDo(_: Request, res: Response) {
    const { current, size } = _.body;
    const data = await this.todoService.recieveAll(current, size);

    res.send({ message: Success.SuccessGet, data });
  }

  async getToDo(_: Request, res: Response) {
    const { _id } = _.body;
    try {
      //check exist of item id DB with current id
      const isExists = await this.todoService.exist(_id, "_id");
      //if not exist throw error
      if (isExists !== true) throw isExists;
      const data = await this.todoService.findOne(_id);
      return res.json({ message: Success.SuccessGet, data });
    } catch (error) {
      res.json({ message: error });
    }
  }

  async addToDo(_: Request, res: Response) {
    const state = _.body;
    try {
      //check exist of item id DB with current name
      const isExists = await this.todoService.exist(state.title, "title");
      //if exist throw error with code
      if (isExists === true) throw Errors.BadRequest;
      //upload new item to DB
      const data = await this.todoService.add(state);
      res.json({
        message: Success.SuccessAdd,
        data,
      });
    } catch (error) {
      return res.json(error);
    }
  }

  async updateToDo(_: Request, res: Response) {
    const { _id, ...state } = _.body;
    try {
      //check exist of item id DB with current id
      const isExists = await this.todoService.exist(_id, "_id");
      if (isExists !== true) throw isExists;
      const data = await this.todoService.update(_id, state);
      res.json({ message: Success.SuccessUpdate, data });
    } catch (error) {
      return error === false
        ? res.json(Errors.BadRequest)
        : res.json(Errors.NotFound);
    }
  }

  async deleteToDo(_: Request, res: Response) {
    const { _id } = _.body;
    try {
      //check exist of item id DB with current id
      const isExists = await this.todoService.exist(_id, "_id");
      //if not exist throw error
      if (isExists !== true) throw isExists;
      //create a deleted obj data
      const data = await this.todoService.delete(_id);
      res.json({ message: Success.SuccessDelete, data });
    } catch (error) {
      return error === false
        ? res.json(Errors.BadRequest)
        : res.json(Errors.NotFound);
    }
  }

  async badRequest(_: Request, res: Response) {
    return res.json(Errors.InternalServerError);
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
