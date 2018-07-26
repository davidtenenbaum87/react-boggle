import React, { Component } from 'react';
import Tile from './Tile.js';
import Button from './Button.js'
import SearchInput from './SearchInput.js'
import Timer from './Timer.js'

import SubmittedWords from './SubmittedWords.js'

import UUID from 'uuid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentBoard: ["D", "A", "V", "I", "D", "I", "S", "T", "H", "E", "B", "E", "S", "T", "!", "!"],
      possibleWords: [],
      searchInput: "",
      submittedWords: [],
      timer: 100,
    }
  }

  newGame = () => {
    const letters = ["R", "I", "F", "O", "B", "X", "I", "F", "E", "H", "E", "Y", "D", "E", "N", "O", "W", "S", "U", "T", "O", "K", "N", "D", "H", "M", "S", "R", "A", "O", "L", "U", "P", "E", "T", "S", "A", "C", "I", "T", "O", "A", "Y", "L", "G", "K", "U", "E", "Q", "B", "M", "J", "O", "A", "E", "H", "I", "S", "P", "N", "V", "E", "T", "I", "G", "N", "B", "A", "L", "I", "Y", "T", "E", "Z", "A", "V", "N", "D", "R", "A", "L", "E", "S", "C", "U", "W", "I", "L", "R", "G", "P", "A", "C", "E", "M", "D"];
    const currentBoard = [];
    for (let i = 0; i < 16; i++) {
      currentBoard.push(letters[Math.floor(Math.random() * letters.length) + 1])
    }
    fetch(`https://api.codebox.org.uk/boggle/${currentBoard.join("")}`)
      .then(res => res.json())
      .then(possibleWords =>
        this.setState({
          currentBoard,
          possibleWords,
          searchInput: "",
          submittedWords: [],
      }))
      this.populateBoard();
  }

  startTimer = () => {
    this.setState(prevState => ({
      timer: this.interval,
    }))
  }

  populateBoard = () => {
    const rows = this.createBoardRows();
    return rows.map(row => (
      <div key={UUID()} className="row">
        {row.map(tile => (
          <Tile key={UUID()} letter={tile} />
        ))}
      </div>
    ))
  }

  createBoardRows = () => {
    const rows = [];
    for (let i = 0; i < this.state.currentBoard.length; i+=4) {
      const row = this.state.currentBoard.slice(i, i+4);
      rows.push(row)
    }
    return rows
  }

  handleSearchChange = (event) => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  handleSearchInputSubmit = (event) => {
    if (event.which === 13) {
      event.preventDefault();
      const foundWord = this.state.possibleWords.find(word => {
        return word.toLowerCase() === this.state.searchInput
      })
      if (foundWord && !this.state.submittedWords.includes(foundWord)) {
        this.setState({
          submittedWords: [...this.state.submittedWords, foundWord],
          searchInput: "",
        },() => console.log(this.state))
      } else {
        this.setState({
          searchInput: "",
        })
      }
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="app">
        <h1>Boggle</h1>
        <div className="grid-submitted-words">
          <Timer timer={this.state.timer}/>
          <div className="grid">
            {this.populateBoard()}
          </div>
          <SubmittedWords submittedWords={this.state.submittedWords}/>
        </div>
          <div className="buttons">
            <Button newGame={this.newGame} name="New Game"/>
            <Button higeScores={this.higeScores} name="High Scores"/>
          </div>
        <SearchInput searchInput={this.state.searchInput} handleSearchChange={this.handleSearchChange} handleSearchInputSubmit={this.handleSearchInputSubmit}/>
      </div>
    )
  }

}

export default App;
