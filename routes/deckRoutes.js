const express = require('express');
const deckStorage = require('../data/deckStorage');

const deckRouter = express.Router();

deckRouter.post('/', (req, res) => {
  const id = deckStorage.addDeck();
  res.send({ id });
});

deckRouter.use('/:id', (req, res, next) => {
  const deck = deckStorage.getDeck(req.params.id);
  if (deck.error) {
    res.sendStatus(404);
  } else {
    req.deck = deck;
    next();
  }
});

deckRouter.get('/:id', (req, res) => {
  res.send(req.deck);
});

deckRouter.delete('/:id', (req, res) => {
  deckStorage.deleteDeck(req.params.id);
  res.sendStatus(200);
});

deckRouter.get('/:id/card', (req, res) => {
  const card = req.deck.dealNextCard();
  res.send(card);
});

deckRouter.post('/:id/shuffle', (req, res) => {
  req.deck.shuffle();
  res.sendStatus(200);
});

deckRouter.post('/:id/cut', (req, res) => {
  req.deck.cut();
  res.sendStatus(200);
});

module.exports = deckRouter;
