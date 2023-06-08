const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
mongoose.connect(process.env.MONGO_URL, () =>
  console.log("mongodb has been connecteded successfully")
);

app.listen(process.env.PORT, () =>
  console.log("server has been started successfully!")
);
