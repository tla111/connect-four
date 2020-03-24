let player1 = document.querySelector(".playerOne");
let player2 = document.querySelector(".playerTwo");
let colOne = document.querySelector("#columnOne");
let colTwo = document.querySelector("#columnTwo");
let colThree = document.querySelector("#columnThree");
let colFour = document.querySelector("#columnFour");
let colFive = document.querySelector("#columnFive");
let colSix = document.querySelector("#columnSix");
let colSeven = document.querySelector("#columnSeven");


let mode = "pickUp";
let column;
let gamePiece;

function moveToColumn(event){
  if(mode === "pickUp"){
    column = event.currentTarget;
    gamePiece = column.lastElementChild;
    console.log(column);
    
    mode = "drop";
    return mode, column, gamePiece;
  }
  if(mode === "drop"){
    let column = event.currentTarget;
    column.appendChild(gamePiece);
    mode = "pickUp";
  }
}

player1.addEventListener("click", moveToColumn);
player2.addEventListener("click", moveToColumn);
colOne.addEventListener("click", moveToColumn);
colTwo.addEventListener("click", moveToColumn);
colThree.addEventListener("click", moveToColumn);
colFour.addEventListener("click", moveToColumn);
colFive.addEventListener("click", moveToColumn);
colSix.addEventListener("click", moveToColumn);
colSeven.addEventListener("click", moveToColumn);