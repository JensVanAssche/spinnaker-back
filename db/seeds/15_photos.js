exports.seed = async function(knex) {
  await knex("photos").del();

  const data = [
    {
      album_id: "8c2fc24c-c24e-4df3-ad77-1256324cdd4f",
      image: "boccia.jpg"
    },
    {
      album_id: "8c2fc24c-c24e-4df3-ad77-1256324cdd4f",
      image: "dansen.jpg"
    },
    {
      album_id: "8c2fc24c-c24e-4df3-ad77-1256324cdd4e",
      image: "handbal.jpg"
    },
    {
      album_id: "8c2fc24c-c24e-4df3-ad77-1256324cdd4e",
      image: "hockey.jpg"
    },
    {
      album_id: "8c2fc24c-c24e-4df3-ad77-1256324cdd4e",
      image: "zwemmen.jpg"
    }
  ];

  return knex("photos").insert(data);
};
