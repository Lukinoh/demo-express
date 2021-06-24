import BetterSqlite3 from 'better-sqlite3';

const db = new BetterSqlite3('games.sqlite');

db.prepare('CREATE TABLE IF NOT EXISTS games (name TEXT)').run()

export function addGame(name) {
  db.prepare(`INSERT INTO games (name) VALUES ('${name}')`).run();
}

export function getGames() {
  const games = db.prepare('SELECT * FROM games').all();
  return games.map(game => game.name);
}