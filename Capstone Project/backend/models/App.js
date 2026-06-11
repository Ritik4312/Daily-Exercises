const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  userName: String,
  comment: String,
  createdAt: { type: Date, default: Date.now }
});

const ratingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  rating: { type: Number, min: 1, max: 5 }
});

const appSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  version: { type: String, required: true },
  genre: {
    type: String,
    enum: ["games", "beauty", "fashion", "women", "health", "social", "chatting", "education", "finance", "food", "travel", "music", "sports", "news", "shopping"],
    required: true
  },
  ratings: { type: Number, default: 0 },
  userRatings: [ratingSchema],
  releaseDate: { type: Date, default: Date.now },
  isVisible: { type: Boolean, default: true },
  downloadCount: { type: Number, default: 0 },
  announcement: { type: String, default: "" },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "Owner", required: true },
  comments: [commentSchema]
}, { timestamps: true });

module.exports = mongoose.model("App", appSchema);