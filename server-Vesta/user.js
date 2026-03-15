// const express = require("express");
// const signupRouter = express.Router();
// const User = require("./models/signup");

// signupRouter.post("/", async (req, res) => {
//   try {
//     const { name, email, password, contact } = req.body;
//     if (!email || !password) {
//       return res.status(400).json({ message: "Email and password required" });
//     }
//     const user = new User({ name, email, password, contact });
//     await user.save();
//     res.status(201).json({ message: "User created successfully" });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// module.exports = signupRouter;