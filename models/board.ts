import { Schema, model } from "mongoose";

const boardSchema: Schema = new Schema(
  {
    title: {
      type: "string",
      required: [true, "title is required"],
    },
  },
  { timestamps: true, versionKey: false }
);

export const Board = model("Board", boardSchema);
