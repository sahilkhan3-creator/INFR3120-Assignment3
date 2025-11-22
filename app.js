const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

const assignmentRoutes = require("./routes/assignmentRoutes");

const app = express();

// Connect to MongoDB using MONGO_URI from .env
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.log("MongoDB connection error ❌", err));

// Middleware
app.use(express.urlencoded({ extended: true })); // to read form data from POST
app.use(express.static(path.join(__dirname, "public"))); // for CSS, images, etc.

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/", assignmentRoutes);

// Start server
const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  console.log(`INFR3120 Assignment 3 – app is running on http://localhost:${PORT} ✅`);
});
