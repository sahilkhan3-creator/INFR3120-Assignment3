const express = require("express");
const router = express.Router();
const controller = require("../controllers/assignmentController");

// Home splash page
router.get("/", controller.home);

// List all assignments
router.get("/assignments", controller.list);

// Create
router.get("/assignments/create", controller.createForm);
router.post("/assignments/create", controller.create);

// Edit
router.get("/assignments/edit/:id", controller.editForm);
router.post("/assignments/edit/:id", controller.update);

// Delete
router.get("/assignments/delete/:id", controller.deleteForm);
router.post("/assignments/delete/:id", controller.delete);

module.exports = router;
