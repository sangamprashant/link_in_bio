const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
  avatar: String,        // URL to the user's avatar image
  name: { type: String, required: true },          // Full name of the user
  email: { type: String, required: true },        // Email address of the user
  username: { type: String, required: true },    // User's unique username
  bio: String,           // User's biography (non-required)
  password: { type: String, required: true },        // User's password
  socialLinks: [         // Array of social links
    {
      platform: String,  // Social media platform name (e.g., "Instagram")
      icon: String,      // URL to the social media platform icon
      link: String,      // URL to the user's social media profile
    },
    // Add more social links if needed
  ],
});

const USER = mongoose.model("LINKINBIOUSER", userProfileSchema);

module.exports = USER;