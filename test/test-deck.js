/* global it, describe */
const { expect } = require('chai');
const Deck = require('../data/deck');
const Card = require('../data/card');
const deckStorage = require('../data/deckStorage');

let deck;
let newId;

describe('Deck functionality testing', () => {
  it('should create Cards instances in the cards array', () => {
    deck = new Deck();
    deck.cards.forEach((card) => {
      expect(card).to.be.an.instanceof(Card);
    });
  });
  it('should instantiate deck with 52 cards', () => {
    deck = new Deck();
    expect(deck.cards.length).to.equal(52);
  });
  it('should instantiate deck with all unique cards', () => {
    deck = new Deck();
    const faceMap = {};
    const suitMap = {};
    deck.cards.forEach((card) => {
      faceMap[card.faceValue] = faceMap[card.faceValue] ? faceMap[card.faceValue] += 1 : 1;
      suitMap[card.suit] = suitMap[card.suit] ? suitMap[card.suit] += 1 : 1;
    });
    Object.keys(faceMap).forEach((key) => {
      expect(faceMap[key]).to.equal(4);
    });
    Object.keys(suitMap).forEach((key) => {
      expect(suitMap[key]).to.equal(13);
    });
  });
  it('should shuffle the array of cards', () => {
    deck = new Deck();
    const beforeShuffleCopy = deck.cards.slice(0);
    deck.shuffle();
    let diffs = 0;
    deck.cards.forEach((card, index) => {
      if (card !== beforeShuffleCopy[index]) diffs += 1;
    });
    expect(diffs).to.be.above(25);
  });
  it('should return next available card', () => {
    deck = new Deck();
    deck.shuffle();
    deck.cards[0].dealt = true;
    deck.cards[1].dealt = true;
    expect(deck.cards[2].dealt).to.equal(false);
    const card = deck.dealNextCard();
    expect(deck.cards[2].dealt).to.equal(true);
    expect(deck.cards[2].faceValue).to.equal(card.faceValue);
    expect(deck.cards[2].suit).to.equal(card.suit);
  });
  it('should return error when no cards are available', () => {
    deck = new Deck();
    deck.shuffle();
    let index = 52;
    while (index >= 0) {
      deck.dealNextCard();
      index -= 1;
    }
    expect(deck.dealNextCard()).to.eql({ error: 'No more cards available' });
  });
  it('should cut the cards deck', () => {
    deck = new Deck();
    const oldArray = deck.cards.slice(0);
    deck.cut();
    let rotationIndex = 0;
    while (deck.cards[rotationIndex] !== oldArray[0]) {
      rotationIndex += 1;
    }
    for (let i = 0; i < oldArray.length; i += 1, rotationIndex += 1) {
      expect(oldArray[i]).to.equal(deck.cards[rotationIndex % deck.cards.length]);
    }
  });
  it('should create a deck in deckStorage', () => {
    newId = deckStorage.addDeck();
    expect(deckStorage.decks).to.have.property(newId);
    expect(deckStorage.decks[newId]).to.be.an('object');
  });
  it('should get a deck from deckStorage', () => {
    newId = deckStorage.addDeck();
    deck = deckStorage.getDeck(newId);
    expect(deck).to.be.an('object');
    expect(deck).to.have.property('cards');
    expect(deck.cards).to.be.an('array');
    expect(deck.cards.length).to.equal(52);
  });
  it('should delete a deck from deckStorage', () => {
    newId = deckStorage.addDeck();
    deckStorage.deleteDeck(newId);
    deck = deckStorage.getDeck(newId);
    expect(deck).to.be.an('object');
    expect(deck).to.have.property('error');
    expect(deck).to.eql({ error: 'No deck with given id' });
  });
});
