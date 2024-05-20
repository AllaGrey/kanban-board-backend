import { Schema, SchemaTypes, model } from "mongoose";
import { CARD_STATUS } from "../constants/constants";

const cardSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    status: {
      type: String,
      enum: Object.values(CARD_STATUS),
      default: CARD_STATUS.TODO,
      required: [true, "Status is required"],
    },
    order: {
      type: Number,
      required: [true, "Order is required"],
    },
    board: {
      type: SchemaTypes.ObjectId,
      ref: "Board",
      required: [true, "Board is required"],
    },
  },
  { timestamp: true, versionKey: false }
);

export const Card = model("Card", cardSchema);
