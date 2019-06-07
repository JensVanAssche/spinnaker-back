import * as Joi from "joi";

export const childSchema = {
  create: {
    body: Joi.object({
      fullName: Joi.string().required(),
      parentId: Joi.string().required(),
      password: Joi.string().min(6)
    })
  }
};
