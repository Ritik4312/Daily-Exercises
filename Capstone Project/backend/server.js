const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const ownerRoutes = require("./routes/ownerRoutes");
const appRoutes = require("./routes/appRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://ritikkmr100_db_user:ritik123@cluster0.sz7roel.mongodb.net/Playstoredb?appName=Cluster0")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));

app.use("/api/users", userRoutes);
app.use("/api/owners", ownerRoutes);
app.use("/api/apps", appRoutes);

app.get("/", (req, res) => {
  res.send("Play Store Backend is running");
});


if (require.main === module) {
  app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
  });
}

module.exports = app;