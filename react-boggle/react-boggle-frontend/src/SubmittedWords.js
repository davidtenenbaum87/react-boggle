import React, { Component } from 'react';
import UUID from 'uuid';

class SubmittedWords extends Component {
  renderSubmittedWords = () => {
    return this.props.submittedWords.map(word => {
      return (
        <li key={UUID()}>{word}</li>
      )
    })
  }
  render() {
    return (
      <div className="submitted-words">
        <div className="my-words">My Words:</div>
        <div className="word-list">
          {this.renderSubmittedWords()}
        </div>
      </div>
    )
  }
}

export default SubmittedWords;
