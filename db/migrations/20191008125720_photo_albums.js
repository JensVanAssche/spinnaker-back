const { onInsertTrigger } = require("../../knexfile");

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema
      .createTable("photo_albums", table => {
        table.uuid("id").primary();

        // Not nullable
        table.text("title").notNullable();

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
      .then(() => knex.raw(onInsertTrigger("photo_albums")))
  ]);
};

exports.down = knex => {
  return knex.schema.dropTable("photo_albums");
};
