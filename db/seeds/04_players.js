exports.seed = async function(knex) {
  await knex("players").del();

  const data = [
    {
      type: "parantee",
      name: "Voornaam Achternaam",
      image: "blank.png"
    },
    {
      type: "parantee",
      name: "Lorem Ipsum",
      image: "blank.png"
    },
    {
      type: "parantee",
      name: "AAAAAAAAAA",
      image: "blank.png"
    },
    {
      type: "parantee",
      name: "dg fdcgtcgdswgfd",
      image: "blank.png"
    },
    {
      type: "scholen",
      name: "Voornaam Achternaam",
      image: "blank.png"
    },
    {
      type: "interclub",
      name: "Voornaam Achternaam",
      image: "blank.png"
    },
    {
      type: "boccianederland",
      name: "Voornaam Achternaam",
      image: "blank.png"
    },
    {
      type: "blazers1",
      name: "Voornaam Achternaam",
      image: "blank.png"
    },
    {
      type: "blazers2",
      name: "Voornaam Achternaam",
      image: "blank.png"
    },
    {
      type: "blazers3",
      name: "Voornaam Achternaam",
      image: "blank.png"
    },
    {
      type: "blazers4",
      name: "Voornaam Achternaam",
      image: "blank.png"
    },
    {
      type: "hockeynederland",
      name: "Voornaam Achternaam",
      image: "blank.png"
    }
  ];

  return knex("players").insert(data);
};
