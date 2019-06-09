import * as Joi from "joi";

export const authSchema = {
  loginParent: {
    body: Joi.object({
      email: Joi.string().required(),
      password: Joi.string()
        .min(6)
        .required()
    })
  },
  loginChild: {
    body: Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string()
        .min(6)
        .required()
    })
  }
};
