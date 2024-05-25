import { Types } from "mongoose";

export enum CARD_STATUS {
  TODO = "todo",
  IN_PROGRESS = "inProgress",
  DONE = "done",
}

export interface ICard {
  title: string;
  description: string;
  boardId: string;
  status: CARD_STATUS;
  order: number;
  createdAt?: Date;
  updatedAt?: Date;
  _id?: Types.ObjectId;
  id?: string;
}

export interface IBoard {
  title: string;
  cards: {
    todo: ICard[];
    inProgress: ICard[];
    done: ICard[];
  };
  createdAt?: Date;
  updatedAt?: Date;
  _id?: Types.ObjectId;
}

export interface ICardWithBoard extends ICard {
  board?: string;
}
