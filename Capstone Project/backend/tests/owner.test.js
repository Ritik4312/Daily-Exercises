const request = require("supertest");
const mongoose = require("mongoose");

let app;
let token = "";
let appId = "";

beforeAll(async () => {
  app = require("../server");
  await mongoose.connection.asPromise();
  await mongoose.connection.collection("owners").deleteMany({ email: "o@test.com" });
  await mongoose.connection.collection("apps").deleteMany({ name: "OwnerApp" });

  await request(app).post("/api/owners/register")
    .send({ name: "Owner", email: "o@test.com", password: "123456" });

  const res = await request(app).post("/api/owners/login")
    .send({ email: "o@test.com", password: "123456" });
  token = res.body.token;
}, 30000);

afterAll(async () => {
  await mongoose.connection.collection("owners").deleteMany({ email: "o@test.com" });
  await mongoose.connection.collection("apps").deleteMany({ name: "OwnerApp" });
  await mongoose.connection.close();
}, 30000);

test("register owner", async () => {
  await mongoose.connection.collection("owners").deleteMany({ email: "o2@test.com" });
  const res = await request(app).post("/api/owners/register")
    .send({ name: "Owner2", email: "o2@test.com", password: "123456" });
  expect(res.statusCode).toBe(200);
});

test("login owner", async () => {
  const res = await request(app).post("/api/owners/login")
    .send({ email: "o@test.com", password: "123456" });
  expect(res.statusCode).toBe(200);
  expect(res.body.token).toBeDefined();
});

test("create app", async () => {
  const res = await request(app).post("/api/owners/apps")
    .set("Authorization", `Bearer ${token}`)
    .send({ name: "OwnerApp", description: "desc", version: "1.0", genre: "games", ratings: 4 });
  expect(res.statusCode).toBe(200);
  appId = res.body.app._id;
});

test("get owner apps", async () => {
  const res = await request(app).get("/api/owners/apps")
    .set("Authorization", `Bearer ${token}`);
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});

test("update app", async () => {
  const res = await request(app).put(`/api/owners/apps/${appId}`)
    .set("Authorization", `Bearer ${token}`)
    .send({ name: "OwnerApp Updated" });
  expect(res.statusCode).toBe(200);
});

test("toggle visibility", async () => {
  const res = await request(app).patch(`/api/owners/apps/${appId}/visibility`)
    .set("Authorization", `Bearer ${token}`);
  expect(res.statusCode).toBe(200);
});

test("delete app", async () => {
  const res = await request(app).delete(`/api/owners/apps/${appId}`)
    .set("Authorization", `Bearer ${token}`);
  expect(res.statusCode).toBe(200);
});