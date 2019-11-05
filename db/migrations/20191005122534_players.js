const { onInsertTrigger } = require("../../knexfile");

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema
    .createTable("players", table => {
      table.uuid("id").primary();

      // Not nullable
      table.text("type").notNullable();
      table.text("name").notNullable();
      table.text("subtitle").notNullable();
      table.text("image").notNullable();

      // Tracking
      table
        .timestamp("created_at")
        .notNullable()
        .defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .notNullable()
        .defaultTo(knex.fn.now());
    })
    .then(() => knex.raw(onInsertTrigger("players")))
  ]);
};

exports.down = knex => {
  return knex.schema.dropTable("players");
};
