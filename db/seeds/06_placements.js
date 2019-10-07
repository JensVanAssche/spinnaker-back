exports.seed = async function(knex) {
  await knex("placements").del();

  const data = [
    {
      type: "parantee",
      title: "spel 1",
      pdf: "example.pdf"
    },
    {
      type: "parantee",
      title: "spel 2",
      pdf: "example.pdf"
    },
    {
      type: "parantee",
      title: "spel 3",
      pdf: "example.pdf"
    },
    {
      type: "parantee",
      title: "spel 4",
      pdf: "example.pdf"
    },
    {
      type: "scholen",
      title: "example",
      pdf: "example.pdf"
    },
    {
      type: "boccianederland",
      title: "example",
      pdf: "example.pdf"
    },
    {
      type: "blazers1",
      title: "example",
      pdf: "example.pdf"
    },
    {
      type: "blazers2",
      title: "example",
      pdf: "example.pdf"
    },
    {
      type: "blazers3",
      title: "example",
      pdf: "example.pdf"
    },
    {
      type: "blazers4",
      title: "example",
      pdf: "example.pdf"
    },
    {
      type: "hockeynederland",
      title: "example",
      pdf: "example.pdf"
    }
  ];

  return knex("placements").insert(data);
};
