const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const News = require("../models/newsModel");
const {
  findNews,
  findPiece,
  createNews,
  deletePiece,
  updatePiece,
} = require("../controllers/newsController");

router
  .get("/", findNews)
  .get("/:id", findPiece)
  .post("/", createNews)
  .delete("/:id", deletePiece)
  .patch("/:id", updatePiece);

module.exports = router;
