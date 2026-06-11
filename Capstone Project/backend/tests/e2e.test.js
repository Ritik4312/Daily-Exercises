const request = require("supertest");
const mongoose = require("mongoose");

let app;
let userToken = "";
let ownerToken = "";
let appId = "";

beforeAll(async () => {
  app = require("../server");
  await mongoose.connection.asPromise();

  // Clean up
  await mongoose.connection.collection("users").deleteMany({ email: "e2euser@test.com" });
  await mongoose.connection.collection("owners").deleteMany({ email: "e2eowner@test.com" });
  await mongoose.connection.collection("apps").deleteMany({ name: "E2E App" });
}, 30000);

afterAll(async () => {
  await mongoose.connection.collection("users").deleteMany({ email: "e2euser@test.com" });
  await mongoose.connection.collection("owners").deleteMany({ email: "e2eowner@test.com" });
  await mongoose.connection.collection("apps").deleteMany({ name: "E2E App" });
  await mongoose.connection.close();
}, 30000);

// OWNER FLOW

test("E2E 1 - Owner registers", async () => {
  const res = await request(app).post("/api/owners/register")
    .send({ name: "E2E Owner", email: "e2eowner@test.com", password: "123456" });
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe("Owner registered");
});

test("E2E 2 - Owner logs in", async () => {
  const res = await request(app).post("/api/owners/login")
    .send({ email: "e2eowner@test.com", password: "123456" });
  expect(res.statusCode).toBe(200);
  expect(res.body.token).toBeDefined();
  ownerToken = res.body.token;
});

test("E2E 3 - Owner creates an app", async () => {
  const res = await request(app).post("/api/owners/apps")
    .set("Authorization", `Bearer ${ownerToken}`)
    .send({ name: "E2E App", description: "E2E test app", version: "1.0", genre: "games", ratings: 4 });
  expect(res.statusCode).toBe(200);
  expect(res.body.app.name).toBe("E2E App");
  appId = res.body.app._id;
});

test("E2E 4 - Owner sees app in dashboard", async () => {
  const res = await request(app).get("/api/owners/apps")
    .set("Authorization", `Bearer ${ownerToken}`);
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
  expect(res.body.length).toBeGreaterThan(0);
});

test("E2E 5 - Owner updates the app", async () => {
  const res = await request(app).put(`/api/owners/apps/${appId}`)
    .set("Authorization", `Bearer ${ownerToken}`)
    .send({ name: "E2E App Updated" });
  expect(res.statusCode).toBe(200);
  expect(res.body.app.name).toBe("E2E App Updated");
});

test("E2E 6 - Owner toggles visibility", async () => {
  const res = await request(app).patch(`/api/owners/apps/${appId}/visibility`)
    .set("Authorization", `Bearer ${ownerToken}`);
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe("Visibility updated");
});

test("E2E 7 - Owner toggles visibility back", async () => {
  const res = await request(app).patch(`/api/owners/apps/${appId}/visibility`)
    .set("Authorization", `Bearer ${ownerToken}`);
  expect(res.statusCode).toBe(200);
});

test("E2E 8 - Owner sends announcement", async () => {
  const res = await request(app).post(`/api/owners/apps/${appId}/announce`)
    .set("Authorization", `Bearer ${ownerToken}`)
    .send({ message: "New update available!" });
  expect(res.statusCode).toBe(200);
  expect(res.body.announcement).toBe("New update available!");
});

// USER FLOW

test("E2E 9 - User registers", async () => {
  const res = await request(app).post("/api/users/register")
    .send({ name: "E2E User", email: "e2euser@test.com", password: "123456" });
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe("User registered");
});

test("E2E 10 - User logs in", async () => {
  const res = await request(app).post("/api/users/login")
    .send({ email: "e2euser@test.com", password: "123456" });
  expect(res.statusCode).toBe(200);
  expect(res.body.token).toBeDefined();
  userToken = res.body.token;
});

test("E2E 11 - User browses all apps", async () => {
  const res = await request(app).get("/api/apps");
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});

test("E2E 12 - User searches app by name", async () => {
  const res = await request(app).get("/api/apps/search?name=E2E");
  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeGreaterThan(0);
});

test("E2E 13 - User filters by category", async () => {
  const res = await request(app).get("/api/apps/category/games");
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});

test("E2E 14 - User filters by rating", async () => {
  const res = await request(app).get("/api/apps/filter?minRating=3");
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});

test("E2E 15 - User views app details", async () => {
  const res = await request(app).get(`/api/apps/${appId}`);
  expect(res.statusCode).toBe(200);
  expect(res.body._id).toBe(appId);
});

test("E2E 16 - User downloads app", async () => {
  const res = await request(app).post(`/api/apps/${appId}/download`)
    .set("Authorization", `Bearer ${userToken}`);
  expect(res.statusCode).toBe(200);
  expect(res.body.downloadCount).toBeGreaterThan(0);
});

test("E2E 17 - User writes a comment", async () => {
  const res = await request(app).post(`/api/apps/${appId}/comment`)
    .set("Authorization", `Bearer ${userToken}`)
    .send({ comment: "Great app!", userName: "E2E User" });
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe("Comment added");
});

test("E2E 18 - User rates the app", async () => {
  const res = await request(app).post(`/api/apps/${appId}/rate`)
    .set("Authorization", `Bearer ${userToken}`)
    .send({ rating: 5 });
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe("Rating submitted");
});

test("E2E 19 - User sees notifications", async () => {
  const res = await request(app).get("/api/apps/notifications");
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
  expect(res.body.length).toBeGreaterThan(0);
});

test("E2E 20 - Owner sees download count", async () => {
  const res = await request(app).get("/api/owners/apps")
    .set("Authorization", `Bearer ${ownerToken}`);
  expect(res.statusCode).toBe(200);
  const app2 = res.body.find((a) => a._id === appId);
  expect(app2.downloadCount).toBeGreaterThan(0);
});

test("E2E 21 - Owner sees comments", async () => {
  const res = await request(app).get(`/api/owners/apps/${appId}/comments`)
    .set("Authorization", `Bearer ${ownerToken}`);
  expect(res.statusCode).toBe(200);
  expect(res.body.comments.length).toBeGreaterThan(0);
});

test("E2E 22 - Owner logs out", async () => {
  const res = await request(app).post("/api/owners/logout")
    .set("Authorization", `Bearer ${ownerToken}`);
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe("Logged out");
});

test("E2E 23 - User logs out", async () => {
  const res = await request(app).post("/api/users/logout")
    .set("Authorization", `Bearer ${userToken}`);
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe("Logged out");
});