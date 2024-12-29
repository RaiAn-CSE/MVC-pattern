const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connectToDB } = require("./config/db");
const userRoute = require("./user/user.router");
const taskRoute = require("./task/task.router");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/", userRoute);
app.use("/", taskRoute);

// Mongoose Connected:
connectToDB()

app.get("/", (req, res) => {
  res.send(`Server listening on port ${process.env.PORT}`)
})

app.listen(process.env.PORT, function () {
  console.log(`Server listening on port ${process.env.PORT}`);
});
