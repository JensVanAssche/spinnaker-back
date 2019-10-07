exports.seed = async function(knex) {
  await knex("results_pdf").del();

  const data = [
    {
      type: "parantee",
      title: "Resultaat 1",
      pdf: "example.pdf"
    },
    {
      type: "parantee",
      title: "Resultaat 2",
      pdf: "example.pdf"
    },
    {
      type: "boccianederland",
      title: "Resultaat 1",
      pdf: "example.pdf"
    },
    {
      type: "boccianederland",
      title: "Resultaat 2",
      pdf: "example.pdf"
    }
  ];

  return knex("results_pdf").insert(data);
};
