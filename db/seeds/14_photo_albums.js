exports.seed = async function(knex) {
  await knex("photo_albums").del();

  const data = [
    {
      id: "8c2fc24c-c24e-4df3-ad77-1256324cdd4f",
      title: "Album 1"
    },
    {
      id: "8c2fc24c-c24e-4df3-ad77-1256324cdd4e",
      title: "Album 2"
    }
  ];

  return knex("photo_albums").insert(data);
};
