const { onInsertTrigger } = require("../../knexfile");

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema
      .createTable("content", table => {
        table.uuid("id").primary();

        // Not nullable
        table.text("key").notNullable();
        table.text("value").notNullable();

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
      .then(() => knex.raw(onInsertTrigger("content")))
  ]);
};

exports.down = knex => {
  return knex.schema.dropTable("content");
};
