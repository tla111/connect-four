//Used Randy's Demo and Lesson: Nested Arrays to help guide me with this project
//Received help from Coach Arieahna & Mike Boring

//Display a two dimensional array that matches the 7x6 Connect Four Gameboard
  //The array will be useful in locating where the players discs are and the winning game conditions
let gameModel = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
]

//Declare a variable turn and assign it to 1 for player 1's turn
let turn = 1;
//playerOne & playerTwo will determine the player's turn
let playerOne = document.querySelector("#p1");
let playerTwo = document.querySelector("#p2");
//Each tower represents a column
let tower1 = document.querySelector("#col0");
let tower2 = document.querySelector("#col1");
let tower3 = document.querySelector("#col2");
let tower4 = document.querySelector("#col3");
let tower5 = document.querySelector("#col4");
let tower6 = document.querySelector("#col5");
let tower7 = document.querySelector("#col6");
//A function to switch turns when dropping a disc
function createTurn(){
  if(turn === 1){
    turn = 2
  }else{
    turn = 1;
  }
}
// A function to allow the game to run
function playGame(event){
  //Grab the column that was clicked 
  selectedColumn = event.currentTarget;

  //Player One's Turn
  if(turn === 1){
    //Will show player2's turn after player1's disc is dropped because the turn will change after the disc is dropped
    playerTwo.className = "playerTurn switch2";
    playerOne.className = "blank";
  }else{
    //Will show player1's turn after player2's disc is dropped because the turn will change after the disc is dropped
    playerOne.className = "playerTurn switch1";
    playerTwo.className = "blank";
  }
  //Create a div element
  piece = document.createElement("div");
  //Have the disc be black/red depending on the player's turn
  piece.className = (turn === 1) ? "diskBlack" : "diskRed";
  //Allow the disc to be dropped if there are less than 6 discs in a column
  if(selectedColumn.childElementCount < 6){
  //Add the disc to the column that is clicked
    selectedColumn.appendChild(piece);
  }
  //Use slice to select the last element of the string and convert the column's id to a number with Number()
  let columnIndex = Number(selectedColumn.id.slice(-1))
  //This function will match the Connect Four board's coordinates to the array's when a disc is dropped
  function updateGameboard() {
    //Backwards 
      //1.Instead of putting an item on the top of the array, it will put an item on the bottom of the array
      //2.The gameModel will be filled with discs until 0,0
      //3.Once a row is filled, the row above it will be next because the array is starting at 5 (5,4,3,2,1,0)
    for (let row = gameModel.length - 1; row >= 0; row--) {
      //If there is no item in an array, then add the item 1 or 2 corresponding the player's turn
      if (gameModel[row][columnIndex] === 0) {
        gameModel[row][columnIndex] = turn;
        break;
      }
    }
  }
  updateGameboard();

  createTurn();

  winVertical(gameModel);
  winHorizontal(gameModel);
  winDiagonalDownLeft(gameModel);
  winDiagonalDownRight(gameModel);
  tieGame();
}
//A Tie Game alert will pop up once all columns are filled with discs
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
  //Loop four rows
  for (let row = 0; row < 3; row++) {
    //For each row, a loop for a column
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

const winDiagonalDownLeft = function(gameboard){
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < gameboard[row].length; col++) {
      //Start from the top disc, go down a row, then to the left
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
      //Start from the top disc, go down a row, then to the right
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

tower1.addEventListener("click", playGame);
tower2.addEventListener("click", playGame);
tower3.addEventListener("click", playGame);
tower4.addEventListener("click", playGame);
tower5.addEventListener("click", playGame);
tower6.addEventListener("click", playGame);
tower7.addEventListener("click", playGame);