const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");
const {
  getAllApps,
  searchApps,
  filterByCategory,
  filterByRating,
  getAppById,
  addComment,
  downloadApp,
  getNotifications,
  rateApp
} = require("../services/appService");

// Get all visible apps
router.get("/", async (req, res) => {
  try {
    const apps = await getAllApps();
    res.json(apps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get notifications — MUST be before /:id
router.get("/notifications", async (req, res) => {
  try {
    const notifications = await getNotifications();
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Search apps by name — MUST be before /:id
router.get("/search", async (req, res) => {
  try {
    const result = await searchApps(req.query.name);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Filter by category — MUST be before /:id
router.get("/category/:genre", async (req, res) => {
  try {
    const apps = await filterByCategory(req.params.genre);
    res.json(apps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Filter by rating — MUST be before /:id
router.get("/filter", async (req, res) => {
  try {
    const apps = await filterByRating(req.query.minRating);
    res.json(apps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Download app — MUST be before /:id
router.post("/:id/download", verifyToken, async (req, res) => {
  try {
    const downloadCount = await downloadApp(req.params.id);
    res.json({ message: "App downloaded", downloadCount });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add comment — MUST be before /:id
router.post("/:id/comment", verifyToken, async (req, res) => {
  try {
    const { comment, userName } = req.body;
    const comments = await addComment(req.params.id, req.user.id, userName, comment);
    res.json({ message: "Comment added", comments });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Rate app — MUST be before /:id
router.post("/:id/rate", verifyToken, async (req, res) => {
  try {
    const { rating } = req.body;
    const newRating = await rateApp(req.params.id, req.user.id, rating);
    res.json({ message: "Rating submitted", ratings: newRating });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single app by id — ALWAYS LAST
router.get("/:id", async (req, res) => {
  try {
    const app = await getAppById(req.params.id);
    if (!app) return res.status(404).json({ message: "App not found" });
    res.json(app);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;