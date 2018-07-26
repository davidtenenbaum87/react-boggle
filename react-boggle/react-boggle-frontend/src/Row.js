import React, { Component } from 'react';
import Tile from './Tile.js';
import UUID from 'uuid';

class Row extends Component {

  renderTiles = () => {
    debugger;
    const tiles = [];
    for (let i = 0; i < 4; i++) {
      tiles.push(<Tile key={UUID()}/>)
    }
    return tiles;
  }

  render() {
    return (
      <div className="row">
        {this.renderTiles()}
      </div>
    )
  }
}

export default Row;
