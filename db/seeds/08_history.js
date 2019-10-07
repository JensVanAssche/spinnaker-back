exports.seed = async function(knex) {
  await knex("history").del();

  const data = [
    {
      key: "parantee",
      value: `<h3>2010 - Vlaams Kampioenschap Merksem</h3><p>Nicky Fontaine (BC1): 5e plaats</p><p>Philippe Goyvaerts (BC2): 16e plaats</p><p>Achille Elsmoortel (BC3): 15e plaats</p><h3>2010 - Belgisch Kampioenschap Waregem</h3><p>Nicky Fontaine (BC1): 6e plaats</p><p>Philippe Goyvaerts (BC2): 10e plaats</p><p>Achille Elsmoortel (BC3): 11e plaats</p>`
    },
    {
      key: "scholen",
      value: `<h3>2010 - Vlaams Kampioenschap Merksem</h3><p>Nicky Fontaine (BC1): 5e plaats</p><p>Philippe Goyvaerts (BC2): 16e plaats</p><p>Achille Elsmoortel (BC3): 15e plaats</p><h3>2010 - Belgisch Kampioenschap Waregem</h3><p>Nicky Fontaine (BC1): 6e plaats</p><p>Philippe Goyvaerts (BC2): 10e plaats</p><p>Achille Elsmoortel (BC3): 11e plaats</p>`
    },
    {
      key: "nederland",
      value: `<h3>2010 - Vlaams Kampioenschap Merksem</h3><p>Nicky Fontaine (BC1): 5e plaats</p><p>Philippe Goyvaerts (BC2): 16e plaats</p><p>Achille Elsmoortel (BC3): 15e plaats</p><h3>2010 - Belgisch Kampioenschap Waregem</h3><p>Nicky Fontaine (BC1): 6e plaats</p><p>Philippe Goyvaerts (BC2): 10e plaats</p><p>Achille Elsmoortel (BC3): 11e plaats</p>`
    },
    {
      key: "hockey",
      value: `<h3>2010 - Vlaams Kampioenschap Merksem</h3><p>Nicky Fontaine (BC1): 5e plaats</p><p>Philippe Goyvaerts (BC2): 16e plaats</p><p>Achille Elsmoortel (BC3): 15e plaats</p><h3>2010 - Belgisch Kampioenschap Waregem</h3><p>Nicky Fontaine (BC1): 6e plaats</p><p>Philippe Goyvaerts (BC2): 10e plaats</p><p>Achille Elsmoortel (BC3): 11e plaats</p>`
    }
  ];

  return knex("history").insert(data);
};
