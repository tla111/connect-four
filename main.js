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

// function currentPlayer(){
//   if(turn === "player1"){
//     playerOne = playerOne.className = "playerTurn switch1";
//   }
//   else if(turn === "player2"){
//     playerTwo = playerTwo.className = "playerTurn switch2";
//   }
// }
// currentPlayer()


let tower1 = document.querySelector("#col1");
let tower2 = document.querySelector("#col2");
let tower3 = document.querySelector("#col3");
let tower4 = document.querySelector("#col4");
let tower5 = document.querySelector("#col5");
let tower6 = document.querySelector("#col6");
let tower7 = document.querySelector("#col7");

function insertDisk(event){
  let selectTower = event.currentTarget;

  if((turn === "player1") && (selectTower.childElementCount < 6)){
  
    selectTower = event.currentTarget;
    let piece = document.createElement("div");
    piece.className = "diskBlack";
    selectTower.appendChild(piece);
    turn = "player2";
  }
  else if ((turn === "player2") && (selectTower.childElementCount < 6)){
  
    selectTower = event.currentTarget;
    let piece = document.createElement("div");
    piece.className = "diskRed";
    selectTower.appendChild(piece);
    turn = "player1";
  }
}

tower1.addEventListener("click", insertDisk);
tower2.addEventListener("click", insertDisk);
tower3.addEventListener("click", insertDisk);
tower4.addEventListener("click", insertDisk);
tower5.addEventListener("click", insertDisk);
tower6.addEventListener("click", insertDisk);
tower7.addEventListener("click", insertDisk);



// if(selectTower.childElementCount < 6){
//   selectTower.appendChild(piece);
// }else{
//   alert("Column is Filled")
// }