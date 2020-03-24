let player1 = document.querySelector("#playerOne");
let player2 = document.querySelector("#playerTwo");
let colOne = document.querySelector("#columnOne");

let mode = "pickUp";
let columnMove;
let gamePiece;
let counter;

// function moveToColumnOne(event){
//   if(mode === "pickUp"){
//     columnMove = event.currentTarget;
//     gamePiece = columnMove.firstElementChild;
//     mode = "drop";
//     return mode, columnMove, gamePiece;
//   }
//   if(mode === "drop"){
//     let selectedColumn = event.currentTarget;
//     if(selectedColumn.childElementCount === 6){
//       selectedColumn = selectedColumn.lastElementChild;
//       selectedColumn = selectedColumn.className = " square fill";
//       mode = "pickUp";
//     }
//   }
// }

player1.addEventListener("click", moveToColumnOne);
player2.addEventListener("click", moveToColumnOne);
colOne.addEventListener("click", moveToColumnOne);