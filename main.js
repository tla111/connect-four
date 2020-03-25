let gameModel = [
  [0, 0, 0, 0, 0, 0, 0],
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

let tower1 = document.querySelector("#col1");
let tower2 = document.querySelector("#col2");
let tower3 = document.querySelector("#col3");
let tower4 = document.querySelector("#col4");
let tower5 = document.querySelector("#col5");
let tower6 = document.querySelector("#col6");
let tower7 = document.querySelector("#col7");

function insertDisk(event) {
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

tower1.addEventListener("click", insertDisk);
tower2.addEventListener("click", insertDisk);
tower3.addEventListener("click", insertDisk);
tower4.addEventListener("click", insertDisk);
tower5.addEventListener("click", insertDisk);
tower6.addEventListener("click", insertDisk);
tower7.addEventListener("click", insertDisk);

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