import express from 'express';
import {getGames, addGame} from './database.js';

const app = express();
const port = 3200;

// const games = ['Uno', 'Bandido']

app.use(express.json());
app.use('/public', express.static('public'));

app.get('/games', (req, res) => {
  res.send(getGames());
})

app.post('/games', (req, res) => {
  // games.push(req.body.game);
  addGame(req.body.game);
  res.send(getGames());
})


app.get('/games/stats', (req, res) => {
  const games = getGames();
  const total = games.length;
  const totalUnique = [...new Set(games)].length;
  res.send({
    total,
    totalUnique
  });
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
  