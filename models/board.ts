import { Schema, Types, model } from "mongoose";

const boardSchema: Schema = new Schema(
  {
    title: {
      type: "string",
      required: [true, "title is required"],
    },
    cards: {
      type: [{ type: Types.ObjectId, ref: "Card" }],
    },
  },
  { timestamps: true, versionKey: false }
);

export const Board = model("Board", boardSchema);
