const mongoose = require("mongoose");

const socialLinkSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  social_provider: {
    type: String,
    required: true,
  },
  link: {
    type: String, // Assuming URL is stored as a string
    required: true,
  },
});

const SocialLink = mongoose.model("SocialLink", socialLinkSchema);

module.exports = SocialLink;
