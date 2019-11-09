exports.up = async knex => {
  await knex.schema.createTable("links", table => {
    table
      .uuid("id")
      .primary()
      .defaultTo(knex.raw("uuid_generate_v1mc()")); // Primary key

    // Not nullable
    table.text("url").notNullable();
    table.text("image").notNullable();
    table.text("footer");

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
  return knex.schema.dropTable("links");
};
