class Card {
  constructor(faceValue, suit) {
    this.faceValue = faceValue;
    this.suit = suit;
    this.dealt = false;
  }
}

module.exports = Card;
