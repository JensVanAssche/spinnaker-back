import * as playersService from "../services/players.service";

export async function getByType(req, res) {
  const result = await playersService.getByType(req.params.type);
  // result.sort((a, b) =>
  //   a.subtitle.toLowerCase() > b.subtitle.toLowerCase() ? 1 : -1
  // );

  const response = [];

  result.forEach(element => {
    if (!response.some(e => e.name === element.subtitle)) {
      // response doesn't contain an element with the subtitle
      response.push({
        name: element.subtitle,
        players: []
      });
    }

    response.filter(e => e.name === element.subtitle)[0].players.push(element);
  });

  response.sort((a, b) =>
    a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
  );

  response.forEach(element => {
    element.players.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
    );
  });

  res.send(response);
}
