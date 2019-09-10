import React, { Component } from 'react';
import initializeChessBoard from '../Helpers/initializeChessBoard';
import ChessBoard from './ChessBoard';
import { all } from 'q';

class ChessGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: initializeChessBoard(),
      currentPlayer: 1,
      turn: 'white',
      status: '',
      selectedPiece: -1,
      passantTiles: []
    }
    this.onClick = this.onClick.bind(this);
    console.log(this.state.board)
  }

  onClick(y, x) {

    const updatedBoard = [...this.state.board];

    if (this.state.selectedPiece === -1) { //if there is no selected piece
      if (!updatedBoard[y][x] || updatedBoard[y][x].playerNum !== this.state.currentPlayer) { //if the piece i'm clicking is invalid or wrong player
        this.setState(({ status: 'Please select a piece to move Player ' + this.state.currentPlayer + '. It is currently your turn ' }), () => console.log(this.state.status));
        // updatedBoard[y][x] ? delete updatedBoard[y][x].style.backgroundColor : updatedBoard[y][x].style.backgroundColor = null;
      }

      else { //if the piece i'm clicking is valid
        updatedBoard[y][x].style = { ...updatedBoard[y][x].style, backgroundColor: 'RGB(111,143,114)' }; //change piece background color to emerald

        this.setState(({
          status: "Please choose where to move your " + `${this.state.currentPlayer === 1 ? 'white ' : 'black '}` + updatedBoard[y][x].name,
          selectedPiece: [y, x, updatedBoard[y][x].name]
        }), () => console.log(this.state.status, this.state.selectedPiece, this.state.board[y][x]));
      }
    }
    else if (this.state.selectedPiece !== -1) { // there is already a selected piece
      if (updatedBoard[y][x] && updatedBoard[y][x].playerNum === this.state.currentPlayer) { //if we clicked on one of our own pieces
        this.setState({
          status: 'You tried capturing your own piece. Click another piece to move and choose a destination',
          selectedPiece: -1
        })
      }
      else { //let's move that piece, y, x refers to destination piece. TRY TO MOVE THE PIECE 
        const [selectedPieceY, selectedPieceX, selectedPieceName] = this.state.selectedPiece;
        const isPawn = selectedPieceName === 'Pawn';
        const isDestOccupied = updatedBoard[y][x] ? true : false; //important for pawns, because they can't capture in front of them
        const isMovePossible = updatedBoard[selectedPieceY][selectedPieceX].isMovePossible(selectedPieceY, selectedPieceX, y, x, isDestOccupied);
        const allMovesToDest = updatedBoard[selectedPieceY][selectedPieceX].allMovesToDestination(selectedPieceY, selectedPieceX, y, x, isDestOccupied);
        const isMoveLegal = allMovesToDest.every(move => updatedBoard[move[0]][move[1]] === null);
        console.log('moveIsPossible', isMovePossible, 'allMovesToDest', allMovesToDest, 'isMoveLegal', isMoveLegal);
        // updatedBoard[selectedPieceY][selectedPieceX].style = { ...updatedBoard[selectedPieceY][selectedPieceX].style };

        if (isPawn) {
          let passArr = updatedBoard[selectedPieceY][selectedPieceX].passantArr(selectedPieceY, selectedPieceX, y, this.state.currentPlayer);
          console.log('passArr', passArr);
          this.setState(st => ({ passantTiles: [...st.passantTiles, passArr] }), () => console.log('state passArr', this.state.passantTiles)); 
        }

        if (isMovePossible && isMoveLegal) {
          updatedBoard[y][x] = updatedBoard[selectedPieceY][selectedPieceX];
          updatedBoard[selectedPieceY][selectedPieceX] = null;
          let nextPlayer = this.state.currentPlayer === 1 ? 2 : 1;
          let turn = this.state.turn === 'white' ? 'black' : 'white';
          this.setState({
            board: updatedBoard,
            selectedPiece: -1,
            turn,
            status: '',
            currentPlayer: nextPlayer
          })
        }
        else {
          this.setState({
            status: 'This move is not possible, unfortunately. Please click a piece to move again',
            selectedPiece: -1
          })
        }
      }
    }

  }

  render() {
    return (
      <div className='game'>
        <div className='game-board'>
          <ChessBoard
            board={this.state.board}
            onClick={this.onClick}
          />
        </div>
      </div>
    )
  }
}

export default ChessGame;
