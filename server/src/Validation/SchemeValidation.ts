const Joi = require("joi");

export const todoSchema = Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string().required(),
  year: Joi.number().min(2021).max(2100),
  isPublic: Joi.boolean().required(),
  isComplete: Joi.boolean().required(),
});
