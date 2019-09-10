import React, { Component } from 'react';

export default class ChessTile extends Component {
  render() {

    const { y, x } = this.props.id;

    return (
        <button
          className={this.props.tileColor}
          onClick={() => this.props.onClick(y, x)}
          style={this.props.style}
        />
    )
  }
}
