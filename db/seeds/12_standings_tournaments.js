exports.seed = async function(knex) {
  await knex("standings_tournaments").del();

  const data = [
    {
      id: "6b92f2e0-e90e-11e9-a46a-fbe4eb29e03a",
      type: "scholen",
      title: "Eerste scholencompetitie",
      subtitle: "Na eerste tornooi"
    },
    {
      id: "6b92f2e0-e90e-11e9-a46a-fbe4eb29e03b",
      type: "scholen",
      title: "Tweede scholencompetitie",
      subtitle: "Na eerste tornooi"
    },
    {
      id: "6b92f2e0-e90e-11e9-a46a-fbe4eb29e03c",
      type: "scholen",
      title: "Derde scholencompetitie",
      subtitle: "Na eerste tornooi"
    },
    {
      id: "6b92f2e0-e90e-11e9-a46a-fbe4eb29e03d",
      type: "blazers1",
      title: "Kleine competitie",
      subtitle: "Na eerste tornooi"
    },
    {
      id: "6b92f2e0-e90e-11e9-a46a-fbe4eb29e03e",
      type: "hockeynederland",
      title: "Nederlandse competitie",
      subtitle: "Na eerste tornooi"
    }
  ];

  return knex("standings_tournaments").insert(data);
};
