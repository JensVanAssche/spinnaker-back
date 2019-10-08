exports.up = async knex => {
  await knex.schema.createTable("photo_albums", table => {
    table
      .uuid("id")
      .primary()
      .defaultTo(knex.raw("uuid_generate_v1mc()")); // Primary key

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

    // Foreign keys
    // table
    //   .foreign("competition_id")
    //   .references("id")
    //   .inTable("results_competitions");

    // table
    //   .foreign("game_code_name")
    //   .references("game_code_name")
    //   .inTable("games");
  });
};

exports.down = knex => {
  return knex.schema.dropTable("photo_albums");
};
