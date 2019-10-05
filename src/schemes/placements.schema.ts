import * as Joi from "joi";

export const placementsSchema = {
  getByType: {
    params: {
      type: Joi.string()
    }
  }
};
