exports.up = async knex => {
  await knex.schema.createTable("games_stats", table => {
    table
      .uuid("id")
      .primary()
      .defaultTo(knex.raw("uuid_generate_v1mc()")); // Primary key

    // Not nullable
    table.uuid("child_id").notNullable();
    table.text("game_code_name").notNullable();
    table.text("stat_value").notNullable();
    table.text("time");

    // Tracking
    table
      .timestamp("created_at")
      .notNullable()
      .defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .notNullable()
      .defaultTo(knex.fn.now());

    // Foreign keys
    table
      .foreign("child_id")
      .references("id")
      .inTable("children");

    table
      .foreign("game_code_name")
      .references("game_code_name")
      .inTable("games");
  });
};

exports.down = knex => {
  return knex.schema.dropTable("games_stats");
};
