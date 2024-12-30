let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

function makeMove(cell) {
  const index = Array.from(cell.parentElement.children).indexOf(cell);

  if (!gameActive || board[index] !== "") return;

  board[index] = currentPlayer;
  cell.textContent = currentPlayer;

  if (checkWinner()) {
    document.getElementById("message").textContent = `Joueur ${currentPlayer} a gagné ! 🎉`;
    document.getElementById("message").style.opacity = "1";  // Faire apparaître le message
    gameActive = false;
  } else if (board.every(cell => cell !== "")) {
    document.getElementById("message").textContent = "Match nul ! 🤝";
    document.getElementById("message").style.opacity = "1";  // Faire apparaître le message
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return winningCombinations.some(combination => {
    return combination.every(index => board[index] === currentPlayer);
  });
}

function resetGame() {
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  document.querySelectorAll(".cell").forEach(cell => (cell.textContent = ""));
  document.getElementById("message").textContent = "";
  document.getElementById("message").style.opacity = "0";  // Cacher le message
}
