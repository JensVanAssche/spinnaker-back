exports.seed = async function(knex) {
  await knex("players").del();

  const data = [
    {
      type: "parantee",
      name: "Voornaam Achternaam",
      subtitle: "BC 1",
      image: "blank.png"
    },
    {
      type: "parantee",
      name: "Lorem Ipsum",
      subtitle: "BC 2",
      image: "blank.png"
    },
    {
      type: "parantee",
      name: "AAAAAAAAAA",
      subtitle: "BC 3",
      image: "blank.png"
    },
    {
      type: "parantee",
      name: "dg fdcgtcgdswgfd",
      subtitle: "BC 4",
      image: "blank.png"
    },
    {
      type: "scholen",
      name: "Voornaam Achternaam",
      subtitle: "BC 4",
      image: "blank.png"
    },
    {
      type: "blazers1",
      name: "Voornaam Achternaam",
      subtitle: "T Stick",
      image: "blank.png"
    },
    {
      type: "blazers2",
      name: "Voornaam Achternaam",
      subtitle: "H Stick",
      image: "blank.png"
    },
    {
      type: "blazers3",
      name: "Voornaam Achternaam",
      subtitle: "T Stick",
      image: "blank.png"
    },
    {
      type: "blazers4",
      name: "Voornaam Achternaam",
      subtitle: "H Stick",
      image: "blank.png"
    },
    {
      type: "hockeynederland",
      name: "Voornaam Achternaam",
      subtitle: "H Stick",
      image: "blank.png"
    }
  ];

  return knex("players").insert(data);
};
