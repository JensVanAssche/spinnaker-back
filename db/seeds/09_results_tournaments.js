exports.seed = async function(knex) {
  await knex("results_tournaments").del();

  const data = [
    {
      id: "6b92f2e0-e90e-11e9-a46a-fbe4eb29e02a",
      type: "scholen",
      title: "Eerste scholencompetitie",
      date: "2019-12-06"
    },
    {
      id: "6b92f2e0-e90e-11e9-a46a-fbe4eb29e02b",
      type: "scholen",
      title: "Tweede scholencompetitie",
      date: "2019-12-07"
    },
    {
      id: "6b92f2e0-e90e-11e9-a46a-fbe4eb29e02c",
      type: "scholen",
      title: "Derde scholencompetitie",
      date: "2019-12-08"
    },
    {
      id: "6b92f2e0-e90e-11e9-a46a-fbe4eb29e02d",
      type: "blazers1",
      title: "Kleine competitie",
      date: "2019-11-28"
    },
    {
      id: "6b92f2e0-e90e-11e9-a46a-fbe4eb29e02e",
      type: "hockeynederland",
      title: "Nederlandse competitie",
      date: "2020-01-25"
    }
  ];

  return knex("results_tournaments").insert(data);
};
