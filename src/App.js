import React from 'react'
import {Button} from 'antd-mobile'

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
  addAge() {
    console.log('asd');
    this.setState({
      ages: [...this.state.ages, '18']
    })
  }
  render() {
    return (
      <div>
        <h2>{this.props.age}</h2>
        <Button type="primary" onClick={this.addAge}>Add Age</Button>
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