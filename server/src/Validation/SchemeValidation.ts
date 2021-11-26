const Joi = require("joi");

const todoSchema = Joi.object().keys({
  _id: Joi.string(),
  title: Joi.string().min(3).max(50).required(),
  description: Joi.string().required(),
  year: Joi.number().min(2021).max(2100).required(),
  isPublic: Joi.boolean().required(),
  isComplete: Joi.boolean().required(),
});

const userSchema = Joi.object().keys({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  password: Joi.string().min(3).max(15).required(),
  avatar: Joi.string(),
});

export { todoSchema, userSchema };
