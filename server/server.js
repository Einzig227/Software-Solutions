require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const newsRoutes = require("./routes/news");

const { MONGO_URI, PORT } = process.env;

const app = express();

app
  .use(express.json())
  .use((req, res, next) => {
    console.log(`req.path: ${req.path}, req.method: ${req.method}`);
    next();
  })
  .use("/api/news/", newsRoutes);

const main = async () => {
  await mongoose.connect(MONGO_URI);
  app.listen(PORT, () => {
    console.log(`Connected to db.\nListening to PORT ${PORT}.`);
  });
};

main();
