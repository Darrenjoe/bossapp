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
  constructor(props) {
    super(props)
    this.state = {
      ages: [13, 24, 31, 16,]
    }
  }
  render() {
    return (
      <div>
        <h2>{this.props.age}</h2>
        <ul>
          {this.state.ages.map(v => {
            return <li key={v}>{v}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default App