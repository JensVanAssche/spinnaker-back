exports.up = async knex => {
  await knex.schema.createTable("results_pdf", table => {
    table
      .uuid("id")
      .primary()
      .defaultTo(knex.raw("uuid_generate_v1mc()")); // Primary key

    // Not nullable
    table.text("type").notNullable();
    table.text("title").notNullable();
    table.text("pdf").notNullable();

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
  return knex.schema.dropTable("results_pdf");
};
