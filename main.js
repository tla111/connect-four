//Used Randy's Demo and Lesson: Nested Arrays to Help Guide Me With This Project

let gameModel = [
  [0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 0]
]

let turn = "player1";
let playerOne = document.querySelector("#p1");
let playerTwo = document.querySelector("#p2");

let tower1 = document.querySelector("#col1");
let tower2 = document.querySelector("#col2");
let tower3 = document.querySelector("#col3");
let tower4 = document.querySelector("#col4");
let tower5 = document.querySelector("#col5");
let tower6 = document.querySelector("#col6");
let tower7 = document.querySelector("#col7");

function playGame(event) {
  let selectTower = event.currentTarget;

  if ((turn === "player1") && (selectTower.childElementCount < 6)) {
    playerTwo.className = "playerTurn switch2";
    playerOne.className = "blank";
    selectTower = event.currentTarget;
    let piece = document.createElement("div");
    piece.className = "diskBlack";
    selectTower.appendChild(piece);
    turn = "player2";
  }
  else if ((turn === "player2") && (selectTower.childElementCount < 6)) {
    playerOne.className = "playerTurn switch1";
    playerTwo.className = "blank";
    selectTower = event.currentTarget;
    let piece = document.createElement("div");
    piece.className = "diskRed";
    selectTower.appendChild(piece);
    turn = "player1";
  }
  tieGame();
}

tower1.addEventListener("click", playGame);
tower2.addEventListener("click", playGame);
tower3.addEventListener("click", playGame);
tower4.addEventListener("click", playGame);
tower5.addEventListener("click", playGame);
tower6.addEventListener("click", playGame);
tower7.addEventListener("click", playGame);

function tieGame(){
  if((tower1.childElementCount === 6) && 
    (tower2.childElementCount === 6) && 
    (tower3.childElementCount === 6) && 
    (tower4.childElementCount === 6) && 
    (tower5.childElementCount === 6) && 
    (tower6.childElementCount === 6) && 
    (tower7.childElementCount === 6))
    {
      setTimeout(function(){alert("Tie Game. Press OK to Restart Game");}, 200);
      setTimeout(function(){location.reload();}, 250);
  }
}

//Winning Game Conditions

const winVertical = function(gameboard){
  for(let row = 0; row < 3; row++){
    for(let col = 0; col < gameboard[row].length; col++){
      if((gameboard[row][col] === gameboard[row + 1][col]) &&
        (gameboard[row][col] === gameboard[row + 2][col]) &&
        (gameboard[row][col] === gameboard[row + 3][col]) &&
        (gameboard[row][col] != 0)){
          console.log("winner");
        }
    }
  }
  return 1
}
winVertical(gameModel);

const winHorizontal = function(gameboard){
  for(let col = 0; col < 3; col++){
    for(let row = 0; row < gameboard[col].length; row++){
      if((gameboard[col][row] === gameboard[col + 1][row]) &&
        (gameboard[col][row] === gameboard[col + 2][row]) &&
        (gameboard[col][row] === gameboard[col + 3][row]) &&
        (gameboard[col][row] != 0)){
          console.log("winner");
        }
    }
  }
  return 1
}
winHorizontal(gameModel);