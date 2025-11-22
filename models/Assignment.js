const mongoose = require("mongoose");

// Assignment schema for MongoDB
const assignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  course: { type: String, required: true },
  dueDate: { type: Date, required: true },
  status: { type: String, default: "Not Started" }, // Not Started, In Progress, Completed
  description: { type: String }
});

module.exports = mongoose.model("Assignment", assignmentSchema);
