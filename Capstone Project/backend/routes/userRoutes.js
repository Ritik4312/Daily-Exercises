const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { registerUser, loginUser } = require("../services/userService");
const verifyToken = require("../middleware/authMiddleware");

// Validation rules
const registerRules = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters")
];

const loginRules = [
  body("email").isEmail().withMessage("Valid email is required"),
  body("password").notEmpty().withMessage("Password is required")
];

router.post("/register", registerRules, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array()[0].msg });
  }
  try {
    const { name, email, password } = req.body;
    const result = await registerUser(name, email, password);
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/login", loginRules, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array()[0].msg });
  }
  try {
    const { email, password } = req.body;
    const result = await loginUser(email, password);
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/logout", verifyToken, (req, res) => {
  res.json({ message: "Logged out" });
});

module.exports = router;