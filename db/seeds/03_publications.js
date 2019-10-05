exports.seed = async function(knex) {
  await knex("publications").del();

  const data = [
    {
      type: "krant",
      title: "Spinnakerkrant 2014-2015",
      pdf: "example.pdf"
    },
    {
      type: "krant",
      title: "Spinnakerkrant 2015-2016",
      pdf: "example.pdf"
    },
    {
      type: "krant",
      title: "Spinnakerkrant 2016-2017",
      pdf: "example.pdf"
    },
    {
      type: "krant",
      title: "Spinnakerkrant 2017-2018",
      pdf: "example.pdf"
    },
    {
      type: "krant",
      title: "Spinnakerkrant 2018-2019",
      pdf: "example.pdf"
    },
    {
      type: "folder",
      title: "Spinnaker Boccia",
      pdf: "example.pdf"
    },
    {
      type: "folder",
      title: "Spinnaker Powerchairhockey",
      pdf: "example.pdf"
    },
    {
      type: "folder",
      title: "Spinnaker Algemeen",
      pdf: "example.pdf"
    }
  ];

  return knex("publications").insert(data);
};
