import { tableNames } from "../constants";
import { db } from "../lib/db";
import * as gameRepository from "../repositories/game.repository";

// const defaultReturnValues = [
//   "id",
//   "gameId",
//   "parameterValue",
//   "createdAt",
//   "updatedAt"
// ];

export async function getAll(childId) {
  const query = db(tableNames.GAMES_CONFIG)
    .join(tableNames.GAMES, "games_config.game_id", "=", "games.id")
    .select(
      "games_config.id",
      "games.game_display_name",
      "games.parameter_name",
      "games_config.parameter_value",
      "games_config.enabled"
    )
    .where({ childId });

  const data = await query;
  return data;
}

export async function getEnabled(childId) {
  const query = db(tableNames.GAMES_CONFIG)
    .join(tableNames.GAMES, "games_config.game_id", "=", "games.id")
    .select(
      "games.id",
      "games.game_code_name",
      "games.game_display_name",
      "games.image_name",
      "games.parameter_name",
      "games_config.parameter_value"
    )
    .where({ childId, enabled: true });

  const data = await query;
  return data;
}

export async function create(childId) {
  const games = await gameRepository.getAll();

  await db.transaction(trx => {
    Promise.all(
      games.map(game => {
        return db(tableNames.GAMES_CONFIG)
          .insert({ childId, gameId: game.id, parameterValue: 0 })
          .transacting(trx);
      })
    )
      .then(trx.commit)
      .catch(trx.rollback);
  });
}

export async function remove(childId) {
  const query = db(tableNames.GAMES_CONFIG)
    .del()
    .where({ childId });

  return { affectedRows: await query };
}

export async function updateConfig(values) {
  await db.transaction(trx => {
    Promise.all(
      values.data.map(value => {
        return db(tableNames.GAMES_CONFIG)
          .where("id", value.id)
          .update({
            parameterValue: value.parameterValue,
            enabled: value.enabled
          })
          .transacting(trx);
      })
    )
      .then(trx.commit)
      .catch(trx.rollback);
  });
}
