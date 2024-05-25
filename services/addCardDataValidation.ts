import Joi from "joi";
import { CARD_STATUS, ICard } from "../constants/constants";

export const addCardDataValidation = (card: ICard) => {
  return Joi.object()
    .options({ abortEarly: false })
    .keys({
      title: Joi.string().required().messages({
        "any.required": "title is required",
        "string.empty": "title is required",
      }),
      description: Joi.string().required().messages({
        "any.required": "description is required",
        "string.empty": "description is required",
      }),
      status: Joi.string()
        .required()
        .valid(...Object.values(CARD_STATUS))
        .messages({
          "any.required": "status is required",
          "string.empty": "status is required",
          "any.only":
            "status must be one of the following values: todo, inProgress, done",
        }),
      order: Joi.number().positive().integer().min(1).required().messages({
        "any.required": "order is required",
        "string.empty": "order is required",
        "number.integer": "order must be a number",
        "number.positive": "order must be a positive number",
        "number.min": "order must be bigger or equal 1",
      }),
      boardId: Joi.string().required().messages({
        "any.required": "boardId is required",
        "string.empty": "boardId is required",
      }),
      id: Joi.string().messages({
        "string.base": "id must be a string",
      }),
    })
    .validate(card);
};
