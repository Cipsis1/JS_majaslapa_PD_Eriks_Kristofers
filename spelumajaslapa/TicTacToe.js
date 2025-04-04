let board = ['', '', '', '', '', '', '', '', ''];
  let currentPlayer = 'X';  // Player is 'X', computer is 'O'
  let gameOver = false;
  let coins = localStorage.getItem('coins') ? Number(localStorage.getItem('coins')) : 100; // Load from localStorage
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
      if (gameOver || board[index]) return; // FIXED CONDITION

      board[index] = currentPlayer;
      renderBoard();
      checkWinner();

      // Only let the computer move if the game isn't over
      if (!gameOver && currentPlayer === 'X') {
        currentPlayer = 'O';
        setTimeout(computerMove, 500);
      }
    }

    // Computer random move
    function computerMove() {
      if (gameOver) return;  // FIXED: Ensure computer doesn't move after game ends

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
    
          if (board[a] === 'X') {
            coins += 10;  // Player wins, gain 10 coins
          } else {
            coins = Math.max(0, coins - 10); // Computer wins, lose 10 coins (never below 0)
          }
  
        // Update coins in localStorage and UI
        localStorage.setItem(coins, `coins`);
        updateCoinDisplay();
            function updateCoinDisplay() {
              document.getElementById('coins').textContent = `Punkti: ${coins}`;
            }
            updateCoinDisplay(); 

    
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
    

    // Restart game
    function restartGame() {
      board = ['', '', '', '', '', '', '', '', ''];
      currentPlayer = 'X';
      gameOver = false;
      document.querySelector('.message').textContent = 'Tavs Gājiens!';
      renderBoard();
    }

    // Update coin display
   

    // Start the game
    renderBoard();

// Real-time Clock
function laiks() {
  const tagad = new Date();
  const formatetsLaiks = tagad.getFullYear() + "-" +
  String(tagad.getMonth() + 1).padStart(2, '0') + "-" +
  String(tagad.getDate()).padStart(2, '0') + " " +
  String(tagad.getHours()).padStart(2, '0') + ":" +
  String(tagad.getMinutes()).padStart(2, '0') + ":" +
  String(tagad.getSeconds()).padStart(2, '0');

  document.getElementById("laiks").textContent = formatetsLaiks;
}

laiks();
setInterval(laiks, 1000);
