const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET = "playstoresecretkey123";

const registerUser = async (name, email, password) => {
  const exists = await User.findOne({ email });
  if (exists) throw new Error("Email already exists");
  const hashed = await bcrypt.hash(password, 10);
  await User.create({ name, email, password: hashed });
  return { message: "User registered" };
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");
  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Wrong password");
  const token = jwt.sign({ id: user._id, role: "user" }, SECRET, { expiresIn: "1d" });
  return { message: "Login successful", token, name: user.name };
};

module.exports = { registerUser, loginUser };