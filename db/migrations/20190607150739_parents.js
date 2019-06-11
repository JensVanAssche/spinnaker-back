exports.up = async knex => {
  await knex.schema.createTable("parents", table => {
    table
      .uuid("id")
      .primary()
      .defaultTo(knex.raw("uuid_generate_v1mc()")); // Primary key

    // Not nullable
    table.text("first_name").notNullable();
    table.text("last_name").notNullable();
    table.text("email").notNullable();

    // Nullable
    table.text("password").nullable();
    table.text("reset_pw_token").nullable();

    // Tracking
    table
      .timestamp("created_at")
      .notNullable()
      .defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .notNullable()
      .defaultTo(knex.fn.now());

    // Unique constraints (generates index automatically due to this constraint)
    table.unique("email");
    table.unique("reset_pw_token");
  });
};

exports.down = knex => {
  return knex.schema.dropTable("parents");
};
