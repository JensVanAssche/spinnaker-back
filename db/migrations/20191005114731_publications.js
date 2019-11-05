const { onInsertTrigger } = require("../../knexfile");

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema
      .createTable("publications", table => {
        table.uuid("id").primary();

        // Not nullable
        table.text("type").notNullable();
        table.text("title").notNullable();
        table.text("pdf").notNullable();

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
      .then(() => knex.raw(onInsertTrigger("publications")))
  ]);
};

exports.down = knex => {
  return knex.schema.dropTable("publications");
};
