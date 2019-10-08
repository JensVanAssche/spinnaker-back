exports.seed = async function(knex) {
  await knex("calendar").del();

  const data = [
    {
      type: "parantee",
      date: "2019-10-16",
      title: "Boccia spelen",
      location: "Antwerpen"
    },
    {
      type: "parantee",
      date: "2019-10-25",
      title: "Nog Boccia spelen",
      location: "Antwerpen"
    },
    {
      type: "parantee",
      date: "2019-10-18",
      title: "Nog meer Boccia spelen",
      location: "Antwerpen"
    },
    {
      type: "scholen",
      date: "2019-10-27",
      title: "Boccia spelen",
      location: "Antwerpen"
    },
    {
      type: "hockey",
      date: "2019-11-27",
      title: "Hockey spelen",
      location: "Antwerpen"
    },
    {
      type: "handbal",
      date: "2019-10-27",
      title: "Handbal spelen",
      location: "Antwerpen"
    },
    {
      type: "zwemmen",
      date: "2019-10-27",
      title: "Zwemmen",
      location: "Antwerpen"
    }
  ];

  return knex("calendar").insert(data);
};
