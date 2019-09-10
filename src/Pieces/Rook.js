import Piece from './Piece';

export default class Rook extends Piece {

  constructor(playerNum) {
    super('Rook', playerNum, (playerNum === 1 ? 'https://library.kissclipart.com/20180903/zhw/kissclipart-white-king-chess-png-clipart-chess-piece-king-3899e626e7c15249.jpg'
     : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdKVMRXEdZx4eWxZHiNpWjCDuyLv2rCvrxMLs1yh2UBbpE-6lQ')
    )
  }

  isMovePossible(yPos, xPos, yDest, xDest) {
    return Math.abs(yPos - yDest) === 0 || Math.abs(xPos - xDest) === 0;
  }

  allMovesToDestination(yPos, xPos, yDest, xDest) {

    var pathArr;

    if (yDest === yPos) { //horizontal (y is the same)
        xDest > xPos ? pathArr = this.horizontalMovesArr(xPos, xDest, yPos) : pathArr = this.horizontalMovesArr(xDest, xPos, yPos);
    } 
    else if (xDest === xPos) { //vertical (x is the same)
      yDest > yPos ? pathArr = this.verticalMovesArr(yPos, yDest, xPos) : pathArr = this.verticalMovesArr(yDest, yPos, xPos);
    }

    return pathArr; 
  }

  horizontalMovesArr(start, end, commonNum) {
    let path = [];

    for (let i = start + 1; i < end; i++) {
      path.push([commonNum, i])
    }

    return path; 
  }

  verticalMovesArr(start, end, commonNum) {
    let path = [];

    for (let i = start + 1; i < end; i++) {
      path.push([i, commonNum])
    }

    return path; 
  }

}