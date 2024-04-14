##Tic Tac Toe Game in React
This is a simple Tic Tac Toe game implemented using React.

#How to Play
The game is played on a 3x3 grid. Two players take turns marking spaces in the grid with their respective symbols, 'X' and 'O'. The first player to get three of their symbols in a row, column, or diagonal wins the game. If all spaces are filled and no player has won, the game ends in a draw.

#Code Logic
Components
TicTacToe: This is the main component of the game. It handles the game state, such as the current board configuration, player turns, and winner determination.
State
count: Keeps track of the number of moves made in the game.
lock: Prevents further moves when the game is over or during the delay after each move.
data: Represents the current state of the game board.
winner: Stores the winner of the game ('X', 'O', or 'draw').
Functions
resetGame(): Resets the game state to start a new game.
toggle(e, index): Handles the click event on each grid box. If the game is not locked and the selected box is empty, it updates the game state with the player's move and checks for a winner.
checkWin(board): Checks if there is a winner by iterating through all possible winning combinations on the board.
How to Run
To run the game locally:

Clone this repository to your local machine.
Navigate to the project directory in your terminal.
Run npm install to install dependencies.
Run npm start to start the development server.
Open your web browser and go to http://localhost:3000 to play the game.
That's it! Enjoy playing Tic Tac Toe!

Feel free to add more details or customize the README.md according to your preferences. Let me know if you need further assistance!
