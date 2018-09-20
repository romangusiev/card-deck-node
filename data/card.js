/*
FaceValue int number:
1: Ace,
2-10: a card with the number,
11: Jack,
12: Queen,
13: King
*/

class Card {
  constructor(faceValue, suit) {
    this.faceValue = faceValue;
    this.suit = suit;
    this.dealt = false;
  }
}

module.exports = Card;
