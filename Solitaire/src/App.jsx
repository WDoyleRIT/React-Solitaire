import { useState, useEffect, useRef } from "react";
import cardBack from "./assets/cards/card_back.png";
import heart from "./assets/cards/Hearts.png";
import diamond from "./assets/cards/Diamonds.png";
import club from "./assets/cards/Clubs.png";
import spade from "./assets/cards/Spades.png";
import refresh from "./assets/cards/Refresh.png";
import { X, Volume2, VolumeOff } from "lucide-react";
import "./App.css";

// Initially, deck is sorted by suit alphabetically, and then by rank from lowest (Ace) to highest (King)
const deck = [
  {
    id: 0,
    rank: "Ace",
    suit: "Clubs",
    color: "black",
    img: "./assets/cards/1C.png",
  },
  {
    id: 1,
    rank: "2",
    suit: "Clubs",
    color: "black",
    img: "./assets/cards/2C.png",
  },
  {
    id: 2,
    rank: "3",
    suit: "Clubs",
    color: "black",
    img: "./assets/cards/3C.png",
  },
  {
    id: 3,
    rank: "4",
    suit: "Clubs",
    color: "black",
    img: "./assets/cards/4C.png",
  },
  {
    id: 4,
    rank: "5",
    suit: "Clubs",
    color: "black",
    img: "./assets/cards/5C.png",
  },
  {
    id: 5,
    rank: "6",
    suit: "Clubs",
    color: "black",
    img: "./assets/cards/6C.png",
  },
  {
    id: 6,
    rank: "7",
    suit: "Clubs",
    color: "black",
    img: "./assets/cards/7C.png",
  },
  {
    id: 7,
    rank: "8",
    suit: "Clubs",
    color: "black",
    img: "./assets/cards/8C.png",
  },
  {
    id: 8,
    rank: "9",
    suit: "Clubs",
    color: "black",
    img: "./assets/cards/9C.png",
  },
  {
    id: 9,
    rank: "10",
    suit: "Clubs",
    color: "black",
    img: "./assets/cards/10C.png",
  },
  {
    id: 10,
    rank: "Jack",
    suit: "Clubs",
    color: "black",
    img: "./assets/cards/11C.png",
  },
  {
    id: 11,
    rank: "Queen",
    suit: "Clubs",
    color: "black",
    img: "./assets/cards/12C.png",
  },
  {
    id: 12,
    rank: "King",
    suit: "Clubs",
    color: "black",
    img: "./assets/cards/13C.png",
  },

  {
    id: 13,
    rank: "Ace",
    suit: "Diamonds",
    color: "red",
    img: "./assets/cards/1D.png",
  },
  {
    id: 14,
    rank: "2",
    suit: "Diamonds",
    color: "red",
    img: "./assets/cards/2D.png",
  },
  {
    id: 15,
    rank: "3",
    suit: "Diamonds",
    color: "red",
    img: "./assets/cards/3D.png",
  },
  {
    id: 16,
    rank: "4",
    suit: "Diamonds",
    color: "red",
    img: "./assets/cards/4D.png",
  },
  {
    id: 17,
    rank: "5",
    suit: "Diamonds",
    color: "red",
    img: "./assets/cards/5D.png",
  },
  {
    id: 18,
    rank: "6",
    suit: "Diamonds",
    color: "red",
    img: "./assets/cards/6D.png",
  },
  {
    id: 19,
    rank: "7",
    suit: "Diamonds",
    color: "red",
    img: "./assets/cards/7D.png",
  },
  {
    id: 20,
    rank: "8",
    suit: "Diamonds",
    color: "red",
    img: "./assets/cards/8D.png",
  },
  {
    id: 21,
    rank: "9",
    suit: "Diamonds",
    color: "red",
    img: "./assets/cards/9D.png",
  },
  {
    id: 22,
    rank: "10",
    suit: "Diamonds",
    color: "red",
    img: "./assets/cards/10D.png",
  },
  {
    id: 23,
    rank: "Jack",
    suit: "Diamonds",
    color: "red",
    img: "./assets/cards/11D.png",
  },
  {
    id: 24,
    rank: "Queen",
    suit: "Diamonds",
    color: "red",
    img: "./assets/cards/12D.png",
  },
  {
    id: 25,
    rank: "King",
    suit: "Diamonds",
    color: "red",
    img: "./assets/cards/13D.png",
  },

  {
    id: 26,
    rank: "Ace",
    suit: "Hearts",
    color: "red",
    img: "./assets/cards/1H.png",
  },
  {
    id: 27,
    rank: "2",
    suit: "Hearts",
    color: "red",
    img: "./assets/cards/2H.png",
  },
  {
    id: 28,
    rank: "3",
    suit: "Hearts",
    color: "red",
    img: "./assets/cards/3H.png",
  },
  {
    id: 29,
    rank: "4",
    suit: "Hearts",
    color: "red",
    img: "./assets/cards/4H.png",
  },
  {
    id: 30,
    rank: "5",
    suit: "Hearts",
    color: "red",
    img: "./assets/cards/5H.png",
  },
  {
    id: 31,
    rank: "6",
    suit: "Hearts",
    color: "red",
    img: "./assets/cards/6H.png",
  },
  {
    id: 32,
    rank: "7",
    suit: "Hearts",
    color: "red",
    img: "./assets/cards/7H.png",
  },
  {
    id: 33,
    rank: "8",
    suit: "Hearts",
    color: "red",
    img: "./assets/cards/8H.png",
  },
  {
    id: 34,
    rank: "9",
    suit: "Hearts",
    color: "red",
    img: "./assets/cards/9H.png",
  },
  {
    id: 35,
    rank: "10",
    suit: "Hearts",
    color: "red",
    img: "./assets/cards/10H.png",
  },
  {
    id: 36,
    rank: "Jack",
    suit: "Hearts",
    color: "red",
    img: "./assets/cards/11H.png",
  },
  {
    id: 37,
    rank: "Queen",
    suit: "Hearts",
    color: "red",
    img: "./assets/cards/12H.png",
  },
  {
    id: 38,
    rank: "King",
    suit: "Hearts",
    color: "red",
    img: "./assets/cards/13H.png",
  },

  {
    id: 39,
    rank: "Ace",
    suit: "Spades",
    color: "black",
    img: "./assets/cards/1S.png",
  },
  {
    id: 40,
    rank: "2",
    suit: "Spades",
    color: "black",
    img: "./assets/cards/2S.png",
  },
  {
    id: 41,
    rank: "3",
    suit: "Spades",
    color: "black",
    img: "./assets/cards/3S.png",
  },
  {
    id: 42,
    rank: "4",
    suit: "Spades",
    color: "black",
    img: "./assets/cards/4S.png",
  },
  {
    id: 43,
    rank: "5",
    suit: "Spades",
    color: "black",
    img: "./assets/cards/5S.png",
  },
  {
    id: 44,
    rank: "6",
    suit: "Spades",
    color: "black",
    img: "./assets/cards/6S.png",
  },
  {
    id: 45,
    rank: "7",
    suit: "Spades",
    color: "black",
    img: "./assets/cards/7S.png",
  },
  {
    id: 46,
    rank: "8",
    suit: "Spades",
    color: "black",
    img: "./assets/cards/8S.png",
  },
  {
    id: 47,
    rank: "9",
    suit: "Spades",
    color: "black",
    img: "./assets/cards/9S.png",
  },
  {
    id: 48,
    rank: "10",
    suit: "Spades",
    color: "black",
    img: "./assets/cards/10S.png",
  },
  {
    id: 49,
    rank: "Jack",
    suit: "Spades",
    color: "black",
    img: "./assets/cards/11S.png",
  },
  {
    id: 50,
    rank: "Queen",
    suit: "Spades",
    color: "black",
    img: "./assets/cards/12S.png",
  },
  {
    id: 51,
    rank: "King",
    suit: "Spades",
    color: "black",
    img: "./assets/cards/13S.png",
  },
];

function App() {
  const [volumeOn, setVolumeOn] = useState(true);
  const [moves, setMoves] = useState(0);
  const [shopCards, setShopCards] = useState([]);
  const [discards, setDiscards] = useState([]);

  /*useEffect(() => {
  console.log("Cards in deck: " + deck.length ," Cards in discard: " + discards.length);
  }, [deck, discards]);*/

  const toggleVolume = () => setVolumeOn((v) => !v);

  const checkDeck = () => {
    //To do: on click, take top three cards from deck and display them in shop
    //If there are already cards in the shop, first place them in discard
    //If there are no cards in the deck, place cards in shop in discard, then
    // return discarded cards to deck
    const shop = document.querySelector(".shop");
    let newShopCards = [];

    if(deck.length === 0){
      Recycle();
      return;
    }

    if (shopCards.length !== 0) {
      // Move existing shop cards into the discard pile
      setDiscards((prev) => [...prev, ...shopCards]);
    }

    for (let i = 0; i < 3; i++) {
      const c = deck.pop();
      if (c) newShopCards.push(c);
    }

    // update React state so the shop images re-render
    setShopCards(newShopCards);
  };

  // Once the deck is emptied, move all cards in the navbar back to the deck
  const Recycle = () => {
    // Combine current discards and any cards still in the shop
    const newDiscards = [...discards, ...shopCards];

    // Clear the shop (do not mutate state arrays directly)
    setShopCards([]);

    // Push all discarded cards back onto the deck. Push in reverse
    // so the previous top-of-discard ends up on top of the deck.
    for (let i = newDiscards.length - 1; i >= 0; i--) {
      deck.push(newDiscards[i]);
    }

    // Clear discard state
    setDiscards([]);
  }

  return (
    <>
      <header>
        <div className="stats"></div>
        <div className="menu">
          {volumeOn ? (
            <Volume2 className="settings" onClick={toggleVolume} />
          ) : (
            <VolumeOff className="settings" onClick={toggleVolume} />
          )}
          <X className="settings" onClick={closeWindow} />
        </div>
      </header>
      <div id="game">
        <nav id="nav1">
          <img
            className="playingDeck"
            src={deck.length > 0 ? cardBack : refresh}
            onClick={() => checkDeck()}
          />
          <div className="shop">
            <img
              className="shopCard"
              src={
                shopCards[0]
                  ? new URL(shopCards[0].img, import.meta.url).href
                  : null
              }
            />
            <img
              className="shopCard"
              src={
                shopCards[1]
                  ? new URL(shopCards[1].img, import.meta.url).href
                  : null
              }
            />
            <img
              className="shopCard"
              src={
                shopCards[2]
                  ? new URL(shopCards[2].img, import.meta.url).href
                  : null
              }
            />
          </div>
          <img
            id="discardDeck"
            className="playingDeck"
            /*src={discards.length === 0 ? null : cardBack}*/
          />
        </nav>
        <main>
          <Stack cards={1} />
          <Stack cards={2} />
          <Stack cards={3} />
          <Stack cards={4} />
          <Stack cards={5} />
          <Stack cards={6} />
          <Stack cards={7} />
        </main>
        <nav id="nav2">
          <Pile suit="Heart" />
          <Pile suit="Diamond" />
          <Pile suit="Club" />
          <Pile suit="Spade" />
        </nav>
      </div>
    </>
  );
}

function Stack({ cards }) {
  const [currentStack] = useState(() => {
    const s = [];
    for (let i = 0; i < cards; i++) {
      s.push(drawCard());
    }
    return s;
  });
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
      {currentStack.map((card) => (
        <li key={card.id}>
          <Card data={card} />
        </li>
      ))}
    </ul>
  );
}

function Card({ data }) {
  const [isFaceUp, setIsFaceUp] = useState(Boolean(data && data.faceUp));
  const src =
    isFaceUp && data && data.img
      ? new URL(data.img, import.meta.url).href
      : cardBack;

  return (
    <img
      className="playingCard"
      src={src}
      alt={data ? `${data.rank} of ${data.suit}` : "Card"}
    />
  );
}

function Pile({ suit }) {
  const [value, setValue] = useState(0);

  let img = cardBack; // fallback
  switch (suit) {
    case "Heart":
      img = heart;
      break;
    case "Diamond":
      img = diamond;
      break;
    case "Club":
      img = club;
      break;
    case "Spade":
      img = spade;
      break;
  }

  return <img className="cardPile" src={img} alt={"Stack"} />;
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
    [deck[currentIndex], deck[randomIndex]] = [
      deck[randomIndex],
      deck[currentIndex],
    ];
  }

  //console.log(deck);
}

// Shuffle deck once at module load so initial draws/stacks come from a shuffled deck
shuffleDeck();

function drawCard() {
  return deck.pop();
}

function closeWindow() {
  window.open("", "_self", "");
  window.close();
}

export default App;
