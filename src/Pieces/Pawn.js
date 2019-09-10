import Piece from './Piece';

export default class Pawn extends Piece {

  constructor(playerNum) {              //white pawn (1)    //black pawn (2)
    super('Pawn', playerNum, (playerNum === 1) ? 'https://cdn1.iconfinder.com/data/icons/chess-20/68/pawn_white-512.png' : 'https://static.thenounproject.com/png/692778-200.png')
    this.initialMove = true;
    this.isPassant = false; 
  }

  isMovePossible(yPos, xPos, yDest, xDest, isDestOccupied) {

    if (this.playerNum === 1) { //player 1 pawn (going down)
      console.log('yPos', yPos, 'xPos', xPos, 'yDest', yDest, 'xDest', xDest);

      if (isDestOccupied) {
        return (yDest - yPos === 1 && Math.abs(xPos - xDest) === 1);
      }

      else { //dest is not occupied
        if (this.initialMove) {

          this.initialMove = false;
          return yDest - yPos <= 2 && xPos === xDest;
        }
        return yDest - yPos === 1 && xPos === xDest;
      }


    } else if (this.playerNum === 2) { //player 2 pawn (going up)
      console.log('yPos', yPos, 'xPos', xPos, 'yDest', yDest, 'xDest', xDest);

      if (isDestOccupied) {
        return (yPos - yDest === 1 && Math.abs(xPos - xDest) === 1);
      }

      else {
        if (this.initialMove) {

          this.initialMove = false;
          return yPos - yDest <= 2 && xPos - xDest === 0;
        }

        return yPos - yDest === 1 && xPos - xDest === 0;
      }

    }
  }

  passantArr(yPos, xPos, yDest, playerNum) {
    if (Math.abs(yPos - yDest) === 2) {
      if (playerNum === 1) {
        return [yPos + 1, xPos];

      }
      if (playerNum === 2) {
        return [yPos - 1, xPos];
      }
    }

    return [];
  }

  allMovesToDestination(yPos, xPos, yDest, xDest, isDestOccupied) {

    let movesArr = [];

    if (Math.abs(yDest - yPos) === 2) {
      console.log('middlePos', [yPos - ((yPos - yDest) / 2), xPos])
      movesArr.push([yPos - ((yPos - yDest) / 2), xPos]);
    }

    return movesArr;
  }


}
