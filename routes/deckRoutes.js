const express = require('express');
const deckStorage = require('../data/deckStorage');
const deckRouter = express.Router();

deckRouter.post('/', (req, res) => {
  let id = deckStorage.addDeck();
  res.send({id});
});

deckRouter.use('/:id', (req, res, next) => {
  let deck = deckStorage.getDeck(req.params.id);
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

deckRouter.get('/:id/card', (req, res) => {
  let card = req.deck.dealNextCard();
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