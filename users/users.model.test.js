const request = require("supertest");

const db = require("../database/dbConfig");
const Users = require("./users-model");

describe("testing the users models", () => {
  it("", () => {});

  //   beforeEach(async () => {
  //     await db("users").truncate();
  //   });
  //   describe("insert()", () => {
  //     it("should insert a user to the DB", async () => {
  //       await Users.insert({ username: "rbabaci1", password: "rabah" });
  //       await Users.insert({ username: "kyla97", password: "kyla" });
  //       const users = await db("users");
  //       expect(users).toHaveLength(2);
  //     });
  //   });
});
