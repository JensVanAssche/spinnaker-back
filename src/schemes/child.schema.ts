import * as Joi from "joi";

export const childSchema = {
  create: {
    body: Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      parentId: Joi.string().required(),
      password: Joi.string()
        .min(6)
        .required()
    })
  },
  getAll: {
    params: {
      parentId: Joi.string().guid()
    }
  }
};
