let gameModel = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0]
]

let turn = "player1";
let playerOne = document.querySelector("#p1");
let playerTwo = document.querySelector("#p2");

function currentPlayer(){
  if(turn === "player1"){
    playerOne = playerOne.className = "playerTurn switch1";
  }
  else if(turn === "player2"){
    playerTwo = playerTwo.className = "playerTurn switch2";
  }
}
currentPlayer()

let tower1 = document.querySelector("#col1");

function insertDisk(event){
  selectTower = event.currentTarget;
  console.log(selectTower);
  
  let piece = document.createElement("div");
  piece.className = "disk";
  selectTower.appendChild(piece);
}

tower1.addEventListener("click", insertDisk);