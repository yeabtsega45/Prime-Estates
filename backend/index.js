const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const authController = require("./controllers/authController");

const app = express();
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log("Database has been connected successfully");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/auth", authController);

app.listen(process.env.PORT, () =>
  console.log("server has been started successfully!", process.env.PORT)
);
