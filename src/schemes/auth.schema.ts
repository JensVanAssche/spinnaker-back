import * as Joi from "joi";

export const authSchema = {
  login: {
    body: Joi.object({
      password: Joi.string()
        .min(6)
        .required()
    })
  }
};
