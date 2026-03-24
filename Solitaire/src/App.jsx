import { useState, useEffect } from "react";
import cardBack from "./assets/cards/card_back.png";
import "./App.css";

// Initially, deck is sorted by suit alphabetically, and then by rank from lowest (Ace) to highest (King)
const deck = [
  { id: 0, rank: "Ace", suit: "Clubs", color: "black", img: "./assets/cards/1C.png" },
  { id: 1, rank: "2", suit: "Clubs", color: "black", img: "./assets/cards/2C.png" },
  { id: 2, rank: "3", suit: "Clubs", color: "black", img: "./assets/cards/3C.png" },
  { id: 3, rank: "4", suit: "Clubs", color: "black", img: "./assets/cards/4C.png" },
  { id: 4, rank: "5", suit: "Clubs", color: "black", img: "./assets/cards/5C.png" },
  { id: 5, rank: "6", suit: "Clubs", color: "black", img: "./assets/cards/6C.png" },
  { id: 6, rank: "7", suit: "Clubs", color: "black", img: "./assets/cards/7C.png" },
  { id: 7, rank: "8", suit: "Clubs", color: "black", img: "./assets/cards/8C.png" },
  { id: 8, rank: "9", suit: "Clubs", color: "black", img: "./assets/cards/9C.png" },
  { id: 9, rank: "10", suit: "Clubs", color: "black", img: "./assets/cards/10C.png" },
  { id: 10, rank: "Jack", suit: "Clubs", color: "black", img: "./assets/cards/11C.png" },
  { id: 11, rank: "Queen", suit: "Clubs", color: "black", img: "./assets/cards/12C.png" },
  { id: 12, rank: "King", suit: "Clubs", color: "black", img: "./assets/cards/13C.png" },

  { id: 13, rank: "Ace", suit: "Diamonds", color: "red", img: "./assets/cards/1D.png" },
  { id: 14, rank: "2", suit: "Diamonds", color: "red", img: "./assets/cards/2D.png" },
  { id: 15, rank: "3", suit: "Diamonds", color: "red", img: "./assets/cards/3D.png" },
  { id: 16, rank: "4", suit: "Diamonds", color: "red", img: "./assets/cards/4D.png" },
  { id: 17, rank: "5", suit: "Diamonds", color: "red", img: "./assets/cards/5D.png" },
  { id: 18, rank: "6", suit: "Diamonds", color: "red", img: "./assets/cards/6D.png" },
  { id: 19, rank: "7", suit: "Diamonds", color: "red", img: "./assets/cards/7D.png" },
  { id: 20, rank: "8", suit: "Diamonds", color: "red", img: "./assets/cards/8D.png" },
  { id: 21, rank: "9", suit: "Diamonds", color: "red", img: "./assets/cards/9D.png" },
  { id: 22, rank: "10", suit: "Diamonds", color: "red", img: "./assets/cards/10D.png" },
  { id: 23, rank: "Jack", suit: "Diamonds", color: "red", img: "./assets/cards/11D.png" },
  { id: 24, rank: "Queen", suit: "Diamonds", color: "red", img: "./assets/cards/12D.png" },
  { id: 25, rank: "King", suit: "Diamonds", color: "red", img: "./assets/cards/13D.png" },

  { id: 26, rank: "Ace", suit: "Hearts", color: "red", img: "./assets/cards/1H.png" },
  { id: 27, rank: "2", suit: "Hearts", color: "red", img: "./assets/cards/2H.png" },
  { id: 28, rank: "3", suit: "Hearts", color: "red", img: "./assets/cards/3H.png" },
  { id: 29, rank: "4", suit: "Hearts", color: "red", img: "./assets/cards/4H.png" },
  { id: 30, rank: "5", suit: "Hearts", color: "red", img: "./assets/cards/5H.png" },
  { id: 31, rank: "6", suit: "Hearts", color: "red", img: "./assets/cards/6H.png" },
  { id: 32, rank: "7", suit: "Hearts", color: "red", img: "./assets/cards/7H.png" },
  { id: 33, rank: "8", suit: "Hearts", color: "red", img: "./assets/cards/8H.png" },
  { id: 34, rank: "9", suit: "Hearts", color: "red", img: "./assets/cards/9H.png" },
  { id: 35, rank: "10", suit: "Hearts", color: "red", img: "./assets/cards/10H.png" },
  { id: 36, rank: "Jack", suit: "Hearts", color: "red", img: "./assets/cards/11H.png" },
  { id: 37, rank: "Queen", suit: "Hearts", color: "red", img: "./assets/cards/12H.png" },
  { id: 38, rank: "King", suit: "Hearts", color: "red", img: "./assets/cards/13H.png" },

  { id: 39, rank: "Ace", suit: "Spades", color: "black", img: "./assets/cards/1S.png" },
  { id: 40, rank: "2", suit: "Spades", color: "black", img: "./assets/cards/2S.png" },
  { id: 41, rank: "3", suit: "Spades", color: "black", img: "./assets/cards/3S.png" },
  { id: 42, rank: "4", suit: "Spades", color: "black", img: "./assets/cards/4S.png" },
  { id: 43, rank: "5", suit: "Spades", color: "black", img: "./assets/cards/5S.png" },
  { id: 44, rank: "6", suit: "Spades", color: "black", img: "./assets/cards/6S.png" },
  { id: 45, rank: "7", suit: "Spades", color: "black", img: "./assets/cards/7S.png" },
  { id: 46, rank: "8", suit: "Spades", color: "black", img: "./assets/cards/8S.png" },
  { id: 47, rank: "9", suit: "Spades", color: "black", img: "./assets/cards/9S.png" },
  { id: 48, rank: "10", suit: "Spades", color: "black", img: "./assets/cards/10S.png" },
  { id: 49, rank: "Jack", suit: "Spades", color: "black", img: "./assets/cards/11S.png" },
  { id: 50, rank: "Queen", suit: "Spades", color: "black", img: "./assets/cards/12S.png" },
  { id: 51, rank: "King", suit: "Spades", color: "black", img: "./assets/cards/13S.png" },
];

function App() {
  const [count, setCount] = useState(0);
  shuffleDeck();

  return (
    <>
      <header></header>
      <div id="game">
        <nav id="nav1"></nav>
        <main>
          <Stack cards={1} />
          <Stack cards={2} />
          <Stack cards={3} />
          <Stack cards={4} />
          <Stack cards={5} />
          <Stack cards={6} />
          <Stack cards={7} />
        </main>
        <nav id="nav2"></nav>
      </div>
    </>
  );
}

function Stack({cards}) {
  const currentStack = [];
  for (let i = 0; i < cards; i++) {
    currentStack.push(drawCard());
  }
  // Ensure only the last card in the stack is face up
  if (currentStack.length > 0) {
    currentStack.forEach((c) => {
      if (c) c.faceUp = false;
    });
    const last = currentStack[currentStack.length - 1];
    if (last) last.faceUp = true;
  }
  return (
    <ul className="cardStack">
    {currentStack.map(card =>(
      <li key={card.id}>
        <Card data={card} />
      </li>
    ))}
    </ul> 
  )
}

function Card({ data }) {
  const [isFaceUp, setIsFaceUp] = useState(Boolean(data && data.faceUp));
  const src = isFaceUp && data && data.img ? new URL(data.img, import.meta.url).href : cardBack;

  return (
    <img
      className="playingCard"
      src={src}
      alt={data ? `${data.rank} of ${data.suit}` : "Card"}
    />
  );
}
// Fisher-Yates shuffle (Unbiased permutation, making every ordering equally likely)
function shuffleDeck() {
  let currentIndex = deck.length;
  let randomIndex;

  // While there remain elements to shuffle:
  while (currentIndex !== 0) {
    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element
    [deck[currentIndex], deck[randomIndex]] = 
    [deck[randomIndex], deck[currentIndex],
    ];
  }

  //console.log(deck);
}

function drawCard(){

  return deck.pop();
}

export default App;
