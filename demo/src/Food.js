import React, { Component, Fragment } from 'react'
import './index.css'

class Food extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'Darren',
      list: ['干锅肥肠', '佛跳墙']
    }
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="editor">增加菜品:</label>
          <input id="editor" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
          <button onClick={this.addList.bind(this)}>增加菜单</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li 
                        key={index + item}
                        onClick={this.deleteItem.bind(this, index)}
                        dangerouslySetInnerHTML={{__html: item}}
                      ></li>
            })
          }
        </ul>
      </Fragment>
    )
  }

  inputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  deleteItem(index) {
    let list = this.state.list
    list.splice(index,1);
    this.setState({
      list: list
    })
  }
}

export default Food
