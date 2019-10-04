import * as Joi from "joi";

export const contentSchema = {
  getByKey: {
    params: {
      key: Joi.string()
    }
  }
};
