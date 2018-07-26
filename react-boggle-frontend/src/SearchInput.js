import React, { Component } from 'react';

class SearchInput extends Component {
  render() {
    return (
      <div className="search-input">
        <form onSubmit={this.props.handleWordSubmit}>
        <input
          type="text"
          value={this.props.searchInput}
          onChange={this.props.handleSearchChange}
          onKeyPress={(event) => this.props.handleSearchInputSubmit(event)}
        />
        </form>
      </div>
    )
  }

}

export default SearchInput;
