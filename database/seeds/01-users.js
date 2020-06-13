exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        { id: 1, username: "rabah", password: "babaci" },
      ]);
    });
};
