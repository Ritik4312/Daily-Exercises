const App = require("../models/App");
const mongoose = require("mongoose");

const getAllApps = async () => {
  return await App.find({ isVisible: true });
};

const searchApps = async (name) => {
  const allApps = await App.find({ isVisible: true });
  return allApps.filter((app) =>
    app.name.toLowerCase().includes(name.toLowerCase())
  );
};

const filterByCategory = async (genre) => {
  return await App.find({ isVisible: true, genre });
};

const filterByRating = async (minRating) => {
  const allApps = await App.find({ isVisible: true });
  return allApps.filter((app) => app.ratings >= Number(minRating));
};

const getAppById = async (id) => {
  return await App.findById(id);
};

const downloadApp = async (id) => {
  const app = await App.findById(new mongoose.Types.ObjectId(id));
  if (!app) throw new Error("App not found");
  app.downloadCount += 1;
  await app.save();
  return app.downloadCount;
};

const addComment = async (id, userId, userName, comment) => {
  const app = await App.findById(new mongoose.Types.ObjectId(id));
  if (!app) throw new Error("App not found");
  app.comments.push({
    userId: new mongoose.Types.ObjectId(userId),
    userName,
    comment
  });
  await app.save();
  return app.comments;
};

const rateApp = async (id, userId, rating) => {
  const app = await App.findById(new mongoose.Types.ObjectId(id));
  if (!app) throw new Error("App not found");

  const alreadyRated = app.userRatings.find(
    (r) => r.userId.toString() === userId.toString()
  );

  if (alreadyRated) {
    alreadyRated.rating = rating;
  } else {
    app.userRatings.push({
      userId: new mongoose.Types.ObjectId(userId),
      rating
    });
  }

  const total = app.userRatings.reduce((sum, r) => sum + r.rating, 0);
  app.ratings = Number((total / app.userRatings.length).toFixed(1));

  await app.save();
  return app.ratings;
};

const getNotifications = async () => {
  const apps = await App.find({ isVisible: true });
  return apps
    .filter((app) => app.announcement !== "")
    .map((app) => ({
      appName: app.name,
      announcement: app.announcement,
      updatedAt: app.updatedAt
    }));
};

module.exports = {
  getAllApps, searchApps, filterByCategory,
  filterByRating, getAppById, addComment,
  downloadApp, getNotifications, rateApp
};