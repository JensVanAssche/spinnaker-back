exports.seed = async function(knex) {
  await knex("results_pdf").del();

  const data = [
    {
      type: "parantee",
      title: "Tornooi 1 - 27 april 2019",
      pdf: "example.pdf"
    },
    {
      type: "parantee",
      title: "Tornooi 2 - 28 april 2019",
      pdf: "example.pdf"
    }
  ];

  return knex("results_pdf").insert(data);
};
