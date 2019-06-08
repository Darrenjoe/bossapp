import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <ul className="my-list">
        <li>{true?'Darren':'能能'}</li>
        <li>Hello World</li>
      </ul>
    )
  }
}

export default App