exports.up = async knex => {
  await knex.schema.createTable("standings_scores", table => {
    table
      .uuid("id")
      .primary()
      .defaultTo(knex.raw("uuid_generate_v1mc()")); // Primary key

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
  });
};

exports.down = knex => {
  return knex.schema.dropTable("standings_scores");
};
