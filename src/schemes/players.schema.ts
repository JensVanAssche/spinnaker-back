import * as Joi from "joi";

export const playersSchema = {
  getUnordered: {
    params: {
      type: Joi.string()
    }
  },
  getOrdered: {
    params: {
      type: Joi.string()
    }
  }
};
