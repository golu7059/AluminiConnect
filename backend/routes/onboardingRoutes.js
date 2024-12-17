const express = require("express");
const onboardingRouter = express.Router();
const {
  assignRole,
  createStudentProfile,
  createAlumniProfile,
} = require("../controllers/OnboardingController.js");
const auth = require("../middlewares/auth.js");

onboardingRouter.post("/assign-role", auth, assignRole);
onboardingRouter.post("/student-profile", auth, createStudentProfile);
onboardingRouter.post("/alumni-profile", auth, createAlumniProfile);

module.exports = onboardingRouter;
