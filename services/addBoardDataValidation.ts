import Joi from "joi";

export const addBoardDataValidation = (board: string) => {
  return Joi.object()
    .options({ abortEarly: false })
    .keys({
      title: Joi.string().required().messages({
        "any.required": "title is required",
        "string.empty": "title is required",
      }),
    })
    .validate(board);
};
