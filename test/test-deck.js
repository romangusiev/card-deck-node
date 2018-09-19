/* global it, describe */
const assert = require('assert');
const Deck = require('../data/deck');

describe('Deck functionality testing', () => {
  it('should instantiate deck with 52 unique cards', () => {
    const deck = new Deck();
    assert.equal(deck.cards.length, 52);
    const faceMap = {};
    const suitMap = {};
    deck.cards.forEach((card) => {
      faceMap[card.faceValue] = faceMap[card.faceValue] ? faceMap[card.faceValue] += 1 : 1;
      suitMap[card.suit] = suitMap[card.suit] ? suitMap[card.suit] += 1 : 1;
    });
    Object.keys(faceMap).forEach((key) => {
      assert.equal(faceMap[key], 4);
    });
    Object.keys(suitMap).forEach((key) => {
      assert.equal(suitMap[key], 13);
    });
  });
  it('should shuffle the array of cards', () => {
    const deck = new Deck();
    const beforeShuffleCopy = deck.cards.slice(0);
    deck.shuffle();
    assert.notDeepEqual(deck.cards, beforeShuffleCopy);
  });
  it('should return next available card', () => {
    const deck = new Deck();
    deck.shuffle();
    deck.cards[0].dealt = true;
    deck.cards[1].dealt = true;
    assert.equal(deck.cards[2].dealt, false);
    const card = deck.dealNextCard();
    assert.equal(deck.cards[2].dealt, true);
    assert.equal(deck.cards[2].faceValue, card.faceValue);
    assert.equal(deck.cards[2].suit, card.suit);
  });
  it('should cut the cards deck', () => {
    const deck = new Deck();
    deck.shuffle();
    const sumCardsArray = deck.cards.concat(deck.cards);
    assert.equal(sumCardsArray.length, 104);
    deck.cut();
    let rotationIndex;
    sumCardsArray.forEach((card, index) => {
      if (card.faceValue === deck.cards[0].faceValue && card.suit === deck.cards[0].suit) {
        if (!rotationIndex) rotationIndex = index;
      }
    });
    for (let i = 0; i < 52; i += 1) {
      assert.equal(deck.cards[i], sumCardsArray[i + rotationIndex]);
    }
  });
});
