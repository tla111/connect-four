//Used Randy's Demo and Lesson: Nested Arrays to Help Guide Me With This Project
//Received help from Coach Arieahna & Mike Boring

let gameModel = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
]

let turn = "player1";
let playerOne = document.querySelector("#p1");
let playerTwo = document.querySelector("#p2");

let tower1 = document.querySelector("#col0");
let tower2 = document.querySelector("#col1");
let tower3 = document.querySelector("#col2");
let tower4 = document.querySelector("#col3");
let tower5 = document.querySelector("#col4");
let tower6 = document.querySelector("#col5");
let tower7 = document.querySelector("#col6");

function playGame(event) {
  let selectTower = event.currentTarget;

  if ((turn === "player1") && (selectTower.childElementCount < 6)) {
    playerTwo.className = "playerTurn switch2";
    playerOne.className = "blank";
    selectTower = event.currentTarget;
  
    let piece = document.createElement("div");
    piece.className = "diskBlack";
    selectTower.appendChild(piece);

    let columnIndex = Number(selectTower.id.slice(-1))

    function updateGameboard() {
      for (let row = gameModel.length - 1; row >= 0; row--) {
        if (gameModel[row][columnIndex] === 0) {
          gameModel[row][columnIndex] = "1";
          break;
        }
      }
    }
    updateGameboard();;

    turn = "player2";
  }
  else if ((turn === "player2") && (selectTower.childElementCount < 6)) {
    playerOne.className = "playerTurn switch1";
    playerTwo.className = "blank";
    selectTower = event.currentTarget;
    let piece = document.createElement("div");
    piece.className = "diskRed";
    selectTower.appendChild(piece);

    let columnIndex = Number(selectTower.id.slice(-1))

    function updateGameboard() {
      for (let row = gameModel.length - 1; row >= 0; row--) {
        if (gameModel[row][columnIndex] === 0) {
          gameModel[row][columnIndex] = "2";
          break;
        }
      }
    }
    updateGameboard();

    turn = "player1";
  }

  winVertical(gameModel);
  winHorizontal(gameModel);
  winDiagonalUpRight(gameModel);
  winDiagonalDownRight(gameModel);
  tieGame();
}

tower1.addEventListener("click", playGame);
tower2.addEventListener("click", playGame);
tower3.addEventListener("click", playGame);
tower4.addEventListener("click", playGame);
tower5.addEventListener("click", playGame);
tower6.addEventListener("click", playGame);
tower7.addEventListener("click", playGame);

function tieGame() {
  if ((tower1.childElementCount === 6) &&
    (tower2.childElementCount === 6) &&
    (tower3.childElementCount === 6) &&
    (tower4.childElementCount === 6) &&
    (tower5.childElementCount === 6) &&
    (tower6.childElementCount === 6) &&
    (tower7.childElementCount === 6)) {
    setTimeout(function () { alert("Tie Game! Press OK to Restart Game"); }, 200);
    setTimeout(function () { location.reload(); }, 250);
  }
}

//Winning Game Conditions

const winVertical = function (gameboard) {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < gameboard[row].length; col++) {
      //Same column, different row
      if ((gameboard[row][col] === gameboard[row + 1][col]) &&
        (gameboard[row][col] === gameboard[row + 2][col]) &&
        (gameboard[row][col] === gameboard[row + 3][col]) &&
        (gameboard[row][col] != 0)) {
        setTimeout(function () { alert("Winner! Four in a Row Vertical! Press OK to Restart Game"); }, 200);
        setTimeout(function () { location.reload(); }, 250);
      }
    }
  }
  return 1;
}

const winHorizontal = function (gameboard) {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < gameboard[row].length; col++) {
      //Same row, different column
      if ((gameboard[row][col] === gameboard[row][col + 1]) &&
        (gameboard[row][col] === gameboard[row][col + 2]) &&
        (gameboard[row][col] === gameboard[row][col + 3]) &&
        (gameboard[row][col] != 0)) {
        setTimeout(function () { alert("Winner! Four in a Row Horizontal! Press OK to Restart Game"); }, 200);
        setTimeout(function () { location.reload(); }, 250);
      }
    }
  }
  return 1;
}

const winDiagonalUpRight = function(gameboard){
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < gameboard[row].length; col++) {
      //Start from the Top
      if ((gameboard[row][col] === gameboard[row + 1][col - 1]) &&
        (gameboard[row][col] === gameboard[row + 2][col - 2]) &&
        (gameboard[row][col] === gameboard[row + 3][col - 3]) &&
        (gameboard[row][col] != 0)) {
        setTimeout(function () { alert("Winner! Four in a Row Diagonal! Press OK to Restart Game"); }, 200);
        setTimeout(function () { location.reload(); }, 250);
      }
    }
  }
  return 1;
}

const winDiagonalDownRight = function(gameboard){
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < gameboard[row].length; col++) {
      //Start from the bottom
      if ((gameboard[row][col] === gameboard[row + 1][col + 1]) &&
        (gameboard[row][col] === gameboard[row + 2][col + 2]) &&
        (gameboard[row][col] === gameboard[row + 3][col + 3]) &&
        (gameboard[row][col] != 0)) {
        setTimeout(function () { alert("Winner! Four in a Row Diagonal! Press OK to Restart Game"); }, 200);
        setTimeout(function () { location.reload(); }, 250);
      }
    }
  }
  return 1;
}
