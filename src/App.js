import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Darren</h1>
        <Age age="24"></Age>
        <Sex sex="男"></Sex>
      </div>
    )
  }
}

function Sex(props) {
  return <h2>性别：{props.sex}</h2>
}

class Age extends React.Component {
  render() {
    return <h2>{this.props.age}</h2>
  }
}

export default App