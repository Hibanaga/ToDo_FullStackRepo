import { Router } from "express";
import validateReq from "../../middleware/validator.middleware";
import { todoSchema } from "../../Validation/SchemeValidation";
import todoController from "../../controllers/todo.controller";
const passport = require("passport");

const todosRouter: Router = Router();
// passport.authenticate("jwt", { session: false }),

todosRouter.get(
  "/getAll",
  passport.authenticate("jwt", { session: false }),
  todoController.getAllToDo.bind(todoController)
);
todosRouter.get(
  "",
  passport.authenticate("jwt", { session: false }),
  todoController.getToDo.bind(todoController)
);
todosRouter.post(
  "",
  passport.authenticate("jwt", { session: false }),
  validateReq(todoSchema),
  todoController.addToDo.bind(todoController)
);
todosRouter.put(
  "",
  passport.authenticate("jwt", { session: false }),
  validateReq(todoSchema),
  todoController.updateToDo.bind(todoController)
);

todosRouter.delete(
  "",
  passport.authenticate("jwt", { session: false }),
  todoController.deleteToDo.bind(todoController)
);

export default todosRouter;
