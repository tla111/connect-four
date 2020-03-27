Development Plan
  - Tim La

1. Build a 7x6 grid to display the gameboard

  A. The color of the board will be yellow with a white background to depict a perpendicular playing table

    - Design the gameboard with divs likes the Tower of Hanoi

2. Have a column not attached to the gameboard to hold the 42 game pieces (21 Red/21 Black)

  A. The column will stack the game pieces on top of each other one color after the other to toggle between player 1 and player 2

  - Create black game pieces for player 1
  - Create red game pieces for player 2

3. Construct the gameboard to check for win and tie results

  A. Alert the players that a player wins when they get four of their game pieces in a row vertically, horizontal, and diagonally

    - Create functions of winning conditions 

  B. Alert the players the game is tied when the board is filled with 42 game pieces

    - if(node.childElementCount === 6){alert("The colummn is full")} //Column on game board
    - if each column is full{alert("There is no more game pieces to use. Tie Game!")}
  