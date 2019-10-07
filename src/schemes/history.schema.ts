import * as Joi from "joi";

export const historySchema = {
  getByKey: {
    params: {
      key: Joi.string()
    }
  }
};
