const { onInsertTrigger } = require("../../knexfile");

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema
      .createTable("news", table => {
        table.uuid("id").primary();

        // Not nullable
        table.text("title").notNullable();
        table.text("body").notNullable();
        table.text("image");

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
      .then(() => knex.raw(onInsertTrigger("news")))
  ]);
};

exports.down = knex => {
  return knex.schema.dropTable("news");
};
