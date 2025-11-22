const Assignment = require("../models/Assignment");

// All controller logic for CRUD operations
module.exports = {
  // Home / splash page
  home: (req, res) => {
    res.render("home");
  },

  // List all assignments
  list: async (req, res) => {
    try {
      const assignments = await Assignment.find().sort({ dueDate: 1 });
      res.render("assignments", { assignments });
    } catch (err) {
      console.error(err);
      res.status(500).send("Error loading assignments");
    }
  },

  // Show create form
  createForm: (req, res) => {
    res.render("assignment-form", { assignment: null });
  },

  // Handle create
  create: async (req, res) => {
    try {
      await Assignment.create(req.body);
      res.redirect("/assignments");
    } catch (err) {
      console.error(err);
      res.status(500).send("Error creating assignment");
    }
  },

  // Show edit form
  editForm: async (req, res) => {
    try {
      const assignment = await Assignment.findById(req.params.id);
      if (!assignment) return res.status(404).send("Assignment not found");
      res.render("assignment-form", { assignment });
    } catch (err) {
      console.error(err);
      res.status(500).send("Error loading assignment");
    }
  },

  // Handle update
  update: async (req, res) => {
    try {
      await Assignment.findByIdAndUpdate(req.params.id, req.body);
      res.redirect("/assignments");
    } catch (err) {
      console.error(err);
      res.status(500).send("Error updating assignment");
    }
  },

  // Show delete confirmation
  deleteForm: async (req, res) => {
    try {
      const assignment = await Assignment.findById(req.params.id);
      if (!assignment) return res.status(404).send("Assignment not found");
      res.render("delete-confirm", { assignment });
    } catch (err) {
      console.error(err);
      res.status(500).send("Error loading assignment for delete");
    }
  },

  // Handle delete
  delete: async (req, res) => {
    try {
      await Assignment.findByIdAndDelete(req.params.id);
      res.redirect("/assignments");
    } catch (err) {
      console.error(err);
      res.status(500).send("Error deleting assignment");
    }
  }
};
