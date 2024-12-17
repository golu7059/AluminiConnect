const User = require("../models/User.js");
const Student = require("../models/Student.js");
const AlumniDetails = require("../models/AlumniDetails.js");

// TODO: Remove Password from response
exports.assignRole = async (req, res) => {
  try {
    const userId = req.userId;
    const { role } = req.body;
    if (!role) {
      return res.status(400).send("role is required");
    }
    const user = await User.findById(userId);
    user.role = role;
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createStudentProfile = async (req, res) => {
  try {
    const userId = req.userId;
    console.log("userId: ", userId);

    const user = await User.findById(userId);

    // Check if the user is a student
    if (user.role !== "Student") {
      return res.status(400).send("Only students can create profile");
    }

    const { collegeId, CGPA, passoutYear } = req.body;
    if (!collegeId || !CGPA || !passoutYear === undefined) {
      return res.status(400).send("All fields are required");
    }

    var isAlumni = false;

    // Check if the passout year is less than the current year
    if (passoutYear < new Date().getFullYear()) {
      isAlumni = true;
    }

    // Check if the student profile already exists
    const studentProfile = await Student.findOne({ userId: userId });
    if (studentProfile) {
      return res.status(400).send("Profile already exists");
    }

    const student = new Student({
      userId,
      collegeId,
      CGPA,
      passoutYear,
      isAlumni,
    });
    await student.save();
    res.status(200).send(student);
  } catch (error) {
    console.log("Error in createStudentProfile: ", error);
    res.status(500).send(error);
  }
};

exports.createAlumniProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const student = await Student.findOne({ userId: userId });

    // Check if the user is an alumni
    if (!student.isAlumni) {
      return res.status(400).send("Only alumni can create profile");
    }

    const {
      currentRole,
      company,
      location,
      salary,
      allowSalaryVisibility,
      achievements,
    } = req.body;
    if (
      !currentRole ||
      !company ||
      !location ||
      !salary ||
      !allowSalaryVisibility
    ) {
      return res.status(400).send("All fields are required");
    }

    const alumniDetails = new AlumniDetails({
      studentId: student._id,
      currentRole,
      company,
      location,
      achievements,
      salary,
      allowSalaryVisibility,
    });

    await alumniDetails.save();
    res.status(200).send(alumniDetails);
  } catch (error) {
    console.log("Error in createAlumniProfile: ", error);
    res.status(500).send;
  }
};
