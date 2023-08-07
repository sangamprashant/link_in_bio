const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const LINKINBIOUSER = require("../Models/User");
const LINKINBIOICON = require("../Models/Icon");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

// Signup route
router.post("/api/admin/backend/signup", async (req, res) => {
  const { email, password, name, username } = req.body;

  try {
    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ error: "Please enter all fields." });
    }

    // Check if user with the same email already exists
    const existingUser = await LINKINBIOUSER.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }
    const existingUser2 = await LINKINBIOUSER.findOne({ username });
    if (existingUser2) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user with hashed password
    const newUser = new LINKINBIOUSER({
      email,
      password: hashedPassword,
      name,
      username,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    const token = jwt.sign(
      { userId: savedUser._id, email: savedUser.email },
      process.env.JWT_SECRET
    );

    res.json({ user: savedUser, token, message: "Registered successfully." });
  } catch (error) {
    console.log("Error during registration:", error);
    res.status(500).json({ error: "Server Error" });
  }
});
// Sign-in
router.post("/api/admin/backend/signin", async (req, res) => {
  const { emailOrUsername, password } = req.body;

  try {
    // Check if the user with the provided email or username exists
    const user = await LINKINBIOUSER.findOne({
      $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
    });

    if (!user) {
      return res
        .status(400)
        .json({ error: "Invalid email or username or password" });
    }

    // Compare the provided password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ error: "Invalid email or username or password" });
    }

    // Password is correct, user is authenticated

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET
    );
    // Remove password field from user object before sending the response
    user.password = undefined;
    res.json({ message: "Sign-in successful", user: user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});
// Search users route
router.get("/api/search/users", async (req, res) => {
    const { query } = req.query;
  
    try {
      // Search for users matching the query in name or username fields
      const users = await LINKINBIOUSER.find({
        $or: [
          { name: { $regex: query, $options: "i" } }, // Case-insensitive search in name
          { username: { $regex: query, $options: "i" } }, // Case-insensitive search in username
        ],
      }).select("name username avatar email bio");
  
      res.json(users);
    } catch (error) {
      console.error("Error during search:", error);
      res.status(500).json({ message: "Server Error" });
    }
  });

// Get user by username
router.get("/api/user/:username", async (req, res) => {
    const { username } = req.params;
  
    try {
      const user = await LINKINBIOUSER.findOne({ username });
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ error: "Server Error" });
    }
  });
// API endpoint to handle user update
router.put("/api/user/:id", (req, res) => {
  const { id } = req.params;
  const newData = req.body;

  // Find the user by _id and update the data
  LINKINBIOUSER.findOneAndUpdate({ _id: id }, newData, { new: true }, (err, updatedUser) => {
    if (err) {
      console.error("Error updating user:", err);
      return res.status(500).json({ error: "Failed to update user" });
    }

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Send the updated user data as the response
    return res.json({ loggeduser: updatedUser, message: "Profile updated successfully." });
  });
});

router.post("/api/add/icons", (req, res) => {
  const { icon } = req.body;

  // Check if the icon already exists in the database
  LINKINBIOICON.findOne({ icon: icon })
    .then((existingIcon) => {
      if (existingIcon) {
        // If the icon already exists, return an error response
        res.status(409).json({ error: "Icon already exists in the database" });
      } else {
        // If the icon is unique, create a new Icon document and save it to the database
        LINKINBIOICON.create({ icon })
          .then((newIcon) => {
            res.status(201).json({icon:newIcon,message:"Icon created successfully"});
          })
          .catch((err) => {
            res.status(500).json({ error: "Unable to post icon" });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Error checking icon uniqueness" });
    });
});
// API endpoint to get all icons
router.get("/api/get/icons", (req, res) => {
  // Find all icons in the database
  LINKINBIOICON.find({})
    .then((icons) => {
      res.status(200).json(icons);
    })
    .catch((err) => {
      res.status(500).json({ error: "Unable to fetch icons" });
    });
});

// // Endpoint to check email
// router.post("/api/check/email", (req, res) => {
//   const { email } = req.body;
//   const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP

//   // Create a transporter for sending emails
//   let transporter = nodemailer.createTransport({
//     service: "Gmail",
//     auth: {
//       user: process.env.EMAIL, // Replace with your own email address
//       pass: process.env.EMAIL_PASSWORD, // Replace with your own email password
//     },
//   });

//   UserQuestionPaper.findOne({ email: email })
//     .then((user) => {
//       if (user) {
//         // User found, send the OTP via email
//         const mailOptions = {
//           from: process.env.EMAIL,
//           to: email,
//           subject: "Password Reset OTP",
//           text: `Dear user,\n\nYou have requested to reset your password for the site "${process.env.DOMAIN}".\n\nPlease use the following OTP to proceed with the password reset:\n\nOTP: ${otp}\n\nIf you did not initiate this request, please ignore this email.\n\nBest regards,\nThe Academic Queries Team`,
//         };

//         transporter.sendMail(mailOptions, (error, info) => {
//           if (error) {
//             console.log(error);
//             return res.status(500).json({ error: "Failed to send OTP" });
//           } else {
//             return res.json({ message: "Otp send to your email.", otp: otp });
//           }
//         });
//       } else {
//         // User not found
//         return res.json({ error: "User not found" });
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//       return res.status(500).json({ error: "Internal server error" });
//     });
// });
// // Reset password route
// router.put("/api/admin/backend/reset-password", (req, res) => {
//   const { email, newPassword } = req.body;

//   // Hash the new password
//   bcrypt.hash(newPassword, 12, (error, hashedPassword) => {
//     if (error) {
//       console.log(error);
//       return res.status(500).json({ error: "Server Error" });
//     }

//     // Update the user's password
//     UserQuestionPaper.findOneAndUpdate({ email }, { password: hashedPassword })
//       .then((updatedUser) => {
//         if (!updatedUser) {
//           return res.status(400).json({ error: "User not found" });
//         }
//         res.json({ message: "Password reset successful" });
//       })
//       .catch((error) => {
//         console.log(error);
//         res.status(500).json({ error: "Server Error" });
//       });
//   });
// });
module.exports = router;
