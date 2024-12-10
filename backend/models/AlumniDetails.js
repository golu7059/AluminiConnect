const mongoose = require("mongoose");

const alumniDetailsSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  currentRole: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    default: null,
  },
  location: {
    type: String,
    required: true,
  },
  achievements: {
    type: [String],
    required: true,
  },
  allowSalaryVisibility: {
    type: Boolean,
    required: true,
  },
});

const AlumniDetails = mongoose.model("AlumniDetails", alumniDetailsSchema);

module.exports = AlumniDetails;
