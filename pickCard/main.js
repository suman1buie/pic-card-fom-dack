import Deck from "./deck.js";

const playerCardSlot = document.querySelector(".player-card-slot");
const btn = document.querySelector("#clear");

let playerDeck,
  cardOnDisplay = 0;

document.querySelector(".player-deck").addEventListener("click", () => {
  const deck = new Deck();
  deck.shuffle();
  playerDeck = new Deck(deck.cards.slice(0, deck.numberOfCards));
  const playerCard = playerDeck.pop();
  if (cardOnDisplay === 0) {
    playerCardSlot.appendChild(playerCard.getHTML());
  } else {
    alert("You Need to Clear It first!!!!");
  }
  cardOnDisplay += 1;
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  cardOnDisplay = 0;
  playerCardSlot.innerHTML = "";
});
