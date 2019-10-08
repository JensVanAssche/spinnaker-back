exports.seed = async function(knex) {
  await knex("standings_scores").del();

  const data = [
    {
      tournament_id: "6b92f2e0-e90e-11e9-a46a-fbe4eb29e03a",
      name: "Naam Voornaam",
      points1: "5 pts",
      points2: "(1, 2)"
    },
    {
      tournament_id: "6b92f2e0-e90e-11e9-a46a-fbe4eb29e03a",
      name: "Andere Naam Voornaam",
      points1: "6 pts",
      points2: "(1, 2)"
    },
    {
      tournament_id: "6b92f2e0-e90e-11e9-a46a-fbe4eb29e03a",
      name: "Nog een andere Naam Voornaam",
      points1: "25 pts",
      points2: "(1, 2)"
    },
    {
      tournament_id: "6b92f2e0-e90e-11e9-a46a-fbe4eb29e03b",
      name: "Naam Voornaam",
      points1: "5 pts",
      points2: "(1, 2)"
    },
    {
      tournament_id: "6b92f2e0-e90e-11e9-a46a-fbe4eb29e03c",
      name: "Naam Voornaam",
      points1: "5 pts",
      points2: "(1, 2)"
    },
    {
      tournament_id: "6b92f2e0-e90e-11e9-a46a-fbe4eb29e03d",
      name: "Naam Voornaam",
      points1: "5 pts",
      points2: "6",
      points3: "1"
    },
    {
      tournament_id: "6b92f2e0-e90e-11e9-a46a-fbe4eb29e03e",
      name: "Naam Voornaam",
      points1: "5 pts",
      points2: "7",
      points3: "1"
    }
  ];

  return knex("standings_scores").insert(data);
};
