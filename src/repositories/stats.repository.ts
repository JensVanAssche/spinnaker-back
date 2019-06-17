import { tableNames } from "../constants";
import { db, execAndFind } from "../lib/db";

const defaultReturnValues = [
  "id",
  "childId",
  "gameCodeName",
  "statValue",
  "time",
  "createdAt",
  "updatedAt"
];

export async function getStats(childId) {
  const query = db(tableNames.GAMES_STATS)
    .join(
      tableNames.GAMES,
      "games_stats.game_code_name",
      "=",
      "games.game_code_name"
    )
    .select(
      "games_stats.id",
      "games.game_display_name",
      "games.parameter_name",
      "games_stats.stat_value",
      "games_stats.time",
      "games_stats.created_at"
    )
    .where({ childId });

  const data = await query;
  return data;
}

export async function createStat(values) {
  const query = db(tableNames.GAMES_STATS).insert(values, ["id"]);

  return await execAndFind(query, "id", findById);
}

export async function findById(id) {
  const query = db(tableNames.GAMES_STATS)
    .select(defaultReturnValues)
    .where({ id })
    .first();

  const data = await query;
  return data;
}
