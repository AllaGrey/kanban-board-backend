import { Schema, SchemaTypes, Types, model } from "mongoose";

enum CARD_STATUS {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

interface ICard {
  title: string;
  description: string;
  boardId: string;
  status: CARD_STATUS;
  order: number;
  createdAt: Date;
  updatedAt: Date;
  _id: Types.ObjectId;
}

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
    boardId: {
      type: String,
      required: [true, "boardId is required"],
    },
    status: {
      type: CARD_STATUS,
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
  { timestamp: true, versionKey: true }
);

export const Card = model("Card", cardSchema);
