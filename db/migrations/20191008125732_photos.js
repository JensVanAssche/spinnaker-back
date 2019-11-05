const { onInsertTrigger } = require("../../knexfile");

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema
      .createTable("photos", table => {
        table.uuid("id").primary();

        // Not nullable
        table.text("album_id").notNullable();
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
      .then(() => knex.raw(onInsertTrigger("photos")))
  ]);
};

exports.down = knex => {
  return knex.schema.dropTable("photos");
};
