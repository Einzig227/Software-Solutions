const mongoose = require("mongoose");
const News = require("../models/newsModel");

const findNews = async (req, res) => {
  const news = await News.find({}).sort({ createdAt: -1 });
  res.json(news);
};

const findPiece = async (req, res) => {
  const { id } = req.params;
  const onePiece = await News.findById(id);
  res.json(onePiece);
};

const createNews = async (req, res) => {
  // await News.deleteMany({});
  const news = req.body;
  const entry = await News.create(news);
  res.json(entry);
};

const deletePiece = async (req, res) => {
  const { id } = req.params;
  const onePiece = await News.findOneAndDelete({ _id: id });
  res.json(onePiece);
};

const updatePiece = async (req, res) => {
  const { id } = req.params;
  const onePiece = await News.findOneAndUpdate({ _id: id }, { ...req.body });
  res.json(onePiece);
};

module.exports = {
  findNews,
  findPiece,
  createNews,
  deletePiece,
  updatePiece,
};
