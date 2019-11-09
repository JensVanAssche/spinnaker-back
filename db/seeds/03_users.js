var bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync("HM4wRJPBizt2jKTEle3T", salt);

  const data = [
    {
      name: "admin",
      password: hash
    }
  ];

  return Promise.all([knex("users").del(), knex("users").insert(data)]);
};
