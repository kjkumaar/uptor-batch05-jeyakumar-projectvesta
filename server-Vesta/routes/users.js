var express = require('express');
const User = require('../models/signup');
var userRouter = express.Router();
const jwt = require('jsonwebtoken');

userRouter.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

userRouter.post("/register", async (req, res) => {
  try {
    const { name, contact, email, password } = req.body;
    // 1. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }
    // 2. Create new user
    const newUser = await User.create({
      name,
      contact,
      email,
      password
    });
    res.status(201).json({
      message: "Account created successfully",
      userId: newUser._id
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Signup failed" });
  }
});

userRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: "login failed" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      "secret1",
      { expiresIn: "1h" }
    );

    res.json({
      message: "login successful",
      token,
      user: {
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
module.exports = userRouter
