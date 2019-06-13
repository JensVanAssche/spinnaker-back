exports.up = async knex => {
  await knex.schema.createTable("games", table => {
    table
      .uuid("id")
      .primary()
      .defaultTo(knex.raw("uuid_generate_v1mc()")); // Primary key

    // Not nullable
    table
      .text("game_code_name")
      .notNullable()
      .unique();
    table.text("game_display_name").notNullable();
    table.text("image_name").notNullable();
    table.text("parameter_name").notNullable();

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
  return knex.schema.dropTable("games");
};
