import express from 'express';
import { birdData } from './data';

import Database from 'better-sqlite3';
const db = new Database('chinook.sqlite');
db.pragma('journal_mode = WAL');

const app = express();
const port = 3000;

// * app.get => die app soll auf GET requests auf den genannten pfad mit dieser Funktion reagieren
app.get('/birds', (req, res) => {
  console.log('Test Test Test');
  // res.send("<marquee>Guten Tag!</marquee><style>marquee{font-size:48px;}</style>")
  res.json(birdData);
});

app.get('/birds/:id', (req, res) => {
  console.log(req.params);
  const bird = birdData.find((element) => element.id === req.params.id);
  res.json(bird);
});

app.get('/artists', (req, res) => {
  const rows = db.prepare('SELECT * FROM Artist').all();
  res.json(rows);
});

app.get('/artists/:id', (req, res) => {
  const row = db
    .prepare('SELECT * FROM Artist WHERE ArtistId = ?')
    .get(req.params.id);
  res.json(row);
});

app.listen(port, () => {
  console.log(`Yay, Server ist gestartet auf port ${port}`);
});
