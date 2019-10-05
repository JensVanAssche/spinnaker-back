import * as Joi from "joi";

export const resultsSchema = {
  getByType: {
    params: {
      type: Joi.string()
    }
  }
};
