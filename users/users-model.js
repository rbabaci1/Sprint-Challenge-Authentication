const db = require("../database/dbConfig");

const findBy = filter => db("users").where(filter).first();

const insert = async newUser => {
  const [id] = await db("users").insert(newUser);

  return findBy({ id });
};

module.exports = { insert, findBy };
