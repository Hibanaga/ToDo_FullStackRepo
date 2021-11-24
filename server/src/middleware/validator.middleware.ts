import { Schema } from "joi";
import { Request, Response, NextFunction } from "express";
import { Errors } from "../services/message.service.response";

const validateReq =
  (joiSchema: Schema) =>
  async (_: Request, res: Response, next: NextFunction) => {
    const state = _.body;

    try {
      const resultValidate = await joiSchema.validate(state);
      //handle error
      if (resultValidate.error) throw resultValidate.error.message;
      await joiSchema.validate(state);
      next();
    } catch (error) {
      res
        .status(400)
        .json({ status: Errors.BadRequest.status, message: error });
    }
  };

export default validateReq;
