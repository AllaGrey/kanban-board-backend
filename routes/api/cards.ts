import express, { Router } from "express";
import { cardDataValidation } from "../../middlewares";
import {
  deleteCardCtrl,
  getBoardCardsCtrl,
  postCardCtrl,
  updateCardCtrl,
} from "../../controllers/cards";
import { updateManyCardsCtrl } from "../../controllers/cards/updateManyCards";

const cardsRouter: Router = express.Router();

cardsRouter.get("/", getBoardCardsCtrl);

cardsRouter.get("/:id", (req, res) => {});

cardsRouter.post("/", cardDataValidation, postCardCtrl);

cardsRouter.put("/:id", cardDataValidation, updateCardCtrl);

cardsRouter.put("/", cardDataValidation, updateManyCardsCtrl);

cardsRouter.delete("/:id", deleteCardCtrl);

export default cardsRouter;
