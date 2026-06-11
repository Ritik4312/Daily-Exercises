const request = require("supertest");
const mongoose = require("mongoose");

let app;

beforeAll(async () => {
  app = require("../server");
  await mongoose.connection.asPromise();
});

afterAll(async () => {
  await mongoose.connection.close();
});

test("register user", async () => {
  await mongoose.connection.collection("users").deleteMany({ email: "u@test.com" });
  const res = await request(app).post("/api/users/register")
    .send({ name: "User", email: "u@test.com", password: "123456" });
  expect(res.statusCode).toBe(200);
});

test("no duplicate email", async () => {
  const res = await request(app).post("/api/users/register")
    .send({ name: "User", email: "u@test.com", password: "123456" });
  expect(res.statusCode).toBe(400);
});

test("login success", async () => {
  const res = await request(app).post("/api/users/login")
    .send({ email: "u@test.com", password: "123456" });
  expect(res.statusCode).toBe(200);
  expect(res.body.token).toBeDefined();
});

test("login wrong password", async () => {
  const res = await request(app).post("/api/users/login")
    .send({ email: "u@test.com", password: "wrong" });
  expect(res.statusCode).toBe(400);
});

test("login unknown email", async () => {
  const res = await request(app).post("/api/users/login")
    .send({ email: "nobody@test.com", password: "123456" });
  expect(res.statusCode).toBe(400);
});