exports.seed = async function(knex) {
  await knex("standings_pdf").del();

  const data = [
    {
      type: "parantee",
      title: "Na 1 tornooi",
      pdf: "example.pdf"
    },
    {
      type: "parantee",
      title: "Na 2 tornooien",
      pdf: "example.pdf"
    }
  ];

  return knex("standings_pdf").insert(data);
};
