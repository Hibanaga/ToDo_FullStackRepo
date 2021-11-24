const Joi = require("joi");

export const todoSchema = Joi.object().keys({
  _id: Joi.string(),
  title: Joi.string().min(3).max(50).required(),
  description: Joi.string().required(),
  year: Joi.number().min(2021).max(2100).required(),
  isPublic: Joi.boolean().required(),
  isComplete: Joi.boolean().required(),
});
