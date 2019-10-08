exports.seed = async function(knex) {
  await knex("videos").del();

  const data = [
    {
      title: "Video 1",
      url: "7HyGN1-WVEM"
    },
    {
      title: "Video 2",
      url: "8XQX-BtT0F8"
    },
    {
      title: "Video 3",
      url: "4nTgUyqhEwI"
    }
  ];

  return knex("videos").insert(data);
};
