import express, { Router } from "express";

const cardsRouter: Router = express.Router();

cardsRouter.get("/", (req, res) => {
  res.send("Card");
});

cardsRouter.get("/:id", (req, res) => {});

cardsRouter.post("/", (req, res) => {});

cardsRouter.put("/:id", (req, res) => {});

cardsRouter.delete("/:id", (req, res) => {});

export default cardsRouter;
