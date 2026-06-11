const Owner = require("../models/Owner");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET = "playstoresecretkey123";

const registerOwner = async (name, email, password) => {
  const exists = await Owner.findOne({ email });
  if (exists) throw new Error("Email already exists");
  const hashed = await bcrypt.hash(password, 10);
  await Owner.create({ name, email, password: hashed });
  return { message: "Owner registered" };
};

const loginOwner = async (email, password) => {
  const owner = await Owner.findOne({ email });
  if (!owner) throw new Error("Owner not found");
  const match = await bcrypt.compare(password, owner.password);
  if (!match) throw new Error("Wrong password");
  const token = jwt.sign({ id: owner._id, role: "owner" }, SECRET, { expiresIn: "1d" });
  return { message: "Login successful", token, name: owner.name };
};

module.exports = { registerOwner, loginOwner };