const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { registerOwner, loginOwner } = require("../services/ownerService");
const App = require("../models/App");
const verifyToken = require("../middleware/authMiddleware");

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
    const result = await registerOwner(name, email, password);
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
    const result = await loginOwner(email, password);
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/logout", verifyToken, (req, res) => {
  res.json({ message: "Logged out" });
});

router.post("/apps", verifyToken, async (req, res) => {
  const { name, description, version, genre, ratings } = req.body;
  const app = await App.create({ name, description, version, genre, ratings, owner: req.user.id });
  res.json({ message: "App created", app });
});

router.get("/apps", verifyToken, async (req, res) => {
  const apps = await App.find({ owner: req.user.id });
  res.json(apps);
});

router.put("/apps/:id", verifyToken, async (req, res) => {
  const app = await App.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: "App updated", app });
});

router.delete("/apps/:id", verifyToken, async (req, res) => {
  await App.findByIdAndDelete(req.params.id);
  res.json({ message: "App deleted" });
});

router.patch("/apps/:id/visibility", verifyToken, async (req, res) => {
  const app = await App.findById(req.params.id);
  app.isVisible = !app.isVisible;
  await app.save();
  res.json({ message: "Visibility updated", isVisible: app.isVisible });
});

router.get("/apps/:id/comments", verifyToken, async (req, res) => {
  const app = await App.findById(req.params.id);
  res.json({ comments: app.comments });
});

router.post("/apps/:id/announce", verifyToken, async (req, res) => {
  const { message } = req.body;
  const app = await App.findById(req.params.id);
  app.announcement = message;
  await app.save();
  res.json({ message: "Announcement saved", announcement: app.announcement });
});

module.exports = router;