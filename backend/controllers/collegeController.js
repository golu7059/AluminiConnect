const College = require("../models/College");

// Create a new college
exports.createCollege = async (req, res) => {
  try {
    user = req.userId;
    req.body.user = user;
    const college = new College(req.body);
    await college.save();
    res.status(201).send(college);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Read all colleges
exports.getAllColleges = async (req, res) => {
  try {
    const colleges = await College.find({});
    res.status(200).send(colleges);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Read a single college by ID
exports.getCollegeById = async (req, res) => {
  try {
    const college = await College.findById(req.params.id);
    if (!college) {
      return res.status(404).send();
    }
    res.status(200).send(college);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a college by ID
exports.updateCollege = async (req, res) => {
  try {
    const college = await College.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!college) {
      return res.status(404).send();
    }
    res.status(200).send(college);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a college by ID
exports.deleteCollege = async (req, res) => {
  try {
    const college = await College.findByIdAndDelete(req.params.id);
    if (!college) {
      return res.status(404).send();
    }
    res.status(200).send(college);
  } catch (error) {
    res.status(500).send(error);
  }
};
