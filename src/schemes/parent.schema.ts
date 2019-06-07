import * as Joi from "joi";

export const parentSchema = {
  create: {
    body: Joi.object({
      email: Joi.string()
        .email()
        .required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      password: Joi.string().min(6)
    })
  }
};
