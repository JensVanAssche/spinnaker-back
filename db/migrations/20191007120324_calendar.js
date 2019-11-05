const { onInsertTrigger } = require("../../knexfile");

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema
      .createTable("calendar", table => {
        table.uuid("id").primary();

        // Not nullable
        table.text("type").notNullable();
        table.text("date").notNullable();
        table.text("title").notNullable();
        table.text("location").notNullable();

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
      .then(() => knex.raw(onInsertTrigger("calendar")))
  ]);
};

exports.down = knex => {
  return knex.schema.dropTable("calendar");
};
