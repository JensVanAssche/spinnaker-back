import * as playersService from "../services/players.service";

export async function getOrdered(req, res) {
  const result = await playersService.getByType(req.params.type);

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

export async function getUnordered(req, res) {
  const result = await playersService.getByType(req.params.type);
  res.send(result);
}

export async function updatePlayer(req, res) {
  const result = await playersService.updatePlayer(req.params.id, req.body);
  res.send(result);
}

export async function addPlayer(req, res) {
  const result = await playersService.addPlayer(req.body);
  res.send(result);
}

export async function deletePlayer(req, res) {
  await playersService.deletePlayer(req.params.id);
  res.sendStatus(200);
}
