const menuScreen = document.getElementById("menuScreen");
const gameScreen = document.getElementById("gameScreen");
const onePlayerBtn = document.getElementById("onePlayerBtn");
const twoPlayerBtn = document.getElementById("twoPlayerBtn");
const boxes = document.querySelectorAll(".box");
const resetBtn = document.getElementById("resetBtn");
const newGameBtn = document.getElementById("newGameBtn");
const statusMsg = document.getElementById("statusMsg");

const clickSound = document.getElementById("clickSound");
const winSound = document.getElementById("winSound");
const drawSound = document.getElementById("drawSound");

let turn = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let isGameOver = false;
let mode = ""; // "AI" or "2P"

onePlayerBtn.onclick = () => startGame("AI");
twoPlayerBtn.onclick = () => startGame("2P");

function startGame(selectedMode) {
  mode = selectedMode;
  menuScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  resetBoard();
  updateStatus(`Player X's turn`);
}

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (isGameOver || board[index] !== "") return;

    clickSound.play();
    board[index] = turn;
    box.textContent = turn;

    const winningCombo = getWinningCombo();
    if (winningCombo) {
      winSound.play();
      highlightWinner(winningCombo);
      updateStatus(`${turn} Wins!`);
      isGameOver = true;
      return;
    }

    if (board.every((cell) => cell !== "")) {
      drawSound.play();
      updateStatus(`It's a Draw!`);
      isGameOver = true;
      return;
    }

    turn = turn === "X" ? "O" : "X";
    updateStatus(`Player ${turn}'s turn`);

    if (mode === "AI" && turn === "O" && !isGameOver) {
      setTimeout(() => aiSmartMove(), 600);
    }
  });
});

// 🧠 Human-like AI (smart + slightly random)
function aiSmartMove() {
  // 85% chance AI plays smart, 15% chance it plays a random move
  const makeMistake = Math.random() < 0.15;
  let move;

  if (makeMistake) {
    const available = board
      .map((v, i) => (v === "" ? i : null))
      .filter((v) => v !== null);
    move = available[Math.floor(Math.random() * available.length)];
  } else {
    let bestScore = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === "") {
        board[i] = "O";
        let score = minimax(board, 0, false);
        board[i] = "";
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }
  }

  if (move !== undefined) {
    board[move] = "O";
    boxes[move].textContent = "O";
    clickSound.play();

    const winningCombo = getWinningCombo();
    if (winningCombo) {
      winSound.play();
      highlightWinner(winningCombo);
      updateStatus(`O Wins!`);
      isGameOver = true;
      return;
    }

    if (board.every((cell) => cell !== "")) {
      drawSound.play();
      updateStatus(`It's a Draw!`);
      isGameOver = true;
      return;
    }

    turn = "X";
    updateStatus(`Player ${turn}'s turn`);
  }
}

// ♟️ Minimax Algorithm (smart decision maker)
function minimax(board, depth, isMaximizing) {
  const result = evaluateBoard();
  if (result !== null) return result - depth * 0.1;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === "") {
        board[i] = "O";
        let score = minimax(board, depth + 1, false);
        board[i] = "";
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === "") {
        board[i] = "X";
        let score = minimax(board, depth + 1, true);
        board[i] = "";
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
}

// ⚡ Evaluate game board state
function evaluateBoard() {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of wins) {
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      if (board[a] === "O") return 1;
      if (board[a] === "X") return -1;
    }
  }

  if (board.every((cell) => cell !== "")) return 0;
  return null;
}

function getWinningCombo() {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return wins.find(
    ([a, b, c]) => board[a] && board[a] === board[b] && board[b] === board[c]
  );
}

function highlightWinner(combo) {
  combo.forEach((i) => boxes[i].classList.add("neon-win"));
}

function updateStatus(message) {
  statusMsg.textContent = message;
}

function resetBoard() {
  board = ["", "", "", "", "", "", "", "", ""];
  isGameOver = false;
  turn = "X";
  boxes.forEach((b) => {
    b.textContent = "";
    b.classList.remove("neon-win");
  });
  updateStatus(`Player X's turn`);
}

resetBtn.onclick = resetBoard;
newGameBtn.onclick = () => {
  gameScreen.classList.add("hidden");
  menuScreen.classList.remove("hidden");
};
