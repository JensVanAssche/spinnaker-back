var bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(process.env.INITIAL_SEED_PASSWORD, salt);

  const data = [
    {
      name: "admin",
      password: hash
    }
  ];

  return Promise.all([knex("users").del(), knex("users").insert(data)]);
};
