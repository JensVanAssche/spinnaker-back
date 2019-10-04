import * as Joi from "joi";

export const newsSchema = {
  getById: {
    params: {
      key: Joi.string().uuid()
    }
  }
};
