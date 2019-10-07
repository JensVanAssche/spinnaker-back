import * as Joi from "joi";

export const standingsSchema = {
  getByType: {
    params: {
      type: Joi.string()
    }
  }
};
