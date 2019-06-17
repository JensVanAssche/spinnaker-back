exports.seed = async function(knex) {
  await knex("games").del();

  const data = [
    {
      game_code_name: "gift",
      game_display_name: "Pakjes Opendoen",
      image_name: "gift_thumbnail.png",
      parameter_name: "Pakjes"
    },
    {
      game_code_name: "balloon",
      game_display_name: "Ballonnen Blazen",
      image_name: "balloon_thumbnail.png",
      parameter_name: "Ballonnen"
    },
    {
      game_code_name: "plane",
      game_display_name: "Vliegtuigje Vliegen",
      image_name: "plane_thumbnail.png",
      parameter_name: "Sterren"
    }
  ];

  return knex("games").insert(data);
};
