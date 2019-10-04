exports.seed = async function(knex) {
  await knex("news").del();

  const data = [
    {
      title: "Jordy en Julie op European Regional Open in Nymburk",
      body: `<p>Spinnakerspeler Jordy Van Den Branden en zijn nationaal teammaatje Julie Lamberechts hebben afgelopen week met de hulp van hun assistenen Anais en Karen en onder leiding van coach Wesley het mooie weer gemaakt in Nymburk op de Regional Open aldaar.</p><p>Ze hebben het er niet slecht vanaf gebracht. Het was hun eerste en enige BISFED-rankingtornooi dit jaar en dus een serieuze testcase. Wat zijn ze waard? Hoe sterk is de tegenstand? In de individuele competitie kwamen ze samen uit in een poule van 5. De spelers waren allemaal wat aan elkaar gewaagd en het kon dus alle kanten uit met deze poule. Die werd uiteindelijk gewonnen door de Tjech Adam Peska die 1 wedstrijd verloor, van Julie. Julie, Jordy en de Spanjaard Waffid haalden 2 overwinningen maar in de onderlinge duels had Jordy wel het beste resultaat. De Nederlander Thomas Mirck won 1 wedstrijd (tegen Jordy). Jordy overleefde dus zijn poule in moest in de kwartfinale aantreden tegen Europees en Olympisch kampioen Polychronidis (uit Griekenland). Jordy won knap zijn ends (3 punten zelfs) maar de Griekse kampioen is ijzersterk als het zijn beurt is. Na 3 ends stond het 3-3 en in het laatste end maakte hij vlot nog 3 punten. Jordy sneuvelde dus in deze kwartfinale. Maar het was voor hem de eerste keer dat hij zover geraakte.</p><p>In de paircompetitie moest het duo twee wedstrijden spelen. Tegen Griekenland maakten ze niet echt een kans. Tegen Spanje was het een dubbeltje op zijn kant, wat deze keer niet in het Belgische voordeel viel. Tevreden mogen ze huiswaarts terugkeren.</p>`,
      image: "boccia.jpg"
    },
    {
      title: "Bocciacompetitie in Nederland gestart",
      body: `<p>Of beter gezegd, de Nederlandse bocciacompetitie is gestart, met een tornooi in Meerhout (België). 4 Spinnakerspelers hebben zich dit jaar ingeschreven om te schitteren in deze bijzonder leuke competitie. Philippe Goyvaerts en Stephen Van Camp treden aan in de BISFED-A-divisie, Olivier Chevolet en nieuwkomer Arno Van Praet in de BISFED-B-divisie. En ze deden het goed. Ze hebben geen van allen hun start gemist. Ze kregen moeilijke tegenstanders voor de kiezen geschoven maar niemand ging onderuit. In één zin samengevat: iedereen verloor twee wedstrijden. Philippe, Arno en Olivier eindigden hun dag met 2 overwinningen, Stephen met 3 waardoor hij een veel betere start maakt dan vorig jaar.</p><p>Groeien in deze competitie is de boodschap om in het voorjaar het ideale vormpeil te behalen. En voorts veel leren en plezier maken.</p><p>Tornooi 2 is op 19 oktober in Den Bosch.</p>`,
      image: "boccia.jpg"
    },
    {
      title: "Eerste versie hockey- en bocciakalender gelanceerd",
      body: `<p>De eerste, nog niet 100% volledige, hockey- en bocciakalender voor volgend seizoen staat op onze website.</p><p>De hockeykalender bevat alle trainingsdata, de voorlopige data van de woensdagnamiddagtornooien (4 stuks - krijgen hun definitieve bevestiging in september), de tornooidata 1e klasse regio-Zuid in Nederland en al 1 datum van een super-leaguetornooi.</p><p>De bocciakalender bevat alle Paranteecompetitieweekends en de woensdagnamiddagcompetitie, alsook de nog niet volledige kalender van de Nederlandse competitie.</p>`,
      image: "hockey.jpg"
    }
  ];

  return knex("news").insert(data);
};
