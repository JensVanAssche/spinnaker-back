import * as Joi from "joi";

export const authSchema = {
  loginParent: {
    body: Joi.object({
      email: Joi.string().required(),
      password: Joi.string().min(6)
    })
  }
};
