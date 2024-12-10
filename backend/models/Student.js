const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  collegeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "College",
    required: true,
  },
  CGPA: {
    type: Number,
    required: true,
  },
  passoutYear: {
    type: Number,
    required: true,
  },
  isAlumni: {
    type: Boolean,
    required: true,
  },
  alumniDetailsId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AlumniDetails",
    required: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
