const { onInsertTrigger } = require("../../knexfile");

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema
      .createTable("links", table => {
        table.uuid("id").primary();

        // Not nullable
        table.text("url").notNullable();
        table.text("image").notNullable();
        table.text("footer");

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
      .then(() => knex.raw(onInsertTrigger("links")))
  ]);
};

exports.down = knex => {
  return knex.schema.dropTable("links");
};
