import * as Joi from "joi";

export const parentSchema = {
  create: {
    body: Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .min(6)
        .required()
    })
  }
};
