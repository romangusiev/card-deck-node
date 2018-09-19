/*
FaceValue int number:
1: Ace,
2-10: a card with the number,
11: Jack,
12: Queen,
13: King
*/

const suitEnum = ['Club', 'Diamond', 'Heart', 'Spade'];

class Card {
  constructor(faceValue, suit) {
    this.faceValue = faceValue;
    this.suit = suit;
    this.dealt = false;
  }
}

export class Deck {
  constructor() {
    this.cards = [];
    for (let faceValue = 1; faceValue <= 13; faceValue += 1) {
      for (let suit = 0; suit <= 4; suit += 1) {
        this.cards.push(new Card(faceValue, suitEnum[suit]));
      }
    }
  }

  shuffle() {
    let notShuffeledIndex = this.cards.length;
    let temp;
    let randomIndex;
    while (notShuffeledIndex) {
      randomIndex = Math.floor(Math.random() * notShuffeledIndex);
      notShuffeledIndex -= 1;
      temp = this.cards[notShuffeledIndex];
      this.cards[notShuffeledIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temp;
    }
  }
}

export default Deck;
