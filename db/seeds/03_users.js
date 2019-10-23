const { getHashedPassword } = require("tree-house-authentication");

exports.seed = async function(knex) {
  await knex("users").del();

  const hashedPw = await getHashedPassword(
    process.env.INITIAL_SEED_PASSWORD,
    parseInt("10", 10)
  );

  const data = [
    {
      name: "admin",
      password: hashedPw
    }
  ];

  return knex("users").insert(data);
};
