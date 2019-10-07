exports.seed = async function(knex) {
  await knex("results_tournaments").del();

  const data = [
    {
      type: "scholen",
      title: "Eerste scholencompetitie",
      date: "2019-12-06"
    },
    {
      type: "scholen",
      title: "Tweede scholencompetitie",
      date: "2019-12-07"
    },
    {
      type: "blazers1",
      title: "Kleine competitie",
      date: "2019-11-28"
    },
    {
      type: "hockeynederland",
      title: "Nederlandse competitie",
      date: "2020-01-25"
    }
  ];

  return knex("results_tournaments").insert(data);
};
