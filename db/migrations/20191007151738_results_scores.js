const { onInsertTrigger } = require("../../knexfile");

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema
      .createTable("results_scores", table => {
        table.uuid("id").primary();

        // Not nullable
        table.uuid("tournament_id").notNullable();
        table.text("team1").notNullable();
        table.text("team1_score").notNullable();
        table.text("team2").notNullable();
        table.text("team2_score").notNullable();

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
      .then(() => knex.raw(onInsertTrigger("results_scores")))
  ]);
};

exports.down = knex => {
  return knex.schema.dropTable("results_scores");
};
