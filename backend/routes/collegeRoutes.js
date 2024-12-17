const express = require("express");

const collegeRouter = express.Router();
const auth = require("../middlewares/auth.js");

const {
  createCollege,
  getAllColleges,
  getCollegeById,
  updateCollege,
  deleteCollege,
} = require("../controllers/collegeController.js");

collegeRouter.post("/", auth, createCollege);
collegeRouter.get("/", auth, getAllColleges);
collegeRouter.get("/:id", auth, getCollegeById);
collegeRouter.patch("/:id", auth, updateCollege);
collegeRouter.delete("/:id", auth, deleteCollege);

module.exports = collegeRouter;
