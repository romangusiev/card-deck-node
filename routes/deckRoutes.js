const express = require('express');

const deckRouter = express.Router();

deckRouter.get('/', (req, res) => {
  res.send('home page');
});

module.exports = deckRouter;
