const uuid = require('uuid/v4');
const Deck = require('./deck');

class DeckStorage {
  constructor() {
    this.decks = {};
  }

  addDeck() {
    const id = uuid();
    this.decks[id] = new Deck();
    return id;
  }

  getDeck(id) {
    if (!this.decks[id]) return { error: 'No deck with given id' }
    return this.decks[id];
  }
}
module.exports = new DeckStorage();
