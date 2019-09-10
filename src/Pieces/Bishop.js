import Piece from './Piece';

export default class Bishop extends Piece {

  constructor(playerNum) {
    super('Bishop', playerNum, (playerNum === 1 ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpDuP5ZnrMWrODHeebtdUup57Ka2wTzTvtFSWp3xBIrMIUkxR-Yw'
    : 'https://previews.123rf.com/images/skystorm/skystorm1102/skystorm110200002/8784272-chess-piece-bishop-in-front-of-white.jpg'))
  }

  isMovePossible(yPos, xPos, yDest, xDest) {
    return Math.abs(yDest - yPos) / Math.abs(xDest - xPos) === 1;
  }

  allMovesToDestination(yCurrent, xCurrent, yEnd, xEnd) {
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