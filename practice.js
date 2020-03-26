let boardModel = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [1, null, null, null, null, null, null],
  [1, null, null, null, null, null, null],
  [1, null, null, null, null, null, null],
  [, null, null, null, null, null, null]
]
let currentPlayer = 1

const winnerVertical = function (board) {

  for (let row = 0; row < 3; row++) {

      for (let col = 0; col < board[row].length; col++) {
          
          if ((board[row][col] === board[row + 1][col]) &&
              (board[row][col] === board[row + 2][col]) &&
              (board[row][col] === board[row + 3][col]) &&
              (board[row][col] !== null)) {
              // return board[row][col]
              console.log(board[row][col])
          }
      }
  }
  // return 1, 2, or null
  return 1;
}

winnerVertical();

const testWinnerVertical = function () {
  console.assert((winnerVertical([
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null]
  ]) === null), "Winner Vertical fails on empty board")
  console.assert((winnerVertical([
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [   1, null, null, null, null, null, null],
      [   1, null, null, null, null, null, null],
      [   1, null, null, null, null, null, null],
      [   1, null, null, null, null, null, null]
  ]) === 1), "Winner Vertical fails on col 0 player 1 win")
  console.assert((winnerVertical([
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [2, null, null, null, null, null, null],
      [2, null, null, null, null, null, null],
      [2, null, null, null, null, null, null],
      [2, null, null, null, null, null, null]
  ]) === 2), "Winner Vertical fails on col 0 player 2 win")
  console.assert((winnerVertical([
      [null, null, 2, null, null, null, null],
      [null, null, 1, null, null, null, null],
      [   2, null, 1, null, null, null, 1],
      [   1, null, 1, null, null, null, 1],
      [   2, null, 2, null, null, null, 1],
      [   2, null, 2, null, null, null, 1]
  ]) === 1), "Winner Vertical fails on col 6 player 1 win")
}
