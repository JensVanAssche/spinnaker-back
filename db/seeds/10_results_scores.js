exports.seed = async function(knex) {
  await knex("results_scores").del();

  const data = [
    {
      tournament_id: "446dd0fa-06c6-4f46-b8b2-bd53b33ea219",
      team1: "Spinnaker",
      team1_score: "2",
      team2: "Ander team",
      team2_score: "0"
    },
    {
      tournament_id: "446dd0fa-06c6-4f46-b8b2-bd53b33ea219",
      team1: "Spinnaker",
      team1_score: "3",
      team2: "Nog een ander team",
      team2_score: "1"
    },
    {
      tournament_id: "446dd0fa-06c6-4f46-b8b2-bd53b33ea219",
      team1: "Spinnaker",
      team1_score: "3",
      team2: "Nog een ander team",
      team2_score: "1"
    },
    {
      tournament_id: "446dd0fa-06c6-4f46-b8b2-bd53b33ea220",
      team1: "Spinnaker",
      team1_score: "3",
      team2: "Een ander team",
      team2_score: "1"
    },
    {
      tournament_id: "446dd0fa-06c6-4f46-b8b2-bd53b33ea221",
      team1: "Spinnaker",
      team1_score: "3",
      team2: "Een ander team",
      team2_score: "1"
    }
  ];

  return knex("results_scores").insert(data);
};
