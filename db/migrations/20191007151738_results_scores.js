exports.up = async knex => {
  await knex.schema.createTable("results_scores", table => {
    table
      .uuid("id")
      .primary()
      .defaultTo(knex.raw("uuid_generate_v1mc()")); // Primary key

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
  });
};

exports.down = knex => {
  return knex.schema.dropTable("results_scores");
};
