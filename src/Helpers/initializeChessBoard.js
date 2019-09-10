import King from '../Pieces/King';
import Pawn from '../Pieces/Pawn';
import Bishop from '../Pieces/Bishop';
import Knight from '../Pieces/Knight';
import Queen from '../Pieces/Queen';
import Rook from '../Pieces/Rook';


export default function initializeChessBoard() {
  const newBoard = Array(8).fill(0).map(arrRow => Array(8).fill(null));

  //white pawns
  newBoard[1] = newBoard[1].map(tile => new Pawn(1));
  newBoard[6] = newBoard[6].map(tile => new Pawn(2));

  //bishops
  newBoard[0][2] = new Bishop(1);
  newBoard[0][5] = new Bishop(1);

  newBoard[7][2] = new Bishop(2);
  newBoard[7][5] = new Bishop(2);

  // //knights
  newBoard[0][1] = new Knight(1);
  newBoard[0][6] = new Knight(1);
  
  newBoard[7][1] = new Knight(2);
  newBoard[7][6] = new Knight(2);

  // //rooks
  newBoard[0][0] = new Rook(1);
  newBoard[0][7] = new Rook(1);

  newBoard[7][0] = new Rook(2);
  newBoard[7][7] = new Rook(2);
  
  newBoard[0][4] = new King(1);   //white king
  newBoard[7][4] = new King(2);   //black king

  newBoard[0][3] = new Queen(1);
  newBoard[7][3] = new Queen(2);

  return newBoard;
}