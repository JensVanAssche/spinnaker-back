const { onInsertTrigger } = require("../../knexfile");

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema
      .createTable("standings_scores", table => {
        table.uuid("id").primary();

        // Not nullable
        table.uuid("tournament_id").notNullable();
        table.text("name").notNullable();
        table.text("points1").notNullable();
        table.text("points2").notNullable();
        table.text("points3").nullable();

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
      .then(() => knex.raw(onInsertTrigger("standings_scores")))
  ]);
};

exports.down = knex => {
  return knex.schema.dropTable("standings_scores");
};
