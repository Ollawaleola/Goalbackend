const express = require("express");
const mongoose = require("mongoose");

const goalRoutes = require("./routes/goalRoutes");

// initialize the express application
const app = express();

const port = 2468;

// middleware
app.use(express.json());

// Route middleware
app.use("/api/goals", goalRoutes);

const door = async () => {
  await mongoose.connect(
    "mongodb+srv://ollawaleola:rlYanTJ67WEvLPHM@cluster0.0awjfqt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );

  console.log("Database connected Successfully");

  app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
  });
};

door();

// ollawaleola
// rlYanTJ67WEvLPHM
// mongodb+srv://ollawaleola:rlYanTJ67WEvLPHM@cluster0.0awjfqt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
