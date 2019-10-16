import * as Joi from "joi";

export const contentSchema = {
  getByKey: {
    params: {
      key: Joi.string()
    }
  },
  updateContent: {
    params: {
      key: Joi.string()
    },
    body: Joi.object()
  }
};
