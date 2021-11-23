import { Router } from "express";
import todoController from "../../controllers/todo.controller";

const todosRouter: Router = Router();

todosRouter.get("/getAll", todoController.getAllToDo.bind(todoController));
todosRouter.get("", todoController.getToDo.bind(todoController));
todosRouter.post("", todoController.addToDo.bind(todoController));
todosRouter.put("", todoController.updateToDo.bind(todoController));
todosRouter.delete("", todoController.deleteToDo.bind(todoController));

export default todosRouter;
