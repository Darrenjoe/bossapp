import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Darren</h1>
        <Age></Age>
      </div>
    )
  }
}
class Age extends React.Component {
  render() {
    const age = '24'
    return <h2>{age}</h2>
  }
}

export default App