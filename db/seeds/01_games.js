exports.seed = async function(knex) {
  await knex("games").del();

  const data = [
    {
      game_code_name: "plane",
      game_display_name: "Vliegtuig",
      image_name: "sky.png",
      parameter_name: "Tijd"
    },
    {
      game_code_name: "balloon",
      game_display_name: "Ballon",
      image_name: "sky.png",
      parameter_name: "Tijd"
    }
  ];

  return knex("games").insert(data);
};
