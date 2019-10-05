import * as Joi from "joi";

export const playersSchema = {
  getByType: {
    params: {
      type: Joi.string()
    }
  }
};
