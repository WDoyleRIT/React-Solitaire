import { useState, useEffect, useRef, useCallback, memo } from "react";
import cardBack from "./assets/cards/card_back.png";
import heart from "./assets/cards/Hearts.png";
import diamond from "./assets/cards/Diamonds.png";
import club from "./assets/cards/Clubs.png";
import spade from "./assets/cards/Spades.png";
import refresh from "./assets/cards/Refresh.png";
import { X, Volume2, VolumeOff, Undo, Star } from "lucide-react";
import "@fontsource-variable/archivo/wght.css";
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


// Precompute absolute image URLs once so renders don't call `new URL(...)` repeatedly.
deck.forEach((c) => {
  if (c && c.img) c.img = new URL(c.img, import.meta.url).href;
});

function App() {
  const [volumeOn, setVolumeOn] = useState(true);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [shopCards, setShopCards] = useState([]);
  const [discards, setDiscards] = useState([]);
  // Track deck size in state so the UI updates when module-level `deck` is mutated.
  const [deckCount, setDeckCount] = useState(deck.length);
  const [currentTime, setCurrentTime] = useState(Date.now());
  // Keep the start time in a ref so it doesn't reset on each render
  const startTimeRef = useRef(Date.now());
  // Ref that holds the currently dragged/pressed card (no rerenders)
  const draggingRef = useRef(null);

  // For debugging deck manipulation
  /*useEffect(() => {
    console.log(
      "Cards in deck: " + deck.length,
      " Cards in discard: " + discards.length,
    );
  }, [deck, discards]);*/

  // Stable handler for toggling audio UI
  const toggleVolume = useCallback(() => setVolumeOn((v) => !v), []);

  // Draw cards from the module-level deck into the shop.
  // Using useCallback reduces handler identity changes.
  const checkDeck = useCallback(() => {
    let newShopCards = [];

    // If the module-level deck is empty, recycle discarded/shop cards back
    // onto the deck and then attempt to draw. If recycling still leaves the
    // deck empty, bail out.
    if (deck.length === 0) {
      Recycle();
      if (deck.length === 0) return;
    }

    if (shopCards.length !== 0) {
      // Move existing shop cards into the discard pile
      console.debug("checkDeck: moving shop -> discards", {
        shopLen: shopCards.length,
        shopIds: shopCards.map((c) => c && c.id),
        discardsLen: discards.length,
        discardsIds: discards.map((d) => d && d.id),
      });
      setDiscards((prev) => [...prev, ...shopCards]);
    }

    for (let i = 0; i < 3; i++) {
      const c = deck.pop();
      if (c) newShopCards.push(c);
    }

    // update React state so the shop images re-render
    setShopCards(newShopCards);
    // update the deck count shown in the UI
    setDeckCount(deck.length);
  }, [shopCards, setShopCards, setDiscards]);

  // After initial render (which mounts `Stack` children that draw from the
  // module-level `deck`), sync the React-visible `deckCount` with the actual
  // module-level deck length so the UI reflects the true number of cards.
  useEffect(() => {
    setDeckCount(deck.length);
  }, []);

  // Once the deck is emptied, move all cards in the navbar back to the deck
  const Recycle = useCallback(() => {
    // Combine the current discard pile with any cards still shown in the shop.
    console.debug("Recycle: start", {
      deckBefore: deck.length,
      discardsLen: discards.length,
      discardsIds: discards.map((d) => d && d.id),
      shopLen: shopCards.length,
      shopIds: shopCards.map((c) => c && c.id),
    });

    const newDiscards = [...discards, ...shopCards];

    if (newDiscards.length === 0) return; // nothing to recycle

    // Clear the shop so UI shows empty immediately
    setShopCards([]);

    // Push all discarded/shop cards back onto the deck in reverse order so
    // the previous top-of-discard ends up on top of the deck.
    for (let i = newDiscards.length - 1; i >= 0; i--) {
      deck.push(newDiscards[i]);
    }

    // Clear discard state and sync deckCount
    setDiscards([]);
    setDeckCount(deck.length);

    console.debug("Recycle: done", { deckAfter: deck.length });
  }, [discards, shopCards]);

  // (No-op) state-backed Recycle avoids needing separate refs.

  // Update `currentTime` on an interval; this is done in an effect below
  useEffect(() => {
    const id = setInterval(() => setCurrentTime(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const totalSeconds = Math.floor((currentTime - startTimeRef.current) / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // Called by Card when pointer is pressed on it. Store card + DOM element in a ref.
  const handleStartDrag = useCallback((card, el) => {
    draggingRef.current = { id: card.id, card, el, startedAt: Date.now() };
  }, []);

  // Called by Card when pointer is released/cancelled.
  const handleEndDrag = useCallback(() => {
    draggingRef.current = null;
  }, []);

  useEffect(() => {
  onStart();
  }, []); // runs after first mount

  return (
    <>
      <header>
        <div className="stats">
          <h1 className="timer">
            {hours}:{String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </h1>
          <h1 className="scoreCount">Score {score}</h1>
          <h1 className="moveCount">Moves {moves} </h1>
        </div>
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
            src={deckCount > 0 ? cardBack : refresh}
            onClick={checkDeck}
          />
          <div className="shop">
            {shopCards[0] && (
              <img
                className="shopCard"
                src={shopCards[0].img}
                alt="shop card 1"
              />
            )}
            {shopCards[1] && (
              <img
                className="shopCard"
                src={shopCards[1].img}
                alt="shop card 2"
              />
            )}
            {shopCards[2] && (
              <img
                className="shopCard"
                src={shopCards[2].img}
                alt="shop card 3"
              />
            )}
          </div>
          <img
            id="discardDeck"
            className="playingDeck"
            /*src={discards.length === 0 ? null : cardBack}*/
          />
        </nav>
        <main>
          <div className="stacks">
            <Stack cards={1} onStartDrag={handleStartDrag} onEndDrag={handleEndDrag} />
            <Stack cards={2} onStartDrag={handleStartDrag} onEndDrag={handleEndDrag} />
            <Stack cards={3} onStartDrag={handleStartDrag} onEndDrag={handleEndDrag} />
            <Stack cards={4} onStartDrag={handleStartDrag} onEndDrag={handleEndDrag} />
            <Stack cards={5} onStartDrag={handleStartDrag} onEndDrag={handleEndDrag} />
            <Stack cards={6} onStartDrag={handleStartDrag} onEndDrag={handleEndDrag} />
            <Stack cards={7} onStartDrag={handleStartDrag} onEndDrag={handleEndDrag} />
          </div>

          <div className="footer">
            <h1 className="undoButton" onClick={undoAction}>
              <Undo className="footerIcon" />
              Undo
            </h1>
            <h1 className="newButton" onClick={newGame}>
              <Star className="footerIcon" />
              New
            </h1>
          </div>
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

const Stack = memo(function Stack({ cards, onStartDrag, onEndDrag }) {
  const [currentStack] = useState(() => {
    const s = [];
    for (let i = 0; i < cards; i++) {
      s.push(drawCard());
    }
    return s;
  });

  // Ensure only the last card in the stack is face up. We mutate the
  // card objects once at initialization; after that the stack is stable.
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
          <Card data={card} onStartDrag={onStartDrag} onEndDrag={onEndDrag} />
        </li>
      ))}
    </ul>
  );
});

const Card = memo(function Card({ data, onStartDrag, onEndDrag }) {
  // Derive face-up from the passed `data` rather than keeping local state.
  const isFaceUp = Boolean(data && data.faceUp);
  // Use precomputed image href (set earlier) to avoid recomputing on each render
  const src = isFaceUp && data && data.img ? data.img : cardBack;
  const [isPressed, setIsPressed] = useState(false);
  const elRef = useRef(null);
  const dragStateRef = useRef(null);

  function onPointerDown(e) {
    e.preventDefault();
    const el = elRef.current;
    el?.setPointerCapture?.(e.pointerId);
    setIsPressed(true);
    try { onStartDrag?.(data, el); } catch (err) {}

    // Prepare element for fixed-position dragging visuals
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.width = `${rect.width}px`;
    el.style.height = `${rect.height}px`;
    el.style.left = `${rect.left}px`;
    el.style.top = `${rect.top}px`;
    el.style.margin = "0";
    el.style.position = "fixed";
    el.style.pointerEvents = "none";
    el.style.zIndex = "9999";

    const dragState = {
      el,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
      baseLeft: rect.left,
      baseTop: rect.top,
      lastX: e.clientX,
      lastY: e.clientY,
      rafId: null,
    };

    const rafLoop = () => {
      const d = dragStateRef.current;
      if (!d) return;
      const tx = d.lastX - d.offsetX - d.baseLeft;
      const ty = d.lastY - d.offsetY - d.baseTop;
      d.el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      d.rafId = requestAnimationFrame(rafLoop);
    };

    // store in ref so move handler can update coordinates
    dragStateRef.current = dragState;
    dragStateRef.current.rafId = requestAnimationFrame(rafLoop);

    const onPointerMove = (ev) => {
      if (dragStateRef.current) {
        dragStateRef.current.lastX = ev.clientX;
        dragStateRef.current.lastY = ev.clientY;
      }
    };

    const onPointerUpGlobal = (ev) => {
      try { el.releasePointerCapture?.(ev.pointerId); } catch (err) {}
      // stop rAF
      const d = dragStateRef.current;
      if (d) {
        if (d.rafId) cancelAnimationFrame(d.rafId);
        // reset styles
        d.el.style.transform = "";
        d.el.style.left = "";
        d.el.style.top = "";
        d.el.style.width = "";
        d.el.style.height = "";
        d.el.style.margin = "";
        d.el.style.position = "";
        d.el.style.pointerEvents = "";
        d.el.style.zIndex = "";
      }
      dragStateRef.current = null;
      setIsPressed(false);
      try { onEndDrag?.(); } catch (err) {}
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUpGlobal);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUpGlobal);
  }

  function onPointerUp(e) {
    // Handled by global pointerup listener set in onPointerDown; keep for safety
    try { elRef.current?.releasePointerCapture?.(e.pointerId); } catch (err) {}
    setIsPressed(false);
    try { onEndDrag?.(); } catch (err) {}
  }

  function onPointerCancel() {
    setIsPressed(false);
    try { onEndDrag?.(); } catch (err) {}
  }

  return (
    <img
      ref={elRef}
      className={`${isPressed ? "clickedCard" : "playingCard"}`}
      src={src}
      alt={data ? `${data.rank} of ${data.suit}` : "Card"}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      draggable={false}
    />
  );
});

const Pile = memo(function Pile({ suit }) {
  // No local state required here; derive the image directly.
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
});

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

function undoAction() {
  console.log("to do!");
}

function newGame() {
  window.location.reload();
}

function onStart(){
  console.log("Started!");
}

export default App;
