import { Router, Request, Response } from "express";
import { userSchema } from "../../Validation/SchemeValidation";
import userController from "../../controllers/user.controller";
import validateReq from "../../middleware/validator.middleware";
const passport = require("passport");

const router: Router = Router();

// @route   POST api/user
// @desc    Register user given their email and password, returns the token upon successful registration
// @access  Public
router.post(
  "/register",
  validateReq(userSchema),
  userController.register.bind(userController)
);
router.post(
  "/login",
  validateReq(userSchema),
  userController.login.bind(userController)
);

router.get(
  "/auth",
  passport.authenticate("jwt", { session: false }),
  userController.auth.bind(userController)
);

export default router;
