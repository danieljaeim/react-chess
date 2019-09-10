import Piece from './Piece';

export default class Knight extends Piece {

  constructor(playerNum) {
    super('Knight', playerNum, (playerNum === 1 ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yNd_W6spynPbeIIJmlBFQAozayBtemvUTKG1vbagML6SSwpE' 
    : 'https://rlv.zcache.com/black_knight_chess_card-r15aedc905fe24472b512cd7e70f918fa_xvuat_8byvr_540.jpg'))
  }

  isMovePossible(yPos, xPos, yDest, xDest) {
    return (Math.abs(yDest - yPos) === 1 && Math.abs(xDest - xPos) === 2) || (Math.abs(yDest - yPos) === 2 && Math.abs(xDest - xPos) === 1)
  }

  allMovesToDestination(yPos, xPos, yDest, xDest) {
    return [];
  }

}