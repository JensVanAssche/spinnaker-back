import * as Joi from "joi";

export const newsSchema = {
  getAll: {
    params: {
      offset: Joi.number()
    }
  },
  getById: {
    params: {
      key: Joi.string().uuid()
    }
  }
};
