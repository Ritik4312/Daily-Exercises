const request = require("supertest");
const mongoose = require("mongoose");

let app;
let ownerToken = "";
let userToken = "";
let appId = "";

beforeAll(async () => {
  app = require("../server");
  await mongoose.connection.asPromise();

  await mongoose.connection.collection("owners").deleteMany({ email: "ao@test.com" });
  await mongoose.connection.collection("users").deleteMany({ email: "au@test.com" });
  await mongoose.connection.collection("apps").deleteMany({ name: "BrowseApp" });

  // Setup owner
  await request(app).post("/api/owners/register")
    .send({ name: "AppOwner", email: "ao@test.com", password: "123456" });
  const ownerRes = await request(app).post("/api/owners/login")
    .send({ email: "ao@test.com", password: "123456" });
  ownerToken = ownerRes.body.token;

  // Create app
  const appRes = await request(app).post("/api/owners/apps")
    .set("Authorization", `Bearer ${ownerToken}`)
    .send({ name: "BrowseApp", description: "desc", version: "1.0", genre: "games", ratings: 4 });
  appId = appRes.body.app._id;

  // Setup user
  await request(app).post("/api/users/register")
    .send({ name: "AppUser", email: "au@test.com", password: "123456" });
  const userRes = await request(app).post("/api/users/login")
    .send({ email: "au@test.com", password: "123456" });
  userToken = userRes.body.token;
}, 30000);

afterAll(async () => {
  await mongoose.connection.collection("owners").deleteMany({ email: "ao@test.com" });
  await mongoose.connection.collection("users").deleteMany({ email: "au@test.com" });
  await mongoose.connection.collection("apps").deleteMany({ name: "BrowseApp" });
  await mongoose.connection.close();
}, 30000);

test("get all apps", async () => {
  const res = await request(app).get("/api/apps");
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});

test("search app", async () => {
  const res = await request(app).get("/api/apps/search?name=Browse");
  expect(res.statusCode).toBe(200);
});

test("filter by category", async () => {
  const res = await request(app).get("/api/apps/category/games");
  expect(res.statusCode).toBe(200);
});

test("filter by rating", async () => {
  const res = await request(app).get("/api/apps/filter?minRating=3");
  expect(res.statusCode).toBe(200);
});

test("get single app", async () => {
  const res = await request(app).get(`/api/apps/${appId}`);
  expect(res.statusCode).toBe(200);
});

test("download app", async () => {
  const res = await request(app)
    .post(`/api/apps/${appId}/download`)
    .set("Authorization", `Bearer ${userToken}`);
  expect(res.statusCode).toBe(200);
});

test("add comment", async () => {
  const res = await request(app)
    .post(`/api/apps/${appId}/comment`)
    .set("Authorization", `Bearer ${userToken}`)
    .send({ comment: "Nice app!", userName: "AppUser" });
  expect(res.statusCode).toBe(200);
});

test("submit rating", async () => {
  const res = await request(app)
    .post(`/api/apps/${appId}/rate`)
    .set("Authorization", `Bearer ${userToken}`)
    .send({ rating: 4 });
  expect(res.statusCode).toBe(200);
});

test("get notifications", async () => {
  const res = await request(app).get("/api/apps/notifications");
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});