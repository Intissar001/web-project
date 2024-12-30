const gameContainer = document.getElementById("gameContainer");
const restartButton = document.getElementById("restartButton");

const cardsData = [
  "🍎", "🍎",
  "🍌", "🍌",
  "🍇", "🍇",
  "🍓", "🍓",
  "🍍", "🍍",
  "🥝", "🥝",
  "🍉", "🍉",
  "🍒", "🍒"
];

let flippedCards = [];
let matchedCards = [];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createCardElement(content) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.content = content;
  card.addEventListener("click", handleCardClick);
  return card;
}

function handleCardClick(e) {
  const clickedCard = e.target;

  if (flippedCards.length < 2 && !clickedCard.classList.contains("flip")) {
    clickedCard.classList.add("flip");
    clickedCard.textContent = clickedCard.dataset.content;
    flippedCards.push(clickedCard);

    if (flippedCards.length === 2) {
      checkForMatch();
    }
  }
}

function checkForMatch() {
  const [card1, card2] = flippedCards;

  if (card1.dataset.content === card2.dataset.content) {
    card1.classList.add("matched");
    card2.classList.add("matched");
    matchedCards.push(card1, card2);
    flippedCards = [];

    if (matchedCards.length === cardsData.length) {
      setTimeout(() => alert("Bravo, vous avez gagné !"), 500);
    }
  } else {
    setTimeout(() => {
      card1.classList.remove("flip");
      card2.classList.remove("flip");
      card1.textContent = "";
      card2.textContent = "";
      flippedCards = [];
    }, 1000);
  }
}

function startGame() {
  gameContainer.innerHTML = "";
  flippedCards = [];
  matchedCards = [];
  const shuffledCards = shuffle([...cardsData]);

  shuffledCards.forEach(content => {
    const card = createCardElement(content);
    gameContainer.appendChild(card);
  });
}

restartButton.addEventListener("click", startGame);

// Initialisation du jeu
startGame();
