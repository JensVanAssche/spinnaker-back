exports.seed = async function(knex) {
  await knex("results_scores").del();

  const data = [
    {
      tournament_id: "6b92f2e0-e90e-11e9-a46a-fbe4eb29e02a",
      team1: "Spinnaker",
      team1_score: "2",
      team2: "Ander team",
      team2_score: "0"
    },
    {
      tournament_id: "6b92f2e0-e90e-11e9-a46a-fbe4eb29e02a",
      team1: "Spinnaker",
      team1_score: "3",
      team2: "Nog een ander team",
      team2_score: "1"
    },
    {
      tournament_id: "6b92f2e0-e90e-11e9-a46a-fbe4eb29e02a",
      team1: "Spinnaker",
      team1_score: "2",
      team2: "En nog een ander team",
      team2_score: "4"
    },
    {
      tournament_id: "6b92f2e0-e90e-11e9-a46a-fbe4eb29e02b",
      team1: "Spinnaker",
      team1_score: "3",
      team2: "Een ander team",
      team2_score: "1"
    },
    {
      tournament_id: "6b92f2e0-e90e-11e9-a46a-fbe4eb29e02c",
      team1: "Spinnaker",
      team1_score: "3",
      team2: "Een ander team",
      team2_score: "1"
    },
    {
      tournament_id: "6b92f2e0-e90e-11e9-a46a-fbe4eb29e02d",
      team1: "Spinnaker",
      team1_score: "3",
      team2: "Een ander team",
      team2_score: "1"
    },
    {
      tournament_id: "6b92f2e0-e90e-11e9-a46a-fbe4eb29e02e",
      team1: "Spinnaker",
      team1_score: "3",
      team2: "Een ander team",
      team2_score: "1"
    }
  ];

  return knex("results_scores").insert(data);
};
