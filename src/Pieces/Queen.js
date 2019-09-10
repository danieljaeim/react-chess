import Piece from './Piece';

export default class Queen extends Piece {

  constructor(playerNum) {
    super('Queen', playerNum, (playerNum === 1 ? 'https://www.pinclipart.com/picdir/middle/65-658889_king-rubber-stamp-white-queen-chess-piece-png.png' 
    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_yv6lpbPdW8RWMF1_RQ_yESom1XWgbVPFb2Txxmvp5tpAaj6C'))
  }

  isMovePossible(yPos, xPos, yDest, xDest) {
    return Math.abs(yPos - yDest) === 0 || 
          Math.abs(xPos - xDest) === 0 ||
          Math.abs(yDest - yPos) / Math.abs(xDest - xPos) === 1;
  }

  allMovesToDestination(yPos, xPos, yDest, xDest) {

    var pathArr;

    if (yDest === yPos) { //horizontal (y is the same)
        xDest > xPos ? pathArr = this.horizontalMovesArr(xPos, xDest, yPos) : pathArr = this.horizontalMovesArr(xDest, xPos, yPos);
    } 
    else if (xDest === xPos) { //vertical (x is the same)
      yDest > yPos ? pathArr = this.verticalMovesArr(yPos, yDest, xPos) : pathArr = this.verticalMovesArr(yDest, yPos, xPos);
    }
    else {
      pathArr = this.diagMovesArr(yPos, xPos, yDest, xDest);
    }
    console.log(pathArr);
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

  diagMovesArr(yCurrent, xCurrent, yEnd, xEnd) {
    let path = [];
    let yCur = yCurrent; 
    let xCur = xCurrent; 
    let yE = yEnd; 
    let xE = xEnd;
  
    while (Math.abs(yE - yCur) !== 0 && Math.abs(xE - xCur) !== 0) {
      let yDiff = yE - yCur >= 0 ? 1 : -1;
      let xDiff = xE - yCur >= 0 ? 1 : -1;
  
      console.log('ycur', yCur, 'xcur', xCur, 'yE', yE, 'xE', xE);
  
      path.push([yCur, xCur]);
  
      yCur += yDiff;
      xCur += xDiff;
    }
  
    return path.slice(1);
  }

}