import { Router } from "express";
import validateReq from "../../middleware/validator.middleware";
import { todoSchema } from "../../Validation/SchemeValidation";
import todoController from "../../controllers/todo.controller";

const todosRouter: Router = Router();

todosRouter.get("/getAll", todoController.getAllToDo.bind(todoController));
todosRouter.get("", todoController.getToDo.bind(todoController));
todosRouter.post(
  "",
  validateReq(todoSchema),
  todoController.addToDo.bind(todoController)
);
todosRouter.put(
  "",
  validateReq(todoSchema),
  todoController.updateToDo.bind(todoController)
);
todosRouter.delete("", todoController.deleteToDo.bind(todoController));

export default todosRouter;
