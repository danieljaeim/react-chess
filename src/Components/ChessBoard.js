import React, { Component } from 'react';
import ChessTile from './ChessTile';

class ChessBoard extends Component {

  renderChessTile(y, x, tileColor) {
    return <ChessTile 
    key={[y, x]}
    id={[y, x]}
    piece = {this.props.board[y][x]}
    style = {this.props.board[y][x] ? this.props.board[y][x].style : null}
    tileColor = {tileColor}
    onClick = { () => this.props.onClick(y, x) }
    />
  }
  
  isEven(num) {
    return num % 2;
  }

  render() {
    const renderBoard = [];
    for (let y = 0; y < 8; y++) {
      const boardRow = [];
      for (let x = 0; x < 8; x++) {
        const tileColor = (this.isEven(y) && this.isEven(x)) || (!this.isEven(y) && !this.isEven(x)) ? 'square one' : ' square two';
        boardRow.push(this.renderChessTile(y, x, tileColor));
        // debugger;
      }
      renderBoard.push(boardRow);
    }
  
    return (
      <div>
        { renderBoard }
      </div>
    );
  }

}

export default ChessBoard;  