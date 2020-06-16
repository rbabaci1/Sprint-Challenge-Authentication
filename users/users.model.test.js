const db = require("../database/dbConfig");
const Users = require("./users-model");
const mockData = require("../utils/mockData");

describe("testing the users models", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("insert()", () => {
    it("should insert a user to the DB", async () => {
      await Users.insert(mockData[0]);
      await Users.insert(mockData[1]);

      const users = await db("users");
      expect(users).toHaveLength(2);
    });

    it("should return the added user", async () => {
      let insertedUser = await Users.insert(mockData[0]);
      expect(insertedUser.username).toBe("rbabaci1");

      insertedUser = await Users.insert(mockData[1]);
      expect(insertedUser.username).toBe("kyla97");
    });
  });
});
