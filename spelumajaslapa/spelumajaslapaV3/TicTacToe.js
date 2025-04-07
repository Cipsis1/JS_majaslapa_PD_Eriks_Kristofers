
let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';  // Player is 'X', computer is 'O'
    let gameOver = false;

    // Render board
    function renderBoard() {
      const boardElement = document.getElementById('board');
      boardElement.innerHTML = '';
      board.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        if (cell) {
          cellElement.classList.add('taken');
          cellElement.textContent = cell;
        }
        cellElement.addEventListener('click', () => handlePlayerMove(index));
        boardElement.appendChild(cellElement);
      });
    }

    // Handle player move
    function handlePlayerMove(index) {
      if (gameOver || board[index]) return;

      board[index] = currentPlayer;
      renderBoard();
      checkWinner();

      if (!gameOver && currentPlayer === 'X') {
        currentPlayer = 'O';
        setTimeout(computerMove, 500);
      }
    }

    // Computer random move
    function computerMove() {
      let availableMoves = board.map((cell, index) => cell === '' ? index : null).filter(index => index !== null);
      if (availableMoves.length === 0) return; // No more moves available, game is over

      const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
      board[randomMove] = 'O';
      renderBoard();
      checkWinner();

      if (!gameOver) {
        currentPlayer = 'X';
      }
    }

    // Check for winner
    function checkWinner() {
      const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
        [0, 4, 8], [2, 4, 6]             // Diagonal
      ];

      for (const [a, b, c] of winPatterns) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          gameOver = true;
          document.querySelector('.message').textContent = `${board[a]} Uzvar!`;
          if (board[a]=== 'X'){
            addPoints(30)
          }else{
            subtractPoints(30)
          }
          setTimeout(restartGame, 2000);
          return;
        }
      }

      if (board.every(cell => cell)) {
        gameOver = true;
        document.querySelector('.message').textContent = 'Neizšķirts!';
        setTimeout(restartGame, 2000);
      }
    } 
    function restartGame() {
        board = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        gameOver = false;
        document.querySelector('.message').textContent = 'Tavs Gājiens!';
        renderBoard();
      }

    // Start the game
    renderBoard();

function laiks(){
  const tagad = new Date();
  const formatetsLaiks = tagad.getFullYear() + "-" +
  String(tagad.getMonth()+1).padStart(2, '0') + "-" + 
  String(tagad.getDate()).padStart(2, '0')+ " " +
  String(tagad.getHours()).padStart(2, '0')+ ":" + 
  String(tagad.getMinutes()).padStart(2, '0')+ ":" +
  String(tagad.getSeconds()).padStart(2, '0');

  document.getElementById("laiks").textContent = formatetsLaiks;
}
laiks();
setInterval(laiks,1000)

let person = window.localStorage.getItem("person");
document.getElementById("speletajs").innerHTML = person;

let points = window.localStorage.getItem("points");
if (points === null) {
  points = 0;
} else {
  points = parseInt(points);
}

// Update the points display
function updatePointsDisplay() {
  document.getElementById('punkti').innerHTML = points;
}

// Add points
function addPoints(amount) {
  points += amount;
  localStorage.setItem('points', points);
  updatePointsDisplay();
}

function subtractPoints(amount) {
    points -= amount;
    if (points < 0) points = 0; // Ensure points don't go below 0
    localStorage.setItem('points', points);
    updatePointsDisplay();
  }

// Initial points display update
updatePointsDisplay();