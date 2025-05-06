const gameBoard = document.getElementById('gameBoard');

function populateGameContainer(rows, columns) {
  for (let i = 0; i < rows * columns; i++) {
    const button = document.createElement("button");
    button.className = "inputButton";
    gameBoard.appendChild(button);
  }
}
populateGameContainer(3,3);