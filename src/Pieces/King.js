import Piece from './Piece';

export default class King extends Piece {

  constructor(playerNum) {
    super('King', playerNum, (playerNum === 1 ? 'http://cliparts101.com/files/51/11D749ACD9ECE96C549084F8CEDCD6C6/White_King_Chess.png'
     : 'https://www.clipartmax.com/png/middle/289-2897061_king-black-chess-figure-game-play-piece-king-chess-piece-symbol.png'))
  }

  //returns true if our destination tile is valid, according to our piece
  isMovePossible(yPos, xPos, yDest, xDest) {
    return (Math.abs(yDest - yPos) === 1 && Math.abs(xDest - xPos) === 0) || //up and down
      (Math.abs(xDest - xPos) === 1 && Math.abs(yDest - yPos) === 0) || //left and right
      (Math.abs(xDest - xPos) === 1 && Math.abs(yDest - yPos) === 1) //diagonals
  }

  allMovesToDestination(yPos, xPos, yDest, xDest) {
    return [];
  }

}
