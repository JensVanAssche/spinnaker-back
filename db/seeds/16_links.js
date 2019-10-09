exports.seed = async function(knex) {
  await knex("links").del();

  const data = [
    {
      url: "https://antwerpen.be/nl/overzicht/sporting-a",
      image: "logo_sporting.jpg",
      footer: "steun"
    },
    {
      url: "https://www.gsportvlaanderen.be/",
      image: "logo_sportvlaanderen.png",
      footer: "steun"
    },
    {
      url: "https://www.parantee-psylos.be",
      image: "logo_parantee.png",
      footer: "aangesloten"
    },
    {
      url: "https://www.sporta.be",
      image: "logo_sporta.png",
      footer: "aangesloten"
    },
    {
      url: "https://heder.be",
      image: "heder_logo.png",
      footer: "onderdeel"
    },
    {
      url: "https://www.wapper.be/",
      image: "we_zien_je_graag.png",
      footer: ""
    },
    {
      url: "https://nationaalteam.be/",
      image: "logo_belgium.png",
      footer: ""
    },
    {
      url: "http://www.merksemhandbal.com/",
      image: "merksem.jpg",
      footer: ""
    }
  ];

  return knex("links").insert(data);
};
