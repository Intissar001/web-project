const gameContainer = document.getElementById("gameContainer");
const scoreDisplay = document.getElementById("score");
const startButton = document.getElementById("startButton");

let score = 0;
let gameInterval;

function randomPosition(max) {
  return Math.floor(Math.random() * max);
}

function randomColor() {
  const colors = ["#ff4d4d", "#4dff4d", "#4d4dff", "#ffff4d", "#ff4dff", "#4dffff"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function createCircle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.backgroundColor = randomColor();
  circle.style.top = `${randomPosition(gameContainer.offsetHeight - 50)}px`;
  circle.style.left = `${randomPosition(gameContainer.offsetWidth - 50)}px`;

  circle.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = `Score : ${score}`;
    circle.remove();
  });

  gameContainer.appendChild(circle);

  setTimeout(() => {
    if (circle.parentNode) circle.remove();
  }, 2000);
}

function startGame() {
  score = 0;
  scoreDisplay.textContent = `Score : ${score}`;
  gameContainer.innerHTML = "";

  gameInterval = setInterval(() => {
    createCircle();
  }, 1000);

  setTimeout(() => {
    clearInterval(gameInterval);
    alert(`Temps écoulé ! Votre score final est : ${score}`);
  }, 30000); // Le jeu dure 30 secondes
}

startButton.addEventListener("click", startGame);
