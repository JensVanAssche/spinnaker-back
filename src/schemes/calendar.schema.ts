import * as Joi from "joi";

export const calendarSchema = {
  getByType: {
    params: {
      type: Joi.string()
    }
  }
};
