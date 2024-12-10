const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  alumniCount: {
    type: Number,
    required: true,
  },
  verified: {
    type: Boolean,
    required: true,
  },
  establishedYear: {
    type: Number,
    required: true,
  },
  totalDepartments: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  website: {
    type: String, // Assuming URL is stored as a string
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  notableAchievements: {
    type: [String],
    required: true,
  },
});

const College = mongoose.model("College", collegeSchema);

module.exports = College;
