# X O Game
This is a simple implementation of the classic X O game in JavaScript. The game is played on a 3x3 grid and the players take turns placing their symbol (either X or O) on the board. The goal is to get three of your symbols in a row (horizontally, vertically, or diagonally) before your opponent does.

## How to Play
To start the game, open the index.html file in your web browser.
The first player (X) will be prompted to make their move by clicking on a cell on the board.
The second player (O) will then be prompted to make their move in the same way.
Play continues until one player gets three in a row or the board is full and the game ends in a tie.
Session Storage
The game state is saved using session storage, which allows the game to be resumed if the page is reloaded or closed and reopened. This was accomplished by using JavaScript to save the game board array and the current player to session storage after each turn, and then retrieving that data from session storage when the page is loaded.

### Skills Learned
While making this game, I learned a few new skills, including:

JavaScript basics: I had to use JavaScript to implement the game logic, including the board representation, move validation, and win checking.
DOM manipulation: I used JavaScript to manipulate the Document Object Model (DOM) to update the game board and display messages to the user.
Event handling: I used JavaScript to handle user events, such as clicking on a cell on the game board.
Session storage: I learned how to use session storage to save the game state and retrieve it when the page is reloaded.
Future Improvements
There are a few improvements that could be made to the game in the future, including:

Improved user interface: The game currently has a very basic user interface, so it could be improved with better styling and animations.
Computer opponent: The game currently requires two human players, but it would be interesting to add a computer opponent that uses an AI algorithm to play against the user.
Board size: The game currently uses a 3x3 board, but it could be interesting to allow players to choose a larger board size for a more challenging game.
Overall, I had a great time making this X O game and learned a lot in the process. I hope that others can learn from my code and enjoy playing the game as well!