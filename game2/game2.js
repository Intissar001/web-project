let score = 0;
let currentMole = null;
let gameActive = false;
let moleTimer = null;
let timeLeft = 30;
let timeInterval = null;
let hitSound = document.getElementById("hit-sound");
let gameOverSound = document.getElementById("game-over-sound");

function startGame() {
  score = 0;
  document.getElementById("score").textContent = score;
  timeLeft = 30;
  document.getElementById("time-left").textContent = timeLeft;
  gameActive = true;
  
  // Reset the game time
  timeInterval = setInterval(function() {
    if (timeLeft <= 0) {
      endGame();
    } else {
      timeLeft--;
      document.getElementById("time-left").textContent = timeLeft;
    }
  }, 1000);

  moleTimer = setInterval(() => {
    if (!gameActive) return;
    hideMole();
    showMole();
  }, 1000);
}

function whackMole(holeId) {
  if (!gameActive) return;

  const hole = document.getElementById(`hole${holeId}`);
  const mole = hole.querySelector(".mole");

  if (mole && mole.classList.contains("active")) {
    score++;
    document.getElementById("score").textContent = score;
    mole.classList.remove("active");
    hitSound.play();
  }
}

function showMole() {
  const randomHole = Math.floor(Math.random() * 9) + 1;
  const hole = document.getElementById(`hole${randomHole}`);

  if (!hole.querySelector(".mole")) {
    const mole = document.createElement("div");
    mole.classList.add("mole");
    hole.appendChild(mole);
  }

  const mole = hole.querySelector(".mole");
  mole.classList.add("active");
}

function hideMole() {
  const holes = document.querySelectorAll(".hole");

  holes.forEach(hole => {
    const mole = hole.querySelector(".mole");
    if (mole) {
      mole.classList.remove("active");
    }
  });
}

function endGame() {
  gameActive = false;
  clearInterval(moleTimer);
  clearInterval(timeInterval);
  gameOverSound.play();
  alert("Le jeu est terminé ! Votre score est " + score);
  score = 0;
  document.getElementById("score").textContent = score;
}
