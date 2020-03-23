let takeTurn = document.querySelector(".holdPieces")
let colOne = document.querySelector("#columnOne");
let colTwo = document.querySelector("#columnTwo");
let colThree = document.querySelector("#columnThree");
let colFour = document.querySelector("#columnFour");
let colFive = document.querySelector("#columnFive");
let colSix = document.querySelector("#columnSix");
let colSeven = document.querySelector("#columnSeven");

let mode = "pickUp"
let selectPieces;
let piece;

function moveToColumn(event){
  if(mode === "pickUp"){
    selectPieces = event.currentTarget;
    piece = selectPieces.lastElementChild;
    console.log(piece);
    mode = "drop";
    return selectPieces, piece, mode;
  }
  if(mode === "drop"){
    let columnDrop = event.currentTarget;
    columnDrop.appendChild(piece);
    mode = "pickUp"
  }
}

takeTurn.addEventListener("click", moveToColumn);
colOne.addEventListener("click", moveToColumn);
colTwo.addEventListener("click", moveToColumn);
